import User from "@/models/userModel";
import connectDb from "@/utils/connectDb";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDb();

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User Does Not Exist" },
        { status: 400 }
      );
    }

    // Hash password

    const userPassword = existingUser.password;
    if (!userPassword) {
      return NextResponse.json(
        { error: `Please Login With ${existingUser.provider} ` },
        { status: 400 }
      );
    }

    if (existingUser.password === password) {


      return NextResponse.json(
        {
          message: "User logged in successfully",
          user: {
            id: existingUser._id.toHexString(),
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            isVerified: existingUser.isVerified
          }
        },
        { status: 201 }
      );
    }
    else {
      return NextResponse.json(
        { error: "Incorrect Password" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Error While Logging In" },
      { status: 500 }
    );
  }
}

