import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log(request); // we need NextRequest to prevent caching
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Joe" },
    { id: 4, name: "Jill" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  return NextResponse.json({ ...body, id: 5 } , { status: 201 });
}
