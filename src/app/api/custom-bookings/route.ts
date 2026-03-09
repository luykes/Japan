import { NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/jsonDb";

export type CustomBooking = {
  id: string;
  category: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  reference?: string;
  cost?: string;
  bookedVia?: string;
  notes?: string;
  createdAt: number;
};

const FILE = "custom-bookings.json";

export async function GET() {
  const data = readJsonFile<CustomBooking[]>(FILE, []);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.title || !body.category) {
    return NextResponse.json({ error: "title and category required" }, { status: 400 });
  }
  const data = readJsonFile<CustomBooking[]>(FILE, []);
  const newBooking: CustomBooking = {
    id: `custom-${Date.now()}`,
    createdAt: Date.now(),
    ...body,
  };
  data.push(newBooking);
  writeJsonFile(FILE, data);
  return NextResponse.json(newBooking);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const data = readJsonFile<CustomBooking[]>(FILE, []);
  writeJsonFile(FILE, data.filter((b) => b.id !== id));
  return NextResponse.json({ ok: true });
}
