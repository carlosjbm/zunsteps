const { default: pool } = require("@/app/lib/db");

const clientesQuery = "select * from clientes";

export async function getClients() {
  const [rows] = await pool.query(clientesQuery);
  return rows;
}
export async function getClientFacturated() {
  const query = `select * from clientes where facturado=1`;
  const [rows] = await pool.query(query);
  return rows;
}
export async function getCountClientesByCadena(idCadena) {
  const query = `SELECT * from clientes where id_cadena=? `;
  const [rows] = await pool.query(query, [idCadena]);
  return rows.length;
}
export async function getFacturatedClientsByCadena(idCadena, facturated = 1) {
  const query = `select * from clientes where facturado=? and id_cadena=?`;
  const [rows] = await pool.query(query, [facturated, idCadena]);
  return rows.length;
}
export async function updateClientFacturado(clientId, facturado) {
  const query = `UPDATE clientes SET facturado = ? WHERE id = ?`;
  const [result] = await pool.query(query, [facturado ? 1 : 0, clientId]);
  return result;
}
