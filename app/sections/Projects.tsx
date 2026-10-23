// app/sections/Projects.tsx
"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "01",
    title: "Itacate",
    subtitle: "Web de Servicios & Banquetes",
    description:
      "Diseño y desarrollo de una plataforma web premium para servicios de banquetería y experiencias gastronómicas privadas. Optimizamos la reserva de menús, la gestión de eventos y la presentación del catálogo de alta cocina del chef.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://www.itacate.it.com/",
    image: "/assets/images/project1.jpeg",
    isComingSoon: false,
    year: "2024",
    emoji: "🍲👨‍🍳",
  },
  {
    id: "02",
    title: "Nube Serpiente",
    subtitle: "Plataforma Digital Web",
    description:
      "Desarrollamos la plataforma web oficial para este innovador centro deportivo y cultural. Diseñamos una experiencia digital fluida que conecta a la comunidad, facilitando la difusión de eventos culturales y la gestión de actividades deportivas en un solo lugar.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#",
    image: "",
    isComingSoon: true,
    year: "2024",
    emoji: "☁️🐍",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = PROJECTS_DATA[activeProject];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-white border-t border-slate-200 text-slate-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="md:col-span-6">
            <h2
              className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              Proyectos
              <span className="text-blue-700"> Recientes.</span>
            </h2>
          </div>

          {/* Navegación: flechas + dots */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setActiveProject(
                  (activeProject - 1 + PROJECTS_DATA.length) %
                    PROJECTS_DATA.length
                )
              }
              aria-label="Proyecto anterior"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-blue-700 hover:bg-blue-50 text-slate-600 hover:text-blue-700 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {PROJECTS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  aria-label={`Ver proyecto ${i + 1}`}
                  className="transition-all duration-300 cursor-pointer rounded-full"
                  style={{
                    width: activeProject === i ? "32px" : "8px",
                    height: "8px",
                    background:
                      activeProject === i
                        ? "var(--primary)"
                        : "var(--border-strong)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveProject((activeProject + 1) % PROJECTS_DATA.length)
              }
              aria-label="Proyecto siguiente"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:border-blue-700 hover:bg-blue-50 text-slate-600 hover:text-blue-700 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tarjeta destacada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden">

          {/* Lado izquierdo: visor de imagen contenido */}
          <div className="lg:col-span-7 relative bg-slate-50 overflow-hidden group flex items-center justify-center p-6 md:p-10 min-h-[320px] lg:min-h-[520px]">

            {/* Contenedor con aspect-ratio fijo y padding — la imagen nunca se desborda */}
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200 shadow-lg shadow-slate-200/50">

              {/* Imágenes — crossfade suave */}
              {PROJECTS_DATA.map(
                (project, idx) =>
                  project.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={project.id}
                      src={project.image}
                      alt={`Captura del proyecto ${project.title}`}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
                        activeProject === idx
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    />
                  )
              )}

              {/* Overlay en hover — invita a visitar */}
              {currentProject.image && !currentProject.isComingSoon && (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500"
                  aria-label={`Visitar sitio de ${currentProject.title}`}
                >
                  <span className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Visitar sitio
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              )}

              {/* Modo respaldo: sin imagen → emoji + texto */}
              {!currentProject.image && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 select-none">
                  <div className="text-6xl md:text-7xl mb-4 filter grayscale-[0.2]">
                    {currentProject.emoji}
                  </div>
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-mono"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Vista previa próximamente
                  </p>
                </div>
              )}

              {/* Grid sutil cuando no hay imagen */}
              {!currentProject.image && (
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern
                      id="card-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        width="40"
                        height="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#card-grid)" />
                  </svg>
                </div>
              )}
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-3 py-1.5 border border-slate-200 text-slate-600 bg-slate-50 rounded-full"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Acciones */}
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