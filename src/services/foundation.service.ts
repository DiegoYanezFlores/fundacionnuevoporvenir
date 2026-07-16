import type { Foundation } from "@/models";
import data from "@/data/foundation.json";

/**
 * Servicio de la información institucional (sección "Nuestra Fundación").
 * Fuente actual: JSON local. Migrable a API/CMS sin cambiar la firma.
 */
export async function getFoundation(): Promise<Foundation> {
  return data as Foundation;
}
