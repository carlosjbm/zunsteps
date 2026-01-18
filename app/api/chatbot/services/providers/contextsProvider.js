export const allContexts = [
  {
    contextName: "datos_del_modelo",

    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "presentate", weight: 5 },
      { word: "quien", weight: 1 },
      { word: "eres", weight: 2 },
      { word: "hablame", weight: 1 },
      { word: "ti", weight: 1 },
      { word: "creador", weight: 1 },
      { word: "version", weight: 1 },
      { word: "sirves", weight: 1.5 },
    ],

    intents: [
      {
        intentName: "decir_versiones",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "versiones", weight: 3 },
          { word: "cuales", weight: 0.5 },
          { word: "todas", weight: 1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: ["que versiones tienes", "dime tus versiones"],
        response: {
          index: "Ok,",
          tokens: [
            "Actualmente cuento con las versiones -> ZUNex core 1.2.1, ZUNex core 1.3.2(semi-determinista) ",
          ],
        },
      },
      {
        intentName: "decir_versiones_estables",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "versiones", weight: 3 },
          { word: "estables", weight: 3 },
          { word: "seguras", weight: 1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: ["versiones estables", "dime tus versiones seguras"],
        response: {
          index: "Bien,",
          tokens: [
            `Actualmente cuento con la version -> ZUNex core 1.2.1, pese a ser una version 
            completamente determinista es la version mas estable. Pero si deseas te puedo hablar sobre 
            la version mas actualizada ZUNex core 1.3.2 y sus principales features ?`,
          ],
        },
      },
      {
        intentName: "hablar_sobre_ultima_version",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "version", weight: 3 },
          { word: "actualizada", weight: 1 },
          { word: "mas", weight: 0.1 },
          { word: "si", weight: 1 },
          { word: "hablame", weight: 0.1 },
          { word: "ultima", weight: 0.1 },
        ],
        // Patrones opcionales (frases completas)
        patterns: ["version mas actualizada", "cual es la ultima version"],
        response: {
          index: "exelente,",
          tokens: [
            `La version mas actualizada es la ZUNex core 1.3.2 y su principal caracteristica es que es 
            un modelo semi-determinista.`,
          ],
        },
      },
    ],
  },
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
  {
    contextName: "cosas_de_perros",

    // Palabras clave del contexto (para detectContext)
    keywords: [{ word: "perro", weight: 5 }],
    intents: [
      {
        intentName: "accion",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "hace", weight: 3 },
          { word: "y", weight: 2 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [
          "resumeme que es la suite zun",
          "hazme un resumen de que es la suite zun",
        ],
        response: {
          index: "el",
          tokens: [{ word: "ladra", weight: 3 }],
        },
      },
    ],
  },
  {
    contextName: "cosas_que_hacen_los_gatos",

    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "los", weight: 5 },
      { word: "gatos", weight: 5 },
    ],
    intents: [
      {
        intentName: "acciones_realizan_gatos",
        // Palabras clave específicas de la intención
        keywords: [{ word: "hacen", weight: 10 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          index: "el",
          tokens: [
            { word: "generan", weight: 1 },
            { word: "sueltan", weight: 1.25 },
            { word: "ronronean", weight: 0.9 },
          ],
        },
      },
      {
        intentName: "como_hacen_los_gatos",
        // Palabras clave específicas de la intención
        keywords: [
          { word: "como", weight: 5.1 },
          { word: "hacen", weight: 5 },
        ],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          index: "el",
          tokens: [
            { word: "ronronean", weight: 1 },
            { word: "cazan", weight: 1.25 },
            { word: "mauian", weight: 1.5 },
          ],
        },
      },
    ],
  },
  {
    contextName: "cosas_generan",
    // Palabras clave del contexto (para detectContext)
    keywords: [
      { word: "generan", weight: 1 },
      { word: "sueltan", weight: 1.5 },
    ],
    intents: [
      {
        intentName: "accion",
        // Palabras clave específicas de la intención
        keywords: [{ word: "generan", weight: 1 }],
        // Patrones opcionales (frases completas)
        patterns: [""],
        response: {
          index: "el",
          tokens: [{ word: "pelo", weight: 1 }],
        },
      },
    ],
  },
];
