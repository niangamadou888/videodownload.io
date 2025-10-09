import type { ComponentType, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PlatformSubheader from "@/components/PlatformSubheader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Video as VideoIcon,
  Zap,
  Music,
  Monitor,
  ListChecks,
  Shield,
  Download,
  CheckCircle,
  AlertTriangle,
  EyeOff,
  FileX,
  Ban,
  AlertCircle,
} from "lucide-react";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaXTwitter,
  FaPinterest,
  FaLinkedin,
  FaRedditAlien,
  FaVimeoV,
} from "react-icons/fa6";
import { SiThreads } from "react-icons/si";
import { VideoDownloader } from "@/components/VideoDownloader";
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function FacebookPage() {
  const { buildUrl, currentLanguage } = useLanguageNavigation();

  // Temporary fix for buildUrl to ensure proper prefixing
  const buildFixedUrl = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${currentLanguage}${cleanPath}`;
  };

  usePageMeta({
    title: "Facebook Video Download | Free & HD",
    description: "Download Facebook videos, Reels, and Live streams in mp4, 1080p, HD quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a Facebook video, Reel, or Watch URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tools to Make Downloading Facebook Videos Easy
          </h2>
          <p className="text-muted-foreground mb-6">
            Here are six features that make videodownload.io the top choice for downloading Facebook videos. Each one is built to save time, ensure quality, and keep your experience safe and simple.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download Facebook Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Step-by-Step Guide to Save Videos Fast
          </h2>
          <p className="text-muted-foreground mb-6">
            Downloading Facebook videos with videodownload.io is simple and quick, even if you're not tech-savvy. Follow these four steps to get your video saved to your device in minutes.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Download Facebook Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download Facebook Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases for Offline Viewing and Use
            </h2>
            <p className="section-muted mb-4">
              Downloading Facebook videos lets you watch or repurpose content without needing an internet connection. It's great for saving data, archiving memories, or creating new content. Here are some top reasons to download Facebook videos for personal or professional use.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Viewing on the Go
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save videos to watch during commutes, flights, or in areas with no Wi-Fi or data, like rural spots or international trips.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content Creation
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download clips for reactions, edits, or montages for your own social media, as long as you follow copyright rules or get creator permission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Learning and Training
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save tutorials, webinars, or how-to videos for offline study, like cooking demos, fitness routines, or business tips.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Preserving Memories
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Keep family videos, event highlights, or group posts that might disappear if accounts are deleted or privacy settings change.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing and Business
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Businesses can download their own branded videos or live streams for offline use in presentations, ads, or client meetings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Saving Data Costs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download over Wi-Fi to avoid using mobile data, especially for long or high-quality videos on limited plans.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Entertainment
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Build a collection of funny clips, music videos, or live streams to enjoy offline during downtime or travel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Community Sharing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save videos from Facebook groups or pages for offline sharing in workshops, classes, or community events without internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading Facebook videos gives you flexibility to enjoy or use content whenever and wherever you need it, without relying on a connection.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download Facebook Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit from Offline Access
            </h2>
            <p className="section-muted mb-4">
              Downloading Facebook videos is helpful for anyone who wants to watch or use content offline. It's not just for casual users—specific groups can save time and effort by downloading. Here's who should consider it and why.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content Creators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencers, YouTubers, or TikTokers can download videos for reactions, collaborations, or edits, provided they respect copyright or get permission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Students and Educators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save educational content, like lectures, tutorials, or webinars, for offline study or classroom use, especially in low-connectivity areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Travelers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download entertainment, like viral clips or live streams, for offline viewing during trips with no internet access.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Business Owners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save your own branded videos, live streams, or ads for offline use in marketing, pitches, or client presentations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Memory Keepers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Preserve personal videos, family moments, or group posts that might vanish due to account changes or privacy settings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fitness Enthusiasts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download workout videos, yoga sessions, or health tips to follow along offline at home or in the gym.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Community Leaders
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save group videos or page content for offline sharing in meetings, events, or workshops without needing Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyists
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download videos for inspiration, like DIY projects or craft tutorials, to reference offline while working on hobbies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download Facebook Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Understanding the Legal Rules
            </h2>
            <p className="section-muted mb-4">
              Downloading Facebook videos is a complex topic. Facebook's Terms of Service don't allow downloading content without permission from the creator or platform. Under U.S. copyright law, saving copyrighted videos without approval is illegal and could lead to lawsuits, though this is rare for personal use. Exceptions include:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Public Domain Videos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Videos in the public domain, which aren't protected by copyright.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Creative Commons Licenses
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Videos under Creative Commons licenses, which may allow downloading for specific uses, like sharing or remixing, if you follow the terms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Creator Permission
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Videos where the creator explicitly permits downloads.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Fair Use Cases
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fair use cases, like downloading for education, commentary, or research, though this depends on how you use the video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Always check the video's description for its license or ask the creator for permission. Facebook's save feature lets you bookmark posts for personal viewing, which is a legal alternative. To stay safe, respect copyright rules and consider asking creators before downloading.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risks of Downloading Facebook Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers to Avoid When Downloading
            </h2>
            <p className="section-muted mb-4">
              Downloading Facebook videos can be super convenient, but it comes with risks if you use untrustworthy tools or ignore legal boundaries. Knowing these risks helps you protect your device and stay safe. Here are the main ones to watch out for.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware from Shady Sites"
              >
                Many download sites have fake buttons, pop-up ads, or hidden scripts <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">that install viruses or malware</a>. These can harm your device or steal data. Use trusted platforms like videodownload.io to avoid this.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Legal Issues">
                Downloading without permission breaks Facebook's rules and could lead to account bans or, in rare cases, legal action from copyright holders. Check the video's license first.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Poor-Quality Files"
              >
                Unreliable sites often deliver blurry or broken videos that don't play properly, wasting your time and storage space.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Risks">
              Sketchy sites may track your activity, collect personal info, or sell your data to third parties. Choose a tool that doesn't ask for unnecessary permissions.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Corrupted Downloads">
              Poorly designed sites might give you incomplete files that won't open, leaving you frustrated.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Ethical Concerns"
              >
                Downloading skips views or ads, which can hurt creators who rely on engagement for income. Support creators by watching online when possible.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Storage Overload"
              >
                Downloading many videos, especially in high quality, can fill up your device's storage quickly. Manage your downloads to avoid this.
              </FeatureCard>
            </div>
            <p className="section-muted">
            Using a secure, reputable tool like videodownload.io and respecting copyright rules can help you avoid these risks and download safely.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Use videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Your Trusted Choice for Facebook Downloads
            </h2>
            <p className="section-muted mb-4">
            We launched videodownload.io to provide a clean, fast, and secure way to download Facebook videos without the risks of shady websites. Our goal was to make downloading simple and safe for everyone. Here are six reasons to choose us.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Malware-Free and Secure">
              Our site has no pop-up ads, fake links, or harmful scripts, keeping your device safe from viruses or spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Easy to Use">
              Paste the link, click download, and you're done. No complicated steps or tech skills needed.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Fast Processing">
                Our servers handle videos quickly, delivering your downloads in seconds, even for live streams or group content.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexible Formats">
                Choose MP4 for videos or MP3 for audio, with quality options like 720p or 1080p to suit your needs.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completely Free">
                Download unlimited videos without paying anything. No subscriptions or hidden fees, ever.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacy Protection">
                We don't track your downloads, store your data, or share your info, so your activity stays private.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Common Questions About videodownload.io and Facebook Downloads
            </h2>
            <p className="section-muted mb-4">
              Here are answers to common questions about using videodownload.io to download Facebook videos, so you can start downloading with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Is videodownload.io free to use?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, our platform is 100% free. Download as many videos as you want with no fees or limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Do I need to install software to download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, everything works through your browser. No apps, extensions, or downloads are required, keeping it simple.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Can I download Facebook live streams or group videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, we support downloading live streams and group videos, as long as you have access to the content. Just paste the link.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Is videodownload.io safe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolutely. Our site is secure, with no pop-up ads or risky links. We prioritize your safety and test our platform regularly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Can I download high-quality videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, you can download in the highest quality available, like 720p or 1080p, based on the original Facebook video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. What if a video doesn't download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Check the URL and your internet connection. If it still fails, contact our support team, and we'll fix it quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Can I save just the audio from a Facebook video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, our MP3 feature lets you extract audio from any video, perfect for music, speeches, or clips.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Is downloading Facebook videos legal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  It depends. Facebook's rules prohibit downloading without permission. Videos in the public domain, under Creative Commons, or with creator approval are usually fine. Fair use might apply for education or commentary, but always check the license to stay safe.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Downloading Now
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Get Your Facebook Videos in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Fast and simple process
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Safe, malware-free downloads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                High-quality video and audio
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Facebook Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore More Downloaders
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download from your favorite platforms
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
              {[
                {
                  name: "YouTube",
                  Icon: FaYoutube,
                  color: "bg-[#FF0000]",
                  hex: "#FF0000",
                },
                {
                  name: "Instagram",
                  Icon: FaInstagram,
                  color:
                    "bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C]",
                  hex: "#C13584",
                },
                {
                  name: "TikTok",
                  Icon: FaTiktok,
                  color: "bg-[#000000]",
                  hex: "#000000",
                },
                {
                  name: "Facebook",
                  Icon: FaFacebook,
                  color: "bg-[#1877F2]",
                  hex: "#1877F2",
                },
                {
                  name: "Twitter",
                  Icon: FaXTwitter,
                  color: "bg-[#0f1419]",
                  hex: "#0f1419",
                },
                {
                  name: "Pinterest",
                  Icon: FaPinterest,
                  color: "bg-[#E60023]",
                  hex: "#E60023",
                },
                {
                  name: "LinkedIn",
                  Icon: FaLinkedin,
                  color: "bg-[#0A66C2]",
                  hex: "#0A66C2",
                },
                {
                  name: "Reddit",
                  Icon: FaRedditAlien,
                  color: "bg-[#FF4500]",
                  hex: "#FF4500",
                },
                {
                  name: "Vimeo",
                  Icon: FaVimeoV,
                  color: "bg-[#19B7EA]",
                  hex: "#19B7EA",
                },
                {
                  name: "Threads",
                  Icon: SiThreads,
                  color: "bg-[#000000]",
                  hex: "#000000",
                },
              ].map((p) => (
                <Link
                  key={p.name}
                  to={buildFixedUrl(`/${p.name.toLowerCase().replace(/\s+/g, "")}`)}
                  className="block h-full"
                >
                  <Card className="group glass-card p-4 h-24 sm:h-28 flex items-center hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-200 border border-primary/10 hover:border-primary/30 overflow-hidden relative">
                    <div className={`absolute inset-0 ${p.color} opacity-10`} />
                    <div
                      className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${p.color} blur-2xl opacity-20`}
                    />
                    <div className="flex items-center justify-between gap-3 relative z-10 w-full">
                      <div className="text-white font-medium text-sm md:text-base">
                        Download {p.name} Video
                      </div>
                      <div
                        className={`w-24 h-12 rounded-full ${p.color} flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110`}
                      >
                        <p.Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
  tone = "primary",
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
  tone?: "primary" | "accent" | "red" | "green";
}) {
  const toneClasses =
    tone === "accent"
      ? "bg-accent/20 text-accent"
      : tone === "red"
        ? "bg-red-500/20 text-red-500"
        : tone === "green"
          ? "bg-green-500/20 text-green-500"
          : "bg-primary/20 text-primary";
  return (
    <Card className="glass-card p-5 md:p-6 border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow ${toneClasses}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedFeatures() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
      <FeatureCard icon={VideoIcon} title="High-Quality Video Downloads">
        Pick from resolutions like 720p or 1080p, depending on what the Facebook video offers. Whether it's a live stream or a short clip, you can choose the best quality without dealing with complex settings.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Fast Download Speeds">
        Our servers grab Facebook videos quickly. Most downloads finish in under a minute, based on your internet speed and video length, so you're not stuck waiting.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio Extraction Option">
        Need just the sound? Convert Facebook videos to MP3 files with one click. Perfect for saving music, speeches, or podcast-style clips for offline use.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="No Software Needed">
        Download videos straight from our website using any browser on your phone, tablet, or computer. No apps or extra programs are required, keeping things clean and easy.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Support for Live and Group Videos">
        Save videos from Facebook posts, live streams, or private group content (if you have access). Just paste the link, and we'll handle the rest, even for unique content types.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Safe and Ad-Free Interface">
        Our site has no pop-up ads, fake buttons, or risky redirects. You get a clean, secure experience every time, so you can download without worrying about viruses.
      </FeatureCard>
    </div>
  );
}

// --- Enhanced Steps ---
function StepCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="glass-card p-5 md:p-6 border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">
            {step}
          </div>
          <div className="w-px grow bg-gradient-to-b from-accent/30 to-transparent mt-2" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedSteps() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
      <StepCard step={1} title="Copy the Facebook Video URL">
        <a href="http://www.facebook.com">Open Facebook</a> on your app or browser, find the video, live stream, or group post you want, and copy its URL. Click the three dots on the post and select "Copy Link" or grab the URL from the browser's address bar.
      </StepCard>
      <StepCard step={2} title="Paste the URL on Our Site">
        Go to videodownload.io in any browser. On our homepage, find the download bar and paste the copied Facebook link. Check the URL to make sure it's correct.
      </StepCard>
      <StepCard step={3} title="We Process the Video">
        Click the "Download" button. Our system will fetch the video and prepare it for you in seconds. Choose your format, like MP4 for video or MP3 for audio, and quality if prompted.
      </StepCard>
      <StepCard step={4} title="Save Your Facebook Video">
        When the download link appears, click it to save the video to your device. Rename the file if you want to keep your downloads organized for easy access later.
      </StepCard>
    </div>
  );
}
