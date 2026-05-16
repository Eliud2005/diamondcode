// app/page.tsx
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans min-h-screen selection:bg-cyan-500 selection:text-black">
      <main className="w-full">
        {/* Aquí se cargan todas tus secciones ordenadamente */}
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}