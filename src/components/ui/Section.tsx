import type { ReactNode } from "react";
import { cx } from "@/utils/helpers";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Fondo alterno para dar ritmo visual entre secciones. */
  muted?: boolean;
  className?: string;
  /** Ancho del contenedor. */
  container?: "default" | "narrow" | "fluid";
}

/**
 * Envoltura de sección con espaciado vertical y contenedor consistentes.
 */
export default function Section({
  children,
  id,
  muted = false,
  className,
  container = "default",
}: SectionProps) {
  const containerClass =
    container === "narrow"
      ? "container-narrow"
      : container === "fluid"
        ? "container-fluid"
        : "container";

  return (
    <section
      id={id}
      className={cx("section-block", muted && "section-muted", className)}
    >
      <div className={containerClass}>{children}</div>
    </section>
  );
}
