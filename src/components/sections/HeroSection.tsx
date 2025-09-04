import { motion } from "framer-motion";
import { type Section } from "@/types/markdown";

type HeroSectionProps = {
  section: Section;
};

export function HeroSection({ section }: HeroSectionProps) {
  return (
    <motion.div 
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(var(--primary)/0.15),transparent_70%)] blur-3xl -z-10"></div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-sm">
        {section.title}
      </h1>
      <div className="max-w-3xl mx-auto">
        {section.blocks.map((b, i) => (
          b.type === "p" ? (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: String(b.html) }} />
          ) : (
            <ul key={i} className="mt-6 space-y-3 text-left list-disc list-outside pl-6 text-muted-foreground">
              {(b.html as string[]).map((li, idx) => (
                <li key={idx} className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: li }} />
              ))}
            </ul>
          )
        ))}
      </div>
    </motion.div>
  );
}
