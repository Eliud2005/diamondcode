"use client";

import Link from "next/link";

export default function PrivacyPage() {
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
            // LEGAL DOCUMENTATION
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Aviso de <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Privacidad</span>
          </h1>
          <p className="mt-4 text-xs font-mono text-zinc-500">
            Última actualización: Mayo 2026
          </p>
        </header>

        {/* Contenido Legal */}
        <div className="space-y-8 text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Responsable del Tratamiento</h2>
            <p>
              En <strong>DiamondCode</strong>, nos tomamos muy en serio la seguridad de tus datos. El tratamiento de los datos personales recopilados a través de este sitio web se realiza de acuerdo con las normativas globales de protección de datos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Datos que Recopilamos</h2>
            <p className="mb-2">Recogemos información únicamente cuando interactúas de forma directa con nuestra plataforma, incluyendo:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-500">
              <li>Información de contacto (Nombre, correo electrónico, empresa) proporcionada voluntariamente a través del formulario de contacto.</li>
              <li>Datos analíticos de navegación anonimizados (Dirección IP aproximada, tipo de dispositivo, cookies analíticas) para optimizar el rendimiento de la web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Finalidad del Uso de Datos</h2>
            <p>
              Los datos recopilados se pulen y procesan de forma exclusiva para: responder a tus solicitudes de presupuestos o consultorías de software, enviarte actualizaciones del blog (si te suscribes) y garantizar la estabilidad técnica y ciberseguridad de nuestro ecosistema digital. No comercializamos tus datos con terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Seguridad de la Información</h2>
            <p>
              Implementamos medidas de seguridad de grado empresarial, cifrado mediante capas SSL/TLS y entornos aislados para mitigar cualquier acceso no autorizado, alteración o pérdida de tus datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Tus Derechos</h2>
            <p>
              Tienes pleno derecho a acceder, rectificar, cancelar u oponerte (Derechos ARCO) al uso de tus datos en cualquier momento. Para ejercerlos, puedes enviar un correo firmado digitalmente a nuestro equipo técnico de soporte legal.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}