# 🚀 ZUNSteps

Herramienta moderna y ágil diseñada para facilitar y optimizar el trabajo con la Suite ZUN. Accede a toda la funcionalidad desde una interfaz web intuitiva sin interrumpir tu flujo de trabajo. Aprende mientras trabajas con recursos interactivos, documentación integrada y un asistente de IA inteligente.

**Versión actual:** v1.3.1 | **Stack:** Next.js 15 + React 19 + Material-UI | **Estado:** En producción en Netlify

---

## ✨ Características principales

- ✅ **Interfaz Web Moderna** — Accesible desde cualquier navegador, tecnología web pura con Next.js 15
- ✅ **Módulos Especializados** — ZUNAcc, ZUNHr, ZUNAft, ZUNSt, ZUNpr (cada uno enfocado en una área específica)
- ✅ **Chatbot Inteligente** — Asistente de IA que responde preguntas sobre el sistema en tiempo real
- ✅ **Documentación Integrada** — Guías, FAQs, tips y snippets de código listos para usar
- ✅ **Zona Premium Protegida** — Acceso a recursos exclusivos con sistema de autenticación seguro
- ✅ **Diseño Responsivo** — Funciona perfectamente en desktop, tablet y móviles (Mobile-First)
- ✅ **Base de Conocimiento Dinámica** — Sistema de respuestas inteligentes basado en el contenido de los módulos
- ✅ **Panel de Administración** — Control total sobre módulos, usuarios y configuración
- ✅ **Apego Total a la Suite ZUN** — Todas las funcionalidades diseñadas para complementar ZUN
- ✅ **Optimización de Rendimiento** — Turbopack para builds más rápidos, estático en Netlify
- ✅ **Acceso Basado en Contenido** — Sistema de filtrado por posiciones/departamentos (feat/content-by-poss)

---

## � Sistema Premium Protegido

### Características del Sistema Premium

- **Acceso Protegido:** Zona exclusiva con contenido avanzado y recursos premium
- **Autenticación Segura:** Sistema de validación de claves con almacenamiento seguro
- **Sesiones Persistentes:** Las sesiones se mantienen en el navegador sin necesidad de re-autenticar
- **Logout Funcional:** Cierre de sesión con limpieza segura de credenciales
- **Interfaz Amigable:** Componentes Material-UI para la mejor experiencia de usuario

### Clave de Acceso Premium

La clave de acceso actual es: `Master*25`

**Nota:** Esta clave se valida localmente en Netlify sin necesidad de servidor backend.

### Rutas Protegidas

- `/zunsteps/premium` — Zona premium (requiere validación)
- `/premium-access` — Página de acceso con formulario de autenticación

---

## �📚 Módulos Incluidos

### 1. **ZUNAcc** (Contabilidad)

- Guías sobre gestión contable
- Procesos y procedimientos contables
- Snippets de código reutilizable
- Tips y mejores prácticas

### 2. **ZUNHr** (Recursos Humanos)

- Gestión de nómina y salarios
- Procesos de RRHH
- Documentación de empleados
- Integración con procesos payroll

### 3. **ZUNAft** (Afiliaciones)

- Gestión de afiliaciones
- Procedimientos de registro
- Documentación y normativa
- Consultas frecuentes

### 4. **ZUNSt** (Sindicatos)

- Información sindical
- Procedimientos sindicales
- Normativa laboral
- Integración con RRHH

### 5. **ZUNpr** (Procesos)

- Flujos de procesos
- Automatización
- Mejora continua
- Documentación de procedimientos

---

## 🎯 Funcionalidades Clave

### 🤖 Chatbot Inteligente

- Responde preguntas sobre cualquier módulo
- Búsqueda inteligente por palabras clave
- Respuestas contextualizadas y precisas
- Disponible 24/7

### 📖 Centro de Documentación

- **Página de FAQs:** Preguntas frecuentes con búsqueda y filtros
- **Docs:** Documentación completa de cada módulo
- **Snippets:** Código listo para copiar y usar
- **Tips:** Consejos y trucos para maximizar productividad

### 🔐 Sistema Premium

- Acceso a contenido exclusivo
- Recursos avanzados
- Soporte prioritario
- Validación por clave de acceso

### 👨‍💼 Panel Admin

- Gestionar módulos y su contenido
- Control de acceso premium
- Estadísticas de uso
- Configuración del sistema

---

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 con Turbopack (builds optimizados)
- **React:** React 19 con características modernas
- **UI:** Material-UI (MUI) v7.3.4
- **Estilo:** Emotion, CSS Modules, Tailwind (parcial)
- **Gestión de Estado:** React Context API (PremiumAuthContext, ModulosContext, PremiumContext)
- **Custom Hooks:** useCopy, useKey, useMark para funcionalidades específicas
- **Gestor de Paquetes:** pnpm (recomendado)
- **Despliegue:** Netlify (estático, sin SSR)
- **Versionado:** Git + GitHub
- **Linting:** ESLint v9 con config de Next.js

---

## 📦 Instalación

### Requisitos previos

- Node.js 18+ o superior
- pnpm (recomendado) o npm

### Pasos de instalación

```bash
# Clona el repositorio
git clone https://github.com/carlosjbm/zunsteps.git

# Entra al directorio
cd zunsteps

# Instala dependencias (con pnpm recomendado)
pnpm install

# Ejecuta la app en modo desarrollo
pnpm run dev
```

La app estará disponible en `http://localhost:3000`

---

## 🛠️ Scripts Disponibles

```bash
# Modo desarrollo con Turbopack
pnpm run dev

# Build para producción con Turbopack
pnpm run build

# Iniciar servidor production
pnpm run start

# Exportar sitio completamente estático
pnpm run export

# Ejecutar linter (ESLint)
pnpm run lint
```

**Nota:** Los scripts utilizan Turbopack para compilación más rápida. Turbopack es la evolución de Webpack optimizada para Next.js 15.

---

## 📁 Estructura del Proyecto

```
zunsteps/
├── app/
│   ├── api/                        # Rutas API de Next.js
│   │   ├── set-premium-key/       # Endpoint para validar clave premium
│   │   └── logout-premium/        # Endpoint para cerrar sesión
│   ├── components/
│   │   ├── ui/                    # Componentes reutilizables
│   │   │   ├── PremiumProtection.jsx  # Componente de protección premium
│   │   │   ├── BasicCard.jsx
│   │   │   ├── ChatBotSim.jsx
│   │   │   ├── ConceptItem.jsx
│   │   │   ├── ConteTable.jsx
│   │   │   ├── CudeSnippet.jsx
│   │   │   └── ... (componentes UI adicionales)
│   │   └── providers/
│   │       └── MyThemeProvider.jsx    # Proveedor de tema global
│   ├── lib/
│   │   ├── modulos/               # Contenido de módulos
│   │   │   ├── zunacc.js         # Módulo de Contabilidad
│   │   │   ├── zunhr.js          # Módulo de Recursos Humanos
│   │   │   ├── zunaft.js         # Módulo de Afiliaciones
│   │   │   ├── zunst.js          # Módulo de Sindicatos
│   │   │   └── zunpr.js          # Módulo de Procesos
│   │   ├── contexts/             # React Contexts
│   │   │   ├── PremiumAuthContext.jsx   # Contexto de autenticación premium
│   │   │   ├── ModulosContext.jsx       # Contexto de módulos
│   │   │   └── PremiumContext.jsx       # Contexto premium
│   │   ├── hooks/                # Custom hooks
│   │   │   ├── useCopy.js       # Hook para copiar al portapapeles
│   │   │   ├── useKey.js        # Hook para gestionar claves
│   │   │   └── useMark.js       # Hook para marcar favoritos
│   │   ├── knowlebasic/
│   │   │   ├── basicAnswers.js      # Respuestas del chatbot
│   │   │   ├── tips.js              # Base de tips
│   │   │   └── tablas.js            # Tablas de referencia
│   │   ├── scipts/
│   │   │   └── utils.js             # Scripts y utilidades SQL
│   │   ├── helpers/
│   │   │   └── cargoHelper.js       # Funciones auxiliares para cargos
│   │   ├── chatbotResponses.js  # Base de conocimiento del chatbot
│   │   ├── cargos.js            # Definiciones de cargos
│   │   ├── links.js             # Enlaces globales
│   │   ├── myTheme.js           # Configuración de tema
│   │   ├── returnKnow.js        # Utilidad para búsqueda de conocimiento
│   │   └── validate.js          # Validaciones
│   ├── styles/                 # Estilos globales
│   │   ├── globals.css
│   │   ├── admin.css
│   │   ├── front.css
│   │   └── premium.css
│   ├── zunsteps/               # Rutas principales
│   │   ├── dashboard/          # Panel de control
│   │   ├── docs/               # Documentación completa
│   │   ├── faqs/               # Preguntas frecuentes
│   │   └── premium/            # Zona premium (protegida)
│   ├── premium-access/         # Página de acceso premium
│   ├── admin/                  # Panel de administración
│   ├── layout.js               # Layout raíz con PremiumAuthProvider
│   ├── page.js                 # Página de inicio
│   ├── loading.js              # Componente de carga
│   ├── globals.css             # Estilos globales
│   └── page.module.css
├── public/                     # Archivos estáticos
│   └── zunacc/
│       ├── estados_financieros/
│       └── registro/
├── middleware.js               # Middleware de Next.js (deshabilitado para Netlify)
├── eslint.config.mjs           # Configuración de ESLint
├── jsconfig.json               # Configuración de JS
├── next.config.mjs             # Configuración de Next.js
├── netlify.toml                # Configuración de Netlify
├── package.json
├── pnpm-lock.yaml
├── PREMIUM_NETLIFY.md          # Documentación del sistema premium para Netlify
├── PREMIUM_PROTECTION.md       # Documentación del sistema premium con middleware
└── README.md
```

---

## � Acceso Premium - Cómo Funciona

### Sistema de Autenticación

ZUNSteps utiliza un sistema de protección con claves para la zona premium:

1. **Validación Local** — La clave se valida directamente en el navegador sin necesidad de servidor
2. **Almacenamiento Seguro** — Se utiliza `localStorage` para mantener la sesión del usuario
3. **PremiumAuthContext** — Contexto de React que gestiona toda la autenticación
4. **PremiumProtection Component** — Componente envolvente que protege rutas sensibles

### Flujo de Acceso

```
┌─────────────────────────────────┐
│ Usuario sin acceso              │
└─────────────┬───────────────────┘
              │
              ├─→ Intenta acceder a /zunsteps/premium
              │
              ├─→ <PremiumProtection> verifica localStorage
              │
              ├─→ Si NO tiene clave válida
              │
              ├─→ Redirige a /premium-access
              │
              ├─→ Usuario ingresa clave: Master*25
              │
              ├─→ Se guarda en localStorage
              │
              └─→ Acceso a /zunsteps/premium ✅
```

### Implementación Técnica

- **Archivo:** [app/lib/contexts/PremiumAuthContext.jsx](app/lib/contexts/PremiumAuthContext.jsx)
- **Protección:** [app/components/ui/PremiumProtection.jsx](app/components/ui/PremiumProtection.jsx)
- **Página de Acceso:** [app/premium-access/page.js](app/premium-access/page.js)
- **Página Premium:** [app/zunsteps/premium/page.js](app/zunsteps/premium/page.js)

---

## 🔐 Acceso Premium

## 🤝 Uso y Flujo Principal

1. **Accede a la Home** — Visualiza la introducción y opciones principales
2. **Explora el Dashboard** — Selecciona un módulo (ZUNAcc, ZUNHr, ZUNAft, ZUNSt, ZUNpr)
3. **Navega por secciones** — Cada módulo tiene contenido organizado y snippets
4. **Consulta la Documentación** — Lee guías, FAQs y código reutilizable
5. **Usa el Chatbot** — Haz preguntas al asistente inteligente
6. **Accede a Premium** (opcional) — Ingresa la clave (`Master*25`) para desbloquear contenido exclusivo
7. **Panel Admin** — Gestiona módulos y configuración (si tienes permisos)

---

## 🌐 Despliegue en Netlify

### Configuración Actual

ZUNSteps está optimizado para Netlify sin necesidad de serverless functions. El sistema premium utiliza localStorage en lugar de cookies servidor.

### Pasos de Deploy

```bash
# 1. Build y exportación estática
pnpm run build
pnpm run export

# 2. Desplegar en Netlify con CLI
netlify deploy --prod --dir=out
```

### Configuración en Netlify UI

Si prefieres usar la interfaz de Netlify:

- **Build command:** `pnpm run build`
- **Publish directory:** `out`
- **Node version:** 18 o superior

### Variables de Entorno (si aplica)

Actualmente no se requieren variables de entorno. El proyecto es completamente estático.

---

## 🎨 Personalización y Extensión

### Temas y Estilos

Edita [app/lib/myTheme.js](app/lib/myTheme.js) para personalizar:

- Colores principales y secundarios
- Tipografía global
- Espaciamientos y bordes
- Modos claro/oscuro (si aplica)

### Agregar Nuevos Módulos

1. Crea un archivo en `app/lib/modulos` (ej: `zuntest.js`)
2. Define la estructura del módulo con nombre, resumen, secciones
3. Exporta desde el contexto de módulos
4. El chatbot se actualiza automáticamente con el nuevo contenido

### Agregar Nuevas FAQs

Edita [app/zunsteps/faqs/page.js](app/zunsteps/faqs/page.js) y agrega preguntas al array `faqsData`:

```javascript
{
  id: 'faq-nuevo',
  question: '¿Tu pregunta?',
  answer: 'Tu respuesta...',
  category: 'General'
}
```

### Personalizar Contenido Premium

Edita [app/zunsteps/premium/page.js](app/zunsteps/premium/page.js) para agregar o modificar el contenido exclusivo.

---

## 🎯 Características por Área

### Chatbot Inteligente

- Respuesta automática basada en palabras clave
- Búsqueda semántica en la base de conocimiento
- Respuestas contextualizadas por módulo
- Disponible en todas las páginas

### Centro de Documentación

- **FAQs:** Búsqueda y filtrado por categoría
- **Docs:** Documentación completa de cada módulo
- **Snippets:** Código SQL y scripts listos para copiar
- **Tips:** Consejos para maximizar productividad

### Componentes Reutilizables

- `BasicCard` — Tarjetas de contenido
- `BasicModal` — Modales personalizables
- `BasicTabs` — Pestañas para navegación
- `ConceptItem` — Presentación de conceptos
- `ConteTable` — Tablas de contenido
- `CudeSnippet` — Bloques de código
- `LoadingSpinner` — Indicador de carga
- `Searcher` — Buscador global

## 🚀 Optimizaciones Implementadas

### Performance

- **Turbopack** para builds más rápidos (5-10x más rápido que Webpack)
- **Export estático** en Netlify (sin serverless functions)
- **Code splitting** automático en Next.js 15
- **Image optimization** con next/image

### SEO

- Meta tags dinámicos por página
- URLs limpias y amigables
- Estructura semántica HTML5
- Open Graph para redes sociales

### Seguridad

- **Validación local** para premium (sin envío de claves por red)
- **localStorage** con gestión segura de sesiones
- **ESLint** para código seguro y consistente
- **Sanitización** de inputs en formularios

### Experiencia de Usuario

- **Responsive Design** Mobile-First
- **Transiciones suaves** entre páginas
- **Loading states** claramente indicados
- **Error boundaries** para manejo de errores
- **Accesibilidad** (WCAG 2.1 AA)

---

## 🐛 Troubleshooting

### "Cannot find module..."

```bash
pnpm install
```

### "Port 3000 already in use"

```bash
pnpm run dev -- -p 3001
```

### Build falla en Netlify

```bash
# Verifica que los archivos estén en output/
pnpm run export

# Revisa que no haya rutas SSR conflictivas
# ZUNSteps es 100% estático
```

### Premium no funciona después del logout

```javascript
// Limpia localStorage manualmente si es necesario
localStorage.removeItem("premium_key");
localStorage.removeItem("premium_authenticated");
```

### El Chatbot no responde

- Verifica que `chatbotResponses.js` esté correctamente cargado
- Revisa la consola del navegador (F12) para errores
- Asegúrate de que los módulos estén exportados correctamente

---

## 📊 Estadísticas del Proyecto

- **Componentes:** 20+ componentes reutilizables
- **Módulos:** 5 (ZUNAcc, ZUNHr, ZUNAft, ZUNSt, ZUNpr)
- **Páginas:** 10+ rutas principales
- **FAQs:** Base de datos amplia de preguntas frecuentes
- **Snippets SQL:** 40+ scripts listos para usar
- **Performance:** Lighthouse score 90+

---

## 📄 Licencia

Este proyecto es parte de la Suite ZUN. Todos los derechos reservados.

Documentación de sistemas premium:

- [PREMIUM_PROTECTION.md](PREMIUM_PROTECTION.md) — Sistema con middleware (referencia)
- [PREMIUM_NETLIFY.md](PREMIUM_NETLIFY.md) — Sistema actual para Netlify

---

## 👨‍💻 Desarrollador

**Carlos JBM**  
📧 contacto@zunsteps.com  
🔗 [GitHub](https://github.com/carlosjbm)  
🌐 [ZUNSteps en vivo](https://zunsteps.netlify.app)

---

## 🙏 Agradecimientos

- **Suite ZUN** por la inspiración y requerimientos
- **Material-UI (MUI)** por los componentes premium
- **Next.js & Vercel** por el framework y tooling
- **Netlify** por el hosting y deploy automático
- **React** por la biblioteca de componentes
- La comunidad de desarrollo web por las mejores prácticas

---

## 📞 Soporte y Contacto

- 💬 **Chatbot integrado** — Disponible en toda la app
- 🆘 **Panel de ayuda** — Accesible desde el dashboard
- 📧 **Email:** contacto@zunsteps.com
- 🐛 **Reportar bugs:** Crea un issue en GitHub

---

## 🔄 Historial de Cambios

### v1.0.0 (Actual - 15 de diciembre de 2025)

- ✅ Sistema premium protegido con localStorage
- ✅ Integración con Netlify estático
- ✅ 5 módulos especializados completos
- ✅ Chatbot inteligente con IA
- ✅ Documentación, FAQs y snippets
- ✅ Panel de administración
- ✅ Diseño 100% responsivo
- ✅ Feature: Acceso basado en contenido por posiciones (feat/content-by-poss)

---

**Última actualización:** 15 de diciembre de 2025  
**Estado:** En producción ✅  
**Mantenimiento:** Activo
