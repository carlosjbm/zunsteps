import { NextResponse } from "next/server";
import {
  validateUserCredentials,
  logFailedLoginAttempt,
  getRecentFailedAttempts,
  logSuccessfulLogin,
} from "@/app/src/services/auth.service";
import {
  generateJWT,
  sanitizeInput,
  validatePhoneNumber,
  validateToken,
  checkRateLimit,
} from "@/app/lib/utils/security";

// Store en memoria para rate limiting (en producción usar Redis)
const loginAttempts = {};

/**
 * POST /api/auth/login
 * Autentica usuario con telefono y token
 */
export async function POST(request) {
  try {
    // Obtener body
    const body = await request.json();
    const { phone, token } = body;

    // Validar que los campos existan
    if (!phone || !token) {
      return NextResponse.json(
        { error: "Teléfono y token son requeridos" },
        { status: 400 },
      );
    }

    // Validar formato básico
    if (!validatePhoneNumber(phone) || !validateToken(token)) {
      return NextResponse.json(
        { error: "Formato de teléfono o token inválido" },
        { status: 400 },
      );
    }

    // Chequear rate limiting
    const rateCheckResult = checkRateLimit(loginAttempts, phone);
    if (!rateCheckResult.allowed) {
      return NextResponse.json(
        {
          error: `Demasiados intentos fallidos. Intenta más tarde (en ${rateCheckResult.retryAfter}s)`,
          retryAfter: rateCheckResult.retryAfter,
        },
        { status: 429 }, // Too Many Requests
      );
    }

    // Validar credenciales contra BD
    const credentialsResult = await validateUserCredentials(phone, token);

    if (!credentialsResult.success) {
      // Registrar intento fallido
      await logFailedLoginAttempt(phone, credentialsResult.código);

      return NextResponse.json(
        { error: credentialsResult.error },
        { status: 401 },
      );
    }

    // Éxito: generar JWT
    const jwtToken = generateJWT({
      userId: credentialsResult.user.id,
      phone: credentialsResult.user.telefono,
      nombre: credentialsResult.user.nombre,
    });

    // Registrar login exitoso
    await logSuccessfulLogin(credentialsResult.user.id);

    // Crear respuesta con cookie segura
    const response = NextResponse.json(
      {
        success: true,
        message: "Autenticación exitosa",
        user: {
          id: credentialsResult.user.id,
          nombre: credentialsResult.user.nombre,
          telefono: credentialsResult.user.telefono,
        },
      },
      { status: 200 },
    );

    // Establecer JWT en cookie httpOnly segura
    response.cookies.set("auth_token", jwtToken, {
      httpOnly: true, // No accesible desde JavaScript del cliente
      secure: process.env.NODE_ENV === "production", // Solo HTTPS en producción
      sameSite: "strict", // Protección CSRF
      maxAge: 30 * 24 * 60 * 60, // 30 días
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error en /api/auth/login:", error);
    return NextResponse.json(
      { error: "Error procesando solicitud de autenticación" },
      { status: 500 },
    );
  }
}

/**
 * GET /api/auth/login - No permitido
 */
export async function GET() {
  return NextResponse.json(
    { error: "Método GET no permitido" },
    { status: 405 },
  );
}
