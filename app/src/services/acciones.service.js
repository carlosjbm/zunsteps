import pool from "@/app/lib/db";
export async function getAcciones() {
  const [acciones] = await pool.query("select * from acciones");
  return acciones;
}
