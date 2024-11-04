import { Document, Types } from "mongoose"
import { DefaultSession } from "next-auth";

export interface UserType extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  profileImage?: string;
  isVerified: boolean;
  provider?: 'github' | 'google' | 'credentials';
  providerAccountId?: string;
  createdAt: Date;
  updatedAt: Date;
  getPublicProfile: () => Omit<UserType, 'password'>;

}


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


export type CreateUserInput = Pick<UserType, 'name' | 'email' | 'password'>;
export type UpdateUserInput = Partial<CreateUserInput>;
