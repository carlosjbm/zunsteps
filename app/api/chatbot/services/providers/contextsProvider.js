export const allContexts = [
  {
    contextName: "operacion_matematica",
    context:
      "resultado operacion matematica sumar restar multiplicar dividir calculo resolver",
    intents: [
      {
        intentName: "resultado_operacion",
        keywords: ["resultado", "operacion", "calculo"],
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
    context: "version sistema actual estado release informacion software",
    intents: [
      {
        intentName: "consultar_version",
        keywords: ["version", "actual"],
        response: {
          index: "actualmente me encuentro en la version",
          tokens: [
            { token: "2.3.1 ", weight: 0.8 },
            { token: "estable", weight: 0.2 },
          ],
        },
      },
      {
        intentName: "consultar_version",
        keywords: ["mas", "estable"],
        response: {
          index: "actualmente la version mas estable ",
          tokens: [
            { token: "es la 2.3.1 ", weight: 0.8 },
            { token: "estable", weight: 0.2 },
          ],
        },
      },
    ],
  },
];
