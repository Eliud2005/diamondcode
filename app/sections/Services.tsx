// app/sections/Services.tsx
export default function Services() { 
  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
            Creamos experiencias web de alta calidad, ultra rápidas y optimizadas para hacer crecer tu negocio.
          </p>
        </div>

        {/* CONTENEDOR GRID (Las 3 especialidades de desarrollo web) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Landing Pages */}
          <div className="group relative rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-400 font-bold">01</div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
              Landing Pages
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Páginas de aterrizaje de alto impacto diseñadas específicamente para capturar clientes potenciales y presentar tu startup o producto al mundo.
            </p>
          </div>

          {/* Tarjeta 2: E-commerce */}
          <div className="group relative rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-400 font-bold">02</div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
              Sitios web
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Desarrollamos sitios web modernos, responsivos y optimizados para motores de búsqueda. Una presencia digital impactante que convierte visitantes en clientes.
            </p>
          </div>

          {/* Tarjeta 3: Web Apps a Medida */}
          <div className="group relative rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm hover:-translate-y-1">
            <div className="mb-4 text-3xl text-cyan-400 font-bold">03</div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
              Aplicaciones Web
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sistemas personalizados, paneles de administración (dashboards) y plataformas web complejas construidas con la tecnología más avanzada del mercado.
            </p>
          </div>

        </div>

      </div>
    </section>
  );      
}