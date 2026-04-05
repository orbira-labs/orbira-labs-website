import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_PRO_PATHS = [
  "/pro/auth/login",
  "/pro/auth/register",
  "/pro/auth/verify",
  "/pro/auth/callback",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProRoute = pathname.startsWith("/pro");
  const isTestRoute = pathname.startsWith("/t/");

  if (!isProRoute || isTestRoute) {
    return NextResponse.next();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const isPublicProPath = PUBLIC_PRO_PATHS.some((p) => pathname.startsWith(p));

  if (!supabaseUrl || !supabaseKey) {
    if (isPublicProPath) return NextResponse.next();
    return NextResponse.redirect(new URL("/pro/auth/login", request.url));
  }

  const hasAuthCookie = request.cookies.getAll().some(
    (c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
  );

  if (!hasAuthCookie && !isPublicProPath) {
    return NextResponse.redirect(new URL("/pro/auth/login", request.url));
  }

  if (hasAuthCookie && isPublicProPath && pathname !== "/pro/auth/callback") {
    return NextResponse.redirect(new URL("/pro/dashboard", request.url));
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    db: { schema: "pro" },
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
      },
    },
  });

  await supabase.auth.getSession();

  return supabaseResponse;
}

export const config = {
  matcher: ["/pro/:path*", "/t/:path*"],
};
