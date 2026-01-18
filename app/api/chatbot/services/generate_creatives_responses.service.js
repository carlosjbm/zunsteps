import { detectContext } from "./detectContext.service";

export const generatedText = (
  prompt,
  res = detectContext(prompt).contextName,
  iterations = 1,
  maxIterations = detectContext(prompt).tokensCount || 0
) => {
  const { token, keywords } = detectContext(prompt);

  // Límite de iteraciones para evitar recursión infinita
  if (iterations >= maxIterations) {
    return res;
  }

  const contextResponse = token;
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
