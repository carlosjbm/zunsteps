import pool from "@/app/lib/db";

// ==================== QUERIES ====================
const allErrorsQuery = `SELECT * FROM errores ORDER BY id DESC`;
const errorByIdQuery = `SELECT * FROM errores WHERE id = ?`;
const errorsByAccessLevelQuery = `SELECT * FROM errores WHERE nivel_acc = ? ORDER BY id DESC`;
const createNewError = `INSERT INTO errores(
    ERROR,
    solucion,
    imagen,
    nivel_acc
)
VALUES(
    ?,
    ?,
    ?,
    ?
);`;
const updateErrorQuery = `UPDATE errores SET
    ERROR = ?,
    solucion = ?,
    imagen = ?,
    nivel_acc = ?
WHERE id = ?;`;
const deleteErrorQuery = `DELETE FROM errores WHERE id = ?;`;
const countErrorsQuery = `SELECT COUNT(*) as total FROM errores`;
const paginatedErrorsQuery = `SELECT * FROM errores ORDER BY id DESC LIMIT ? OFFSET ?`;
const searchErrorsQuery = `SELECT * FROM errores WHERE 
    ERROR LIKE ? OR solucion LIKE ? OR imagen LIKE ? 
    ORDER BY id DESC`;

// ==================== VALIDACIÓN ====================
/**
 * Valida los datos del error
 * @param {string} error - Nombre del error
 * @param {string} solucion - Solución del error
 * @param {string} imagen - Imagen del error
 * @param {number} nivel_acc - Nivel de acceso
 * @returns {object} - Objeto con validación y mensaje de error
 */
function validateErrorData(error, solucion, imagen, nivel_acc) {
  if (!error || error.trim().length === 0) {
    return { isValid: false, message: "El error es requerido" };
  }
  if (!solucion || solucion.trim().length === 0) {
    return { isValid: false, message: "La solución es requerida" };
  }
  if (typeof nivel_acc !== "number" || nivel_acc < 0) {
    return {
      isValid: false,
      message: "El nivel de acceso debe ser un número positivo",
    };
  }
  return { isValid: true };
}

// ==================== READ OPERATIONS ====================
/**
 * Obtiene todos los errores
 * @returns {object} - Datos con lista de errores
 */
export async function getErrors() {
  try {
    const [errors] = await pool.query(allErrorsQuery);
    return { success: true, data: errors, count: errors.length };
  } catch (error) {
    console.error("Error en getErrors:", error);
    return {
      success: false,
      message: "Error al obtener errores",
      error: error.message,
    };
  }
}

/**
 * Obtiene un error por ID
 * @param {number} id - ID del error
 * @returns {object} - Datos del error encontrado
 */
export async function getErrorById(id) {
  try {
    if (!id || isNaN(id)) {
      return { success: false, message: "ID inválido" };
    }
    const [errors] = await pool.query(errorByIdQuery, [id]);
    if (errors.length === 0) {
      return { success: false, message: "Error no encontrado" };
    }
    return { success: true, data: errors[0] };
  } catch (error) {
    console.error("Error en getErrorById:", error);
    return {
      success: false,
      message: "Error al obtener el error",
      error: error.message,
    };
  }
}

/**
 * Obtiene errores por nivel de acceso
 * @param {number} nivel_acc - Nivel de acceso
 * @returns {object} - Datos con lista de errores
 */
export async function getErrorsByAccessLevel(nivel_acc) {
  try {
    if (!nivel_acc || isNaN(nivel_acc)) {
      return { success: false, message: "Nivel de acceso inválido" };
    }
    const [errors] = await pool.query(errorsByAccessLevelQuery, [nivel_acc]);
    return { success: true, data: errors, count: errors.length };
  } catch (error) {
    console.error("Error en getErrorsByAccessLevel:", error);
    return {
      success: false,
      message: "Error al obtener errores por nivel",
      error: error.message,
    };
  }
}

/**
 * Obtiene errores con paginación
 * @param {number} page - Número de página (comienza en 1)
 * @param {number} limit - Cantidad de registros por página
 * @returns {object} - Datos paginados
 */
export async function getErrorsPaginated(page = 1, limit = 10) {
  try {
    if (page < 1 || limit < 1) {
      return {
        success: false,
        message: "Página y límite deben ser mayores a 0",
      };
    }

    const offset = (page - 1) * limit;
    const [[{ total }]] = await pool.query(countErrorsQuery);
    const [errors] = await pool.query(paginatedErrorsQuery, [limit, offset]);

    return {
      success: true,
      data: errors,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Error en getErrorsPaginated:", error);
    return {
      success: false,
      message: "Error al obtener errores paginados",
      error: error.message,
    };
  }
}

/**
 * Busca errores por término
 * @param {string} searchTerm - Término de búsqueda
 * @returns {object} - Datos con resultados de búsqueda
 */
export async function searchErrors(searchTerm) {
  try {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return { success: false, message: "El término de búsqueda es requerido" };
    }

    const term = `%${searchTerm}%`;
    const [errors] = await pool.query(searchErrorsQuery, [term, term, term]);
    return { success: true, data: errors, count: errors.length };
  } catch (error) {
    console.error("Error en searchErrors:", error);
    return {
      success: false,
      message: "Error al buscar errores",
      error: error.message,
    };
  }
}

// ==================== CREATE OPERATIONS ====================
/**
 * Guarda un nuevo error en la base de datos
 * @param {string} error - Nombre del error
 * @param {string} solucion - Solución del error
 * @param {string} imagen - URL o ruta de la imagen
 * @param {number} nivel_acc - Nivel de acceso
 * @returns {object} - Resultado de la operación
 */
export async function storeError(error, solucion, imagen, nivel_acc) {
  try {
    // Validar datos
    const validation = validateErrorData(error, solucion, imagen, nivel_acc);
    if (!validation.isValid) {
      return { success: false, message: validation.message };
    }

    const [result] = await pool.query(createNewError, [
      error.trim(),
      solucion.trim(),
      imagen?.trim() || null,
      nivel_acc,
    ]);

    return {
      success: true,
      message: "Error guardado exitosamente",
      data: {
        id: result.insertId,
        error: error.trim(),
        solucion: solucion.trim(),
        imagen: imagen?.trim() || null,
        nivel_acc,
      },
    };
  } catch (error) {
    console.error("Error en storeError:", error);
    return {
      success: false,
      message: "Error al guardar el error",
      error: error.message,
    };
  }
}

// ==================== UPDATE OPERATIONS ====================
/**
 * Actualiza un error existente
 * @param {number} id - ID del error a actualizar
 * @param {string} error - Nuevo nombre del error
 * @param {string} solucion - Nueva solución
 * @param {string} imagen - Nueva imagen
 * @param {number} nivel_acc - Nuevo nivel de acceso
 * @returns {object} - Resultado de la operación
 */
export async function updateError(id, error, solucion, imagen, nivel_acc) {
  try {
    // Validar ID
    if (!id || isNaN(id)) {
      return { success: false, message: "ID inválido" };
    }

    // Validar datos
    const validation = validateErrorData(error, solucion, imagen, nivel_acc);
    if (!validation.isValid) {
      return { success: false, message: validation.message };
    }

    // Verificar que el error existe
    const [existing] = await pool.query(errorByIdQuery, [id]);
    if (existing.length === 0) {
      return { success: false, message: "Error no encontrado" };
    }

    // Ejecutar actualización
    const [result] = await pool.query(updateErrorQuery, [
      error.trim(),
      solucion.trim(),
      imagen?.trim() || null,
      nivel_acc,
      id,
    ]);

    return {
      success: true,
      message: "Error actualizado exitosamente",
      data: {
        id,
        error: error.trim(),
        solucion: solucion.trim(),
        imagen: imagen?.trim() || null,
        nivel_acc,
      },
    };
  } catch (error) {
    console.error("Error en updateError:", error);
    return {
      success: false,
      message: "Error al actualizar el error",
      error: error.message,
    };
  }
}

// ==================== DELETE OPERATIONS ====================
/**
 * Elimina un error
 * @param {number} id - ID del error a eliminar
 * @returns {object} - Resultado de la operación
 */
export async function deleteError(id) {
  try {
    // Validar ID
    if (!id || isNaN(id)) {
      return { success: false, message: "ID inválido" };
    }

    // Verificar que el error existe
    const [existing] = await pool.query(errorByIdQuery, [id]);
    if (existing.length === 0) {
      return { success: false, message: "Error no encontrado" };
    }

    // Ejecutar eliminación
    const [result] = await pool.query(deleteErrorQuery, [id]);

    return {
      success: true,
      message: "Error eliminado exitosamente",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    console.error("Error en deleteError:", error);
    return {
      success: false,
      message: "Error al eliminar el error",
      error: error.message,
    };
  }
}

// ==================== BATCH OPERATIONS ====================
/**
 * Elimina múltiples errores
 * @param {number[]} ids - Array de IDs a eliminar
 * @returns {object} - Resultado de la operación
 */
export async function deleteMultipleErrors(ids) {
  try {
    if (!Array.isArray(ids) || ids.length === 0) {
      return { success: false, message: "Se requiere un array de IDs" };
    }

    // Validar que todos los IDs sean válidos
    if (!ids.every((id) => !isNaN(id))) {
      return { success: false, message: "Uno o más IDs son inválidos" };
    }

    const deleteQuery = `DELETE FROM errores WHERE id IN (${ids.map(() => "?").join(",")})`;
    const [result] = await pool.query(deleteQuery, ids);

    return {
      success: true,
      message: `${result.affectedRows} erro(s) eliminado(s)`,
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    console.error("Error en deleteMultipleErrors:", error);
    return {
      success: false,
      message: "Error al eliminar errores",
      error: error.message,
    };
  }
}
