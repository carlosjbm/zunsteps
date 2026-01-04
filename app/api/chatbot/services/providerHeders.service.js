export const byQuestionHeaders = [
  "😎 Buena pregunta: ",
  "😉 Exelente pregunta: ",
  "👍 Es una buena interrogante: ",
  "👌 Que buena pregunta: ",
];
export const pushRandomHeader = (groupHeader) => {
  return groupHeader[Math.floor(Math.random() * groupHeader.length)];
};
