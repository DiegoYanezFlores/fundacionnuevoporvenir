"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Estado y utilidades de la barra de navegación:
 * - `open`: si el menú colapsable (móvil) está abierto.
 * - `toggle` / `close`: control del menú.
 * - `isActive(href)`: si una ruta corresponde a la sección actual.
 */
export function useNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

  return { open, toggle, close, isActive, pathname };
}
