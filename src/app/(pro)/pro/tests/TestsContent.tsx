"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { addDays } from "date-fns";
import { ProShell } from "@/components/pro/layout/ProShell";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Button } from "@/components/pro/ui/Button";
import { Modal } from "@/components/pro/ui/Modal";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import {
  FlaskConical,
  Send,
  CreditCard,
  CheckCircle2,
  Search,
  MessageCircle,
  Mail,
} from "lucide-react";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { formatDate, formatRelative, generateWhatsAppLink, buildTestMessage } from "@/lib/pro/utils";
import { TEST_STATUSES, PRO_CONFIG } from "@/lib/pro/constants";
import type { Professional, TestInvitation } from "@/lib/pro/types";
import { clsx } from "clsx";

interface TestsContentProps {
  professional: Professional | null;
  tests: (TestInvitation & { client: { first_name: string; last_name: string } | null })[];
  clients: { id: string; first_name: string; last_name: string; email: string | null; phone: string | null }[];
  creditBalance: number;
  completedCount: number;
}

type SendStep = "client" | "method" | "confirm";

export function TestsContent({
  professional,
  tests,
  clients,
  creditBalance,
  completedCount,
}: TestsContentProps) {
  const router = useRouter();
  const [showSendModal, setShowSendModal] = useState(false);
  const [step, setStep] = useState<SendStep>("client");
  const [selectedClientId, setSelectedClientId] = useState("");
  const [sendVia, setSendVia] = useState<"email" | "whatsapp">("email");
  const [clientSearch, setClientSearch] = useState("");
  const [sending, setSending] = useState(false);

  const selectedClient = clients.find((c) => c.id === selectedClientId);
  const filteredClients = clients.filter((c) =>
    `${c.first_name} ${c.last_name}`.toLowerCase().includes(clientSearch.toLowerCase())
  );

  function openSendModal() {
    setStep("client");
    setSelectedClientId("");
    setSendVia("email");
    setClientSearch("");
    setShowSendModal(true);
  }

  async function handleSend() {
    if (!selectedClient || !professional) return;

    if (creditBalance <= 0) {
      toast.error("Yeterli test krediniz yok");
      router.push("/pro/billing");
      return;
    }

    setSending(true);
    try {
      const supabase = createSupabase();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const token = nanoid(12);
      const testLink = `${window.location.origin}/t/${token}`;
      const message = buildTestMessage(
        selectedClient.first_name,
        `${professional.first_name} ${professional.last_name}`,
        testLink
      );

      const { error } = await supabase.from("test_invitations").insert({
        professional_id: user!.id,
        client_id: selectedClient.id,
        token,
        sent_via: sendVia,
        message_text: message,
        expires_at: addDays(new Date(), PRO_CONFIG.testExpiryDays).toISOString(),
      });

      if (error) {
        toast.error("Test gönderilemedi");
        return;
      }

      await supabase.from("credit_transactions").insert({
        professional_id: user!.id,
        invitation_id: null,
        amount: -1,
        balance_after: creditBalance - 1,
        type: "usage",
        description: `Test: ${selectedClient.first_name} ${selectedClient.last_name}`,
      });

      if (sendVia === "whatsapp" && selectedClient.phone) {
        const whatsappLink = generateWhatsAppLink(selectedClient.phone, message);
        window.open(whatsappLink, "_blank");
      }

      toast.success("Test gönderildi!");
      setShowSendModal(false);
      router.refresh();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSending(false);
    }
  }

  return (
    <ProShell professional={professional}>
      <TopBar title="Testler" professional={professional} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <Card padding="md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm text-pro-text-secondary">Kalan Test</p>
                <p className="text-2xl sm:text-3xl font-bold text-pro-text mt-1">{creditBalance}</p>
              </div>
              <div className="h-9 w-9 rounded-lg bg-pro-primary-light flex items-center justify-center">
                <FlaskConical className="h-4 w-4 text-pro-primary" />
              </div>
            </div>
            <Button size="sm" variant="accent" className="mt-3 w-full" onClick={() => router.push("/pro/billing")}>
              <CreditCard className="h-3.5 w-3.5" /> Satın Al
            </Button>
          </Card>
          <Card padding="md">
            <p className="text-xs sm:text-sm text-pro-text-secondary">Kullanılan</p>
            <p className="text-2xl sm:text-3xl font-bold text-pro-text mt-1">{tests.length}</p>
          </Card>
          <Card padding="md">
            <p className="text-xs sm:text-sm text-pro-text-secondary">Tamamlanan</p>
            <p className="text-2xl sm:text-3xl font-bold text-pro-text mt-1">{completedCount}</p>
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-pro-text">Test Geçmişi</h2>
          <Button onClick={openSendModal}>
            <Send className="h-4 w-4" /> Test Gönder
          </Button>
        </div>

        {tests.length === 0 ? (
          <EmptyState
            icon={FlaskConical}
            title="Henüz test gönderilmemiş"
            description="İlk testinizi bir danışanınıza gönderin"
            actionLabel="Test Gönder"
            onAction={openSendModal}
          />
        ) : (
          <div className="space-y-3">
            {tests.map((test) => {
              const s = TEST_STATUSES.find((ts) => ts.id === test.status);
              return (
                <Card key={test.id} padding="sm" hover>
                  <div className="flex items-center gap-3">
                    <Avatar
                      firstName={test.client?.first_name || "?"}
                      lastName={test.client?.last_name || ""}
                      size="sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-pro-text">
                        {test.client?.first_name} {test.client?.last_name}
                      </p>
                      <p className="text-xs text-pro-text-tertiary">
                        {formatDate(test.created_at)} · {test.sent_via === "email" ? "Email" : "WhatsApp"}
                      </p>
                    </div>
                    <Badge variant={s?.color as "success" | "warning" | "info" | "danger" || "muted"} dot>
                      {s?.label || test.status}
                    </Badge>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <Modal
          open={showSendModal}
          onClose={() => setShowSendModal(false)}
          title="Test Gönder"
          size="md"
        >
          {step === "client" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pro-text-tertiary" />
                <input
                  type="text"
                  placeholder="Danışan ara..."
                  value={clientSearch}
                  onChange={(e) => setClientSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary"
                />
              </div>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {filteredClients.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedClientId(c.id);
                      setStep("method");
                    }}
                    className={clsx(
                      "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                      selectedClientId === c.id
                        ? "bg-pro-primary-light"
                        : "hover:bg-pro-surface-alt"
                    )}
                  >
                    <Avatar firstName={c.first_name} lastName={c.last_name} size="sm" />
                    <div>
                      <p className="text-sm font-medium text-pro-text">
                        {c.first_name} {c.last_name}
                      </p>
                      <p className="text-xs text-pro-text-tertiary">
                        {c.email || c.phone || ""}
                      </p>
                    </div>
                  </button>
                ))}
                {filteredClients.length === 0 && (
                  <p className="text-sm text-pro-text-tertiary text-center py-8">
                    Danışan bulunamadı
                  </p>
                )}
              </div>
            </div>
          )}

          {step === "method" && selectedClient && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-pro-surface-alt rounded-lg">
                <Avatar firstName={selectedClient.first_name} lastName={selectedClient.last_name} size="sm" />
                <div>
                  <p className="text-sm font-medium text-pro-text">
                    {selectedClient.first_name} {selectedClient.last_name}
                  </p>
                </div>
                <button
                  onClick={() => setStep("client")}
                  className="ml-auto text-xs text-pro-primary hover:underline"
                >
                  Değiştir
                </button>
              </div>

              <p className="text-sm font-medium text-pro-text">Gönderim Yöntemi</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSendVia("email")}
                  className={clsx(
                    "flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors",
                    sendVia === "email"
                      ? "border-pro-primary bg-pro-primary-light"
                      : "border-pro-border hover:border-pro-border-strong"
                  )}
                >
                  <Mail className={clsx("h-6 w-6", sendVia === "email" ? "text-pro-primary" : "text-pro-text-tertiary")} />
                  <span className="text-sm font-medium text-pro-text">Email</span>
                </button>
                <button
                  onClick={() => setSendVia("whatsapp")}
                  disabled={!selectedClient.phone}
                  className={clsx(
                    "flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors",
                    !selectedClient.phone && "opacity-50 cursor-not-allowed",
                    sendVia === "whatsapp"
                      ? "border-pro-primary bg-pro-primary-light"
                      : "border-pro-border hover:border-pro-border-strong"
                  )}
                >
                  <MessageCircle className={clsx("h-6 w-6", sendVia === "whatsapp" ? "text-pro-primary" : "text-pro-text-tertiary")} />
                  <span className="text-sm font-medium text-pro-text">WhatsApp</span>
                  {!selectedClient.phone && (
                    <span className="text-[10px] text-pro-text-tertiary">Tel gerekli</span>
                  )}
                </button>
              </div>

              {creditBalance <= 0 && (
                <div className="p-3 bg-pro-danger-light rounded-lg">
                  <p className="text-sm text-pro-danger font-medium">Yeterli test krediniz yok</p>
                  <p className="text-xs text-pro-danger/70 mt-1">Bakiye sayfasından paket satın alabilirsiniz</p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" className="flex-1" onClick={() => setStep("client")}>
                  Geri
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleSend}
                  loading={sending}
                  disabled={creditBalance <= 0}
                >
                  <Send className="h-4 w-4" /> Gönder
                </Button>
              </div>
            </div>
          )}
        </Modal>
        </div>
      </main>
    </ProShell>
  );
}
