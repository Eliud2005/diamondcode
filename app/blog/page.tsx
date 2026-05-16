"use client";

import { useState } from "react";
import Link from "next/link";

// Datos de ejemplo de los artículos del blog
const POSTS = [
  {
    id: "wordpress-vs-nextjs",
    title: "Webs con WordPress vs. Código a la medida (Next.js): ¿Cuál le conviene a tu empresa?",
    description: "Analizamos rendimiento, costos y escalabilidad para que elijas la mejor opción tecnológica para tu negocio.",
    category: "Negocios",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    id: "landing-page-lenta",
    title: "¿Por qué una Landing Page lenta te está haciendo perder clientes? (Y cómo solucionarlo)",
    description: "Cada segundo de carga cuenta. Descubre el impacto real de la velocidad de tu web en tus tasas de conversión.",
    category: "Marketing",
    date: "May 10, 2026",
    readTime: "4 min read",
  },
  {
    id: "optimizacion-nextjs-tailwind",
    title: "Cómo logramos optimizar la velocidad de carga utilizando Next.js y Tailwind CSS",
    description: "Detrás de cámaras de nuestra arquitectura técnica. Métricas reales y buenas prácticas de optimización.",
    category: "Tecnología",
    date: "May 02, 2026",
    readTime: "7 min read",
  },
  {
    id: "inteligencia-artificial-software",
    title: "Cómo la Inteligencia Artificial está cambiando el desarrollo de software a medida",
    description: "Exploramos cómo integramos herramientas de IA para acelerar procesos de desarrollo sin perder calidad.",
    category: "Tendencias",
    date: "Apr 28, 2026",
    readTime: "6 min read",
  },
];

const CATEGORIES = ["Todos", "Negocios", "Tecnología", "Marketing", "Tendencias"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtrar posts por categoría
  const filteredPosts = activeCategory === "Todos"
    ? POSTS
    : POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Luces de fondo (Efecto Blur de DiamondCode) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Botón de regreso al Home */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-cyan-400 transition-colors mb-12 uppercase tracking-widest"
        >
          ← Volver al inicio
        </Link>

        {/* Encabezado del Blog */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
            DiamondCode Insight
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl mb-4">
            Artículos y Tendencias
          </h1>
          <p className="text-zinc-400 text-lg">
            Ideas, guías y tecnología para entender el desarrollo de software moderno y potenciar tu presencia digital.
          </p>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-zinc-900 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeCategory === category
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/10"
                  : "bg-zinc-900/50 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="group rounded-3xl bg-zinc-900/20 border border-zinc-800/60 p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-0.5 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Título */}
                <h2 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h2>

                {/* Descripción */}
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.description}
                </p>
              </div>

              {/* Enlace de lectura (Simulado de momento) */}
              <div className="border-t border-zinc-900/80 pt-4 mt-auto">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 group-hover:text-cyan-400 transition-colors">
                  Leer artículo completo <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mensaje por si no hay posts en una categoría */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-sm">
            Próximamente habrá artículos en esta categoría.
          </div>
        )}

      </div>
    </div>
  );
}