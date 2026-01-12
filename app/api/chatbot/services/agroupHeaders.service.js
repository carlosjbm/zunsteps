export const detectQuestion = (text) => {
  const questionsPatterns = [
    "como",
    "que",
    "quien",
    "donde",
    "cuando",
    "cual",
    "por que",
    "cuanto",
  ];
  let isQuestion = false;
  const lowerText = text.toLowerCase();
  if (text.includes("?")) {
    isQuestion = true;
  }
  questionsPatterns.map((qp) => {
    if (lowerText.includes(qp)) {
      isQuestion = true;
    }
  });
  return isQuestion;
};
