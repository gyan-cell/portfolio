import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { z } from "zod"
import getUser from "./utils/getUser"
import clientPromise from "./lib/mongo-db-adapter"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import User from "./models/userModel"
import Credentials from 'next-auth/providers/credentials';
import connectDb from "./utils/connectDb"
import { UserType } from "./types/user"


export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ session, token, user }) {
      try {
        const emailFinder = await session.user.email;
        const dbUser = await User.findOne({ email: emailFinder });
        if (dbUser) {
          session.user.id = dbUser._id.toString();
          session.user.role = dbUser.role;
          session.user.isVerified = dbUser.isVerified;
          session.user.image = dbUser.profileImage;
          session.user.name = dbUser.name;
          session.user.email = dbUser.email;
        }
        return session;
      } catch (error) {
        console.log("The Session Error", error);
        return session;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.isVerified = user.isVerified;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      try {
        await connectDb();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            provider: account?.provider,
            profileImage: user.image,
            isVerified: true,
            providerAccountId: account?.providerAccountId
          });
        } else {
          await User.findOneAndUpdate(
            { email: user.email },
            {
              $set: {
                name: user.name,
                profileImage: user.image,
                provider: account?.provider,
                isVerified: true,
                providerAccountId: account?.providerAccountId
              }
            }
          );
        }
        return true;
      } catch (error) {
        console.log("The Error In Callback", error);
        return false;
      }
    }
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET!,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password");
        }

        try {
          await connectDb();

          const user = await User.findOne({ email: credentials.email }).select("+password");

          if (!user) {
            throw new Error("No account found with this email");
          }

          if (!user.password) {
            throw new Error(`Please sign in with your ${user.provider} account`);
          }

          const isPasswordMatch = user.password;
          if (!isPasswordMatch) {
            throw new Error("Invalid email or password");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
            isVerified: user.isVerified,
            image: user.profileImage
          };

        } catch (error: any) {
          // Throw the error message directly
          throw new Error(error.message || "Authentication failed");
        }
      }
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
    error: "/auth/error", // Add this for custom error page
  },
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV === "development", // Add this for better debugging
})

