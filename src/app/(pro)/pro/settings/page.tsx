import { createClient } from "@/lib/pro/supabase/server";
import { redirect } from "next/navigation";
import { SettingsContent } from "./SettingsContent";

export default async function SettingsPage() {
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

  return <SettingsContent professional={professional} />;
}
