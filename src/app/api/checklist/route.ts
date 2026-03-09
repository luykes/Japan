import { NextResponse } from "next/server";
import { readDB, writeDB } from "@/lib/db";

// GET /api/checklist — returns full state
export async function GET() {
  const data = readDB();
  return NextResponse.json(data);
}

// POST /api/checklist — toggle a single item
export async function POST(request: Request) {
  const { id, checked } = await request.json();
  if (typeof id !== "string" || typeof checked !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  const data = readDB();
  data[id] = checked;
  writeDB(data);
  return NextResponse.json({ ok: true });
}
