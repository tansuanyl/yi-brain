import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { analyzeIntent } from "./services/intent.js";
import { buildReading } from "./services/iching.js";
import { generateAiInterpretation } from "./services/llm.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "..", "public");

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(publicDir));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    app: process.env.APP_NAME || "Yi-Brain",
    hasApiKey: Boolean(process.env.OPENAI_API_KEY)
  });
});

app.post("/api/reading", async (req, res) => {
  try {
    const {
      question = "",
      category = "",
      profile = "",
      options = [],
      useAI = true
    } = req.body || {};

    if (!question.trim()) {
      return res.status(400).json({ error: "Question is required." });
    }

    const intent = analyzeIntent({ question, category, profile, options });
    const reading = buildReading({
      question,
      category: intent.category,
      profile,
      options,
      emotionalState: intent.emotionalState
    });

    let ai = null;
    if (useAI) {
      ai = await generateAiInterpretation({
        question,
        profile,
        options,
        intent,
        reading
      });
    }

    res.json({
      app: process.env.APP_NAME || "Yi-Brain",
      timestamp: new Date().toISOString(),
      intent,
      reading,
      ai
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate reading.",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Yi-Brain listening on http://localhost:${port}`);
});
