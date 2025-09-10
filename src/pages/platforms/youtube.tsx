import type { ComponentType, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PlatformSubheader from "@/components/PlatformSubheader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Video as VideoIcon, Zap, Music, Monitor, ListChecks, Shield, Download, CheckCircle, AlertTriangle, EyeOff, FileX, Ban, AlertCircle } from "lucide-react";
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

export default function YouTubePage() {
  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader boxOnly inputPlaceholder="Paste a YouTube video, Shorts, or playlist URL" />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">Features</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Tools to Make Downloading YouTube Videos Simple and Reliable</h2>
          <p className="text-muted-foreground mb-6">Here are six powerful features that make videodownload.io the go-to choice for downloading YouTube videos quickly, safely, and efficiently. Each feature is designed to enhance your experience and provide flexibility for all your downloading needs.</p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">How to Download YouTube Videos</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">A Clear, Step-by-Step Guide to Save Videos Effortlessly</h2>
          <p className="text-muted-foreground mb-6">Getting YouTube videos onto your device is simple with videodownload.io. Follow these four straightforward steps to download any video in minutes. Each step is designed to be intuitive, even if you’re not tech-savvy.</p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">Download YouTube Video</Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Why Download YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Top Use Cases for Offline Video Access</h2>
            <p className="section-muted mb-4">Downloading YouTube videos gives you the freedom to watch content anytime, anywhere, without relying on an internet connection. Whether you’re saving data, preparing for a trip, or archiving content, offline videos are incredibly useful. Below are some of the best reasons to download YouTube videos for personal use.</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Traveling Without Internet Access</div>
                  <p className="text-sm text-muted-foreground">Save movies, vlogs, or music videos to watch on long flights, train rides, or in remote areas where Wi‑Fi or mobile data isn’t available. This ensures uninterrupted entertainment on the go.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Educational Purposes and Studying</div>
                  <p className="text-sm text-muted-foreground">Download tutorials, lectures, or how‑to guides for offline learning. For example, save coding walkthroughs, language lessons, or DIY repair videos to review at your own pace without streaming.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Content Creation and Editing</div>
                  <p className="text-sm text-muted-foreground">Grab clips for your own videos, such as reaction videos, montages, or commentary, as long as you follow copyright rules or get creator permission. This is great for YouTubers or TikTok creators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Archiving Favorite Videos</div>
                  <p className="text-sm text-muted-foreground">Some videos get deleted or removed from YouTube due to channel changes or copyright issues. Downloading lets you preserve personal favorites or rare content for long‑term access.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Saving Mobile Data Usage</div>
                  <p className="text-sm text-muted-foreground">Streaming videos eats up data, especially on limited plans. Downloading over Wi‑Fi lets you watch without worrying about data caps or expensive bills.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Offline Entertainment Library</div>
                  <p className="text-sm text-muted-foreground">Build a collection of music videos, movie trailers, or vlogs to enjoy offline. Perfect for camping trips, gym sessions, or relaxing at home without buffering delays.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Workshops and Presentations</div>
                  <p className="text-sm text-muted-foreground">Professionals can download industry‑related videos, like keynote speeches or training sessions, to share during offline workshops or meetings, ensuring smooth playback without internet reliance.</p>
                </div>
              </div>
            </div>
            <p className="section-muted">Downloading YouTube videos offers flexibility and convenience, making it easier to enjoy content on your terms, whether for fun, work, or learning.</p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Who Should Download YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">People Who Benefit Most from Offline Videos</h2>
            <p className="section-muted mb-4">Downloading YouTube videos isn’t just for casual viewers—it’s a game‑changer for specific groups who need offline access for work, creativity, or convenience. Here’s a look at who can get the most out of downloading YouTube videos and why it’s worth doing.</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Content Creators and Influencers</div>
                  <p className="text-sm text-muted-foreground">YouTubers, TikTokers, or streamers can download clips for reaction videos, mashups, or analysis, provided they respect copyright and fair use laws or get permission from the original creator.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Students and Teachers</div>
                  <p className="text-sm text-muted-foreground">Save educational content like math tutorials, science explainers, or history documentaries for offline study or classroom use. This is ideal for areas with poor internet or for focused learning without distractions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Frequent Travelers</div>
                  <p className="text-sm text-muted-foreground">Whether you’re on a plane, train, or in a remote location, downloaded videos ensure entertainment without relying on spotty Wi‑Fi or costly data plans.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Music Enthusiasts</div>
                  <p className="text-sm text-muted-foreground">Convert music videos or live performances to MP3s for offline playlists. This is great for creating workout mixes or listening to interviews without streaming, as long as the source is legal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Video Archivists</div>
                  <p className="text-sm text-muted-foreground">Collectors or fans of niche content can save rare videos, old uploads, or personal favorites that might disappear from YouTube due to account closures or content purges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Fitness and Wellness Fans</div>
                  <p className="text-sm text-muted-foreground">Download yoga sessions, workout routines, or meditation guides to follow along offline, whether at home, in a park, or at the gym without needing a connection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Researchers and Professionals</div>
                  <p className="text-sm text-muted-foreground">Academics or industry experts can save conference talks, webinars, or training videos for offline reference during fieldwork, presentations, or study sessions.</p>
                </div>
              </div>
            </div>
            <p className="section-muted">No matter your role or lifestyle, downloading YouTube videos can save time, data, and effort while keeping your favorite content accessible.</p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Is It Legal to Download YouTube Videos?</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">What You Need to Know About the Law</h2>
            <p className="section-muted mb-4">The legality of downloading YouTube videos depends on several factors, and it’s important to understand the rules to avoid trouble. YouTube’s Terms of Service explicitly prohibit downloading videos unless the platform provides an official option, like YouTube Premium’s offline feature for subscribers. Under U.S. copyright law, downloading copyrighted content without permission from the creator or rights holder is illegal and could lead to civil lawsuits, though enforcement against individual users for personal use is rare.</p>
            <p className="section-muted mb-2">However, there are exceptions where downloading may be legal:</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">Public Domain Videos</div>
                  <p className="text-sm text-muted-foreground">Content no longer under copyright protection can be downloaded freely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">Creative Commons Licenses</div>
                  <p className="text-sm text-muted-foreground">Some YouTube videos have licenses allowing downloads for certain uses, like remixing or sharing, as long as you follow the terms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">Creator Permission</div>
                  <p className="text-sm text-muted-foreground">If the video’s creator explicitly allows downloads, you’re in the clear.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">Fair Use Cases</div>
                  <p className="text-sm text-muted-foreground">Limited downloading for education, commentary, criticism, or research might qualify as fair use, but this depends on the context and how you use the video.</p>
                </div>
              </div>
            </div>
            <p className="section-muted">To stay safe, check the video’s license in its description or contact the creator for permission. YouTube Premium offers a legal way to save videos offline for personal use. If you’re unsure, err on the side of caution to respect creators and avoid violating copyright laws.</p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Risks of Downloading YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Potential Dangers and How to Avoid Them</h2>
            <p className="section-muted mb-4">While downloading YouTube videos is convenient, it comes with risks if you use the wrong tools or ignore legal boundaries. Being aware of these dangers helps you make smart choices and protect your device and data. Here are the main risks to watch out for.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware from Untrusted Websites">
                Many download sites are littered with fake “download” buttons, pop‑up ads, or hidden scripts that install viruses, spyware, or ransomware on your device. Stick to reputable platforms like videodownload.io to stay safe.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Legal Consequences">
                Downloading copyrighted videos without permission violates YouTube’s Terms of Service and may lead to account issues or action from rights holders. Always check the video’s license or use legal alternatives like YouTube Premium.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Poor‑Quality or Corrupted Files">
                Shady sites often deliver low‑resolution videos or files that don’t play correctly, wasting your time and storage. Reliable tools ensure you get the quality you expect.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Breaches">
                Untrustworthy download sites may track your browsing habits, collect personal information, or sell your data to third parties. Choose a service that prioritizes user privacy and avoids unnecessary permissions.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Incomplete Downloads">
                Some tools fail to process videos properly, leaving you with partial or broken files that won’t open. This is common with outdated or poorly designed sites.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Ethical Issues for Creators">
                Downloading videos can bypass ads and reduce creator revenue. Consider supporting creators by watching online when possible or getting permission for downloads.
              </FeatureCard>
            </div>
            <p className="section-muted">By using a trusted, secure tool like videodownload.io and respecting copyright rules, you can minimize these risks and enjoy safe, reliable downloads.</p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Why Use videodownload.io</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Your Trusted Partner for YouTube Downloads</h2>
            <p className="section-muted mb-4">We launched videodownload.io to provide a safe, simple, and fast way to download YouTube videos without the headaches of sketchy websites. Our mission was to create a clean platform that cuts through the noise of ad‑heavy, risky downloaders. Here are six reasons why videodownload.io stands out as the best choice for your YouTube video downloads.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Malware‑Free and Secure">
                Our site is free of pop‑up ads, fake buttons, or malicious scripts, ensuring your device stays safe from viruses and spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="User‑Friendly Design">
                With a clean interface and simple process, anyone can download videos in seconds — no technical skills required.
              </FeatureCard>
              <FeatureCard icon={Zap} title="High‑Speed Downloads">
                Our optimized servers process videos quickly, so you get your files without long waits, even for high‑quality or long videos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexible Format Options">
                Choose from MP4 for videos or MP3 for audio, with multiple resolution options to match your needs, from 720p to 4K.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completely Free">
                Download unlimited videos without paying a cent. No subscriptions, no hidden fees — full features at no cost.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacy‑First Approach">
                We don’t track your downloads, store your personal data, or share your information with anyone, keeping your activity private.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Common Questions About videodownload.io and YouTube Downloads</h2>
            <p className="section-muted mb-4">We’ve compiled answers to the most frequent questions about using videodownload.io and downloading YouTube videos to help you get started with confidence.</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">1. Is videodownload.io really free to use?</AccordionTrigger>
                <AccordionContent className="section-muted">Yes, our platform is 100% free. You can download as many videos as you want without any charges or limits.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">2. Do I need to install software to download videos?</AccordionTrigger>
                <AccordionContent className="section-muted">No, videodownload.io works entirely through your web browser. No apps, extensions, or downloads are needed, keeping things simple.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">3. Can I download entire YouTube playlists?</AccordionTrigger>
                <AccordionContent className="section-muted">Absolutely. Just paste the playlist URL, and our system will process all videos in the playlist for you to download at once.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">4. Is it safe to use videodownload.io?</AccordionTrigger>
                <AccordionContent className="section-muted">Yes, our site is secure, with no pop-up ads or malicious links. We prioritize user safety and test our platform to keep it clean and reliable.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">5. Can I download videos in high quality, like 4K?</AccordionTrigger>
                <AccordionContent className="section-muted">If the YouTube video is available in 4K, you can download it in that resolution. We support a range of qualities, from 360p to 4K, depending on the source.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">6. What if a video doesn’t download properly?</AccordionTrigger>
                <AccordionContent className="section-muted">Double-check the URL and your internet connection. If the issue persists, reach out to our support team, and we’ll troubleshoot the problem for you.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">7. Can I extract audio from YouTube videos?</AccordionTrigger>
                <AccordionContent className="section-muted">Yes, our MP3 conversion feature lets you download just the audio from any YouTube video, perfect for music or podcast clips.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">8. Is downloading YouTube videos legal?</AccordionTrigger>
                <AccordionContent className="section-muted">It depends on the video. YouTube’s Terms of Service ban downloading unless permitted, but videos in the public domain, under Creative Commons, or with creator approval are often fine. Fair use may apply for things like education or commentary, but always verify the video’s license to avoid issues.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">Start Downloading Now</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Get Your YouTube Videos in Seconds</h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted"><CheckCircle className="w-5 h-5 text-accent" />Fast and simple process</div>
              <div className="flex items-center justify-center gap-2 section-muted"><CheckCircle className="w-5 h-5 text-accent" />Safe, malware-free downloads</div>
              <div className="flex items-center justify-center gap-2 section-muted"><CheckCircle className="w-5 h-5 text-accent" />High-quality video and audio</div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download YouTube Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Explore More Downloaders</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Download from your favorite platforms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
              {[
                { name: 'YouTube', Icon: FaYoutube, color: 'bg-[#FF0000]', hex: '#FF0000' },
                { name: 'Instagram', Icon: FaInstagram, color: 'bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C]', hex: '#C13584' },
                { name: 'TikTok', Icon: FaTiktok, color: 'bg-[#000000]', hex: '#000000' },
                { name: 'Facebook', Icon: FaFacebook, color: 'bg-[#1877F2]', hex: '#1877F2' },
                { name: 'Twitter', Icon: FaXTwitter, color: 'bg-[#0f1419]', hex: '#0f1419' },
                { name: 'Pinterest', Icon: FaPinterest, color: 'bg-[#E60023]', hex: '#E60023' },
                { name: 'LinkedIn', Icon: FaLinkedin, color: 'bg-[#0A66C2]', hex: '#0A66C2' },
                { name: 'Reddit', Icon: FaRedditAlien, color: 'bg-[#FF4500]', hex: '#FF4500' },
                { name: 'Vimeo', Icon: FaVimeoV, color: 'bg-[#19B7EA]', hex: '#19B7EA' },
                { name: 'Threads', Icon: SiThreads, color: 'bg-[#000000]', hex: '#000000' },
              ].map((p) => (
                <Link key={p.name} to={`/${p.name.toLowerCase().replace(/\s+/g, '')}`} className="block h-full">
                  <Card className="group glass-card p-4 h-24 sm:h-28 flex items-center hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-200 border border-primary/10 hover:border-primary/30 overflow-hidden relative">
                    <div className={`absolute inset-0 ${p.color} opacity-10`} />
                    <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${p.color} blur-2xl opacity-20`} />
                    <div className="flex items-center justify-between gap-3 relative z-10 w-full">
                      <div className="text-white font-medium text-sm md:text-base">Download {p.name} Video</div>
                      <div className={`w-24 h-12 rounded-full ${p.color} flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110`}>
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
        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow ${toneClasses}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedFeatures() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
      <FeatureCard icon={VideoIcon} title="High-Quality Video Downloads">
      Select from a range of resolutions, including 720p, 1080p, and even 4K when the video supports it. Whether you’re saving a tutorial or a music video, you can choose the quality that best fits your device or preferences without navigating complex settings or technical menus.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Lightning-Fast Download Speeds">
      Our optimized servers ensure videos download in seconds, not minutes. Depending on your internet connection and the video’s length, most files are ready in under a minute, saving you time and frustration. No more waiting around for slow processing.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio Extraction for MP3 Files">
      Need just the audio? Convert any YouTube video into an MP3 file with a single click. This feature is perfect for saving music tracks, podcast episodes, or audio from lectures for offline listening, making it versatile for various use cases.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="No Software Installation Required">
      Download videos directly through your browser on any device—desktop, tablet, or phone. There’s no need to install apps, plugins, or extra programs, which keeps your device clean and your downloading process straightforward and hassle-free.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Full Playlist Download Support">
      Save entire YouTube playlists in one go. Instead of downloading each video individually, paste the playlist link, and our system will process all videos at once, organizing them for easy access. This is a huge time-saver for bulk downloads.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Secure and Ad-Free Interface">
      Unlike many other download sites, videodownload.io is free of annoying pop-up ads, redirects, or suspicious links. Our clean, user-friendly design ensures a safe and smooth experience, so you can focus on downloading without worrying about security risks.
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
          <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">{step}</div>
          <div className="w-px grow bg-gradient-to-b from-accent/30 to-transparent mt-2" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedSteps() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
      <StepCard step={1} title="Copy the YouTube Video URL">
      Open YouTube in your browser or app, find the video you want to download, and copy its URL. You can grab the link from the browser’s address bar or by clicking the “Share” button below the video and selecting “Copy Link.”
      </StepCard>
      <StepCard step={2} title="Paste the URL on Our Website">
      Visit videodownload.io on any browser. On our homepage, you’ll see a download bar where you can paste the copied YouTube URL. Just right-click or long-press to paste the link into the provided field, ensuring it’s accurate.
      </StepCard>
      <StepCard step={3} title="Let Us Process the Video File">
      Click the “Download” button next to the URL bar. Our system will instantly fetch the video and prepare it for download. If prompted, choose your desired format (like MP4 or MP3) and quality (like 1080p or 4K). This step usually takes just a few seconds.
      </StepCard>
      <StepCard step={4} title="Save and Organize Your Video">
      Once processed, a download link will appear. Click it to save the video to your device’s storage. You can rename the file during the download to keep your video collection organized, making it easy to find later for offline viewing or use.
      </StepCard>
    </div>
  );
}
