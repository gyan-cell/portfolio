// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import connectDb from "@/utils/connectDb";
import User from "@/models/userModel";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDb();

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password

    // Create user
    const user = await User.create({
      name,
      email,
      password: password,
      provider: "credentials",
      isVerified: false // You might want to add email verification
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id.toHexString(),
          name: user.name,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Error registering user" },
      { status: 500 }
    );
  }
}
