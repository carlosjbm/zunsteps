import pool from "@/app/lib/db";

const query = `SELECT usuario_id,usuarios.nombre as usuario_nombre, COUNT(usuario_id) as cant_colaboraciones
FROM tips, usuarios WHERE usuario_id=usuarios.id GROUP BY (usuario_id) ORDER BY cant_colaboraciones DESC;`;

export async function getBestCollaborators() {
  const [rows] = await pool.query(query);
  return rows;
}
