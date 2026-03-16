import crypto from "crypto";

// Configuración de seguridad
const SECURITY_CONFIG = {
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_ATTEMPT_WINDOW: 15 * 60 * 1000, // 15 minutos
  SESSION_TIMEOUT: 30 * 24 * 60 * 60 * 1000, // 30 días
  PASSWORD_MIN_LENGTH: 6,
  TOKEN_LENGTH: 32,
};

/**
 * Valida que el teléfono tenga un formato válido
 */
export function validatePhoneNumber(phone) {
  // Formato: +53, 10 dígitos mínimo, máximo 15
  const phoneRegex = /^[\d\s\-\(\)\+]{10,15}$/;
  return phoneRegex.test(phone?.toString().trim() || "");
}

/**
 * Valida que el token tenga un formato válido
 */
export function validateToken(token) {
  if (!token || typeof token !== "string") {
    return false;
  }
  // Token debe tener entre 6 y 100 caracteres
  return token.length >= 6 && token.length <= 100;
}

/**
 * Genera un hash SHA-256 para almacenar tokens de forma segura
 */
export function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Verifica si un token coincide con su hash
 */
export function verifyTokenHash(token, hash) {
  const tokenHash = hashToken(token);
  return crypto.timingSafeEqual(Buffer.from(tokenHash), Buffer.from(hash));
}

/**
 * Genera un JWT simple (alternativa a sesiones)
 */
export function generateJWT(
  payload,
  secret = process.env.JWT_SECRET || "zunsteps-secret",
) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const claims = {
    ...payload,
    iat: now,
    exp: now + 30 * 24 * 60 * 60, // 30 días
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url",
  );
  const encodedClaims = Buffer.from(JSON.stringify(claims)).toString(
    "base64url",
  );

  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${encodedHeader}.${encodedClaims}`)
    .digest("base64url");

  return `${encodedHeader}.${encodedClaims}.${signature}`;
}

/**
 * Verifica un JWT
 */
export function verifyJWT(
  token,
  secret = process.env.JWT_SECRET || "zunsteps-secret",
) {
  try {
    const [encodedHeader, encodedClaims, signature] = token.split(".");

    if (!encodedHeader || !encodedClaims || !signature) {
      return null;
    }

    // Verificar firma
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${encodedHeader}.${encodedClaims}`)
      .digest("base64url");

    if (
      !crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature),
      )
    ) {
      return null;
    }

    // Decodificar y verificar expiración
    const claims = JSON.parse(
      Buffer.from(encodedClaims, "base64url").toString(),
    );
    const now = Math.floor(Date.now() / 1000);

    if (claims.exp < now) {
      return null; // Token expirado
    }

    return claims;
  } catch (error) {
    return null;
  }
}

/**
 * Sanitiza inputs para prevenir inyección SQL
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") {
    return "";
  }
  return input
    .trim()
    .replace(/[<>\"\']/g, "")
    .substring(0, 100);
}

/**
 * Verifica el rate limiting
 */
export function checkRateLimit(attempts = {}, identifier) {
  const now = Date.now();
  const key = `attempt_${identifier}`;

  if (!attempts[key]) {
    attempts[key] = [];
  }

  // Limpiar intentos antiguos
  attempts[key] = attempts[key].filter(
    (timestamp) => now - timestamp < SECURITY_CONFIG.LOGIN_ATTEMPT_WINDOW,
  );

  // Verificar si se excedió límite
  if (attempts[key].length >= SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil(
        (SECURITY_CONFIG.LOGIN_ATTEMPT_WINDOW - (now - attempts[key][0])) /
          1000,
      ),
    };
  }

  // Registrar nuevo intento
  attempts[key].push(now);

  return {
    allowed: true,
    remaining: SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS - attempts[key].length,
    retryAfter: 0,
  };
}

/**
 * Genera un nonce para CSRF protection
 */
export function generateNonce() {
  return crypto.randomBytes(16).toString("hex");
}

/**
 * Obtiene la configuración de seguridad
 */
export function getSecurityConfig() {
  return SECURITY_CONFIG;
}

export default {
  validatePhoneNumber,
  validateToken,
  hashToken,
  verifyTokenHash,
  generateJWT,
  verifyJWT,
  sanitizeInput,
  checkRateLimit,
  generateNonce,
  getSecurityConfig,
};
