import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  title?: string;
}>;

export function Section({ id, className, children, title }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className ?? ""}`}>
      {title ? (
        <h2 className="section-title mb-8 neon-text">{title}</h2>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
