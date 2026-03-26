import pool from "@/app/lib/db";
/**Queries en cuestion */
const allTipsQuery = `
SELECT tips.nombre AS tip_nombre, tips.descripcion as tip_descripcion,
tips.fecha_creado as tip_fecha,temas.nombre as tip_tema,tips.imagen as tip_image,clases.nombre as tip_clase,usuarios.nombre as usuarip_nombre,usuarios.telefono as usuario_telefono FROM tips 
INNER JOIN usuarios INNER JOIN temas INNER JOIN clases 
WHERE tips.usuario_id=usuarios.id AND tips.id_tema=temas.id AND tips.id_clase=clases.id; `;

export async function getTips() {
  const [rows] = await pool.query(allTipsQuery);
  return rows;
}
