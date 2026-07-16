import type { Entity, ImageAsset, Location } from "./common";

/** Estado del ciclo de vida de un proyecto. */
export type ProjectStatus = "completed" | "in_progress" | "planned";

/** Aliado o socio de un proyecto. */
export interface Ally {
  id: string;
  name: string;
  type?: string;
  logo?: ImageAsset;
  url?: string;
}

/**
 * Proyecto ejecutado, en ejecución o futuro.
 * Sección "Proyectos".
 */
export interface Project extends Entity {
  name: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  objectives: string[];
  location: Location;
  communities: string[];
  images: ImageAsset[];
  results: string[];
  allies: Ally[];
  /** Slug de la línea de acción asociada. */
  actionLineSlug?: string;
  startDate?: string;
  endDate?: string;
}
