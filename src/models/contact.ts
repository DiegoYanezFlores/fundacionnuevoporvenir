/** Motivo del mensaje de contacto. */
export type ContactReason =
  | "alianza"
  | "servicio"
  | "cooperacion"
  | "prensa"
  | "otro";

/** Mensaje enviado desde el formulario de contacto. */
export interface ContactMessage {
  name: string;
  email: string;
  organization?: string;
  reason: ContactReason;
  message: string;
}

/** Resultado del envío de un mensaje de contacto. */
export interface ContactResult {
  ok: boolean;
  message: string;
}
