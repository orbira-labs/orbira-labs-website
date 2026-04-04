"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LogIn } from "lucide-react";
import { createClient } from "@/lib/pro/supabase/client";
import { loginSchema, type LoginInput } from "@/lib/pro/validations";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { AuthLayout } from "@/components/pro/auth/AuthLayout";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginInput) {
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error("Email veya şifre hatalı");
        return;
      }

      router.push("/pro/dashboard");
      router.refresh();
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
            Tekrar hoş geldiniz
          </h1>
          <p className="mt-1.5 text-sm text-pro-text-secondary">
            Hesabınıza giriş yapın
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
              {...register("email")}
            />
            <div>
              <Input
                label="Şifre"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                error={errors.password?.message}
                {...register("password")}
              />
              <div className="flex justify-end mt-1.5">
                <Link
                  href="/pro/auth/login"
                  className="text-xs text-pro-text-tertiary hover:text-pro-primary transition-colors"
                >
                  Şifremi unuttum
                </Link>
              </div>
            </div>

            <Button type="submit" fullWidth loading={loading} size="lg">
              <LogIn className="h-4 w-4" />
              Giriş Yap
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-pro-text-secondary">
          Hesabınız yok mu?{" "}
          <Link
            href="/pro/auth/register"
            className="text-pro-primary font-medium hover:underline"
          >
            Ücretsiz kayıt olun
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
