"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-zinc-300 selection:bg-cyan-500 selection:text-black font-sans py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Botón de Retorno */}
        <Link 
          href="/" 
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Volver al Inicio
        </Link>

        {/* Encabezado */}
        <header className="mb-12 border-b border-zinc-900 pb-8">
          <span className="text-xs font-mono tracking-widest text-zinc-600 uppercase block mb-2">
            // TERMS OF USE
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Términos de <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Servicio</span>
          </h1>
          <p className="mt-4 text-xs font-mono text-zinc-500">
            Última actualización: Mayo 2026
          </p>
        </header>

        {/* Contenido Legal */}
        <div className="space-y-8 text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Aceptación de los Términos</h2>
            <p>
              Al acceder, navegar o utilizar la plataforma de <strong>DiamondCode</strong>, aceptas quedar vinculado por los presentes Términos de Servicio y por todas las leyes aplicables. Si no estás de acuerdo con alguna sección, debes interrumpir el uso del sitio inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Propiedad Intelectual</h2>
            <p>
              Todo el código fuente, diseños de interfaz, animaciones CSS, marcas, logotipos de diamantes (Diamond Render) y contenidos textuales expuestos en este sitio son propiedad exclusiva de DiamondCode o cuentan con sus debidas licencias de explotación. Queda estrictamente prohibida la reproducción parcial o total con fines comerciales sin autorización previa por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Uso Correcto de la Plataforma</h2>
            <p>
              Te comprometes a no realizar ataques de denegación de servicio (DDoS), inyecciones de código malicioso o ingeniería inversa sobre las funciones del frontend o backend. El uso indebido será reportado directamente a las autoridades correspondientes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Limitación de Responsabilidad</h2>
            <p>
              DiamondCode proporciona este sitio "tal cual" y "según disponibilidad". Aunque pulimos cada aspecto de nuestra infraestructura, no garantizamos que el sitio esté libre de interrupciones temporales ajenas a nuestro control o fallos en servidores de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar la estructura visual, el código del sitio y estos términos legales en cualquier momento para adaptarnos a las leyes del mercado de software enterprise. Continuar utilizando la web tras dichos cambios constituye la aceptación de los nuevos términos.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}