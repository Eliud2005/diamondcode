// app/page.tsx
"use client";

import { useState } from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Chatbot from "./components/Chatbot";
import FAQ from "./sections/Faq";
import Navbar from "./sections/Navbar";  // ← único cambio: ./sections/ → ./components/

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <main className="w-full">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <FAQ />
        <Footer />

        <div
          className={`fixed inset-0 z-50 transition-all duration-300 flex justify-end ${
            isChatOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            onClick={() => setIsChatOpen(false)}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
          />

          <div
            className={`relative w-full sm:w-[450px] h-full bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 transform flex flex-col z-10 ${
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