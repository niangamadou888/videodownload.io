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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Twitter X Video Download | Free & HD",
    description: "Download Twitter X videos and posts in mp4, 1080p quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a Twitter X video or post URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Twitter X Videos Fast
          </h2>
          <p className="text-muted-foreground mb-6">
            Your Quick Guide to Saving Clips Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download Twitter X Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Clear, Step-by-Step Guide to Save Videos Effortlessly
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting Twitter X videos onto your device is simple with
            videodownload.io. Follow these four straightforward steps to
            download any video in minutes. Each step is designed to be
            intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Download Twitter X Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download Twitter X Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases
            </h2>
            <p className="section-muted mb-4">
              Twitter X moves at lightning speed, with videos getting lost in the flood of posts. Downloading lets you hold onto the clips that stand out, turning quick scrolls into a personal stash. It's not about saving everything, but keeping what sparks joy, informs, or inspires. You control your collection, safe from deleted posts or app changes.
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
                    Save news clips or tutorials for flights, trains, or areas with bad Wi-Fi. Parents download fun animations for kids to watch on long drives, no buffering stress.
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
                    Creators grab viral clips to remix into their own posts, adding commentary or edits. A journalist saves a breaking news video to analyze for a story, cutting out watermarks for clean use.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backing Up Your Own Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you share videos on Twitter X, they can vanish from account issues or platform updates. Download them to a drive to keep your work safe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Learning and Research
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students save expert talks or data breakdowns for study notes. Professionals grab industry updates to share in meetings, no need to search the feed again.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sharing Moments
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download a friend's milestone clip or a funny reaction to send in group chats or save for later. It's a way to keep personal highlights without relying on the app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading Twitter X videos offers flexibility and convenience,
              making it easier to enjoy content on your terms, whether for fun,
              work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download Twitter X Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Downloading
            </h2>
            <p className="section-muted mb-4">
              Twitter X is a hub for quick takes and big moments, but downloading videos fits people who use the platform with intent. It's for those who see clips as tools, memories, or inspiration, not just passing content. If you're active on the app and want to keep what matters, downloading is for you.
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
                    They post daily, pulling ideas from trending videos. Downloading lets them save their own clips or study others, like a comedian grabbing a reaction video to riff on without logos in the way.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Journalists and Researchers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    They save news clips or interviews for articles or fact-checking. Students download expert threads with videos for school projects, studying offline at their own pace.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Families and Casual Users
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save a sibling's announcement video or a viral pet clip to share at gatherings. It's more reliable than hoping Twitter X keeps it live.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketers and Business Owners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A startup saves customer shoutouts to feature on websites. Social media managers grab competitor clips to analyze trends or repurpose for other platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyists and Learners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tech fans save coding demos to practice later. News junkies download breaking stories to rewatch. Even casual scrollers save motivational clips for tough days.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading Twitter X videos can
              save time, data, and effort while keeping your favorite content
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download Twitter X Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Videos are copyrighted by their creators under laws like the DMCA in the US. Saving for private viewing, like watching a news clip offline, often counts as fair use. But sharing without permission or using for profit can lead to legal issues. Music or voiceovers in videos may have extra copyright layers, though short personal saves rarely face trouble.
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
                    If the creator allows downloads or the content is public domain, you're clear. Educational use, like showing a clip in class, often qualifies as fair use. Check post captions for permissions. Keep it private and credit creators if you share to stay safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading Twitter X Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Third-party downloaders seem easy, but shady ones can cause big problems. Not every site is trustworthy, and clicking carelessly can hurt your device or data. Know the risks before you start downloading to avoid trouble down the line.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Unreliable sites hide viruses in video files, sneaking in spyware or ransomware. One bad download can lock your files or steal passwords. Some tools have been caught with keyloggers, turning a quick save into a data breach.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download pages mimic Twitter X's login, grabbing your credentials if you enter them. Or ads push "updates" that install trackers, watching your activity beyond the platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Quality Issues"
              >
                Bad sites compress videos, causing choppy playback or lost audio. You wanted a clear news clip, but get a glitchy file instead.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Leaks">
                Some sites log your downloads, selling your IP or video choices to advertisers. Hackers might get that data, leading to spam or targeted scams.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Twitter X Bans">
                Heavy use of third-party tools can flag your account, especially for creators. You could lose your profile or followers overnight.
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
              Your Trusted Partner for Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              We started videodownload.io in 2022 because we were sick of sketchy tools and buggy apps. As Twitter X users, we wanted a fast, clean way to save videos without risks. We're a small team, not a big company, focused on making downloads simple and secure. Millions of users trust us with no data breaches, and we keep improving based on their feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Under Five Seconds">
                Downloads complete even on busy days.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="No Ads or Pop-ups">
                Just a clean site.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermarks Gone">
                Pure, usable clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimited Saves">
                No daily caps.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Works on Any Device">
                From phones to laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Secure System">
                No data kept after you're done.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Common Questions About Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using
              videodownload.io and downloading Twitter X videos to help you get
              started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download private Twitter X videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we only handle public posts. Protected or private videos need creator permission, and we respect that to keep things legit.
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
                  Our files are clean and light, so no slowdown. But saving many videos can fill storage, so keep an eye on your space.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Why is my video watermark-free?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X adds logos to track shares, but we pull the original file and remove them for a clean save you can use freely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I save just the audio from a Twitter X video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, pick MP3 after pasting the link. Perfect for grabbing podcast clips or trending sounds without the video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  What if my download fails?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Check the link is public and starts with x.com. Try another browser or clear cache. Our support chat fixes issues fast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Are there limits on video size?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We handle videos up to 60 minutes, though most Twitter X clips are short. Longer ones take a bit but download fully.
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
                  Can creators see I downloaded their video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X doesn't notify them. Your download stays private, with no alerts to the poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Saving Twitter X Videos Now
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Get Your Clips Offline in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy Twitter X Post Link
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
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Twitter X Video
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
      <FeatureCard icon={VideoIcon} title="Sharp Video Quality">
        Save Twitter X videos in their best resolution, up to 1080p if the original post delivers it. No fuzzy frames or dull colors when you watch later. We pull the raw file straight from Twitter X's servers, keeping every detail crisp for that viral clip or news update.
      </FeatureCard>
      <FeatureCard icon={Zap} title="No Watermarks or Branding">
        Twitter X adds its logo or username to videos saved through their app, cluttering the view. We remove all that, giving you a clean clip ready for sharing or editing. Watch that funny moment or keynote speech without text blocking the screen.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Works on Any Device">
        Use your phone, tablet, laptop, or desktop, and it runs smoothly. No need to install apps or deal with extra software. Open our site in your browser, paste the link, and download. Tested on everything from budget Androids to high-end PCs, it's always reliable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Quick Download Speeds">
        Nobody wants to wait. Our tool grabs Twitter X videos in seconds, often under 10 for most clips. We use servers close to Twitter X's for fast pulls, so you can save a reaction video or hot take during a quick scroll break.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totally Free to Use">
        No fees, no sign-ups, no surprise charges. Download as many videos as you want, every day, without limits. We keep it free so you can save that meme or breaking news clip without hitting a paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Safe and Private Downloads">
        Your info stays secure. We don't keep your links or videos after you download. No tracking, no logs, and no spammy ads. The process is clean, keeping your device free from junk or risks.
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
      <StepCard step={1} title="Grab the Video Link from Twitter X">
        <a href="http://www.x.com">Open Twitter X</a> on your phone or browser. Find the video you like, maybe a quick meme or a conference highlight. Click the share icon below the post, a little arrow pointing up. From the menu, pick "Copy link to Post." This copies the full URL, like x.com/username/status/123456. Double-check it's right.
      </StepCard>
      <StepCard step={2} title="Paste the Link into Our Tool">
        Go to videodownload.io in your browser. You'll see a box labeled "Paste Twitter X link here." Click inside and paste the link you copied. Make sure it starts with x.com to avoid issues. Only public posts work; private or protected videos won't download.
      </StepCard>
      <StepCard step={3} title="We Fetch and Prep the Video">
        Click the blue "Download" button next to the box. Our system pulls the video from Twitter X's servers in seconds. We strip off any watermarks and check the quality, so you get a smooth clip. Audio stays clear, no glitches or missing sound.
      </StepCard>
      <StepCard step={4} title="Save the File to Your Device">
        You'll see options: MP4 for the full video with audio or MP3 for just the sound. Pick MP4 for most clips. Tap to download, and it lands in your Downloads folder or phone's gallery. Name it something simple, like "meme_clip.mp4," before saving. Play it to make sure it's perfect.
      </StepCard>
    </div>
  );
}
