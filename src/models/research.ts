import type { Entity, ImageAsset, LinkItem } from "./common";

/** Tipo de entidad de investigación. */
export type ResearchCenterType =
  | "center"
  | "observatory"
  | "lab"
  | "network";

/**
 * Centro de investigación, observatorio o laboratorio.
 * Sub-sección "Investigación Aplicada y Centros de Investigación".
 */
export interface ResearchCenter extends Entity {
  name: string;
  type: ResearchCenterType;
  summary: string;
  description: string;
  focusAreas: string[];
  image?: ImageAsset;
  /** true si es propio, false si es aliado. */
  owned: boolean;
}

/** Publicación científica o técnica. */
export interface Publication extends Entity {
  title: string;
  authors: string[];
  abstract: string;
  year: string;
  type?: string;
  link?: LinkItem;
}
