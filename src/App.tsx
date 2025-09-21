import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YouTubePage from "./pages/platforms/youtube";
import YouTubePageFr from "./pages/platforms/youtube-fr";
import YouTubePageIt from "./pages/platforms/youtube-it";
import YouTubePagePt from "./pages/platforms/youtube-pt";
import YouTubePageEs from "./pages/platforms/youtube-es";
import TikTokPage from "./pages/platforms/tiktok";
import InstagramPage from "./pages/platforms/instagram";
import FacebookPage from "./pages/platforms/facebook";
import TwitterPage from "./pages/platforms/twitter";
import PinterestPage from "./pages/platforms/pinterest";
import LinkedInPage from "./pages/platforms/linkedin";
import RedditPage from "./pages/platforms/reddit";
import VimeoPage from "./pages/platforms/vimeo";
import ThreadsPage from "./pages/platforms/threads";
import { LanguageProvider } from "@/contexts/LanguageContext";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <BackToTopButton />
          <Routes>
            {/* Root redirect to /en */}
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/youtube" element={<YouTubePage />} />
            <Route path="/en/tiktok" element={<TikTokPage />} />
            <Route path="/en/instagram" element={<InstagramPage />} />
            <Route path="/en/facebook" element={<FacebookPage />} />
            <Route path="/en/twitter" element={<TwitterPage />} />
            <Route path="/en/pinterest" element={<PinterestPage />} />
            <Route path="/en/linkedin" element={<LinkedInPage />} />
            <Route path="/en/reddit" element={<RedditPage />} />
            <Route path="/en/vimeo" element={<VimeoPage />} />
            <Route path="/en/threads" element={<ThreadsPage />} />

            {/* French routes */}
            <Route path="/fr" element={<Index />} />
            <Route path="/fr/youtube" element={<YouTubePageFr />} />
            <Route path="/fr/tiktok" element={<TikTokPage />} />
            <Route path="/fr/instagram" element={<InstagramPage />} />
            <Route path="/fr/facebook" element={<FacebookPage />} />
            <Route path="/fr/twitter" element={<TwitterPage />} />
            <Route path="/fr/pinterest" element={<PinterestPage />} />
            <Route path="/fr/linkedin" element={<LinkedInPage />} />
            <Route path="/fr/reddit" element={<RedditPage />} />
            <Route path="/fr/vimeo" element={<VimeoPage />} />
            <Route path="/fr/threads" element={<ThreadsPage />} />
            
            {/* Italian routes */}
            <Route path="/it" element={<Index />} />
            <Route path="/it/youtube" element={<YouTubePageIt />} />
            <Route path="/it/tiktok" element={<TikTokPage />} />
            <Route path="/it/instagram" element={<InstagramPage />} />
            <Route path="/it/facebook" element={<FacebookPage />} />
            <Route path="/it/twitter" element={<TwitterPage />} />
            <Route path="/it/pinterest" element={<PinterestPage />} />
            <Route path="/it/linkedin" element={<LinkedInPage />} />
            <Route path="/it/reddit" element={<RedditPage />} />
            <Route path="/it/vimeo" element={<VimeoPage />} />
            <Route path="/it/threads" element={<ThreadsPage />} />
            
            {/* Portuguese routes */}
            <Route path="/pt" element={<Index />} />
            <Route path="/pt/youtube" element={<YouTubePagePt />} />
            <Route path="/pt/tiktok" element={<TikTokPage />} />
            <Route path="/pt/instagram" element={<InstagramPage />} />
            <Route path="/pt/facebook" element={<FacebookPage />} />
            <Route path="/pt/twitter" element={<TwitterPage />} />
            <Route path="/pt/pinterest" element={<PinterestPage />} />
            <Route path="/pt/linkedin" element={<LinkedInPage />} />
            <Route path="/pt/reddit" element={<RedditPage />} />
            <Route path="/pt/vimeo" element={<VimeoPage />} />
            <Route path="/pt/threads" element={<ThreadsPage />} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/youtube" element={<YouTubePageEs />} />
            <Route path="/es/tiktok" element={<TikTokPage />} />
            <Route path="/es/instagram" element={<InstagramPage />} />
            <Route path="/es/facebook" element={<FacebookPage />} />
            <Route path="/es/twitter" element={<TwitterPage />} />
            <Route path="/es/pinterest" element={<PinterestPage />} />
            <Route path="/es/linkedin" element={<LinkedInPage />} />
            <Route path="/es/reddit" element={<RedditPage />} />
            <Route path="/es/vimeo" element={<VimeoPage />} />
            <Route path="/es/threads" element={<ThreadsPage />} />
            
            {/* Dutch routes */}
            <Route path="/nl" element={<Index />} />
            <Route path="/nl/youtube" element={<YouTubePage />} />
            <Route path="/nl/tiktok" element={<TikTokPage />} />
            <Route path="/nl/instagram" element={<InstagramPage />} />
            <Route path="/nl/facebook" element={<FacebookPage />} />
            <Route path="/nl/twitter" element={<TwitterPage />} />
            <Route path="/nl/pinterest" element={<PinterestPage />} />
            <Route path="/nl/linkedin" element={<LinkedInPage />} />
            <Route path="/nl/reddit" element={<RedditPage />} />
            <Route path="/nl/vimeo" element={<VimeoPage />} />
            <Route path="/nl/threads" element={<ThreadsPage />} />
            
            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/youtube" element={<YouTubePage />} />
            <Route path="/de/tiktok" element={<TikTokPage />} />
            <Route path="/de/instagram" element={<InstagramPage />} />
            <Route path="/de/facebook" element={<FacebookPage />} />
            <Route path="/de/twitter" element={<TwitterPage />} />
            <Route path="/de/pinterest" element={<PinterestPage />} />
            <Route path="/de/linkedin" element={<LinkedInPage />} />
            <Route path="/de/reddit" element={<RedditPage />} />
            <Route path="/de/vimeo" element={<VimeoPage />} />
            <Route path="/de/threads" element={<ThreadsPage />} />
            
            {/* Vietnamese routes */}
            <Route path="/vi" element={<Index />} />
            <Route path="/vi/youtube" element={<YouTubePage />} />
            <Route path="/vi/tiktok" element={<TikTokPage />} />
            <Route path="/vi/instagram" element={<InstagramPage />} />
            <Route path="/vi/facebook" element={<FacebookPage />} />
            <Route path="/vi/twitter" element={<TwitterPage />} />
            <Route path="/vi/pinterest" element={<PinterestPage />} />
            <Route path="/vi/linkedin" element={<LinkedInPage />} />
            <Route path="/vi/reddit" element={<RedditPage />} />
            <Route path="/vi/vimeo" element={<VimeoPage />} />
            <Route path="/vi/threads" element={<ThreadsPage />} />
            
            {/* Indonesian routes */}
            <Route path="/id" element={<Index />} />
            <Route path="/id/youtube" element={<YouTubePage />} />
            <Route path="/id/tiktok" element={<TikTokPage />} />
            <Route path="/id/instagram" element={<InstagramPage />} />
            <Route path="/id/facebook" element={<FacebookPage />} />
            <Route path="/id/twitter" element={<TwitterPage />} />
            <Route path="/id/pinterest" element={<PinterestPage />} />
            <Route path="/id/linkedin" element={<LinkedInPage />} />
            <Route path="/id/reddit" element={<RedditPage />} />
            <Route path="/id/vimeo" element={<VimeoPage />} />
            <Route path="/id/threads" element={<ThreadsPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
