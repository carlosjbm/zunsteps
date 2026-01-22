export const pairFrequencies = (text) => {
  // 1. Normalizar texto: minúsculas y sin puntuación
  const clean = text
    .toLowerCase()
    .replace(/[.,;:!?]/g, " ")
    .trim();

  // 2. Tokenizar
  const tokens = clean.split(/\s+/);

  // 3. Calcular pares consecutivos
  const pairCounts = {};
  for (let i = 0; i < tokens.length - 1; i++) {
    const pair = `${tokens[i]} ${tokens[i + 1]}`;
    pairCounts[pair] = (pairCounts[pair] || 0) + 1;
  }

  // 4. Calcular frecuencias relativas
  const totalPairs = tokens.length - 1;
  const pairFrequencies = Object.entries(pairCounts).map(([pair, count]) => ({
    pair,
    count,
    frequency: count / totalPairs,
  }));

  // 5. Devolver resultado como objeto organizado
  return {
    totalPairs,
    pairs: pairFrequencies,
  };
};
