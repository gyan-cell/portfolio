import NextAuth, { DefaultSession } from "next-auth"



declare module "next-auth" {
  interface User {
    id?: string;
    role?: string;
    isVerified?: boolean;
  }
}

// Extend next-auth session type
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
      isVerified: boolean;
    } & DefaultSession["user"]
  }
}

