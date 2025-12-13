# 🔐 Sistema de Protección - Zona Premium

> **Nota:** Este sistema está diseñado para trabajar con Netlify (sin SSR/middleware).

## Descripción

Se ha implementado un sistema de protección para la ruta `/zunsteps/premium` que requiere una clave de acceso correcta (`Master*25`) para acceder al contenido exclusivo.

## Componentes Principales

### 1. **Contexto de Autenticación Premium** (`app/lib/contexts/PremiumAuthContext.jsx`)

- Maneja el estado de autenticación usando React Context
- Almacena la clave en `localStorage` del navegador
- Proporciona funciones `login()` y `logout()`
- Verifica autenticación al cargar la app

### 2. **Componente de Protección** (`app/components/ui/PremiumProtection.jsx`)

- Envuelve la página premium
- Verifica si el usuario tiene acceso
- Redirige a `/premium-access` si no está autenticado
- Muestra un loading spinner mientras se verifica

### 3. **Página de Acceso** (`app/premium-access/page.js`)

- Formulario para ingresar la clave
- Interfaz amigable con Material-UI
- Valida la clave localmente (sin servidor)
- Usa el contexto para guardar la sesión

### 4. **Página Premium Actualizada** (`app/zunsteps/premium/page.js`)

- Protegida con `<PremiumProtection>`
- Incluye botón "Cerrar Sesión"
- Solo accesible con autenticación válida

### 5. **Layout Raíz Actualizado** (`app/layout.js`)

- Incluye `PremiumAuthProvider` para toda la app

## Flujo de Autenticación

```
Usuario sin acceso
        ↓
    Intenta acceder a /zunsteps/premium
        ↓
    <PremiumProtection> verifica localStorage
        ↓
    Si no tiene clave → Redirige a /premium-access
        ↓
    Usuario ingresa clave (Master*25)
        ↓
    Se guarda en localStorage
        ↓
    Redirige a /zunsteps/premium
        ↓
    Acceso otorgado ✓
```

## Características de Seguridad (Client-Side)

- ✅ Almacenamiento en `localStorage` (persistente entre sesiones)
- ✅ Validación en componente protegido
- ✅ No requiere servidor
- ✅ Compatible con Netlify y SSG

> **⚠️ Importante:** Esta solución es client-side. Para máxima seguridad, no almacenes datos sensibles. Esta protección es efectiva contra usuarios casuales pero no contra ataques sofisticados.

## Uso

### Para Acceder:

1. Ir a `https://tunominio.com/zunsteps/premium`
2. Serás redirigido a `/premium-access` si no estás autenticado
3. Ingresa la clave: `Master*25`
4. Presiona "Acceder"
5. La sesión se guarda en `localStorage`

### Para Cerrar Sesión:

1. En la página premium, haz clic en "Cerrar Sesión"
2. Se borra de `localStorage`
3. Serás redirigido a `/premium-access`

### Para Mantener Sesión:

- La sesión persiste mientras el usuario no borre el `localStorage` o los cookies
- Cada recarga de página verifica automáticamente

## Variables de Entorno

No se requieren variables de entorno. La clave está definida en:

- `app/lib/contexts/PremiumAuthContext.jsx` (línea de validación)
- `app/premium-access/page.js` (línea de validación)

## Testing Local

```bash
npm run dev
```

Luego visita: `http://localhost:3000/zunsteps/premium`

- Sin clave: Se redirige a `/premium-access`
- Con clave `Master*25`: Acceso permitido
- Abre DevTools > Application > Storage > LocalStorage para ver la clave guardada
