import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { ProProvider } from "@/lib/pro/context";
import { ProShell } from "@/components/pro/layout/ProShell";

async function getSessionData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const [{ data: professional }, { data: credits }] = await Promise.all([
    supabase.from("professionals").select("*").eq("id", user.id).single(),
    supabase.rpc("get_credit_balance", { p_professional_id: user.id }),
  ]);

  return { user, professional, credits };
}

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await getSessionData();

  if (!sessionData) {
    redirect("/pro/auth/login");
  }

  const { professional, credits } = sessionData;

  if (!professional?.onboarding_completed) {
    redirect("/pro/onboarding");
  }

  return (
    <ProProvider
      initialProfessional={professional}
      initialCredits={credits || 0}
    >
      <ProShell>{children}</ProShell>
    </ProProvider>
  );
}
