import { motion } from "framer-motion";
import { type Section } from "@/types/markdown";

type HowToDownloadProps = {
  section: Section;
};

export function HowToDownload({ section }: HowToDownloadProps) {
  // Extract steps from content
  const steps = section.blocks
    .filter(block => block.type === "p")
    .map(block => {
      const html = block.html as string;
      // Check if the paragraph contains step information (bold text starting with "Step")
      const isStep = html.includes("<strong>Step");
      if (!isStep) return null;
      
      // Extract step number, title and content
      const stepMatch = html.match(/<strong>(Step \d+:) (.+?)<\/strong>/);
      if (!stepMatch) return null;
      
      const [, stepNumber, stepTitle] = stepMatch;
      const content = html.replace(/<strong>Step \d+: .+?<\/strong>/, "").trim();
      
      return { stepNumber, stepTitle, content };
    })
    .filter(Boolean);
  
  // Extract introduction paragraph (not a step)
  const introParagraph = section.blocks
    .find(block => block.type === "p" && !(block.html as string).includes("<strong>Step"));
  
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {section.title}
      </h2>
      
      {introParagraph && (
        <p 
          className="text-lg text-center mb-10 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: introParagraph.html as string }}
        />
      )}
      
      <div className="relative mt-16">
        {/* Vertical line connecting steps */}
        <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
        
        {/* Steps */}
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            className="flex gap-6 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-shrink-0 w-[45px] h-[45px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                <span className="text-primary">{step?.stepNumber}</span> {step?.stepTitle}
              </h3>
              <p 
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: step?.content || "" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
