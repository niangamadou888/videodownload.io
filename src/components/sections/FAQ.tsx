import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { type Section } from "@/types/markdown";

type FAQProps = {
  section: Section;
};

export function FAQ({ section }: FAQProps) {
  // Extract FAQ items from content
  // FAQ format assumes questions start with number and period (e.g., "1. Question")
  const faqItems = section.blocks
    .filter(block => block.type === "p")
    .reduce((items: {question: string, answer: string}[], block, idx, arr) => {
      const html = block.html as string;
      
      // Question pattern: starts with a number followed by period
      if (/^<strong>\d+\.\s/.test(html)) {
        // Extract question text
        const questionMatch = html.match(/<strong>(.+?)<\/strong>/);
        if (!questionMatch) return items;
        
        const question = questionMatch[1];
        const nextBlock = arr[idx + 1];
        const answer = nextBlock ? (nextBlock.html as string) : "";
        
        items.push({ question, answer });
      }
      
      return items;
    }, []);
  
  // Extract introduction paragraph (if any)
  const introParagraph = section.blocks.find(block => 
    block.type === "p" && 
    !(block.html as string).includes("<strong>1.")
  );
  
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {section.title}
      </h2>
      
      {introParagraph && (
        <p 
          className="text-lg text-center mb-10 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: introParagraph.html as string }}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-primary/10">
              <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
