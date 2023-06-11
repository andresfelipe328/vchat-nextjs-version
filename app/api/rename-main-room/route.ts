import { NextResponse } from "next/server";

type MAINROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MAINROOM = await request.json();

  console.log("Editing", data.name, "'s name...");
  return NextResponse.json({
    message: "Changing main room name...",
    code: 202,
  });
}
