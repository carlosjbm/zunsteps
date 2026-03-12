export const modules = "select * from modulos";
export const secciones = "select * from secciones";
export const acciones = "select * from acciones";
export const pasos = "select * from pasos";

export function getEspecificModule(idModule = 1) {
  const name = `select nombre from modulos where id=${idModule}`;
  const descrip = `select descripcion from modulos where id=${idModule}`;
  return { name, descrip };
}

export function getSectionsByModule(idModule = 1) {
  const query = `select * from secciones where id_modulo=${idModule}`;
  return query;
}

export function getEspecificSection(idSection = 1) {
  const query = `select * from secciones where id=${idSection}`;
  return query;
}

export function getActionBySeccion(idSection = 1) {
  const query = `select * from acciones where id_seccion=${idSection}`;
  return query;
}

export function getEspecificAction(idAction = 1) {
  const query = `select * from acciones where id=${idAction}`;
  return query;
}

export function getPasosByAction(idAction = 1) {
  const query = `select * from pasos where id_accion=${idAction}`;
  return query;
}

export function getEspecificPaso(idPaso = 1) {
  const query = `select * from pasos where id=${idPaso}`;
  return query;
}
