import { detectContext } from "./detectContext.service";

export const generatedText = (
  prompt,
  res = "",
  iterations = 0,
  maxIterations = detectContext(prompt).tokensCount || 1
) => {
  // Límite de iteraciones para evitar recursión infinita
  if (iterations >= maxIterations) {
    return res;
  }

  const contextResponse = detectContext(prompt).token;
  const newToken = res + ` ` + contextResponse;

  // Evitar repetir el mismo prompt
  if (newToken === prompt) {
    return newToken;
  }

  // Acumular la respuesta a res
  res = newToken;

  // Pasar res como parámetro para la siguiente iteración
  return generatedText(res, res, iterations + 1, maxIterations);
};
