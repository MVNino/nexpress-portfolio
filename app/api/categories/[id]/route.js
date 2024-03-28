import Category from "@/models/Category";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const connection = await connectToDatabase();

  const category = await Category.findById(params.id);

  if (!category)
    return NextResponse.json(
      { message: "Category not found!" },
      { status: 404 }
    );

  return NextResponse.json({ data: category, message: "Find One" });
};

export const PUT = async (request, { params }) => {
  try {
    const connection = await connectToDatabase();

    const { name } = request.json();

    await Category.findByIdAndUpdate(params.id, {
      name,
    });

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const connection = await connectToDatabase();

  await Category.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
};
