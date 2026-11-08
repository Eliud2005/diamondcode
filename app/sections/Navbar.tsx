// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Inicio", id: "inicio" },
  { name: "Servicios", id: "servicios" },
  { name: "Proyectos", id: "projects" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy + estado "scrolled" para el header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      let current = "Inicio";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = link.name;
        }
      }
      setActiveLink(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Cerrar con Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isMenuOpen, handleKeyDown]);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ============== HEADER ============== */}
      <header
        className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b transition-colors duration-200 ${
          isScrolled
            ? "border-slate-200 shadow-sm"
            : "border-transparent bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded"
            aria-label="DiamondCode — Inicio"
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/assets/images/isotipo.png"
                alt=""
                fill
                sizes="32px"
                className="object-contain"
                priority
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
                aria-current={activeLink === link.name ? "page" : undefined}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-200 py-1 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 rounded ${
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
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* ============== MENÚ MÓVIL (fuera del header) ============== */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`md:hidden fixed inset-0 z-[60] bg-white transition-all duration-300 flex flex-col ${
          isMenuOpen
            ? "opacity-100 visible pointer-events-auto translate-y-0"
            : "opacity-0 invisible pointer-events-none -translate-y-2"
        }`}
      >
        {/* Header del menú: logo + botón cerrar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3"
            aria-label="DiamondCode — Inicio"
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/assets/images/isotipo.png"
                alt=""
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span
              className="text-lg text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-bluter)" }}
            >
              DiamondCode
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6 text-slate-900" strokeWidth={2} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.name)}
              aria-current={activeLink === link.name ? "page" : undefined}
              className={`group flex items-center justify-between py-4 border-b border-slate-100 transition-colors ${
                activeLink === link.name
                  ? "text-blue-700"
                  : "text-slate-900 hover:text-blue-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-xs text-slate-400 font-medium tabular-nums"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-2xl tracking-tight"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  {link.name}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Footer discreto */}
        <div className="px-6 py-6 border-t border-slate-200">
          <p
            className="text-center text-xs text-slate-500"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © {new Date().getFullYear()} DiamondCode · Software a medida
          </p>
        </div>
      </div>
    </>
  );
}