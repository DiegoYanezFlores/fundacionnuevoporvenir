import type { ReactNode } from "react";
import { cx } from "@/utils/helpers";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  centered?: boolean;
  className?: string;
}

/**
 * Encabezado de sección: antetítulo, título y descripción opcional.
 */
export default function SectionHeading({
  title,
  eyebrow,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "section-heading",
        centered && "text-center mx-auto",
        className,
      )}
      style={centered ? { maxWidth: "48rem" } : undefined}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
