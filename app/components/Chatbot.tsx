'use client';

import { useState, useRef, useEffect } from 'react';
import { X, ArrowRight, CornerDownRight, Square } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "🚀 Landing Pages e Invitaciones",
    questions: [
      {
        q: "¿Qué incluye el servicio de Landing Page?",
        a: "Incluye un diseño exclusivo UI/UX adaptado a tu marca (sin plantillas repetidas), desarrollo optimizado en Next.js/React, textos persuasivos enfocados en conversión (Copywriting), integración de formularios para capturar leads y conexión directa con tu WhatsApp o sistema CRM."
      },
      {
        q: "¿Cómo funcionan las Invitaciones Digitales?",
        a: "Son minisitios premium diseñados especialmente para eventos (bodas, corporativos, aniversarios). Incluyen confirmación de asistencia en tiempo real directo a tu correo o base de datos, mapas interactivos, pases digitales con código QR, cuenta regresiva y sugerencias de mesa de regalos."
      },
      {
        q: "¿Tienen compatibilidad con dispositivos móviles?",
        a: "El 100% de nuestros desarrollos se construyen bajo la metodología 'Mobile-First'. Garantizamos que tu plataforma se adapte de forma impecable, fluida y ultra veloz en cualquier smartphone o tablet."
      }
    ]
  },
  {
    category: "💻 Sitios Web y Apps a Medida",
    questions: [
      {
        q: "¿Cuál es la diferencia entre un Sitio Web y una Aplicación Web?",
        a: "Un Sitio Web presenta tu marca, portafolio y servicios, enfocado en posicionar en Google (SEO). Una Aplicación Web (Web App) es un sistema interactivo con lógica compleja que procesa datos: incluye perfiles de usuario, pasarelas de pago, paneles de administración (dashboards) y automatizaciones."
      },
      {
        q: "¿Ustedes se encargan del Backend y las bases de datos?",
        a: "Sí, realizamos desarrollo integral Full-Stack. Nos encargamos tanto del diseño visual de la interfaz como de la estructura lógica del servidor, APIs y bases de datos seguras en la nube."
      }
    ]
  },
  {
    category: "🔧 Optimización, SEO y Rediseño",
    questions: [
      {
        q: "Tengo una web vieja o lenta, ¿cómo la mejoran?",
        a: "Realizamos una auditoría completa de rendimiento. Migramos y reestructuramos tu sitio con tecnologías modernas como Next.js para asegurar tiempos de carga inferiores a 1.5 segundos, lo que mejora drásticamente tus ventas y tu posicionamiento en buscadores."
      },
      {
        q: "¿Sus servicios incluyen posicionamiento SEO?",
        a: "Todas nuestras páginas se entregan con la estructura técnica fundamental para SEO (etiquetas semánticas, optimización de imágenes, sitemaps y metatags). Para estrategias avanzadas de palabras clave, ofrecemos planes mensuales optimizados."
      }
    ]
  },
  {
    category: "⏱️ Tiempos, Entregas y Propiedad",
    questions: [
      {
        q: "¿Cuánto tardan en desarrollar un proyecto?",
        a: "Los tiempos se adaptan a la complejidad: una Landing Page o Invitación Digital toma entre 5 a 10 días hábiles. Un Sitio Web corporativo de 2 a 3 semanas. Una Aplicación Web a medida puede tomar de 4 a 8 semanas con entregas parciales planificadas."
      },
      {
        q: "¿El código y el dominio pasan a ser de mi propiedad?",
        a: "Absolutamente. Al concluir el proyecto, te transferimos el acceso total al repositorio de código (GitHub), licencias de despliegue y cuentas asociadas. DiamondCode no retiene la propiedad ni te ata a contratos forzosos."
      },
      {
        q: "¿Ofrecen soporte técnico post-entrega?",
        a: "Garantizamos 30 días de soporte técnico gratuito después del lanzamiento para resolver cualquier detalle imprevisto. Posteriormente, contamos con planes mensuales opcionales de mantenimiento, actualizaciones y respaldos."
      }
    ]
  },
  {
    category: "💳 Cotizaciones y Formas de Pago",
    questions: [
      {
        q: "¿Cómo se calculan los costos de los proyectos?",
        a: "Cada propuesta se cotiza con total transparencia según el número de secciones, la complejidad de las integraciones (APIs, pasarelas de pago) y las funciones específicas de software que tu negocio requiera."
      },
      {
        q: "¿Cuáles son los métodos de pago y fases de liquidación?",
        a: "Trabajamos mediante un esquema de 50% de anticipo para iniciar el diseño junto con la arquitectura del software, y el 50% restante se cubre contra entrega y conformidad de tu proyecto listo para producción."
      }
    ]
  }
];

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [chatStage, setChatStage] = useState<'welcome' | 'category' | 'answer'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<typeof FAQ_DATA[0] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<{ q: string; a: string } | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatStage, selectedAnswer]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black flex flex-col overflow-hidden text-zinc-300 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[420px] sm:h-[600px] sm:border sm:border-zinc-900 sm:rounded-2xl sm:shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans select-none">
      
      {/* Cabecera única con título y botón de cierre */}
      <div className="p-5 sm:p-6 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/90 sm:rounded-t-2xl pt-10 sm:pt-6">
        <div className="flex items-center gap-3">
          <Square className="w-2 h-2 fill-cyan-400 text-cyan-400 opacity-80" />
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
              DiamondCode
            </h4>
            <p className="text-[10px] text-zinc-500 tracking-wider">Asistente virtual</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {chatStage !== 'welcome' && (
            <button 
              onClick={() => {
                setChatStage('welcome');
                setSelectedCategory(null);
                setSelectedAnswer(null);
              }}
              className="text-[10px] uppercase tracking-widest border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white px-3 py-1.5 rounded-full transition-all cursor-pointer font-mono"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Index
            </button>
          )}

          <button 
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 rounded-full bg-zinc-900/50 cursor-pointer"
            aria-label="Cerrar asistente"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cuerpo del chat */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-none bg-zinc-950/25">
        <div className="flex items-start max-w-[95%]">
          <div 
            className="text-zinc-400 text-sm leading-relaxed font-light"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            Bienvenido al canal de asistencia de <span className="text-white">DiamondCode</span>. Desarrollamos software y plataformas web de alta fidelidad con un enfoque en el refinamiento técnico y la exclusividad conceptual.
            <br /><br />
            Por favor, seleccione un área del menú inferior para consultar nuestro protocolo operativo:
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <p 
            className="text-[9px] text-zinc-600 font-semibold tracking-[0.2em] uppercase px-1"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            [01] SELECCIÓN DE CATEGORÍA
          </p>
          <div className="flex flex-col border-t border-zinc-900">
            {FAQ_DATA.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setChatStage('category');
                  setSelectedAnswer(null);
                }}
                className={`text-left text-xs py-3 px-2 rounded-lg transition-all flex items-center justify-between group cursor-pointer ${
                  selectedCategory?.category === cat.category
                    ? 'text-cyan-400 font-medium bg-zinc-900/50 pl-3'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/30 hover:pl-3'
                }`}
              >
                <span style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{cat.category}</span>
                <ArrowRight className={`w-3.5 h-3.5 text-zinc-700 transition-transform ${selectedCategory?.category === cat.category ? 'text-cyan-400 translate-x-1' : 'group-hover:text-zinc-400 group-hover:translate-x-0.5'}`} />
              </button>
            ))}
          </div>
        </div>

        {selectedCategory && (
          <div className="space-y-2 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <p 
              className="text-[9px] text-zinc-600 font-semibold tracking-[0.2em] uppercase px-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              [02] CONSULTAS DISPONIBLES
            </p>
            <div className="flex flex-col border-t border-zinc-900 pt-1 space-y-1">
              {selectedCategory.questions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedAnswer(item);
                    setChatStage('answer');
                  }}
                  className={`w-full text-left text-xs py-3.5 px-3 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${
                    selectedAnswer?.q === item.q
                      ? 'bg-zinc-900 text-white font-medium'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                  }`}
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  <CornerDownRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-40 transition-colors ${selectedAnswer?.q === item.q ? 'text-cyan-400 opacity-100' : 'group-hover:opacity-80'}`} />
                  <span>{item.q}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {chatStage === 'answer' && selectedAnswer && (
          <div className="pt-2 animate-in slide-in-from-bottom-2 duration-300">
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 text-xs leading-relaxed font-light shadow-md">
              <div 
                className="flex items-center gap-2 text-cyan-400 font-medium mb-3 text-[9px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Transmisión DiamondCode
              </div>
              <p className="text-zinc-300 leading-relaxed font-normal" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                {selectedAnswer.a}
              </p>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Pie de página */}
      <div className="p-6 bg-zinc-950 border-t border-zinc-900 text-center sm:rounded-b-2xl">
        <p className="text-[11px] text-zinc-500 mb-4 font-light" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          ¿Deseas encargar una arquitectura digital a medida?
        </p>
        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex items-center justify-center bg-white text-black text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-5 rounded-xl transition-all w-full hover:bg-zinc-200 active:scale-[0.99] font-mono shadow-lg cursor-pointer"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Iniciar Briefing de Proyecto
        </a>
      </div>

    </div>
  );
}