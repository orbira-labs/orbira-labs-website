"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useProContext } from "@/lib/pro/context";
import { useTests } from "@/lib/pro/hooks/useTests";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Button } from "@/components/pro/ui/Button";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton, StatCardSkeleton, ListItemSkeleton } from "@/components/pro/ui/Skeleton";
import { SendTestModal } from "@/components/pro/tests/SendTestModal";
import {
  FlaskConical,
  Send,
  CreditCard,
  Eye,
  Link2,
  Check,
} from "lucide-react";
import { formatDate } from "@/lib/pro/utils";
import { TEST_STATUSES } from "@/lib/pro/constants";
import { clsx } from "clsx";
import Link from "next/link";

export default function TestsPage() {
  const router = useRouter();
  const { creditBalance } = useProContext();
  const { tests, loading, refresh, completedCount } = useTests();

  const [showSendModal, setShowSendModal] = useState(false);
  const [copiedTestId, setCopiedTestId] = useState<string | null>(null);

  async function copyTestLinkById(token: string, testId: string) {
    const link = `${window.location.origin}/t/${token}`;
    await navigator.clipboard.writeText(link);
    setCopiedTestId(testId);
    toast.success("Link kopyalandı!");
    setTimeout(() => setCopiedTestId(null), 2000);
  }

  return (
    <>
      <TopBar title="Testler" />
      <SendTestModal
        open={showSendModal}
        onClose={() => setShowSendModal(false)}
        onSent={refresh}
      />
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
                <Button onClick={() => setShowSendModal(true)}>
                  <Send className="h-4 w-4" /> Test Gönder
                </Button>
              </div>

              {tests.length === 0 ? (
                <EmptyState
                  icon={FlaskConical}
                  title="Henüz test gönderilmemiş"
                  description="İlk testinizi bir danışanınıza gönderin"
                  actionLabel="Test Gönder"
                  onAction={() => setShowSendModal(true)}
                />
              ) : (
                <div className="space-y-3">
                  {tests.map((test) => {
                    const s = TEST_STATUSES.find((ts) => ts.id === test.status);
                    const isCompleted = test.status === "completed";
                    const isPending = test.status === "sent" || test.status === "started";
                    const isCopied = copiedTestId === test.id;
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
                          <div className="flex items-center gap-1.5">
                            <Badge variant={s?.color as "success" | "warning" | "info" | "danger" || "muted"} dot>
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
                                title="Test linkini kopyala"
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
                      </Card>
                    );
                  })}
                </div>
              )}
            </>
          )}

        </div>
      </main>
    </>
  );
}
