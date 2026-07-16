"use client";

import Link from "next/link";
import { mainNav, siteConfig } from "@/config/site";
import { useNavbar } from "@/hooks/useNavbar";
import { useScrolled } from "@/hooks/useScrolled";
import { cx } from "@/utils/helpers";

/**
 * Barra de navegación institucional, responsive y accesible.
 * Menú colapsable controlado por estado (no depende del JS de Bootstrap).
 */
export default function Navbar() {
  const { open, toggle, close, isActive } = useNavbar();
  const scrolled = useScrolled();

  return (
    <nav
      className={cx("site-navbar", scrolled && "site-navbar-scrolled")}
      aria-label="Navegación principal"
    >
      <div className="container site-navbar-inner">
        <Link href="/" className="site-brand" onClick={close}>
          <span className="site-brand-mark" aria-hidden="true">
            NP
          </span>
          <span className="site-brand-text">{siteConfig.shortName}</span>
        </Link>

        <button
          type="button"
          className="site-navbar-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Abrir menú"
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={cx("site-navbar-menu", open && "is-open")}
        >
          <ul className="site-navbar-list">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cx(
                    "site-navbar-link",
                    isActive(item.href) && "is-active",
                  )}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/cooperacion"
            className="btn btn-brand-accent btn-sm"
            onClick={close}
          >
            Trabajemos juntos
          </Link>
        </div>
      </div>
    </nav>
  );
}
