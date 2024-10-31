import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_ID!,
      clientSecret: process.env.NEXT_AUTH_GITHUB_SECRET!,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,
})
