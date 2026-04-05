"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { addDays } from "date-fns";
import { useProContext } from "@/lib/pro/context";
import { useTests } from "@/lib/pro/hooks/useTests";
import { useClients } from "@/lib/pro/hooks/useClients";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Button } from "@/components/pro/ui/Button";
import { Modal } from "@/components/pro/ui/Modal";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton, StatCardSkeleton, ListItemSkeleton } from "@/components/pro/ui/Skeleton";
import {
  FlaskConical,
  Send,
  CreditCard,
  Search,
  MessageCircle,
  Mail,
  UserPlus,
  Users,
  Eye,
} from "lucide-react";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { formatDate, generateWhatsAppLink, buildTestMessage } from "@/lib/pro/utils";
import { TEST_STATUSES, PRO_CONFIG } from "@/lib/pro/constants";
import { clsx } from "clsx";
import Link from "next/link";

type SendStep = "client" | "method" | "save_prompt";
type ClientMode = "existing" | "new";

export default function TestsPage() {
  const router = useRouter();
  const { professional, creditBalance, refreshCredits } = useProContext();
  const { tests, loading, refresh, completedCount } = useTests();
  const { clients, refresh: refreshClients } = useClients();

  const [showSendModal, setShowSendModal] = useState(false);
  const [step, setStep] = useState<SendStep>("client");
  const [clientMode, setClientMode] = useState<ClientMode>("existing");
  const [selectedClientId, setSelectedClientId] = useState("");
  const [sendVia, setSendVia] = useState<"email" | "whatsapp">("email");
  const [clientSearch, setClientSearch] = useState("");
  const [sending, setSending] = useState(false);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newClientId, setNewClientId] = useState<string | null>(null);

  const selectedClient = clients.find((c) => c.id === selectedClientId);
  const filteredClients = clients.filter((c) =>
    `${c.first_name} ${c.last_name}`.toLowerCase().includes(clientSearch.toLowerCase())
  );

  const effectiveClientName = clientMode === "existing" && selectedClient
    ? { first: selectedClient.first_name, last: selectedClient.last_name }
    : { first: newFirstName, last: newLastName };

  const effectiveClientEmail = clientMode === "existing" && selectedClient
    ? selectedClient.email
    : newEmail.trim() || null;

  function openSendModal() {
    setStep("client");
    setClientMode("existing");
    setSelectedClientId("");
    setSendVia("email");
    setClientSearch("");
    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    setNewClientId(null);
    setShowSendModal(true);
  }

  async function handleSend() {
    if (!professional) return;

    const hasClient = clientMode === "existing" ? !!selectedClient : (newFirstName.trim() && newLastName.trim());
    if (!hasClient) return;

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

      let clientId: string;
      let firstName: string;
      let lastName: string;

      let clientEmail: string | null = null;

      if (clientMode === "existing" && selectedClient) {
        clientId = selectedClient.id;
        firstName = selectedClient.first_name;
        lastName = selectedClient.last_name;
        clientEmail = selectedClient.email;
      } else {
        const { data: newClient, error: clientError } = await supabase
          .from("clients")
          .insert({
            professional_id: user!.id,
            first_name: newFirstName.trim(),
            last_name: newLastName.trim(),
            email: newEmail.trim() || null,
            status: "active",
          })
          .select()
          .single();

        if (clientError || !newClient) {
          toast.error("Danışan oluşturulamadı");
          setSending(false);
          return;
        }

        clientId = newClient.id;
        firstName = newClient.first_name;
        lastName = newClient.last_name;
        clientEmail = newClient.email;
        setNewClientId(newClient.id);
      }

      const token = nanoid(12);
      const testLink = `${window.location.origin}/t/${token}`;
      const message = buildTestMessage(
        firstName,
        `${professional.first_name} ${professional.last_name}`,
        testLink
      );

      const { error } = await supabase.from("test_invitations").insert({
        professional_id: user!.id,
        client_id: clientId,
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
        description: `Test: ${firstName} ${lastName}`,
      });

      if (sendVia === "whatsapp") {
        const whatsappLink = generateWhatsAppLink("", message);
        window.open(whatsappLink, "_blank");
        toast.success("WhatsApp açıldı!");
      } else if (sendVia === "email" && clientEmail) {
        try {
          const emailRes = await fetch("/api/send-test-invitation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              clientEmail,
              clientName: `${firstName} ${lastName}`,
              professionalName: `${professional.first_name} ${professional.last_name}`,
              testLink,
            }),
          });

          if (!emailRes.ok) {
            const err = await emailRes.json();
            toast.error(err.error || "Email gönderilemedi");
          } else {
            toast.success("Email gönderildi!");
          }
        } catch {
          toast.error("Email gönderimi başarısız");
        }
      } else if (sendVia === "email" && !clientEmail) {
        toast.success("Test oluşturuldu! (Email adresi olmadığı için link kopyalandı)");
        navigator.clipboard.writeText(testLink);
      } else {
        toast.success("Test gönderildi!");
      }

      if (clientMode === "new") {
        setStep("save_prompt");
        refreshClients();
      } else {
        setShowSendModal(false);
      }

      refresh();
      refreshCredits();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <TopBar title="Testler" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {loading ? (
            <>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
              </div>
              <Skeleton className="h-10 w-full" />
              {[...Array(3)].map((_, i) => (
                <ListItemSkeleton key={i} />
              ))}
            </>
          ) : (
            <>
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
                    const isCompleted = test.status === "completed";
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
                          <div className="flex items-center gap-2">
                            <Badge variant={s?.color as "success" | "warning" | "info" | "danger" || "muted"} dot>
                              {s?.label || test.status}
                            </Badge>
                            {isCompleted && (
                              <Link
                                href={`/pro/tests/${test.id}`}
                                className="p-1.5 rounded-lg text-pro-primary hover:bg-pro-primary-light transition-colors"
                                title="Sonuçları Gör"
                              >
                                <Eye className="h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}
            </>
          )}

          <Modal
            open={showSendModal}
            onClose={() => setShowSendModal(false)}
            title="Test Gönder"
            size="md"
          >
            {step === "client" && (
              <div className="space-y-4">
                <div className="flex gap-2 p-1 bg-pro-surface-alt rounded-lg">
                  <button
                    onClick={() => setClientMode("existing")}
                    className={clsx(
                      "flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors",
                      clientMode === "existing"
                        ? "bg-pro-surface text-pro-text shadow-sm"
                        : "text-pro-text-secondary hover:text-pro-text"
                    )}
                  >
                    <Users className="h-4 w-4" />
                    Mevcut Danışan
                  </button>
                  <button
                    onClick={() => setClientMode("new")}
                    className={clsx(
                      "flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors",
                      clientMode === "new"
                        ? "bg-pro-surface text-pro-text shadow-sm"
                        : "text-pro-text-secondary hover:text-pro-text"
                    )}
                  >
                    <UserPlus className="h-4 w-4" />
                    Yeni İsim
                  </button>
                </div>

                {clientMode === "existing" ? (
                  <>
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
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-pro-text mb-1.5">Ad</label>
                        <input
                          type="text"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
                          placeholder="Danışan adı"
                          className="w-full px-4 py-2.5 rounded-lg border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-pro-text mb-1.5">Soyad</label>
                        <input
                          type="text"
                          value={newLastName}
                          onChange={(e) => setNewLastName(e.target.value)}
                          placeholder="Danışan soyadı"
                          className="w-full px-4 py-2.5 rounded-lg border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-pro-text mb-1.5">
                        E-posta <span className="text-pro-text-tertiary font-normal">(email ile göndermek için)</span>
                      </label>
                      <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="danisan@email.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary"
                      />
                    </div>
                    <Button
                      className="w-full mt-2"
                      onClick={() => setStep("method")}
                      disabled={!newFirstName.trim() || !newLastName.trim()}
                    >
                      Devam Et
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === "method" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-pro-surface-alt rounded-lg">
                  <Avatar firstName={effectiveClientName.first} lastName={effectiveClientName.last} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-pro-text">
                      {effectiveClientName.first} {effectiveClientName.last}
                    </p>
                    {clientMode === "new" && (
                      <p className="text-xs text-pro-text-tertiary">Yeni danışan olarak eklenecek</p>
                    )}
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
                    className={clsx(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors",
                      sendVia === "whatsapp"
                        ? "border-pro-primary bg-pro-primary-light"
                        : "border-pro-border hover:border-pro-border-strong"
                    )}
                  >
                    <MessageCircle className={clsx("h-6 w-6", sendVia === "whatsapp" ? "text-pro-primary" : "text-pro-text-tertiary")} />
                    <span className="text-sm font-medium text-pro-text">WhatsApp</span>
                  </button>
                </div>

                {sendVia === "email" && !effectiveClientEmail && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800 font-medium">Email adresi yok</p>
                    <p className="text-xs text-amber-700/80 mt-1">Test linki clipboard'a kopyalanacak. Manuel olarak göndermeniz gerekecek.</p>
                  </div>
                )}

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

            {step === "save_prompt" && newClientId && (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pro-text">Test Gönderildi!</h3>
                  <p className="text-sm text-pro-text-secondary mt-1">
                    {effectiveClientName.first} {effectiveClientName.last} için test linki oluşturuldu.
                  </p>
                </div>

                <div className="p-4 bg-pro-surface-alt rounded-xl">
                  <p className="text-sm text-pro-text mb-3">
                    Bu kişi danışan listenize eklendi. Detaylarını düzenlemek ister misiniz?
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="flex-1"
                      onClick={() => setShowSendModal(false)}
                    >
                      Şimdilik Değil
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => {
                        setShowSendModal(false);
                        router.push(`/pro/clients/${newClientId}`);
                      }}
                    >
                      Düzenle
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </main>
    </>
  );
}
