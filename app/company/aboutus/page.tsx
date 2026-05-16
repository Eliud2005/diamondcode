"use client";

import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-cyan-400 transition-colors mb-12 uppercase tracking-widest">
          ← Volver al inicio
        </Link>

        <header className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
            Nuestra Historia
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl mb-6">
            Sobre DiamondCode
          </h1>
        </header>

        <main className="space-y-8 text-zinc-300 leading-relaxed text-base">
          <p>
            En el ecosistema digital actual, una página web común ya no es suficiente. Nacimos con la firme convicción de que las empresas merecen software de un calibre superior. Llamamos a nuestra agencia <span className="text-cyan-300 font-medium">DiamondCode</span> porque creemos que el código debe ser como un diamante: **limpio, resistente, sin imperfecciones estructurales y de un alto valor comercial**.
          </p>
          
          <p>
            No somos partidarios de las plantillas genéricas ni de las soluciones lentas que ahuyentan a los usuarios. Nos especializamos en maquetar e implementar sistemas y plataformas web a la medida utilizando tecnología de vanguardia como Next.js, React y Tailwind CSS, garantizando velocidades de carga instantáneas y un posicionamiento orgánico óptimo.
          </p>

          <div className="border-t border-zinc-900 pt-8 mt-12">
            <h2 className="text-xl font-bold text-zinc-100 mb-6">¿Por qué trabajar con nosotros?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Rendimiento Puro</h3>
                <p className="text-sm text-zinc-400">Optimizamos cada línea de código para que tu plataforma cargue en milisegundos, mejorando tus conversiones.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Diseño de Autor</h3>
                <p className="text-sm text-zinc-400">Interfaces minimalistas, modernas y adaptadas estrictamente a la identidad estética de tu marca.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}