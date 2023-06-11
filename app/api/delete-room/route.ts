import { NextResponse } from "next/server";

type ROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: ROOM = await request.json();

  console.log("Deleting", data.name, "...");
  return NextResponse.json({ message: "Deleting room...", status: 200 });
}
