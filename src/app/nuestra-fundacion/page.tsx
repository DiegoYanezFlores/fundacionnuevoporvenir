import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Mission from "@/components/foundation/Mission";
import Vision from "@/components/foundation/Vision";
import Values from "@/components/foundation/Values";
import History from "@/components/foundation/History";
import Team from "@/components/foundation/Team";
import Transparency from "@/components/foundation/Transparency";
import { getFoundation } from "@/services";

export const metadata: Metadata = {
  title: "Nuestra Fundación",
  description:
    "Historia, misión, visión, valores, equipo y transparencia de Fundación Nuevo Porvenir.",
};

export default async function NuestraFundacionPage() {
  const foundation = await getFoundation();

  return (
    <>
      <PageHeader
        breadcrumb="Institucional"
        title="Nuestra Fundación"
        subtitle={foundation.description}
      />

      <Section id="historia">
        <SectionHeading eyebrow="Trayectoria" title="Historia institucional" />
        <History
          summary={foundation.history.summary}
          milestones={foundation.history.milestones}
        />
      </Section>

      <Section id="mision-vision" muted>
        <SectionHeading centered eyebrow="Propósito" title="Misión y Visión" />
        <div className="row g-4">
          <div className="col-lg-6">
            <Mission text={foundation.mission} />
          </div>
          <div className="col-lg-6">
            <Vision text={foundation.vision} />
          </div>
        </div>
      </Section>

      <Section id="valores">
        <SectionHeading
          eyebrow="Principios"
          title="Nuestros valores"
          description="Los principios que guían cada intervención en el territorio."
        />
        <Values values={foundation.values} />
      </Section>

      <Section id="equipo" muted>
        <SectionHeading eyebrow="Personas" title="Equipo" />
        <Team members={foundation.team} />
      </Section>

      <Section id="transparencia">
        <SectionHeading
          eyebrow="Rendición de cuentas"
          title="Transparencia institucional"
        />
        <Transparency
          statement={foundation.transparency.statement}
          documents={foundation.transparency.documents}
        />
      </Section>
    </>
  );
}
