# Fundación Nuevo Porvenir — Plataforma institucional

Aplicación web institucional construida con **Next.js 16 (App Router)**, **TypeScript** y
**Bootstrap 5**. Desplegada de forma continua en **Vercel** desde GitHub.

## Puesta en marcha

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción (Turbopack) — lo que ejecuta Vercel
npm run start    # servir el build
npm run lint     # ESLint
```

## Arquitectura

Separación estricta entre **presentación** y **lógica de datos**, pensada para escalar
hacia un CMS / API sin reescribir componentes.

```
src/
├── app/            # Rutas (App Router), SEO por página, sitemap y robots
├── components/     # Componentes de UI y de dominio (presentacionales)
│   ├── ui/         #   reutilizables (Button, Section, FeatureCard, Icon, CTA…)
│   ├── layout/     #   Navbar, Footer
│   ├── foundation/ #   secciones de "Nuestra Fundación"
│   ├── projects/   #   tarjetas y explorador de proyectos
│   └── contact/    #   formulario de contacto
├── layouts/        # SiteLayout (navbar + contenido + footer)
├── services/       # Acceso a datos (async). Hoy JSON, migrable a API/CMS
├── hooks/          # Hooks de cliente (useNavbar, useScrolled)
├── models/         # Tipos de dominio (contratos de datos)
├── data/           # Contenido en JSON (placeholder, reemplazable)
├── config/         # Configuración del sitio y navegación
├── utils/          # Utilidades puras
└── types/          # Declaraciones TypeScript
```

Principios aplicados: componentes pequeños y reutilizables, **inversión de dependencias**
(los componentes dependen de la interfaz async de `services/`, no de la fuente de datos),
y separación de responsabilidades.

### Secciones

- **Nuestra Fundación** (`/nuestra-fundacion`): historia, misión, visión, valores, equipo, transparencia.
- **Líneas de Acción** (`/lineas-de-accion`): 4 líneas + centros de investigación.
- **Proyectos** (`/proyectos`, `/proyectos/[slug]`): listado con filtro y ficha de detalle.
- **Servicios** (`/servicios`): consultoría y desarrollo de proyectos para terceros.
- **Cooperación** (`/cooperacion`): alianzas y llamados a la acción.
- **Contacto** (`/contacto`): formulario conectado a `services/contact.service`.

## Cargar contenido real

Reemplaza los archivos de `src/data/*.json` con la información definitiva
(historia, proyectos, comunidades, convenios, publicaciones, documentos, fotografías).
Las imágenes van en `public/`. La forma de los datos está definida en `src/models/`.

## Migrar a CMS / API

Cada función de `src/services/` es **async** y aislada. Para pasar de JSON a una API basta
con cambiar el cuerpo de la función (por ejemplo a `fetch(process.env.API_URL + ...)`)
manteniendo su firma. Los componentes no cambian. Ver `src/services/README.md`.

## Producción y Vercel

- **Build:** `next build` con Turbopack (por defecto en Next 16). Compatible con el
  despliegue automático desde GitHub.
- **Variables de entorno:** ver `.env.example`. Definir `NEXT_PUBLIC_SITE_URL` en
  Vercel (Project Settings → Environment Variables) para SEO/sitemap correctos.
- **SEO:** metadatos por ruta, Open Graph/Twitter, `sitemap.xml` y `robots.txt` generados
  automáticamente. Títulos con plantilla `%s | Fundación Nuevo Porvenir`.
- **Rendimiento:** páginas estáticas (SSG) y rutas de proyectos pre-renderizadas.
