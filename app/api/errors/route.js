import {
  getErrors,
  getErrorById,
  getErrorsByAccessLevel,
  getErrorsPaginated,
  searchErrors,
  storeError,
  updateError,
  deleteError,
  deleteMultipleErrors,
} from "@/app/src/services/faststeps.service";

/**
 * GET /api/errors
 * Obtiene errores con soporte para: todos, por ID, por nivel, búsqueda, paginación
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const nivel_acc = searchParams.get("nivel_acc");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    // Obtener por ID específico
    if (id) {
      const result = await getErrorById(parseInt(id));
      return Response.json(result, {
        status: result.success ? 200 : 404,
      });
    }

    // Buscar errores
    if (search) {
      const result = await searchErrors(search);
      return Response.json(result, {
        status: result.success ? 200 : 400,
      });
    }

    // Obtener por nivel de acceso
    if (nivel_acc) {
      const result = await getErrorsByAccessLevel(parseInt(nivel_acc));
      return Response.json(result, {
        status: result.success ? 200 : 400,
      });
    }

    // Obtener con paginación (default)
    const result = await getErrorsPaginated(page, limit);
    return Response.json(result, {
      status: result.success ? 200 : 400,
    });
  } catch (error) {
    console.error("Error en GET /api/errors:", error);
    return Response.json(
      {
        success: false,
        message: "Error al procesar la solicitud",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * POST /api/errors
 * Crear un nuevo error
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { error, solucion, imagen, nivel_acc } = body;

    // Validar datos requeridos
    if (!error || !solucion) {
      return Response.json(
        {
          success: false,
          message: "El error y la solución son requeridos",
        },
        { status: 400 },
      );
    }

    const result = await storeError(
      error,
      solucion,
      imagen || null,
      nivel_acc || 1,
    );

    return Response.json(result, {
      status: result.success ? 201 : 400,
    });
  } catch (error) {
    console.error("Error en POST /api/errors:", error);
    return Response.json(
      {
        success: false,
        message: "Error al crear el error",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/errors
 * Actualizar un error existente
 */
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, error, solucion, imagen, nivel_acc } = body;

    // Validar ID
    if (!id) {
      return Response.json(
        {
          success: false,
          message: "El ID del error es requerido",
        },
        { status: 400 },
      );
    }

    const result = await updateError(id, error, solucion, imagen, nivel_acc);

    return Response.json(result, {
      status: result.success
        ? 200
        : result.message.includes("no encontrado")
          ? 404
          : 400,
    });
  } catch (error) {
    console.error("Error en PUT /api/errors:", error);
    return Response.json(
      {
        success: false,
        message: "Error al actualizar el error",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/errors
 * Eliminar uno o múltiples errores
 */
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { id, ids } = body;

    // Eliminar múltiples
    if (ids && Array.isArray(ids)) {
      const result = await deleteMultipleErrors(ids);
      return Response.json(result, {
        status: result.success ? 200 : 400,
      });
    }

    // Eliminar uno
    if (id) {
      const result = await deleteError(id);
      return Response.json(result, {
        status: result.success
          ? 200
          : result.message.includes("no encontrado")
            ? 404
            : 400,
      });
    }

    return Response.json(
      {
        success: false,
        message: "Se requiere un ID o una lista de IDs",
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("Error en DELETE /api/errors:", error);
    return Response.json(
      {
        success: false,
        message: "Error al eliminar el error",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
