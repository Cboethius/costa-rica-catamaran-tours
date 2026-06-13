import { NextResponse } from "next/server";
import { adminSessionCookieValue, ADMIN_COOKIE, verifyAdminPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  if (!verifyAdminPassword(body.password ?? "")) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const token = adminSessionCookieValue();
  if (!token) {
    return NextResponse.json({ error: "Admin not configured." }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
