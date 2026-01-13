import { allContexts } from "./providers/contextsProvider";

export const detectContext = (prompt) => {
  const tokens = prompt.toLowerCase().split(/\s+/);
  const contextMatches = [];

  allContexts.forEach((ct) => {
    let weight = 0;
    tokens.forEach((token) => {
      if (ct.context.toLowerCase().includes(token)) {
        weight++;
      }
    });

    if (weight > 0) {
      contextMatches.push({
        ...ct,
        weight,
        tokens: tokens.filter((t) => ct.context.toLowerCase().includes(t)),
      });
    }
  });

  return contextMatches.length > 0
    ? contextMatches.sort((a, b) => b.weight - a.weight)[0]
    : "🤔";
};
