// app/privacy/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">

      {/* Header de navegación */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">

        {/* Encabezado */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <span
            className="text-xs tracking-[0.3em] text-blue-700 uppercase block mb-3 font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Documento legal
          </span>
          <h1
            className="text-4xl md:text-5xl leading-[1.05] text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            Aviso de{" "}
            <span className="text-blue-700">Privacidad</span>
          </h1>
          <p
            className="text-xs text-slate-500 tracking-wider"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Última actualización: Mayo 2026
          </p>
        </header>

        {/* Contenido legal */}
        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2
              className="text-xl md:text-2xl text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              1. Responsable del tratamiento
            </h2>
            <p className="text-sm md:text-base font-light">
              En <strong className="text-slate-900 font-medium">DiamondCode</strong>, nos tomamos muy en serio la seguridad de tus datos. El tratamiento de los datos personales recopilados a través de este sitio web se realiza de acuerdo con las normativas globales de protección de datos.
            </p>
          </section>

          <section>
            <h2
              className="text-xl md:text-2xl text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              2. Datos que recopilamos
            </h2>
            <p className="text-sm md:text-base font-light mb-3">
              Recogemos información únicamente cuando interactúas de forma directa con nuestra plataforma, incluyendo:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base font-light text-slate-600">
              <li>
                Información de contacto (nombre, correo electrónico, empresa) proporcionada voluntariamente a través del formulario de contacto.
              </li>
              <li>
                Datos analíticos de navegación anonimizados (dirección IP aproximada, tipo de dispositivo, cookies analíticas) para optimizar el rendimiento de la web.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl md:text-2xl text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              3. Finalidad del uso de datos
            </h2>
            <p className="text-sm md:text-base font-light">
              Los datos recopilados se procesan de forma exclusiva para: responder a tus solicitudes de presupuestos o consultorías de software, enviarte actualizaciones del blog (si te suscribes) y garantizar la estabilidad técnica y ciberseguridad de nuestro ecosistema digital. No comercializamos tus datos con terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2
              className="text-xl md:text-2xl text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              4. Seguridad de la información
            </h2>
            <p className="text-sm md:text-base font-light">
              Implementamos medidas de seguridad de grado empresarial, cifrado mediante capas SSL/TLS y entornos aislados para mitigar cualquier acceso no autorizado, alteración o pérdida de tus datos personales.
            </p>
          </section>

          <section>
            <h2
              className="text-xl md:text-2xl text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
            >
              5. Tus derechos
            </h2>
            <p className="text-sm md:text-base font-light">
              Tienes pleno derecho a acceder, rectificar, cancelar u oponerte (Derechos ARCO) al uso de tus datos en cualquier momento. Para ejercerlos, puedes enviar un correo firmado digitalmente a nuestro equipo técnico de soporte legal.
            </p>
          </section>

        </div>

        {/* Footer de la página */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  );
}