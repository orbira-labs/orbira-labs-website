import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_PRO_PATHS = [
  "/pro/auth/login",
  "/pro/auth/register",
  "/pro/auth/verify",
  "/pro/auth/callback",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProRoute = pathname.startsWith("/pro");
  const isTestRoute = pathname.startsWith("/t/");

  if (!isProRoute || isTestRoute) {
    return NextResponse.next();
  }

  const isPublicProPath = PUBLIC_PRO_PATHS.some((p) => pathname.startsWith(p));

  const hasAuthCookie = request.cookies.getAll().some(
    (c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
  );

  if (!hasAuthCookie && !isPublicProPath) {
    return NextResponse.redirect(new URL("/pro/auth/login", request.url));
  }

  if (hasAuthCookie && isPublicProPath && pathname !== "/pro/auth/callback") {
    return NextResponse.redirect(new URL("/pro/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pro/:path*"],
};
