import { projects } from "@/data/projects";
import Image from "next/image";

export function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div
          key={p.title}
          className="group rounded-2xl overflow-hidden glass-pan glow-border hover-lift"
        >
          <div className="relative h-44 w-full bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20">
            {/* Placeholder image; replace in /public/projects */}
            <Image
              src={p.image}
              alt={p.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-cyan-100">
              {p.emoji ? `${p.emoji} ` : ""}
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-cyan-200/80">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-xs text-cyan-100 border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  className="text-sm px-3 py-1 rounded-md border border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/10"
                >
                  GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  className="text-sm px-3 py-1 rounded-md border border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/10"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
