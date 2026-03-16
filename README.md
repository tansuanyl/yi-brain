# Yi-Brain

Yi-Brain is an I Ching guided AI question-answering app for reflection, structured decision support, and scenario reasoning.

## What it does

- Accepts a user's question and context
- Generates a deterministic divination seed
- Builds a primary hexagram and transformed hexagram
- Produces line-change reasoning and phase-aware guidance
- Optionally sends the structured result into an OpenAI-compatible model for richer interpretation
- Supports feng shui photo review by analyzing room images and suggesting practical adjustments
- Renders the result in a polished web interface

## Product positioning

Yi-Brain is designed as a reflective reasoning tool, not a superstition product or factual oracle. The divination step is used as a structured randomness mechanism to help users explore assumptions, generate alternatives, and reduce fixation.

## Stack

- Frontend: static HTML, CSS, vanilla JavaScript
- Backend: Node.js + Express
- AI layer: OpenAI-compatible chat completions API
- Vision support: OpenAI-compatible multimodal model for room-photo feng shui review

## Local development

1. Install Node.js 18 or newer.
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`.
4. If you want photo-based feng shui analysis, optionally set `OPENAI_VISION_MODEL` to a vision-capable model.
5. Start the app:

```bash
npm run dev
```

6. Open `http://localhost:3000`.

## Deploy

### Render

1. Create a new Web Service from this repo.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add the environment variables from `.env.example`.

### Railway

1. Create a new project from the GitHub repo.
2. Railway will detect Node automatically.
3. Set the environment variables.
4. Deploy.

## Mobile App

Yi-Brain now includes a Capacitor-based mobile shell so the existing web UI can run as an Android or iOS app.

Quick start:

```bash
npm install
npm run mobile:sync
npm run mobile:android
```

For iOS:

```bash
npm run mobile:ios
```

Important:

- The mobile app uses the bundled web UI from `public/`
- The backend API should be deployed online and configured in `public/app-config.js`
- Detailed Chinese instructions are in `MOBILE_APP_ZH.md`

## GitHub publish

```bash
git init
git checkout -b codex/yi-brain
git add .
git commit -m "feat: initial Yi-Brain app"
git remote add origin <your-github-repo-url>
git push -u origin codex/yi-brain
```

## Architecture

```text
User UI -> Intent analysis -> I Ching engine -> Reasoning composer -> Optional LLM interpretation -> UI rendering
```

## API

### `POST /api/reading`

Request body:

```json
{
  "question": "Should I change jobs this year?",
  "category": "career",
  "profile": "I have 5 years of product experience and feel stuck.",
  "options": ["stay", "switch"],
  "useAI": true
}
```

### `POST /api/fengshui-assessment`

Request body:

```json
{
  "imageDataUrl": "data:image/jpeg;base64,...",
  "roomType": "bedroom",
  "goals": "better sleep and calmer energy",
  "concerns": "mirror facing the bed",
  "language": "zh-CN"
}
```

## Notes

- If no API key is set, the app still works and returns rule-based interpretations.
- If no API key is set, the feng shui photo feature falls back to a generic checklist instead of image recognition.
- Hexagram source text in this project is modern paraphrase to keep output concise and product-friendly.
