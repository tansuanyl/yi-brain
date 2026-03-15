import { buildInterpretationMessages } from "./prompts.js";

export async function generateAiInterpretation(payload) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      enabled: false,
      provider: "none",
      content: null,
      note: "OPENAI_API_KEY is not configured. Returning rule-based reading only."
    };
  }

  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const messages = buildInterpretationMessages(payload);

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
    const errorText = await response.text();
    return {
      enabled: true,
      provider: "openai-compatible",
      content: null,
      note: `LLM request failed: ${response.status} ${errorText}`
    };
  }

  const data = await response.json();
  return {
    enabled: true,
    provider: "openai-compatible",
    model,
    content: data.choices?.[0]?.message?.content || ""
  };
}
