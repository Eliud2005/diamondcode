// app/sections/Contact.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, X, MessageCircle } from "lucide-react";

interface ContactProps {
  onClose?: () => void;
}

export default function Contact({ onClose }: ContactProps) {
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
        headers: { Accept: "application/json" },
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
    <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden">

      {/* Botón cerrar */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar formulario"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Lado izquierdo — contexto corto */}
        <div className="lg:col-span-5 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-8">
          <h3
            className="text-xl md:text-2xl text-slate-900 tracking-tight mb-3"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            Cuéntanos tu proyecto.
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
            Te contactamos en menos de 24 horas hábiles con una propuesta inicial.
          </p>

          <div className="pt-5 border-t border-slate-200">
            <p
              className="text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              ¿Prefieres algo más rápido?
            </p>
            <a
              href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-xs font-medium transition-colors"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Lado derecho — formulario */}
        <div className="lg:col-span-7 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Nombre */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-[10px] text-slate-500 uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full bg-white border border-slate-300 rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-sm"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-[10px] text-slate-500 uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full bg-white border border-slate-300 rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-sm"
                placeholder="nombre@empresa.com"
              />
            </div>

            {/* Mensaje */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-[10px] text-slate-500 uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-white border border-slate-300 rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-sm resize-none"
                placeholder="Cuéntanos qué tienes en mente..."
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "SUBMITTING"}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-3.5 text-xs tracking-[0.2em] uppercase rounded-full shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {status === "SUBMITTING" ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Estados */}
            <div aria-live="polite" aria-atomic="true">
              {status === "SUCCESS" && (
                <div
                  className="flex items-start gap-3 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 p-4 rounded-lg"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-600" />
                  <div>
                    <strong className="font-semibold block text-emerald-900 mb-1 text-xs uppercase tracking-wider">
                      Mensaje enviado
                    </strong>
                    <span className="text-emerald-700 text-xs">
                      Te contactamos en menos de 24 horas hábiles.
                    </span>
                  </div>
                </div>
              )}

              {status === "ERROR" && (
                <div
                  className="flex items-start gap-3 text-sm text-rose-800 bg-rose-50 border border-rose-200 p-4 rounded-lg"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-600" />
                  <div>
                    <strong className="font-semibold block text-rose-900 mb-1 text-xs uppercase tracking-wider">
                      Error al enviar
                    </strong>
                    <span className="text-rose-700 text-xs">
                      Reintenta o escríbenos por WhatsApp.
                    </span>
                  </div>
                </div>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}