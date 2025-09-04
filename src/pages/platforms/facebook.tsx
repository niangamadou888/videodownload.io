import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FacebookPage() {
  const platform = "Facebook";
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            {platform} Video Downloader
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download videos, audio, and images from {platform} quickly and safely. High-quality files, no watermarks, and a clean, ad-free experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>High-quality downloads up to 1080p+ when available</li>
              <li>Fast processing with reliable links</li>
              <li>Extract audio (MP3) from {platform} videos</li>
              <li>No software install; works in your browser</li>
              <li>Clean, ad-free UI for safe use</li>
            </ul>
          </Card>

          <Card className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">How to Download</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Copy the {platform} video URL</li>
              <li>Paste the URL on the homepage</li>
              <li>Choose format and quality</li>
              <li>Click to save to your device</li>
            </ol>
          </Card>

          <Card className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why Download</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Offline viewing while traveling</li>
              <li>Study or reference content without streaming</li>
              <li>Personal archiving of favorites</li>
              <li>Save mobile data by downloading on Wi‑Fi</li>
            </ul>
          </Card>

          <Card className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FAQ</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Is it free?</strong> Yes, completely free to use.</p>
              <p><strong>Watermarks?</strong> We aim for clean downloads when available.</p>
              <p><strong>Audio only?</strong> Select MP3 in the options if provided.</p>
              <p><strong>Legal?</strong> Only download content you’re permitted to use.</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Link to="/">
            <Button variant="download" className="px-6">Open Downloader</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
