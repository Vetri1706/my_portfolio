import { useState } from "react";
import NavBar from "@/components/NavBar";
import CommandPalette from "@/components/CommandPalette";
import { Section } from "@/components/Section";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";

const paletteItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <div className="min-h-screen text-cyan-100 relative">
      <Background />
      <NavBar onOpenPalette={() => setPaletteOpen(true)} />
      <main className="mx-auto max-w-6xl px-4">
        <Section id="hero" className="pt-28" title={undefined}>
          <Hero />
        </Section>
        <div className="mt-6 mb-2">
          <TechMarquee />
        </div>
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
        <Footer />
      </main>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} items={paletteItems} />
    </div>
  );
}
