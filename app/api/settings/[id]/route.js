import Setting from "@/models/Setting";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const conn = await connectToDatabase();
  const setting = await Setting.findById(params.id);

  if (!setting)
    return NextResponse.json(
      { message: "Setting not found!" },
      { status: 404 }
    );

  return NextResponse.json({ data: setting, message: "Find One" });
};

export const PUT = async (request, { params }) => {
  try {
    const conn = await connectToDatabase();

    const { settingType, value } = await request.json();

    await Setting.findByIdAndUpdate(params.id, { settingType, value });

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  await Setting.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
};
