"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgoqwvon", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#030303] text-white border-t border-zinc-900/60 scroll-mt-20 relative overflow-hidden">
      
      {/* 1. TEXTURA DE RUIDO/GRANO PREMIUM (Sutil y elegante, rompe el plano negro) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] bg-repeat pointer-events-none z-0" />

      {/* 2. FOCOS DE LUZ ELÍPTICOS (Simulan iluminación de estudio de fotografía) */}
      <div className="absolute -top-[10%] left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Lado izquierdo: Textos */}
          <div className="flex flex-col justify-center md:pt-6">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
              Construyamos algo increíble juntos
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent sm:text-5xl mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed mb-6">
              ¿Tienes una idea en mente, necesitas una Landing Page de alto impacto o un sistema web a la medida? 
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Cuéntanos un poco sobre tu negocio. En DiamondCode analizamos tus necesidades para entregarte un software pulido, rápido y eficiente.
            </p>
            <div className="text-sm text-zinc-400 border-t border-zinc-900 pt-6">
              <p className="text-zinc-500 text-xs uppercase font-semibold tracking-wider mb-1">Contacto directo:</p>
              <a href="mailto:diamondcode000@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium">
                eliud@diamondcode.mx
              </a>
            </div>
          </div>

          {/* Lado derecho: Formulario minimalista con Borde de Precisión */}
          <div className="rounded-3xl bg-zinc-950/60 border border-zinc-800/60 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-900/30 border border-zinc-800/80 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-900/30 border border-zinc-800/80 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  ¿En qué consiste tu idea?
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-zinc-900/30 border border-zinc-800/80 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm resize-none"
                  placeholder="Breve descripción del software o web que necesitas..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3.5 text-sm font-bold text-black shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-50"
              >
                {status === "SUBMITTING" ? "Procesando..." : "Iniciar Proyecto"}
              </button>

              {status === "SUCCESS" && (
                <p className="text-xs text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 py-3 px-4 rounded-xl">
                  ✓ ¡Mensaje recibido! Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              )}

              {status === "ERROR" && (
                <p className="text-xs text-rose-400 bg-rose-950/20 border border-rose-500/20 py-3 px-4 rounded-xl">
                  ✕ No se pudo enviar. Por favor reintenta o escríbenos directamente por email.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}