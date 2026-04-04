"use client";

import { useProContext } from "@/lib/pro/context";
import { useTransactions } from "@/lib/pro/hooks/useTransactions";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Button } from "@/components/pro/ui/Button";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton, StatCardSkeleton, ListItemSkeleton } from "@/components/pro/ui/Skeleton";
import { CreditCard, FlaskConical, Check, Clock } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/pro/utils";
import { clsx } from "clsx";
import { toast } from "sonner";

export default function BillingPage() {
  const { creditBalance } = useProContext();
  const { transactions, packages, loading } = useTransactions();

  return (
    <>
      <TopBar title="Bakiye" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {loading ? (
            <>
              <StatCardSkeleton />
              <Skeleton className="h-6 w-32" />
              <div className="grid sm:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
              </div>
              <Skeleton className="h-6 w-32" />
              {[...Array(3)].map((_, i) => (
                <ListItemSkeleton key={i} />
              ))}
            </>
          ) : (
            <>
              <Card padding="lg">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-pro-primary-light flex items-center justify-center">
                    <FlaskConical className="h-7 w-7 text-pro-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-pro-text-secondary">Mevcut Bakiye</p>
                    <p className="text-3xl font-bold text-pro-text">
                      {creditBalance}{" "}
                      <span className="text-base font-normal text-pro-text-secondary">
                        test
                      </span>
                    </p>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="text-lg font-semibold text-pro-text mb-4">
                  Paket Satın Al
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {packages.map((pkg, i) => {
                    const perTest = pkg.price_cents / pkg.test_count;
                    const isPopular = i === 1;
                    return (
                      <Card
                        key={pkg.id}
                        padding="lg"
                        className={clsx(
                          "relative",
                          isPopular && "border-pro-primary ring-1 ring-pro-primary"
                        )}
                      >
                        {isPopular && (
                          <Badge variant="info" className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                            Popüler
                          </Badge>
                        )}
                        <div className="text-center space-y-3">
                          <h3 className="text-base font-semibold text-pro-text">
                            {pkg.name}
                          </h3>
                          <p className="text-3xl font-bold text-pro-text">
                            {formatCurrency(pkg.price_cents)}
                          </p>
                          <p className="text-sm text-pro-text-secondary">
                            {pkg.test_count} test ·{" "}
                            {formatCurrency(Math.round(perTest))}/test
                          </p>
                          <ul className="space-y-2 text-sm text-pro-text-secondary text-left">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-pro-success" />
                              {pkg.test_count} wellness testi
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-pro-success" />
                              AQE + HAE analiz
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-pro-success" />
                              Detaylı sonuç raporu
                            </li>
                          </ul>
                          <Button
                            fullWidth
                            variant={isPopular ? "primary" : "secondary"}
                            onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                          >
                            <CreditCard className="h-4 w-4" /> Satın Al
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-pro-text mb-4">
                  İşlem Geçmişi
                </h2>
                {transactions.length === 0 ? (
                  <EmptyState
                    icon={Clock}
                    title="İşlem yok"
                    description="Henüz kredi işleminiz bulunmuyor"
                  />
                ) : (
                  <Card padding="sm">
                    <div className="divide-y divide-pro-border">
                      {transactions.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex items-center justify-between py-3 px-2"
                        >
                          <div>
                            <p className="text-sm font-medium text-pro-text">
                              {tx.description || tx.type}
                            </p>
                            <p className="text-xs text-pro-text-tertiary">
                              {formatDate(tx.created_at)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p
                              className={clsx(
                                "text-sm font-semibold",
                                tx.amount > 0
                                  ? "text-pro-success"
                                  : "text-pro-danger"
                              )}
                            >
                              {tx.amount > 0 ? "+" : ""}
                              {tx.amount} test
                            </p>
                            <p className="text-xs text-pro-text-tertiary">
                              Bakiye: {tx.balance_after}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
