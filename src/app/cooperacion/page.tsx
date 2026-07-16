import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import type { IconName } from "@/components/ui/Icon";
import { getPartnershipTypes } from "@/services";

export const metadata: Metadata = {
  title: "Cooperación y Alianzas",
  description:
    "Fundación Nuevo Porvenir busca cooperación internacional, convenios universitarios, empresas con responsabilidad social e instituciones aliadas.",
};

export default async function CooperacionPage() {
  const partnerships = await getPartnershipTypes();

  return (
    <>
      <PageHeader
        breadcrumb="Alianzas"
        title="Cooperación y Alianzas"
        subtitle="Trabajemos juntos. Buscamos aliados que quieran construir proyectos con impacto territorial, social y ambiental."
      />

      <Section>
        <SectionHeading
          centered
          eyebrow="Con quién trabajamos"
          title="Buscamos aliados estratégicos"
          description="Sumamos capacidades con organizaciones que comparten nuestro compromiso con las comunidades."
        />
        <div className="card-grid">
          {partnerships.map((p) => (
            <FeatureCard
              key={p.id}
              icon={p.icon as IconName}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </Section>

      <CTASection
        title="Trabajemos juntos"
        description="Construyamos proyectos con impacto territorial. Solicite una alianza estratégica y demos el primer paso."
        primary={{ label: "Solicite una alianza estratégica", href: "/contacto" }}
        secondary={{ label: "Conozca nuestros servicios", href: "/servicios" }}
      />
    </>
  );
}
