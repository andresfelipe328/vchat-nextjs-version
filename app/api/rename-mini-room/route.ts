import { NextResponse } from "next/server";

type MINIROOM = {
  name: string;
};

export async function POST(request: Request) {
  const data: MINIROOM = await request.json();

  console.log("Editing", data.name, "'s name...");
  return NextResponse.json({
    message: "Changing mini room name...",
    code: 202,
  });
}
