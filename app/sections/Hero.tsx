"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isAssembled, setIsAssembled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 Estado para el menú móvil
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Servicios", id: "services" },
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
    <section id="inicio" className="relative w-full h-screen bg-[#0a0d14] text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex flex-col justify-between">
      
      {/* 🔮 CAPAS DE FONDO DE ALTO CONTRASTE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[35%] right-[10%] w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="absolute right-[5%] top-[25%] w-[500px] h-[500px] bg-[linear-gradient(to_right,#0c1a24_1px,transparent_1px),linear-gradient(to_bottom,#0c1a24_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

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
                ? "opacity-100 scale-100 blur-0 drop-shadow-[0_0_50px_rgba(6,182,212,0.45)] animate-[bounce_6s_infinite]" 
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
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform">
            <span className="text-black text-lg font-black">💎</span>
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            Diamond<span className="text-zinc-400 font-medium">Code</span>
          </span>
        </Link>

        {/* Menu Desktop */}
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
        
        {/* 🍔 BOTÓN HAMBURGUESA INTERACTIVO MÓVIL */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-40 relative focus:outline-none"
          aria-label="Abrir menú"
        >
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform origin-center ${isMenuOpen ? "rotate-45 translate-y-2 bg-cyan-400" : ""}`} />
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-cyan-400" : ""}`} />
        </button>

        {/* 📱 MENÚ DESPLEGABLE MÓVIL */}
        <div className={`fixed inset-0 bg-[#0a0d14]/98 backdrop-blur-xl z-30 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}>
          <nav className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false); // Cierra el menú al hacer clic
                }}
                className={`text-2xl font-bold tracking-wider transition-colors ${
                  activeLink === link.name ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block w-32 text-right"></div>
      </header>

      {/* 📝 TEXTO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl w-full flex-grow flex flex-col justify-center items-start text-left mb-16">
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl leading-[1.05] max-w-3xl mb-6">
          <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Código tan valioso</span>
          <span className="inline-block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent px-4 py-2 bg-cyan-950/30 rounded-xl border border-cyan-500/10 shadow-inner">
            como un diamante
          </span>
        </h1>

        <p className="mt-2 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-10 font-medium">
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