import { detectContext } from "./detectContext.service";
import { normalize } from "./normalize.service";
import { buildResponse } from "./textGenerate.service";

// export async function creativeResponsesGenerator(textFragment) {
//   try {
//     const normalizadText = await normalize(textFragment);
//     const splitedText = normalizadText.split(" ");

//     const firstWord = splitedText[0];
//     const lastWord = splitedText[splitedText.length - 1];
//     const creativeResponse = await detectContext(textFragment);

//     return creativeResponse;
//   } catch (err) {
//     return err;
//   }
// }

export function creativeResponsesGenerator(textFragment) {
  if (textFragment) {
    const creativeResponse = buildResponse(textFragment);
    return creativeResponse;
  }
}
