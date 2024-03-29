import Project from "@/models/Project";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  const connection = await connectToDatabase();

  const projects = await Project.find({});

  return NextResponse.json({ data: projects, message: "Find All" });
};

export const POST = async (request) => {
  try {
    const connection = await connectToDatabase();

    const { name, description } = await request.json();

    const project = await Project.create({ name, description });

    return NextResponse.json(
      { data: project, message: "Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
