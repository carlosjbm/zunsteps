export const allContexts = [
  {
    contextName: "operacion_matematica",

    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "resultado", weight: 3 },
      { word: "es", weight: 2 },
    ],

    intents: [
      {
        intentName: "resultado_operacion",
        // Palabras clave específicas de la intención
        keywords: [{ word: "resultado", weight: 3 }],
        // Patrones opcionales (frases completas)
        patterns: ["el resultado es"],
        response: {
          index: ":",
          tokens: [": "],
        },
      },
    ],
  },
];
