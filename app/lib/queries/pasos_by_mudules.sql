--Cada modulo con sus respectivos pasos
SELECT 
    m.id          AS ModuloID,
    m.nombre     AS ModuloNombre,
    m.imagen      AS ModuloImagen,
    m.descripcion    AS ModuloResumen,

    s.id          AS SeccionID,
    s.nombre     AS SeccionNombre,

    a.id          AS AccionID,
    a.nombre     AS AccionNombre,
    a.descripcion    AS AccionResumen,

    p.id          AS PasoID,
    p.nombre       AS PasoLabel,
    p.descripcion AS PasoDescripcion
FROM modulos m
JOIN secciones s ON s.id_modulo = m.id
JOIN acciones a ON a.id_seccion = s.id
JOIN pasos p ON p.id_accion = a.id
ORDER BY m.id, s.id, a.id, p.id;