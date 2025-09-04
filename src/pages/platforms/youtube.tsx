import type { ComponentType, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PlatformSubheader from "@/components/PlatformSubheader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Video as VideoIcon, Zap, Music, Monitor, ListChecks, Shield, Link as LinkIcon, Clipboard, Cog, Download, CheckCircle } from "lucide-react";

export default function YouTubePage() {
  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
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
            <Link to="/">
              <Button variant="download" className="px-6">Open Downloader</Button>
            </Link>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Why Download YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Top Use Cases for Offline Video Access</h2>
            <p className="section-muted mb-4">Downloading YouTube videos gives you the freedom to watch content anytime, anywhere, without relying on an internet connection. Whether you’re saving data, preparing for a trip, or archiving content, offline videos are incredibly useful. Below are some of the best reasons to download YouTube videos for personal use.</p>
            <ul className="list-disc list-inside space-y-2 section-muted mb-6">
            <li><strong>Traveling Without Internet Access</strong>: Save movies, vlogs, or music videos to watch on long flights, train rides, or in remote areas where Wi‑Fi or mobile data isn’t available. This ensures uninterrupted entertainment on the go.</li>
            <li><strong>Educational Purposes and Studying</strong>: Download tutorials, lectures, or how‑to guides for offline learning. For example, save coding walkthroughs, language lessons, or DIY repair videos to review at your own pace without streaming.</li>
            <li><strong>Content Creation and Editing</strong>: Grab clips for your own videos, such as reaction videos, montages, or commentary, as long as you follow copyright rules or get creator permission. This is great for YouTubers or TikTok creators.</li>
            <li><strong>Archiving Favorite Videos</strong>: Some videos get deleted or removed from YouTube due to channel changes or copyright issues. Downloading lets you preserve personal favorites or rare content for long‑term access.</li>
            <li><strong>Saving Mobile Data Usage</strong>: Streaming videos eats up data, especially on limited plans. Downloading over Wi‑Fi lets you watch without worrying about data caps or expensive bills.</li>
            <li><strong>Offline Entertainment Library</strong>: Build a collection of music videos, movie trailers, or vlogs to enjoy offline. Perfect for camping trips, gym sessions, or relaxing at home without buffering delays.</li>
            <li><strong>Workshops and Presentations</strong>: Professionals can download industry‑related videos, like keynote speeches or training sessions, to share during offline workshops or meetings, ensuring smooth playback without internet reliance.</li>
            </ul>
            <p className="section-muted">Downloading YouTube videos offers flexibility and convenience, making it easier to enjoy content on your terms, whether for fun, work, or learning.</p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Who Should Download YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">People Who Benefit Most from Offline Videos</h2>
            <p className="section-muted mb-4">Downloading YouTube videos isn’t just for casual viewers—it’s a game‑changer for specific groups who need offline access for work, creativity, or convenience. Here’s a look at who can get the most out of downloading YouTube videos and why it’s worth doing.</p>
            <ul className="list-disc list-inside space-y-2 section-muted mb-6">
            <li><strong>Content Creators and Influencers</strong>: YouTubers, TikTokers, or streamers can download clips for reaction videos, mashups, or analysis, provided they respect copyright and fair use laws or get permission from the original creator.</li>
            <li><strong>Students and Teachers</strong>: Save educational content like math tutorials, science explainers, or history documentaries for offline study or classroom use. This is ideal for areas with poor internet or for focused learning without distractions.</li>
            <li><strong>Frequent Travelers</strong>: Whether you’re on a plane, train, or in a remote location, downloaded videos ensure entertainment without relying on spotty Wi‑Fi or costly data plans.</li>
            <li><strong>Music Enthusiasts</strong>: Convert music videos or live performances to MP3s for offline playlists. This is great for creating workout mixes or listening to interviews without streaming, as long as the source is legal.</li>
            <li><strong>Video Archivists</strong>: Collectors or fans of niche content can save rare videos, old uploads, or personal favorites that might disappear from YouTube due to account closures or content purges.</li>
            <li><strong>Fitness and Wellness Fans</strong>: Download yoga sessions, workout routines, or meditation guides to follow along offline, whether at home, in a park, or at the gym without needing a connection.</li>
            <li><strong>Researchers and Professionals</strong>: Academics or industry experts can save conference talks, webinars, or training videos for offline reference during fieldwork, presentations, or study sessions.</li>
            </ul>
            <p className="section-muted">No matter your role or lifestyle, downloading YouTube videos can save time, data, and effort while keeping your favorite content accessible.</p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Is It Legal to Download YouTube Videos?</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">What You Need to Know About the Law</h2>
            <p className="section-muted mb-4">The legality of downloading YouTube videos depends on several factors, and it’s important to understand the rules to avoid trouble. YouTube’s Terms of Service explicitly prohibit downloading videos unless the platform provides an official option, like YouTube Premium’s offline feature for subscribers. Under U.S. copyright law, downloading copyrighted content without permission from the creator or rights holder is illegal and could lead to civil lawsuits, though enforcement against individual users for personal use is rare.</p>
            <p className="section-muted mb-2">However, there are exceptions where downloading may be legal:</p>
            <ul className="list-disc list-inside space-y-2 section-muted mb-6">
            <li><strong>Public Domain Videos</strong>: Content no longer under copyright protection can be downloaded freely.</li>
            <li><strong>Creative Commons Licenses</strong>: Some YouTube videos have licenses allowing downloads for certain uses, like remixing or sharing, as long as you follow the terms.</li>
            <li><strong>Creator Permission</strong>: If the video’s creator explicitly allows downloads, you’re in the clear.</li>
            <li><strong>Fair Use Cases</strong>: Limited downloading for education, commentary, criticism, or research might qualify as fair use, but this depends on the context and how you use the video.</li>
            </ul>
            <p className="section-muted">To stay safe, check the video’s license in its description or contact the creator for permission. YouTube Premium offers a legal way to save videos offline for personal use. If you’re unsure, err on the side of caution to respect creators and avoid violating copyright laws.</p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Risks of Downloading YouTube Videos</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Potential Dangers and How to Avoid Them</h2>
            <p className="section-muted mb-4">While downloading YouTube videos is convenient, it comes with risks if you use the wrong tools or ignore legal boundaries. Being aware of these dangers helps you make smart choices and protect your device and data. Here are the main risks to watch out for.</p>
            <ul className="list-disc list-inside space-y-2 section-muted mb-6">
            <li><strong>Malware from Untrusted Websites</strong>: Many download sites are littered with fake “download” buttons, pop‑up ads, or hidden scripts that install viruses, spyware, or ransomware on your device. These can steal your data or damage your system. Stick to reputable platforms like videodownload.io to stay safe.</li>
            <li><strong>Legal Consequences</strong>: Downloading copyrighted videos without permission violates YouTube’s Terms of Service, which could lead to account suspensions or, in rare cases, legal action from rights holders. Always check the video’s license or use legal alternatives like YouTube Premium.</li>
            <li><strong>Poor‑Quality or Corrupted Files</strong>: Shady sites often deliver low‑resolution videos or files that don’t play correctly, wasting your time and storage. Reliable tools ensure you get the quality you expect.</li>
            <li><strong>Privacy Breaches</strong>: Untrustworthy download sites may track your browsing habits, collect personal information, or sell your data to third parties. Choose a service that prioritizes user privacy and doesn’t require unnecessary permissions.</li>
            <li><strong>Incomplete Downloads</strong>: Some tools fail to process videos properly, leaving you with partial or broken files that won’t open. This is common with outdated or poorly designed sites.</li>
            <li><strong>Ethical Issues for Creators</strong>: Downloading videos can bypass ads, which hurts creators who rely on ad revenue or views for their income. Consider supporting creators by watching their content online when possible or getting their permission for downloads.</li>
            </ul>
            <p className="section-muted">By using a trusted, secure tool like videodownload.io and respecting copyright rules, you can minimize these risks and enjoy safe, reliable downloads.</p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Why Use videodownload.io</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">Your Trusted Partner for YouTube Downloads</h2>
            <p className="section-muted mb-4">We launched videodownload.io to provide a safe, simple, and fast way to download YouTube videos without the headaches of sketchy websites. Our mission was to create a clean platform that cuts through the noise of ad‑heavy, risky downloaders. Here are six reasons why videodownload.io stands out as the best choice for your YouTube video downloads.</p>
            <ol className="list-decimal list-inside space-y-2 section-muted mb-2">
              <li><strong>Malware‑Free and Secure</strong>: Our site is free of pop‑up ads, fake buttons, or malicious scripts, ensuring your device stays safe from viruses and spyware.</li>
              <li><strong>User‑Friendly Design</strong>: With a clean interface and simple process, anyone can download videos in seconds, no technical skills required.</li>
              <li><strong>High‑Speed Downloads</strong>: Our optimized servers process videos quickly, so you get your files without long waits, even for high‑quality or long videos.</li>
              <li><strong>Flexible Format Options</strong>: Choose from MP4 for videos or MP3 for audio, with multiple resolution options to match your needs, from 720p to 4K.</li>
              <li><strong>Completely Free</strong>: Download unlimited videos without paying a cent. No subscriptions, no hidden fees, just free access to our full features.</li>
              <li><strong>Privacy‑First Approach</strong>: We don’t track your downloads, store your personal data, or share your information with anyone, keeping your activity private.</li>
            </ol>
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
              <Link to="/">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Your Video
                </Button>
              </Link>
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
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="glass-card p-5 md:p-6 border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow">
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
  icon: Icon,
  title,
  children,
}: {
  step: number;
  icon: ComponentType<{ className?: string }>;
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
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow">
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

function EnhancedSteps() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
      <StepCard step={1} icon={LinkIcon} title="Copy the YouTube Video URL">
      Open YouTube in your browser or app, find the video you want to download, and copy its URL. You can grab the link from the browser’s address bar or by clicking the “Share” button below the video and selecting “Copy Link.”
      </StepCard>
      <StepCard step={2} icon={Clipboard} title="Paste the URL on Our Website">
      Visit videodownload.io on any browser. On our homepage, you’ll see a download bar where you can paste the copied YouTube URL. Just right-click or long-press to paste the link into the provided field, ensuring it’s accurate.
      </StepCard>
      <StepCard step={3} icon={Cog} title="Let Us Process the Video File">
      Click the “Download” button next to the URL bar. Our system will instantly fetch the video and prepare it for download. If prompted, choose your desired format (like MP4 or MP3) and quality (like 1080p or 4K). This step usually takes just a few seconds.
      </StepCard>
      <StepCard step={4} icon={Download} title="Save and Organize Your Video">
      Once processed, a download link will appear. Click it to save the video to your device’s storage. You can rename the file during the download to keep your video collection organized, making it easy to find later for offline viewing or use.
      </StepCard>
    </div>
  );
}
