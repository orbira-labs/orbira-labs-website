import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { TestsContent } from "./TestsContent";

export default async function TestsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/pro/auth/login");

  const [
    { data: professional },
    { data: tests },
    { data: balance },
    { data: clients },
  ] = await Promise.all([
    supabase.from("professionals").select("*").eq("id", user.id).single(),
    supabase
      .from("test_invitations")
      .select("*, client:clients(first_name, last_name)")
      .eq("professional_id", user.id)
      .order("created_at", { ascending: false }),
    supabase.rpc("get_credit_balance", { p_professional_id: user.id }),
    supabase
      .from("clients")
      .select("id, first_name, last_name, email, phone")
      .eq("professional_id", user.id)
      .eq("status", "active")
      .order("first_name"),
  ]);

  const completedCount = (tests || []).filter(
    (t) => t.status === "completed"
  ).length;

  return (
    <TestsContent
      professional={professional}
      tests={tests || []}
      clients={clients || []}
      creditBalance={balance || 0}
      completedCount={completedCount}
    />
  );
}
