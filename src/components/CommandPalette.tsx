import { useEffect, useMemo, useRef, useState } from "react";

type Item = { id: string; label: string };

export function CommandPalette({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: Item[];
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") setIndex((i) => Math.min(i + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Enter") {
        const item = filtered[index];
        if (item) {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(q));
  }, [items, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-start justify-center pt-24">
      <div className="w-full max-w-xl rounded-xl border border-cyan-400/30 neon-glow glass">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="text-cyan-300 text-sm">Jump to…</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section name"
            className="flex-1 bg-transparent outline-none text-cyan-100 placeholder:text-cyan-200/50"
          />
        </div>
        <ul ref={listRef} className="max-h-80 overflow-y-auto py-2">
          {filtered.map((i, idx) => (
            <li key={i.id}>
              <button
                onClick={() => {
                  document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth" });
                  onClose();
                }}
                className={`w-full text-left px-4 py-2 text-cyan-100 hover:bg-cyan-400/10 ${
                  idx === index ? "bg-cyan-400/10" : ""
                }`}
              >
                {i.label}
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-cyan-200/60">No matches</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
