import { VideoDownloader } from "@/components/VideoDownloader";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  const { t } = useLanguage();

  usePageMeta({
    title: t("homeMetaTitle"),
    description: t("homeMetaDescription")
  });

  return <VideoDownloader />;
};

export default Index;
