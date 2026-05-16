"use client";

import Link from "next/link";

export default function MisionPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-cyan-400 transition-colors mb-12 uppercase tracking-widest">
          ← Volver al inicio
        </Link>

        <header className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
            Propósito Esencial
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl mb-6">
            Nuestra Misión
          </h1>
        </header>

        <main className="space-y-6 text-zinc-300 leading-relaxed text-lg">
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl mb-8">
            <p className="font-medium text-zinc-100 text-xl leading-relaxed">
              "Desarrollar software a la medida y productos digitales de alto rendimiento que impulsen el crecimiento de empresas y startups, combinando un diseño impecable con un código robusto, ágil y eficiente."
            </p>
          </div>

          <div className="text-base text-zinc-400 space-y-4 pt-4">
            <p>
              Nuestra misión diaria consiste en cerrar la brecha entre las ideas de negocio complejas y el software bien ejecutado. Nos encargamos de absorber la complejidad técnica para entregar herramientas sencillas, intuitivas y sumamente potentes.
            </p>
            <p>
              Para DiamondCode, cumplir nuestra misión significa que cada cliente reciba una infraestructura digital segura, escalable y perfectamente preparada para resistir altas demandas de tráfico sin comprometer su velocidad.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}