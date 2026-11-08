// app/sections/Projects.tsx
"use client";

import { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "01",
    title: "Itacate",
    subtitle: "Web de Servicios & Banquetes",
    description:
      "Diseño y desarrollo de una plataforma web premium para servicios de banquetería y experiencias gastronómicas privadas. Optimizamos la reserva de menús, la gestión de eventos y la presentación del catálogo de alta cocina del chef.",
    href: "https://www.itacate.it.com/",
    isComingSoon: false,
    year: "2024",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    accent: "text-amber-800",
    shape: "circle" as const,
  },
  {
    id: "02",
    title: "Invitación digital",
    subtitle: "Invitación digital de XV años",
    description:
      "Desarrollamos invitaciones digitales personalizadas para cualquier tipo de evento.",
    href: "https://invitacionjade.vercel.app/",
    isComingSoon: false,
    year: "2024",
    gradient: "from-emerald-50 via-teal-50 to-cyan-50",
    accent: "text-emerald-800",
    shape: "square" as const,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = PROJECTS_DATA[activeProject];

  const goPrev = () =>
    setActiveProject(
      (activeProject - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length
    );
  const goNext = () =>
    setActiveProject((activeProject + 1) % PROJECTS_DATA.length);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-white border-t border-slate-200 text-slate-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <h2
              className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              Proyectos
              <span className="text-blue-700"> Recientes.</span>
            </h2>
          </div>

          {/* Contador + dots arriba a la derecha */}
          <div className="flex items-center gap-4">
            <span
              className="text-sm text-slate-500 tabular-nums font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
              aria-live="polite"
            >
              <span className="text-slate-900 font-semibold">
                {String(activeProject + 1).padStart(2, "0")}
              </span>
              <span className="mx-0.5">/</span>
              <span>{String(PROJECTS_DATA.length).padStart(2, "0")}</span>
            </span>

            <div className="flex items-center gap-2">
              {PROJECTS_DATA.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(i)}
                  aria-label={`Ir al proyecto ${i + 1}: ${project.title}`}
                  aria-current={activeProject === i ? "true" : undefined}
                  className="group flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 rounded-full transition-all duration-300"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      activeProject === i
                        ? "w-8 h-2.5 bg-blue-700"
                        : "w-2.5 h-2.5 bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjeta destacada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Lado izquierdo: flechas + visor */}
          <div className="lg:col-span-7 relative bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 min-h-[360px] lg:min-h-[520px]">
            <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {/* Flecha IZQUIERDA */}
              <button
                onClick={goPrev}
                aria-label="Proyecto anterior"
                className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-300 bg-white hover:border-blue-700 hover:bg-blue-700 text-slate-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <ArrowLeft
                  className="w-5 h-5 md:w-6 md:h-6"
                  strokeWidth={2.5}
                />
              </button>

              {/* Visor con gradiente */}
              <div className="relative flex-1 max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200/80 shadow-lg shadow-slate-200/50 group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} transition-all duration-700`}
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`w-[85%] h-[85%] border border-white/40 transition-all duration-700 ${
                      currentProject.shape === "circle"
                        ? "rounded-full"
                        : "rounded-[2rem] rotate-3"
                    }`}
                  />
                  <div
                    className={`absolute w-[65%] h-[65%] border border-white/30 transition-all duration-700 ${
                      currentProject.shape === "circle"
                        ? "rounded-full"
                        : "rounded-[2rem] -rotate-6"
                    }`}
                  />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-[0.95] tracking-tight"
                    style={{
                      fontFamily: "var(--font-tenor)",
                      fontWeight: 400,
                    }}
                  >
                    {currentProject.title}
                  </p>
                  <div
                    className={`mt-4 sm:mt-5 md:mt-6 h-px w-12 sm:w-16 ${currentProject.accent} opacity-40`}
                    style={{ backgroundColor: "currentColor" }}
                  />
                </div>

                {/* Overlay hover — SOLO desktop */}
                {!currentProject.isComingSoon && (
                  <a
                    href={currentProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex absolute inset-0 z-20 items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500"
                    aria-label={`Visitar sitio de ${currentProject.title}`}
                  >
                    <span className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Visitar sitio
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                )}
              </div>

              {/* Flecha DERECHA */}
              <button
                onClick={goNext}
                aria-label="Proyecto siguiente"
                className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-300 bg-white hover:border-blue-700 hover:bg-blue-700 text-slate-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <ArrowRight
                  className="w-5 h-5 md:w-6 md:h-6"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>

          {/* Lado derecho: información */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div
                className="text-xs tracking-[0.25em] uppercase text-slate-400 mb-6"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {currentProject.id} — {currentProject.year}
              </div>

              <h3
                className="text-3xl md:text-4xl text-slate-900 mb-3 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                {currentProject.title}
              </h3>

              <p
                className="text-[11px] uppercase tracking-[0.2em] text-blue-700 mb-6 font-medium"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {currentProject.subtitle}
              </p>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                {currentProject.description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              {currentProject.isComingSoon ? (
                <span
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-slate-400 px-4 py-2 border border-dashed border-slate-300 rounded-full"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  En desarrollo
                </span>
              ) : (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-blue-700 hover:text-blue-800 transition-colors duration-200 group/link"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <span className="tracking-[0.2em] uppercase font-medium">
                    Visitar sitio web
                  </span>
                  <ExternalLink
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}