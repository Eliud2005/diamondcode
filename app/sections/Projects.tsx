// app/sections/Projects.tsx
import Link from "next/link"; // 👈 Importamos el componente Link de Next.js

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Cabecera de la sección */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl">
            Nuestros Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl">
            Casos de éxito y plataformas digitales que hemos diseñado y desarrollado con precisión.
          </p>
        </div>

        {/* TARJETA DESTACADA COMO LINK COMPLETO */}
        {/* 💡 Cambia el href="..." por el link real de Nube Serpiente cuando esté listo */}
        <Link 
          href="https://www.youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group relative rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/60 shadow-2xl backdrop-blur-sm cursor-pointer"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Lado izquierdo: Textos del proyecto */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">
                Featured Case Study
              </span>
              <h3 className="text-3xl font-bold text-zinc-100 mb-4 group-hover:text-cyan-400 transition-colors">
                Nube Serpiente
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Desarrollamos la plataforma web oficial para este innovador centro deportivo y cultural. Diseñamos una experiencia digital fluida que conecta a la comunidad, facilitando la difusión de eventos culturales y la gestión de actividades deportivas en un solo lugar.
              </p>
              
              {/* Etiquetas de tecnologías usadas */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  TypeScript
                </span>
              </div>

              <div>
                <span className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:translate-x-2 transition-transform duration-300">
                  Visitar sitio web →
                </span>
              </div>
            </div>

            {/* Lado derecho: Espacio visual/Mockup */}
            <div className="relative h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-black border border-zinc-800 flex items-center justify-center overflow-hidden shadow-inner">
              <div className="text-center p-6">
                <div className="text-4xl mb-2 opacity-40 group-hover:scale-110 transition-transform duration-300">☁️🐍</div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                  Plataforma Digital Web
                </p>
              </div>
              
              {/* Destello de fondo decorativo que brilla más al hacer hover */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}