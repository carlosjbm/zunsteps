const { obtenerMayorPeso } = require("../helpers/utilities-functions");
const { detectContext } = require("./detectContext.service");

export const buildResponse = (intro) => {
  const detectedContext = detectContext(intro);
  const notResponses = " ";

  if (
    detectedContext &&
    detectedContext.items &&
    detectedContext.items.length > 0
  ) {
    const firstItem = detectedContext.items[0];

    // Obtener solo el token con mayor peso
    const topToken = firstItem.tokens.sort((a, b) => b.weight - a.weight)[0]
      .token; // Solo el primero (mayor peso)

    // Construir la frase: "el resultado es"
    const generatedText = `${firstItem.index} ${topToken}`;

    return generatedText;
  }

  return notResponses;
};
