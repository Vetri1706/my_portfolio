export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base animated gradient */}
      <div className="absolute inset-0 animated-gradient" />
      {/* dot grid with soft fade edges */}
      <div className="absolute inset-0 bg-dots fade-edges opacity-40" />
      {/* subtle spotlight near top center */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[60vw] h-[40vh] spotlight opacity-60" />
    </div>
  );
}
