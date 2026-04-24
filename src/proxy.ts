import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Strip server version info that could fingerprint the stack
  response.headers.delete("Server");
  response.headers.delete("X-Powered-By");

  // Prevent caching of HTML pages — ensures fresh security headers on every visit
  const { pathname } = request.nextUrl;
  if (!pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff2?|ttf)$/)) {
    response.headers.set(
      "Cache-Control",
      "no-store, max-age=0"
    );
  }

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
