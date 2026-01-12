//Para casos de preguntas
export const byQuestionHeaders = [
  "😎 Buena pregunta: ",
  "😉 Exelente pregunta: ",
  "👍 Es una buena interrogante: ",
  "👌 Que buena pregunta: ",
];
//Resultados matematicos
export const byMathOppsHeaders = [
  "🙃 Puedo con eso ... ",
  "Si la cuenta no me falla, el resultado es...",
  " 📝 La respuesta a esa operacion es:  ",
  "⚡ Soy matematica hermano, el resultado es...",
];

//Para lograr que los headers sean mas ramdom evitando respuestas monotonas
export const pushRandomHeader = (groupHeader) => {
  return groupHeader[Math.floor(Math.random() * groupHeader.length)];
};
