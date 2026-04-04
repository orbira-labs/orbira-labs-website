"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createClient } from "@/lib/pro/supabase/client";
import { loginSchema, type LoginInput } from "@/lib/pro/validations";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";

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
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-pro-primary flex items-center justify-center mb-4">
            <span className="text-white text-xl font-bold">O</span>
          </div>
          <h1 className="text-2xl font-semibold text-pro-text">
            Orbira Pro
          </h1>
          <p className="mt-2 text-sm text-pro-text-secondary">
            Wellness profesyonelleri için
          </p>
        </div>

        <div className="bg-pro-surface rounded-2xl border border-pro-border p-6 sm:p-8 shadow-[var(--pro-shadow-md)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="ornek@email.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Şifre"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register("password")}
            />

            <Button type="submit" fullWidth loading={loading} size="lg">
              Giriş Yap
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-pro-text-secondary">
            Hesabınız yok mu?{" "}
            <Link
              href="/pro/auth/register"
              className="text-pro-primary font-medium hover:underline"
            >
              Kayıt olun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
