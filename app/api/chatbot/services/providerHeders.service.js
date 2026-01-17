//Para casos de preguntas
export const byQuestionHeaders = [
  "😎 Buena pregunta, ",
  "Exelente pregunta, ",
  "Es una buena interrogante, ",
  "👌 Que buena pregunta, ",
];
//Resultados matematicos
export const byMathOppsHeaders = [
  "puedo con eso ... ",
  "si la cuenta no me falla, ",
  "soy matematica hermano, ",
];
//Para peticiones no imperativas del usuario
export const byNotImperativRequest = [
  "claro que puedo hacerlo, ",
  "si claro, ",
  "estaria encantado, ",
  "por su puesto, ",
];
export const byComand = [
  "perfecto, si hacemos  ",
  "por su puesto, al hacer ",
  "ok, voy a trabajar   ",
];

//Para lograr que los headers sean mas ramdom evitando respuestas monotonas
export const pushRandomHeader = (groupHeader) => {
  return groupHeader[Math.floor(Math.random() * groupHeader.length)];
};
