// app/company/aboutus/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Check, Target, Eye, Sparkles } from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">

      {/* Header sticky */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
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
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* ============ ENCABEZADO ============ */}
        <header className="mb-14 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-700" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-blue-700 font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Nuestra historia
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 tracking-tight mb-6"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            Sobre{" "}
            <span className="text-blue-700">DiamondCode</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            Un estudio de desarrollo web que cree que el código debe ser como un
            diamante: limpio, resistente y de alto valor comercial.
          </p>
        </header>

        {/* ============ HISTORIA ============ */}
        <div className="space-y-6 text-slate-600 leading-relaxed mb-16">
          <p className="text-base md:text-lg font-light">
            En el ecosistema digital actual, una página web común ya no es
            suficiente. Nacimos con la firme convicción de que las empresas
            merecen software de un calibre superior. Llamamos a nuestra agencia{" "}
            <strong className="text-slate-900 font-medium">DiamondCode</strong>{" "}
            porque creemos que el código debe ser como un diamante:{" "}
            <strong className="text-slate-900 font-medium">
              limpio, resistente, sin imperfecciones estructurales y de un alto
              valor comercial
            </strong>
            .
          </p>

          <p className="text-base md:text-lg font-light">
            No somos partidarios de las plantillas genéricas ni de las soluciones
            lentas que ahuyentan a los usuarios. Nos especializamos en maquetar e
            implementar sistemas y plataformas web a la medida utilizando
            tecnología de vanguardia como Next.js, React y Tailwind CSS,
            garantizando velocidades de carga instantáneas y un posicionamiento
            orgánico óptimo.
          </p>
        </div>

        {/* ============ MISIÓN + VISIÓN ============ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-700" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-blue-700 font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Lo que nos mueve
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Misión */}
            <div className="relative bg-white border border-slate-200 rounded-2xl p-7 md:p-8 hover:border-blue-700/30 hover:shadow-lg hover:shadow-blue-700/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h2
                className="text-2xl md:text-3xl text-slate-900 mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Misión
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Desarrollar software a la medida y productos digitales de alto
                rendimiento que impulsen el crecimiento de empresas y startups,
                combinando un diseño impecable con un código robusto, ágil y
                eficiente.
              </p>
            </div>

            {/* Visión */}
            <div className="relative bg-white border border-slate-200 rounded-2xl p-7 md:p-8 hover:border-blue-700/30 hover:shadow-lg hover:shadow-blue-700/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h2
                className="text-2xl md:text-3xl text-slate-900 mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Visión
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Convertirnos en el estudio de desarrollo web de referencia en
                México y Latinoamérica, reconocido por la precisión técnica, la
                elegancia visual y el impacto medible en el crecimiento de cada
                negocio que confía en nosotros.
              </p>
            </div>

          </div>
        </div>

        {/* ============ POR QUÉ TRABAJAR CON NOSOTROS ============ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-700" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-blue-700 font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Por qué elegirnos
            </span>
          </div>

          <h2
            className="text-2xl md:text-3xl text-slate-900 mb-6 tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            ¿Por qué trabajar con nosotros?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3
                className="text-lg text-slate-900 mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Rendimiento puro
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Optimizamos cada línea de código para que tu plataforma cargue en
                milisegundos, mejorando tus conversiones.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3
                className="text-lg text-slate-900 mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Diseño de autor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Interfaces minimalistas, modernas y adaptadas estrictamente a la
                identidad estética de tu marca.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3
                className="text-lg text-slate-900 mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Código a medida
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Sin plantillas genéricas. Cada solución se construye desde cero
                según tu operación y objetivos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Check className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3
                className="text-lg text-slate-900 mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
              >
                Soporte real
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                30 días de soporte post-lanzamiento incluidos y planes de
                mantenimiento continuo opcionales.
              </p>
            </div>

          </div>
        </div>

        {/* ============ CTA FINAL ============ */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-8 md:p-10 text-center mb-16">
          <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6" strokeWidth={1.75} />
          </div>
          <h2
            className="text-2xl md:text-3xl text-slate-900 mb-3 tracking-tight"
            style={{ fontFamily: "var(--font-tenor)", fontWeight: 400 }}
          >
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light mb-6 max-w-md mx-auto">
            Conversemos sobre tu proyecto. Sin compromiso, sin plantillas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 text-xs tracking-[0.2em] uppercase rounded-full font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center border border-slate-300 hover:border-blue-700 bg-white hover:bg-blue-50 text-slate-900 px-7 py-3.5 text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        {/* ============ FOOTER DE LA PÁGINA ============ */}
        <div className="pt-8 border-t border-slate-200">
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