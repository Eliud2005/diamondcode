// app/sections/Hero.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import Chatbot from "../components/Chatbot";

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative w-full bg-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-100/50 via-blue-50/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-slate opacity-[0.3] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_50%,transparent_100%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 md:pt-24 pb-12 md:pb-16">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-slate-900 tracking-tight max-w-3xl mb-6"
          style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
        >
          Código tan valioso
          <br />
          como un <span className="text-blue-700">diamante</span>.
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
          Construimos software a la medida — desde webs de alto rendimiento
          hasta sistemas con automatizaciones de IA — para negocios que
          necesitan escalar sin comprometer calidad.
        </p>

       {/* Prueba social */}
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-700 mb-10">
  <span className="flex items-center gap-2">
    <Check className="w-4 h-4 text-blue-700" strokeWidth={2.5} />
    +12 proyectos entregados
  </span>
  <span className="hidden sm:inline text-slate-300">·</span>
  <span className="flex items-center gap-2">
    <Check className="w-4 h-4 text-blue-700" strokeWidth={2.5} />
    Clientes en 3 países
  </span>
  <span className="hidden sm:inline text-slate-300">·</span>
  <span className="flex items-center gap-2">
    <Check className="w-4 h-4 text-blue-700" strokeWidth={2.5} />
    Respuesta en 24h
  </span>
</div>
        {/* CTA WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full sm:w-auto">
          <a
            href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20de%20software."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase rounded-full font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* 💬 Chatbot flotante — único flotante del sitio */}
      <button
        onClick={() => setIsChatOpen(true)}
        aria-label="Abrir asistente virtual"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-700/30 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-2xl border border-blue-500 animate-ping opacity-20 pointer-events-none" />
        <svg
          className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="8" cy="10" r="0.5" fill="currentColor" />
          <circle cx="12" cy="10" r="0.5" fill="currentColor" />
          <circle cx="16" cy="10" r="0.5" fill="currentColor" />
        </svg>
      </button>
    </section>
  );
}