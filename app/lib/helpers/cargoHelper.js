// app/lib/helpers/cargoHelper.js
import { cargos } from "../cargos";

/**
 * Obtiene un cargo random del array de cargos
 */
export const getRandomCargo = () => {
  const randomIndex = Math.floor(Math.random() * cargos.length);
  return cargos[randomIndex].name;
};

/**
 * Agrega cargos a todas las acciones de un módulo
 * Incluye siempre el cargo GET y uno random
 */
export const addCargosToModule = (module) => {
  const GET_CARGO = "Get";

  return {
    ...module,
    mSecciones: module.mSecciones.map((seccion) => ({
      ...seccion,
      acciones: seccion.acciones.map((accion) => {
        // Obtener un cargo random para esta acción
        const randomCargo = getRandomCargo();

        // Crear array de cargos: siempre GET + un random
        const cargosArray = [GET_CARGO];

        // Agregar random solo si es diferente a GET
        if (randomCargo !== GET_CARGO) {
          cargosArray.push(randomCargo);
        }

        return {
          ...accion,
          cargos: cargosArray,
        };
      }),
    })),
  };
};

/**
 * Agrega cargos a múltiples módulos
 */
export const addCargosToModules = (modules) => {
  return modules.map((module) => addCargosToModule(module));
};
