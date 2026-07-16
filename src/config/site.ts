import type { LinkItem } from "@/models";

/**
 * Configuración global del sitio.
 * Centraliza metadatos, navegación y URL base (usada para SEO y sitemap).
 */
export const siteConfig = {
  name: "Fundación Nuevo Porvenir",
  shortName: "Nuevo Porvenir",
  description:
    "Plataforma institucional de Fundación Nuevo Porvenir: desarrollo comunitario, innovación, educación, tecnología, investigación aplicada y oportunidades para territorios rurales e indígenas.",
  /** URL de producción. Configurable por variable de entorno en Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fundacionnuevoporvenir.org",
  locale: "es_EC",
  keywords: [
    "fundación",
    "desarrollo comunitario",
    "innovación",
    "educación",
    "tecnología",
    "investigación aplicada",
    "territorios rurales",
    "comunidades indígenas",
    "conservación ambiental",
    "bioeconomía",
  ],
};

/** Navegación principal del sitio. */
export const mainNav: LinkItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nuestra Fundación", href: "/nuestra-fundacion" },
  { label: "Líneas de Acción", href: "/lineas-de-accion" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Cooperación", href: "/cooperacion" },
  { label: "Contacto", href: "/contacto" },
];

export type SiteConfig = typeof siteConfig;
