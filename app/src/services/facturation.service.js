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

export async function updateClientFacturado(clientId, facturado) {
  const query = `UPDATE clientes SET facturado = ? WHERE id = ?`;
  const [result] = await pool.query(query, [facturado ? 1 : 0, clientId]);
  return result;
}
