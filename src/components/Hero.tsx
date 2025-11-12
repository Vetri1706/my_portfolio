import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { social } from "@/data/social";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl glow-border bg-grid glass-pan p-6 md:p-10">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full gradient-anim opacity-50" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full gradient-anim opacity-50" />
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-cyan-100 neon-text"
        >
          Vetri Kalanjiyam
        </motion.h1>
        <div className="mt-4 text-xl md:text-2xl text-cyan-200">
          <TypeAnimation
            sequence={[
              "Gamer | Software Engineer | Cloud Builder",
              2000,
              "Software Engineer | Cloud Builder | Gamer",
              2000,
              "Cloud Builder | Gamer | Software Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="mt-6 max-w-2xl text-cyan-200/80">
          I’m a passionate Software Developer and Cloud Enthusiast exploring cutting-edge technology, game development, and scalable cloud architectures. I love building immersive projects that merge creativity and engineering.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-2 rounded-lg glow-border text-cyan-100 hover:bg-cyan-400/10">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-lg glow-border text-cyan-100 hover:bg-cyan-400/10">Contact Me</a>
          <a href={social.resume} className="px-5 py-2 rounded-lg glow-border text-cyan-100 hover:bg-cyan-400/10">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
