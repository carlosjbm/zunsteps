import { writeInUnKnowTopics } from "@/app/lib/helpers/witePending";
import { tokens } from "./extracTokens.service";
import { normalize } from "./normalize.service";
import {
  byComand,
  byMathOppsHeaders,
  byNotImperativRequest,
  byQuestionHeaders,
  pushRandomHeader,
} from "./providerHeders.service";
import { isMathOpp, mathOpsResolver } from "./adaptative.service";
import {
  detectComand,
  detectQuestion,
  detectRequest,
  toLowerText,
} from "./detectPatterns.service";
import { detectContext } from "./detectContext.service";
import { buildResponse } from "./textGenerate.service";
import {
  creativeResponsesGenerator,
  templateUserequest,
} from "./generate_creatives_responses.service";

const {
  loadKnowledgeHelper,
} = require("@/app/lib/helpers/loadKnowledgeHelper");
const { basicAnswers } = require("@/app/lib/knowlebasic/basicAnswers");
const { tablasConocimientos } = require("@/app/lib/knowlebasic/tablas");
const { tips } = require("@/app/lib/knowlebasic/tips");
const { zunacc } = require("@/app/lib/modulos/zunacc");
const { zunaft } = require("@/app/lib/modulos/zunaft");
const { zunhr } = require("@/app/lib/modulos/zunhr");
const { zunpr } = require("@/app/lib/modulos/zunpr");
const { zunst } = require("@/app/lib/modulos/zunst");

// Base de respuestas iniciales (preguntas comunes)
const chatbotResponses = {
  hola: "😊¡Hola! ¿En qué puedo ayudarte hoy?",
  gracias: "¡De nada! Si tienes otra pregunta, escríbela aquí.",
  version: "1.3.2",
};
const unKnow = {
  ups: "Lo sient no conozco de es tema",
};
const nosabe = [];

// Construir una base de conocimiento a partir de los módulos
const modules = [zunacc, zunaft, zunhr, zunst, zunpr];
const knowledge = [];
//para las respuestas basicas
//loadKnowledgeHelper(basicAnswers, knowledge);
//para el conocimiento de las tablas
//loadKnowledgeHelper(tablasConocimientos, knowledge);
//para diferentes tips
loadKnowledgeHelper(tips, knowledge);

// Añadir entradas exactas derivadas de knowledge para búsquedas rápidas
knowledge.forEach((k) => {
  const key = normalize(k.source);
  if (!(key in chatbotResponses)) {
    chatbotResponses[key] = k.answer;
  }
});

// Función que intenta devolver la mejor respuesta posible
export function getBestResponse(query) {
  const q = (query || "").toString().trim();
  if (!q) return "No has escrito ninguna pregunta.";

  const qNorm = normalize(q);
  const qIsQuestion = detectQuestion(query);
  const qIsRequest = detectRequest(query);
  const { possiblity, extractComand } = detectComand(query);

  //habilidades del modelo(agregar mas habilidades en el futuro)
  const qIsMathOpp = isMathOpp(query); //detectar si el prompt es una operacion matematica
  const qSolveMathOpp = mathOpsResolver(query); //resolver la operacion matematica
  // 1) búsqueda exacta en respuestas predefinidas
  if (chatbotResponses[qNorm]) return chatbotResponses[qNorm];

  // 2) puntuación por tokens compartidos con la base de conocimiento
  const qTokens = tokens(qNorm);
  let best = { score: 0, answer: null, source: null };

  //capacidad de detectar preguntas, operaciones matematicas y resolverlas feature 2.3.2
  if (qIsQuestion) {
    //habilidad de resolucion de operaciones matematicas basicas
    if (qIsMathOpp) {
      return (
        pushRandomHeader(byQuestionHeaders) +
        detectContext(qSolveMathOpp) +
        qSolveMathOpp
      );
    }
    return pushRandomHeader(byQuestionHeaders) + ` ` + detectContext(query);
  }
  if (qIsRequest) {
    //habilidad de resolucion de operaciones matematicas basicas
    if (qIsMathOpp) {
      return (
        pushRandomHeader(byNotImperativRequest) +
        detectContext(qSolveMathOpp) +
        qSolveMathOpp
      );
    }
    pushRandomHeader(byNotImperativRequest) + ` ` + detectContext(query);
  }
  if (possiblity) {
    //habilidad de resolucion de operaciones matematicas basicas
    if (qIsMathOpp) {
      return (
        pushRandomHeader(byComand) +
        toLowerText(extractComand) +
        `: ` +
        qSolveMathOpp
      );
    }
    return (
      pushRandomHeader(byComand) +
      toLowerText(extractComand) +
      ` ` +
      detectContext(query)
    );
  }
  //habilidad de resolucion de operaciones matematicas basicas
  if (qIsMathOpp) {
    return (
      pushRandomHeader(byMathOppsHeaders) +
      detectContext(qSolveMathOpp) +
      qSolveMathOpp
    );
  }

  //Capacidad de dar respuestas deterministas
  // knowledge.forEach((k) => {
  //   if (!k || !k.text || !k.source) return;
  //   const kTokens = tokens(k.text);
  //   // contar tokens comunes
  //   let common = 0;
  //   qTokens.forEach((t) => {
  //     if (kTokens.includes(t)) common += 1;
  //   });
  //   // favorecer coincidencias en el título/source
  //   const titleTokens = tokens(k.source);
  //   titleTokens.forEach((t) => {
  //     if (qTokens.includes(t)) common += 0.5; // menor peso, pero suma
  //   });

  //   // longitud normalizada
  //   const score = common / (1 + Math.log(1 + kTokens.length));
  //   if (score > best.score) {
  //     best = { score, answer: k.answer, source: k.source };
  //   }
  // });

  // if (best.score > 0.35) {
  //   if (qIsQuestion) {
  //     return pushRandomHeader(byQuestionHeaders) + ` ` + detectContext(query);
  //   }
  //   if (qIsRequest) {
  //     return (
  //       pushRandomHeader(byNotImperativRequest) + ` ` + detectContext(query)
  //     );
  //   }
  //   if (possiblity) {
  //     pushRandomHeader(byComand) +
  //       toLowerText(extractComand) +
  //       ` ` +
  //       detectContext(query);
  //   }

  //   // return best.answer + `\n✨Referenciando a: ${best.source}`;
  // }

  // // 3) si no hay coincidencias, intentar búsqueda por substring en textos
  // const qLower = qNorm;
  // for (const k of knowledge) {
  //   if (!k || !k.text || !k.source) continue;
  //   if (
  //     k.text.toLowerCase().includes(qLower) ||
  //     k.source.toLowerCase().includes(qLower)
  //   ) {
  //     return `\n😏 Suponiendo que te  refieres a: ${k.source}` + " " + k.answer;
  //   }
  // }

  // 4) fallback genérico
  writeInUnKnowTopics(query);
  return (
    "😢 Lo siento, no tengo una respuesta específica para esa pregunta. " +
    "Pero intentare prepararme mejor para cuando regreses de nuevo por aqui"
  );
}

export default chatbotResponses;
