import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function notifyEmail(): string {
  return (
    process.env.BASVURU_NOTIFY_EMAIL?.trim() || "seyyitaliperse@gmail.com"
  );
}

function resendErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "message" in error) {
    return String((error as { message: string }).message);
  }
  return "E-posta gönderilemedi";
}

interface BasvuruPayload {
  fullName: string;
  phone: string;
  email: string;
  projectType: "website" | "mobile" | "both" | null;
  business: string;
  details: string;
}

const projectTypeLabels: Record<string, string> = {
  website: "Web Sitesi",
  mobile: "Mobil Uygulama",
  both: "Web Sitesi + Mobil Uygulama",
};

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY?.trim()) {
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY tanımlı değil. Vercel ortam değişkenlerini kontrol edin.",
        },
        { status: 500 }
      );
    }

    const body: BasvuruPayload = await request.json();

    if (!body.fullName?.trim() || !body.phone?.trim() || !body.projectType) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik" },
        { status: 400 }
      );
    }

    const projectLabel = body.projectType
      ? projectTypeLabels[body.projectType] ?? "-"
      : "-";

    const to = notifyEmail();

    const { error } = await resend.emails.send({
      from: "Orbira Labs Başvuru <onboarding@resend.dev>",
      to,
      replyTo: body.email?.trim() || undefined,
      subject: `Yeni Başvuru: ${body.fullName}`,
      text: [
        "Yeni Proje Başvurusu — Orbira Labs",
        "",
        "İletişim",
        `Ad Soyad: ${body.fullName}`,
        `Telefon: ${body.phone}`,
        `E-posta: ${body.email?.trim() || "-"}`,
        "",
        "Proje",
        `Tür: ${projectLabel}`,
        `İşletme: ${body.business?.trim() || "-"}`,
        "",
        "Detaylar",
        body.details?.trim() || "-",
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 28px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0;">Yeni Proje Başvurusu</h1>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 8px 0 0;">Orbira Labs</p>
          </div>

          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; margin: 0 0 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              İletişim Bilgileri
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">Ad Soyad</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${body.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefon</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${body.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">E-posta</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${body.email || "-"}</td>
              </tr>
            </table>

            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; margin: 0 0 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              Proje Detayları
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">İşletme</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${body.business || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Proje Türü</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${projectLabel}</td>
              </tr>
            </table>

            ${
              body.details
                ? `
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; margin: 0 0 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              Detaylar
            </h2>
            <p style="font-size: 14px; line-height: 1.7; color: #374151; background: #f9fafb; padding: 16px; border-radius: 8px; margin: 0;">
              ${body.details.replace(/\n/g, "<br>")}
            </p>
            `
                : ""
            }
          </div>

          <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px;">
            Bu e-posta orbiralabs.com başvuru formundan otomatik olarak gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: resendErrorMessage(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu",
      },
      { status: 500 }
    );
  }
}
