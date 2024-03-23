import Setting from "@/models/Setting";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const settings = await Setting.find({});

  return NextResponse.json({ data: settings, message: "Find All" });
};

export const POST = async (request) => {
  try {
    const { settingType, value } = await request.json();

    await Setting.create({
      settingType,
      value,
    });

    return NextResponse.json({ message: "Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
