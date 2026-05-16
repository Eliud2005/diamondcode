// app/sections/Footer.tsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* REJILLA PRINCIPAL: 3 Columnas en PC, 1 en Celular */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Branding de tu Startup */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              DiamondCode
            </span>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Desarrollamos soluciones de software pulidas, eficientes y a la medida para impulsar el futuro digital de tu negocio.
            </p>
          </div>

          {/* Columna 2: Apartado de Empresa */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-cyan-400 transition-colors">
                  Blog corporativo
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-cyan-400 transition-colors">
                  Misión y Visión
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-widest mb-4">
              Redes Sociales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://github.com/Eliud2005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  Twitter / X ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* LINEA DIVISORIA INFERIOR Y DERECHOS DE AUTOR */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} DiamondCode. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
           <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Aviso de Privacidad</Link>
          <Link href="/terms" className="hover:text-zinc-400 transition-colors">Términos de Servicio</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}