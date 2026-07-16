import Button from "./Button";

interface CTASectionProps {
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/**
 * Banda de llamado a la acción con degradado de marca.
 */
export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: CTASectionProps) {
  return (
    <section className="cta-band">
      <div className="container text-center">
        <h2 className="cta-title">{title}</h2>
        {description && <p className="cta-description">{description}</p>}
        <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
          <Button href={primary.href} variant="accent" size="lg">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="outline-light" size="lg">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
