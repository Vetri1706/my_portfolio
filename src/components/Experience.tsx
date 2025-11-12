import { experience } from "@/data/experience";

export function Experience() {
  return (
    <ol className="relative border-s border-cyan-400/30 ml-2 glass-pan glow-border p-6 rounded-2xl">
      {experience.map((e, idx) => (
        <li key={idx} className="mb-6 ms-4">
          <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -start-1.5 border border-white/30" />
          <h4 className="text-cyan-100 font-semibold">{e.title}</h4>
          {e.description && (
            <p className="text-sm text-cyan-200/70 mt-1">{e.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Experience;
