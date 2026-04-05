const API_URL = process.env.NEXT_PUBLIC_ENGINE_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_ENGINE_API_KEY!;

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
      "X-API-Key": API_KEY,
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
  return engineFetch<SessionData>("/v1/sessions", {});
}

export async function submitAnswers(
  sessionId: string,
  profile: Record<string, unknown>,
  coreAnswers: Record<string, number>,
  measurements: Record<string, unknown>
): Promise<SubmitAnswersResponse> {
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
  return engineFetch<CompleteSessionResponse>(
    `/v1/sessions/${sessionId}/complete`,
    {
      deep_dive_answers: deepDiveAnswers,
    }
  );
}

export { EngineAPIError };
