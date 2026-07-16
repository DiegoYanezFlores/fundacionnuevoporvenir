import type { ProjectStatus } from "@/models";

/** Une clases condicionales ignorando valores falsy. */
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Etiqueta legible para el estado de un proyecto. */
export function projectStatusLabel(status: ProjectStatus): string {
  const labels: Record<ProjectStatus, string> = {
    completed: "Realizado",
    in_progress: "En ejecución",
    planned: "Futuro",
  };
  return labels[status];
}

/** Clase de badge de Bootstrap según el estado del proyecto. */
export function projectStatusVariant(status: ProjectStatus): string {
  const variants: Record<ProjectStatus, string> = {
    completed: "success",
    in_progress: "warning",
    planned: "secondary",
  };
  return variants[status];
}

/** Formatea un rango de fechas ISO a texto legible en español. */
export function formatDateRange(start?: string, end?: string): string {
  const fmt = (iso?: string) =>
    iso
      ? new Date(iso).toLocaleDateString("es", {
          year: "numeric",
          month: "short",
        })
      : "";
  const from = fmt(start);
  const to = fmt(end);
  if (from && to) return `${from} – ${to}`;
  if (from) return `Desde ${from}`;
  return "";
}
