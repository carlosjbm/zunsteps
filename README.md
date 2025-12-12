# 🚀 ZUNSteps

Herramienta moderna y ágil diseñada para facilitar y optimizar el trabajo con la Suite ZUN. Accede a toda la funcionalidad desde una interfaz web intuitiva sin interrumpir tu flujo de trabajo. Aprende mientras trabajas con recursos interactivos, documentación integrada y un asistente de IA.

---

## ✨ Características principales

- ✅ **Interfaz Web Moderna** — Accesible desde cualquier navegador, tecnología web pura
- ✅ **Módulos Especializados** — ZUNAcc, ZUNHr, ZUNAft, ZUNSt, ZUNpr (cada uno enfocado en una área específica)
- ✅ **Chatbot Inteligente** — Asistente de IA que responde preguntas sobre el sistema en tiempo real
- ✅ **Documentación Integrada** — Guías, FAQs, tips y snippets de código listos para usar
- ✅ **Zona Premium** — Acceso a recursos exclusivos y contenido avanzado
- ✅ **Diseño Responsivo** — Funciona perfectamente en desktop, tablet y móviles
- ✅ **Base de Conocimiento Dinámica** — Sistema de respuestas inteligentes basado en el contenido de los módulos
- ✅ **Panel de Administración** — Control total sobre módulos, usuarios y configuración
- ✅ **Apego Total a la Suite ZUN** — Todas las funcionalidades diseñadas para complementar ZUN

---

## 📚 Módulos Incluidos

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

- **Frontend:** Next.js 15, React 19, Material UI (MUI)
- **Estilo:** CSS Modules, Emotion, Tailwind (parcial)
- **Gestión de Estado:** React Context API
- **Gestor de Paquetes:** pnpm
- **Despliegue:** Netlify (estático + optimizado)
- **Versionado:** Git + GitHub

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
# Modo desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Exportar sitio estático
pnpm run export

# Ejecutar linter (ESLint)
pnpm run lint
```

---

## 📁 Estructura del Proyecto

```
zunsteps/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/             # Componentes UI (Buttons, Cards, etc)
│   │   └── providers/      # Context Providers
│   ├── lib/
│   │   ├── modulos/        # Contenido de módulos (ZUNAcc, ZUNHr, etc)
│   │   ├── contexts/       # React Contexts
│   │   ├── hooks/          # Custom hooks
│   │   └── chatbotResponses.js  # Base de conocimiento del chatbot
│   ├── styles/             # Estilos globales
│   ├── zunsteps/           # Rutas principales
│   │   ├── dashboard/      # Panel de control
│   │   ├── docs/           # Documentación
│   │   ├── faqs/           # Preguntas frecuentes
│   │   └── premium/        # Zona premium
│   └── page.js             # Página de inicio
├── public/                 # Archivos estáticos
└── package.json            # Dependencias y scripts
```

---

## 🔐 Acceso Premium

Para acceder a la zona premium, necesitas una clave válida. El sistema valida la clave y otorga acceso a recursos exclusivos.

**Rutas protegidas:**

- `/zunsteps/premium` — Zona premium (requiere validación)

---

## 🤝 Uso y Flujo Principal

1. **Accede a la Home** — Ve la introducción y opciones principales
2. **Explora el Dashboard** — Selecciona un módulo (ZUNAcc, ZUNHr, etc)
3. **Consulta la Documentación** — Lee guías, FAQs y snippets
4. **Usa el Chatbot** — Haz preguntas al asistente de IA
5. **Accede a Premium** (opcional) — Usa clave para desbloquear contenido exclusivo

---

## 🌐 Despliegue

### En Netlify

```bash
# Build y exportar
pnpm run build
pnpm run export

# Deploy con Netlify CLI
npx netlify deploy --prod --dir=out
```

O configura desde la UI de Netlify:

- **Build command:** `pnpm run build && pnpm run export`
- **Publish directory:** `out`

---

## 🎨 Personalización

### Temas y Colores

Edita `app/lib/myTheme.js` para personalizar colores, tipografía y estilos globales.

### Agregar Nuevos Módulos

1. Crea un archivo en `app/lib/modulos`
2. Define la estructura (nombre, resumen, secciones, acciones)
3. Exporta en el módulo correspondiente
4. Actualiza el Chatbot automáticamente

### Agregar FAQs

Edita `app/zunsteps/faqs/page.js` y agrega preguntas al array `faqsData`.

---

## 📱 Responsive Design

ZUNSteps está totalmente optimizado para:

- ✅ Desktop (1920px+)
- ✅ Tablets (768px - 1024px)
- ✅ Móviles (320px - 767px)

Todos los componentes son adaptativos y ofrecen una excelente experiencia de usuario en cualquier dispositivo.

---

## 🐛 Resolución de Problemas

### "Cannot find module..."

```bash
pnpm install
```

### "Port 3000 already in use"

```bash
pnpm run dev -- -p 3001
```

### Build falla

```bash
pnpm run build
# Si hay errores de export, verifica que no haya rutas SSR
```

---

## 📄 Licencia

Este proyecto es parte de la Suite ZUN. Todos los derechos reservados.

---

## 👨‍💻 Desarrollador

**Carlos JBM**  
📧 contacto@zunsteps.com  
🔗 [GitHub](https://github.com/carlosjbm)

---

## 🙏 Agradecimientos

- Suite ZUN por la inspiración
- Material UI por los componentes
- Next.js por el framework
- La comunidad de desarrollo web

---

## 📞 Soporte

¿Preguntas o sugerencias? Usa el chatbot integrado o contacta a través del panel de ayuda en la app.

---

**Última actualización:** 12 de diciembre de 2025  
**Versión:** 1.0.0
