import { NextResponse } from "next/server";

type MAINROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MAINROOM = await request.json();

  console.log("Creating", data.name, "to room...");
  return NextResponse.json({ message: "Creating new main room...", code: 202 });
}
