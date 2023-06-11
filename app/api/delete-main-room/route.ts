import { NextResponse } from "next/server";

type MAINROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MAINROOM = await request.json();

  console.log("Deleting", data.name, "...");
  return NextResponse.json({
    message: "Deleting main room...",
    code: 202,
  });
}
