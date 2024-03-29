import Project from "@/models/Project";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const connection = await connectToDatabase();

  const project = await Project.findById(params.id);

  return NextResponse.json({ data: project, message: "Found" });
};

export const PUT = async (request, { params }) => {
  try {
    const connection = await connectToDatabase();

    const { name, description } = await request.json();

    await Project.findByIdAndUpdate(params.id, { name, description });

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const connection = await connectToDatabase();

    await Project.findByIdAndDelete(params.id);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
