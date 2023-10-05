import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectionStr } from "../../../utils/db";
import User from "../../../models/User";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const users = await User.find();
    await mongoose.connection.close();
    return NextResponse.json({ users });
  } catch (error) {
    // Handle errors gracefully
    console.error("Error:", error);
    return NextResponse.json(
      { result: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const userData = await req.json();

  await mongoose.connect(connectionStr);

  const newUser = new User(userData);
  const result = await newUser.save();
  return NextResponse.json({ result });
}
