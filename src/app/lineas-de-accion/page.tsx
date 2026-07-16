import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import Icon, { type IconName } from "@/components/ui/Icon";
import { cx } from "@/utils/helpers";
import { getActionLines, getResearchCenters } from "@/services";

export const metadata: Metadata = {
  title: "Líneas de Acción",
  description:
    "Desarrollo territorial e intercultural, educación y tecnología, investigación aplicada, y conservación ambiental y bioeconomía.",
};

export default async function LineasDeAccionPage() {
  const [lines, researchCenters] = await Promise.all([
    getActionLines(),
    getResearchCenters(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb="Qué hacemos"
        title="Líneas de Acción"
        subtitle="Cuatro frentes de trabajo articulados: desarrollo territorial, tecnología e innovación, investigación aplicada y conservación ambiental."
      />

      {lines.map((line, index) => (
        <Section key={line.id} id={line.slug} muted={index % 2 === 1}>
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <span className="feature-icon" aria-hidden="true">
                <Icon name={line.icon as IconName} size={26} />
              </span>
              <h2 className="section-title mt-2">{line.title}</h2>
              <p className="section-description">{line.description}</p>
            </div>
            <div className="col-lg-7">
              <ul className="check-list">
                {line.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      {/* Centros de investigación (sub-sección de Investigación Aplicada) */}
      <Section
        id="centros-de-investigacion"
        className={cx(lines.length % 2 === 1 && "section-muted")}
      >
        <SectionHeading
          eyebrow="Investigación Aplicada"
          title="Centros, observatorios y laboratorios"
          description="Espacios propios y aliados que generan evidencia y conocimiento para la acción territorial."
        />
        <div className="card-grid">
          {researchCenters.map((center) => (
            <FeatureCard
              key={center.id}
              icon="microscope"
              title={center.name}
              description={center.summary}
              bullets={center.focusAreas}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
