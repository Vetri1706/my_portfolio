import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { social } from "@/data/social";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function NavBar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenPalette();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpenPalette]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between glass-pan glow-border rounded-b-2xl">
        <button
          onClick={() => scrollTo("hero")}
          className="text-cyan-200 font-semibold tracking-tight neon-text"
        >
          VK
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm text-cyan-100">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`hover:text-cyan-300 transition-colors ${
                active === s.id ? "text-cyan-300" : "text-cyan-100"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-cyan-200">
          <a href={social.github} aria-label="GitHub" className="hover:text-cyan-300">
            <FaGithub />
          </a>
          <a href={social.linkedin} aria-label="LinkedIn" className="hover:text-cyan-300">
            <FaLinkedin />
          </a>
          <a href={social.discord} aria-label="Discord" className="hover:text-cyan-300">
            <FaDiscord />
          </a>
          <button onClick={onOpenPalette} className="ml-2 text-xs px-2 py-1 rounded-md border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10">
            Ctrl+K
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
