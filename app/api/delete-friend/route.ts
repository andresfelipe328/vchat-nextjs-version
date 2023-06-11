import { NextResponse } from "next/server";

type Friend = {
  username: string;
};

export async function POST(request: Request) {
  const data: Friend = await request.json();

  console.log("Deleting", data.username, "...");
  return NextResponse.json({
    message: "Deleting friend...",
    status: 200,
  });
}
