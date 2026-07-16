import Button from "@/components/ui/Button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  lead: string;
}

/**
 * Hero de la página de inicio con degradado de marca y llamados a la acción.
 */
export default function Hero({ eyebrow, title, lead }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-lead">{lead}</p>
          <div className="hero-actions">
            <Button href="/proyectos" variant="accent" size="lg">
              Conoce nuestros proyectos
            </Button>
            <Button href="/cooperacion" variant="outline-light" size="lg">
              Trabajemos juntos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
