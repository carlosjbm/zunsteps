import { getConections } from "./conectors.service";

export const getBestConector = (word) => {
  let conector = [];
  let conectorToken = null;
  const conectors = getConections();
  if (!conectors) {
    return "->";
  }
  for (const c of conectors) {
    for (const ccomb of c.combinations) {
      if (word === ccomb.token) {
        conector = [...conector, c];
        conectorToken = c.token;
      }
    }
  }
  return conector[0]?.token;
};
