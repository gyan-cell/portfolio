import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import getUser from "./utils/getUser"
import clientPromise from "./lib/mongo-db-adapter"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import User from "./models/userModel"
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashBoard = nextUrl.pathname === '/dashboard';
      if (isOnDashBoard) {
        if (isLoggedIn) return true;
        // return Response.redirect(new URL('/login', nextUrl));
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // return Response.redirect(new URL('/dashboard', nextUrl));
        return true
      }
      return true;
    },
    async session({ session, token, user }) {
      try {
        const dbUser = await User.findOne({ email: user.email });
        if (dbUser) {
          session.user = {
            ...session.user,
            id: dbUser._id.toHexString(),
            role: dbUser.role,
            isVerified: dbUser.isVerified
          }
        }
        return session
      } catch (error) {
        console.log("The Session Error", error)
        return session
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
        const existingUser = await User.findOne({ email: user.email })
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            provider: account?.provider,
            profileImage: user.image,
            isVerified: true,
            providerAccountId: account?.providerAccountId
          })
        }
        else {
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
        return true
      } catch (error) {
        console.log("The Error In CAllBack", error)
        return false
      }
    }
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET!,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com"
        },
        password: {
          label: "Password",
          type: "password"
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }


        // Find user and explicitly select password field
        const user = await User.findOne({ email: credentials.email })
          .select("+password");

        if (!user) {
          throw new Error("User not found");
        }

        // Check if user has a password (might not if they used OAuth)
        if (!user.password) {
          throw new Error("Please login with your OAuth provider");
        }

        // Compare passwords
        const isPasswordMatch = user.password

        if (!isPasswordMatch) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toHexString(),
          email: user.email,
          name: user.name,
          role: user.role,
          isVerified: user.isVerified,
          image: user.profileImage
        };
      },
    }),


  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  }
})
