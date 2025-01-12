import connectDB, { disconnectDB } from "@/public/db";
import { NextResponse } from "next/server";
import RoomModel from "@/models/RoomModel";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    // Connect to the database
    await connectDB();

    // Get email from query parameters
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const rid = searchParams.get("room");
    console.log("the rid id ", rid);
    if (!rid) {
      console.log("no rid is present");

      return NextResponse.json(
        { message: "id parameter is required" },
        { status: 400 }
      );
    }
    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(rid);
    } catch (err) {
      console.log("catched the error in converting the type ", err.message);
      return NextResponse.json(
        { message: "Invalid room ID format" },
        { status: 400 }
      );
    }

    // Find the user in the database
    const rooms = await RoomModel.findOne({ _id: objectId });
    // console.log(rooms);

    if (rooms) {
      console.log(rooms);
      return NextResponse.json(rooms, { status: 200 });
    } else {
      console.log("the error is in not found of data");
      return NextResponse.json(
        { message: "No rooms found in this city" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.log("Error occurred:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    // Disconnect from the database
    await disconnectDB();
  }
}
