"use client";

export default function Services() { 
  const servicesList = [
    {
      number: "01",
      category: "INTERFACES",
      title: "Landing Pages",
      desc: "Páginas de aterrizaje de alto impacto diseñadas milimétricamente para capturar clientes potenciales, validar ideas y lanzar tu producto al mercado."
    },
    {
      number: "02",
      category: "CORPORATIVO",
      title: "Sitios Web Corporativos",
      desc: "Desarrollo de portales modernos, responsivos y con SEO avanzado. Construimos una presencia digital robusta que posiciona tu marca frente a la competencia."
    },
    {
      number: "03",
      category: "SISTEMAS",
      title: "Aplicaciones Web & SaaS",
      desc: "Plataformas personalizadas, paneles de administración complejos (dashboards) e infraestructuras web escalables con lógica de negocio avanzada."
    },
    {
      number: "04",
      category: "INTERACTIVOS",
      title: "Invitaciones Digitales Premium",
      desc: "Experiencias interactivas para eventos especiales. Diseños web fluidos que incluyen confirmación en tiempo real, mapas dinámicos y mesas de regalos integradas."
    },
    {
      number: "05",
      category: "OPTIMIZACIÓN",
      title: "Rediseño & Core Web Vitals",
      desc: "Auditamos y transformamos plataformas obsoletas. Optimizamos la velocidad de carga, la experiencia de usuario (UX) y el rendimiento técnico general."
    },
    {
      number: "06",
      category: "ARQUITECTURA",
      title: "Consultoría Tecnológica",
      desc: "Asesoramiento estratégico en la selección de tecnologías digitales, metodologías de desarrollo y arquitectura de software para acelerar tu startup."
    }
  ];

  return (
    <section id="servicios" className="py-32 md:py-40 bg-black text-white border-t border-zinc-900 relative overflow-hidden">
      
      {/* 🔮 ILUMINACIÓN AMBIENTAL (Sutiles destellos circulares integrados) */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[550px] h-[550px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cabecera asimétrica de alta costura digital */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-500/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-cyan-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                Capacidades
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl leading-tight text-white tracking-tight"
              style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
            >
              Nuestros
              <br />
              servicios.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-zinc-400 text-base leading-relaxed font-light">
              Estructuramos, diseñamos y desplegamos ecosistemas web de alto rendimiento optimizados para la conversión. Cada solución se ejecuta con precisión quirúrgica.
            </p>
          </div>
        </div>

        {/* REJILLA DE BORDES AXIALES (Se genera una cuadrícula perfecta de 3 columnas en desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900/40 border border-zinc-900/60">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="bg-black p-10 group hover:bg-zinc-950/40 transition-colors duration-300 cursor-default flex flex-col justify-between min-h-[280px]"
            >
              <div>
                {/* Categoría y Número en Mono */}
                <div
                  className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/80 mb-8 flex justify-between items-center"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span>{service.number} // {service.category}</span>
                </div>

                {/* Título Elegante */}
                <h3
                  className="text-2xl text-white mb-4 leading-tight tracking-tight group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                
                {/* Descripción Fluida */}
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              {/* Detalle decorativo minimalista al final de cada tarjeta */}
              <div className="mt-8 pt-4 border-t border-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] text-zinc-600 tracking-widest uppercase font-mono">Precision System</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );      
}