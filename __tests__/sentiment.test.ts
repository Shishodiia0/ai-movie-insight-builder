describe("Sentiment Fallback Logic", () => {
  function classifySentiment(text: string): string {
    const positiveWords = ["good", "great", "amazing", "excellent", "love"];
    const negativeWords = ["bad", "terrible", "awful", "hate", "poor"];

    const lowerText = text.toLowerCase();

    const positiveCount = positiveWords.filter(word =>
      lowerText.includes(word)
    ).length;

    const negativeCount = negativeWords.filter(word =>
      lowerText.includes(word)
    ).length;

    if (positiveCount > negativeCount) return "Positive";
    if (negativeCount > positiveCount) return "Negative";
    return "Mixed";
  }

  test("detects positive sentiment", () => {
    expect(classifySentiment("This movie was amazing and excellent")).toBe("Positive");
  });

  test("detects negative sentiment", () => {
    expect(classifySentiment("This movie was terrible and awful")).toBe("Negative");
  });

  test("detects mixed sentiment", () => {
    expect(classifySentiment("The movie was good but also bad")).toBe("Mixed");
  });
});