// app/page.tsx
"use client";

import { useState } from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans min-h-screen selection:bg-cyan-500 selection:text-black">
      <main className="w-full">
        {/* Aquí se cargan todas tus secciones ordenadamente */}
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        
        {/* Chatbot controlado correctamente con sus props requeridas */}
        <div 
          className={`fixed inset-0 z-50 transition-all duration-300 flex justify-end ${
            isChatOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            onClick={() => setIsChatOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          <div 
            className={`relative w-full sm:w-[450px] h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl transition-transform duration-300 transform flex flex-col z-10 ${
              isChatOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      </main>
    </div>
  );
}