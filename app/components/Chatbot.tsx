// app/components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, ChevronRight, MessageCircle, Sparkles } from "lucide-react";

const FAQ_DATA = [
  {
    category: "Webs y Landings",
    emoji: "🚀",
    questions: [
      {
        q: "¿Qué incluye el servicio de Webs y Landings?",
        a: "Incluye un diseño exclusivo UI/UX adaptado a tu marca (sin plantillas repetidas), desarrollo optimizado en Next.js/React, textos persuasivos enfocados en conversión, integración de formularios para capturar leads y conexión directa con tu WhatsApp o sistema CRM.",
      },
      {
        q: "¿Son compatibles con dispositivos móviles?",
        a: "Sí, el 100% de nuestros desarrollos se construyen bajo la metodología Mobile-First. Tu plataforma se adapta de forma impecable, fluida y rápida en cualquier smartphone o tablet, sin necesidad de descargar una app.",
      },
      {
        q: "¿Puedo actualizar el contenido yo mismo?",
        a: "Sí. Entregamos el proyecto con un panel de administración o un CMS (según el alcance) para que tú o tu equipo puedan actualizar textos, imágenes y secciones sin depender de nosotros.",
      },
    ],
  },
  {
    category: "Sistemas a medida",
    emoji: "💻",
    questions: [
      {
        q: "¿Cuál es la diferencia entre un sitio web y un sistema a medida?",
        a: "Un sitio web presenta tu marca, portafolio y servicios, enfocado en posicionar en Google (SEO). Un sistema a medida es software con lógica compleja que procesa datos: incluye perfiles de usuario, pasarelas de pago, paneles de administración, reportes y automatizaciones específicas de tu operación.",
      },
      {
        q: "¿Ustedes se encargan del backend y las bases de datos?",
        a: "Sí, hacemos desarrollo integral Full-Stack. Nos encargamos tanto del diseño visual de la interfaz como de la estructura lógica del servidor, APIs y bases de datos seguras en la nube.",
      },
      {
        q: "¿Qué pasa si mi operación cambia después de la entrega?",
        a: "El sistema se construye con arquitectura escalable: podemos agregar módulos, integraciones o funcionalidades nuevas sin rehacer todo. El 70% de nuestros clientes nos siguen contratando para nuevas fases.",
      },
    ],
  },
  {
    category: "Integraciones con IA",
    emoji: "🤖",
    questions: [
      {
        q: "¿Qué tipo de IA implementan?",
        a: "Automatizaciones concretas con APIs existentes (OpenAI, Anthropic, Gemini): chatbots entrenados con tu información, clasificadores de documentos (facturas, correos, contratos), generadores de reportes o propuestas, y agentes que ejecutan tareas repetitivas.",
      },
      {
        q: "¿Entrenan modelos desde cero?",
        a: "No. Usamos APIs existentes para resolver problemas reales de negocio. Eso significa que puedes tener IA funcionando en tu operación en semanas, no en meses, y a una fracción del costo de entrenar un modelo propio.",
      },
      {
        q: "¿Un chatbot de IA puede reemplazar a mi equipo de atención?",
        a: "No reemplaza, complementa. El chatbot responde el 70-80% de las preguntas frecuentes (horarios, precios, disponibilidad) y escala a un humano cuando la consulta es compleja. Tu equipo se enfoca en lo que sí requiere criterio humano.",
      },
      {
        q: "¿La IA puede leer mis documentos o base de datos?",
        a: "Sí. Podemos construir sistemas que lean facturas, correos o contratos y extraigan la información que necesitas sin capturarla a mano. También podemos conectar la IA a tu base de datos para que consulte información en tiempo real.",
      },
    ],
  },
  {
    category: "E-commerce y Tiendas",
    emoji: "🛒",
    questions: [
      {
        q: "¿Qué incluye una tienda en línea?",
        a: "Catálogo de productos, checkout con pasarelas de pago (Stripe, MercadoPago, PayPal), gestión de inventario, cálculo de envíos, panel de administración para pedidos y integración con tu sistema de facturación si lo necesitas.",
      },
      {
        q: "¿Puedo migrar mi tienda actual (Shopify, WooCommerce)?",
        a: "Sí. Migramos productos, clientes, pedidos e imágenes a la nueva plataforma sin downtime. Si tu tienda actual funciona bien pero es lenta, también podemos optimizarla sin migrar.",
      },
    ],
  },
  {
    category: "Tiempos, Entregas y Propiedad",
    emoji: "⏱️",
    questions: [
      {
        q: "¿Cuánto tardan en desarrollar un proyecto?",
        a: "Depende del alcance: una landing o sitio corporativo toma 2-4 semanas. Una tienda en línea, 4-6 semanas. Un sistema a medida, 8-12 semanas. Una integración de IA, 2-4 semanas. Siempre damos fechas realistas antes de empezar.",
      },
      {
        q: "¿El código y el dominio pasan a ser de mi propiedad?",
        a: "Absolutamente. Al concluir el proyecto, te transferimos el acceso total al repositorio de código (GitHub), licencias de despliegue y cuentas asociadas. DiamondCode no retiene la propiedad ni te ata a contratos forzosos.",
      },
      {
        q: "¿Ofrecen soporte técnico post-entrega?",
        a: "Garantizamos 30 días de soporte técnico gratuito después del lanzamiento. Posteriormente, contamos con planes mensuales opcionales de mantenimiento, actualizaciones, backups y monitoreo de rendimiento.",
      },
      {
        q: "¿Hacen apps móviles nativas (Android / iOS)?",
        a: "No. Nos enfocamos en software web y de escritorio. Lo que construimos son web apps que funcionan perfectamente en el navegador del móvil, pero no se descargan desde Play Store o App Store. Si tu proyecto requiere una app nativa, te derivamos a partners especializados.",
      },
    ],
  },
  {
    category: "Cotizaciones y Formas de Pago",
    emoji: "💳",
    questions: [
      {
        q: "¿Cómo se calculan los costos de los proyectos?",
        a: "Cada propuesta se cotiza con transparencia según el número de secciones, la complejidad de las integraciones (APIs, pasarelas de pago, IA) y las funciones específicas que tu negocio requiera. Damos precio antes de empezar, no después.",
      },
      {
        q: "¿Cuáles son los métodos de pago?",
        a: "Trabajamos con un esquema de 50% de anticipo para iniciar el diseño y la arquitectura del software, y el 50% restante contra entrega y conformidad de tu proyecto listo para producción. Aceptamos transferencia, tarjeta y pagos internacionales.",
      },
      {
        q: "¿Puedo pagar en mensualidades?",
        a: "Sí, para proyectos de más de $30,000 MXN podemos estructurar pagos en 3 o 4 exhibiciones alineadas a los hitos del proyecto (diseño, desarrollo, pruebas, entrega).",
      },
    ],
  },
];

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [selectedCategory, setSelectedCategory] = useState<typeof FAQ_DATA[0] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<{ q: string; a: string } | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedCategory, selectedAnswer]);

  // Reset al cerrar
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSelectedCategory(null);
        setSelectedAnswer(null);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBack = () => {
    if (selectedAnswer) {
      setSelectedAnswer(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 w-full h-full bg-white flex flex-col overflow-hidden text-slate-700 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[440px] sm:h-[640px] sm:border sm:border-slate-200 sm:rounded-2xl sm:shadow-2xl sm:shadow-slate-900/20 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans"
    >
      {/* =============== HEADER =============== */}
      <div className="flex-shrink-0 px-5 py-4 sm:px-6 border-b border-slate-200 bg-slate-50 sm:rounded-t-2xl pt-12 sm:pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" strokeWidth={2} />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <h4
                className="text-sm text-slate-900 font-medium leading-tight"
                style={{ fontFamily: "var(--font-tenor)" }}
              >
                Asistente DiamondCode
              </h4>
              <p
                className="text-[10px] text-slate-500 tracking-wider flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                En línea · responde al instante
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {(selectedCategory || selectedAnswer) && (
              <button
                onClick={handleBack}
                className="text-slate-500 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Volver"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Cerrar asistente"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =============== CUERPO =============== */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5 bg-white scrollbar-none">

        {/* Mensaje de bienvenida */}
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
            <p
              className="text-sm text-slate-700 leading-relaxed"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Hola 👋 Soy el asistente de <span className="text-slate-900 font-medium">DiamondCode</span>.
              Puedo responder dudas sobre software a la medida, IA, tiempos y precios.
            </p>
          </div>
        </div>

        {/* Categorías (si no hay una seleccionada) */}
        {!selectedCategory && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <p
              className="text-[10px] uppercase tracking-[0.2em] text-slate-400 px-1"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Elige un tema
            </p>
            <div className="space-y-2">
              {FAQ_DATA.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className="w-full text-left group bg-white border border-slate-200 hover:border-blue-700/40 hover:bg-blue-50/40 rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg flex-shrink-0">{cat.emoji}</span>
                    <span
                      className="text-sm text-slate-700 group-hover:text-blue-700 transition-colors truncate"
                      style={{ fontFamily: "var(--font-tenor)" }}
                    >
                      {cat.category}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Preguntas de la categoría seleccionada */}
        {selectedCategory && !selectedAnswer && (
          <div className="space-y-3 animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p
                  className="text-sm text-slate-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  Perfecto, sobre <span className="font-medium text-slate-900">{selectedCategory.category}</span>.
                  ¿Qué te gustaría saber?
                </p>
              </div>
            </div>

            <div className="space-y-2 pl-10">
              {selectedCategory.questions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedAnswer(item)}
                  className="w-full text-left group bg-white border border-slate-200 hover:border-blue-700/40 hover:bg-blue-50/40 rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer flex items-start gap-3"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                  <span
                    className="text-sm text-slate-700 group-hover:text-blue-700 transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-tenor)" }}
                  >
                    {item.q}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Respuesta */}
        {selectedAnswer && (
          <div className="space-y-3 animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p
                  className="text-sm text-slate-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  {selectedAnswer.a}
                </p>
              </div>
            </div>

            <div className="pl-10">
              <button
                onClick={() => setSelectedAnswer(null)}
                className="text-xs text-blue-700 hover:text-blue-800 font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <ArrowLeft className="w-3 h-3" />
                Hacer otra pregunta
              </button>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* =============== FOOTER =============== */}
      <div className="flex-shrink-0 px-5 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 sm:rounded-b-2xl space-y-2">
        <a
          href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20de%20software."
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs tracking-[0.15em] uppercase font-medium py-3 px-5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          Hablar con un humano
        </a>
        <p
          className="text-center text-[10px] text-slate-400"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          Respuesta en menos de 2 horas hábiles
        </p>
      </div>
    </div>
  );
}