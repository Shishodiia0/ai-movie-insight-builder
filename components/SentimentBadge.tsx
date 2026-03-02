interface Props {
  type: "Positive" | "Mixed" | "Negative";
}

export default function SentimentBadge({ type }: Props) {

  const styleMap = {
    Positive: "bg-green-500/20 text-green-400 border border-green-400/40",
    Mixed: "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40",
    Negative: "bg-red-500/20 text-red-400 border border-red-400/40",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full font-semibold ${styleMap[type]} backdrop-blur-md`}
    >
      {type}
    </span>
  );
}