import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../utils/db";
import User from "../../../models/User";

connect();

export async function GET() {
  try {
    // Get all the users from the DB
    const user = await User.find();
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    // console.log("Error", error.message);
    return NextResponse.json(
      { result: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const userData = await req.json();
    const { name, phone, address, description, image } = userData;

    //check if user already exists
    const user = await User.findOne({ phone });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      name,
      phone,
      address,
      description,
      image,
    });

    const savedUser = await newUser.save();
    // console.log(savedUser);

    return NextResponse.json({
      message: "User added successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    // console.log("Error", error.message);
    return NextResponse.json(
      { result: "Error", error: error.message },
      { status: 500 }
    );
  }
}
