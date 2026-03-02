import pool from "@/app/lib/db";
//Logica de negocio.
export async function getModules() {
  const [rows] = await pool.query("select * from modulos");
  return rows;
}
