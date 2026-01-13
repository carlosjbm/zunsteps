import { allContexts } from "./providers/contextsProvider";

export const detectContext = (prompt) => {
  const tokens = prompt.toLowerCase().split(/\s+/);
  const contextMatches = [];

  allContexts.forEach((ct) => {
    const contextTokens = ct.context.toLowerCase().split(/\s+/);

    let weight = 0;

    tokens.forEach((token) => {
      if (contextTokens.includes(token)) {
        weight++;
      }
    });

    if (weight > 0) {
      contextMatches.push({
        ...ct,
        weight,
        matchedTokens: tokens.filter((t) => contextTokens.includes(t)),
      });
    }
  });

  return contextMatches.length > 0
    ? contextMatches.sort((a, b) => b.weight - a.weight)[0]
    : "🤔";
};
