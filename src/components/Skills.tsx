import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((cat) => (
        <div key={cat.category} className="rounded-2xl p-5 glass-pan glow-border">
          <h3 className="text-cyan-100 font-semibold mb-3">{cat.category}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-sm text-cyan-100 glow-border"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
