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
  {
    contextName: "conocimiento_basico_suitezun",

    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "suite", weight: 3 },
      { word: "zun", weight: 2 },
      { word: "resumir", weight: 1 },
      { word: "resumen", weight: 1 },
      { word: "breve", weight: 1 },
    ],
    intents: [
      {
        intentName: "resumir_suite_zun",
        // Palabras clave específicas de la intención
        keywords: [{ word: "resumen", weight: 5 }],
        // Patrones opcionales (frases completas)
        patterns: [
          "resumeme que es la suite zun",
          "hazme un resumen de que es la suite zun",
        ],
        response: {
          index: "Vamos a ello",
          tokens: [" aqui deberia ir un resumen de que es la suite zun 😎"],
        },
      },
      {
        intentName: "detallar_suite_zun",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "detalles", weight: 3 },
          { word: "detalle", weight: 3 },
          { word: "detallado", weight: 1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [
          "detalles que es la suite zun",
          "detallame que es la suite zun",
        ],
        response: {
          index: "Vamos a ello",
          tokens: [" aqui deberia ir los detalles de que es la suite zun 😉"],
        },
      },
    ],
  },
];
