"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve true cuando la página se ha desplazado más de `threshold` píxeles.
 * Útil para aplicar sombra/compactar la navbar al hacer scroll.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
