import Link from "next/link";
import type { Project } from "@/models";
import {
  projectStatusLabel,
  projectStatusVariant,
  cx,
} from "@/utils/helpers";

/**
 * Tarjeta resumen de un proyecto. Enlaza a su ficha de detalle.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const locationParts = [
    project.location.community,
    project.location.region,
    project.location.country,
  ].filter(Boolean);

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="feature-card feature-card-link d-flex flex-column"
    >
      <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
        <span
          className={cx(
            "status-badge",
            `text-bg-${projectStatusVariant(project.status)}`,
          )}
        >
          {projectStatusLabel(project.status)}
        </span>
      </div>
      <h3 className="feature-title">{project.name}</h3>
      <p className="feature-description flex-grow-1">{project.summary}</p>
      {locationParts.length > 0 && (
        <p className="small text-secondary mb-0 mt-3">
          📍 {locationParts.join(", ")}
        </p>
      )}
    </Link>
  );
}
