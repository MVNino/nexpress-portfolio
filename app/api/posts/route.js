import Post from "@/models/Post";
import Setting from "@/models/Setting";
import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const posts = await Post.find({});

  return NextResponse.json({ data: posts, message: "Find All" });
};

export const POST = async (request) => {
  try {
    const {
      title,
      description,
      content,
      isPublished = true,
    } = await request.json();

    const post = await Post.create({
      title,
      description,
      content,
      isPublished,
    });

    return NextResponse.json(
      { data: post, message: "Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "Error" },
      { status: 500 }
    );
  }
};
