import { NextResponse } from "next/server";

type Friend = {
  username: string;
};

export async function POST(request: Request) {
  const data: Friend = await request.json();

  console.log("Calling", data.username, "...");
  return NextResponse.json({ message: "Calling friend...", code: 202 });
}
