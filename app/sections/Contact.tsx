// app/sections/Contact.tsx
"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  X,
  Phone,
  User,
  Mail,
  MessageSquare,
  Briefcase,
  DollarSign,
  ChevronDown,
} from "lucide-react";

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
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Lado izquierdo — contexto */}
        <div className="lg:col-span-5 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-8">
          <h3
            className="text-2xl md:text-3xl text-slate-900 tracking-tight mb-3"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            Cuéntanos tu proyecto.
          </h3>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Te respondemos en menos de 24 horas hábiles con una propuesta
            inicial, sin compromiso.
          </p>

          {/* Lista de garantías */}
          <ul className="space-y-3 mb-6">
            {[
              "Respuesta en menos de 24h",
              "Sin compromiso ni pagos adelantados",
              "Cotización clara antes de empezar",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
              >
                <CheckCircle2
                  className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-slate-200">
            <p
              className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3 font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              ¿Prefieres algo más rápido?
            </p>
            <a
              href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white px-5 py-3.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {/* Icono oficial WhatsApp */}
              <svg
                className="w-5 h-5 fill-current flex-shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Lado derecho — formulario */}
        <div className="lg:col-span-7 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <User className="w-4 h-4 text-slate-400" strokeWidth={2} />
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full bg-white border border-slate-300 rounded-lg py-3.5 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email + Teléfono en fila */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Mail className="w-4 h-4 text-slate-400" strokeWidth={2} />
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full bg-white border border-slate-300 rounded-lg py-3.5 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base"
                  placeholder="tu@correo.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Phone className="w-4 h-4 text-slate-400" strokeWidth={2} />
                  Teléfono
                  <span className="text-xs font-normal text-slate-400">
                    (opcional)
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className="w-full bg-white border border-slate-300 rounded-lg py-3.5 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base"
                  placeholder="+52 222 123 4567"
                />
              </div>
            </div>

            {/* Servicio de interés */}
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Briefcase className="w-4 h-4 text-slate-400" strokeWidth={2} />
                ¿Qué servicio te interesa?
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-3.5 px-4 pr-10 text-slate-900 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base cursor-pointer"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="web">Webs y Landings</option>
                  <option value="sistemas">Sistemas a medida</option>
                  <option value="ia">Integraciones con IA</option>
                  <option value="invitaciones">Invitaciones digitales</option>
                  <option value="otro">Otro / No estoy seguro</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Presupuesto aproximado */}
            <div className="space-y-2">
              <label
                htmlFor="budget"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <DollarSign className="w-4 h-4 text-slate-400" strokeWidth={2} />
                Presupuesto aproximado
                <span className="text-xs font-normal text-slate-400">
                  (opcional)
                </span>
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg py-3.5 px-4 pr-10 text-slate-900 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base cursor-pointer"
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  <option value="menos-10k">Menos de $10,000 MXN</option>
                  <option value="10k-30k">$10,000 — $30,000 MXN</option>
                  <option value="30k-60k">$30,000 — $60,000 MXN</option>
                  <option value="mas-60k">Más de $60,000 MXN</option>
                  <option value="no-se">No estoy seguro</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <MessageSquare className="w-4 h-4 text-slate-400" strokeWidth={2} />
                Cuéntanos más
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-white border border-slate-300 rounded-lg py-3.5 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 transition-all text-base resize-none"
                placeholder="¿Qué tienes en mente? ¿Para cuándo lo necesitas?"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "SUBMITTING"}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase rounded-full shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {status === "SUBMITTING" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Estados */}
            <div aria-live="polite" aria-atomic="true">
              {status === "SUCCESS" && (
                <div
                  role="status"
                  className="flex items-start gap-3 text-sm bg-emerald-50 border border-emerald-200 p-4 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-600" />
                  <div>
                    <strong className="font-semibold block text-emerald-900 mb-1 text-sm">
                      ¡Mensaje enviado!
                    </strong>
                    <span className="text-emerald-700 text-sm leading-relaxed">
                      Te contactamos en menos de 24 horas hábiles.
                    </span>
                  </div>
                </div>
              )}

              {status === "ERROR" && (
                <div
                  role="alert"
                  className="flex items-start gap-3 text-sm bg-rose-50 border border-rose-200 p-4 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-600" />
                  <div>
                    <strong className="font-semibold block text-rose-900 mb-1 text-sm">
                      No pudimos enviar tu mensaje
                    </strong>
                    <span className="text-rose-700 text-sm leading-relaxed">
                      Intenta de nuevo o{" "}
                      <a
                        href="https://wa.me/522224264941"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium hover:text-rose-900"
                      >
                        escríbenos por WhatsApp
                      </a>
                      .
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Nota de privacidad */}
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              Tus datos solo se usan para contactarte. No compartimos tu
              información con terceros.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}