import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
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

type IconType = (props: { className?: string }) => JSX.Element;

const PLATFORM_META: Record<string, { Icon: IconType; color: string }> = {
  tiktok: { Icon: FaTiktok as IconType, color: "bg-[#000000]" },
  instagram: { Icon: FaInstagram as IconType, color: "bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C]" },
  youtube: { Icon: FaYoutube as IconType, color: "bg-[#FF0000]" },
  facebook: { Icon: FaFacebook as IconType, color: "bg-[#1877F2]" },
  twitter: { Icon: FaXTwitter as IconType, color: "bg-[#0f1419]" },
  pinterest: { Icon: FaPinterest as IconType, color: "bg-[#E60023]" },
  linkedin: { Icon: FaLinkedin as IconType, color: "bg-[#0A66C2]" },
  reddit: { Icon: FaRedditAlien as IconType, color: "bg-[#FF4500]" },
  vimeo: { Icon: FaVimeoV as IconType, color: "bg-[#19B7EA]" },
  threads: { Icon: SiThreads as IconType, color: "bg-[#000000]" },
};

export function PlatformSubheader({ platform }: { platform: string }) {
  const key = platform.toLowerCase();
  const meta = PLATFORM_META[key];
  const Icon = meta?.Icon;
  const color = meta?.color ?? "bg-primary/30";
  const { buildUrl } = useLanguageNavigation();

  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="backdrop-blur-md bg-background/70 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to={buildUrl("/")} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-primary/20 bg-secondary/30">
                <ArrowLeft className="w-4 h-4" />
              </span>
              <span className="hidden sm:inline">Back</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shadow-md`}>
                {Icon ? <Icon className="w-4 h-4 text-white" /> : null}
              </div>
              <div className="text-base font-semibold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                {platform}
              </div>
            </div>

            <div className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformSubheader;

