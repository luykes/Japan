import { NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/jsonDb";

export type WishlistItem = {
  id: string;
  kid: "Kaylene" | "Kayleb";
  text: string;
  createdAt: number;
};

const FILE = "wishlist.json";

export async function GET() {
  const data = readJsonFile<WishlistItem[]>(FILE, []);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { kid, text } = await request.json();
  if (!kid || !text?.trim()) {
    return NextResponse.json({ error: "kid and text required" }, { status: 400 });
  }
  const data = readJsonFile<WishlistItem[]>(FILE, []);
  const item: WishlistItem = {
    id: `wish-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    kid,
    text: text.trim(),
    createdAt: Date.now(),
  };
  data.push(item);
  writeJsonFile(FILE, data);
  return NextResponse.json(item);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const data = readJsonFile<WishlistItem[]>(FILE, []);
  writeJsonFile(FILE, data.filter((i) => i.id !== id));
  return NextResponse.json({ ok: true });
}
