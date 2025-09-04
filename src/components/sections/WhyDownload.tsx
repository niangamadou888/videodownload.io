import { motion } from "framer-motion";
import { type Section } from "@/types/markdown";

type WhyDownloadProps = {
  section: Section;
};

export function WhyDownload({ section }: WhyDownloadProps) {
  // Extract bullet points from content
  const reasons = section.blocks.find(block => block.type === "ul")?.html as string[] || [];
  
  // Extract introduction paragraph
  const introParagraph = section.blocks.find(block => block.type === "p");
  
  return (
    <div className="py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {section.title}
      </h2>
      
      {introParagraph && (
        <p 
          className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: introParagraph.html as string }}
        />
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-6 border border-primary/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-base leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: reason }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
