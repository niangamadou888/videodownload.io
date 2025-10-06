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
import YouTubePageNl from "./pages/platforms/youtube-nl";
import YouTubePageDe from "./pages/platforms/youtube-de";
import YouTubePageVi from "./pages/platforms/youtube-vi";
import YouTubePageId from "./pages/platforms/youtube-id";
import TikTokPage from "./pages/platforms/tiktok";
import TikTokPageFr from "./pages/platforms/tiktok-fr";
import TikTokPageIt from "./pages/platforms/tiktok-it";
import TikTokPageEs from "./pages/platforms/tiktok-es";
import TikTokPagePt from "./pages/platforms/tiktok-pt";
import TikTokPageNl from "./pages/platforms/tiktok-nl";
import TikTokPageDe from "./pages/platforms/tiktok-de";
import TikTokPageVi from "./pages/platforms/tiktok-vi";
import TikTokPageId from "./pages/platforms/tiktok-id";
import InstagramPage from "./pages/platforms/instagram";
import FacebookPage from "./pages/platforms/facebook";
import FacebookPageFr from "./pages/platforms/facebook-fr";
import FacebookPageIt from "./pages/platforms/facebook-it";
import FacebookPageEs from "./pages/platforms/facebook-es";
import FacebookPagePt from "./pages/platforms/facebook-pt";
import FacebookPageNl from "./pages/platforms/facebook-nl";
import FacebookPageDe from "./pages/platforms/facebook-de";
import FacebookPageId from "./pages/platforms/facebook-id";
import FacebookPageVi from "./pages/platforms/facebook-vi";
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
            <Route path="/fr/tiktok" element={<TikTokPageFr />} />
            <Route path="/fr/instagram" element={<InstagramPage />} />
            <Route path="/fr/facebook" element={<FacebookPageFr />} />
            <Route path="/fr/twitter" element={<TwitterPage />} />
            <Route path="/fr/pinterest" element={<PinterestPage />} />
            <Route path="/fr/linkedin" element={<LinkedInPage />} />
            <Route path="/fr/reddit" element={<RedditPage />} />
            <Route path="/fr/vimeo" element={<VimeoPage />} />
            <Route path="/fr/threads" element={<ThreadsPage />} />
            
            {/* Italian routes */}
            <Route path="/it" element={<Index />} />
            <Route path="/it/youtube" element={<YouTubePageIt />} />
            <Route path="/it/tiktok" element={<TikTokPageIt />} />
            <Route path="/it/instagram" element={<InstagramPage />} />
            <Route path="/it/facebook" element={<FacebookPageIt />} />
            <Route path="/it/twitter" element={<TwitterPage />} />
            <Route path="/it/pinterest" element={<PinterestPage />} />
            <Route path="/it/linkedin" element={<LinkedInPage />} />
            <Route path="/it/reddit" element={<RedditPage />} />
            <Route path="/it/vimeo" element={<VimeoPage />} />
            <Route path="/it/threads" element={<ThreadsPage />} />
            
            {/* Portuguese routes */}
            <Route path="/pt" element={<Index />} />
            <Route path="/pt/youtube" element={<YouTubePagePt />} />
            <Route path="/pt/tiktok" element={<TikTokPagePt />} />
            <Route path="/pt/instagram" element={<InstagramPage />} />
            <Route path="/pt/facebook" element={<FacebookPagePt />} />
            <Route path="/pt/twitter" element={<TwitterPage />} />
            <Route path="/pt/pinterest" element={<PinterestPage />} />
            <Route path="/pt/linkedin" element={<LinkedInPage />} />
            <Route path="/pt/reddit" element={<RedditPage />} />
            <Route path="/pt/vimeo" element={<VimeoPage />} />
            <Route path="/pt/threads" element={<ThreadsPage />} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/youtube" element={<YouTubePageEs />} />
            <Route path="/es/tiktok" element={<TikTokPageEs />} />
            <Route path="/es/instagram" element={<InstagramPage />} />
            <Route path="/es/facebook" element={<FacebookPageEs />} />
            <Route path="/es/twitter" element={<TwitterPage />} />
            <Route path="/es/pinterest" element={<PinterestPage />} />
            <Route path="/es/linkedin" element={<LinkedInPage />} />
            <Route path="/es/reddit" element={<RedditPage />} />
            <Route path="/es/vimeo" element={<VimeoPage />} />
            <Route path="/es/threads" element={<ThreadsPage />} />
            
            {/* Dutch routes */}
            <Route path="/nl" element={<Index />} />
            <Route path="/nl/youtube" element={<YouTubePageNl />} />
            <Route path="/nl/tiktok" element={<TikTokPageNl />} />
            <Route path="/nl/instagram" element={<InstagramPage />} />
            <Route path="/nl/facebook" element={<FacebookPageNl />} />
            <Route path="/nl/twitter" element={<TwitterPage />} />
            <Route path="/nl/pinterest" element={<PinterestPage />} />
            <Route path="/nl/linkedin" element={<LinkedInPage />} />
            <Route path="/nl/reddit" element={<RedditPage />} />
            <Route path="/nl/vimeo" element={<VimeoPage />} />
            <Route path="/nl/threads" element={<ThreadsPage />} />
            
            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/youtube" element={<YouTubePageDe />} />
            <Route path="/de/tiktok" element={<TikTokPageDe />} />
            <Route path="/de/instagram" element={<InstagramPage />} />
            <Route path="/de/facebook" element={<FacebookPageDe />} />
            <Route path="/de/twitter" element={<TwitterPage />} />
            <Route path="/de/pinterest" element={<PinterestPage />} />
            <Route path="/de/linkedin" element={<LinkedInPage />} />
            <Route path="/de/reddit" element={<RedditPage />} />
            <Route path="/de/vimeo" element={<VimeoPage />} />
            <Route path="/de/threads" element={<ThreadsPage />} />
            
            {/* Vietnamese routes */}
            <Route path="/vi" element={<Index />} />
            <Route path="/vi/youtube" element={<YouTubePageVi />} />
            <Route path="/vi/tiktok" element={<TikTokPageVi />} />
            <Route path="/vi/instagram" element={<InstagramPage />} />
            <Route path="/vi/facebook" element={<FacebookPageVi />} />
            <Route path="/vi/twitter" element={<TwitterPage />} />
            <Route path="/vi/pinterest" element={<PinterestPage />} />
            <Route path="/vi/linkedin" element={<LinkedInPage />} />
            <Route path="/vi/reddit" element={<RedditPage />} />
            <Route path="/vi/vimeo" element={<VimeoPage />} />
            <Route path="/vi/threads" element={<ThreadsPage />} />
            
            {/* Indonesian routes */}
            <Route path="/id" element={<Index />} />
            <Route path="/id/youtube" element={<YouTubePageId />} />
            <Route path="/id/tiktok" element={<TikTokPageId />} />
            <Route path="/id/instagram" element={<InstagramPage />} />
            <Route path="/id/facebook" element={<FacebookPageId />} />
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
