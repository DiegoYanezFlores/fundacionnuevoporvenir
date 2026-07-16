import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/utils/helpers";

type Variant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline-light"
  | "outline-primary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-brand-primary",
  secondary: "btn-brand-secondary",
  accent: "btn-brand-accent",
  "outline-light": "btn-outline-light",
  "outline-primary": "btn-outline-brand-primary",
};

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

/**
 * Botón/enlace reutilizable con variantes de marca.
 * Si recibe `href` renderiza un `Link` (interno) o un `<a>` (externo).
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const classes = cx("btn", variantClass[variant], sizeClass[size], className);

  if (href) {
    if (external) {
      return (
        <a
          className={classes}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
