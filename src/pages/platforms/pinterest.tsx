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

export default function PinterestPage() {
  const { buildUrl, currentLanguage } = useLanguageNavigation();

  // Temporary fix for buildUrl to ensure proper prefixing
  const buildFixedUrl = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${currentLanguage}${cleanPath}`;
  };

  usePageMeta({
    title: "Pinterest Video Download | Free & HD",
    description: "Download Pinterest videos and pins in mp4, 1080p quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Pinterest Video
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a Pinterest video or pin URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Pinterest Videos Easily
          </h2>
          <p className="text-muted-foreground mb-6">
            Your Simple Guide to Saving Creative Clips Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download Pinterest Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Clear, Step-by-Step Guide to Save Videos Effortlessly
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting Pinterest videos onto your device is simple with
            videodownload.io. Follow these four straightforward steps to
            download any video in minutes. Each step is designed to be
            intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Download Pinterest Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download Pinterest Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases
            </h2>
            <p className="section-muted mb-4">
              Pinterest is a goldmine for inspiration, but its feed moves fast, and pins can disappear. Downloading lets you keep the videos that spark ideas, turning fleeting finds into a personal collection. It's about saving what fuels your creativity or plans, not just hoarding content. You control your stash, safe from deleted pins or app glitches.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Viewing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save DIY tutorials or travel guides for trips with no Wi-Fi, like camping or long flights. Parents download kid-friendly craft videos for rainy days, keeping kids busy without internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Repurposing for Creators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bloggers save decor clips to remix into their own content, adding tips or tweaks. Small businesses grab product demos to share on other platforms, skipping watermarks for clean edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiving Your Own Pins
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you post videos, they can vanish from board changes or platform issues. Download them to a drive to protect your work, like a recipe you shared or a portfolio piece.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Learning and Planning
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students save art tutorials or study tips for offline practice. Event planners download wedding or party ideas to show clients, no need to search again.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Personal Projects
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save gardening tips for spring planting or workout routines for daily use. Turn a quick pin into a go-to resource for your next big idea.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading Pinterest videos offers flexibility and convenience,
              making it easier to enjoy content on your terms, whether for fun,
              work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download Pinterest Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Downloading
            </h2>
            <p className="section-muted mb-4">
              Pinterest is all about ideas, but downloading videos fits people who turn those ideas into action. It's for those who use the platform to create, plan, or learn, not just browse for fun. If you're saving clips to make something real, downloading is your tool.
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
                    Bloggers and influencers save DIY or style videos to remix for their audience, like a fashion vlogger tweaking a look from a pin. They download their own posts too, keeping clean copies without logos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyists and DIYers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Crafters save knitting or painting tutorials to follow step-by-step at home. Gardeners download planting guides to check while digging. It's hands-on inspiration, offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Event Planners and Small Businesses
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wedding planners save decor clips to pitch clients. Shops grab product videos to feature on websites or ads, building trust without watermarks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Parents and Educators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Teachers save craft demos for classroom projects. Moms download sensory play videos for toddlers, ready for screen-free days.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Homeowners and Renovators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save kitchen remodel tips or furniture hacks to plan upgrades. Even casual users download motivational clips, like vision board ideas, to keep dreams in focus.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading Pinterest videos can
              save time, data, and effort while keeping your favorite content
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download Pinterest Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Videos are copyrighted by their creators under laws like the DMCA in the US. Saving for private viewing, like practicing a craft offline, often counts as fair use. But sharing without credit or using for profit can lead to legal trouble. Music or voiceovers in videos may have extra copyright layers, though short personal saves rarely face issues.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    When It's Allowed
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If the creator allows downloads or the content is public domain, you're safe. Educational use, like showing a tutorial in class, often qualifies as fair use. Check pin descriptions for permissions. Keep downloads private and credit creators if you share to stay on the right side.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading Pinterest Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Third-party downloaders sound convenient, but sketchy ones bring real trouble. Not every site is safe, and clicking blindly can mess up your device or data. Know the risks before you download to avoid headaches later.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Shady sites hide viruses in video files, sneaking in spyware or ransomware. One bad download can lock your files or steal passwords. Some tools have been caught with keyloggers, turning a craft clip into a privacy mess.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download pages mimic Pinterest's login, grabbing your credentials if you fall for it. Or ads push "updates" that install trackers, watching your activity beyond the platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Quality Issues"
              >
                Bad sites compress videos, causing choppy playback or lost audio. You wanted a clear tutorial, but get a glitchy file instead.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Leaks">
                Some sites log your downloads, selling your IP or video choices to advertisers. Hackers could snag that data, leading to spam or targeted scams.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Pinterest Bans">
                Heavy use of third-party tools can flag your account, especially for creators. You could lose your boards or followers overnight.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Storage Overload"
              >
                Saving lots of videos eats space, bogging down phones or drives. Corrupted files might crash players, wasting time to fix.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Stick to trusted sites, scan downloads, and use VPNs to stay safe.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Use videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Your Trusted Partner for Pinterest Downloads
            </h2>
            <p className="section-muted mb-4">
              We started videodownload.io in 2022 because we were fed up with buggy apps and risky sites. As Pinterest users, we wanted a fast, clean way to save videos without drama. We're a small team, not a big company, focused on making downloads easy and secure. Millions of users trust us with no data breaches, and we keep tweaking based on their feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Under Five Seconds">
                Downloads complete even on busy days.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="No Ads or Pop-ups">
                Just a simple interface.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermarks Removed">
                Clean, usable clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimited Saves">
                No daily caps.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Works on Any Device">
                From old tablets to new laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Secure Setup">
                No data stored after you're done.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Common Questions About Pinterest Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using
              videodownload.io and downloading Pinterest videos to help you get
              started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download videos from private Pinterest boards?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we only support public pins. Private or secret board videos need creator permission, and we respect those boundaries to stay legit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Will downloading slow my phone or computer?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Our files are clean and light, so no lag. But saving lots of videos can fill storage, so manage your space carefully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Why is my downloaded video watermark-free?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest adds logos to track shares, but we pull the raw file and clean it up, giving you a clear video for personal use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I save just the audio from a Pinterest video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, choose MP3 after pasting the link. Great for grabbing music or voiceovers from tutorials without the visuals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  What if my download doesn't start?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ensure the link is public and starts with pinterest.com. Try another browser or clear cache. Our support chat fixes issues fast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Is there a limit on video length?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We handle videos up to 60 minutes, though most Pinterest clips are short. Longer ones take a bit but download fully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Do you keep my downloaded videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No way. We process instantly and delete everything after. Your files stay on your device, not our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can creators see if I downloaded their video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest doesn't notify them. Your download stays private, with no alerts to the poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Saving Pinterest Videos Now
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Grab Your Inspiration Clips in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy Pinterest Pin Link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Paste on Our Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download Clean Video
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Pinterest Video
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
      <FeatureCard icon={VideoIcon} title="Top-Notch Video Quality">
        Save Pinterest videos in their best resolution, up to 1080p if the original pin supports it. No blurry visuals or faded colors when you watch later. We pull the file straight from Pinterest's servers, keeping every detail sharp for that DIY tutorial or recipe clip.
      </FeatureCard>
      <FeatureCard icon={Zap} title="No Watermarks or Overlays">
        <a href="https://help.pinterest.com/en/article/download-an-image">Pinterest displays the creator's username on videos downloaded through their app</a>, cluttering the view. We strip all that away, delivering a clean clip ready for your projects or personal use. Watch that home decor idea without text blocking the details.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Works on Any Device">
        Use your phone, tablet, laptop, or desktop, and it runs smoothly. No apps or extra software needed. Just open our site in your browser, paste the link, and download. Tested on everything from old iPhones to new PCs, it's always hassle-free.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Fast Download Speeds">
        Waiting stinks. Our tool grabs Pinterest videos in seconds, usually under 10 for most clips. We use servers close to Pinterest's for quick pulls, so you can save a craft video or workout routine during a coffee break.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completely Free to Use">
        No costs, no sign-ups, no hidden fees. Download as many videos as you want, every day, without limits. We keep it free so you can save that wedding inspo or art project clip without hitting a paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Safe and Private Process">
        Your info stays secure. We don't store your links or videos after you download. No tracking, no logs, and no spammy ads. The process is clean, keeping your device free from junk or risks.
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
      <StepCard step={1} title="Copy the Video Link from Pinterest">
        <a href="http://www.pinterest.com">Open Pinterest</a> on your phone or browser. Find the video you love, like a knitting tutorial or a home makeover clip. Click the three dots at the top right of the pin. From the menu, select "Copy link." This grabs the full URL, something like pinterest.com/pin/123456789. Make sure it's exact.
      </StepCard>
      <StepCard step={2} title="Paste the Link into Our Site">
        Go to videodownload.io in your browser. You'll see a box labeled "Paste Pinterest link here." Click inside and paste the copied link. Check that it starts with pinterest.com to avoid mistakes. Only public pins work; private or secret board videos won't download.
      </StepCard>
      <StepCard step={3} title="We Fetch and Clean the Video">
        Click the green "Download" button next to the box. Our system pulls the video from Pinterest's servers in seconds. We remove any watermarks and ensure the quality is solid. Audio stays clear, so you don't miss steps in that recipe or craft guide.
      </StepCard>
      <StepCard step={4} title="Save the Clip to Your Device">
        You'll get options: MP4 for the full video with sound or MP3 for just the audio. Choose MP4 for most clips. Tap to download, and it saves to your Downloads folder or phone's gallery. Name it something clear, like "diy_paint.mp4," before saving. Play it to confirm it's perfect.
      </StepCard>
    </div>
  );
}
