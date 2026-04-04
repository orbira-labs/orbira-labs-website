"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/lib/pro/supabase/client";
import { Button } from "@/components/pro/ui/Button";

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((v) => v - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  function handleChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;
    const next = [...code];
    next[index] = value.slice(-1);
    setCode(next);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...code];
    pasted.split("").forEach((char, i) => {
      next[i] = char;
    });
    setCode(next);
    const focusIdx = Math.min(pasted.length, 5);
    inputRefs.current[focusIdx]?.focus();
  }

  async function handleVerify() {
    const otp = code.join("");
    if (otp.length !== 6) return;

    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "signup",
      });

      if (error) {
        toast.error("Kod hatalı veya süresi dolmuş");
        return;
      }

      toast.success("Email doğrulandı!");
      router.push("/pro/onboarding");
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    const supabase = createClient();
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });
    if (error) {
      toast.error("Kod gönderilemedi");
    } else {
      toast.success("Yeni kod gönderildi");
      setResendTimer(60);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-pro-primary-light flex items-center justify-center mb-4">
            <span className="text-pro-primary text-xl">✉</span>
          </div>
          <h1 className="text-2xl font-semibold text-pro-text">
            Email Doğrulama
          </h1>
          <p className="mt-2 text-sm text-pro-text-secondary">
            <span className="font-medium text-pro-text">{email}</span> adresine
            6 haneli doğrulama kodu gönderdik.
          </p>
        </div>

        <div className="bg-pro-surface rounded-2xl border border-pro-border p-6 sm:p-8 shadow-[var(--pro-shadow-md)]">
          <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-semibold rounded-lg border border-pro-border bg-pro-surface text-pro-text focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary transition-colors"
              />
            ))}
          </div>

          <div className="mt-4 text-center">
            {resendTimer > 0 ? (
              <p className="text-sm text-pro-text-tertiary">
                Kod gelmedi mi? Tekrar gönder ({resendTimer}s)
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-sm text-pro-primary font-medium hover:underline"
              >
                Kodu tekrar gönder
              </button>
            )}
          </div>

          <Button
            fullWidth
            size="lg"
            className="mt-6"
            loading={loading}
            disabled={code.some((d) => !d)}
            onClick={handleVerify}
          >
            Doğrula
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <VerifyForm />
    </Suspense>
  );
}
