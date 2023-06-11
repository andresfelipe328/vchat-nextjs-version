import { NextResponse } from "next/server";

type USERNAME = {
  username: string;
};

export async function POST(request: Request) {
  const data: USERNAME = await request.json();

  console.log("Adding", data.username, "to friends...");
  return NextResponse.json({ message: "Adding new friend...", code: 202 });
}
