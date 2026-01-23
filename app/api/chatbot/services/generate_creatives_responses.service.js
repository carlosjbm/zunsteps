import { getBestConector } from "./bestConector.service";
import { detectContext } from "./detectContext.service";
import { detectFriendly } from "./detectPatterns.service";
import { byFriend, pushRandomHeader } from "./providerHeders.service";

const addKeyConectors = (keys) => {
  let keyConected = [];
  keys.map((k) => {
    keyConected = [...keyConected, getBestConector(k.word) + ` ` + k.word];
  });
  return keyConected;
};

export const generatedText = (prompt) => {
  const pIsFriendly = detectFriendly(prompt);
  const friendWord = pushRandomHeader(byFriend);
  const { contextName, token, tokensCount, intentName, keywords } =
    detectContext(prompt);
  const tokenConector = getBestConector(token);
  const conectedKeys = addKeyConectors(keywords);
  //para poder
  //tener un mejor manejo
  //de las plantillas de respuestas
  const templates = {
    basicTemplate: `${conectedKeys} ${tokenConector} ${token}.`,
    friendlyTemplate: `${friendWord} ${conectedKeys} ${tokenConector} ${token}.`,
  };
  if (pIsFriendly) {
    return templates.friendlyTemplate;
  }
  return templates.basicTemplate;
};
