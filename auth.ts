import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import getUser from "./utils/getUser"
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {

      const isLoggedIn = !!auth?.user;
      const isOnDashBoard = nextUrl.pathname === '/dashboard';
      if (isOnDashBoard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET!,
    }),
    Credentials({
      async authorize(credentials): Promise<any> {
        const passedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials)
        if (passedCredentials.success) {
          const { email, password } = passedCredentials.data;
          const user = getUser(email, password);
          if (user) {
            return user;
          };
          return null;
        }
        return null;
      }

    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
  }
})
