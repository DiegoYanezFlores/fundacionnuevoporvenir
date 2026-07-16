import type { Entity, ImageAsset } from "./common";

/**
 * Línea de acción de la Fundación.
 * Sección "Líneas de Acción": desarrollo territorial, educación/tecnología,
 * investigación aplicada, conservación ambiental y bioeconomía.
 */
export interface ActionLine extends Entity {
  title: string;
  summary: string;
  description: string;
  /** Identificador de icono (bootstrap-icons o mapeo interno). */
  icon: string;
  /** Ejes o focos concretos de la línea. */
  focusAreas: string[];
  image?: ImageAsset;
  /** Orden de aparición en listados. */
  order?: number;
}
