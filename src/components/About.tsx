import Image from "next/image";

export function About() {
  const stats = [
    { label: "Coding Level", value: 85, color: "bg-sky-400" },
    { label: "Cloud Expertise", value: 75, color: "bg-indigo-400" },
    { label: "Creativity", value: 90, color: "bg-emerald-400" },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1 flex justify-center">
  <div className="relative w-44 h-44 rounded-full border-2 border-sky-400/40 neon-glow overflow-hidden bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-emerald-500/20">
          <Image
            src="/WhatsApp Image 2025-11-12 at 21.36.38_60ab3da9.jpg"
            alt="Vetri Kalanjiyam profile picture"
            fill
            sizes="176px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="md:col-span-2 glass-pan glow-border p-6 rounded-2xl">
        <p className="text-cyan-200/80">
          I’m a passionate Software Developer and Cloud Enthusiast exploring cutting-edge technology, game development, and scalable cloud architectures. I love building immersive projects that merge creativity and engineering.
        </p>
        <div className="mt-6 space-y-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-sm mb-1 text-cyan-200/80">
                <span>{s.label}</span>
                <span>{s.value}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full ${s.color}`} style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
