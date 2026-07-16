import Hero from "@/components/foundation/Hero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import type { IconName } from "@/components/ui/Icon";
import { getFoundation, getActionLines, getProjects } from "@/services";

export default async function Home() {
  const [foundation, actionLines, projects] = await Promise.all([
    getFoundation(),
    getActionLines(),
    getProjects(),
  ]);

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Fundación Nuevo Porvenir"
        title="Construimos oportunidades con las comunidades"
        lead={foundation.tagline}
      />

      {/* Quiénes somos */}
      <Section>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <SectionHeading
              eyebrow="Nuestra Fundación"
              title="Desarrollo con raíces en el territorio"
            />
            <p className="lead">{foundation.description}</p>
            <Button href="/nuestra-fundacion" variant="outline-primary">
              Conoce la Fundación
            </Button>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {foundation.values.map((v) => (
                <div className="col-6" key={v.id}>
                  <div className="feature-card h-100">
                    <h3 className="feature-title h6">{v.title}</h3>
                    <p className="feature-description small mb-0">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Líneas de acción */}
      <Section muted>
        <SectionHeading
          centered
          eyebrow="Líneas de Acción"
          title="Cuatro frentes de trabajo con impacto"
          description="Articulamos desarrollo territorial, tecnología, investigación y sostenibilidad ambiental."
        />
        <div className="card-grid">
          {actionLines.map((line) => (
            <FeatureCard
              key={line.id}
              icon={line.icon as IconName}
              title={line.title}
              description={line.summary}
              href={`/lineas-de-accion#${line.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* Proyectos destacados */}
      <Section>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <SectionHeading
            className="mb-0"
            eyebrow="Proyectos"
            title="Trabajo que transforma territorios"
          />
          <Button href="/proyectos" variant="outline-primary">
            Ver todos los proyectos
          </Button>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Construyamos proyectos con impacto territorial"
        description="Buscamos cooperación internacional, convenios universitarios, empresas con responsabilidad social e instituciones aliadas."
        primary={{ label: "Solicite una alianza estratégica", href: "/cooperacion" }}
        secondary={{ label: "Nuestros servicios", href: "/servicios" }}
      />
    </>
  );
}
