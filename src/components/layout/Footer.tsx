import Link from "next/link";
import { mainNav, siteConfig } from "@/config/site";
import { getFoundation } from "@/services";

/**
 * Pie de página institucional con navegación, contacto y aviso legal.
 * Server Component: obtiene el contacto desde el servicio.
 */
export default async function Footer() {
  const foundation = await getFoundation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <span className="site-brand site-brand-footer">
              <span className="site-brand-mark" aria-hidden="true">
                NP
              </span>
              <span className="site-brand-text">{siteConfig.name}</span>
            </span>
            <p className="site-footer-tagline">{foundation.tagline}</p>
          </div>

          <div className="col-6 col-lg-4">
            <h3 className="site-footer-title">Navegación</h3>
            <ul className="site-footer-list">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <h3 className="site-footer-title">Contacto</h3>
            <ul className="site-footer-list">
              <li>
                <a href={`mailto:${foundation.contact.email}`}>
                  {foundation.contact.email}
                </a>
              </li>
              {foundation.contact.phone && (
                <li>
                  <a href={`tel:${foundation.contact.phone}`}>
                    {foundation.contact.phone}
                  </a>
                </li>
              )}
              {foundation.contact.address && <li>{foundation.contact.address}</li>}
            </ul>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </span>
          <span>Plataforma institucional</span>
        </div>
      </div>
    </footer>
  );
}
