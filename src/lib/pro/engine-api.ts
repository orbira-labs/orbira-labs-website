const API_URL = process.env.NEXT_PUBLIC_ENGINE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_ENGINE_API_KEY;

const USE_MOCK = !API_URL || !API_KEY;

export interface ProfileField {
  id: string;
  type: "single_choice" | "boolean" | "text";
  label: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

export interface CoreQuestion {
  id: string;
  text: string;
  dimension: string;
}

export interface MeasurementField {
  id: string;
  type: "number" | "select";
  label: string;
  unit?: string;
  min?: number;
  max?: number;
  options?: { value: string; label: string }[];
}

export interface DeepDiveQuestion {
  id: string;
  text: string;
  pool: string;
}

export interface SessionData {
  session_id: string;
  profile_fields: ProfileField[];
  core_questions: CoreQuestion[];
  measurement_context: MeasurementField[];
}

export interface SubmitAnswersResponse {
  deep_dive_questions: DeepDiveQuestion[];
}

export interface AnalysisResults {
  wellness_score: number;
  dimension_scores: Record<string, number>;
  top_strengths: string[];
  top_risks: string[];
  traits: { id: string; name: string; active: boolean }[];
  patterns: { id: string; type: string; description: string }[];
  inferences: { id: string; title: string; description: string }[];
  bmi_context: { bmi: number; category: string };
}

export interface Report {
  character_analysis: string;
  top5_and_weak5: {
    top5: { name: string; insight: string }[];
    weak5: { name: string; insight: string }[];
  };
  blind_spots: {
    title: string;
    insight: string;
    coach_tip: string;
  }[];
  coaching_roadmap: {
    immediate: string[];
    short_term: string[];
    medium_term: string[];
  };
  generated_at: string;
  model: string;
}

export interface CompleteSessionResponse {
  results: {
    analysis: AnalysisResults;
    report: Report;
  };
}

class EngineAPIError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.name = "EngineAPIError";
    this.code = code;
    this.status = status;
  }
}

async function engineFetch<T>(
  path: string,
  body?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY ?? "",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!data.ok) {
    throw new EngineAPIError(
      data.error?.message ?? "API error",
      data.error?.code ?? "UNKNOWN_ERROR",
      res.status
    );
  }

  return data.data as T;
}

export async function createSession(): Promise<SessionData> {
  if (USE_MOCK) {
    console.warn("[Engine API] Using mock data - NEXT_PUBLIC_ENGINE_API_URL not configured");
    return mockCreateSession();
  }
  return engineFetch<SessionData>("/v1/sessions", {});
}

export async function submitAnswers(
  sessionId: string,
  profile: Record<string, unknown>,
  coreAnswers: Record<string, number>,
  measurements: Record<string, unknown>
): Promise<SubmitAnswersResponse> {
  if (USE_MOCK) {
    return mockSubmitAnswers();
  }
  return engineFetch<SubmitAnswersResponse>(
    `/v1/sessions/${sessionId}/answers`,
    {
      profile,
      core_answers: coreAnswers,
      measurements,
    }
  );
}

export async function completeSession(
  sessionId: string,
  deepDiveAnswers: Record<string, number>
): Promise<CompleteSessionResponse> {
  if (USE_MOCK) {
    return mockCompleteSession();
  }
  return engineFetch<CompleteSessionResponse>(
    `/v1/sessions/${sessionId}/complete`,
    {
      deep_dive_answers: deepDiveAnswers,
    }
  );
}

export { EngineAPIError };

// ============================================
// MOCK DATA - Used when Engine API is not configured
// ============================================

const MOCK_SESSION_DATA: SessionData = {
  session_id: `mock_${Date.now()}`,
  profile_fields: [
    {
      id: "age_range",
      type: "single_choice",
      label: "Yaş Aralığınız",
      options: [
        { value: "18-24", label: "18-24" },
        { value: "25-34", label: "25-34" },
        { value: "35-44", label: "35-44" },
        { value: "45-54", label: "45-54" },
        { value: "55+", label: "55 ve üzeri" },
      ],
      required: true,
    },
    {
      id: "gender",
      type: "single_choice",
      label: "Cinsiyet",
      options: [
        { value: "female", label: "Kadın" },
        { value: "male", label: "Erkek" },
        { value: "other", label: "Diğer" },
      ],
      required: true,
    },
    {
      id: "education",
      type: "single_choice",
      label: "Eğitim Durumu",
      options: [
        { value: "high_school", label: "Lise" },
        { value: "bachelor", label: "Lisans" },
        { value: "master", label: "Yüksek Lisans" },
        { value: "phd", label: "Doktora" },
      ],
      required: false,
    },
  ],
  core_questions: [
    { id: "q1", text: "Yeni insanlarla tanışmaktan keyif alırım.", dimension: "Sosyallik" },
    { id: "q2", text: "Stresli durumlarda sakin kalabilirim.", dimension: "Duygusal Denge" },
    { id: "q3", text: "Görevlerimi zamanında tamamlarım.", dimension: "Sorumluluk" },
    { id: "q4", text: "Başkalarının duygularını kolayca anlayabilirim.", dimension: "Empati" },
    { id: "q5", text: "Yeni fikirlere açığımdır.", dimension: "Açıklık" },
    { id: "q6", text: "Topluluk içinde rahat hissederim.", dimension: "Sosyallik" },
    { id: "q7", text: "Duygusal tepkilerimi kontrol edebilirim.", dimension: "Duygusal Denge" },
    { id: "q8", text: "Detaylara dikkat ederim.", dimension: "Sorumluluk" },
    { id: "q9", text: "İnsanlara yardım etmekten mutluluk duyarım.", dimension: "Empati" },
    { id: "q10", text: "Değişime kolayca uyum sağlarım.", dimension: "Açıklık" },
  ],
  measurement_context: [
    { id: "height", type: "number", label: "Boy", unit: "cm", min: 100, max: 250 },
    { id: "weight", type: "number", label: "Kilo", unit: "kg", min: 30, max: 300 },
    {
      id: "sleep_quality",
      type: "select",
      label: "Uyku Kalitesi",
      options: [
        { value: "poor", label: "Kötü" },
        { value: "fair", label: "Orta" },
        { value: "good", label: "İyi" },
        { value: "excellent", label: "Çok İyi" },
      ],
    },
  ],
};

const MOCK_DEEP_DIVE_QUESTIONS: DeepDiveQuestion[] = [
  { id: "dd1", text: "Zor kararlar almadan önce uzun süre düşünürüm.", pool: "Karar Verme" },
  { id: "dd2", text: "Eleştirildiğimde savunmaya geçerim.", pool: "Geri Bildirim" },
  { id: "dd3", text: "Belirsizlik beni rahatsız eder.", pool: "Belirsizlik Toleransı" },
  { id: "dd4", text: "Başarısızlıklarımı kolay kabullenirim.", pool: "Öz-Kabul" },
  { id: "dd5", text: "Uzun vadeli hedefler belirlerim.", pool: "Planlama" },
];

function generateMockResults(): CompleteSessionResponse {
  return {
    results: {
      analysis: {
        wellness_score: 72,
        dimension_scores: {
          "Sosyallik": 78,
          "Duygusal Denge": 65,
          "Sorumluluk": 82,
          "Empati": 75,
          "Açıklık": 70,
          "Öz-Farkındalık": 68,
          "Motivasyon": 74,
          "Stres Yönetimi": 62,
          "İletişim": 76,
          "Adaptasyon": 71,
        },
        top_strengths: ["Sorumluluk", "Sosyallik", "İletişim"],
        top_risks: ["Stres Yönetimi", "Duygusal Denge"],
        traits: [
          { id: "t1", name: "Dışa Dönük", active: true },
          { id: "t2", name: "Planlı", active: true },
          { id: "t3", name: "Empatik", active: true },
          { id: "t4", name: "Mükemmeliyetçi", active: false },
        ],
        patterns: [
          { id: "p1", type: "strength", description: "Güçlü sosyal bağlar kurma eğilimi" },
          { id: "p2", type: "risk", description: "Stres altında duygusal tepki verme eğilimi" },
        ],
        inferences: [
          { id: "i1", title: "Liderlik Potansiyeli", description: "Sosyal beceriler ve sorumluluk bilinci liderlik için güçlü bir temel oluşturuyor." },
          { id: "i2", title: "Stres Yönetimi Geliştirilebilir", description: "Duygusal denge skorları, stres yönetimi tekniklerinden fayda görebileceğinizi gösteriyor." },
        ],
        bmi_context: { bmi: 23.5, category: "Normal" },
      },
      report: {
        character_analysis: `Bu analiz sonuçlarına göre, sosyal ilişkilerde güçlü bir profil sergiliyorsunuz. İnsanlarla iletişim kurmaktan keyif alıyor ve empati yeteneğinizi aktif olarak kullanıyorsunuz.

Sorumluluk bilinciniz yüksek ve görevlerinizi titizlikle yerine getiriyorsunuz. Bu özellik, hem iş hem de özel hayatınızda güvenilir bir kişi olarak algılanmanızı sağlıyor.

Gelişim alanı olarak stres yönetimi öne çıkıyor. Yoğun dönemlerde duygusal tepkilerinizi kontrol etmekte zorlanabiliyorsunuz. Mindfulness ve nefes egzersizleri gibi teknikler bu alanda size yardımcı olabilir.

Genel olarak, dengeli bir kişilik yapısına sahipsiniz ve potansiyelinizi gerçekleştirmek için küçük iyileştirmeler yapabilirsiniz.`,
        top5_and_weak5: {
          top5: [
            { name: "Sorumluluk", insight: "Verilen görevleri zamanında ve kaliteli şekilde tamamlarsınız." },
            { name: "Sosyallik", insight: "İnsanlarla kolayca bağ kurabilir ve ilişkileri sürdürebilirsiniz." },
            { name: "İletişim", insight: "Düşüncelerinizi açık ve etkili bir şekilde ifade edebilirsiniz." },
            { name: "Empati", insight: "Başkalarının duygularını anlama ve paylaşma kapasiteniz yüksek." },
            { name: "Motivasyon", insight: "Hedeflerinize ulaşmak için içsel bir itici güce sahipsiniz." },
          ],
          weak5: [
            { name: "Stres Yönetimi", insight: "Baskı altında duygusal tepkiler verme eğiliminiz var." },
            { name: "Duygusal Denge", insight: "Ani ruh hali değişimleri yaşayabiliyorsunuz." },
            { name: "Öz-Farkındalık", insight: "Kendi güdülerinizi ve tepkilerinizi analiz etmekte gelişebilirsiniz." },
            { name: "Açıklık", insight: "Yeni deneyimlere karşı daha cesur olabilirsiniz." },
            { name: "Adaptasyon", insight: "Beklenmedik değişikliklere uyum sağlamak zaman alabilir." },
          ],
        },
        blind_spots: [
          {
            title: "Mükemmeliyetçilik Tuzağı",
            insight: "Yüksek standartlarınız bazen stresinizi artırıyor olabilir. Her şeyin mükemmel olması gerekmediğini kabul etmek rahatlamanızı sağlayabilir.",
            coach_tip: "\"Yeterince iyi\" kavramını benimseyin. Her projede %80 kaliteye ulaştığınızda durun ve değerlendirin.",
          },
          {
            title: "Aşırı Empati",
            insight: "Başkalarının sorunlarını kendi sorunlarınız gibi hissedebiliyorsunuz. Bu duygusal yükü dengelemeyi öğrenmek önemli.",
            coach_tip: "Sağlıklı sınırlar belirleyin. Başkalarına yardım ederken kendi enerjinizi de koruyun.",
          },
          {
            title: "Erteleme Eğilimi",
            insight: "Zorlu görevleri erteleme eğiliminiz olabilir, özellikle belirsizlik içeriyorlarsa.",
            coach_tip: "Büyük görevleri küçük, yönetilebilir parçalara bölün. İlk adımı atmak en zor kısımdır.",
          },
        ],
        coaching_roadmap: {
          immediate: [
            "Günde 5 dakika nefes egzersizi yapın",
            "Günlük tutmaya başlayın - duygularınızı yazın",
            "Uyku düzeninizi optimize edin",
          ],
          short_term: [
            "Stres tetikleyicilerinizi belirleyin ve listeleyin",
            "Haftalık öz-değerlendirme rutini oluşturun",
            "Bir mentor veya hesap verebilirlik ortağı bulun",
          ],
          medium_term: [
            "Mindfulness veya meditasyon pratiğine başlayın",
            "Duygusal zeka üzerine bir kitap okuyun",
            "Yeni bir hobi veya beceri geliştirin",
          ],
        },
        generated_at: new Date().toISOString(),
        model: "Mock Engine v1.0",
      },
    },
  };
}

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Mock implementations
async function mockCreateSession(): Promise<SessionData> {
  await delay(800);
  return { ...MOCK_SESSION_DATA, session_id: `mock_${Date.now()}` };
}

async function mockSubmitAnswers(): Promise<SubmitAnswersResponse> {
  await delay(1000);
  return { deep_dive_questions: MOCK_DEEP_DIVE_QUESTIONS };
}

async function mockCompleteSession(): Promise<CompleteSessionResponse> {
  await delay(2000);
  return generateMockResults();
}
