import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { AppointmentsContent } from "./AppointmentsContent";

export default async function AppointmentsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/pro/auth/login");

  const [{ data: professional }, { data: appointments }, { data: clients }] =
    await Promise.all([
      supabase.from("professionals").select("*").eq("id", user.id).single(),
      supabase
        .from("appointments")
        .select("*, client:clients(first_name, last_name)")
        .eq("professional_id", user.id)
        .order("starts_at", { ascending: true }),
      supabase
        .from("clients")
        .select("id, first_name, last_name")
        .eq("professional_id", user.id)
        .eq("status", "active")
        .order("first_name"),
    ]);

  return (
    <AppointmentsContent
      professional={professional}
      appointments={appointments || []}
      clients={clients || []}
    />
  );
}
