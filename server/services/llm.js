import { buildInterpretationMessages } from "./prompts.js";

function buildFailure(reason, note) {
  return {
    enabled: true,
    provider: "openai-compatible",
    content: null,
    reason,
    note
  };
}

export async function generateAiInterpretation(payload) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      enabled: false,
      provider: "none",
      content: null,
      reason: "missing_api_key",
      note: "OPENAI_API_KEY is not configured. Returning rule-based reading only."
    };
  }

  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const messages = buildInterpretationMessages(payload);

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        messages
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const code = errorBody?.error?.code || "";
      const message = errorBody?.error?.message || "Unknown OpenAI API error.";

      if (response.status === 429 && code === "insufficient_quota") {
        return buildFailure(
          "insufficient_quota",
          "OpenAI API quota exceeded or billing is not enabled. Showing detailed rule-based reading instead."
        );
      }

      return buildFailure("api_error", `LLM request failed: ${response.status} ${message}`);
    }

    const data = await response.json();
    return {
      enabled: true,
      provider: "openai-compatible",
      model,
      content: data.choices?.[0]?.message?.content || ""
    };
  } catch (error) {
    if (error?.cause?.code === "UND_ERR_CONNECT_TIMEOUT") {
      return buildFailure(
        "network_timeout",
        "The model service timed out. Showing detailed rule-based reading instead."
      );
    }

    return buildFailure(
      "network_error",
      error instanceof Error ? error.message : "Unknown network error."
    );
  }
}
