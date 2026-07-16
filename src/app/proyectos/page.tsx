import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { getProjects } from "@/services";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos realizados, en ejecución y futuros de Fundación Nuevo Porvenir en territorios rurales e indígenas.",
};

export default async function ProyectosPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHeader
        breadcrumb="Nuestro trabajo"
        title="Proyectos"
        subtitle="Iniciativas realizadas, en ejecución y futuras, junto a comunidades y aliados."
      />
      <Section>
        <ProjectsExplorer projects={projects} />
      </Section>
    </>
  );
}
