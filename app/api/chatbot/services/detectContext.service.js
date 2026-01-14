import { allContexts } from "./providers/contextsProvider";

export const detectContext = (prompt) => {
  const tokens = prompt.toLowerCase().split(/\s+/);
  const contextMatches = [];

  allContexts.forEach((ct) => {
    const contextTokens = ct.context.toLowerCase().split(/\s+/);
    let weight = 0;

    tokens.forEach((token) => {
      if (contextTokens.includes(token)) weight++;
    });

    if (weight > 0) {
      // detectar intención
      let detectedIntent = null;

      ct.intents.forEach((intent) => {
        const intentMatch = intent.keywords.some((k) => tokens.includes(k));
        if (intentMatch) detectedIntent = intent;
      });

      contextMatches.push({
        ...ct,
        weight,
        intent: detectedIntent,
      });
    }
  });

  return contextMatches.length > 0
    ? contextMatches.sort((a, b) => b.weight - a.weight)[0]
    : "🤔";
};
