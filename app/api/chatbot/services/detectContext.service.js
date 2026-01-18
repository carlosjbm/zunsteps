import { allContexts } from "./providers/contextsProvider";

export const detectContext = (prompt) => {
  const text = prompt;

  let bestContext = null;
  let bestContextScore = 0;

  allContexts.forEach((ctx) => {
    let contextScore = 0;

    // 1. Coincidencia por keywords del contexto (ponderadas)
    ctx.keywords.forEach((kw) => {
      if (text.includes(kw.word)) {
        contextScore += kw.weight;
      }
    });

    // Si no hay coincidencias, ignorar este contexto
    if (contextScore === 0) return;

    // 2. Evaluar intenciones dentro del contexto
    let bestIntent = null;
    let bestIntentScore = 0;

    ctx.intents.forEach((intent) => {
      let intentScore = 0;

      // Coincidencia por keywords de la intención
      intent.keywords.forEach((kw) => {
        if (text.includes(kw.word)) {
          intentScore += kw.weight;
        }
      });

      // Coincidencia por patrones completos
      intent.patterns.forEach((pattern) => {
        if (text.includes(pattern)) {
          intentScore += 5; // peso fuerte por coincidencia exacta
        }
      });

      // Guardar la intención con mayor peso
      if (intentScore > bestIntentScore) {
        bestIntentScore = intentScore;
        bestIntent = intent;
      }
    });

    // 3. Sumar intención al puntaje del contexto
    const totalScore = contextScore + bestIntentScore;

    // 4. Seleccionar el contexto ganador
    if (totalScore > bestContextScore) {
      bestContextScore = totalScore;
      bestContext = {
        ...ctx,
        weight: totalScore,
        intent: bestIntent,
      };
    }
  });
  const tokensLength = bestContext?.intent?.response?.tokens.length || 0;
  const contextKeywords = bestContext?.keywords;
  const contextName = bestContext?.contextName;
  const tokensResponse = bestContext?.intent?.response?.tokens.sort(
    (a, b) => b.weight - a.weight
  )[0];

  return {
    contextName: contextName,
    token: tokensResponse?.word,
    tokensCount: tokensLength,
    keywords: contextKeywords,
  }; //|| bestContext?.intents[0]?.response?.tokens tokensResponse?.word
};
