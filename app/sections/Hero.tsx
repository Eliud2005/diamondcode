"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("Inicio");
  const [isAssembled, setIsAssembled] = useState(false);
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth > 640 ? 700 : 350;
      canvas.height = window.innerWidth > 640 ? 700 : 350;
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
        
        // Tamaños ligeramente más variados para mayor profundidad dimensional
        this.size = Math.random() * 3.5 + 0.8;
        // Velocidad de rotación ligeramente aumentada para mayor dinamismo
        this.speed = Math.random() * 0.05 + 0.025;
        this.alpha = 0;
        
        const t = Math.random() * Math.PI * 2;
        const u = Math.random() + Math.random();
        const r = u > 1 ? 2 - u : u;
        
        this.targetX = (cWidth / 2) + (Math.cos(t) * r * (cWidth * 0.22));
        this.targetY = (cHeight * 0.32) + (Math.sin(t) * r * (cHeight * 0.22)) * 1.1;

        const colors = ["#22d3ee", "#06b6d4", "#0891b2", "#3b82f6", "#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(timeline: number, currentCanvas: HTMLCanvasElement) {
        // 🔥 EXTENSIÓN: La Fase 1 ahora dura hasta el frame 110 para mayor suspenso visual
        if (timeline < 110) {
          this.angle += this.speed;
          this.radius -= (this.radius - 35) * 0.025; // Contracción centrípeta fluida
          this.x = currentCanvas.width / 2 + Math.cos(this.angle) * this.radius;
          this.y = (currentCanvas.height * 0.35) + Math.sin(this.angle) * this.radius;
          if (this.alpha < 1) this.alpha += 0.04;
        } 
        // Fase 2: Magnetización violenta hacia la estructura molecular del diamante
        else if (timeline >= 110 && timeline < 155) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          this.x += dx * 0.14; // Atracción de gravedad acelerada
          this.y += dy * 0.14;
        } 
        // Fase 3: Disolución óptica limpia
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
        
        currentCtx.shadowBlur = 12;
        currentCtx.shadowColor = "#06b6d4";
        currentCtx.fill();
        currentCtx.restore();
      }
    }

    const initEffect = () => {
      setIsAssembled(false);
      particles = [];
      // 🔥 DENSIDAD: Subimos de 140 a 260 partículas para un vórtice imponente
      for (let i = 0; i < 260; i++) {
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

        // Sincronizado: El logo sólido se revela justo en el punto de máxima cohesión
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
    <section id="inicio" className="relative w-full h-screen bg-[#030303] text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex flex-col justify-between">
      
      {/* 🔮 CAPAS DE FONDO DE ALTO CONTRASTE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[35%] right-[10%] w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Malla de Ingeniería de fondo */}
        <div className="absolute right-[5%] top-[25%] w-[500px] h-[500px] bg-[linear-gradient(to_right,#0c1a24_1px,transparent_1px),linear-gradient(to_bottom,#0c1a24_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* 💎 CONTENEDOR ANIDADO DE RENDERIZADO */}
        <div className="absolute right-[-5%] sm:right-[5%] top-[22%] sm:top-[16%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] flex items-start justify-center pointer-events-none select-none">
          
          {/* Canvas dinámico */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-10 mix-blend-screen"
          />

          {/* Imagen del Diamante */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="../assets/images/logo.png" 
            alt="Diamond Render" 
            className={`w-full h-auto object-contain transition-all duration-700 ease-out 
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

        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-zinc-900/40 to-transparent skew-x-12 blur-sm opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-48 bg-gradient-to-tr from-zinc-950 to-transparent -skew-y-12 opacity-80" />
      </div>

      {/* 🗺️ NAVBAR */}
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