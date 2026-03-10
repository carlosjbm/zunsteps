import pool from "@/app/lib/db";
export async function getPasos(modulo = 1, seccion = 1, accion = 1) {
  const [pasos] = await pool.query(`SELECT 
    p.id AS paso_id, 
    p.descripcion AS paso_descripcion, 
    a.id AS accion_id, 
    a.nombre AS accion_nombre, 
    s.id AS seccion_id, 
    s.nombre AS seccion_nombre, 
    m.id AS modulo_id, 
    m.nombre AS modulo_nombre,
    m.descripcion AS modulo_descrip 
    FROM pasos p INNER JOIN acciones a ON p.id_accion = a.id 
    INNER JOIN secciones s ON a.id_seccion = s.id 
    INNER JOIN modulos m ON s.id_modulo = m.id 
    WHERE m.id = ${modulo} -- ID del módulo específico 
    AND s.id = ${seccion} -- ID de la sección específica 
    AND a.id = ${accion};`);
  return pasos;
}
