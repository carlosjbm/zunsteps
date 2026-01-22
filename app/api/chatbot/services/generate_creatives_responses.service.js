import { detectContext } from "./detectContext.service";

export const generatedText = (prompt) => {
  const { contextName, token, tokensCount, intentName, keywords } =
    detectContext(prompt);
  //para poder
  //tener un mejor manejo
  //de las plantillas de respuestas
  const templates = { basicTemplate: `${intentName} ${token}.` };

  return templates.basicTemplate;
};
