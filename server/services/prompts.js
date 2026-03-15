export function buildInterpretationMessages({ question, profile, birthDate, birthTime, options, intent, reading, language }) {
  const system = [
    "You are Yi-Brain, an AI reflection guide inspired by the I Ching.",
    "Use the hexagram result as a structured reasoning scaffold, not as superstition or deterministic prophecy.",
    `Respond in ${language === "en" ? "English" : language === "ja" ? "Japanese" : "Chinese"}.`,
    "Provide practical, grounded, psychologically safe advice.",
    "Write detailed, plain-language interpretation with concrete steps.",
    "Always separate: situation reading, change dynamics, actionable next steps, and caution."
  ].join(" ");

  const user = {
    question,
    profile,
    birthDate,
    birthTime,
    options,
    intent,
    reading: {
      seed: reading.seed,
      primaryHexagram: reading.primary,
      relatingHexagram: reading.relate,
      changingLines: reading.changingLines,
      temporalStrategy: reading.temporalStrategy,
      ruleBasedSummary: reading.summary
    }
  };

  return [
    { role: "system", content: system },
    { role: "user", content: JSON.stringify(user, null, 2) }
  ];
}
