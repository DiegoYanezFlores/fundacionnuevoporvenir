import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Bootstrap from "@/lib/bootstrap";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundación Nuevo Porvenir",
  description: "Fundación para el Desarrollo y Ayuda Social Nuevo Porvenir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-vh-100 d-flex flex-column">
        <Bootstrap />
        {children}
      </body>
    </html>
  );
}