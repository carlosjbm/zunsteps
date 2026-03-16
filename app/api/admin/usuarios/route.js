import { NextResponse } from "next/server";
import {
  getAllUsers,
  createUser,
  phoneExists,
} from "@/app/src/services/user.service";

/**
 * GET /api/admin/usuarios - Obtiene todos los usuarios
 */
export async function GET(request) {
  try {
    const usuarios = await getAllUsers();
    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/admin/usuarios:", error);
    return NextResponse.json(
      { error: "Error obteniendo usuarios" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/usuarios - Crea un nuevo usuario
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, telefono } = body;

    // Validar campos
    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el teléfono ya existe
    const exists = await phoneExists(telefono);
    if (exists) {
      return NextResponse.json(
        { error: "El teléfono ya está registrado" },
        { status: 409 }
      );
    }

    // Crear usuario
    const usuario = await createUser(nombre, telefono);

    return NextResponse.json(
      {
        success: true,
        message: "Usuario creado exitosamente",
        usuario,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en POST /api/admin/usuarios:", error);
    return NextResponse.json(
      { error: error.message || "Error creando usuario" },
      { status: 500 }
    );
  }
}
