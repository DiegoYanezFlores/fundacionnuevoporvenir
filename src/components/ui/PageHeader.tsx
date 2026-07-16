import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: ReactNode;
}

/**
 * Cabecera de página interior con degradado de marca.
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
  children,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="container">
        {breadcrumb && <span className="page-header-breadcrumb">{breadcrumb}</span>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
