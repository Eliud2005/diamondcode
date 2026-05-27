"use client"; // 👈 Agregamos esto al inicio para poder usar useState

import { useState } from "react";
import Link from "next/link";

// 1. Definimos la estructura de datos de los proyectos para escalarlo fácilmente
const PROJECTS_DATA = [
  {
    id: "nube-serpiente",
    title: "Nube Serpiente",
    description: "Desarrollamos la plataforma web oficial para este innovador centro deportivo y cultural. Diseñamos una experiencia digital fluida que conecta a la comunidad, facilitando la difusión de eventos culturales y la gestión de actividades deportivas en un solo lugar.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "#", // Cambiar por el link real
    emoji: "☁️🐍",
    subtitle: "Plataforma Digital Web",
    accentColor: "group-hover:text-cyan-400",
    glowColor: "group-hover:bg-cyan-500/20",
    borderColor: "hover:border-cyan-500/50"
  },
  {
    id: "itacate",
    title: "Itacate",
    description: "Diseño y desarrollo de una plataforma web premium para servicios de banquetería y experiencias gastronómicas privadas. Optimizamos la reserva de menús, la gestión de eventos y la presentación del catálogo de alta cocina del chef.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "#", // Cambiar por el link real
    emoji: "🍲👨‍🍳",
    subtitle: "Web de Servicios & Banquetes",
    accentColor: "group-hover:text-amber-400",
    glowColor: "group-hover:bg-amber-500/20",
    borderColor: "hover:border-amber-500/50"
  }
];

export default function Projects() {
  // Estado para controlar qué proyecto se está mostrando
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);

  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900 relative overflow-hidden">
      
      {/* 💡 LUCES VERDES EN EL TRASFONDO OSCURO */}
      <div className="absolute -top-[10%] left-0 w-[500px] h-[500px] bg-emerald-500/[0.22] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] right-0 w-[500px] h-[500px] bg-green-400/[0.18] rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            Nuestros Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl">
            Casos de éxito y plataformas digitales que hemos diseñado y desarrollado con precisión.
          </p>
        </div>

        {/* 2. SELECTOR DE PROYECTOS (Navegación tipo Tabs) */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 border-b border-zinc-800/60 pb-4">
          {PROJECTS_DATA.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeProject.id === project.id
                  ? "bg-zinc-800 text-white shadow-lg border border-zinc-700"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* 3. TARJETA DINÁMICA COMO LINK COMPLETO */}
        <Link 
          href={activeProject.href}
          target="_blank" 
          rel="noopener noreferrer"
          className={`block group relative rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 transition-all duration-300 shadow-2xl backdrop-blur-sm cursor-pointer ${activeProject.borderColor}`}
        >
          {/* Key={activeProject.id} fuerza a React a recrear el nodo para que se note el cambio de contenido instantáneo o con CSS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" key={activeProject.id}>
            
            {/* Lado izquierdo: Textos del proyecto */}
            <div className="flex flex-col justify-center">
              <h3 className={`text-3xl font-bold text-zinc-100 mb-4 transition-colors ${activeProject.accentColor}`}>
                {activeProject.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 minimal-scrollbar">
                {activeProject.description}
              </p>
              
              {/* Etiquetas de tecnologías usadas */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <span className={`inline-flex items-center text-sm font-semibold transition-transform duration-300 group-hover:translate-x-2 ${
                  activeProject.id === "itacate" ? "text-amber-400" : "text-cyan-400"
                }`}>
                  Visitar sitio web →
                </span>
              </div>
            </div>

            {/* Lado derecho: Espacio visual/Mockup */}
            <div className="relative h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-black border border-zinc-800 flex items-center justify-center overflow-hidden shadow-inner">
              <div className="text-center p-6">
                <div className="text-5xl mb-3 opacity-50 group-hover:scale-110 transition-transform duration-300 ease-out">
                  {activeProject.emoji}
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                  {activeProject.subtitle}
                </p>
              </div>
              
              {/* Destello de fondo decorativo dinámico */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-transparent rounded-full blur-3xl transition-all duration-300 ${activeProject.glowColor}`}></div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}