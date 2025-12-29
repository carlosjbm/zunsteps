import { normalize } from "./normalize.service";

export function tokens(text) {
  return normalize(text).split(/\s+/).filter(Boolean);
}
