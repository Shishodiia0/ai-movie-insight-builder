# 🎬 AI Movie Insight Builder

A full-stack web application that analyzes movie details and generates AI-powered audience sentiment insights using IMDb IDs.

---

## 🚀 Live Demo

Deployed on Vercel:  
👉 [(https://ai-movie-insight-builder.vercel.app/)](https://ai-movie-insight-builder.vercel.app/)

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes

### APIs
- OMDb API (Movie metadata)
- OpenAI API (AI sentiment analysis)
- Rule-based fallback sentiment classifier

---

## 🧠 Architecture Rationale

- Used Next.js full-stack to avoid over-engineering.
- API routes isolate backend logic cleanly.
- Tailwind ensures responsive modern UI.
- Fallback sentiment logic ensures resilience if AI API quota fails.

---

## ⚙️ Setup Instructions

1. Clone the repository:
   git clone https://github.com/Shishodiia0/ai-movie-insight-builder.git

2. Install dependencies:
   npm install

3. Create `.env.local` file:
   OMDB_API_KEY=your_key
   OPENAI_API_KEY=your_key

4. Run locally:
   npm run dev

---

## 📌 Features

- IMDb ID input validation
- Movie metadata fetching
- Poster, cast, rating, year, plot display
- AI-powered sentiment summary
- Sentiment classification (Positive / Mixed / Negative)
- Fallback sentiment logic
- Responsive glassmorphism UI
- Error handling

---

## 🧪 Testing

Basic error handling tested for:
- Invalid IMDb ID
- Empty input
- API failure fallback

---

## 📎 Assumptions

- OMDb API used for movie metadata.
- Audience review text simulated for sentiment analysis.
- AI fallback ensures application stability if API quota is exceeded.
