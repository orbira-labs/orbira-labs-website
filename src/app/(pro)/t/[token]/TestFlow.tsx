"use client";

import { useState, useEffect } from "react";
import {
  createSession,
  submitAnswers,
  completeSession,
  type SessionData,
  type DeepDiveQuestion,
} from "@/lib/pro/engine-api";
import { createClient } from "@/lib/pro/supabase/client";
import { LikertScale } from "@/components/pro/test/LikertScale";
import { ProfileField } from "@/components/pro/test/ProfileField";
import { MeasurementInput } from "@/components/pro/test/MeasurementInput";
import { AnalysisLoading } from "@/components/pro/test/AnalysisLoading";
import { clsx } from "clsx";

type Step = "loading" | "profile" | "core" | "deep_dive" | "analyzing" | "done" | "error";

interface TestFlowProps {
  token: string;
  clientName?: string;
}

export function TestFlow({ token, clientName }: TestFlowProps) {
  const [step, setStep] = useState<Step>("loading");
  const [error, setError] = useState<string | null>(null);
  
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [deepDiveQuestions, setDeepDiveQuestions] = useState<DeepDiveQuestion[]>([]);

  const [profile, setProfile] = useState<Record<string, unknown>>({});
  const [coreAnswers, setCoreAnswers] = useState<Record<string, number>>({});
  const [measurements, setMeasurements] = useState<Record<string, unknown>>({});
  const [deepDiveAnswers, setDeepDiveAnswers] = useState<Record<string, number>>({});

  const [currentCoreIndex, setCurrentCoreIndex] = useState(0);
  const [currentDeepDiveIndex, setCurrentDeepDiveIndex] = useState(0);

  useEffect(() => {
    initSession();
  }, []);

  async function initSession() {
    try {
      const data = await createSession();
      setSessionId(data.session_id);
      setSessionData(data);
      setStep("profile");
    } catch (e) {
      console.error("Session init error:", e);
      setError("Bağlantı hatası oluştu. Lütfen sayfayı yenileyin.");
      setStep("error");
    }
  }

  function handleProfileChange(fieldId: string, value: unknown) {
    setProfile((prev) => ({ ...prev, [fieldId]: value }));
  }

  function handleMeasurementChange(fieldId: string, value: unknown) {
    setMeasurements((prev) => ({ ...prev, [fieldId]: value }));
  }

  function handleCoreAnswer(questionId: string, value: number) {
    setCoreAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (sessionData && currentCoreIndex < sessionData.core_questions.length - 1) {
      setTimeout(() => setCurrentCoreIndex((i) => i + 1), 300);
    }
  }

  function handleDeepDiveAnswer(questionId: string, value: number) {
    setDeepDiveAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (currentDeepDiveIndex < deepDiveQuestions.length - 1) {
      setTimeout(() => setCurrentDeepDiveIndex((i) => i + 1), 300);
    }
  }

  async function handleProfileSubmit() {
    if (!sessionData) return;
    
    const requiredFields = sessionData.profile_fields.filter((f) => f.required !== false);
    const missingFields = requiredFields.filter((f) => !profile[f.id]);
    
    if (missingFields.length > 0) {
      setError("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }
    
    setError(null);
    setStep("core");
  }

  async function handleCoreSubmit() {
    if (!sessionId || !sessionData) return;

    const requiredMeasurements = sessionData.measurement_context.filter(
      (m) => m.id === "height" || m.id === "weight"
    );
    const missingMeasurements = requiredMeasurements.filter((m) => !measurements[m.id]);
    
    if (missingMeasurements.length > 0) {
      setError("Lütfen boy ve kilo bilgilerinizi girin.");
      return;
    }

    const answeredCount = Object.keys(coreAnswers).length;
    if (answeredCount < sessionData.core_questions.length) {
      setError(`Lütfen tüm soruları yanıtlayın (${answeredCount}/${sessionData.core_questions.length})`);
      return;
    }

    setError(null);
    setStep("loading");

    try {
      const supabase = createClient();
      await supabase
        .from("test_invitations")
        .update({
          status: "started",
          started_at: new Date().toISOString(),
          session_id: sessionId,
        })
        .eq("token", token);

      const data = await submitAnswers(sessionId, profile, coreAnswers, measurements);
      setDeepDiveQuestions(data.deep_dive_questions);
      setStep("deep_dive");
    } catch (e) {
      console.error("Submit answers error:", e);
      setError("Cevaplar gönderilemedi. Lütfen tekrar deneyin.");
      setStep("core");
    }
  }

  async function handleDeepDiveSubmit() {
    if (!sessionId) return;

    const answeredCount = Object.keys(deepDiveAnswers).length;
    if (answeredCount < deepDiveQuestions.length) {
      setError(`Lütfen tüm soruları yanıtlayın (${answeredCount}/${deepDiveQuestions.length})`);
      return;
    }

    setError(null);
    setStep("analyzing");

    try {
      const data = await completeSession(sessionId, deepDiveAnswers);

      const supabase = createClient();
      await supabase
        .from("test_invitations")
        .update({
          status: "completed",
          completed_at: new Date().toISOString(),
          results_snapshot: data.results,
        })
        .eq("token", token);

      setStep("done");
    } catch (e) {
      console.error("Complete session error:", e);
      setError("Test tamamlanamadı. Lütfen tekrar deneyin.");
      setStep("deep_dive");
    }
  }

  if (step === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F9F7] to-[#E8F0EC] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#5B7B6A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (step === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F9F7] to-[#E8F0EC] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Bir Hata Oluştu</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-[#5B7B6A] text-white rounded-xl font-medium hover:bg-[#4A6A59] transition-colors"
          >
            Sayfayı Yenile
          </button>
        </div>
      </div>
    );
  }

  if (step === "analyzing") {
    return <AnalysisLoading />;
  }

  if (step === "done") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F9F7] to-[#E8F0EC] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#5B7B6A] to-[#4A6A59] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Tebrikler!</h1>
          <p className="text-gray-600 mb-2">Testiniz başarıyla tamamlandı.</p>
          <p className="text-gray-500 text-sm">Sonuçlarınız uzmanınızla paylaşılacaktır.</p>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">Powered by Orbira Labs</p>
          </div>
        </div>
      </div>
    );
  }

  const totalSteps = 3;
  const currentStepNum = step === "profile" ? 1 : step === "core" ? 2 : 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F9F7] to-[#E8F0EC]">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Karakter Analizi</h1>
              {clientName && <p className="text-sm text-gray-500">{clientName}</p>}
            </div>
            <span className="text-sm font-medium text-[#5B7B6A]">
              {currentStepNum} / {totalSteps}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#5B7B6A] to-[#7A9A8A] transition-all duration-500"
              style={{ width: `${(currentStepNum / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}

        {step === "profile" && sessionData && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Profil Bilgileri</h2>
              <p className="text-gray-600">Daha doğru bir analiz için aşağıdaki bilgileri doldurun.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
              {sessionData.profile_fields.map((field) => (
                <ProfileField
                  key={field.id}
                  field={field}
                  value={profile[field.id]}
                  onChange={(value) => handleProfileChange(field.id, value)}
                />
              ))}
            </div>

            <button
              onClick={handleProfileSubmit}
              className="w-full py-4 bg-gradient-to-r from-[#5B7B6A] to-[#4A6A59] text-white rounded-xl font-semibold text-lg shadow-lg shadow-[#5B7B6A]/20 hover:shadow-xl hover:shadow-[#5B7B6A]/30 transition-all active:scale-[0.98]"
            >
              Devam Et
            </button>
          </div>
        )}

        {step === "core" && sessionData && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Değerlendirme Soruları</h2>
              <p className="text-gray-600">Her ifadeyi kendinize göre değerlendirin.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Soru {currentCoreIndex + 1} / {sessionData.core_questions.length}
                </span>
                <span className="text-xs px-2.5 py-1 bg-[#5B7B6A]/10 text-[#5B7B6A] rounded-full font-medium">
                  {sessionData.core_questions[currentCoreIndex]?.dimension}
                </span>
              </div>

              <div className="min-h-[120px]">
                <p className="text-lg text-gray-900 font-medium mb-6">
                  {sessionData.core_questions[currentCoreIndex]?.text}
                </p>

                <LikertScale
                  value={coreAnswers[sessionData.core_questions[currentCoreIndex]?.id]}
                  onChange={(v) =>
                    handleCoreAnswer(sessionData.core_questions[currentCoreIndex]?.id, v)
                  }
                />
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setCurrentCoreIndex((i) => Math.max(0, i - 1))}
                  disabled={currentCoreIndex === 0}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    currentCoreIndex === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Önceki
                </button>
                <div className="flex-1" />
                {currentCoreIndex < sessionData.core_questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentCoreIndex((i) => i + 1)}
                    disabled={!coreAnswers[sessionData.core_questions[currentCoreIndex]?.id]}
                    className={clsx(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      !coreAnswers[sessionData.core_questions[currentCoreIndex]?.id]
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#5B7B6A] hover:bg-[#5B7B6A]/10"
                    )}
                  >
                    Sonraki
                  </button>
                ) : (
                  <span className="text-sm text-gray-400">Son soru</span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-medium text-gray-900 mb-4">Ölçümler</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {sessionData.measurement_context.map((field) => (
                  <MeasurementInput
                    key={field.id}
                    field={field}
                    value={measurements[field.id]}
                    onChange={(value) => handleMeasurementChange(field.id, value)}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleCoreSubmit}
              disabled={Object.keys(coreAnswers).length < sessionData.core_questions.length}
              className={clsx(
                "w-full py-4 rounded-xl font-semibold text-lg transition-all",
                Object.keys(coreAnswers).length >= sessionData.core_questions.length
                  ? "bg-gradient-to-r from-[#5B7B6A] to-[#4A6A59] text-white shadow-lg shadow-[#5B7B6A]/20 hover:shadow-xl active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              Devam Et ({Object.keys(coreAnswers).length}/{sessionData.core_questions.length})
            </button>
          </div>
        )}

        {step === "deep_dive" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B7B6A]/10 text-[#5B7B6A] rounded-full text-sm font-medium mb-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Neredeyse bitti!
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Derinlemesine Sorular</h2>
              <p className="text-gray-600">Son birkaç soru ile analizinizi tamamlıyoruz.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Soru {currentDeepDiveIndex + 1} / {deepDiveQuestions.length}
                </span>
                <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
                  {deepDiveQuestions[currentDeepDiveIndex]?.pool}
                </span>
              </div>

              <div className="min-h-[120px]">
                <p className="text-lg text-gray-900 font-medium mb-6">
                  {deepDiveQuestions[currentDeepDiveIndex]?.text}
                </p>

                <LikertScale
                  value={deepDiveAnswers[deepDiveQuestions[currentDeepDiveIndex]?.id]}
                  onChange={(v) =>
                    handleDeepDiveAnswer(deepDiveQuestions[currentDeepDiveIndex]?.id, v)
                  }
                />
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setCurrentDeepDiveIndex((i) => Math.max(0, i - 1))}
                  disabled={currentDeepDiveIndex === 0}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    currentDeepDiveIndex === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Önceki
                </button>
                <div className="flex-1" />
                {currentDeepDiveIndex < deepDiveQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentDeepDiveIndex((i) => i + 1)}
                    disabled={!deepDiveAnswers[deepDiveQuestions[currentDeepDiveIndex]?.id]}
                    className={clsx(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      !deepDiveAnswers[deepDiveQuestions[currentDeepDiveIndex]?.id]
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#5B7B6A] hover:bg-[#5B7B6A]/10"
                    )}
                  >
                    Sonraki
                  </button>
                ) : (
                  <span className="text-sm text-gray-400">Son soru</span>
                )}
              </div>
            </div>

            <button
              onClick={handleDeepDiveSubmit}
              disabled={Object.keys(deepDiveAnswers).length < deepDiveQuestions.length}
              className={clsx(
                "w-full py-4 rounded-xl font-semibold text-lg transition-all",
                Object.keys(deepDiveAnswers).length >= deepDiveQuestions.length
                  ? "bg-gradient-to-r from-[#5B7B6A] to-[#4A6A59] text-white shadow-lg shadow-[#5B7B6A]/20 hover:shadow-xl active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              Testi Tamamla ({Object.keys(deepDiveAnswers).length}/{deepDiveQuestions.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
