import { createClient } from "@/lib/pro/supabase/server";
import { redirect, notFound } from "next/navigation";
import { ClientDetailContent } from "./ClientDetailContent";

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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

  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .eq("professional_id", user.id)
    .single();

  if (!client) notFound();

  const { data: notes } = await supabase
    .from("client_notes")
    .select("*")
    .eq("client_id", id)
    .order("created_at", { ascending: false });

  const { data: tests } = await supabase
    .from("test_invitations")
    .select("*")
    .eq("client_id", id)
    .order("created_at", { ascending: false });

  const { data: appointments } = await supabase
    .from("appointments")
    .select("*")
    .eq("client_id", id)
    .order("starts_at", { ascending: false });

  return (
    <ClientDetailContent
      professional={professional}
      client={client}
      notes={notes || []}
      tests={tests || []}
      appointments={appointments || []}
    />
  );
}
