import { Document } from "mongoose"

export interface UserType extends Document {
  name: string,
  email: string,
  password: string,
  role: 'admin' | 'user',
  profileImg?: string,
  createdAt: Date,
  updatedAt: Date,
  getPublicProfile: () => Omit<UserType, 'password'>
}


export type CreateUserInput = Pick<UserType, 'name' | 'email' | 'password'>;
export type UpdateUserInput = Partial<CreateUserInput>;
