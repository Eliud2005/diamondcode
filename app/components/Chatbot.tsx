// app/components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";

// ─────────────────────────────────────────────────────────
// FAQ plana con keywords para búsqueda inteligente
// ─────────────────────────────────────────────────────────
const FAQ = [
  // Webs
  {
    id: "web-1",
    category: "Webs y Landings",
    q: "¿Qué incluye el servicio de Webs y Landings?",
    a: "Incluye diseño exclusivo UI/UX adaptado a tu marca (sin plantillas repetidas), desarrollo optimizado en Next.js/React, textos persuasivos enfocados a conversión, formularios para capturar leads y conexión directa con tu WhatsApp o CRM.",
    keywords: ["web", "landing", "página", "sitio", "incluye", "contiene", "página web", "website"],
  },
  {
    id: "web-2",
    category: "Webs y Landings",
    q: "¿Son compatibles con dispositivos móviles?",
    a: "Sí, el 100% de nuestros desarrollos son Mobile-First. Tu plataforma se adapta de forma impecable, fluida y rápida en cualquier smartphone o tablet, sin necesidad de descargar una app.",
    keywords: ["móvil", "celular", "teléfono", "responsive", "tablet", "mobile"],
  },
  {
    id: "web-3",
    category: "Webs y Landings",
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Sí. Entregamos el proyecto con un panel de administración o un CMS (según el alcance) para que tú o tu equipo puedan actualizar textos, imágenes y secciones sin depender de nosotros.",
    keywords: ["actualizar", "editar", "contenido", "cms", "panel", "administrar", "cambiar"],
  },

  // Sistemas
  {
    id: "sis-1",
    category: "Sistemas a medida",
    q: "¿Cuál es la diferencia entre un sitio web y un sistema a medida?",
    a: "Un sitio web presenta tu marca y servicios, enfocado en posicionar en Google (SEO). Un sistema a medida es software con lógica compleja que procesa datos: incluye perfiles de usuario, pasarelas de pago, paneles de administración, reportes y automatizaciones específicas de tu operación.",
    keywords: ["diferencia", "sistema", "web", "software", "app", "aplicación", "sitio"],
  },
  {
    id: "sis-2",
    category: "Sistemas a medida",
    q: "¿Ustedes se encargan del backend y las bases de datos?",
    a: "Sí, hacemos desarrollo integral Full-Stack. Nos encargamos tanto del diseño visual de la interfaz como de la estructura lógica del servidor, APIs y bases de datos seguras en la nube.",
    keywords: ["backend", "base de datos", "servidor", "api", "fullstack", "full-stack", "sql"],
  },
  {
    id: "sis-3",
    category: "Sistemas a medida",
    q: "¿Qué pasa si mi operación cambia después de la entrega?",
    a: "El sistema se construye con arquitectura escalable: podemos agregar módulos, integraciones o funcionalidades nuevas sin rehacer todo. El 70% de nuestros clientes nos siguen contratando para nuevas fases.",
    keywords: ["cambia", "escalable", "crecer", "módulos", "después", "entrega", "futuro"],
  },

  // IA
  {
    id: "ia-1",
    category: "Integraciones con IA",
    q: "¿Qué tipo de IA implementan?",
    a: "Automatizaciones concretas con APIs existentes (OpenAI, Anthropic, Gemini): chatbots entrenados con tu información, clasificadores de documentos (facturas, correos, contratos), generadores de reportes y agentes que ejecutan tareas repetitivas.",
    keywords: ["ia", "inteligencia artificial", "chatbot", "gpt", "openai", "automatizar", "automática"],
  },
  {
    id: "ia-2",
    category: "Integraciones con IA",
    q: "¿Entrenan modelos desde cero?",
    a: "No. Usamos APIs existentes para resolver problemas reales de negocio. Eso significa que puedes tener IA funcionando en tu operación en semanas, no en meses, y a una fracción del costo de entrenar un modelo propio.",
    keywords: ["entrenar", "modelo", "propio", "personalizado", "desde cero"],
  },
  {
    id: "ia-3",
    category: "Integraciones con IA",
    q: "¿Un chatbot de IA puede reemplazar a mi equipo de atención?",
    a: "No reemplaza, complementa. El chatbot responde el 70-80% de las preguntas frecuentes (horarios, precios, disponibilidad) y escala a un humano cuando la consulta es compleja. Tu equipo se enfoca en lo que sí requiere criterio humano.",
    keywords: ["reemplazar", "equipo", "atención", "soporte", "humano", "chatbot"],
  },
  {
    id: "ia-4",
    category: "Integraciones con IA",
    q: "¿La IA puede leer mis documentos o base de datos?",
    a: "Sí. Podemos construir sistemas que lean facturas, correos o contratos y extraigan la información sin capturarla a mano. También conectamos la IA a tu base de datos para consultar información en tiempo real.",
    keywords: ["leer", "documentos", "facturas", "pdf", "correos", "base de datos", "extraer"],
  },

  // Invitaciones
  {
    id: "inv-1",
    category: "Invitaciones Digitales",
    q: "¿Qué incluye una invitación digital?",
    a: "Diseño personalizado con temática del evento (XV años, boda, bautizo, cumpleaños), animaciones, música de fondo, cuenta regresiva, galería de fotos, mapa de ubicación, RSVP y enlace único para compartir por WhatsApp.",
    keywords: ["invitación", "invitacion", "xv", "boda", "bautizo", "cumpleaños", "evento", "incluye"],
  },
  {
    id: "inv-2",
    category: "Invitaciones Digitales",
    q: "¿Cuánto tarda una invitación digital?",
    a: "Entre 5 y 10 días hábiles una vez que tenemos el diseño aprobado y los datos del evento (fecha, lugar, nombres, fotos y paleta de colores). Si es urgente, manejamos entregas express en 3 días con costo adicional.",
    keywords: ["tarda", "tiempo", "días", "rápido", "express", "urge", "invitación"],
  },
  {
    id: "inv-3",
    category: "Invitaciones Digitales",
    q: "¿Puedo agregar música y galería de fotos?",
    a: "Sí. Incluimos una galería de hasta 20 fotos, música de fondo seleccionable y cuenta regresiva animada. También podemos agregar video de presentación si lo necesitas.",
    keywords: ["música", "musica", "fotos", "galería", "galeria", "video", "invitación"],
  },
  {
    id: "inv-4",
    category: "Invitaciones Digitales",
    q: "¿El enlace se puede personalizar con mi nombre?",
    a: "Sí. Podemos entregar tu invitación en un dominio personalizado (ej: xv-jade.com) o en un subdominio de regalo con el nombre del festejado. También generamos un código QR para imprimir en tarjetas físicas.",
    keywords: ["enlace", "link", "dominio", "url", "personalizar", "qr", "nombre"],
  },

  // Tiempos
  {
    id: "time-1",
    category: "Tiempos, Entregas y Propiedad",
    q: "¿Cuánto tardan en desarrollar un proyecto?",
    a: "Depende del alcance: una landing o sitio corporativo toma 2-4 semanas. Un sistema a medida, 8-12 semanas. Una integración de IA, 2-4 semanas. Una invitación digital, 5-10 días. Siempre damos fechas realistas antes de empezar.",
    keywords: ["tarda", "tiempo", "cuánto", "semanas", "días", "demora", "plazo", "entrega"],
  },
  {
    id: "time-2",
    category: "Tiempos, Entregas y Propiedad",
    q: "¿El código y el dominio pasan a ser de mi propiedad?",
    a: "Absolutamente. Al concluir el proyecto, te transferimos el acceso total al repositorio de código (GitHub), licencias de despliegue y cuentas asociadas. DiamondCode no retiene la propiedad ni te ata a contratos forzosos.",
    keywords: ["propiedad", "código", "codigo", "dominio", "dueño", "mío", "github", "repositorio"],
  },
  {
    id: "time-3",
    category: "Tiempos, Entregas y Propiedad",
    q: "¿Ofrecen soporte técnico post-entrega?",
    a: "Garantizamos 30 días de soporte técnico gratuito después del lanzamiento. Posteriormente, contamos con planes mensuales opcionales de mantenimiento, actualizaciones, backups y monitoreo de rendimiento.",
    keywords: ["soporte", "post", "después", "mantenimiento", "garantía", "ayuda"],
  },
  {
    id: "time-4",
    category: "Tiempos, Entregas y Propiedad",
    q: "¿Hacen apps móviles nativas (Android / iOS)?",
    a: "No. Nos enfocamos en software web y de escritorio. Lo que construimos son web apps que funcionan perfectamente en el navegador del móvil, pero no se descargan desde Play Store o App Store. Si tu proyecto requiere una app nativa, te derivamos a partners especializados.",
    keywords: ["app", "android", "ios", "play store", "app store", "nativa", "móvil"],
  },
  {
    id: "time-5",
    category: "Tiempos, Entregas y Propiedad",
    q: "¿Ofrecen e-commerce o tiendas en línea?",
    a: "Sí, lo manejamos como proyecto a medida dentro de 'Sistemas a medida'. Construimos catálogos, checkout con pasarelas de pago (Stripe, MercadoPago, PayPal) y paneles de administración. No trabajamos con Shopify ni WooCommerce, sino con desarrollo propio.",
    keywords: ["tienda", "ecommerce", "e-commerce", "comprar", "vender", "shopify", "checkout", "carrito"],
  },

  // Precios
  {
    id: "pay-1",
    category: "Cotizaciones y Formas de Pago",
    q: "¿Cómo se calculan los costos de los proyectos?",
    a: "Cada propuesta se cotiza con transparencia según el número de secciones, la complejidad de las integraciones (APIs, pasarelas de pago, IA) y las funciones específicas que tu negocio requiera. Damos precio antes de empezar, no después.",
    keywords: ["cuánto", "cuesta", "precio", "costo", "cotización", "presupuesto", "tarifa", "cobran"],
  },
  {
    id: "pay-2",
    category: "Cotizaciones y Formas de Pago",
    q: "¿Cuáles son los métodos de pago?",
    a: "Trabajamos con 50% de anticipo para iniciar el diseño y la arquitectura del software, y el 50% restante contra entrega y conformidad de tu proyecto listo para producción. Aceptamos transferencia, tarjeta y pagos internacionales.",
    keywords: ["pago", "pagar", "método", "tarjeta", "transferencia", "anticipo", "cómo pago"],
  },
  {
    id: "pay-3",
    category: "Cotizaciones y Formas de Pago",
    q: "¿Puedo pagar en mensualidades?",
    a: "Sí, para proyectos de más de $30,000 MXN podemos estructurar pagos en 3 o 4 exhibiciones alineadas a los hitos del proyecto (diseño, desarrollo, pruebas, entrega).",
    keywords: ["mensualidades", "meses", "plazos", "pagos", "parcialidades", "abonos"],
  },
];

const SUGGESTED_CATEGORIES = [
  { label: "Webs y Landings", query: "web" },
  { label: "Sistemas a medida", query: "sistema" },
  { label: "Integraciones con IA", query: "ia" },
  { label: "Invitaciones Digitales", query: "invitación" },
  { label: "Tiempos y entregas", query: "tarda" },
  { label: "Cotizaciones y pagos", query: "precio" },
];

const WELCOME_QUICK = [
  "¿Cuánto cuesta una página web?",
  "¿Qué incluye una invitación digital?",
  "¿Cuánto tardan en entregar?",
];

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

function findBestAnswer(query: string) {
  const q = normalize(query);
  if (q.length < 2) return null;
  const tokens = q.split(/\s+/).filter((t) => t.length > 1);
  let best: { item: (typeof FAQ)[0]; score: number } | null = null;
  for (const item of FAQ) {
    let score = 0;
    const questionText = normalize(item.q);
    const answerText = normalize(item.a);
    for (const kw of item.keywords) {
      if (q.includes(normalize(kw))) score += 3;
    }
    for (const t of tokens) {
      if (questionText.includes(t)) score += 2;
      if (answerText.includes(t)) score += 1;
    }
    if (score > 0 && (!best || score > best.score)) best = { item, score };
  }
  return best && best.score >= 2 ? best.item : null;
}

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  category?: string;
  suggestions?: string[];
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Inicializa con mensaje de bienvenida
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "bot",
          text: "Hola 👋 Soy el asistente de DiamondCode. Puedo responder dudas sobre webs, sistemas a medida, integraciones con IA, invitaciones digitales, tiempos y precios. ¿Qué quieres saber?",
          suggestions: WELCOME_QUICK,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Reset al cerrar
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setMessages([]);
        setInput("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Foco al abrir
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const match = findBestAnswer(trimmed);
      if (match) {
        const related = FAQ.filter(
          (f) => f.category === match.category && f.id !== match.id
        )
          .slice(0, 2)
          .map((f) => f.q);

        setMessages((prev) => [
          ...prev,
          {
            id: `b-${Date.now()}`,
            role: "bot",
            text: match.a,
            category: match.category,
            suggestions: related.length > 0 ? related : undefined,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `b-${Date.now()}`,
            role: "bot",
            text: "No encontré una respuesta exacta para eso. Prueba con alguna de estas opciones o escríbenos por WhatsApp para una respuesta personalizada.",
            suggestions: SUGGESTED_CATEGORIES.map((c) => c.label),
          },
        ]);
      }
      setIsTyping(false);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const cat = SUGGESTED_CATEGORIES.find((c) => c.label === suggestion);
    handleSend(cat ? cat.query : suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-white flex flex-col overflow-hidden text-slate-700 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[440px] sm:h-[640px] sm:border sm:border-slate-200 sm:rounded-2xl sm:shadow-2xl sm:shadow-slate-900/20 font-sans">
      {/* =============== HEADER =============== */}
      <div className="flex-shrink-0 px-5 py-4 border-b border-slate-200 bg-slate-50 sm:rounded-t-2xl pt-12 sm:pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar con isotipo */}
            <div className="relative w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-1.5">
              <Image
                src="/assets/images/isotipo.png"
                alt="DiamondCode"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <h4
              className="text-base text-slate-900 font-semibold leading-tight"
              style={{ fontFamily: "var(--font-tenor)" }}
            >
              Asistente DiamondCode
            </h4>
          </div>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 p-2.5 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label="Cerrar asistente"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* =============== MENSAJES =============== */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-white">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            <div
              className={`flex ${
                msg.role === "user" ? "justify-end" : "items-start gap-3"
              }`}
            >
              {msg.role === "bot" && (
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 p-1">
                  <Image
                    src="/assets/images/isotipo.png"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              )}
              <div
                className={`px-4 py-3 max-w-[85%] ${
                  msg.role === "user"
                    ? "bg-blue-700 text-white rounded-2xl rounded-tr-sm"
                    : "bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm"
                }`}
              >
                {msg.category && (
                  <p
                    className="text-[11px] uppercase tracking-[0.15em] text-blue-700 font-semibold mb-1.5"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {msg.category}
                  </p>
                )}
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-tenor)" }}
                >
                  {msg.text}
                </p>
              </div>
            </div>

            {/* Sugerencias */}
            {msg.suggestions && msg.suggestions.length > 0 && (
              <div className="pl-11 flex flex-wrap gap-2">
                {msg.suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestionClick(s)}
                    className="text-sm text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-700 border border-blue-200 hover:border-blue-700 rounded-full px-3.5 py-2 transition-all duration-200 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-1">
              <Image
                src="/assets/images/isotipo.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3.5">
              <div className="flex gap-1">
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* =============== INPUT =============== */}
      <form
        onSubmit={handleSubmit}
        className="flex-shrink-0 px-4 py-3 bg-white border-t border-slate-200 sm:rounded-b-2xl"
      >
        <div className="flex items-end gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-3 text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 focus:bg-white transition-all"
            aria-label="Escribe tu pregunta"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white transition-all duration-200 cursor-pointer flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            aria-label="Enviar mensaje"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p
          className="text-center text-[11px] text-slate-400 mt-2"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          ¿No encuentras respuesta?{" "}
          <a
            href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20de%20software."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-blue-700 hover:text-blue-800 underline underline-offset-2 font-medium"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </form>
    </div>
  );
}