"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isAssembled, setIsAssembled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Servicios", id: "servicios" }, // Ajustado al id corporativo correcto
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
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

    class Particle {
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

      constructor(cWidth: number, cHeight: number) {
        this.reset(cWidth, cHeight);
      }

      reset(cWidth: number, cHeight: number) {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = cWidth * (0.65 + Math.random() * 0.45);
        
        this.x = cWidth / 2 + Math.cos(this.angle) * this.radius;
        this.y = (cHeight * 0.4) + Math.sin(this.angle) * this.radius;
        
        this.size = isMobile ? (Math.random() * 2 + 0.6) : (Math.random() * 3.5 + 0.8);
        this.speed = Math.random() * 0.05 + 0.025;
        this.alpha = 0;
        
        const t = Math.random() * Math.PI * 2;
        const u = Math.random() + Math.random();
        const r = u > 1 ? 2 - u : u;
        
        this.targetX = (cWidth / 2) + (Math.cos(t) * r * (cWidth * 0.22));
        this.targetY = (cHeight * 0.32) + (Math.sin(t) * r * (cHeight * 0.22)) * 1.1;

        const colors = isMobile 
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

      draw(currentCtx: CanvasRenderingContext2D) {
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
        
        if (!isMobile) {
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
        particles.push(new Particle(canvas.width, canvas.height));
      }
      
      let timeline = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          p.update(timeline, canvas);
          p.draw(ctx);
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
      
      {/* 🔮 ILUMINACIONES DE ESTUDIO AJUSTADAS PARA NEGRO PURO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[25%] left-[5%] w-[450px] h-[450px] bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[30%] right-[10%] w-[550px] h-[550px] bg-cyan-400/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-indigo-600/[0.02] rounded-full blur-[130px] pointer-events-none" />

        {/* Malla de diseño estructural axial sutil */}
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

      {/* 🗺️ NAVBAR PREMIUM INTEGRADO A LOS EJES */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between border-b border-zinc-900/30">
        <Link href="/" className="flex items-center gap-3 group">
          <span 
            className="text-lg text-white tracking-tight"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            Diamond<span className="text-cyan-400 font-light">Code</span>
          </span>
        </Link>

        {/* Menú Desktop de Línea Fina */}
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
        </nav>
        
        {/* 🍔 BOTÓN HAMBURGUESA INTERACTIVO MÓVIL */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-40 relative focus:outline-none"
          aria-label="Abrir menú"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 transform origin-center ${isMenuOpen ? "rotate-45 translate-y-2 bg-cyan-400" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 transform origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-cyan-400" : ""}`} />
        </button>

        {/* 📱 MENÚ DESPLEGABLE MÓVIL PURE BLACK */}
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
          </nav>
        </div>

        <div className="hidden md:block w-24 text-right"></div>
      </header>

      {/* 📝 TEXTO PRINCIPAL DE COMPOSICIÓN ASIMÉTRICA */}
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

        {/* Botones Tipo Estudio (Bordes limpios y tipografía mono, sin curvas toscas) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            {/* NUEVO BOTÓN GANCHO DE EDUCACIÓN */}
<Link 
  href="/company/que_gano" 
  className="w-full sm:w-auto border border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/10 text-cyan-400 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 text-center shadow-[0_0_25px_rgba(6,182,212,0.05)]"
  style={{ fontFamily: "'DM Mono', monospace" }}
>
  ¿Por qué tu negocio necesita una web?
</Link>
          <Link 
            href="#projects" 
            className="w-full sm:w-auto border border-zinc-800 hover:border-cyan-400 bg-zinc-950 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 group text-center"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Proyectos{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200 text-cyan-400">
              →
            </span>
          </Link>
          
          <Link 
            href="#contact" 
            className="w-full sm:w-auto border border-transparent hover:border-zinc-900 bg-black text-zinc-500 hover:text-white px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-200 text-center"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Hablemos de tu idea
          </Link>
        </div>
      </div>
      {/* Botones Tipo Estudio (Bordes limpios y tipografía mono, sin curvas toscas) */}

    </section>
  );
}