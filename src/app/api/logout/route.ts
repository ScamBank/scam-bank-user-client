import { ROUTES } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const response = NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
  response.cookies.delete("guid");

  return response;
};
