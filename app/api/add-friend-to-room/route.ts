import { NextResponse } from "next/server";

type USERNAME = {
  username: string;
};

export async function POST(request: Request) {
  const data: USERNAME = await request.json();

  console.log("Adding", data.username, "to the room...");
  return NextResponse.json({
    message: "Adding new friend to the room...",
    status: 200,
  });
}
