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

  const isPublicProPath = PUBLIC_PRO_PATHS.some((p) => pathname.startsWith(p));

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
          });
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isPublicProPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/pro/auth/login";
    return NextResponse.redirect(url);
  }

  if (user && isPublicProPath) {
    const { data: profile } = await supabase
      .from("professionals")
      .select("onboarding_completed")
      .eq("id", user.id)
      .single();

    const url = request.nextUrl.clone();
    if (!profile || !profile.onboarding_completed) {
      url.pathname = "/pro/onboarding";
    } else {
      url.pathname = "/pro/dashboard";
    }
    return NextResponse.redirect(url);
  }

  if (user && !isPublicProPath && pathname !== "/pro/onboarding") {
    const { data: profile } = await supabase
      .from("professionals")
      .select("onboarding_completed")
      .eq("id", user.id)
      .single();

    if (!profile || !profile.onboarding_completed) {
      const url = request.nextUrl.clone();
      url.pathname = "/pro/onboarding";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/pro/:path*", "/t/:path*"],
};
