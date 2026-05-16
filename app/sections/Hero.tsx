"use client"; 

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("Inicio");

 // Cambia tu array simple por este array de objetos:
const navLinks = [
  { name: "Inicio", id: "inicio" },
  { name: "Servicios", id: "services" },
  { name: "Proyectos", id: "projects" },
  { name: "Contacto", id: "contact" },
];

  return (
    <section id="inicio" className="relative w-full h-screen bg-[#030303] text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex flex-col justify-between">
      
      {/* 🔮 CAPAS DE FONDO DE ALTO CONTRASTE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[35%] right-[10%] w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Malla de Ingeniería de fondo */}
        <div className="absolute right-[5%] top-[25%] w-[500px] h-[500px] bg-[linear-gradient(to_right,#0c1a24_1px,transparent_1px),linear-gradient(to_bottom,#0c1a24_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* 💎 IMAGEN DEL DIAMANTE CON MÁSCARA PARA INTEGRAR EL FONDO (Solución anterior incluida) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
       <img 
  src="../assets/images/logo.png" 
  alt="Diamond Render" 
  className="absolute right-[-5%] sm:right-[5%] top-[25%] sm:top-[20%] w-[350px] sm:w-[700px] h-auto object-contain mix-blend-screen drop-shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-[bounce_6s_infinite] pointer-events-none 
  [mask-image:radial-gradient(circle_at_center,black_65%,black_70%,transparent_85%)]"
/>

        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-zinc-900/40 to-transparent skew-x-12 blur-sm opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-48 bg-gradient-to-tr from-zinc-950 to-transparent -skew-y-12 opacity-80" />
      </div>

      {/* 🗺️ NAVBAR PREMIUM INTEGRADO */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform">
            <span className="text-black text-lg font-black">💎</span>
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            Diamond<span className="text-zinc-400 font-medium">Code</span>
          </span>
        </Link>

     <nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.id}
      href={`#${link.id}`}
      onClick={() => setActiveLink(link.name)}
      className={`text-sm font-semibold tracking-wide transition-all duration-200 py-1 border-b-2 ${
        activeLink === link.name
          ? "text-cyan-400 border-cyan-400"
          : "text-zinc-400 border-transparent hover:text-white"
      }`}
    >
      {link.name}
    </Link>
  ))}
</nav>
        
        <div className="hidden md:block w-32 text-right">
          <span className="text-xs text-zinc-600 font-mono">v1.0.2026</span>
        </div>
      </header>

      {/* 📝 CONTENIDO DE TEXTO ASIMÉTRICO */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl w-full flex-grow flex flex-col justify-center items-start text-left mb-16">
        
        <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Software a Medida
          </span>
        </div>

        <h1 className="text-5xl font-black tracking-tight sm:text-7xl leading-[1.05] max-w-3xl mb-6">
          <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Código tan valioso</span>
          <span className="inline-block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent px-4 py-2 bg-cyan-950/30 rounded-xl border border-cyan-500/10 shadow-inner">
            como un diamante
          </span>
        </h1>

        <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-10 font-medium">
          En DiamondCode, pulimos cada línea de código para transformarla en soluciones digitales potentes, eficientes y exclusivas que impulsan el crecimiento de tu negocio o startup.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Link 
            href="#projects" 
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 py-4 font-bold text-black hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group text-center text-sm tracking-wide"
          >
            Nube Serpiente: Nuestro Primer Proyecto <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          
          <Link 
            href="#contact" 
            className="w-full sm:w-auto rounded-full bg-black/40 border-2 border-zinc-700 hover:border-white px-8 py-3.5 font-bold text-zinc-300 hover:text-white transition-all duration-200 text-center text-sm tracking-wide bg-blend-soft-light backdrop-blur-sm"
          >
            Hablemos de tu idea
          </Link>
        </div>

      </div>

     
      
    </section>
  );
}