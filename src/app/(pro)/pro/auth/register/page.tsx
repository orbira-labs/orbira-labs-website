"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { UserPlus } from "lucide-react";
import { createClient } from "@/lib/pro/supabase/client";
import { registerSchema, type RegisterInput } from "@/lib/pro/validations";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { AuthLayout } from "@/components/pro/auth/AuthLayout";

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
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-[28px] font-semibold text-pro-text">
            Hesap oluşturun
          </h1>
          <p className="mt-1.5 text-sm text-pro-text-secondary">
            Danışanlarınızı yönetin, testler gönderin
          </p>
        </div>

        <div className="bg-pro-surface rounded-2xl border border-pro-border p-5 sm:p-7 shadow-[var(--pro-shadow-md)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="ornek@email.com"
              autoComplete="email"
              error={errors.email?.message}
              {...reg("email")}
            />
            <Input
              label="Şifre"
              type="password"
              placeholder="En az 8 karakter"
              autoComplete="new-password"
              error={errors.password?.message}
              {...reg("password")}
            />
            <Input
              label="Şifre Tekrar"
              type="password"
              placeholder="Şifrenizi tekrar girin"
              autoComplete="new-password"
              error={errors.confirmPassword?.message}
              {...reg("confirmPassword")}
            />

            <Button type="submit" fullWidth loading={loading} size="lg">
              <UserPlus className="h-4 w-4" />
              Kayıt Ol
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-pro-text-secondary">
          Zaten hesabınız var mı?{" "}
          <Link
            href="/pro/auth/login"
            className="text-pro-primary font-medium hover:underline"
          >
            Giriş yapın
          </Link>
        </p>

        <p className="text-center text-xs text-pro-text-tertiary leading-relaxed">
          Kayıt olarak{" "}
          <Link href="/privacy" className="underline hover:text-pro-text-secondary transition-colors">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni kabul etmiş olursunuz.
        </p>
      </div>
    </AuthLayout>
  );
}
