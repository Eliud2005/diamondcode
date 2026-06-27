"use client";

import Link from "next/link";

const COMPANY_LINKS = [
  { name: "Sobre nosotros", href: "/company/aboutus" },
  { name: "Misión", href: "/company/mision" },
  { name: "Visión", href: "/company/vision" },
];

const SOCIAL_LINKS = [
  { name: "GitHub // ↗", href: "https://github.com/diamondcodemx" },
  { name: "LinkedIn // ↗", href: "https://linkedin.com/in/eliudgh" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-zinc-400 border-t border-zinc-900 py-24 relative overflow-hidden">
      
      {/* 🔮 ILUMINACIÓN AMBIENTAL DE SUELO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-cyan-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* REJILLA PRINCIPAL INTEGRADA AL SISTEMA AXIAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-900/40 border border-zinc-900/60 mb-16">
          
          {/* Bloque 1: Branding Corporativo */}
          <div className="md:col-span-6 bg-black p-8 lg:p-12 flex flex-col gap-4">
            <span 
              className="text-xl text-white tracking-tight"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              Diamond<span className="text-cyan-400 font-light">Code</span>
            </span>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm font-light">
              Desarrollamos soluciones de software pulidas, eficientes y a la medida para impulsar el futuro digital de tu negocio bajo estándares de precisión quirúrgica.
            </p>
          </div>

          {/* Bloque 2: Navegación Empresa */}
          <div className="md:col-span-3 bg-black p-8 lg:p-12">
            <h4 
              className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              01 // Empresa
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {COMPANY_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloque 3: Conexiones / Redes */}
          <div className="md:col-span-3 bg-black p-8 lg:p-12">
            <h4 
              className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              02 // Conexiones
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-400 hover:text-cyan-400 transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* LÍNEA DE CRÉDITOS Y CONTROL LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-light tracking-wide text-zinc-600 border-t border-zinc-900/40 pt-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p style={{ fontFamily: "'DM Mono', monospace" }}>
              &copy; {new Date().getFullYear()} DIAMONDCODE. ALL RIGHTS RESERVED.
            </p>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-zinc-400 transition-colors duration-200">Aviso de Privacidad</Link>
              <Link href="/terms" className="hover:text-zinc-400 transition-colors duration-200">Términos</Link>
            </div>
          </div>
          
          {/* 💎 EFECTO DE DIAMANTE GIRATORIO RESTAURADO */}
          <p className="flex items-center gap-1.5 text-zinc-400 font-medium text-xs">
            Hecho con{" "}
            <span className="inline-block animate-[spin_4s_linear_infinite] origin-center text-[13px] select-none filter drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]">
              💎
            </span>{" "}
            por{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold tracking-wide">
              DiamondCode
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}