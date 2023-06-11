import { NextResponse } from "next/server";

type Friend = {
  username: string;
};

export async function POST(request: Request) {
  const data: Friend = await request.json();

  console.log("Creating dm room with", data.username, "...");
  return NextResponse.json({ message: "Creating dm room...", code: 202 });
}
