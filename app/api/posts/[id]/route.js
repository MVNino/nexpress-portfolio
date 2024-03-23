import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const post = await Post.findById({ _id: params.id });

  if (!post)
    return NextResponse.json({ message: "Post not found." }, { status: 404 });

  return NextResponse.json({ data: post, message: "Found One" });
};

export const PUT = async (request, { params }) => {
  try {
    const { title, description, content, isPublished } = await request.json();

    await Post.findByIdAndUpdate(params.id, {
      title,
      description,
      content,
      isPublished,
    });

    return NextResponse.json({ message: "Updated" });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  await Post.findByIdAndDelete(params.id);

  return NextResponse.json({ message: "Deleted" });
};