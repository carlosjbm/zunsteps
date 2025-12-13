# 🔐 Sistema de Protección - Zona Premium

## Descripción

Se ha implementado un sistema de protección para la ruta `/zunsteps/premium` que requiere una clave de acceso correcta (`Master*25`) para acceder al contenido exclusivo.

## Componentes Principales

### 1. **Middleware** (`middleware.js`)

- Valida todas las solicitudes a `/zunsteps/premium`
- Verifica que la cookie `premium_key` contenga la clave correcta
- Redirige a `/premium-access` si no hay autenticación válida

### 2. **Página de Acceso** (`app/premium-access/page.js`)

- Formulario para ingresar la clave
- Interfaz amigable con Material-UI
- Validación en tiempo real

### 3. **API de Autenticación** (`app/api/set-premium-key/route.js`)

- Valida la clave ingresada
- Crea una cookie segura si es correcta
- Cookie válida por 30 días

### 4. **API de Logout** (`app/api/logout-premium/route.js`)

- Limpia la cookie de autenticación
- Permite cerrar sesión

### 5. **Página Premium Actualizada** (`app/zunsteps/premium/page.js`)

- Incluye botón "Cerrar Sesión"
- Solo accesible con autenticación válida

## Flujo de Autenticación

```
Usuario sin acceso
        ↓
    Intenta acceder a /zunsteps/premium
        ↓
    Middleware redirige a /premium-access
        ↓
    Usuario ingresa clave (Master*25)
        ↓
    API valida y crea cookie
        ↓
    Redirige a /zunsteps/premium
        ↓
    Acceso otorgado ✓
```

## Características de Seguridad

- ✅ Cookie `httpOnly` (no accesible desde JavaScript del cliente)
- ✅ Cookie `secure` (solo por HTTPS)
- ✅ `sameSite: strict` (previene CSRF)
- ✅ Expiración automática (30 días)
- ✅ Validación en servidor (no confiar en el cliente)

## Uso

### Para Acceder:

1. Ir a `https://tunominio.com/zunsteps/premium`
2. Serás redirigido a `/premium-access`
3. Ingresa la clave: `Master*25`
4. Presiona "Acceder"

### Para Cerrar Sesión:

1. En la página premium, haz clic en "Cerrar Sesión"
2. La cookie se eliminará
3. Serás redirigido a `/premium-access`

## Variables de Entorno

No se requieren variables de entorno adicionales. La clave está hardcodeada como `Master*25` en:

- `app/api/set-premium-key/route.js`
- `middleware.js`

> **Nota:** Para producción, considera guardar la clave en una variable de entorno.

## Testing

Para probar en desarrollo:

```bash
npm run dev
```

Luego visita: `http://localhost:3000/zunsteps/premium`

En desarrollo, las cookies `secure` pueden funcionar con HTTP. En producción, necesitarás HTTPS.
