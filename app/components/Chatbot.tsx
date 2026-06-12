'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight, CornerDownRight } from 'lucide-react';

// Base de conocimientos masiva y esencial para DiamondCode
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStage, setChatStage] = useState<'welcome' | 'category' | 'answer'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<typeof FAQ_DATA[0] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<{ q: string; a: string } | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatStage, selectedAnswer]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      {/* Botón Flotante Estilizado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-500 text-slate-950 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/20 transition-all duration-350 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Abrir asistente virtual"
      >
        {isOpen ? <X className="w-7 h-7 stroke-[2.5]" /> : <MessageSquare className="w-7 h-7 stroke-[2.5]" />}
      </button>

      {/* Ventana Principal del Chatbot */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] sm:w-[440px] h-[580px] bg-zinc-950/95 border border-zinc-800/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-100 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Encabezado Principal */}
          <div className="bg-zinc-900/80 p-5 border-b border-zinc-800/60 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
              <div>
                <h4 className="font-bold text-base tracking-tight text-white">DiamondCode</h4>
                <p className="text-xs text-zinc-400">Asistente virtual • En línea</p>
              </div>
            </div>
            {chatStage !== 'welcome' && (
              <button 
                onClick={() => {
                  setChatStage('welcome');
                  setSelectedCategory(null);
                  setSelectedAnswer(null);
                }}
                className="text-xs bg-zinc-800/80 hover:bg-zinc-700/90 text-zinc-300 px-3 py-1.5 rounded-xl transition-all font-medium tracking-wide border border-zinc-700/40 cursor-pointer"
              >
                Volver al inicio
              </button>
            )}
          </div>

          {/* Cuerpo de la Conversación */}
          <div className="flex-1 p-5 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/20">
            
            {/* Mensaje de Bienvenida Dinámico */}
            <div className="flex items-start gap-3 max-w-[90%]">
              <div className="bg-zinc-900 border border-zinc-800/60 text-zinc-200 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-lg">
                ¡Hola! Qué gusto saludarte. Soy tu **asistente virtual de DiamondCode** y estoy aquí para ayudarte a darle vida a tu próximo proyecto digital. 🚀
                <br /><br />
                ¿En qué puedo ayudarte hoy? Selecciona una de las opciones de abajo para empezar.
              </div>
            </div>

            {/* FASE: Selección de Categoría Temática */}
            <div className="space-y-3 pt-1">
              <p className="text-xs text-zinc-400 font-semibold tracking-wider uppercase px-1">¿Sobre qué área es tu duda?</p>
              <div className="grid grid-cols-1 gap-2.5">
                {FAQ_DATA.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setChatStage('category');
                      setSelectedAnswer(null);
                    }}
                    className={`text-left text-sm p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedCategory?.category === cat.category
                        ? 'bg-cyan-950/30 border-cyan-500/50 text-cyan-400 font-semibold shadow-inner'
                        : 'bg-zinc-900/40 border-zinc-800/60 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/80 shadow-sm'
                    }`}
                  >
                    <span>{cat.category}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* FASE: Listado de Preguntas Disponibles */}
            {selectedCategory && (
              <div className="space-y-3 pt-3 border-t border-zinc-900 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-xs text-zinc-400 font-semibold tracking-wider uppercase px-1">Preguntas disponibles:</p>
                <div className="space-y-2.5">
                  {selectedCategory.questions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedAnswer(item);
                        setChatStage('answer');
                      }}
                      className={`w-full text-left text-sm p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        selectedAnswer?.q === item.q
                          ? 'bg-white border-white text-zinc-950 font-medium shadow-md'
                          : 'bg-zinc-900/20 border-zinc-800/50 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/50 shadow-sm'
                      }`}
                    >
                      <CornerDownRight className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                      <span>{item.q}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FASE: Respuesta Final Detallada */}
            {chatStage === 'answer' && selectedAnswer && (
              <div className="flex items-start gap-3 max-w-[95%] pt-3 animate-in slide-in-from-bottom-3 duration-300">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/90 border border-zinc-800 text-zinc-200 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-xl">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-2 text-xs uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> Respuesta DiamondCode
                  </div>
                  {selectedAnswer.a}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Pie de Página con Enlace de Contacto */}
          <div className="p-4 bg-zinc-900/40 border-t border-zinc-900/80 text-center backdrop-blur-md">
            <p className="text-xs text-zinc-400 mb-3 font-normal">¿Deseas agendar una sesión personalizada o recibir una propuesta?</p>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-sm font-bold py-3 px-5 rounded-xl hover:opacity-95 transition-all w-full shadow-lg shadow-cyan-500/5 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4 stroke-[2.5]" /> Iniciar Solicitud de Proyecto
            </a>
          </div>

        </div>
      )}
    </div>
  );
}