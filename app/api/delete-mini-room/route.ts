import { NextResponse } from "next/server";

type MINIROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MINIROOM = await request.json();

  console.log("Deleting", data.name, "...");
  return NextResponse.json({
    message: "Deleting mini room...",
    code: 202,
  });
}
