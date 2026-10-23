// app/sections/Services.tsx
"use client";

import { ArrowUpRight, Layout, Boxes, Sparkles, ShoppingCart, Gauge, Compass } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    category: "Interfaces",
    title: "Webs y Landings",
    bullets: [
      "Diseño enfocado a conversión",
      "Copy persuasivo incluido",
      "Formulario o WhatsApp conectado",
      "Analítica configurada",
    ],
    icon: Layout,
    featured: false,
  },
  {
    number: "02",
    category: "Plataformas",
    title: "Sistemas a medida",
    bullets: [
      "Portales de clientes",
      "Dashboards administrativos",
      "APIs y base de datos",
      "Autenticación y roles",
    ],
    icon: Boxes,
    featured: true,
  },
  {
    number: "03",
    category: "Automatización",
    title: "Integraciones con IA",
    bullets: [
      "Chatbots entrenados con tu data",
      "Clasificación de documentos",
      "Generación de reportes",
      "Agentes de IA",
    ],
    icon: Sparkles,
    featured: false,
  },
  {
    number: "04",
    category: "E-commerce",
    title: "Tiendas y catálogos",
    bullets: [
      "Checkout integrado",
      "Pasarelas de pago",
      "Gestión de inventario",
      "Envíos automatizados",
    ],
    icon: ShoppingCart,
    featured: false,
  },
  {
    number: "05",
    category: "Optimización",
    title: "Rediseño & Rendimiento",
    bullets: [
      "Auditoría técnica completa",
      "Mejora de Core Web Vitals",
      "Migración sin downtime",
      "Reporte antes/después",
    ],
    icon: Gauge,
    featured: false,
  },
  {
    number: "06",
    category: "Consultoría",
    title: "Arquitectura de software",
    bullets: [
      "Selección de stack",
      "Roadmap técnico por fases",
      "Revisión de sistemas existentes",
      "Acompañamiento de equipo",
    ],
    icon: Compass,
    featured: false,
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
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-6">
            
            <h2
              className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              Nuestros
              <span className="text-blue-700"> servicios.</span>
            </h2>
          </div>
       
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isFeatured = service.featured;

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
                    className="absolute top-5 right-5 text-[9px] tracking-[0.2em] uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full font-medium"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Popular
                  </span>
                )}

                {/* Icono */}
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${
                    isFeatured
                      ? "bg-blue-700 text-white"
                      : "bg-slate-100 text-slate-700 group-hover:bg-blue-700 group-hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Número y categoría */}
                <div
                  className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <span>{service.number}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{service.category}</span>
                </div>

                {/* Título */}
                <h3
                  className={`text-xl md:text-2xl mb-5 leading-tight tracking-tight transition-colors duration-300 ${
                    isFeatured
                      ? "text-blue-700"
                      : "text-slate-900 group-hover:text-blue-700"
                  }`}
                  style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-slate-600 font-light leading-relaxed"
                    >
                      <span className="text-blue-700 mt-1.5 flex-shrink-0 text-[8px]">
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