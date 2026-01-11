// Respuestas simuladas para el chatbot
// import { getConocimiento } from "./returnKnow";

import { zunacc } from "./modulos/zunacc";
import { zunaft } from "./modulos/zunaft";
import { zunhr } from "./modulos/zunhr";
import { zunst } from "./modulos/zunst";
import { zunpr } from "./modulos/zunpr";
import { tablasConocimientos } from "./knowlebasic/tablas";
import { tips } from "./knowlebasic/tips";
import { basicAnswers } from "./knowlebasic/basicAnswers";
import { loadKnowledgeHelper } from "./helpers/loadKnowledgeHelper";

function normalize(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[\W_]+/g, " ")
    .trim();
}

function tokens(text) {
  return normalize(text).split(/\s+/).filter(Boolean);
}

// Base de respuestas iniciales (preguntas comunes)
const chatbotResponses = {
  hola: "¡Hola! ¿En qué puedo ayudarte hoy?",
  gracias: "¡De nada! Si tienes otra pregunta, escríbela aquí.",
  "cómo exporto mi proyecto":
    "Para exportar tu proyecto:\n1. Ejecuta el comando `pnpm run build`\n2. Luego ejecuta `pnpm run export`\n3. Sube la carpeta `out` a Netlify\n\nAlternativa: Usa el plugin oficial de Netlify para Next.js para soportar SSR.",
  "qué es renderpremium":
    "`renderPremium` es una **bandera de control de acceso**\n\n**¿Qué hace?**\n- Si es `true`: El usuario puede ver contenido premium\n- Si es `false`: El contenido premium está bloqueado\n\nÚsala para proteger secciones especiales de tu aplicación.",
  "hablame de ti":
    "**ZUNex Core v1.2.0**\n\nSoy tu asistente inteligente especializado en ayudarte con:\n- Módulos de gestión empresarial\n- Configuración de proyectos\n- Guías de implementación\n- Solución de problemas técnicos\n\n¿Qué necesitas hoy?",
  "no cierra el front":
    "Si tu aplicación no cierra el frontend correctamente:\n\n**Posibles causas:**\n- Procesos en background no detenidos\n- Conexiones activas sin cerrar\n- Timers o intervals sin limpiar\n\n**Soluciones:**\n1. Revisa los efectos (useEffect) y asegúrate de limpiar\n2. Cierra conexiones en componentes con estado\n3. Termina procesos en el servidor\n\n¿Necesitas ayuda con código específico?",
};

// Construir una base de conocimiento a partir de los módulos
const modules = [zunacc, zunaft, zunhr, zunst, zunpr];
const knowledge = [];
//para las respuestas basicas
loadKnowledgeHelper(basicAnswers, knowledge);
//para el conocimiento de las tablas
loadKnowledgeHelper(tablasConocimientos, knowledge);
//para diferentes tips
loadKnowledgeHelper(tips, knowledge);
//para el conocimieto de modulos
// modules.forEach((m) => {
//   if (!m) return;
//   const title = m.mNombre || "";
//   const summary = m.mResumen || "";
//   knowledge.push({
//     source: title,
//     text: `${title}. ${summary}`,
//     answer: summary,
//   });

//   if (Array.isArray(m.mSecciones)) {
//     m.mSecciones.forEach((sec) => {
//       if (!sec) return;
//       const sname = sec.sNombre || "";
//       const sResumen = sec.sResumen || "";
//       if (sname || sResumen) {
//         knowledge.push({
//           source: `${title} > ${sname}`,
//           text: `${sname}. ${sResumen}`,
//           answer: sResumen || sname,
//         });
//       }
//       if (Array.isArray(sec.acciones)) {
//         sec.acciones.forEach((act) => {
//           if (!act) return;
//           const aname = act.aNombre || "";
//           const aResumen = act.aResumen || "";
//           let pasosText = "";
//           if (Array.isArray(act.pasos)) {
//             pasosText = act.pasos
//               .map((p) =>
//                 p.label
//                   ? `${p.label}: ${p.description || ""}`
//                   : p.description || ""
//               )
//               .join(" \n");
//           }
//           const combined = `${aname}. ${aResumen} ${pasosText}`.trim();
//           knowledge.push({
//             source: `${title} > ${sname} > ${aname}`,
//             text: combined,
//             answer: aResumen || aname,
//           });
//         });
//       }
//     });
//   }
// });

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

  // 1) búsqueda exacta en respuestas predefinidas
  if (chatbotResponses[qNorm]) return chatbotResponses[qNorm];

  // 2) puntuación por tokens compartidos con la base de conocimiento
  const qTokens = tokens(qNorm);
  let best = { score: 0, answer: null, source: null };

  knowledge.forEach((k) => {
    const kTokens = tokens(k.text);
    // contar tokens comunes
    let common = 0;
    qTokens.forEach((t) => {
      if (kTokens.includes(t)) common += 1;
    });
    // favorecer coincidencias en el título/source
    const titleTokens = tokens(k.source);
    titleTokens.forEach((t) => {
      if (qTokens.includes(t)) common += 0.5; // menor peso, pero suma
    });

    // longitud normalizada
    const score = common / (1 + Math.log(1 + kTokens.length));
    if (score > best.score) {
      best = { score, answer: k.answer, source: k.source };
    }
  });

  if (best.score > 0.35) {
    return best.answer;
  }

  // 3) si no hay coincidencias, intentar búsqueda por substring en textos
  // const qLower = qNorm;
  // for (const k of knowledge) {
  //   if (
  //     k.text.toLowerCase().includes(qLower) ||
  //     k.source.toLowerCase().includes(qLower)
  //   ) {
  //     return k.answer;
  //   }
  // }

  // 4) fallback genérico
  return (
    "Lo siento, no tengo una respuesta específica para esa pregunta. " +
    "Puedes intentar preguntar de otra forma o consultar la documentación del módulo correspondiente."
  );
}

export default chatbotResponses;
