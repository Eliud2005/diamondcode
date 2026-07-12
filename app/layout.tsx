// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cambié los metadatos para que se vea ultra profesional en la pestaña del navegador 💎
export const metadata: Metadata = {
  title: "DiamondCode",
  description: "Diseño y arquitectura de sistemas digitales robustos y soluciones tecnológicas a medida para empresas y startups.",
  // 👇 AGREGA ESTO AQUÍ PARA REPARAR EL ERROR DE GOOGLE
  alternates: {
    canonical: "https://diamondcode.mx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" // Cambiado a español para mejor SEO si tu público es hispanohablante
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      {/* bg-white asegura que toda la página comparta el mismo fondo limpio corporativo */}
      <body className="bg-white text-slate-900 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}