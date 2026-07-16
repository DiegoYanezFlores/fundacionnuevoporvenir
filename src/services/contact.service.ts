import type { ContactMessage, ContactResult } from "@/models";

/**
 * Envío del formulario de contacto.
 *
 * IMPLEMENTACIÓN ACTUAL (placeholder): valida y simula el envío.
 * Para producción, reemplazar el cuerpo por una llamada al backend, por ejemplo:
 *
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   return res.json();
 *
 * El backend puede integrarse con un servicio de correo (Resend, SendGrid),
 * un CMS o una base de datos. La firma de esta función no debe cambiar.
 */
export async function submitContactForm(
  payload: ContactMessage,
): Promise<ContactResult> {
  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, message: "Faltan campos obligatorios." };
  }

  // Simulación de latencia de red.
  await new Promise((resolve) => setTimeout(resolve, 600));

  // En esta fase no se envía nada a servicios externos.
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] mensaje recibido (stub):", payload);
  }

  return {
    ok: true,
    message:
      "¡Gracias por escribirnos! Hemos recibido tu mensaje y te contactaremos pronto.",
  };
}
