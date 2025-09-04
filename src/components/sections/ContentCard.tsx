import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { type Section } from "@/types/markdown";

type ContentCardProps = {
  section: Section;
  variants: any;
};

export function ContentCard({ section, variants }: ContentCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(var(--primary)/0.2)] group h-full">
        <CardHeader className="pb-2">
          <CardTitle className={`${section.level === 1 ? 'text-3xl' : 'text-2xl'} font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-[1.01] transition-transform`}>
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {section.blocks.map((b, i) =>
            b.type === "p" ? (
              <p key={i} className="leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: String(b.html) }} />
            ) : (
              <ul key={i} className="list-disc list-outside pl-5 space-y-2">
                {(b.html as string[]).map((li, idx2) => (
                  <li key={idx2} className="leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: li }} />
                ))}
              </ul>
            )
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
