import type { Entity } from "./common";

/**
 * Servicio de consultoría / desarrollo de proyectos para terceros.
 * Sección "Consultoría, Innovación y Desarrollo de Proyectos".
 */
export interface Service extends Entity {
  title: string;
  summary: string;
  description: string;
  icon: string;
  /** Entregables o alcances del servicio. */
  deliverables: string[];
}

/** Tipo de aliado buscado en cooperación. */
export interface PartnershipType {
  id: string;
  title: string;
  description: string;
  icon: string;
}
