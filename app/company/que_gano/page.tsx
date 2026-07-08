"use client";

import Link from "next/link";
import { Clock, EyeOff, Store, MessageSquare, ShieldCheck, HeartHandshake } from "lucide-react";

export default function QueGanoPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Esferas de luz de fondo con desenfoque (estilo cyber/dark) */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Botón de volver */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-cyan-400 transition-colors mb-12 uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
          ← Volver al inicio
        </Link>

        {/* ========================================================= */}
        {/* SECCIÓN 1: ¿Por qué necesitas una web? */}
        {/* ========================================================= */}
        <header className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-2 block" style={{ fontFamily: "'DM Mono', monospace" }}>
            El verdadero problema
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent sm:text-4xl mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            ¿Sientes que trabajan el doble y tus ventas no suben?
          </h1>
          <p className="text-zinc-400 text-base max-w-2xl font-light">
            Si a tu negocio le pasa algo de esto, necesitan presencia en internet de manera urgente:
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-3 mb-24">
          {/* Tarjeta Problema 1 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-red-500/30 transition-colors group">
            <div className="p-3 bg-red-500/10 rounded-2xl text-red-400 w-fit group-hover:bg-red-500/20 transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Pierden tiempo</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Pasan horas respondiendo *"¿Qué precio tiene?"* o *"¿Qué horarios manejan?"* en WhatsApp en lugar de atender a los clientes que ya están listos para pagar.
            </p>
          </div>

          {/* Tarjeta Problema 2 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-amber-500/30 transition-colors group">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 w-fit group-hover:bg-amber-500/20 transition-colors">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Son invisibles</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Si alguien busca en Google lo que ustedes venden y no aparecen, le están regalando ese cliente a la competencia directa que sí tiene página web.
            </p>
          </div>

          {/* Tarjeta Problema 3 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-blue-500/30 transition-colors group">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 w-fit group-hover:bg-blue-500/20 transition-colors">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Cierre temprano</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Sin una web, dejan de vender cuando apagan las luces. Una página es un empleado digital que trabaja 24/7 recibiendo pedidos, mensajes o citas.
            </p>
          </div>
        </div>

        {/* Separador sutil estructural */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-24" />

        {/* ========================================================= */}
        {/* SECCIÓN 2: ¿Por qué trabajar con nosotros? */}
        {/* ========================================================= */}
        <header className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2 block" style={{ fontFamily: "'DM Mono', monospace" }}>
            Nuestra Solución
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent sm:text-4xl mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            ¿Por qué confiar en nosotros para el diseño de tu página?
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl font-light">
            No los confundimos con código ni tecnicismos; absorbemos la complejidad para darles herramientas sencillas que hagan crecer su negocio.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {/* Tarjeta Solución 1 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-indigo-500/30 transition-colors group">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 w-fit group-hover:bg-indigo-500/20 transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Mismo idioma</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Olvídense de términos técnicos confusos. Les explicamos todo de forma clara, amigable y directa de profesional a profesional.
            </p>
          </div>

          {/* Tarjeta Solución 2 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-emerald-500/30 transition-colors group">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 w-fit group-hover:bg-emerald-500/20 transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Páginas que venden</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              No creamos páginas para que queden flotando en internet de adorno. Las diseñamos pensando en que sus clientes llamen, agenden o compren.
            </p>
          </div>

          {/* Tarjeta Solución 3 */}
          <div className="p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm shadow-2xl flex flex-col space-y-4 hover:border-cyan-500/30 transition-colors group">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 w-fit group-hover:bg-cyan-500/20 transition-colors">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-zinc-100" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Acompañamiento</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              No les entregamos el proyecto y nos desaparecemos. Les enseñamos a usar su página paso a paso para que le saquen provecho desde el primer día.
            </p>
          </div>
        </div>

        {/* Botón de Llamado a la Acción Inferior para cerrar el trato */}
        <div className="w-full flex justify-center pt-8">
          <Link 
            href="/#contact" 
            className="w-full sm:w-auto border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/10 text-cyan-400 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 text-center shadow-[0_0_25px_rgba(6,182,212,0.05)]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Hablemos de tu proyecto →
          </Link>
        </div>

      </div>
    </div>
  );
}