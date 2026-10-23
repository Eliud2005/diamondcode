// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Inicio", id: "inicio" },
  { name: "Servicios", id: "servicios" },
  { name: "Proyectos", id: "projects" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/assets/images/isotipo.png"
              alt="DiamondCode Isotipo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span
            className="text-lg text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors"
            style={{ fontFamily: "var(--font-bluter)" }}
          >
            DiamondCode
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 bg-white/60 border border-slate-200 px-6 py-2.5 rounded-full backdrop-blur-md shadow-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.name)}
              aria-current={activeLink === link.name ? "page" : undefined}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 py-1 font-medium ${
                activeLink === link.name
                  ? "text-blue-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-50 relative focus:outline-none"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-slate-900 transition-all duration-300 transform origin-center ${
              isMenuOpen ? "rotate-45 translate-y-2 bg-blue-700" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-900 transition-all duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-900 transition-all duration-300 transform origin-center ${
              isMenuOpen ? "-rotate-45 -translate-y-2 bg-blue-700" : ""
            }`}
          />
        </button>

        {/* Menú móvil */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-xl tracking-[0.15em] uppercase transition-colors ${
                  activeLink === link.name
                    ? "text-blue-700"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}