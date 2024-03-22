import { NextResponse } from "next/server";
import connection from "@/utils/database";

export const GET = async () => {
await connection();

  return NextResponse.json({ message: "INDEX PAGE HERE", status: 200 });
};
