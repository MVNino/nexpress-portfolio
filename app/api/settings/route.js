import Setting from "@/models/Setting";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const conn = await connectToDatabase();

  const settings = await Setting.find({});

  return NextResponse.json({ data: settings, message: "Find All" });
};

export const POST = async (request) => {
  try {
    const conn = await connectToDatabase();

    const { settingType, value } = await request.json();

    const setting = await Setting.create({
      settingType,
      value,
    });

    return NextResponse.json(
      { data: setting, message: "Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
