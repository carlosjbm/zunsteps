-- Optener los pasos que corresponden al modulo que busco
SELECT 
m.nombre AS Modulo, 
s.nombre AS Seccion, 
a.nombre AS Accion, 
p.nombre AS Paso, 
p.descripcion AS DescripcionPaso 
FROM 
modulos m JOIN secciones s ON s.id_modulo = m.id JOIN
 acciones a ON a.id_seccion = s.id JOIN
  pasos p ON p.id_accion = a.id 
  WHERE 
  m.nombre = 'ZUNaft' 
  
  