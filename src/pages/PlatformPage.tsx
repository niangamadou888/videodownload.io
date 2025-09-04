import { useMemo } from "react";
import { motion } from "framer-motion";
import youtubeMarkdown from "../../youtube_video_downloader_page.markdown?raw";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentCard } from "@/components/sections/ContentCard";
import { CallToAction } from "@/components/sections/CallToAction";
import { Features } from "@/components/sections/Features";
import { HowToDownload } from "@/components/sections/HowToDownload";
import { WhyDownload } from "@/components/sections/WhyDownload";
import { FAQ } from "@/components/sections/FAQ";
import { parseMarkdown, type Section } from "@/types/markdown";

type PlatformPageProps = {
  platform: string;
};

function buildPlatformMarkdown(platform: string): string {
  const p = platform;
  let content = youtubeMarkdown;

  // Specific phrases first
  content = content.replace(/YouTube's/gi, `${p}'s`);
  content = content.replace(/YouTube videos/gi, `${p} videos`);
  content = content.replace(/YouTubers/gi, `${p} creators`);

  // General replacements
  content = content.replace(/\bYouTube\b/g, p);

  return content;
}

// Function to determine what type of section this is based on title/content
function getSectionType(section: Section): string {
  const title = section.title.toLowerCase();
  
  if (title.includes("features")) return "features";
  if (title.includes("how to download")) return "howto";
  if (title.includes("why download")) return "why";
  if (title.includes("who should")) return "who";
  if (title.includes("is it legal")) return "legal";
  if (title.includes("risks")) return "risks";
  if (title.includes("why use")) return "whyuse";
  if (title.includes("faq") || title.includes("questions")) return "faq";
  if (title.includes("start downloading")) return "cta";
  
  return "generic";
}

export default function PlatformPage({ platform }: PlatformPageProps) {
  const sections = useMemo(() => parseMarkdown(buildPlatformMarkdown(platform)), [platform]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 100,
        damping: 15
      } 
    }
  };

  // Get hero section (first H1)
  const heroSection = sections.length > 0 && sections[0].level === 1 ? sections[0] : null;
  
  // Get remaining sections
  const contentSections = heroSection 
    ? sections.filter((_, idx) => !(idx === 0 && sections[0].level === 1))
    : sections;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary)/0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        {heroSection && <HeroSection section={heroSection} />}

        {/* Content Sections with specialized components */}
        <div className="space-y-16">
          {contentSections.map((section, idx) => {
            const sectionType = getSectionType(section);
            
            switch (sectionType) {
              case "features":
                return <Features key={idx} section={section} />;
              case "howto":
                return <HowToDownload key={idx} section={section} />;
              case "why":
              case "who":
                return <WhyDownload key={idx} section={section} />;
              case "faq":
                return <FAQ key={idx} section={section} />;
              default:
                // Use the generic ContentCard in a motion container for anything else
                return (
                  <motion.div 
                    key={idx}
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                  >
                    <ContentCard section={section} variants={itemVariants} />
                  </motion.div>
                );
            }
          })}
        </div>
        
        {/* Call to Action */}
        <CallToAction buttonText="Start Downloading" href="#download" />
      </div>
    </div>
  );
}