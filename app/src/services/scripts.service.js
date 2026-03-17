const { default: pool } = require("@/app/lib/db");

//Obtener todos los scripts almacenados
export async function getScripts(params) {
  const [data] = await pool.query("select * from scripts");
  return data;
}
