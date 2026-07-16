import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getProjectSlugs } from "@/services";

/**
 * Sitemap dinámico. Incluye rutas estáticas y una entrada por proyecto.
 * Next.js lo sirve automáticamente en /sitemap.xml.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/nuestra-fundacion",
    "/lineas-de-accion",
    "/proyectos",
    "/servicios",
    "/cooperacion",
    "/contacto",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const slugs = await getProjectSlugs();
  const projectRoutes = slugs.map((slug) => ({
    url: `${base}/proyectos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
