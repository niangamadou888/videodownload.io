import { useState } from "react";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Download, Globe, Loader2, Play, Video, Music, Image as ImageIcon } from "lucide-react";
import { 
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaXTwitter,
  FaSnapchat,
  FaPinterest,
  FaLinkedin,
  FaRedditAlien,
  FaVimeoV,
  FaTumblr,
  FaDailymotion
} from "react-icons/fa6";
import heroImage from "@/assets/video-dowloader-logo.png";

interface DownloadItem {
  type: string;
  quality?: string;
  format?: string;
  downloadUrl: string;
  url?: string; // Adding URL field for compatibility
  size?: string;
}

interface DownloadResult {
  status: string;
  source?: string;
  url?: string;
  title?: string;
  results?: Array<DownloadItem>;
  thumb?: string;
  duration?: string;
  author?: string;
}

const SUPPORTED_PLATFORMS = [
  { name: "TikTok", Icon: FaTiktok, color: "bg-[#000000]" },
  { name: "Instagram", Icon: FaInstagram, color: "bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C]" },
  { name: "YouTube", Icon: FaYoutube, color: "bg-[#FF0000]" },
  { name: "Facebook", Icon: FaFacebook, color: "bg-[#1877F2]" },
  { name: "Twitter", Icon: FaXTwitter, color: "bg-[#0f1419]" },
  { name: "Snapchat", Icon: FaSnapchat, color: "bg-[#FFFC00]" },
  { name: "Pinterest", Icon: FaPinterest, color: "bg-[#E60023]" },
  { name: "LinkedIn", Icon: FaLinkedin, color: "bg-[#0A66C2]" },
  { name: "Reddit", Icon: FaRedditAlien, color: "bg-[#FF4500]" },
  { name: "Vimeo", Icon: FaVimeoV, color: "bg-[#19B7EA]" },
  { name: "Tumblr", Icon: FaTumblr, color: "bg-[#35465C]" },
  { name: "Dailymotion", Icon: FaDailymotion, color: "bg-[#0066DC]" },
] as const;

export function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const { toast } = useToast();

  // Reset result when URL changes
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    // Clear previous results when a new URL is entered
    if (result) {
      setResult(null);
    }
  };
  
  const handleDownload = async () => {
    if (!url.trim()) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid video URL",
        variant: "destructive",
      });
      return;
    }

    // Reset everything to ensure a clean state
    setIsLoading(true);
    setResult(null); // Explicitly clear previous results including duration

    try {
      // Call our backend API
      const response = await fetch(`${config.apiBaseUrl}/api/extract`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }
      
      const data = await response.json();
      
      // Process the response based on actual API format
      let processedResults = [];
      
      // Handle API response formats
      if (data.results && Array.isArray(data.results)) {
        // If the API already provides results in the expected format
        processedResults = data.results.map(item => ({
          type: item.type || 'video',
          quality: item.quality || '',
          format: item.format || '',
          downloadUrl: item.downloadUrl || '',
          size: item.size || ''
        }));
      } else if (data.url_list && Array.isArray(data.url_list)) {
        // Some APIs might return url_list instead of results
        processedResults = data.url_list.map(item => ({
          type: item.type || 'video',
          quality: item.quality || '',
          format: item.format || '',
          downloadUrl: item.url || item.downloadUrl || '',
          size: item.size || ''
        }));
      } else if (Array.isArray(data)) {
        // Some APIs might return an array directly
        processedResults = data.map(item => ({
          type: item.type || 'video',
          quality: item.quality || '',
          format: item.format || '',
          downloadUrl: item.url || item.downloadUrl || '',
          size: item.size || ''
        }));
      } else {
        // Special case for other response formats
        if (data.downloadUrl || data.url) {
          processedResults = [{
            type: 'video',
            quality: 'default',
            format: '',
            downloadUrl: data.downloadUrl || data.url || '',
            size: ''
          }];
        }
      }
      
      // Get duration from the API response
      let calculatedDuration = '';
      
      // Try to extract duration from various possible fields
      if (data.duration) {
        calculatedDuration = data.duration;
      } else if (data.length_seconds) {
        calculatedDuration = String(data.length_seconds);
      } else if (data.meta && data.meta.duration) {
        calculatedDuration = data.meta.duration;
      } else if (data.video_details && data.video_details.duration) {
        calculatedDuration = data.video_details.duration;
      }
      
      console.log("Calculated duration for current video:", calculatedDuration);
      
      // Process the response
      const processedResult: DownloadResult = {
        status: data.status || 'ok',
        source: data.source || 'video',
        url: data.url || url,
        title: data.title || `Video from ${data.source || 'source'}`,
        results: processedResults,
        thumb: data.thumbnail || data.thumb || '/placeholder.svg',
        duration: calculatedDuration, // Use our freshly calculated duration
        author: data.author || data.uploader || data.username || data.owner || data.channelTitle || data.author_name || (data.user && data.user.name) || (data.meta && (data.meta.author || data.meta.username)) || undefined,
      };
      
      // Final check to ensure we don't have a stale duration
      if (!calculatedDuration && processedResult.duration) {
        console.log("Clearing potentially stale duration");
        processedResult.duration = '';
      }
      
      setResult(processedResult);
      toast({
        title: "Download Ready!",
        description: "Your video has been processed successfully",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes("mp4") || type.includes("video")) return <Video className="h-4 w-4" />;
    if (type.includes("mp3") || type.includes("audio")) return <Music className="h-4 w-4" />;
    if (type.includes("jpg") || type.includes("png") || type.includes("image")) return <ImageIcon className="h-4 w-4" />;
    return <Download className="h-4 w-4" />;
  };
  
  // Format the display name with appropriate extension
  const formatDisplayName = (item: DownloadItem) => {
    const quality = item.quality || '';
    const type = item.type || 'file';
    
    // Get format (extension) - either from format field or from type if it contains a known extension
    let format = '';
    
    // Check if format is directly provided
    if (item.format) {
      format = item.format;
    } 
    // Try to extract extension from type if it's like "video/mp4" or similar
    else if (type.includes('/')) {
      const parts = type.split('/');
      format = parts[parts.length - 1];
    }
    // If type is a known extension itself
    else if (['mp4', 'mp3', 'webm', 'mov', 'avi', 'flv', 'jpg', 'jpeg', 'png', 'gif'].includes(type.toLowerCase())) {
      format = type;
    }
    
    // Format: [Quality] Type.Format
    let displayText = '';
    
    if (quality) {
      displayText += `${quality} `;
    }
    
    // Only add type if it's not the same as format
    if (type !== format && !type.includes('/')) {
      displayText += `${type} `;
    }
    
    // Always show the extension
    if (format) {
      displayText += `.${format}`;
    } else {
      // Fallback extension based on type
      if (type.includes('video')) displayText += '.mp4';
      else if (type.includes('audio')) displayText += '.mp3';
      else if (type.includes('image')) displayText += '.jpg';
    }
    
    return displayText.trim();
  };
  
  // Format duration to a concise, consistent string (e.g., 1h 2m 3s, 2m 33s, 45s)
  const formatDuration = (duration: string | number | undefined): string => {
    if (duration === undefined || duration === null) return '';

    // Helper: parse ISO 8601 like PT1H2M3S
    const parseIso8601 = (s: string) => {
      const match = s.match(/^P(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)$/i);
      if (!match) return null;
      const h = parseInt(match[1] || '0', 10);
      const m = parseInt(match[2] || '0', 10);
      const sec = parseInt(match[3] || '0', 10);
      return { h, m, s: sec };
    };

    // Normalize to hours/mins/secs
    let hours = 0, mins = 0, secs = 0;

    try {
      if (typeof duration === 'number') {
        const total = Math.max(0, Math.round(duration));
        hours = Math.floor(total / 3600);
        mins = Math.floor((total % 3600) / 60);
        secs = total % 60;
      } else {
        const raw = String(duration).trim();

        // ISO 8601
        const iso = parseIso8601(raw);
        if (iso) {
          ({ h: hours, m: mins, s: secs } = iso);
        }
        // HH:MM:SS or MM:SS
        else if (raw.includes(':')) {
          const parts = raw.split(':').map(p => parseInt(p, 10));
          if (parts.length === 3) {
            hours = parts[0] || 0; mins = parts[1] || 0; secs = parts[2] || 0;
          } else if (parts.length === 2) {
            mins = parts[0] || 0; secs = parts[1] || 0;
          }
        }
        // Plain seconds as string
        else if (!isNaN(Number(raw))) {
          const total = Math.max(0, Math.round(Number(raw)));
          hours = Math.floor(total / 3600);
          mins = Math.floor((total % 3600) / 60);
          secs = total % 60;
        }
      }

      // Build concise display, skip zero units except when all zero
      const partsOut: string[] = [];
      if (hours > 0) partsOut.push(`${hours}h`);
      if (mins > 0) partsOut.push(`${mins}m`);
      if (secs > 0 || partsOut.length === 0) partsOut.push(`${secs}s`);

      return partsOut.join(' ');
    } catch {
      return String(duration);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center relative z-10 mb-16">
          <div className="relative flex justify-center mb-10">
            <div className="absolute -z-10 w-56 h-56 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Video Downloader" 
              className="w-72 h-56 object-contain animate-float drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent tracking-tight">
            VideoDownload.io
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Download videos, audio, and images from <span className="font-semibold text-white">40+ social media platforms</span>.
            Fast, free, and without watermarks.
          </p>
          
          {/* Download Interface */}
          <Card className="glass-card max-w-4xl mx-auto p-8 md:p-10 mb-16 border-primary/10 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-md"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-accent/50 rounded-br-md"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8 relative">
              <Input
                type="url"
                placeholder="Paste video URL here (TikTok, Instagram, YouTube, etc.)"
                value={url}
                onChange={handleUrlChange}
                className="flex-1 bg-input/40 backdrop-blur-sm border-primary/20 text-base md:text-lg h-14 md:h-16 shadow-lg focus:ring-2 focus:ring-primary/50 rounded-lg pl-5"
                disabled={isLoading}
              />
              <Button
                onClick={handleDownload}
                disabled={isLoading}
                variant="download"
                size="lg"
                className="h-14 md:h-16 px-8 md:px-10 text-base font-semibold rounded-lg"
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
            
            <div className="flex items-center justify-center gap-3 text-sm md:text-base text-muted-foreground">
              <Globe className="h-5 w-5 text-primary/70" />
              <span>Supports 40+ platforms • No registration required • Fast & secure</span>
            </div>
          </Card>

          {/* Results */}
          {result && (
            <Card className="glass-card max-w-3xl mx-auto p-8 mb-16 border-primary/10 overflow-hidden backdrop-blur-lg relative">
              <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8 border-b border-primary/10 pb-6">
                {result.thumb && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 rounded-2xl blur transition-all duration-300 -z-10"></div>
                    <img 
                      src={result.thumb} 
                      alt="Thumbnail" 
                      className="w-full md:w-52 h-auto aspect-video md:h-52 object-cover rounded-xl shadow-xl border border-primary/20 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-xl md:text-2xl mb-3 text-white leading-tight">{result.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {formatDuration(result.duration) && (
                      <Badge variant="outline" className="bg-primary/20 text-white border-primary/30 py-1 px-3 text-sm hover:bg-primary/30 transition-colors">
                        <Play className="h-3 w-3 mr-2" />
                        {formatDuration(result.duration)}
                      </Badge>
                    )}
                    {result.source && (
                      <Badge variant="outline" className="bg-accent/20 text-white border-accent/30 py-1 px-3 text-sm hover:bg-accent/30 transition-colors uppercase tracking-wide">
                        {result.source}
                      </Badge>
                    )}
                  </div>
                  {result.author && (
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>Creator:</span>
                      <span className="text-foreground font-medium">{result.author}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-lg mb-3 text-white">Download Options</h4>
                {result.results && result.results.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {result.results.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-card/40 hover:bg-card/50 rounded-xl border border-primary/10 transition-all duration-300 hover:border-primary/20">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-white">
                            {getFileIcon(item.type)}
                          </div>
                          <div>
                            <span className="font-medium text-white">
                              {formatDisplayName(item)}
                            </span>
                            {item.size && <span className="text-primary/80 ml-3 text-sm">({item.size})</span>}
                          </div>
                        </div>
                        <Button
                          variant="glass"
                          size="default"
                          className="bg-primary/20 hover:bg-primary/40 text-white border-primary/30"
                          onClick={async () => {
                            try {
                              // Show toast to indicate download is starting
                              toast({
                                title: "Starting Download...",
                                description: "Please wait while we prepare your file",
                              });
                              
                              const filenameBase = `${result.source || 'video'}_${formatDisplayName(item)}`
                                .replace(/\s+/g, '_')
                                .replace(/[^A-Za-z0-9._-]/g, '');
                              const urlParam = encodeURIComponent(item.downloadUrl || item.url || '');
                              const nameParam = encodeURIComponent(filenameBase);
                              const refererParam = encodeURIComponent(result.url || url);
                              const sourceParam = encodeURIComponent(result.source || '');
                              
                              // Hit backend proxy to force attachment download with referer hint
                              const proxyUrl = `${config.apiBaseUrl}/api/download?url=${urlParam}&filename=${nameParam}&referer=${refererParam}&source=${sourceParam}`;
                              
                              // Open in new tab for better download experience
                              window.open(proxyUrl, '_blank');
                            } catch (error) {
                              console.error("Download error:", error);
                              toast({
                                title: "Download Failed",
                                description: "Unable to download the file. Please try again.",
                                variant: "destructive",
                              });
                            }
                          }}
                        >
                          <Download className="h-5 w-5 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center border border-dashed border-primary/30 rounded-xl bg-card/30">
                    <p className="text-white mb-2">No download options available</p>
                    <p className="text-sm text-muted-foreground">Please try a different URL or check that the content is publicly accessible</p>
                    <p className="text-xs mt-3 text-muted-foreground">Response status: {result.status}</p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Supported Platforms */}
        <div className="text-center relative z-10 mt-24 mb-24">
          <div className="absolute top-1/2 left-0 w-full h-40 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 -z-10 blur-3xl"></div>
          
          <div className="max-w-xs mx-auto mb-12 relative">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Supported Platforms</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
            {SUPPORTED_PLATFORMS.map((platform, index) => (
              <div key={index} className="group relative">
                <Card className="glass-card p-6 hover:scale-[1.05] transition-all duration-300 overflow-hidden border border-primary/10 hover:border-primary/30">
                  <div className={`absolute inset-0 opacity-20 ${platform.color}`} />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${platform.color} text-white shadow-lg group-hover:animate-pulse-glow`}>
                      <platform.Icon className="w-8 h-8" />
                    </div>
                    <div className="text-base font-medium text-white">{platform.name}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 mb-16 relative z-10">
          <div className="absolute -z-10 -left-40 bottom-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -right-40 top-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="text-center max-w-xs mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card p-8 text-center transition-transform duration-300 hover:scale-[1.02] border border-primary/10 hover:border-primary/30 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-70"></div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">High Quality</h3>
              <p className="text-muted-foreground leading-relaxed">Download videos in the highest available quality, up to 4K resolution for maximum clarity.</p>
            </Card>

            <Card className="glass-card p-8 text-center transition-transform duration-300 hover:scale-[1.02] border border-primary/10 hover:border-primary/30 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent opacity-70"></div>
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Video className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">No Watermarks</h3>
              <p className="text-muted-foreground leading-relaxed">Get clean downloads without watermarks from supported platforms for professional use.</p>
            </Card>

            <Card className="glass-card p-8 text-center transition-transform duration-300 hover:scale-[1.02] border border-primary/10 hover:border-primary/30 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-glow via-primary-glow to-primary-glow opacity-70"></div>
              <div className="w-16 h-16 bg-primary-glow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <Globe className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">40+ Platforms</h3>
              <p className="text-muted-foreground leading-relaxed">Support for all major social media and video platforms with regularly updated compatibility.</p>
            </Card>
          </div>
          
          {/* Footer section */}
          <div className="mt-32 text-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} VideoDownload.io - Fast & Free Video Downloader</p>
          </div>
        </div>
      </div>
    </div>
  );
}