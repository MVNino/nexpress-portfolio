import { NextResponse } from "next/server";
import { connection, connectToDatabase } from "@/utils/database";
import mongoose from "mongoose";

export const GET = async () => {
  const conn = await connectToDatabase();

  return NextResponse.json({ message: "INDEX PAGE HERE", status: 200 });
};
