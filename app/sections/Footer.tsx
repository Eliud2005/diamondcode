"use client";

import Link from "next/link";

// 💡 Declaramos el array de enlaces de la empresa de forma limpia
const COMPANY_LINKS = [
  { name: "Sobre nosotros", href: "/company/aboutus" },
  { name: "Misión", href: "/company/mision" },
  { name: "Visión", href: "/company/vision" },
];

const SOCIAL_LINKS = [
  { name: "GitHub ↗", href: "https://github.com/diamondcodemx" },
  { name: "LinkedIn ↗", href: "https://linkedin.com/in/eliudgh" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-[#06080f] via-[#0c1120] to-[#06080f] text-zinc-300 border-t border-zinc-900/80 py-16 relative overflow-hidden">
      
      {/* Esfera de luz ambiental cian para simular el reflejo del diamante en el suelo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* REJILLA PRINCIPAL: 3 Columnas en PC, 1 en Celular */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Branding de tu Startup */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tight">
              Diamond<span className="text-white font-medium">Code</span>
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs font-light">
              Desarrollamos soluciones de software pulidas, eficientes y a la medida para impulsar el futuro digital de tu negocio.
            </p>
          </div>

          {/* Columna 2: Apartado de Empresa mapeado dinámicamente */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-zinc-400 hover:text-cyan-400 font-medium transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales mapeadas dinámicamente */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Redes Sociales
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SOCIAL_LINKS.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-400 hover:text-cyan-400 font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* LINEA DIVISORIA INFERIOR Y DERECHOS DE AUTOR */}
        <div className="border-t border-zinc-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} DiamondCode. Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline text-zinc-800">|</span>
            
            {/* 💎 EFECTO DE DIAMANTE GIRATORIO INTEGRADO */}
            <p className="flex items-center gap-1.5 text-zinc-400 font-medium">
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
          
          <div className="flex gap-6 font-medium">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors duration-200">Aviso de Privacidad</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors duration-200">Términos de Servicio</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}