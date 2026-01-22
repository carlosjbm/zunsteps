import { getConections } from "./conectors.service";

export const getBestConector = (word) => {
  let conector = [];
  const conectors = getConections();
  for (const c of conectors) {
    for (const ccomb of c.combinations) {
      if (word === ccomb.token) {
        conector = [...conector, c];
      }
    }
  }
  return conector;
};
