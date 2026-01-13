export const allContexts = [
  {
    context: "resultado de una operacion matematica",
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
    context: "version en la que se encuentra",
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
