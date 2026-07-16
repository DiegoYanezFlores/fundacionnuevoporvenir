import type { ImageAsset, Document, LinkItem } from "./common";

/** Miembro del equipo institucional. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: ImageAsset;
  social?: LinkItem[];
}

/** Valor institucional. */
export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

/** Hito de la historia institucional. */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

/**
 * Información central de la Fundación.
 * Sección "Nuestra Fundación": historia, misión, visión, valores, equipo, transparencia.
 */
export interface Foundation {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  history: {
    summary: string;
    milestones: Milestone[];
  };
  mission: string;
  vision: string;
  values: Value[];
  team: TeamMember[];
  transparency: {
    statement: string;
    documents: Document[];
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
    social: LinkItem[];
  };
}
