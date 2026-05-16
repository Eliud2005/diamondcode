"use client";

import Link from "next/link";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-cyan-400 transition-colors mb-12 uppercase tracking-widest">
          ← Volver al inicio
        </Link>

        <header className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2 block">
            Proyección de Futuro
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-5xl mb-6">
            Nuestra Visión
          </h1>
        </header>

        <main className="space-y-6 text-zinc-300 leading-relaxed text-lg">
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl mb-8">
            <p className="font-medium text-zinc-100 text-xl leading-relaxed">
              "Posicionarnos como la agencia de desarrollo web de referencia para marcas que buscan destacar digitalmente, siendo reconocidos por la calidad técnica de nuestros desarrollos y nuestra capacidad de transformar ideas complejas en plataformas interactivas de primer nivel."
            </p>
          </div>

          <div className="text-base text-zinc-400 space-y-4 pt-4">
            <p>
              Miramos hacia el futuro entendiendo que las tecnologías evolucionan a pasos agigantados. Nuestra visión nos impulsa a estar constantemente investigando, probando y adoptando las mejores prácticas de la industria de software.
            </p>
            <p>
              A mediano plazo, proyectamos a DiamondCode no solo como un proveedor de servicios de desarrollo, sino como un aliado estratégico fundamental para el escalonamiento de startups en toda la región latam, dejando una huella de elegancia técnica en cada proyecto liberado a producción.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}