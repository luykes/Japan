import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const validUser = process.env.AUTH_USER;
  const validPass = process.env.AUTH_PASS;
  const secret    = process.env.SESSION_SECRET;

  if (!validUser || !validPass || !secret) {
    return NextResponse.json(
      { error: "Auth not configured. Add AUTH_USER, AUTH_PASS, SESSION_SECRET to .env.local" },
      { status: 500 }
    );
  }

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("session", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
  return response;
}
