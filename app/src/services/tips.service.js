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

export async function createTip(
  nombre,
  descripcion,
  usuarioId = 1,
  temId = 1,
  claseId = 1,
) {
  const insertQuery = `
    INSERT INTO tips (nombre, descripcion, usuario_id, id_tema, id_clase, fecha_creado) 
    VALUES (?, ?, ?, ?, ?, NOW())
  `;
  const [result] = await pool.query(insertQuery, [
    nombre,
    descripcion,
    usuarioId,
    temId,
    claseId,
  ]);
  return result;
}
