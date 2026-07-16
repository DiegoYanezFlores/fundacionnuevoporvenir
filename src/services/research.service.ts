import type { ResearchCenter, Publication } from "@/models";
import data from "@/data/research.json";

const research = data as {
  centers: ResearchCenter[];
  publications: Publication[];
};

/** Centros de investigación, observatorios y laboratorios. */
export async function getResearchCenters(): Promise<ResearchCenter[]> {
  return research.centers;
}

/** Publicaciones científicas y técnicas. */
export async function getPublications(): Promise<Publication[]> {
  return research.publications;
}
