import { NextResponse } from "next/server";

type MINIROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MINIROOM = await request.json();

  console.log("Creating", data.name, "...");
  return NextResponse.json({ message: "Creating new room...", status: 200 });
}
