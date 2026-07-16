import Link from "next/link";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-5">
        <p className="eyebrow">Error 404</p>
        <h1 className="section-title">Página no encontrada</h1>
        <p className="section-description mx-auto mt-3">
          La página que buscas no existe o fue movida.
        </p>
        <Link href="/" className="btn btn-brand-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    </Section>
  );
}
