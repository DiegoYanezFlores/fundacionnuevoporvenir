import type { Service, PartnershipType } from "@/models";
import data from "@/data/services.json";

const content = data as {
  services: Service[];
  partnershipTypes: PartnershipType[];
};

/** Servicios de consultoría y desarrollo de proyectos para terceros. */
export async function getServices(): Promise<Service[]> {
  return content.services;
}

/** Tipos de aliados buscados en la sección de cooperación. */
export async function getPartnershipTypes(): Promise<PartnershipType[]> {
  return content.partnershipTypes;
}
