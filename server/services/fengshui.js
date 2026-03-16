function buildFailure(reason, note, fallback = null) {
  return {
    enabled: true,
    provider: "openai-compatible",
    reason,
    note,
    fallback
  };
}

function fallbackAssessment({ roomType = "", goals = "", concerns = "", language = "zh-CN" }) {
  if (language === "en") {
    return {
      summary: "AI visual analysis is unavailable right now, so this is a generic feng shui checklist.",
      strengths: [
        "Keep the room bright, ventilated, and easy to move through.",
        "Let the main seating or bed feel supported by a solid wall when possible."
      ],
      issues: [
        "Avoid visible clutter, tangled cables, and blocked pathways.",
        "Avoid mirrors directly facing the bed, entry, or primary seat when possible."
      ],
      recommendations: [
        `Optimize the ${roomType || "room"} around your goal: ${goals || "calm, balance, and focus"}.`,
        concerns
          ? `Pay extra attention to this concern: ${concerns}.`
          : "Reduce visual pressure by clearing one high-traffic surface first."
      ],
      caution: "This is a reflective lifestyle assessment, not architectural or safety advice.",
      raw: null
    };
  }

  if (language === "ja") {
    return {
      summary: "現在は画像の AI 視覚分析が使えないため、一般的な風水チェックリストを返しています。",
      strengths: [
        "部屋は明るく、風通しがよく、動線が通る状態を保つと整いやすいです。",
        "ベッドや主な座席は、できれば背後に安定した壁がある配置が向いています。"
      ],
      issues: [
        "散らかり、絡んだコード、塞がれた通路は避けてください。",
        "鏡がベッドや入口、主な座席を正面から映す配置は避けるのが無難です。"
      ],
      recommendations: [
        `${roomType || "部屋"} は ${goals || "落ち着きと集中"} に合わせて整えるのがおすすめです。`,
        concerns ? `特に気になる点: ${concerns}` : "まずは最も目につく一角を片づけるところから始めてください。"
      ],
      caution: "これは内省のための生活アドバイスであり、建築・安全上の判断ではありません。",
      raw: null
    };
  }

  return {
    summary: "当前无法使用图片 AI 识别，因此先返回一份通用风水检查清单。",
    strengths: [
      "保持空间明亮、通风、动线顺畅，通常会让气场更稳定。",
      "床位或主要座位背后尽量有实墙支撑，会更有安定感。"
    ],
    issues: [
      "尽量避免杂物堆积、电线凌乱、通道被堵。",
      "尽量避免镜子正对床、入户门或主要坐席。"
    ],
    recommendations: [
      `优先围绕${roomType || "这个空间"}的目标来调整：${goals || "稳定、舒展、专注"}。`,
      concerns ? `你特别在意的点是：${concerns}，建议把它作为整改优先项。` : "先从一个最显眼、最常用的位置开始断舍离。"
    ],
    caution: "这是一种基于周易与空间感受的生活化评估，不代替建筑、安全或专业施工建议。",
    raw: null
  };
}

function extractJson(text) {
  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  if (fenced) {
    return fenced[1];
  }

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start >= 0 && end > start) {
    return text.slice(start, end + 1);
  }

  return text;
}

function parseAssessment(content, fallback) {
  try {
    const parsed = JSON.parse(extractJson(content));
    return {
      summary: parsed.summary || fallback.summary,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : fallback.strengths,
      issues: Array.isArray(parsed.issues) ? parsed.issues : fallback.issues,
      recommendations: Array.isArray(parsed.recommendations)
        ? parsed.recommendations
        : fallback.recommendations,
      caution: parsed.caution || fallback.caution,
      raw: content
    };
  } catch {
    return {
      ...fallback,
      raw: content
    };
  }
}

export async function generateFengShuiAssessment({
  imageDataUrl,
  roomType = "",
  goals = "",
  concerns = "",
  language = "zh-CN"
}) {
  const apiKey = process.env.OPENAI_API_KEY;
  const fallback = fallbackAssessment({ roomType, goals, concerns, language });

  if (!apiKey) {
    return buildFailure(
      "missing_api_key",
      "OPENAI_API_KEY is not configured. Returning a non-visual fallback checklist.",
      fallback
    );
  }

  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_VISION_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";

  const languageInstruction =
    language === "en" ? "Respond in English." : language === "ja" ? "Respond in Japanese." : "请用中文回答。";

  const prompt = [
    "You are Yi-Brain's feng shui assessment assistant.",
    "Analyze the uploaded home photo as a reflective feng shui and spatial-energy review grounded in I Ching inspired principles.",
    "Do not make supernatural guarantees.",
    "Do not infer sensitive personal traits.",
    "Focus on visible layout, clutter, light, mirrors, passage flow, bed/desk orientation, visual pressure, and emotional feel.",
    "Give practical remedies that a renter or homeowner can actually do.",
    languageInstruction,
    "Return valid JSON with keys: summary, strengths, issues, recommendations, caution.",
    "Each of strengths, issues, recommendations must be an array of 3 to 5 short strings.",
    `Room type: ${roomType || "unspecified"}.`,
    `Goals: ${goals || "balance, calm, focus"}.`,
    `Special concerns: ${concerns || "none provided"}.`
  ].join(" ");

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: prompt
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please assess the feng shui condition of this room photo and suggest concrete fixes."
              },
              {
                type: "image_url",
                image_url: {
                  url: imageDataUrl
                }
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const code = errorBody?.error?.code || "";
      const message = errorBody?.error?.message || "Unknown OpenAI API error.";

      if (response.status === 429 && code === "insufficient_quota") {
        return buildFailure(
          "insufficient_quota",
          "OpenAI API quota exceeded or billing is not enabled.",
          fallback
        );
      }

      return buildFailure("api_error", `LLM request failed: ${response.status} ${message}`, fallback);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    return {
      enabled: true,
      provider: "openai-compatible",
      model,
      reason: null,
      note: null,
      assessment: parseAssessment(content, fallback)
    };
  } catch (error) {
    return buildFailure(
      "network_error",
      error instanceof Error ? error.message : "Unknown network error.",
      fallback
    );
  }
}
