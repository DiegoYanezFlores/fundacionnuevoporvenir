import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import type { IconName } from "@/components/ui/Icon";
import { getServices } from "@/services";

export const metadata: Metadata = {
  title: "Consultoría, Innovación y Desarrollo de Proyectos",
  description:
    "Servicios de formulación de proyectos, investigación aplicada, diagnósticos territoriales, desarrollo tecnológico e innovación social para terceros.",
};

export default async function ServiciosPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        breadcrumb="Servicios"
        title="Consultoría, Innovación y Desarrollo de Proyectos"
        subtitle="Universidades, empresas, gobiernos locales y organizaciones pueden desarrollar proyectos conjuntos con nuestro equipo técnico e investigador."
      />

      <Section>
        <SectionHeading
          eyebrow="Qué ofrecemos"
          title="Servicios especializados"
          description="Acompañamos a organizaciones en el diseño, la investigación y la ejecución de proyectos con impacto."
        />
        <div className="card-grid">
          {services.map((service) => (
            <FeatureCard
              key={service.id}
              icon={service.icon as IconName}
              title={service.title}
              description={service.summary}
              bullets={service.deliverables}
            />
          ))}
        </div>
      </Section>

      <CTASection
        title="Desarrollemos su próximo proyecto"
        description="Cuéntenos su necesidad y construyamos juntos una propuesta técnica a la medida de su organización."
        primary={{ label: "Solicitar una propuesta", href: "/contacto" }}
        secondary={{ label: "Ver alianzas", href: "/cooperacion" }}
      />
    </>
  );
}
