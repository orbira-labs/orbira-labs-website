"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useProContext } from "@/lib/pro/context";
import { useTests } from "@/lib/pro/hooks/useTests";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import { SendTestModal } from "@/components/pro/tests/SendTestModal";
import { FlaskConical, Eye, Link2, Check, CreditCard } from "lucide-react";
import { formatDate } from "@/lib/pro/utils";
import { TEST_STATUSES } from "@/lib/pro/constants";
import { clsx } from "clsx";
import Link from "next/link";

type Filter = "all" | "pending" | "completed";

export default function TestsPage() {
  const router = useRouter();
  const { creditBalance } = useProContext();
  const { tests, loading, refresh, completedCount } = useTests();
  const [showSendModal, setShowSendModal] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [copiedTestId, setCopiedTestId] = useState<string | null>(null);

  const filtered = tests.filter((t) => {
    if (filter === "pending") return t.status === "sent" || t.status === "started";
    if (filter === "completed") return t.status === "completed";
    return true;
  });

  async function copyTestLinkById(token: string, testId: string) {
    const link = `${window.location.origin}/t/${token}`;
    await navigator.clipboard.writeText(link);
    setCopiedTestId(testId);
    toast.success("Link kopyalandı!");
    setTimeout(() => setCopiedTestId(null), 2000);
  }

  return (
    <>
      <TopBar title="Analizler" />
      <SendTestModal
        open={showSendModal}
        onClose={() => setShowSendModal(false)}
        onSent={refresh}
      />
      <main className="flex-1 p-3 sm:p-5 lg:p-6">
        <div className="mx-auto max-w-6xl">
          {/* Main Container - like Ofisim */}
          <div className="bg-gradient-to-br from-[#5B7B6A]/20 to-[#5B7B6A]/8 rounded-2xl p-4 sm:p-5 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              <Card padding="md" variant="elevated">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-pro-text-secondary">Kalan Analiz</p>
                    <p className="text-2xl font-bold text-pro-primary mt-0.5">{creditBalance}</p>
                  </div>
                  <div className="h-9 w-9 rounded-lg bg-pro-primary-light flex items-center justify-center">
                    <FlaskConical className="h-4 w-4 text-pro-primary" />
                  </div>
                </div>
                <button
                  onClick={() => router.push("/pro/billing")}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium text-pro-accent hover:bg-pro-accent-light rounded-lg transition-colors"
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  Satın Al
                </button>
              </Card>
              <Card padding="md" variant="elevated">
                <p className="text-xs text-pro-text-secondary">Gönderilen</p>
                <p className="text-2xl font-bold text-pro-text mt-0.5">{tests.length}</p>
              </Card>
              <Card padding="md" variant="elevated">
                <p className="text-xs text-pro-text-secondary">Tamamlanan</p>
                <p className="text-2xl font-bold text-green-600 mt-0.5">{completedCount}</p>
              </Card>
            </div>

            {/* Analysis List Card */}
            <Card padding="lg" variant="elevated">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h2 className="font-semibold text-pro-text flex items-center gap-2">
                    <span className="h-4 w-0.5 rounded-full bg-pro-primary" />
                    Analiz Geçmişi
                  </h2>
                  <div className="flex gap-1 bg-pro-surface-alt rounded-lg p-1">
                    {(["all", "pending", "completed"] as Filter[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                          "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                          filter === f
                            ? "bg-pro-surface text-pro-text shadow-sm"
                            : "text-pro-text-secondary hover:text-pro-text"
                        )}
                      >
                        {f === "all" ? "Tümü" : f === "pending" ? "Bekleyen" : "Tamamlanan"}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setShowSendModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pro-primary hover:bg-pro-primary-hover text-white text-sm font-medium transition-all shadow-sm hover:shadow-md"
                >
                  <FlaskConical className="h-4 w-4" />
                  Analiz Gönder
                </button>
              </div>

              {/* Content */}
              {loading ? (
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                      <Skeleton className="h-6 w-20" />
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <EmptyState
                  icon={FlaskConical}
                  title={tests.length === 0 ? "Henüz analiz gönderilmemiş" : "Sonuç bulunamadı"}
                  description={tests.length === 0 ? "Danışanlarınıza analiz göndererek içgörüler elde edin" : "Farklı bir filtre deneyin"}
                  actionLabel={tests.length === 0 ? "Analiz Gönder" : undefined}
                  onAction={tests.length === 0 ? () => setShowSendModal(true) : undefined}
                />
              ) : (
                <div className="space-y-2">
                  {filtered.map((test) => {
                    const s = TEST_STATUSES.find((ts) => ts.id === test.status);
                    const isCompleted = test.status === "completed";
                    const isPending = test.status === "sent" || test.status === "started";
                    const isCopied = copiedTestId === test.id;

                    return (
                      <div
                        key={test.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt hover:bg-pro-surface-alt/80 transition-colors"
                      >
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
                          <Badge variant={s?.color as "success" | "warning" | "info" | "danger" || "muted"} size="sm" dot>
                            {s?.label || test.status}
                          </Badge>
                          {isPending && (
                            <button
                              onClick={() => copyTestLinkById(test.token, test.id)}
                              className={clsx(
                                "p-1.5 rounded-lg transition-colors",
                                isCopied
                                  ? "text-pro-success bg-pro-success-light"
                                  : "text-pro-text-tertiary hover:text-pro-primary hover:bg-pro-primary-light"
                              )}
                              title="Analiz linkini kopyala"
                            >
                              {isCopied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                            </button>
                          )}
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
                    );
                  })}
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
