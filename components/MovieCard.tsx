import SentimentBadge from "./SentimentBadge";

interface Props {
  movie: any;
  sentiment?: {
    summary: string;
    classification: "Positive" | "Mixed" | "Negative";
  };
}

export default function MovieCard({ movie, sentiment }: Props) {
  return (
  <div className="mt-12 w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-white animate-fade-in">
    
    <div className="flex flex-col md:flex-row gap-8">
      
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full md:w-72 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />

      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">{movie.Title}</h2>

        <p className="mb-2"><span className="font-semibold text-purple-300">Year:</span> {movie.Year}</p>
        <p className="mb-2"><span className="font-semibold text-purple-300">Rating:</span> ⭐ {movie.imdbRating}</p>
        <p className="mb-2"><span className="font-semibold text-purple-300">Cast:</span> {movie.Actors}</p>
        <p className="mt-4 text-gray-200 leading-relaxed">
          {movie.Plot}
        </p>
      </div>
    </div>

    {sentiment && (
      <div className="mt-8 border-t border-white/20 pt-6">
        <h3 className="text-xl font-semibold mb-3 text-purple-300">
          Audience Sentiment
        </h3>
        <p className="text-gray-200 mb-4">{sentiment.summary}</p>
        <SentimentBadge type={sentiment.classification} />
      </div>
    )}
  </div>
);
}