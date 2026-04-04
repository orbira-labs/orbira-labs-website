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
