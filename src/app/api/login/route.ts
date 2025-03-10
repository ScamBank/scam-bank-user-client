import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { guid } = await req.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set("guid", guid, {
    secure: false,
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
};
