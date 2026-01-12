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
const requestPatterns = [
  "puedes",
  "puede",
  "puedes hacer",
  "te parece",
  "te parece si",
  "pudieras",
];

export const toLowerText = (textChain) => textChain.toLowerCase();
//detecto intencion de pregunta por parte del usuario
export const detectQuestion = (text) => {
  let isQuestion = false;
  const lowerText = toLowerText(text);

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
//detecto intencion de peticion por parte del usuario
export const detectRequest = (possibleRequest) => {
  let isRequest = false;
  const loweredPossibleRequest = toLowerText(possibleRequest);
  requestPatterns.map((rp) => {
    if (loweredPossibleRequest.includes(rp)) {
      isRequest = true;
    }
  });
  return isRequest;
};
