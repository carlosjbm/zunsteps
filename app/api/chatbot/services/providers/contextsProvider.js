export const allContexts = [
  {
    contextName: "operacion_matematica",
    context:
      "resultado operacion matematica sumar restar multiplicar dividir calculo",
    items: [
      {
        index: "el resultado",
        tokens: [
          { token: "es ", weight: 0.8 },
          { token: "esta ", weight: 0.2 },
        ],
      },
    ],
  },

  {
    contextName: "version_sistema",
    context: "version sistema actual estado release informacion",
    items: [
      {
        index: "actualmente me encuentro en la version",
        tokens: [
          { token: "2.3.1 ", weight: 0.8 },
          { token: "estable", weight: 0.2 },
        ],
      },
    ],
  },
];
