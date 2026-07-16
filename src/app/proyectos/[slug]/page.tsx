import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import {
  projectStatusLabel,
  projectStatusVariant,
  formatDateRange,
  cx,
} from "@/utils/helpers";
import { getProjectBySlug, getProjectSlugs } from "@/services";

/** Genera las rutas estáticas de cada proyecto en tiempo de build. */
export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function ProyectoDetallePage({ params }: Params) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const locationParts = [
    project.location.community,
    project.location.city,
    project.location.region,
    project.location.country,
  ].filter(Boolean);

  const dateRange = formatDateRange(project.startDate, project.endDate);

  return (
    <>
      <PageHeader breadcrumb="Proyectos" title={project.name} subtitle={project.summary}>
        <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
          <span
            className={cx(
              "status-badge",
              `text-bg-${projectStatusVariant(project.status)}`,
            )}
          >
            {projectStatusLabel(project.status)}
          </span>
          {dateRange && (
            <span className="text-white-50">{dateRange}</span>
          )}
        </div>
      </PageHeader>

      <Section>
        <div className="row g-5">
          <div className="col-lg-8">
            <SectionHeading title="Descripción" className="mb-3" />
            <p className="lead">{project.description}</p>

            {project.objectives.length > 0 && (
              <>
                <h3 className="h5 mt-4">Objetivos</h3>
                <ul className="check-list mt-2">
                  {project.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="h5 mt-4">Resultados</h3>
            {project.results.length > 0 ? (
              <ul className="check-list mt-2">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            ) : (
              <EmptyState message="Los resultados de este proyecto se publicarán próximamente." />
            )}
          </div>

          <aside className="col-lg-4">
            <div className="feature-card">
              <h3 className="h6 text-uppercase text-secondary">Ficha</h3>
              <dl className="mb-0">
                {locationParts.length > 0 && (
                  <>
                    <dt className="fw-semibold mt-2">Ubicación</dt>
                    <dd className="feature-description">{locationParts.join(", ")}</dd>
                  </>
                )}
                {project.communities.length > 0 && (
                  <>
                    <dt className="fw-semibold mt-2">Comunidades participantes</dt>
                    <dd className="feature-description">
                      {project.communities.join(", ")}
                    </dd>
                  </>
                )}
                <dt className="fw-semibold mt-2">Aliados</dt>
                <dd className="feature-description mb-0">
                  {project.allies.length > 0
                    ? project.allies.map((a) => a.name).join(", ")
                    : "Por confirmar"}
                </dd>
              </dl>
            </div>

            {project.images.length === 0 && (
              <div className="mt-3">
                <EmptyState
                  title="Galería"
                  message="Las fotografías del proyecto se incorporarán próximamente."
                />
              </div>
            )}
          </aside>
        </div>

        <div className="mt-5">
          <Link href="/proyectos" className="btn btn-outline-brand-primary">
            ← Volver a proyectos
          </Link>
        </div>
      </Section>
    </>
  );
}
