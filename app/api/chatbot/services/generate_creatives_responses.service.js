import { detectContext } from "./detectContext.service";
import { detectFriendly } from "./detectPatterns.service";
import { byFriend, pushRandomHeader } from "./providerHeders.service";

export const generatedText = (prompt) => {
  const pIsFriendly = detectFriendly(prompt);
  const friendWord = pushRandomHeader(byFriend);
  const { contextName, token, tokensCount, intentName, keywords } =
    detectContext(prompt);
  //para poder
  //tener un mejor manejo
  //de las plantillas de respuestas
  const templates = {
    basicTemplate: `${intentName} ${token}.`,
    friendlyTemplate: `${friendWord} ${intentName} ${token}.`,
  };
  if (pIsFriendly) {
    return templates.friendlyTemplate;
  }
  return templates.basicTemplate;
};
