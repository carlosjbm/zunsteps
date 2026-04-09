/*Consulta para la optencion de los datos relacionados con las colaboraciones de los ususarios en el sistema
valores:
 usuario_id
 fecha_uc -> fecha de la ultima colaboracion
 nombre_uc-> nombre de la ultima colaboracion
 usuario_nombre
 cant_c->cantidad de colaboraciones de un usuario
 sistema_tc-> total de colaboraciones en el sistema
 porc_c->porciento del total de colaboraciones
*/
export const colaboration = `
SELECT
    usuario_id,
    tips.fecha_creado AS fecha_uc,
    tips.nombre AS nombre_uc,
    usuarios.nombre AS usuario_nombre,
    SUM(tips.likes) AS usuario_likes,
    COUNT(usuario_id) AS cant_c,
    (
SELECT
    COUNT(*)
FROM
    tips
) AS sistema_tc,
ROUND((
    SELECT
        COUNT(usuario_id) * 100 /(
    SELECT
        COUNT(*)
    FROM
        tips
    )
)) AS porc_c
FROM
    tips,
    usuarios
WHERE
    usuario_id = usuarios.id
GROUP BY
    (usuario_id)
ORDER BY
    cant_c
DESC;`;

// cantidad de likes de un usuario especifico
export const likesUser = `
SELECT
usuarios.nombre as usuario_nombre,
    COUNT(likes) AS cant_l
FROM
    tips, usuarios
WHERE
    usuario_id = ?;
`;
//usuarios con sus likes correspondientes
export const usersAndLikes = `
SELECT
    usuarios.nombre AS usuario_nombre,
    SUM(tips.likes) AS usuario_likes,
  ROUND((SUM(tips.likes)) /((
SELECT
    COUNT(*)
FROM
    tips
)), 2) AS indic_gusto
FROM
    tips,
    usuarios
WHERE
    usuarios.id = tips.usuario_id
GROUP BY
    usuarios.id;
`;
