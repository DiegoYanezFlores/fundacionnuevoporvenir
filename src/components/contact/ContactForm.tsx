"use client";

import { useState } from "react";
import type { ContactMessage, ContactReason } from "@/models";
import { submitContactForm } from "@/services";

const REASONS: { value: ContactReason; label: string }[] = [
  { value: "alianza", label: "Alianza estratégica" },
  { value: "servicio", label: "Servicio / consultoría" },
  { value: "cooperacion", label: "Cooperación internacional" },
  { value: "prensa", label: "Prensa" },
  { value: "otro", label: "Otro" },
];

const EMPTY: ContactMessage = {
  name: "",
  email: "",
  organization: "",
  reason: "alianza",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulario de contacto (client component).
 * Delega el envío en el servicio `submitContactForm`, migrable a una API real.
 */
export default function ContactForm() {
  const [form, setForm] = useState<ContactMessage>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update =
    (field: keyof ContactMessage) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const result = await submitContactForm(form);
    setFeedback(result.message);
    if (result.ok) {
      setStatus("success");
      setForm(EMPTY);
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="feature-card" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label fw-semibold">
            Nombre *
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            required
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-semibold">
            Correo electrónico *
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            required
            value={form.email}
            onChange={update("email")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="organization" className="form-label fw-semibold">
            Organización
          </label>
          <input
            id="organization"
            type="text"
            className="form-control"
            value={form.organization}
            onChange={update("organization")}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="reason" className="form-label fw-semibold">
            Motivo
          </label>
          <select
            id="reason"
            className="form-select"
            value={form.reason}
            onChange={update("reason")}
          >
            {REASONS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label fw-semibold">
            Mensaje *
          </label>
          <textarea
            id="message"
            className="form-control"
            rows={5}
            required
            value={form.message}
            onChange={update("message")}
          />
        </div>
      </div>

      {feedback && (
        <div
          className={`alert mt-3 mb-0 ${
            status === "success" ? "alert-success" : "alert-danger"
          }`}
          role="status"
        >
          {feedback}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-brand-primary mt-3"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
