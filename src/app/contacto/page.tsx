import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import Icon from "@/components/ui/Icon";
import { getFoundation } from "@/services";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Fundación Nuevo Porvenir para alianzas, cooperación, servicios o consultoría.",
};

export default async function ContactoPage() {
  const foundation = await getFoundation();
  const { contact } = foundation;

  return (
    <>
      <PageHeader
        breadcrumb="Contacto"
        title="Hablemos"
        subtitle="Escríbenos para construir proyectos con impacto territorial. Te responderemos a la brevedad."
      />

      <Section>
        <div className="row g-5">
          <div className="col-lg-7">
            <ContactForm />
          </div>
          <div className="col-lg-5">
            <div className="feature-card h-100">
              <span className="feature-icon" aria-hidden="true">
                <Icon name="mail" size={24} />
              </span>
              <h2 className="h4">Datos de contacto</h2>
              <ul className="site-footer-list mt-3" style={{ gap: "0.75rem" }}>
                <li>
                  <strong className="text-body d-block">Correo</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                {contact.phone && (
                  <li>
                    <strong className="text-body d-block">Teléfono</strong>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </li>
                )}
                {contact.address && (
                  <li>
                    <strong className="text-body d-block">Dirección</strong>
                    <span>{contact.address}</span>
                  </li>
                )}
              </ul>
              <p className="feature-description mt-3 mb-0">
                También puedes solicitar una alianza estratégica o una propuesta
                de servicios seleccionando el motivo en el formulario.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
