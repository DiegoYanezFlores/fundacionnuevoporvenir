"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectStatus } from "@/models";
import ProjectCard from "./ProjectCard";
import EmptyState from "@/components/ui/EmptyState";
import { cx } from "@/utils/helpers";

type Filter = ProjectStatus | "all";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "completed", label: "Realizados" },
  { value: "in_progress", label: "En ejecución" },
  { value: "planned", label: "Futuros" },
];

/**
 * Explorador de proyectos con filtro por estado (client component).
 * Recibe los datos desde el servidor y filtra en el cliente.
 */
export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.status === filter),
    [filter, projects],
  );

  return (
    <div>
      <div
        className="d-flex flex-wrap gap-2 mb-4"
        role="tablist"
        aria-label="Filtrar proyectos por estado"
      >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            className={cx(
              "btn btn-sm",
              filter === f.value
                ? "btn-brand-primary"
                : "btn-outline-brand-primary",
            )}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="card-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyState message="No hay proyectos en esta categoría por el momento." />
      )}
    </div>
  );
}
