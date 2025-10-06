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

export default function TikTokPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "TikTok Video Download | Free & HD",
    description: "Download TikTok videos without watermarks in HD quality. Free online TikTok downloader - no watermark, fast, and safe."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Paste a TikTok video URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download TikTok Videos Easily
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Your Go-To Guide for Saving Clips Offline
          </h2>
          <p className="text-muted-foreground mb-6">
            Download TikTok videos in HD quality without watermarks. Our tool provides a fast, safe, and completely free way to save your favorite TikTok clips for offline viewing.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            How to Download TikTok Videos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            A Simple Guide to Save Videos in Seconds
          </h2>
          <p className="text-muted-foreground mb-6">
            Getting TikTok videos onto your device is simple with videodownload.io. Follow these four straightforward steps to download any video in minutes. Each step is designed to be intuitive, even if you're not tech-savvy.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Download TikTok Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Download TikTok Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Best Use Cases for Offline Access
            </h2>
            <p className="section-muted mb-4">
              TikTok moves fast, with trends dying out overnight and accounts shifting focus. Downloading lets you hold onto what catches you, turning fleeting scrolls into keepers. It's not about hoarding everything, but snagging those bits that stick, whether for a laugh later or real help. You build your own little library, free from data wipes or app glitches.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Viewing on Trips
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planes, subways, or spotty Wi-Fi spots kill the vibe when a video buffers. Save that travel hack or comedy skit ahead, and it plays smooth. Parents grab kid-friendly songs or stories for car rides, no screens freezing mid-song.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content Remix and Creation
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creators pull clips to stitch ideas together, adding their twist without starting from scratch. A fitness buff downloads form checks to layer over their routine, making tutorials sharper. Or hobbyists save craft steps to pause and copy at home, turning inspiration into action.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backup Your Own Content
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you're posting, videos can vanish from edits or bans. Download yours to a drive, safe from platform drama. Students snag lecture snippets or study tips for notes, reviewing without logging back in.
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
                    Export to Instagram Reels or YouTube Shorts, tweaking for wider reach. A small business owner saves customer shoutouts to feature on their site, building trust offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Personal Archives
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Family moments, like a grandma's recipe dance, deserve more than an app. Download to share at gatherings or pass down, keeping memories solid.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloading TikTok videos offers flexibility and convenience, making it easier to enjoy content on your terms, whether for fun, work, or learning.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Who Should Download TikTok Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              People Who Benefit Most from Offline Videos
            </h2>
            <p className="section-muted mb-4">
              Anyone who scrolls TikTok knows the pull of a good clip, but downloading fits certain folks best. It's for people who treat the app as more than a time sink, using saves to fuel real life or work. Not every user needs it, but if content shapes your day, grabbing files makes sense.
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
                    They film daily, tweaking styles from viral hits. Downloading their own uploads or inspo pieces lets them edit deeper, like blending a trend into a series without watermarks gumming it up. A beauty vlogger pulls fan reactions to weave into response videos, growing their channel smarter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educators and Students
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Teachers save demo clips for class, like history reenactments, to show without internet fails. Kids download math tricks or language lessons for homework, practicing at their pace. It's hands-on learning, pulled from the app's wild mix.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Parents and Families
                  </div>
                  <p className="text-sm text-muted-foreground">
                    That first birthday sing-along or holiday craft? Save it clean, print frames, or burn to DVD for grandparents. No relying on cloud storage that might glitch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Small Business Owners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A cafe downloads user food pics to menu boards or emails, boosting engagement. Marketers test ad ideas from trends, adapting quick.
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
                    Gardeners snag planting guides for seasonal checks, cooks save recipes to try variations. Even casual fans download workout sets for gym days, turning likes into habits.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No matter your role or lifestyle, downloading TikTok videos can save time, data, and effort while keeping your favorite content accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is It Legal to Download TikTok Videos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              What You Need to Know About the Law
            </h2>
            <p className="section-muted mb-4">
              Downloading TikTok videos sits in a gray spot, depending on how you use them. TikTok's rules let you save public clips for offline viewing, as long as the creator didn't block it. That's fine for your eyes only, like stashing a funny pet vid. But their terms ban third-party tools, so using sites like ours could flag your account if they spot patterns. Still, millions do it without issues, as enforcement focuses on big re-uploads.
            </p>
            <p className="section-muted mb-4">
              Copyright kicks in harder. Videos belong to makers, protected under laws like the DMCA in the US. Personal saves, like offline viewing, often fall under fair use if you don't tweak or spread them. But reposting without credit or changes? That's infringement, risking takedowns or suits from creators. Music in clips adds layers, since labels own tracks, but short personal clips rarely trigger flags.
            </p>
            <p className="section-muted mb-2">
              However, there are exceptions where downloading may be legal:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Creator Permission
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If the video's creator explicitly allows downloads, you're in the clear.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Public Domain Content
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Content no longer under copyright protection can be downloaded freely.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Educational Fair Use
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Schools use educational clips under fair use for classes. Always check the video description for permissions.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Bottom line, keep it private and respectful, and you're mostly clear. If sharing, ask first or credit heavy.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              The Risks Associated with Downloading TikTok Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potential Dangers and How to Avoid Them
            </h2>
            <p className="section-muted mb-4">
              Third-party downloaders promise easy saves, but they pack hidden traps that can bite hard. Not all sites play fair, and rushing in without checks leaves your setup open. It's smart to weigh these before pasting links, so you avoid headaches down the line.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware from Shady Sites"
              >
                Shady sites bundle viruses with downloads, slipping trojans or ransomware into that MP4. One click, and it scans your files or locks your screen for cash. We've seen reports of keyloggers stealing passwords from "free" tools, turning a quick grab into identity theft.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing Scams">
                Fake download buttons lead to login prompts mimicking TikTok, snagging your credentials. Or ads push bogus updates that install spyware, tracking your scrolls beyond the app.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={EyeOff}
                title="Privacy Leaks"
              >
                Some tools log your activity, selling video tastes or IP addresses to marketers. Worse, they might share with hackers, leading to spam floods or targeted cons.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Quality Drops">
                Low-end sites compress files, adding glitches or dropping frames. Audio syncs off, or colors wash out, ruining the clip you wanted crisp.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Account Bans">
                TikTok spots bulk downloads from outsiders and suspends profiles, especially creators. Lose access to your followers overnight.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Device Overload"
              >
                Constant saves eat storage, slowing phones. And if a bad file crashes your player, you're debugging instead of watching.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Stick to trusted spots to dodge most, but even then, scan files and use VPNs for extra cover.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Why Use videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Your Trusted Partner for TikTok Downloads
            </h2>
            <p className="section-muted mb-4">
              We kicked off videodownload.io back in 2022 because we got tired of clunky apps that crashed or added junk. As TikTok fans ourselves, we wanted a simple way to save clips without the drama, so we built one. No corporate backing, just a small team fixing pains we hit daily. Trust us because we've handled millions of downloads clean, with zero data breaches or complaints piling up. Users stick around for the reliability, and we keep improving based on their notes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Fast as Heck">
                Videos process in under five seconds, even at peaks. Our optimized servers ensure quick downloads without long waits.
              </FeatureCard>
              <FeatureCard icon={Shield} title="No Ads Interrupting">
                Clean page, no pop-ups stealing focus. We prioritize your experience without intrusive advertisements.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Zero Watermarks Guaranteed">
                Every file comes pure, without TikTok's watermark. Perfect for clean, professional use.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimited Grabs">
                Download hundreds a day, no caps. Use our service as much as you need without restrictions.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Cross-Device Magic">
                Phones, laptops, all play nice. Works seamlessly on any device without installing software.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Secure Setup">
                We encrypt links and wipe traces right after. Your privacy is our top priority.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Common Questions About videodownload.io and TikTok Downloads
            </h2>
            <p className="section-muted mb-4">
              We've compiled answers to the most frequent questions about using videodownload.io and downloading TikTok videos to help you get started with confidence.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I download private TikTok videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, our tool only works on public clips. Private ones need creator okay, and we can't touch them to respect privacy rules. If it's yours, use TikTok's export for backups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Does downloading slow my phone?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Not from us. Files are light, and we don't install anything. But watch your storage; videos add up quick if you're saving tons.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Why no watermark on my save?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok adds it to track shares, but we pull the original stream and crop it out. Keeps the video clean for personal use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Can I get audio only from TikToks?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Yes, pick MP3 option after pasting. Great for extracting that catchy sound or voiceover without the visuals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  What if the download fails?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Check your link is full and public. Try a different browser or clear cache. If stuck, our support chat helps in minutes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Is there a limit on file size?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We handle up to 60-minute videos, but most TikToks are short. Longer ones take a tad more time, but no cuts.
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
                  Nope. We process on the fly and delete everything after. Your files stay local, no cloud copies on our side.
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
                  TikTok doesn't notify them. Downloads stay anonymous, so no awkward follows from saves.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Ready to Save Your Favorites?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Get Your Videos Offline Today
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copy TikTok Link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Paste Here
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Hit Download
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download TikTok Video
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
      <FeatureCard icon={VideoIcon} title="HD Quality Downloads">
        You get videos in high definition, up to 1080p or better if the original is that sharp. No blurry edges or pixel mess when you play them back on your phone or laptop. We pull the file straight from TikTok's source, so colors pop and details stay crisp, perfect for watching that dance routine again without losing the vibe.
      </FeatureCard>
      <FeatureCard icon={FileX} title="No Watermarks at All">
        TikTok slaps its logo right in the middle of every saved clip if you use their built-in tool. Here, we strip it clean. The video comes out plain, just the content you want, ready to share or edit without that ugly overlay blocking the fun parts. It's like grabbing the raw footage straight from the creator.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Works on Any Device">
        Fire up your Android phone, iPhone, Windows PC, or even a Mac, and it runs smooth. No need to install extra apps or deal with clunky software. Just hit our site in your browser, paste the link, and download. We've tested it on everything from old budget phones to high-end tablets, and it never skips a beat.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Super Fast Processing">
        Wait times suck, especially when you're itching to save that viral recipe or workout tip. Our tool grabs the video in seconds, usually under 10 for most clips. We use direct servers close to TikTok's, so no long buffers or failed attempts. Quick enough to download a whole playlist during your coffee break.
      </FeatureCard>
      <FeatureCard icon={Download} title="Totally Free to Use">
        No sign-ups, no credit card prompts, no hidden fees popping up after. Download as many as you like, every day, without paying a dime. We keep it open because we know not everyone wants to drop cash just to save a funny cat video or family moment.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Safe and Private">
        We don't store your links or videos on our end. Once the download kicks off, that's it, no logs or tracking. Plus, no pop-up ads trying to sneak in junk. Your info stays yours, and the process runs clean without touching your device storage beyond the file you want.
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
      <StepCard step={1} title="Grab the Video Link from the App">
        Open TikTok on your phone or the website on your computer. Scroll to the video you like, maybe that quick makeup tutorial or the kid's first steps clip. Tap the share arrow on the right side of the screen. It looks like a curved arrow. From the menu that slides up, hit "Copy link." This grabs the full URL, something like tiktok.com/@username/video/123456789. Make sure it's the exact one, no shortcuts.
      </StepCard>
      <StepCard step={2} title="Head Over and Paste into Our Tool">
        Jump to videodownload.io in your browser. You'll see a big box up top that says "Paste TikTok link here." Click inside it and paste what you copied. It sticks right in. Double-check the URL starts with tiktok.com to avoid mix-ups. If it's a private video, it won't work, but public ones fly through.
      </StepCard>
      <StepCard step={3} title="Let Our System Pull and Prep the File">
        Hit the blue "Download" button next to the box. We start right away, fetching the video from TikTok's servers. You'll see a spinner for a few seconds while we clean off the watermark and check the quality. No need to wait around; it handles the heavy lifting. If the video has sound, it stays intact, no mute surprises.
      </StepCard>
      <StepCard step={4} title="Pick Your Format and Save to Device">
        Options pop up: MP4 for video with audio, or MP3 if you just want the track. Go with MP4 for full clips. Tap the one you want, and it starts downloading to your default folder, like Downloads on PC or camera roll on phone. Name the file something easy, like "dance_tutorial.mp4," before it saves. Open it up to test, and you're set to watch offline anytime.
      </StepCard>
    </div>
  );
}
