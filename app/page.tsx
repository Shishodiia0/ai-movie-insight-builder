"use client";

import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [imdbID, setImdbID] = useState("");
  const [movie, setMovie] = useState<any>(null);
  const [sentiment, setSentiment] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!imdbID) {
      alert("Enter IMDb ID");
      return;
    }

    setLoading(true);
    setMovie(null);
    setSentiment(null);

    try {
      // Fetch Movie
      const movieRes = await fetch(`/api/movie?id=${imdbID}`);
      const movieData = await movieRes.json();

      if (!movieRes.ok) {
        alert(movieData.error);
        setLoading(false);
        return;
      }

      setMovie(movieData);

      // Prepare Review Text
      const reviewText = `
Movie Title: ${movieData.Title}
IMDb Rating: ${movieData.imdbRating}
Plot: ${movieData.Plot}

Sample Audience Comments:
- Amazing performances and groundbreaking visuals.
- A mind-bending story that changed sci-fi forever.
- Some viewers found it complex but overall very impactful.
`;

      // Fetch Sentiment
      const sentimentRes = await fetch("/api/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: reviewText,
        }),
      });

      const sentimentData = await sentimentRes.json();

      if (sentimentRes.ok) {
        setSentiment(sentimentData);
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
  <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center p-8 text-white">
    
    <h1 className="text-4xl font-extrabold mb-10 tracking-wide text-center">
      🎬 AI Movie Insight Builder
    </h1>

    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g. tt0133093)"
        value={imdbID}
        onChange={(e) => setImdbID(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <button
        onClick={handleSearch}
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold shadow-lg hover:shadow-purple-500/40"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>

    {movie && (
      <MovieCard movie={movie} sentiment={sentiment} />
    )}
  </main>
);
}