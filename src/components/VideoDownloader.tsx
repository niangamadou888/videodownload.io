import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Download, Globe, Loader2, Play, Video, Music, Image as ImageIcon } from "lucide-react";
import heroImage from "@/assets/video-download-hero.png";

interface DownloadResult {
  status: string;
  title?: string;
  url_list?: Array<{
    url: string;
    type: string;
    quality: string;
    size?: string;
  }>;
  thumb?: string;
  duration?: string;
}

const SUPPORTED_PLATFORMS = [
  { name: "TikTok", icon: "🎵", color: "bg-pink-500" },
  { name: "Instagram", icon: "📷", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "YouTube", icon: "▶️", color: "bg-red-500" },
  { name: "Facebook", icon: "👥", color: "bg-blue-600" },
  { name: "Twitter", icon: "🐦", color: "bg-blue-400" },
  { name: "Snapchat", icon: "👻", color: "bg-yellow-400" },
  { name: "Pinterest", icon: "📌", color: "bg-red-600" },
  { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
  { name: "Reddit", icon: "🤖", color: "bg-orange-500" },
  { name: "Vimeo", icon: "🎬", color: "bg-blue-500" },
  { name: "Tumblr", icon: "📝", color: "bg-indigo-600" },
  { name: "Dailymotion", icon: "🎥", color: "bg-blue-600" },
];

export function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!url.trim()) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid video URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      // This will be implemented with the API integration
      // For now, show a demo result
      setTimeout(() => {
        setResult({
          status: "success",
          title: "Sample Video Title",
          url_list: [
            { url: "#", type: "mp4", quality: "720p", size: "15.2 MB" },
            { url: "#", type: "mp4", quality: "480p", size: "8.7 MB" },
            { url: "#", type: "mp3", quality: "128kbps", size: "3.4 MB" },
          ],
          thumb: "/placeholder.svg",
          duration: "2:34",
        });
        setIsLoading(false);
        toast({
          title: "Download Ready!",
          description: "Your video has been processed successfully",
        });
      }, 2000);
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes("mp4") || type.includes("video")) return <Video className="h-4 w-4" />;
    if (type.includes("mp3") || type.includes("audio")) return <Music className="h-4 w-4" />;
    if (type.includes("jpg") || type.includes("png") || type.includes("image")) return <ImageIcon className="h-4 w-4" />;
    return <Download className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src={heroImage} 
              alt="Video Downloader" 
              className="w-64 h-48 object-contain animate-float"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VideoDownload.io
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download videos, audio, and images from 40+ social media platforms.
            Fast, free, and without watermarks.
          </p>
          
          {/* Download Interface */}
          <Card className="glass-card max-w-2xl mx-auto p-8 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="url"
                placeholder="Paste video URL here (TikTok, Instagram, YouTube, etc.)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-input/50 border-border/50 text-lg h-14"
                disabled={isLoading}
              />
              <Button
                onClick={handleDownload}
                disabled={isLoading}
                variant="download"
                size="lg"
                className="h-14 px-8"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Supports 40+ platforms • No registration required • Fast & secure</span>
            </div>
          </Card>

          {/* Results */}
          {result && (
            <Card className="glass-card max-w-2xl mx-auto p-6 mb-12">
              <div className="flex items-start gap-4 mb-6">
                {result.thumb && (
                  <img 
                    src={result.thumb} 
                    alt="Thumbnail" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
                  {result.duration && (
                    <Badge variant="secondary" className="mb-2">
                      <Play className="h-3 w-3 mr-1" />
                      {result.duration}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                {result.url_list?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getFileIcon(item.type)}
                      <div>
                        <span className="font-medium">{item.quality}</span>
                        {item.size && <span className="text-muted-foreground ml-2">({item.size})</span>}
                      </div>
                    </div>
                    <Button variant="glass" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Supported Platforms */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Supported Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {SUPPORTED_PLATFORMS.map((platform, index) => (
              <Card key={index} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl mb-2">{platform.icon}</div>
                <div className="text-sm font-medium">{platform.name}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-muted-foreground">Download videos in the highest available quality, up to 4K resolution.</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Video className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Watermarks</h3>
            <p className="text-muted-foreground">Get clean downloads without watermarks from supported platforms.</p>
          </Card>

          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-2">40+ Platforms</h3>
            <p className="text-muted-foreground">Support for all major social media and video platforms.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}