const { obtenerMayorPeso } = require("../helpers/utilities-functions");
const { detectContext } = require("./detectContext.service");

export const buildResponse = (intro) => {
  const detected = detectContext(intro);
  const notResponses = "";

  // Si no se detectó contexto
  if (!detected || detected === "🤔") {
    return notResponses;
  }

  // Obtener la intención detectada
  const intent = detected.intent;
  if (!intent || !intent.response) {
    return notResponses;
  }

  const { index, tokens } = intent.response;

  // Obtener el token con mayor peso
  const topToken = tokens.sort((a, b) => b.weight - a.weight)[0]?.token;

  if (!topToken) {
    return notResponses;
  }

  // Construir la frase final: index + token con mayor peso
  const generatedText = `${index} ${topToken}`;

  return generatedText;
};
