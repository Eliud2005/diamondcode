// app/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight, ChevronUp } from "lucide-react";
import Contact from "./Contact";

const FAQS = [
  {
    number: "01",
    question: "¿Por qué mi negocio necesita software a la medida?",
    answer: [
      "Porque las plantillas y el software genérico te obligan a adaptar tu operación a la herramienta, no al revés. Un sistema a la medida se construye alrededor de cómo trabajas: tus procesos, tus clientes, tus reglas de negocio.",
      "Eso se traduce en menos pasos manuales, menos errores, menos tiempo perdido en hojas de cálculo y más margen para escalar. Un sistema bien construido puede ahorrarte 20 horas semanales de trabajo repetitivo desde el primer mes.",
      "En DiamondCode no vendemos licencias ni plantillas. Construimos el software que tu negocio necesita — ni más, ni menos — y te entregamos el código para que sea tuyo.",
    ],
  },
  {
    number: "02",
    question: "¿Qué tipo de software desarrollan?",
    answer: [
      "Cuatro categorías principales:",
      "• Webs y landings de alto rendimiento: para presentar tu negocio y captar clientes.",
      "• Sistemas a medida: portales de clientes, dashboards administrativos, CRM, ERP, plataformas SaaS.",
      "• Integraciones con IA: chatbots entrenados con tu información, clasificación de documentos, generación de reportes, agentes con OpenAI o Anthropic.",
      "• E-commerce: tiendas con checkout, pasarelas de pago, gestión de inventario y envíos automatizados.",
      "Lo que no hacemos: apps móviles nativas (Android/iOS). Si tu proyecto las requiere, te derivamos a partners especializados.",
    ],
  },
  {
    number: "03",
    question: "¿Cuánto tiempo y cuánto cuesta un proyecto?",
    answer: [
      "Depende del alcance, pero para que tengas referencias claras:",
      "• Landing page de alto impacto: 2–3 semanas, desde $8,000 MXN.",
      "• Sitio corporativo o tienda: 4–6 semanas, desde $18,000 MXN.",
      "• Sistema a medida o SaaS: 8–12 semanas, desde $45,000 MXN según funcionalidades.",
      "• Integración con IA (chatbot, clasificador, agente): 2–4 semanas, desde $15,000 MXN.",
      "Antes de cotizar hacemos una llamada de 20 minutos para entender tu operación. Sin plantillas, sin humo: cada propuesta se ajusta a lo que realmente necesitas.",
    ],
  },
  {
    number: "04",
    question: "¿Qué tipo de IA implementan?",
    answer: [
      "Automatizaciones concretas, no experimentos. Usamos APIs existentes (OpenAI, Anthropic, Gemini) para resolver problemas reales de negocio:",
      "• Chatbots entrenados con tu catálogo, tus políticas o tu base de conocimiento, que responden por WhatsApp o dentro de tu web.",
      "• Clasificadores que leen facturas, correos o documentos y extraen la información que necesitas sin capturarla a mano.",
      "• Generadores de reportes o propuestas a partir de datos de tu sistema.",
      "• Agentes que ejecutan tareas repetitivas: envían correos, actualizan registros, consultan APIs.",
      "No entrenamos modelos desde cero. Eso significa que puedes tener IA funcionando en tu operación en semanas, no en meses, y a una fracción del costo.",
    ],
  },
  {
    number: "05",
    question: "¿Qué incluye el servicio después de entregar el proyecto?",
    answer: [
      "Entregamos el proyecto con hosting configurado, dominio activo, certificado SSL, repositorio de código transferido a tu nombre y una sesión de 1 hora para que tú o tu equipo puedan operar el sistema sin depender de nosotros.",
      "Además incluimos 30 días de soporte técnico gratuito post-lanzamiento para corregir cualquier detalle. Después de eso, ofrecemos planes de mantenimiento mensual (actualizaciones, backups, monitoreo de rendimiento y mejoras continuas) si quieres delegar todo el aspecto técnico.",
      "No desaparecemos al entregar. El 70% de nuestros clientes nos siguen contratando para nuevos módulos o mejoras.",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showForm, setShowForm] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-white border-t border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

  {/* Cabecera */}
<div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20">
  <div className="md:col-span-6">
    <h2
      className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight"
      style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
    >
      Preguntas
      <span className="text-blue-700"> Frecuentes.</span>
    </h2>
  </div>
  <div className="md:col-span-5 md:col-start-8 flex items-end">
    <p className="text-slate-600 text-base leading-relaxed font-light">
      Las dudas que más nos llegan por WhatsApp, respondidas
      directamente. Si la tuya no está aquí, escríbenos.
    </p>
  </div>
</div>

        {/* Acordeón */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.number}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-700/40 shadow-lg shadow-blue-700/5"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-start justify-between gap-4 p-6 md:p-7 text-left cursor-pointer group"
                >
                  <div className="flex items-start gap-4 md:gap-6 flex-1 min-w-0">
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase mt-1.5 flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-blue-700" : "text-slate-400"
                      }`}
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {faq.number}
                    </span>
                    <h3
                      className={`text-lg md:text-xl leading-snug tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? "text-blue-700"
                          : "text-slate-900 group-hover:text-slate-700"
                      }`}
                      style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-700 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pl-16 md:pl-[4.5rem]">
                      <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-light">
                        {faq.answer.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final con toggle del formulario */}
        <div className="max-w-4xl mx-auto mt-12">
          {!showForm ? (
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-4">
                ¿Tu pregunta no está aquí?
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 text-xs tracking-[0.2em] uppercase rounded-full font-medium shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-300 group cursor-pointer"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Hablemos de tu proyecto
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-400">
              <Contact onClose={() => setShowForm(false)} />
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  Cerrar formulario
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}