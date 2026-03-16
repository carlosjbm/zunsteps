import pool from "@/app/lib/db";
import {
  sanitizeInput,
  hashToken,
  validatePhoneNumber,
  validateToken,
} from "@/app/lib/utils/security";

/**
 * Busca un usuario por teléfono en la base de datos
 */
export async function getUserByPhone(phone) {
  try {
    const sanitizedPhone = sanitizeInput(phone);

    if (!validatePhoneNumber(sanitizedPhone)) {
      return null;
    }

    const query =
      "SELECT id, nombre, telefono, token FROM usuarios WHERE telefono = ? LIMIT 1";
    const [rows] = await pool.query(query, [sanitizedPhone]);

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error consultando usuario por teléfono:", error);
    throw error;
  }
}

/**
 * Valida las credenciales del usuario (teléfono + token)
 */
export async function validateUserCredentials(phone, token) {
  try {
    // Validar formato de inputs
    if (!validatePhoneNumber(phone) || !validateToken(token)) {
      return {
        success: false,
        error: "Teléfono o token inválido",
        código: "INVALID_FORMAT",
      };
    }

    // Buscar usuario
    const user = await getUserByPhone(phone);

    if (!user) {
      return {
        success: false,
        error: "Usuario no encontrado",
        código: "USER_NOT_FOUND",
      };
    }

    // Comparar tokens de forma segura contra timing attacks
    // Aquí asumimos que el token en BD NO está hasheado (si lo quisiera, usaría hashToken)
    const tokensMatch = constantTimeCompare(token, user.token);

    if (!tokensMatch) {
      return {
        success: false,
        error: "Credenciales inválidas",
        código: "INVALID_CREDENTIALS",
      };
    }

    // Éxito
    return {
      success: true,
      user: {
        id: user.id,
        nombre: user.nombre,
        telefono: user.telefono,
      },
    };
  } catch (error) {
    console.error("Error validando credenciales:", error);
    return {
      success: false,
      error: "Error en el servidor",
      código: "SERVER_ERROR",
    };
  }
}

/**
 * Comparación de strings segura contra timing attacks
 */
function constantTimeCompare(a, b) {
  if (!a || !b) return false;

  let result = 0;
  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  result |= a.length ^ b.length;
  return result === 0;
}

/**
 * Registra un intento de login fallido
 */
export async function logFailedLoginAttempt(
  phone,
  reason = "invalid_credentials",
) {
  try {
    const query = `
      INSERT INTO login_attempts (telefono, razon, fecha)
      VALUES (?, ?, NOW())
    `;
    await pool.query(query, [sanitizeInput(phone), sanitizeInput(reason)]);
  } catch (error) {
    console.error("Error registrando intento fallido:", error);
    // No fallar si no se puede registrar el log
  }
}

/**
 * Obtiene los intentos de login fallidos recientes
 */
export async function getRecentFailedAttempts(phone, minutes = 15) {
  try {
    const query = `
      SELECT COUNT(*) as attempts
      FROM login_attempts
      WHERE telefono = ? 
      AND fecha > DATE_SUB(NOW(), INTERVAL ? MINUTE)
    `;
    const [rows] = await pool.query(query, [sanitizeInput(phone), minutes]);
    return rows[0]?.attempts || 0;
  } catch (error) {
    console.error("Error obteniendo intentos fallidos:", error);
    return 0;
  }
}

/**
 * Registra un login exitoso
 */
export async function logSuccessfulLogin(userId) {
  try {
    const query = `
      INSERT INTO login_logs (usuario_id, fecha, ip)
      VALUES (?, NOW(), ?)
    `;
    // En un escenario real, obtenerías la IP de la request
    await pool.query(query, [userId, "client_ip"]);
  } catch (error) {
    console.error("Error registrando login exitoso:", error);
    // No fallar si no se puede registrar el log
  }
}

export default {
  getUserByPhone,
  validateUserCredentials,
  logFailedLoginAttempt,
  getRecentFailedAttempts,
  logSuccessfulLogin,
};
