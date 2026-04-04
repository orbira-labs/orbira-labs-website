import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { BillingContent } from "./BillingContent";

export default async function BillingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/pro/auth/login");

  const { data: professional } = await supabase
    .from("professionals")
    .select("*")
    .eq("id", user.id)
    .single();

  const balance = await supabase.rpc("get_credit_balance", {
    p_professional_id: user.id,
  });

  const { data: packages } = await supabase
    .from("credit_packages")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  const { data: transactions } = await supabase
    .from("credit_transactions")
    .select("*")
    .eq("professional_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <BillingContent
      professional={professional}
      creditBalance={balance.data || 0}
      packages={packages || []}
      transactions={transactions || []}
    />
  );
}
