import pool from "@/app/lib/db";
//todos los modulos
export async function getModules() {
  const [rows] = await pool.query("select * from modulos");
  return rows;
}
