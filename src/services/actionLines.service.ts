import type { ActionLine } from "@/models";
import data from "@/data/actionLines.json";

const lines = (data as ActionLine[])
  .slice()
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

/** Todas las líneas de acción, ordenadas. */
export async function getActionLines(): Promise<ActionLine[]> {
  return lines;
}

/** Una línea de acción por su slug, o null si no existe. */
export async function getActionLineBySlug(
  slug: string,
): Promise<ActionLine | null> {
  return lines.find((line) => line.slug === slug) ?? null;
}
