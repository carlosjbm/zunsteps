import { NextResponse } from "next/server";
import { verifyJWT } from "@/app/lib/utils/security";
import { cookies } from "next/headers";

/**
 * GET /api/auth/verify
 * Verifica si el JWT es válido
 */
export async function GET(request) {
  try {
    // Obtener cookie de autenticación
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false, error: "No hay sesión activa" },
        { status: 401 },
      );
    }

    // Verificar JWT
    const payload = verifyJWT(token);

    if (!payload) {
      return NextResponse.json(
        { authenticated: false, error: "Token inválido o expirado" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        authenticated: true,
        user: {
          id: payload.userId,
          nombre: payload.nombre,
          telefono: payload.phone,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en /api/auth/verify:", error);
    return NextResponse.json(
      { authenticated: false, error: "Error verificando sesión" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/auth/verify - No permitido
 */
export async function POST() {
  return NextResponse.json(
    { error: "Método POST no permitido" },
    { status: 405 },
  );
}
