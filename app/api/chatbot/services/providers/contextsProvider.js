export const allContexts = [
  {
    contextName: "cosas que hacen los gatos: ",

    // Palabras clave del contexto (para detectContext)
    keywords: [{ word: "gatos", weight: 0.1 }],
    intents: [
      {
        intentName: "generan",
        // Palabras clave específicas de la intención
        keywords: [{ word: "generan", weight: 0.1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "pelo", weight: 0.1 }],
        },
      },
      {
        intentName: "hacen",
        // Palabras clave específicas de la intención
        keywords: [{ word: "hacen", weight: 0.1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "ronronean", weight: 0.1 }],
        },
      },
    ],
  },

  {
    contextName: "amistades_gatos",
    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "pajaros", weight: 0.1 },
      { word: "gatos", weight: 0.1 },
    ],
    intents: [
      {
        intentName: "son",
        // Palabras clave específicas de la intención
        keywords: [{ word: "son", weight: 0.1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "amigos", weight: 0.1 }],
        },
      },
    ],
  },
  {
    contextName: "como_son_gatos",
    // Palabras clave del contexto (para detectContext)
    keywords: [{ word: "gatos", weight: 0.1 }],
    intents: [
      {
        intentName: "son ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "son", weight: 0.1 },
          { word: "como", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "peludos", weight: 0.1 }],
        },
      },
    ],
  },
];
