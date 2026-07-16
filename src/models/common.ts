/**
 * Tipos comunes reutilizados por el dominio de la Fundación.
 * Mantener este archivo libre de lógica: solo contratos de datos.
 */

/** Imagen con metadatos para accesibilidad y SEO. */
export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

/** Enlace genérico (navegación, redes, documentos). */
export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

/** Ubicación geográfica de un proyecto o comunidad. */
export interface Location {
  country: string;
  region?: string;
  city?: string;
  community?: string;
  lat?: number;
  lng?: number;
}

/** Llamado a la acción reutilizable (botones, banners). */
export interface CallToAction {
  title: string;
  description?: string;
  actionLabel: string;
  href: string;
}

/** Documento institucional descargable. */
export interface Document {
  id: string;
  title: string;
  description?: string;
  fileUrl: string;
  publishedAt?: string;
  category?: string;
}

/** Base para entidades identificables y enrutables por slug. */
export interface Entity {
  id: string;
  slug: string;
}
