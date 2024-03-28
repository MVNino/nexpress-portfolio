import Category from "@/models/Category";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const connection = await connectToDatabase();

  const categories = await Category.find({});

  return NextResponse.json({ data: categories, message: "Find All" });
};

export const POST = async (request) => {
  try {
    const connection = await connectToDatabase();

    const { name } = await request.json();

    const category = await Category.create({ name });

    return NextResponse.json(
      { data: category, message: "Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
