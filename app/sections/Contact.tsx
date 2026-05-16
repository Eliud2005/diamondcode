"use client";

import { useState } from "react";

export default function Contact() {
  // Estados para controlar el flujo del formulario
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Petición asíncrona usando tu endpoint personalizado de Formspree
      const response = await fetch("https://formspree.io/f/xgoqwvon", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Limpia los inputs al enviarse con éxito
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#030303] text-white border-t border-zinc-900 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* DISEÑO EN GRID: 2 Columnas en PC, 1 Columna en Celular */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Lado izquierdo: Textos de llamada a la acción */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">
              Let's build together
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              ¿Tienes una idea en mente, necesitas una Landing Page de alto impacto o un sistema web a la medida? 
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Cuéntanos un poco sobre tu negocio. En DiamondCode analizamos tus necesidades para entregarte un software pulido, rápido y eficiente.
            </p>
            <div className="text-sm text-zinc-400">
              <p className="font-semibold text-zinc-300">O escríbenos directamente a:</p>
              <a href="mailto:contacto@diamondcode.com" className="text-cyan-400 hover:underline text-lg font-medium mt-1 inline-block">
                diamondcode000@gmail.com
              </a>
            </div>
          </div>

          {/* Lado derecho: El Formulario Premium */}
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 shadow-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo: Nombre */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Campo: Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              {/* Campo: Mensaje */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl py-3 px-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm resize-none"
                  placeholder="Cuéntanos un poco sobre lo que DiamondCode puede desarrollar para ti..."
                ></textarea>
              </div>

              {/* Botón de envío inteligente */}
              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full justify-center rounded-xl bg-cyan-500 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/10 hover:bg-cyan-400 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
              >
                {status === "SUBMITTING" ? "Sending..." : "Send Message"}
              </button>

              {/* Alertas de estado Premium */}
              {status === "SUCCESS" && (
                <p className="text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 py-2.5 px-3 rounded-lg transition-all">
                  ✓ ¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.
                </p>
              )}

              {status === "ERROR" && (
                <p className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/20 py-2.5 px-3 rounded-lg transition-all">
                  ✕ Hubo un error al procesar el envío. Inténtalo de nuevo o contáctanos por correo directo.
                </p>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}