import { NextResponse } from "next/server";
import {
  getUserById,
  updateUser,
  deleteUser,
  regenerateUserToken,
  toggleUserStatus,
} from "@/app/src/services/user.service";

/**
 * GET /api/admin/usuarios/:id - Obtiene un usuario específico
 */
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const usuario = await getUserById(id);

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(usuario, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/admin/usuarios/[id]:", error);
    return NextResponse.json(
      { error: "Error obteniendo usuario" },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/admin/usuarios/:id - Actualiza un usuario
 */
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { nombre, telefono } = body;

    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos" },
        { status: 400 },
      );
    }

    const usuario = await updateUser(id, nombre, telefono);

    return NextResponse.json(
      {
        success: true,
        message: "Usuario actualizado",
        usuario,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en PUT /api/admin/usuarios/[id]:", error);
    return NextResponse.json(
      { error: error.message || "Error actualizando usuario" },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/admin/usuarios/:id - Desactiva un usuario
 */
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const result = await deleteUser(id);

    return NextResponse.json(
      {
        success: true,
        message: "Usuario desactivado",
        ...result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en DELETE /api/admin/usuarios/[id]:", error);
    return NextResponse.json(
      { error: error.message || "Error eliminando usuario" },
      { status: 500 },
    );
  }
}

/**
 * PATCH /api/admin/usuarios/:id/regenerate-token - Regenera el token
 */
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { action } = await request.json();

    if (action === "regenerate-token") {
      const result = await regenerateUserToken(id);
      return NextResponse.json(
        {
          success: true,
          message: "Token regenerado",
          ...result,
        },
        { status: 200 },
      );
    }

    if (action === "toggle-status") {
      const result = await toggleUserStatus(id);
      return NextResponse.json(
        {
          success: true,
          message: `Usuario ${result.is_active ? "activado" : "desactivado"}`,
          ...result,
        },
        { status: 200 },
      );
    }

    return NextResponse.json({ error: "Acción no válida" }, { status: 400 });
  } catch (error) {
    console.error("Error en PATCH /api/admin/usuarios/[id]:", error);
    return NextResponse.json(
      { error: error.message || "Error procesando solicitud" },
      { status: 500 },
    );
  }
}
