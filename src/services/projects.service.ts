import type { Project, ProjectStatus } from "@/models";
import data from "@/data/projects.json";

const projects = data as Project[];

/** Todos los proyectos. */
export async function getProjects(): Promise<Project[]> {
  return projects;
}

/** Proyectos filtrados por estado (realizados, en ejecución, futuros). */
export async function getProjectsByStatus(
  status: ProjectStatus,
): Promise<Project[]> {
  return projects.filter((p) => p.status === status);
}

/** Un proyecto por su slug, o null si no existe. */
export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) ?? null;
}

/** Slugs de todos los proyectos (para generación estática de rutas). */
export async function getProjectSlugs(): Promise<string[]> {
  return projects.map((p) => p.slug);
}
