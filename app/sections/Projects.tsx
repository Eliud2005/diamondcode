"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "01",
    title: "Itacate",
    subtitle: "Web de Servicios & Banquetes",
    description: "Diseño y desarrollo de una plataforma web premium para servicios de banquetería y experiencias gastronómicas privadas. Optimizamos la reserva de menús, la gestión de eventos y la presentación del catálogo de alta cocina del chef.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://www.itacate.it.com/", 
    image: "/assets/images/project1.jpeg", // Muestra SOLO la imagen limpia
    isComingSoon: false,
    year: "2024",
    emoji: "🍲👨‍🍳",
    glowColor: "rgba(245,158,11,0.03)" 
  },
  {
    id: "02",
    title: "Nube Serpiente",
    subtitle: "Plataforma Digital Web",
    description: "Desarrollamos la plataforma web oficial para este innovador centro deportivo y cultural. Diseñamos una experiencia digital fluida que conecta a la comunidad, facilitando la difusión de eventos culturales y la gestión de actividades deportivas en un solo lugar.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#", 
    image: "", // Al estar vacío, mostrará el emoji como respaldo
    isComingSoon: true,
    year: "2024",
    emoji: "☁️🐍",
    glowColor: "rgba(6,182,212,0.03)" 
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = PROJECTS_DATA[activeProject];

  return (
    <section id="projects" className="py-32 md:py-40 border-t border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs tracking-[0.25em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>
                Proyectos
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl leading-tight text-foreground"
              style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
            >
              Trabajo
              <br />
              destacado.
            </h2>
          </div>

          {/* Indicadores de paginación */}
          <div className="flex gap-2">
            {PROJECTS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  width: activeProject === i ? "32px" : "8px",
                  height: "8px",
                  background: activeProject === i ? "var(--primary)" : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Tarjeta Destacada */}
        <div className="grid md:grid-cols-12 gap-px bg-border mb-px border border-border">
          
          {/* Lado Izquierdo: Visualizador Inteligente */}
          <div 
            className="md:col-span-7 relative overflow-hidden bg-black flex items-center justify-center min-h-[320px] md:min-h-[450px] group"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Renderizado de imágenes (Solo si están definidas en el objeto) */}
            {PROJECTS_DATA.map((project, idx) => (
              project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={project.id}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-102
                    ${activeProject === idx ? "opacity-100 visible" : "opacity-0 invisible"}`}
                />
              )
            ))}

            {/* MODO RESPALDO: Si el proyecto activo NO tiene imagen, renderiza el emoji */}
            {!currentProject.image ? (
              <div className="text-center z-20 animate-fade-in px-6 select-none">
                <div className="text-6xl md:text-7xl mb-3 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  {currentProject.emoji}
                </div>
                <p 
                  className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Vista previa no disponible
                </p>
              </div>
            ) : null}

            {/* Malla estructural estética (Solo visible en modo Emoji para dar textura de estudio) */}
            {!currentProject.image && (
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10">
                <svg width="100%" height="100%">
                  <pattern id="card-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#card-grid)" />
                </svg>
              </div>
            )}

            {/* Atmósfera lumínica sutil de fondo */}
            <div 
              className="absolute inset-0 transition-all duration-700 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${currentProject.glowColor} 0%, transparent 70%)`
              }}
            />
          </div>

          {/* Lado Derecho: Textos e Información */}
          <div className="md:col-span-5 bg-black p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {currentProject.id} — {currentProject.year}
              </div>
              
              <h3
                className="text-3xl md:text-4xl text-white mb-2 leading-tight tracking-tight"
                style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
              >
                {currentProject.title}
              </h3>

              <p 
                className="text-[11px] uppercase tracking-[0.15em] text-cyan-400 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {currentProject.subtitle}
              </p>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                {currentProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 border border-zinc-900 text-zinc-400 bg-zinc-950"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Acciones */}
            <div className="mt-8">
              {currentProject.isComingSoon ? (
                <span 
                  className="inline-block text-[10px] tracking-widest uppercase text-zinc-600 px-4 py-2 border border-dashed border-zinc-900"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  ⏳ Próximamente
                </span>
              ) : (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors duration-200 group"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span className="tracking-wider uppercase">
                    Visitar sitio web
                  </span>
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Pestañas Inferiores de Navegación */}
        <div className="grid grid-cols-2 gap-px bg-border border-x border-b border-border">
          {PROJECTS_DATA.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className="bg-black p-6 text-left relative group transition-colors duration-300 hover:bg-zinc-950 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span 
                    className="block text-[10px] tracking-widest uppercase text-zinc-600" 
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {p.id}
                  </span>
                  <p 
                    className={`text-base transition-colors duration-300 ${
                      activeProject === i ? "text-cyan-400" : "text-zinc-400 group-hover:text-white"
                    }`}
                    style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                  >
                    {p.title}
                  </p>
                </div>

                {/* En las pestañas inferiores también respeta la regla: si NO tiene imagen, muestra el emoji pequeño a la derecha */}
                {!p.image && (
                  <span className="text-lg opacity-40 group-hover:opacity-100 transition-opacity select-none">
                    {p.emoji}
                  </span>
                )}
              </div>
              
              {activeProject === i && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}