import { NextResponse } from "next/server";
import { connection, connectToDatabase } from "@/utils/database";
import mongoose from "mongoose";

export const GET = async () => {
  return NextResponse.json({ message: "INDEX API", status: 200 });
};
