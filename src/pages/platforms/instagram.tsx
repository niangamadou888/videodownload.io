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

export default function InstagramPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Instagram Video Download | Free & HD",
    description: "Download Instagram videos, Reels, Stories, and IGTV in mp4, 1080p, 4k quality. Free online video downloader and converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste an Instagram video, Reel, or Story URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Instagram Videos with Ease
          </h2>
          <p className="text-muted-foreground mb-6">
            Your Simple Guide to Saving Reels and Clips Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download Instagram Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Clear, Step-by-Step Guide to Save Videos Effortlessly
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting Instagram videos onto your device is simple with
            videodownload.io. Follow these four straightforward steps to
            download any video in minutes. Each step is designed to be
            intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Download Instagram Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download Instagram Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases
            </h2>
            <p className="section-muted mb-4">
              Instagram's fast-moving feed buries gems quickly. Downloading lets you keep the clips that matter, turning scrolls into a personal collection. It's not about saving every post, but holding onto videos that spark ideas or mean something. You control what stays, no matter if accounts go private or posts vanish.
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
                    Save travel tips or workout reels for flights or camping trips with no signal. Parents download kid-friendly songs or story clips for road trips, keeping kids happy without Wi-Fi.
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
                    Creators use downloads for remixing. A fashion blogger saves outfit reels to mix into their content, adding voiceovers or new angles. Musicians grab trending sounds to layer into their tracks, skipping watermarks for clean edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backing Up Your Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram can delete or glitch, so creators save their reels to hard drives. Students grab study hacks or lecture clips for notes, watching without app logins.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Repurposing for Other Platforms
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Turn a reel into a YouTube Short or TikTok clip with tweaks. Businesses save customer testimonials to embed on websites, boosting trust.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Personal Keepsakes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download family moments, like a cousin's wedding dance or a friend's baby update, to share at reunions or save for years later. It's a way to hold memories tight.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading Instagram videos offers flexibility and convenience,
              making it easier to enjoy content on your terms, whether for fun,
              work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download Instagram Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Downloading
            </h2>
            <p className="section-muted mb-4">
              Instagram's endless scroll hooks millions, but downloading videos fits people who use the platform with purpose. It's for those who see reels as tools, inspiration, or memories, not just quick entertainment. If you're building, learning, or saving moments, this is for you.
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
                    They post daily, pulling ideas from trending reels. Downloading lets them save their work or study others, like a food vlogger grabbing plating tips to remix into their style without logos in the way.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Students and Teachers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professors save demo reels for class, like science experiments, to show without internet issues. Students download study guides or language drills, reviewing offline at their own speed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Families
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Parents save a kid's first steps or a holiday skit to share with relatives or archive for later. It's more reliable than hoping Instagram keeps it forever.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Business Owners and Marketers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A boutique saves customer outfit posts for ads or social proof. Marketers test reel trends for campaigns, adapting them across platforms.
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
                    Fitness fans save yoga flows to practice at the gym. DIYers download craft tutorials to follow step-by-step. Even casual users grab motivational clips to rewatch during tough days.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading Instagram videos can
              save time, data, and effort while keeping your favorite content
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download Instagram Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Downloading Instagram videos isn't black-and-white. Instagram's rules allow saving public posts via their app for personal use, as long as the creator hasn't disabled it. Using third-party tools like ours technically breaks their terms, which could flag your account, though bans are rare unless you're mass-downloading or reposting.
            </p>
            <p className="section-muted mb-2">
              Legally, videos are owned by their creators under copyright laws, like the US's DMCA. Saving for personal viewing often falls under fair use, like watching a reel offline. But sharing without permission or editing for profit can trigger infringement claims. Music in reels adds complexity, as labels own tracks, but short personal saves rarely face issues.
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
                    If the creator allows downloads or the video is public domain, you're clear. Educational use, like teachers showing clips in class, often qualifies as fair use. Check post captions for permission. Keep it private and credit creators if you share, and you're generally safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading Instagram Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Downloading from third-party sites sounds easy, but sketchy ones bring real trouble. Not every tool is clean, and clicking blindly can mess up your device or data. Know the risks to stay safe before you hit that download button.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware is the Biggest Threat"
              >
                Shady sites pack viruses into video files, sneaking in spyware or ransomware. One bad download can lock your files or steal passwords. Reports show some tools hide keyloggers, turning a reel save into a data breach.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download pages mimic Instagram's login, grabbing your credentials if you type them. Or pop-up ads push "updates" that install trackers, watching your every click.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Quality Issues"
              >
                Bad sites compress videos, leaving choppy frames or muted audio. You wanted a crisp reel, but get a blurry mess instead.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Leaks">
                Some sites log your downloads, selling your IP or video preferences to advertisers. Hackers might get that data, spamming you or worse.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Instagram Bans">
                Heavy downloading via third-party tools can flag your account, especially for creators. You could lose your profile or followers overnight.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Storage Issues"
              >
                Reels add up, slowing phones or filling drives. Corrupted files might crash your player, wasting time to fix.
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
              Your Trusted Partner for Instagram Downloads
            </h2>
            <p className="section-muted mb-4">
              We started videodownload.io in 2022 because we were fed up with buggy apps and <a href="https://blog.avast.com/malicious-browser-extensions-avast">downloaders with malware</a>. As Instagram users, we wanted a clean way to save reels without hassle or risks. We're a small team, no big company, focused on making downloads simple and safe. Millions of downloads later, we've got no breaches and users keep coming back for our reliability.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Speedy Downloads">
                Under five seconds even on busy days.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="No Ads, No Pop-ups">
                Just a clean site.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermarks Gone">
                Every video pure.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimited Saves">
                No daily caps.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Works on Any Device">
                From phones to PCs.
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
              Common Questions About Instagram Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using
              videodownload.io and downloading Instagram videos to help you get
              started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download private Instagram videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, we only handle public reels and posts. Private ones need creator permission, and we respect that to keep things legit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Will downloading hurt my phone's performance?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Our files are clean and light, so no slowdown. But watch your storage; saving lots of reels can fill it up fast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Why is there no watermark on my video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram adds logos for tracking, but we pull the original file and remove them for a clean save you can use freely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I save just the audio from a reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, choose MP3 after pasting the link. Perfect for grabbing trending sounds or voiceovers without the video.
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
                  Check the link is public and starts with instagram.com. Try another browser or clear cache. Our support chat fixes issues fast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Are there size limits for videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We handle reels up to 60 minutes, though most are short. Longer ones take a bit, but we don't cut corners.
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
                  No way. We process instantly and delete everything after. Your files stay on your device, nowhere else.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can the creator see I downloaded their reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram doesn't notify them. Your download stays private, no alerts to the poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Start Saving Instagram Videos Now
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Get Your Reels Offline in Seconds
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy Instagram Link
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
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Instagram Video
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
      <FeatureCard icon={VideoIcon} title="Crystal Clear Video Quality">
        Get Instagram videos in their full glory, up to 1080p if the original post delivers it. No grainy playback or washed-out colors when you watch later. We pull the raw file from Instagram's servers, keeping every frame sharp for that perfect travel clip or cooking demo.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Watermark-Free Downloads">
        Instagram stamps its logo and username on saved videos, cluttering the view. We remove it completely, leaving you with a clean clip ready for editing or sharing. Watch that dance reel or pet moment without text blocking the action.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Works Across All Devices">
        Use your iPhone, Android, PC, or tablet, and it just works. No apps to install or software to fuss with. Open our site in any browser, paste the link, and grab your video. Tested on everything from old laptops to new phones, it's smooth every time.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Lightning-Quick Downloads">
        Nobody likes waiting. Our tool fetches Instagram videos in seconds, often under 10 for most clips. We tap servers close to Instagram's for speed, so you can save a reel during a quick break without buffering or errors.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completely Free Access">
        No fees, no sign-ups, no surprise charges. Download as many videos as you want daily, no limits. We keep it free so you can save that workout routine or funny skit without worrying about a paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Safe and Secure Process">
        Your privacy stays locked. We don't keep your links or videos after you download. No tracking, no data stored, and no sketchy ads. The process is clean, and your device stays safe from unwanted junk.
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
      <StepCard step={1} title="Copy the Video Link from Instagram">
        <a href="http://www.instagram.com">Open Instagram</a> on your phone or browser. Find the reel or video you want, like a quick recipe or a travel vlog. Tap the three dots at the top right of the post. From the menu, select "Copy link." This grabs the full URL, something like instagram.com/reel/ABC123. Make sure it's exact.
      </StepCard>
      <StepCard step={2} title="Paste the Link into Our Site">
        Go to videodownload.io in your browser. You'll see a clear box labeled "Paste Instagram link here." Click inside and paste the copied link. Check that it starts with instagram.com to avoid mistakes. Private posts won't work, but public reels and videos are good to go.
      </StepCard>
      <StepCard step={3} title="We Fetch and Clean the Video">
        Click the green "Download" button next to the box. Our system grabs the video from Instagram's servers in seconds. We strip the watermark and check the quality, so you don't get stuck with glitches. Audio stays synced, ready for playback.
      </StepCard>
      <StepCard step={4} title="Save the File to Your Device">
        You'll see options: MP4 for the full video with sound or MP3 for just the audio. Pick MP4 for most clips. Tap to download, and it lands in your Downloads folder or phone's gallery. Name it something simple, like "reel_workout.mp4," before saving. Play it to confirm it's perfect.
      </StepCard>
    </div>
  );
}
