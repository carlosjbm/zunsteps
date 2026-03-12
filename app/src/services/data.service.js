import {
  acciones as actionesQuery,
  modules as modulesQuery,
  pasos as pasosQuery,
  secciones as seccionesQuery,
} from "@/app/lib/queries/QueryProvider";
import { addCargosToModules } from "@/app/lib/helpers/cargoHelper";

const { default: pool } = require("@/app/lib/db");

/**
 * Obtiene todos los datos de la base de datos y los estructura
 * en el formato esperado por el frontend
 */
export async function getAllData() {
  try {
    const [modulesData] = await pool.query(modulesQuery);
    const [seccionesData] = await pool.query(seccionesQuery);
    const [accionesData] = await pool.query(actionesQuery);
    const [pasosData] = await pool.query(pasosQuery);

    // Construir estructura anidada: módulos > secciones > acciones > pasos
    const estructuredModules = modulesData.map((modulo) => {
      // Filtrar secciones para este módulo
      const moduloSecciones = seccionesData.filter(
        (s) => s.id_modulo === modulo.id,
      );

      // Mapear secciones con sus acciones
      const mSecciones = moduloSecciones.map((seccion) => {
        // Filtrar acciones para esta sección
        const seccionAcciones = accionesData.filter(
          (a) => a.id_seccion === seccion.id,
        );

        // Mapear acciones con sus pasos
        const acciones = seccionAcciones.map((accion) => {
          // Filtrar pasos para esta acción
          const accionPasos = pasosData.filter(
            (p) => p.id_accion === accion.id,
          );

          return {
            id: accion.id,
            aNombre: accion.nombre,
            aResumen: accion.descripcion,
            pasos: accionPasos.map((paso) => ({
              label: paso.titulo,
              description: paso.descripcion,
              image: paso.imagen || null,
            })),
          };
        });

        return {
          id: seccion.id,
          sNombre: seccion.nombre,
          acciones,
        };
      });

      return {
        id: modulo.id,
        mNombre: modulo.nombre,
        mImage: modulo.imagen || null,
        mResumen: modulo.descripcion,
        mSecciones,
      };
    });

    // Agregar cargos aleatorios a todas las acciones
    const modulosConCargos = addCargosToModules(estructuredModules);

    return modulosConCargos;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
}

/**
 * Obtiene un módulo específico con toda su estructura
 */
export async function getModuleById(moduleId) {
  const allData = await getAllData();
  return allData.find((m) => m.id === moduleId) || null;
}
