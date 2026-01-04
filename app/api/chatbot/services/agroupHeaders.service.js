export const agroupHeaders = (text) => {
  const questionsPatterns = ["como", "que", "quien"];
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
