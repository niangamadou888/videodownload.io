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

export default function VimeoPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Vimeo Video Download | Free & HD",
    description: "Download Vimeo videos in mp4, 1080p quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a Vimeo video URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Vimeo Videos Simply
          </h2>
          <p className="text-muted-foreground mb-6">
            Your Easy Guide to Saving Creative Clips Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download Vimeo Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Clear, Step-by-Step Guide to Save Videos Effortlessly
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting Vimeo videos onto your device is simple with
            videodownload.io. Follow these four straightforward steps to
            download any video in minutes. Each step is designed to be
            intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Download Vimeo Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download Vimeo Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases
            </h2>
            <p className="section-muted mb-4">
              Vimeo is a hub for creative and professional content, but videos can get lost or removed. Downloading lets you keep the clips that inspire or teach, turning fleeting finds into a personal collection. It's about saving what fuels your projects or passion, not just hoarding content. You control your stash, safe from deleted uploads or platform changes.
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
                    Save filmmaking tutorials or artist interviews for trips with no Wi-Fi, like flights or remote shoots. Students download educational clips for study sessions, no internet needed.
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
                    Filmmakers save short films to study techniques or remix into their own projects. Marketers grab branded content to adapt for other platforms, skipping watermarks for clean edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiving Your Own Uploads
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you post videos on Vimeo, they can vanish from account issues or platform updates. Download them to a drive to protect your work, like a portfolio piece or client project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Learning and Inspiration
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designers save motion graphics tutorials to practice offline. Teachers download creative lessons for classrooms, showing ideas without relying on a connection.
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
                    Save music videos or art showcases to revisit for motivation. Turn a quick Vimeo find into a resource for your next creative spark or professional pitch.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading Vimeo videos offers flexibility and convenience,
              making it easier to enjoy content on your terms, whether for fun,
              work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download Vimeo Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Downloading
            </h2>
            <p className="section-muted mb-4">
              Vimeo is a haven for artists and pros, but downloading videos fits those who use the platform to create, learn, or grow. It's for people who see clips as tools, inspiration, or keepsakes, not just casual watches. If you're active on Vimeo and want to keep what matters, downloading is your tool.
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
                    Filmmakers and animators save tutorials or showcase reels to study or remix. They download their own uploads too, keeping clean copies without logos for portfolios or edits.
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
                    Art teachers save animation demos for class. Students grab filmmaking tips or design lessons to review offline, building skills at their own pace.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionals and Businesses
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketers download branded videos to repurpose for ads or websites. Freelancers save client pitches to archive or share, no watermarks to distract.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyists and Creatives
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Photographers save lighting tutorials to try at home. Musicians download live performances to study stage setups, ready for offline practice.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Casual Users
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save a friend's short film or a motivational clip to rewatch later. Even fans download art showcases to keep for personal projects or mood boards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading Vimeo videos can
              save time, data, and effort while keeping your favorite content
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download Vimeo Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Downloading Vimeo videos is a gray area. Vimeo's rules <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">allows downloading public videos through their website</a> for personal use, if the creator hasn't disabled downloads. Using third-party tools like ours breaks their terms, which could flag your account, though bans are rare unless you're downloading heavily or reposting without permission.
            </p>
            <p className="section-muted mb-4">
              Videos are copyrighted by their creators under laws like the DMCA in the US. Saving for private viewing, like studying a tutorial offline, often counts as fair use. But sharing without credit or using for profit can lead to legal trouble. Music or voiceovers in videos may have extra copyright layers, though short personal saves rarely face issues.
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
                    If the creator allows downloads or the content is public domain, you're safe. Educational use, like showing a clip in class, often qualifies as fair use. Check video descriptions for permissions. Keep downloads private and credit creators if you share to stay on the right side.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading Vimeo Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Third-party downloaders sound convenient, but sketchy ones bring real problems. Not every site is safe, and clicking blindly can mess up your device or data. Know the risks before you start to avoid trouble down the line.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Unreliable sites hide viruses in video files, sneaking in spyware or ransomware. One bad download can lock your files or steal passwords. Some tools have been caught with keyloggers, turning a tutorial save into a data breach.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download pages mimic Vimeo's login, grabbing your credentials if you enter them. Or ads push "updates" that install trackers, watching your activity beyond the platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Quality Issues"
              >
                Bad sites compress videos, causing choppy playback or lost audio. You wanted a clear short film, but get a glitchy file instead.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Leaks">
                Some sites log your downloads, selling your IP or video choices to advertisers. Hackers could snag that data, leading to spam or targeted scams.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Vimeo Bans">
                Heavy use of third-party tools can flag your account, especially for creators. You could lose your profile or uploads overnight.
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
              Use trusted sites, scan downloads, and consider VPNs to stay safe.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Use videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Your Trusted Partner for Vimeo Downloads
            </h2>
            <p className="section-muted mb-4">
              We started videodownload.io in 2022 because we were fed up with clunky apps and risky sites. As Vimeo users, we wanted a fast, clean way to save videos without hassle. We're a small team, not a big corporation, focused on making downloads easy and secure. Millions of users trust us with no data leaks, and we keep improving based on their feedback.
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
              Common Questions About Vimeo Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using
              videodownload.io and downloading Vimeo videos to help you get
              started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download private Vimeo videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we only support public videos. Private or password-protected videos need creator permission, and we respect those boundaries to stay legit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Will downloading slow my device?
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
                  Vimeo adds logos to track shares, but we pull the raw file and clean it up, giving you a clear video for personal use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I save just the audio from a Vimeo video?
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
                  Check the link is public and starts with vimeo.com. Try another browser or clear cache. Our support chat fixes issues fast.
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
                  We handle videos up to 60 minutes, though most Vimeo clips vary. Longer ones take a bit but download fully.
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
                  Vimeo doesn't notify them. Your download stays private, with no alerts to the creator.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Saving Vimeo Videos Now
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Grab Your Creative Clips in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy Vimeo Video Link
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
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Vimeo Video
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
      <FeatureCard icon={VideoIcon} title="High-Definition Downloads">
        Save Vimeo videos in their full resolution, up to 1080p or higher if the original upload supports it. No grainy playback or dull colors when you watch later. We pull the file directly from Vimeo's servers, keeping every frame crisp for that short film or art tutorial.
      </FeatureCard>
      <FeatureCard icon={Zap} title="No Watermarks or Branding">
        Vimeo adds its logo to videos saved through their app, cluttering the view. We remove all that, delivering a clean clip ready for editing or personal use. Watch that documentary snippet or animation without text overlays blocking the details.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Works Across All Devices">
        Use your phone, tablet, laptop, or desktop, and it runs smoothly. No need for apps or extra software. Just open our site in your browser, paste the link, and download. Tested on everything from old iPhones to new PCs, it's always hassle-free.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Fast Download Speeds">
        Nobody likes waiting. Our tool grabs Vimeo videos in seconds, usually under 10 for most clips. We use servers close to Vimeo's for quick pulls, so you can save a tutorial or showcase reel during a quick break.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completely Free to Use">
        No fees, no sign-ups, no hidden costs. Download as many videos as you want, every day, without limits. We keep it free so you can save that inspiring film or music video without hitting a paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Secure and Private Process">
        Your data stays safe. We don't store your links or videos after you download. No tracking, no logs, and no spammy ads. The process is clean, keeping your device free from junk or risks.
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
      <StepCard step={1} title="Copy the Video Link from Vimeo">
        <a href="http://www.vimeo.com">Open Vimeo</a> on your phone or browser. Find the video you love, like a filmmaking tip or a creative animation. Click the share icon, usually a paper airplane, at the bottom or side of the video. From the menu, select "Copy link." This grabs the full URL, like vimeo.com/123456789. Make sure it's exact.
      </StepCard>
      <StepCard step={2} title="Paste the Link into Our Tool">
        Go to videodownload.io in your browser. You'll see a box labeled "Paste Vimeo link here." Click inside and paste the copied link. Check that it starts with vimeo.com to avoid mistakes. Only public videos work; private or password-protected ones won't download.
      </StepCard>
      <StepCard step={3} title="We Fetch and Clean the Video">
        Click the green "Download" button next to the box. Our system pulls the video from Vimeo's servers in seconds. We strip off any watermarks and ensure the quality holds up. Audio stays clear, so you don't miss key details in that tutorial or interview.
      </StepCard>
      <StepCard step={4} title="Save the Clip to Your Device">
        You'll get options: MP4 for the full video with sound or MP3 for just the audio. Choose MP4 for most clips. Tap to download, and it lands in your Downloads folder or phone's gallery. Name it something clear, like "film_tutorial.mp4," before saving. Play it to confirm it's perfect.
      </StepCard>
    </div>
  );
}
