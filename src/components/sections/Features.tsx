import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { type Section } from "@/types/markdown";

type FeaturesProps = {
  section: Section;
};

export function Features({ section }: FeaturesProps) {
  // This component is specifically for the "Features" section
  
  const featureItems = section.blocks.find(block => block.type === "ul")?.html as string[] || [];
  
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {section.title}
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {section.blocks.map((block, i) => 
          block.type === "p" ? (
            <p key={i} className="text-lg text-center mb-10 text-muted-foreground" 
              dangerouslySetInnerHTML={{ __html: String(block.html) }} />
          ) : null
        )}
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {featureItems.map((feature, idx) => {
          // Extract feature title from the bold text
          const title = feature.match(/<strong>(.+?)<\/strong>/)?.[1] || "";
          // Remove the bold wrapper from the content
          const content = feature.replace(/<strong>(.+?)<\/strong>/, "").trim();
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {title}
                  </h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: content }} />
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
