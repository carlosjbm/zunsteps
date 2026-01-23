const STOPWORDS = [
  // "y", "de", "la", "el", "las", "un", "una", "en", "a", "que",
  // "por", "con", "se", "su", "es", "al", "del"
];
const text =
  "los gatos y los pajaros son amigos son peludos, los gatos sueltan pelo ";
export const getConections = () => {
  // 1. Normalizar texto y separar por puntuación
  const clean = text
    .toLowerCase()
    .replace(/[.,;:!?]/g, " ")
    .trim();

  // 2. Tokenizar
  const tokens = clean.split(/\s+/).filter((t) => t.length > 0);

  // 3. Obtener tokens únicos
  const uniqueTokens = [...new Set(tokens)];

  // 4. Construir combinaciones basadas en secuencia inmediata
  const result = uniqueTokens.map((token) => {
    const counts = {};

    // recorrer el texto y contar cuántas veces "token" va seguido de "otro"
    for (let i = 0; i < tokens.length - 1; i++) {
      if (tokens[i] === token) {
        const next = tokens[i + 1];
        counts[next] = (counts[next] || 0) + 1;
      }
    }

    // convertir a formato requerido
    const combinations = Object.entries(counts).map(([tok, frec]) => ({
      token: tok,
      frec,
    }));

    return {
      token,
      combinations,
    };
  });

  return result;
};
