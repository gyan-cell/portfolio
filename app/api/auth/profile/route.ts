// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { CreateUserInput, UpdateUserInput } from '@/types/user';
import connectDb from '@/utils/connectDb';
import User from '@/models/userModel';

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const body: CreateUserInput = await req.json();

    // Validate required fields
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    const user = await User.create(body);

    return NextResponse.json(
      { message: 'User created successfully', user: user.getPublicProfile() },
      { status: 201 }
    );

  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: err.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDb();

    const users = await User.find({}).select('-password');

    return NextResponse.json({ users });

  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: err.message || 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDb();

    const body: UpdateUserInput & { id: string } = await req.json();

    if (!body.id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndUpdate(
      body.id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: user.getPublicProfile() });

  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: err.message || 'Failed to update user' },
      { status: 500 }
    );
  }
}
