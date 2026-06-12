"use client";

import { useState } from "react";
import { Send, Sparkles, Mail, CheckCircle2, AlertCircle } from "lucide-react";

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
    <section id="contact" className="py-28 bg-[#060608] text-zinc-100 border-t border-zinc-900 scroll-mt-20 relative overflow-hidden">
      
      {/* Textura de Ruido Premium */}
      <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] bg-repeat pointer-events-none z-0" />

      {/* Iluminación Ambiental de Estudio Avanzada */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado izquierdo: Textos y Copys de Marca */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-3 py-1 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                Colaboración Exclusiva
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent sm:text-5xl leading-[1.1]">
                Hablemos de tu proyecto
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                ¿Tienes una idea en mente, necesitas una Landing Page de alto impacto o un sistema web a la medida? 
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Cuéntanos un poco sobre tu negocio. En DiamondCode analizamos tus necesidades para entregarte un software pulido, ultra veloz y optimizado para conversiones reales.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-900 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase font-bold tracking-wider">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>Contacto Directo</span>
              </div>
              <a 
                href="mailto:eliud@diamondcode.mx" 
                className="text-white hover:text-cyan-400 transition-all duration-300 text-xl font-semibold tracking-wide w-fit relative group"
              >
                eliud@diamondcode.mx
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Lado derecho: Tarjeta de Formulario de Cristal Oscuro */}
          <div className="md:col-span-7 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 border border-zinc-800/80 rounded-3xl p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md relative group hover:border-zinc-700/60 transition-all duration-500">
            
            {/* Efecto Glow de Enfoque superior sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-zinc-950/80 transition-all text-sm font-medium"
                  placeholder="Ej. Alexander Wright"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-zinc-950/80 transition-all text-sm font-medium"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  ¿En qué consiste tu idea?
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-zinc-950/80 transition-all text-sm font-medium resize-none"
                  placeholder="Describe brevemente las funcionalidades que imaginas para tu sitio web o plataforma..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:opacity-95 active:scale-[0.99] transition-all duration-300 disabled:opacity-50 cursor-pointer group/btn"
              >
                {status === "SUBMITTING" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <>
                    <span>Iniciar Proyecto</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 stroke-[2.5]" />
                  </>
                )}
              </button>

              {/* Alertas de Estado UI Avanzadas */}
              {status === "SUCCESS" && (
                <div className="flex items-start gap-3 text-sm text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <div>
                    <strong className="font-bold block text-emerald-300 mb-0.5">¡Mensaje enviado con éxito!</strong>
                    Nos pondremos en contacto contigo en menos de 24 horas hábiles.
                  </div>
                </div>
              )}

              {status === "ERROR" && (
                <div className="flex items-start gap-3 text-sm text-rose-400 bg-rose-950/20 border border-rose-500/20 p-4 rounded-xl animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-400" />
                  <div>
                    <strong className="font-bold block text-rose-300 mb-0.5">Ocurrió un error inesperado</strong>
                    Por favor reintenta o escríbenos directamente a nuestro correo de soporte.
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}