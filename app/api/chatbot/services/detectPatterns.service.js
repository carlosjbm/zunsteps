import {
  comandPatterns,
  questionsPatterns,
  requestPatterns,
} from "./providers/patternsProvider";

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
//detectar intencion de orden imperativa
export const detectComand = (possibleComand) => {
  let isComnd = false;
  let comand;
  const loweredPossibleComand = toLowerText(possibleComand);
  comandPatterns.map((pc) => {
    if (loweredPossibleComand.includes(pc)) {
      isComnd = true;
      comand = possibleComand.replace(pc, "");
    }
  });
  return { possiblity: isComnd, extractComand: comand };
};
