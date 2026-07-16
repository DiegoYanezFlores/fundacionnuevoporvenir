import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { cx } from "@/utils/helpers";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: IconName;
  href?: string;
  /** Lista opcional de puntos (ejes/áreas). */
  bullets?: string[];
  className?: string;
}

/**
 * Tarjeta de característica/servicio con icono, ideal para grids.
 * Si recibe `href` toda la tarjeta es clicable.
 */
export default function FeatureCard({
  title,
  description,
  icon,
  href,
  bullets,
  className,
}: FeatureCardProps) {
  const content = (
    <>
      {icon && (
        <span className="feature-icon" aria-hidden="true">
          <Icon name={icon} size={26} />
        </span>
      )}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="feature-bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {href && <span className="feature-link">Ver más →</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cx("feature-card feature-card-link", className)}>
        {content}
      </Link>
    );
  }

  return <article className={cx("feature-card", className)}>{content}</article>;
}
