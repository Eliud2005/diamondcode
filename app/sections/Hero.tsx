"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";
import Chatbot from "../components/Chatbot";

// 🔹 Tipo explícito para las partículas fuera del Hook
interface IParticle {
  x: number;
  y: number;
  alpha: number;
  size: number;
  speed: number;
  angle: number;
  radius: number;
  targetX: number;
  targetY: number;
  color: string;
  reset: (cWidth: number, cHeight: number, isMobile: boolean) => void;
  update: (timeline: number, currentCanvas: HTMLCanvasElement) => void;
  draw: (currentCtx: CanvasRenderingContext2D, isMobile: boolean) => void;
}

export default function Hero() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isAssembled, setIsAssembled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Servicios", id: "servicios" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: IParticle[] = [];
    let cycleTimeout: NodeJS.Timeout;
    let isMobile = false;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      isMobile = width <= 640;
      canvas.width = isMobile ? 350 : 700;
      canvas.height = isMobile ? 350 : 700;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle implements IParticle {
      x: number = 0;
      y: number = 0;
      alpha: number = 0;
      size: number = 0;
      speed: number = 0;
      angle: number = 0;
      radius: number = 0;
      targetX: number = 0;
      targetY: number = 0;
      color: string = "";

      constructor(cWidth: number, cHeight: number, mobileFlag: boolean) {
        this.reset(cWidth, cHeight, mobileFlag);
      }

      reset(cWidth: number, cHeight: number, mobileFlag: boolean) {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = cWidth * (0.65 + Math.random() * 0.45);
        
        this.x = cWidth / 2 + Math.cos(this.angle) * this.radius;
        this.y = (cHeight * 0.4) + Math.sin(this.angle) * this.radius;
        
        this.size = mobileFlag ? (Math.random() * 2 + 0.6) : (Math.random() * 3.5 + 0.8);
        this.speed = Math.random() * 0.05 + 0.025;
        this.alpha = 0;
        
        const t = Math.random() * Math.PI * 2;
        const u = Math.random() + Math.random();
        const r = u > 1 ? 2 - u : u;
        
        this.targetX = (cWidth / 2) + (Math.cos(t) * r * (cWidth * 0.22));
        this.targetY = (cHeight * 0.32) + (Math.sin(t) * r * (cHeight * 0.22)) * 1.1;

        const colors = mobileFlag 
          ? ["#ffffff", "#22d3ee", "#06b6d4", "#ffffff"] 
          : ["#22d3ee", "#06b6d4", "#0891b2", "#3b82f6", "#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(timeline: number, currentCanvas: HTMLCanvasElement) {
        if (timeline < 110) {
          this.angle += this.speed;
          this.radius -= (this.radius - 35) * 0.025;
          this.x = currentCanvas.width / 2 + Math.cos(this.angle) * this.radius;
          this.y = (currentCanvas.height * 0.35) + Math.sin(this.angle) * this.radius;
          if (this.alpha < 1) this.alpha += 0.04;
        } 
        else if (timeline >= 110 && timeline < 155) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          this.x += dx * 0.14;
          this.y += dy * 0.14;
        } 
        else {
          this.alpha -= 0.04;
        }
      }

      draw(currentCtx: CanvasRenderingContext2D, mobileFlag: boolean) {
        if (this.alpha <= 0) return;
        currentCtx.save();
        currentCtx.globalAlpha = this.alpha;
        currentCtx.fillStyle = this.color;
        
        currentCtx.beginPath();
        currentCtx.moveTo(this.x, this.y - this.size);
        currentCtx.lineTo(this.x + this.size, this.y);
        currentCtx.lineTo(this.x, this.y + this.size);
        currentCtx.lineTo(this.x - this.size, this.y);
        currentCtx.closePath();
        
        if (!mobileFlag) {
          currentCtx.shadowBlur = 12;
          currentCtx.shadowColor = "#06b6d4";
        }
        
        currentCtx.fill();
        currentCtx.restore();
      }
    }

    const initEffect = () => {
      setIsAssembled(false);
      particles = [];
      const totalParticles = isMobile ? 120 : 260;
      
      for (let i = 0; i < totalParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height, isMobile));
      }
      
      let timeline = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          p.update(timeline, canvas);
          p.draw(ctx, isMobile);
        });

        timeline++;

        if (timeline === 145) {
          setIsAssembled(true);
        }

        if (timeline < 190) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };
      animate();
    };

    initEffect();

    const runCycle = () => {
      cycleTimeout = setTimeout(() => {
        initEffect();
        runCycle();
      }, 15000);
    };
    runCycle();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(cycleTimeout);
    };
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex flex-col justify-between">
      
      {/* 🔮 ILUMINACIONES DE ESTUDIO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[25%] left-[5%] w-[450px] h-[450px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[30%] right-[10%] w-[550px] h-[550px] bg-cyan-400/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-indigo-600/[0.02] rounded-full blur-[130px] pointer-events-none" />

        <div className="absolute right-[5%] top-[25%] w-[500px] h-[500px] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="absolute right-[-5%] sm:right-[5%] top-[22%] sm:top-[16%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] flex items-start justify-center pointer-events-none select-none will-change-transform">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-10 mix-blend-screen will-change-transform"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="../assets/images/logo.png" 
            alt="Diamond Render" 
            className={`w-full h-auto object-contain transition-all duration-700 ease-out will-change-transform 
              ${isAssembled 
                ? "opacity-100 scale-100 blur-0 drop-shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-[bounce_6s_infinite]" 
                : "opacity-0 scale-95 blur-md drop-shadow-[0_0_0px_rgba(0,0,0,0)]"
              }
              mix-blend-screen 
              [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_30%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0)_100%)]
              [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_30%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0)_100%)]`
            }
          />
        </div>
      </div>

      {/* 🗺️ NAVBAR */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between border-b border-zinc-900/30">
        <Link href="/" className="flex items-center gap-3 group">
          <span 
            className="text-lg text-white tracking-tight"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            Diamond<span className="text-cyan-400 font-light">Code</span>
          </span>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8 bg-zinc-950/20 border border-zinc-900/60 px-8 py-2.5 rounded-none backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.name)}
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 py-1 ${
                activeLink === link.name
                  ? "text-cyan-400"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-3 w-px bg-zinc-800" />

          {/* Botón Asistente Virtual en Navbar */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="text-[10px] tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer group"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            Asistente Virtual
          </button>
        </nav>
        
        {/* Hamburguesa Móvil */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-40 relative focus:outline-none"
          aria-label="Abrir menú"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 transform origin-center ${isMenuOpen ? "rotate-45 translate-y-2 bg-cyan-400" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 transform origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-cyan-400" : ""}`} />
        </button>

        {/* Menú Móvil */}
        <div className={`fixed inset-0 bg-black z-30 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}>
          <nav className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-xl tracking-[0.2em] uppercase transition-colors ${
                  activeLink === link.name ? "text-cyan-400" : "text-zinc-600 hover:text-white"
                }`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsChatOpen(true);
              }}
              className="mt-4 text-sm tracking-[0.2em] uppercase text-cyan-400 border border-cyan-500/40 px-6 py-3 flex items-center gap-3 bg-cyan-950/20"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <MessageSquare className="w-4 h-4" />
              Asistente Virtual
            </button>
          </nav>
        </div>
      </header>

      {/* 📝 CONTENIDO PRINCIPAL DEL HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center items-start text-left mb-24">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-cyan-500/50" />
          <span className="text-xs tracking-[0.25em] uppercase text-cyan-400" style={{ fontFamily: "'DM Mono', monospace" }}>
            Desarrollo web
          </span>
        </div>

        <h1 
          className="text-4xl sm:text-6xl md:text-7xl leading-[1.1] text-white tracking-tight max-w-4xl mb-8"
          style={{ fontFamily: "'Tenor Sans', sans-serif", fontWeight: 400 }}
        >
          Código tan valioso
          <br />
          como un diamante.
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-12 font-light">
          Pulimos cada línea de desarrollo para transformarla en productos digitales potentes, eficientes y de interfaz ultra-premium que escalan tu negocio bajo estándares de precisión matemática.
        </p>

        {/* 🚀 BOTONERA OPTIMIZADA CON ASISTENTE VIRTUAL */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Link 
            href="/company/que_gano" 
            className="w-full sm:w-auto border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/10 text-cyan-400 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 text-center shadow-[0_0_25px_rgba(6,182,212,0.05)]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            ¿Por qué tu negocio necesita una web?
          </Link>

          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-full sm:w-auto border border-zinc-800 hover:border-cyan-400 bg-zinc-950 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            Asistente Virtual
          </button>
          
          <Link 
            href="#projects" 
            className="w-full sm:w-auto border border-transparent hover:border-zinc-900 bg-black text-zinc-500 hover:text-white px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-200 text-center"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Proyectos →
          </Link>
        </div>
      </div>

      {/* 💻 LLAMADA DIRECTA AL COMPONENTE CHATBOT (Él maneja su propia estructura y visibilidad) */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* 🟢 WHATSAPP FLOTANTE MEJORADO (ESQUINA INFERIOR DERECHA) */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3 group">
        <span 
          className="hidden sm:inline-block bg-zinc-950/95 border border-emerald-500/40 text-emerald-400 text-[10px] tracking-[0.2em] uppercase px-4 py-2 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-[0_5px_20px_rgba(0,0,0,0.8)] pointer-events-none whitespace-nowrap select-none font-mono"
        >
          chat directo vía whatsapp
        </span>

        <a
          href="https://wa.me/522224264941?text=Hola%20DiamondCode,%20me%20interesa%20cotizar%20un%20proyecto%20web."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-zinc-950 border-2 border-emerald-500/60 text-emerald-400 hover:text-emerald-300 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
        >
          <span className="absolute inset-0 rounded-2xl border border-emerald-400/50 animate-ping opacity-25 pointer-events-none" />
          
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </span>
          
          <svg
            className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover/btn:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

    </section>
  );
}