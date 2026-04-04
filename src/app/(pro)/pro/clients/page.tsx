import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { ClientsContent } from "./ClientsContent";

export default async function ClientsPage() {
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

  const { data: clients } = await supabase
    .from("clients")
    .select("*")
    .eq("professional_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <ClientsContent professional={professional} clients={clients || []} />
  );
}
