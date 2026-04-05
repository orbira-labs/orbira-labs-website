"use client";

import { useProContext } from "@/lib/pro/context";
import { useTransactions } from "@/lib/pro/hooks/useTransactions";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Button } from "@/components/pro/ui/Button";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import {
  Sparkles,
  Check,
  Clock,
  Brain,
  Target,
  ShieldCheck,
  BarChart3,
  Heart,
  ArrowRight,
} from "lucide-react";
import { formatDate } from "@/lib/pro/utils";
import { clsx } from "clsx";
import { toast } from "sonner";

const BENEFITS = [
  {
    icon: Brain,
    title: "350+ Psikolojik Özellik",
    desc: "Danışanınızın kişilik haritasını en ince detayına kadar görün",
  },
  {
    icon: Target,
    title: "10 Boyutlu Wellness Skoru",
    desc: "Fiziksel, zihinsel ve duygusal denge tek bakışta anlaşılır",
  },
  {
    icon: BarChart3,
    title: "Derin Davranış Kalıpları",
    desc: "Güçlü yönler, risk alanları ve çelişkiler otomatik tespit edilir",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Yönlendirme",
    desc: "Sonuçlar, birlikte çalışmanızı daha etkili kılacak ipuçları sunar",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli ve Gizli",
    desc: "Tüm veriler şifreli, KVKK uyumlu altyapıda saklanır",
  },
];

export default function BillingPage() {
  const { creditBalance } = useProContext();
  const { transactions, loading } = useTransactions();

  return (
    <>
      <TopBar title="Satın Al" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
          ) : (
            <>
              {/* Pricing Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pro-surface via-pro-surface to-[var(--pro-surface-alt)] border border-pro-border shadow-[var(--pro-shadow-md)]">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[var(--pro-primary)] opacity-[0.04] blur-[60px]" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-pro-primary-light text-pro-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                        <Sparkles className="h-3.5 w-3.5" />
                        Karakter Analiz Testi
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-pro-text">
                        Tek Test
                      </h2>
                      <p className="text-pro-text-secondary text-sm leading-relaxed max-w-md">
                        Danışanınıza özel, yapay zeka destekli derinlemesine karakter ve wellness analizi.
                      </p>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
                      <div className="text-center sm:text-right">
                        <p className="text-4xl sm:text-5xl font-bold text-pro-text">
                          ₺32<span className="text-2xl sm:text-3xl">,99</span>
                        </p>
                        <p className="text-sm text-pro-text-tertiary mt-1">tek seferlik</p>
                      </div>
                      <Button
                        size="lg"
                        variant="primary"
                        className="min-w-[180px]"
                        onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                      >
                        <Sparkles className="h-4 w-4" />
                        Hemen Al
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-pro-border">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <span className="flex items-center gap-1.5 text-sm text-pro-text-secondary">
                        <Check className="h-4 w-4 text-pro-success" />
                        AQE adaptif soru motoru
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-pro-text-secondary">
                        <Check className="h-4 w-4 text-pro-success" />
                        HAE analiz raporu
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-pro-text-secondary">
                        <Check className="h-4 w-4 text-pro-success" />
                        Detaylı sonuç görüntüleme
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-pro-text-secondary">
                        <Check className="h-4 w-4 text-pro-success" />
                        WhatsApp / Email gönderim
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-pro-accent-light border border-pro-accent/10">
                    <p className="text-sm text-pro-accent font-medium flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      10 test al, her biri ₺29,99&apos;a gelsin
                    </p>
                    <p className="text-xs text-pro-accent/70 mt-1 ml-6">
                      Toplu alımda test başına %9 tasarruf edin
                    </p>
                    <Button
                      size="sm"
                      variant="accent"
                      className="mt-3 ml-6"
                      onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                    >
                      10 Test Paketi — ₺299,90
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Benefits Card — green */}
              <div className="rounded-3xl bg-gradient-to-br from-[#4A6A59] via-[#5B7B6A] to-[#4A6A59] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white opacity-[0.04] blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white opacity-[0.03] blur-[50px]" />

                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    Her analizde ne elde edersiniz?
                  </h3>
                  <p className="text-white/60 text-sm mb-8 max-w-lg">
                    Danışanlarınızı daha iyi anlamak, doğru yönlendirmek ve güven inşa etmek için ihtiyacınız olan her şey tek raporda.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {BENEFITS.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <b.icon className="h-4.5 w-4.5 text-white/80" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{b.title}</p>
                          <p className="text-xs text-white/55 leading-relaxed mt-0.5">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kalan test bilgisi */}
              {creditBalance > 0 && (
                <Card padding="md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-pro-success-light flex items-center justify-center">
                        <Check className="h-5 w-5 text-pro-success" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pro-text">Kullanılabilir Testler</p>
                        <p className="text-xs text-pro-text-secondary">Danışanlarınıza göndermeye hazır</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-pro-text">{creditBalance}</p>
                  </div>
                </Card>
              )}

              {/* İşlem Geçmişi */}
              {transactions.length > 0 && (
                <div>
                  <h2 className="text-base font-semibold text-pro-text mb-3 flex items-center gap-2">
                    <span className="h-4 w-0.5 rounded-full bg-pro-primary" />
                    İşlem Geçmişi
                  </h2>
                  <Card padding="sm">
                    <div className="divide-y divide-pro-border">
                      {transactions.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex items-center justify-between py-3 px-3"
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
                                tx.amount > 0 ? "text-pro-success" : "text-pro-danger"
                              )}
                            >
                              {tx.amount > 0 ? "+" : ""}{tx.amount} test
                            </p>
                            <p className="text-xs text-pro-text-tertiary">
                              Bakiye: {tx.balance_after}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
