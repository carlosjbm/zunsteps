import pool from "@/app/lib/db";
import { getEspecificModule, modules } from "@/app/lib/queries/QueryProvider";
//todos los modulos
export async function getModules() {
  const [rows] = await pool.query(getEspecificModule(1));
  return rows;
}
