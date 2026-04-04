"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createClient } from "@/lib/pro/supabase/client";
import { registerSchema, type RegisterInput } from "@/lib/pro/validations";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register: reg,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterInput) {
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/pro/auth/callback`,
        },
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast.error("Bu email zaten kayıtlı");
        } else {
          toast.error(error.message);
        }
        return;
      }

      router.push(`/pro/auth/verify?email=${encodeURIComponent(data.email)}`);
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/pro/auth/callback`,
      },
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-pro-primary flex items-center justify-center mb-4">
            <span className="text-white text-xl font-bold">O</span>
          </div>
          <h1 className="text-2xl font-semibold text-pro-text">
            Hesap Oluştur
          </h1>
          <p className="mt-2 text-sm text-pro-text-secondary">
            Danışanlarınızı yönetin, testler gönderin
          </p>
        </div>

        <div className="bg-pro-surface rounded-2xl border border-pro-border p-6 sm:p-8 shadow-[var(--pro-shadow-md)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="ornek@email.com"
              error={errors.email?.message}
              {...reg("email")}
            />
            <Input
              label="Şifre"
              type="password"
              placeholder="En az 8 karakter"
              error={errors.password?.message}
              {...reg("password")}
            />
            <Input
              label="Şifre Tekrar"
              type="password"
              placeholder="Şifrenizi tekrar girin"
              error={errors.confirmPassword?.message}
              {...reg("confirmPassword")}
            />

            <Button type="submit" fullWidth loading={loading} size="lg">
              Kayıt Ol
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pro-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-pro-surface px-3 text-pro-text-tertiary">
                veya
              </span>
            </div>
          </div>

          <Button
            variant="secondary"
            fullWidth
            size="lg"
            onClick={handleGoogleLogin}
            type="button"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google ile devam et
          </Button>

          <p className="mt-6 text-center text-sm text-pro-text-secondary">
            Zaten hesabınız var mı?{" "}
            <Link
              href="/pro/auth/login"
              className="text-pro-primary font-medium hover:underline"
            >
              Giriş yapın
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-pro-text-tertiary">
            Kayıt olarak{" "}
            <Link href="/privacy" className="underline">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  );
}
