
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

export const metadata: Metadata = {
  title: "DiamondCode | Desarrollo Web y Soluciones Digitales",
  description: "Diseño y arquitectura de sistemas digitales robustos y soluciones tecnológicas a medida para empresas y startups.",
  alternates: {
    canonical: "https://diamondcode.mx",
  },
  openGraph: {
    title: "DiamondCode | Desarrollo Web y Soluciones Digitales",
    description: "Diseño y arquitectura de sistemas digitales robustos y soluciones tecnológicas a medida para empresas y startups.",
    url: "https://diamondcode.mx",
    siteName: "DiamondCode",
    images: [
      {
        url: "https://diamondcode.mx/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DiamondCode - Desarrollo Web",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-white text-slate-900 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}