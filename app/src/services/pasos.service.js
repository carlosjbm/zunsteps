import pool from "@/app/lib/db";
import { pasosData } from "@/app/lib/queries/pasosQuery";

export async function getPasos(modulo = 1) {
  const [pasos] = await pool.query(pasosData, [modulo]);
  return pasos;
}
