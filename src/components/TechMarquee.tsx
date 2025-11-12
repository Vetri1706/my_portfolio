export default function TechMarquee() {
  const items = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Streamlit",
    "AWS",
    "Docker",
    "Firebase",
    "GitHub Actions",
    "UE5",
    "Blender",
  ];

  return (
    <div className="overflow-hidden w-full py-3 border-t border-b border-white/10 glass-pan rounded-xl">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-sm text-sky-100/80">
            • {t}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}
