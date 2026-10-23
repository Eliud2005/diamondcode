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

export const metadata: Metadata = {
  metadataBase: new URL("https://diamondcode.mx"),
  title: {
    default: "DiamondCode | Desarrollo de Software a la Medida y Automatizaciones con IA",
    template: "%s | DiamondCode",
  },
  description:
    "Construimos software a la medida: webs de alto rendimiento, sistemas empresariales, e-commerce y automatizaciones con IA para negocios que necesitan escalar sin comprometer calidad.",
  keywords: [
    "desarrollo de software",
    "software a la medida",
    "desarrollo web",
    "automatizaciones con IA",
    "sistemas empresariales",
    "SaaS México",
    "Next.js",
    "React",
    "agencia de software",
    "DiamondCode",
  ],
  authors: [{ name: "DiamondCode" }],
  creator: "DiamondCode",
  publisher: "DiamondCode",
  alternates: {
    canonical: "https://diamondcode.mx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DiamondCode | Desarrollo de Software a la Medida y Automatizaciones con IA",
    description:
      "Construimos software a la medida: webs de alto rendimiento, sistemas empresariales, e-commerce y automatizaciones con IA para negocios que necesitan escalar.",
    url: "https://diamondcode.mx",
    siteName: "DiamondCode",
    images: [
      {
        url: "https://diamondcode.mx/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DiamondCode — Desarrollo de software a la medida",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiamondCode | Desarrollo de Software a la Medida y Automatizaciones con IA",
    description:
      "Webs de alto rendimiento, sistemas empresariales y automatizaciones con IA para negocios que necesitan escalar.",
    images: ["https://diamondcode.mx/og-image.jpg"],
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