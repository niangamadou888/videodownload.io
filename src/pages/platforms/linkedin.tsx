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

export default function LinkedInPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "LinkedIn Video Download | Free & HD",
    description: "Download LinkedIn videos and posts in mp4, 1080p quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a LinkedIn video or post URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download LinkedIn Videos Simply
          </h2>
          <p className="text-muted-foreground mb-6">
            Your Easy Guide to Saving Professional Clips Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download LinkedIn Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Clear, Step-by-Step Guide to Save Videos Effortlessly
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting LinkedIn videos onto your device is simple with
            videodownload.io. Follow these four straightforward steps to
            download any video in minutes. Each step is designed to be
            intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Download LinkedIn Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download LinkedIn Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases
            </h2>
            <p className="section-muted mb-4">
              LinkedIn's feed moves fast, and great videos get buried under new posts. Downloading lets you keep clips that matter, turning quick scrolls into lasting resources. It's about saving what helps your career or business, not just collecting random content. You decide what's worth keeping, safe from app glitches or deleted posts.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Access for Professionals
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save a leadership talk or marketing strategy for plane rides or commutes with no Wi-Fi. Trainers download workshop clips to show teams without relying on spotty internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Repurposing Content
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketers save case studies to share in client decks or on other platforms. Job seekers grab resume tips to study frame-by-frame, tweaking their pitch. You can clip key moments for presentations without starting from scratch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiving Your Own Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you're sharing updates or thought leadership, videos can vanish from platform changes. Download them to a drive for safekeeping, protecting your work from bans or bugs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Training and Education
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR teams save onboarding videos for new hires. Students download industry panels for study notes, reviewing insights offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Personal Growth
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save motivational talks or networking advice to rewatch when you need a boost. Turn a mentor's quick clip into a daily reminder without digging through the app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading LinkedIn videos offers flexibility and convenience,
              making it easier to enjoy content on your terms, whether for fun,
              work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download LinkedIn Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Downloading
            </h2>
            <p className="section-muted mb-4">
              LinkedIn is a hub for pros, but downloading videos fits those who use the platform to grow, learn, or build. It's for people who see posts as more than updates, turning clips into tools for work or progress. Not every user needs to save, but if you're active and strategic, it's a game-changer.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionals
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Managers save leadership talks to share with teams. Marketers download competitor ads or case studies to analyze trends. They pull clean clips to repurpose without logos messing up their slides.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Job Seekers and Career Coaches
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save interview tips or resume walkthroughs to practice offline. Coaches grab client success stories to showcase in sessions, building trust without watermarks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Business Owners and Entrepreneurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startups save pitch videos or industry updates to study competitors. Small businesses download customer testimonials to embed on websites or share in pitches.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educators and Trainers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR pros save compliance videos for staff training. Professors download industry panels for class discussions, showing real-world insights without internet hiccups.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Students and Lifelong Learners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Grab career advice or technical tutorials to review at your pace. Even casual users save motivational clips to revisit during job hunts or tough projects.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading LinkedIn videos can
              save time, data, and effort while keeping your favorite content
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download LinkedIn Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Downloading LinkedIn videos sits in a murky area. Videos are copyrighted by their creators under laws like the <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> in the US. Saving for private viewing, like studying a webinar offline, often falls under fair use. But sharing without permission or using for profit can lead to legal trouble. Audio in videos, like music or voiceovers, may have extra copyright layers, though short personal saves rarely face issues.
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
                    If the creator allows downloads or the content is public domain, you're safe. Educational use, like showing a clip in a classroom, often qualifies as fair use. Check post descriptions for permissions. Keep downloads private and give credit if sharing to stay on the right side.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading LinkedIn Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Third-party downloaders seem convenient, but untrustworthy ones bring serious problems. Not every site is safe, and clicking the wrong link can hurt your device or data. Understand the risks before you start, so you don't end up with bigger issues than a missed video.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Shady sites hide viruses in video files, sneaking in ransomware or spyware. A single bad download can lock your files or steal logins. Some tools have been caught embedding keyloggers, turning a quick save into a privacy nightmare.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download pages mimic LinkedIn's login screen, grabbing your credentials if you fall for it. Or ads push "software updates" that install trackers, monitoring your activity beyond the platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Quality Issues"
              >
                Bad sites compress videos, causing choppy playback or lost audio. You wanted a clear webinar clip, but get a glitchy mess instead.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Breaches">
                Some sites log your downloads, selling your IP or video choices to advertisers. Hackers could snag that data, leading to spam or targeted scams.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="LinkedIn Bans">
                Heavy use of third-party tools can flag your account, especially for active posters. You might lose access to your network or posts.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Storage Overload"
              >
                Saving lots of videos eats space, bogging down phones or drives. Corrupted files can crash players, wasting your time.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Stick to trusted sites, scan files, and use VPNs to minimize trouble.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Use videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Your Trusted Partner for LinkedIn Downloads
            </h2>
            <p className="section-muted mb-4">
              We launched videodownload.io in 2022 because we were tired of sketchy tools and slow apps. As LinkedIn users, we needed a fast, clean way to save videos without risks. We're a small team, not a big corporation, focused on making downloads easy and secure. Millions of users trust us with no data leaks, and we keep tweaking based on their feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Under Five Seconds">
                Downloads complete even during peak hours.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="No Ads or Pop-ups">
                Just a simple interface.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermarks Removed">
                Clean, usable clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimited Downloads">
                No daily restrictions.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Works on Any Device">
                From old tablets to new laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Secure Setup">
                No data stored after your download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Common Questions About LinkedIn Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using
              videodownload.io and downloading LinkedIn videos to help you get
              started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download private LinkedIn videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we only support public posts. Private or group videos need creator permission, and we respect those boundaries to stay compliant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Will downloading affect my device's speed?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Our files are clean and optimized, so no lag. But saving many videos can fill storage, so manage your space carefully.
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
                  LinkedIn adds logos to track shares, but we pull the raw file and clean it up, giving you a clear video for personal use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I save just the audio from a LinkedIn video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, select MP3 after pasting the link. Great for grabbing podcast snippets or speech audio without the visuals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  What if my download doesn't work?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ensure the link is public and starts with linkedin.com. Try a different browser or clear your cache. Our support chat resolves issues quickly.
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
                  We handle videos up to 60 minutes, though most LinkedIn clips are shorter. Longer ones take slightly more time but download fully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Do you store my downloaded videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we process instantly and delete everything after. Your files stay on your device, not our servers.
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
                  LinkedIn doesn't notify them. Downloads are private, with no alerts sent to the poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Saving LinkedIn Videos Today
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Grab Professional Clips in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy LinkedIn Post Link
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
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download LinkedIn Video
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
                  to={`/en/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="High-Quality Video Saves">
        Get LinkedIn videos in sharp resolution, up to 1080p if the original post supports it. No blurry frames or faded colors when you replay them. We grab the file directly from LinkedIn's servers, keeping every detail clear for that career talk or industry demo.
      </FeatureCard>
      <FeatureCard icon={Zap} title="No Watermarks or Logos">
        LinkedIn adds its branding to videos saved through their app, cluttering the view. We strip all that away, delivering a clean clip ready for presentations or personal use. Watch that leadership seminar without text overlays in the way.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Runs on Any Device">
        Use your laptop, iPhone, Android, or tablet, and it works flawlessly. No need for extra software or apps. Just open our site in your browser, paste the link, and download. Tested across old PCs and new phones, it's always smooth.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Fast and Reliable Downloads">
        Waiting kills momentum. Our tool pulls LinkedIn videos in seconds, usually under 10 for most clips. We use servers close to LinkedIn's for speed, so you can save a webinar snippet during a lunch break without delays.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Free with No Limits">
        No costs, no accounts, no hidden fees. Download as many videos as you need, every day, without restrictions. We keep it open so you can save that networking tip or company update without hitting a paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Secure and Private">
        Your data stays safe. We don't store your links or videos after the download. No tracking, no logs, no annoying ads. The process is clean, keeping your device free from unwanted clutter.
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
      <StepCard step={1} title="Snag the Video Link from LinkedIn">
        <a href="http://www.linkedin.com">Open LinkedIn</a> on your phone or browser. Find the video you want, like a job interview tip or a company announcement. Click the three dots at the top right of the post. From the menu, select "Copy link to post." This grabs the full URL, something like linkedin.com/posts/username_123456. Check it's correct.
      </StepCard>
      <StepCard step={2} title="Paste the Link into Our Tool">
        Head to videodownload.io in your browser. You'll see a box labeled "Paste LinkedIn link here." Click inside and paste the copied link. Make sure it starts with linkedin.com to avoid errors. Only public posts work; private or group videos won't.
      </StepCard>
      <StepCard step={3} title="We Process the Video for You">
        Hit the blue "Download" button next to the box. Our system fetches the video from LinkedIn's servers in moments. We remove any watermarks and ensure the quality holds up. Audio stays clear, so you don't lose key points from that panel discussion.
      </StepCard>
      <StepCard step={4} title="Save the Clip to Your Device">
        You'll get options: MP4 for the full video with sound or MP3 for just the audio. Choose MP4 for most cases. Tap to download, and it saves to your Downloads folder or phone's gallery. Name it something clear, like "career_talk.mp4," before saving. Play it to check it's good.
      </StepCard>
    </div>
  );
}
