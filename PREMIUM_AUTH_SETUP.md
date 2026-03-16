# 🔐 Sistema de Autenticación Premium - Documentación

## 📋 Tablas de Base de Datos Requeridas

### 1. Tabla `usuarios` (Ya existe según tu especificación)

```sql
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL UNIQUE,
  token VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active TINYINT(1) DEFAULT 1
);

-- Crear índice para búsqueda rápida por teléfono
CREATE INDEX idx_telefono ON usuarios(telefono);
```

### 2. Tabla `login_attempts` (Para registro de intentos fallidos)

```sql
CREATE TABLE IF NOT EXISTS login_attempts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  telefono VARCHAR(20) NOT NULL,
  razon VARCHAR(50),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  INDEX idx_telefono_fecha (telefono, fecha)
);
```

### 3. Tabla `login_logs` (Para auditoría de logins exitosos)

```sql
CREATE TABLE IF NOT EXISTS login_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent VARCHAR(255),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  INDEX idx_usuario_fecha (usuario_id, fecha)
);
```

## 🔒 Medidas de Seguridad Implementadas

### 1. **Validación de Entrada**

- ✅ Validación de formato de teléfono (10-15 caracteres)
- ✅ Validación de token (6-100 caracteres)
- ✅ Sanitización de inputs (eliminación de caracteres peligrosos)

### 2. **Protección Contra Ataques**

#### Rate Limiting

- Máximo 5 intentos fallidos en 15 minutos por teléfono
- Respuesta HTTP 429 (Too Many Requests)
- Información de tiempo de reintento

#### Timing Attack Protection

- Uso de `constantTimeCompare()` para comparar tokens
- Evita revelar información través del tiempo de respuesta

#### CSRF Protection

- Cookie `sameSite: 'strict'`
- Validación de origin
- Token en cookie httpOnly

#### SQL Injection Prevention

- Queries parametrizadas con placeholders
- Pool de conexiones seguro

### 3. **Almacenamiento Seguro de Sesiones**

- **JWT (JSON Web Tokens)** generado en servidor
- **HttpOnly Cookie** (no accesible desde JavaScript)
- **Secure Flag** (solo HTTPS en producción)
- **Expirición automática** (30 días)
- **Firma HMAC-SHA256** para validación de integridad

### 4. **Auditoría y Logging**

- Registro de intentos fallidos (razón, timestamp)
- Registro de logins exitosos (usuario, IP, timestamp)
- Facilita detección de actividad sospechosa

### 5. **Configuración de Seguridad**

```javascript
SECURITY_CONFIG = {
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_ATTEMPT_WINDOW: 15 minutos,
  SESSION_TIMEOUT: 30 días,
  TOKEN_LENGTH: 6-100 caracteres,
  PHONE_LENGTH: 10-15 dígitos
}
```

## 🔗 Endpoints de Autenticación

### 1. `POST /api/auth/login`

**Request:**

```json
{
  "phone": "+53 5 1234567",
  "token": "tu_token_secreto"
}
```

**Response (Éxito - 200):**

```json
{
  "success": true,
  "message": "Autenticación exitosa",
  "user": {
    "id": 1,
    "nombre": "Carlos",
    "telefono": "+53 5 1234567"
  }
}
```

**Response (Error - 401):**

```json
{
  "error": "Credenciales inválidas"
}
```

**Response (Rate Limited - 429):**

```json
{
  "error": "Demasiados intentos fallidos. Intenta más tarde (en 300s)",
  "retryAfter": 300
}
```

### 2. `GET /api/auth/verify`

Verifica si la sesión JWT es válida.

**Response (Autentico - 200):**

```json
{
  "authenticated": true,
  "user": {
    "id": 1,
    "nombre": "Carlos",
    "telefono": "+53 5 1234567"
  }
}
```

**Response (No autenticado - 401):**

```json
{
  "authenticated": false,
  "error": "No hay sesión activa"
}
```

### 3. `POST /api/auth/logout`

Cierra la sesión eliminando la cookie JWT.

**Response:**

```json
{
  "success": true,
  "message": "Sesión cerrada correctamente"
}
```

## 🎯 Flujo de Autenticación

```
Usuario abre /premium-access
           ↓
Verifica sesión (GET /api/auth/verify)
      ↙              ↘
Autenticado      No autenticado
     ✓         Muestra formulario
                      ↓
              Usuario ingresa teléfono + token
                      ↓
              POST /api/auth/login
                      ↓
        ✓ Credenciales válidas
                      ↓
         Genera JWT + httpOnly Cookie
                      ↓
          Redirige a /zunsteps/premium
                      ↓
        PremiumProtection verifica sesión
                      ↓
         Muestra contenido premium
```

## 🛡️ Mejoras Futuras Recomendadas

1. **2FA (Autenticación de Dos Factores)**
   - Código OTP por SMS/Email
   - Autenticación TOTP

2. **Gestión de Sesiones**
   - Usar Redis para sesiones distribuidas
   - Soporte para múltiples dispositivos

3. **IP Whitelist**
   - Permitir solo IPs confiables
   - Validar cambios de IP sospechosos

4. **HTTPS Obligatorio**
   - Forzar SSL/TLS
   - HSTS headers

5. **Alertas de Seguridad**
   - Notificar logins desde nuevas IPs
   - Detectar patrones anómalos

6. **Hashing de Token**
   - Almacenar hash del token (no el token en claro)
   - Comparación segura con bcrypt

## 📝 Variables de Entorno (Opcional)

```env
# .env.local
JWT_SECRET=tu_secreto_super_seguro_aqui
NODE_ENV=development
```

## ✅ Tests Manuales

### Prueba 1: Login Exitoso

1. Ir a `/premium-access`
2. Ingresar teléfono y token válidos
3. Verificar redirección a `/zunsteps/premium`
4. Verificar que se muestre info del usuario

### Prueba 2: Rate Limiting

1. Intentar 5+ logins con token inválido
2. Verificar error 429 en el 6to intento
3. Esperar 15 minutos o reinician servidor

### Prueba 3: Token Expirado

1. Generar JWT y esperar a que expire
2. Intentar acceder a `/zunsteps/premium`
3. Verificar redirección a `/premium-access`

### Prueba 4: Logout

1. Estar autenticado
2. Hacer clic en "Cerrar Sesión"
3. Verificar redirección y cookie eliminada
4. Intentar acceder a premium → debe redirigir

## 🔍 Debugging

**Verificar JWT en Console:**

```javascript
// En navegador
document.cookie; // Ver cookies
```

**Ver logs de BD:**

```sql
SELECT * FROM login_attempts ORDER BY fecha DESC LIMIT 10;
SELECT * FROM login_logs ORDER BY fecha DESC LIMIT 10;
```

**Usar curl para testing:**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone":"+535331234567","token":"test123456"}' \
  -i
```

---

**Última actualización:** Marzo 2026
**Sistema:** ZUNSteps Premium Auth v2.0
