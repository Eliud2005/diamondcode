"use client";

export default function Services() { 
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#06080f] via-[#0c1120] to-[#06080f] text-white border-t border-zinc-900/80 relative overflow-hidden">
      
      {/* 💡 ILUMINACIÓN DE ESTUDIO PREMIUM (CIAN Y INDIGO) */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[550px] h-[550px] bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-xl mx-auto font-light">
            Creamos experiencias web de alta calidad, ultra rápidas y optimizadas para hacer crecer tu negocio.
          </p>
        </div>

        {/* CONTENEDOR GRID (Las 6 especialidades de desarrollo web) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Landing Pages */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">01</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Landing Pages
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Páginas de aterrizaje de alto impacto diseñadas específicamente para capturar clientes potenciales y presentar tu startup o producto al mundo.
            </p>
          </div>

          {/* Tarjeta 2: Sitios web */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">02</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Sitios web
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Desarrollamos sitios web modernos, responsivos y optimizados para motores de búsqueda. Una presencia digital impactante que convierte visitantes en clientes.
            </p>
          </div>

          {/* Tarjeta 3: Aplicaciones Web */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">03</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Aplicaciones Web
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Sistemas personalizados, paneles de administración (dashboards) y plataformas web complejas construidas con la tecnología más avanzada del mercado.
            </p>
          </div>

          {/* Tarjeta 4: Invitaciones digitales */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">04</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Invitaciones digitales
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Invitaciones digitales personalizadas para eventos especiales, bodas, fiestas y celebraciones. Diseños únicos que impresionan a tus invitados desde el primer clic.
            </p>
          </div>

          {/* Tarjeta 5: Rediseño y optimización */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">05</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Rediseño y optimización
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Rediseño y optimización de sitios web para mejorar la experiencia del usuario y el rendimiento en los motores de búsqueda.
            </p>
          </div>

          {/* Tarjeta 6: Consultoría tecnológica */}
          <div className="group relative rounded-2xl bg-zinc-900/30 p-8 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-500 font-black tracking-tight">06</div>
            <h3 className="text-2xl font-black text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
              Consultoría tecnológica
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Asesoramiento especializado en tecnologías digitales para impulsar la transformación y el crecimiento de tu negocio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );      
}