import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YouTubePage from "./pages/platforms/youtube";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Platform-specific SEO/content pages */}
            <Route path="/youtube" element={<YouTubePage />} />
            <Route path="/tiktok" element={<TikTokPage />} />
            <Route path="/instagram" element={<InstagramPage />} />
            <Route path="/facebook" element={<FacebookPage />} />
            <Route path="/twitter" element={<TwitterPage />} />
            <Route path="/pinterest" element={<PinterestPage />} />
            <Route path="/linkedin" element={<LinkedInPage />} />
            <Route path="/reddit" element={<RedditPage />} />
            <Route path="/vimeo" element={<VimeoPage />} />
            <Route path="/threads" element={<ThreadsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
