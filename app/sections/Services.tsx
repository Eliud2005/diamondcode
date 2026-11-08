// app/sections/Services.tsx
"use client";

import Link from "next/link";
import {
  Layout,
  Boxes,
  Sparkles,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    number: "01",
    category: "Webs",
    title: "Webs y Landings",
    bullets: [
      "Tu web carga rápido en cualquier dispositivo",
      "Diseño pensado para que te contacten",
      "Apareces en Google cuando te buscan",
      "Lista para vender desde el día uno",
    ],
    icon: Layout,
    featured: false,
    accent: "blue" as const,
  },
  {
    number: "02",
    category: "Sistemas",
    title: "Sistemas a medida",
    bullets: [
      "Sistema seguro y estable, sin caídas",
      "Tus clientes entran y ven su información",
      "Panel para ver todo tu negocio de un vistazo",
      "Se conecta con las herramientas que ya usas",
    ],
    icon: Boxes,
    featured: true,
    accent: "blue" as const,
  },
  {
    number: "03",
    category: "Automatización",
    title: "Integraciones con IA",
    bullets: [
      "Automatizamos tareas que hoy haces a mano",
      "La IA lee tus facturas y las ordena sola",
      "Responde clientes 24/7 sin que estés",
      "Consulta tu información al instante",
    ],
    icon: Sparkles,
    featured: false,
    accent: "blue" as const,
  },
  {
    number: "04",
    category: "Eventos",
    title: "Invitaciones digitales",
    bullets: [
      "XV años, bodas y bautizos",
      "Música, galería y cuenta regresiva",
      "Confirmación de asistencia (RSVP)",
      "Enlace único + código QR",
    ],
    icon: PartyPopper,
    featured: false,
    accent: "rose" as const,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 md:py-28 bg-slate-50 border-t border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2
              className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              Nuestros
              <span className="text-blue-700"> servicios.</span>
            </h2>
          </div>
          <p
            className="text-base text-slate-500 max-w-sm md:text-right leading-relaxed"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            De una landing a un sistema completo — elige el que se ajuste a tu
            etapa.
          </p>
        </div>

        {/* Grid — 4 servicios, letra grande */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            const isRose = service.accent === "rose";

            return (
              <div
                key={service.number}
                className={`group relative flex flex-col p-7 rounded-xl border transition-all duration-300 ${
                  isFeatured
                    ? "bg-white border-blue-700/30 shadow-lg shadow-blue-700/5 hover:shadow-xl hover:shadow-blue-700/10"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Badge featured */}
                {isFeatured && (
                  <span
                    className="absolute top-5 right-5 text-[11px] tracking-[0.15em] uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full font-medium"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Popular
                  </span>
                )}

                {/* Icono */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${
                    isFeatured
                      ? "bg-blue-700 text-white"
                      : isRose
                      ? "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white"
                      : "bg-slate-100 text-slate-700 group-hover:bg-blue-700 group-hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Número y categoría */}
                <div
                  className={`text-xs tracking-[0.15em] uppercase mb-2 flex items-center gap-2 ${
                    isRose ? "text-rose-500" : "text-slate-400"
                  }`}
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <span>{service.number}</span>
                  <span
                    className={`w-1 h-1 rounded-full ${
                      isRose ? "bg-rose-300" : "bg-slate-300"
                    }`}
                  />
                  <span>{service.category}</span>
                </div>

                {/* Título */}
                <h3
                  className={`text-xl md:text-2xl mb-5 leading-tight tracking-tight transition-colors duration-300 ${
                    isFeatured
                      ? "text-blue-700"
                      : isRose
                      ? "text-slate-900 group-hover:text-rose-600"
                      : "text-slate-900 group-hover:text-blue-700"
                  }`}
                  style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>

                {/* Bullets — letra grande y legible */}
                <ul className="space-y-3 flex-1">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-base text-slate-600 leading-relaxed"
                    >
                      <span
                        className={`mt-2 flex-shrink-0 text-[10px] ${
                          isRose ? "text-rose-500" : "text-blue-700"
                        }`}
                      >
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

   

    
      </div>
    </section>
  );
}