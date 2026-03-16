import { NextResponse } from "next/server";

/**
 * POST /api/auth/logout
 * Cierra la sesión eliminando la cookie de autenticación
 */
export async function POST(request) {
  try {
    const response = NextResponse.json(
      { success: true, message: "Sesión cerrada correctamente" },
      { status: 200 },
    );

    // Eliminar cookie de autenticación
    response.cookies.set("auth_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expira inmediatamente
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error en /api/auth/logout:", error);
    return NextResponse.json(
      { error: "Error cerrando sesión" },
      { status: 500 },
    );
  }
}

/**
 * GET /api/auth/logout - No permitido
 */
export async function GET() {
  return NextResponse.json(
    { error: "Método GET no permitido" },
    { status: 405 },
  );
}
