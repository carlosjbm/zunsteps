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
  {
    contextName: "modulos_zun",
    // Palabras clave del contexto (para detectContext)
    keywords: [{ word: "zun", weight: 0.1 }],
    intents: [
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunst", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "almacen", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunacc", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "contabilidad", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunpms", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "recepcion", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zuncc", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "validacion", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunut", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "utiles", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunsa", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "seguridad", weight: 0.1 }],
        },
      },
      {
        intentName: "sirve ",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "sirve", weight: 0.1 },
          { word: "zunaft", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "activos", weight: 0.1 }],
        },
      },
    ],
  },
  {
    contextName: "datos_modelo",
    // Palabras clave del contexto (para detectContext)
    keywords: [{ word: "modelo", weight: 0.1 }],
    intents: [
      {
        intentName: "soy",
        // Palabras clave específicas de la intención
        keywords: [{ word: "eres", weight: 0.1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "zunex-core", weight: 0.1 }],
        },
      },
      {
        intentName: "estoy en la version",
        // Palabras clave específicas de la intención
        keywords: [{ word: "version", weight: 0.1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          tokens: [{ word: "1.3.3", weight: 0.1 }],
        },
      },
    ],
  },
];
