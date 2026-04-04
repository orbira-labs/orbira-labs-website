import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { ProProvider } from "@/lib/pro/context";
import { ProShell } from "@/components/pro/layout/ProShell";

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/pro/auth/login");

  const [{ data: professional }, { data: credits }] = await Promise.all([
    supabase.from("professionals").select("*").eq("id", user.id).single(),
    supabase.rpc("get_credit_balance", { p_professional_id: user.id }),
  ]);

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
