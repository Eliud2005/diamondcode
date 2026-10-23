// app/sections/Footer.tsx
"use client";

import Link from "next/link";

const COMPANY_LINKS = [
  { name: "Sobre nosotros", href: "/company/aboutus" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/eliudgh" },
  { name: "Instagram", href: "https://www.instagram.com/diamondcodemx" },
  { name: "TikTok", href: "https://www.tiktok.com/@diamondcodemx" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-slate-950 text-slate-400 border-t border-slate-800 py-8 md:py-10 overflow-hidden"
    >
      {/* Halo sutil superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-8">

          {/* Branding */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            <Link
              href="/"
              className="text-lg text-white tracking-tight hover:text-blue-400 transition-colors w-fit"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Diamond<span className="text-blue-400">Code</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Convertimos ideas complejas en soluciones eficientes, construyendo lo que tu negocio necesita.
            </p>
          </div>

          {/* Empresa */}
          <div className="md:col-span-3">
            <h4
              className="text-[10px] text-slate-500 uppercase tracking-[0.25em] mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Empresa
            </h4>
            <ul className="space-y-2 text-sm font-light">
              {COMPANY_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conexiones */}
          <div className="md:col-span-3">
            <h4
              className="text-[10px] text-slate-500 uppercase tracking-[0.25em] mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Conexiones
            </h4>
            <ul className="space-y-2 text-sm font-light">
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    {social.name}
                    <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Línea de créditos */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] font-light tracking-wide text-slate-500 border-t border-slate-800 pt-5">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p style={{ fontFamily: "var(--font-dm-mono)" }}>
              © {new Date().getFullYear()} DiamondCode
            </p>
            <span className="text-slate-700">·</span>
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Términos
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}