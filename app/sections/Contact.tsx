"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";

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
    <section id="contact" className="py-32 md:py-40 bg-black text-white border-t border-zinc-900 scroll-mt-20 relative overflow-hidden">
      
      {/* 🔮 ILUMINACIÓN AMBIENTAL DE ESTUDIO (Ultra sutil) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* REJILLA AXIAL CON DIVISOR CENTRAL (Dividido por 1px de precisión) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-900/60 border border-zinc-900/60">
          
          {/* LADO IZQUIERDO: Textos e Información de Marca */}
          <div className="md:col-span-5 bg-black p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[450px]">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-cyan-500/50" />
                <span className="text-xs tracking-[0.25em] uppercase text-cyan-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Colaboración
                </span>
              </div>
              
              <div className="space-y-6">
                <h2 
                  className="text-4xl md:text-5xl leading-tight text-white tracking-tight"
                  style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
                >
                  Hablemos de
                  <br />
                  tu proyecto.
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  ¿Tienes una idea en mente, necesitas una Landing Page de alto impacto o un sistema web a la medida? Cuéntanos un poco sobre tu negocio para estructurar una solución de rendimiento quirúrgico.
                </p>
              </div>
            </div>

            {/* Bloque de Contacto Directo Firme */}
            <div className="pt-12 mt-12 border-t border-zinc-900 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "'DM Mono', monospace" }}>
                <Mail className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>Contacto Directo</span>
              </div>
              <a 
                href="mailto:info@diamondcode.mx" 
                className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg tracking-wide w-fit font-light"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                info@diamondcode.mx
              </a>
            </div>
          </div>

          {/* LADO DERECHO: Formulario Integrado a la Rejilla */}
          <div className="md:col-span-7 bg-black p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Campo: Nombre */}
              <div className="space-y-2.5">
                <label 
                  htmlFor="name" 
                  className="block text-[10px] text-zinc-500 uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  01 // Nombre completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/40 border border-zinc-900 rounded-none py-4 px-4 text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-zinc-950/80 transition-all text-sm font-light"
                  placeholder="Ej. Alexander Wright"
                />
              </div>

              {/* Campo: Correo */}
              <div className="space-y-2.5">
                <label 
                  htmlFor="email" 
                  className="block text-[10px] text-zinc-500 uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  02 // Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/40 border border-zinc-900 rounded-none py-4 px-4 text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-zinc-950/80 transition-all text-sm font-light"
                  placeholder="nombre@empresa.com"
                />
              </div>

              {/* Campo: Idea */}
              <div className="space-y-2.5">
                <label 
                  htmlFor="message" 
                  className="block text-[10px] text-zinc-500 uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  03 // ¿En qué consiste tu idea?
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-zinc-950/40 border border-zinc-900 rounded-none py-4 px-4 text-white placeholder-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-zinc-950/80 transition-all text-sm font-light resize-none"
                  placeholder="Describe brevemente las funcionalidades que imaginas para tu ecosistema digital..."
                />
              </div>

              {/* Botón de Envío Premium (Líneas finas, sin degradados toscos) */}
              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full inline-flex items-center justify-center gap-3 border border-zinc-800 hover:border-cyan-400 bg-zinc-950 hover:bg-black py-4.5 text-xs tracking-[0.2em] uppercase text-white transition-all duration-300 disabled:opacity-40 cursor-pointer group/btn"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {status === "SUBMITTING" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <>
                    <span>Enviar Requerimiento</span>
                    <Send className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 stroke-[1.5]" />
                  </>
                )}
              </button>

              {/* Estados de UI limpios */}
              {status === "SUCCESS" && (
                <div className="flex items-start gap-3 text-xs text-emerald-400 border border-emerald-900/40 bg-zinc-950 p-4 rounded-none animate-in fade-in duration-300" style={{ fontFamily: "'DM Mono', monospace" }}>
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" />
                  <div>
                    <strong className="font-bold block text-emerald-400 mb-1">// ENVÍO EXITOSO</strong>
                    Nos pondremos en contacto contigo en menos de 24 horas hábiles.
                  </div>
                </div>
              )}

              {status === "ERROR" && (
                <div className="flex items-start gap-3 text-xs text-rose-400 border border-rose-900/40 bg-zinc-950 p-4 rounded-none animate-in fade-in duration-300" style={{ fontFamily: "'DM Mono', monospace" }}>
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-500" />
                  <div>
                    <strong className="font-bold block text-rose-400 mb-1">// ERROR DE SISTEMA</strong>
                    Por favor reintenta o escríbenos directamente a info@diamondcode.mx
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