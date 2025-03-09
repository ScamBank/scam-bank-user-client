import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./utils/constants";

export const middleware = (req: NextRequest) => {
  const guid = req.cookies.get("guid")?.value;

  if (!guid) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/accounts:path*", "/credits:path*"],
};
