import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { DashboardContent } from "./DashboardContent";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/pro/auth/login");

  const [
    { data: professional },
    { data: stats },
    { data: upcomingAppointments },
    { data: recentTests },
  ] = await Promise.all([
    supabase.from("professionals").select("*").eq("id", user.id).single(),
    supabase.rpc("get_dashboard_stats", { p_professional_id: user.id }),
    supabase
      .from("appointments")
      .select("*, client:clients(first_name, last_name)")
      .eq("professional_id", user.id)
      .eq("status", "scheduled")
      .gte("starts_at", new Date().toISOString())
      .order("starts_at", { ascending: true })
      .limit(5),
    supabase
      .from("test_invitations")
      .select("*, client:clients(first_name, last_name)")
      .eq("professional_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  return (
    <DashboardContent
      professional={professional}
      stats={stats || { total_clients: 0, todays_appointments: 0, remaining_tests: 0, completed_tests: 0 }}
      upcomingAppointments={upcomingAppointments || []}
      recentTests={recentTests || []}
    />
  );
}
