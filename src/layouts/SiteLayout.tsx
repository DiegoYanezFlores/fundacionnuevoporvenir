import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Estructura común a todas las páginas: navbar fija + contenido + footer.
 * Se aplica una sola vez desde el root layout.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="contenido" className="site-main flex-grow-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
