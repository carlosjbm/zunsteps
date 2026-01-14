export const allContexts = [
  {
    contextName: "operacion_matematica",

    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "resultado", weight: 3 },
      { word: "operacion", weight: 2 },
      { word: "matematica", weight: 2 },
      { word: "sumar", weight: 3 },
      { word: "restar", weight: 3 },
      { word: "multiplicar", weight: 3 },
      { word: "dividir", weight: 3 },
      { word: "calculo", weight: 2 },
    ],

    intents: [
      {
        intentName: "resultado_operacion",

        // Palabras clave específicas de la intención
        keywords: [
          { word: "resultado", weight: 3 },
          { word: "calcular", weight: 2 },
          { word: "cuanto", weight: 1 },
        ],

        // Patrones opcionales (frases completas)
        patterns: ["cual es el resultado", "dame el resultado", "resultado de"],

        response: {
          index: "el resultado",
          tokens: [
            { token: "es ", weight: 0.8 },
            { token: "esta ", weight: 0.2 },
          ],
        },
      },
    ],
  },

  {
    contextName: "version_sistema",

    keywords: [
      { word: "version", weight: 3 },
      { word: "actual", weight: 2 },
      { word: "sistema", weight: 1 },
      { word: "estado", weight: 1 },
    ],

    intents: [
      {
        intentName: "consultar_version",

        keywords: [
          { word: "version", weight: 3 },
          { word: "actual", weight: 2 },
        ],

        patterns: [
          "en que version estas",
          "cual es tu version",
          "version actual",
        ],

        response: {
          index: "actualmente me encuentro en la version",
          tokens: [
            { token: "2.3.1 ", weight: 0.8 },
            { token: "estable", weight: 0.2 },
          ],
        },
      },
    ],
  },
];
