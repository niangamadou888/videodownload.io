import type { ComponentType, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PlatformSubheader from "@/components/PlatformSubheader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Video as VideoIcon,
  Zap,
  Music,
  Monitor,
  ListChecks,
  Shield,
  Download,
  CheckCircle,
  AlertTriangle,
  EyeOff,
  FileX,
  Ban,
  AlertCircle,
} from "lucide-react";
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
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function TikTokPageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video TikTok | Miễn Phí & HD",
    description:
      "Tải video TikTok không logo chất lượng HD. Công cụ tải TikTok miễn phí: nhanh, an toàn và không mất phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Hộp tải xuống tối giản */}
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video TikTok"
            />
          </div>

          {/* Tính năng */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tải video TikTok dễ dàng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn thiết yếu để lưu clip offline
          </h2>
          <p className="text-muted-foreground mb-6">
            Lưu video TikTok chất lượng HD không có logo. Công cụ tải của chúng tôi nhanh, an toàn và hoàn toàn miễn phí, hoàn hảo để xem bất cứ khi nào.
          </p>

          <EnhancedFeatures />

          {/* Cách tải xuống */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn từng bước đơn giản để lưu trong giây lát
          </h2>
          <p className="text-muted-foreground mb-6">
            Với videodownload.io, bạn tải bất kỳ video nào trong vài phút. Bốn bước trực quan được thiết kế cho những người muốn sự tiện lợi, ngay cả khi không am hiểu công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Tải video TikTok
              </Button>
            </a>
          </div>

          {/* Tại sao tải xuống */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại sao nên tải video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Khi quyền truy cập offline tạo ra sự khác biệt
            </h2>
            <p className="section-muted mb-4">
              TikTok thay đổi trong vài giờ: xu hướng biến mất, hồ sơ chuyển hướng và video quan trọng không còn. Khi tải xuống, bạn giữ lại những gì thực sự quan trọng, xây dựng bộ sưu tập tùy chỉnh và không phụ thuộc vào tín hiệu hoặc nền tảng.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Xem offline khi đi du lịch
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Máy bay, tàu điện ngầm hoặc Wi-Fi không ổn định phá hủy trải nghiệm. Lưu hướng dẫn, hài kịch và nhạc thiếu nhi trước khi rời nhà và xem không bị gián đoạn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix và tạo nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Người sáng tạo lưu clip tham khảo để remix xu hướng, so sánh kỹ thuật hoặc trả lời khán giả mà không có logo. Lý tưởng cho phản ứng, reels và hợp tác.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sao lưu video của bạn
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Những người đăng bài thường xuyên biết rằng lệnh cấm hoặc chỉnh sửa sai có thể xóa mọi thứ. Lưu bản sao HD trên máy tính hoặc đám mây và yên tâm. Học sinh cũng lưu tóm tắt hoặc mẹo học tập để xem lại offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái sử dụng trên các nền tảng khác
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Điều chỉnh video cho Reels hoặc Shorts và mở rộng phạm vi tiếp cận. Doanh nghiệp nhỏ lưu lời chứng thực hoặc hậu trường để hiển thị trên trang web, bài thuyết trình hoặc điểm bán hàng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu trữ cá nhân về ký ức
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Khoảnh khắc gia đình, công thức nấu ăn, bài thuyết trình tại trường hoặc lời tri ân được bảo vệ và sẵn sàng để chia sẻ mà không phụ thuộc vào ứng dụng.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tóm lại, tải video TikTok mang lại sự tự do hoàn toàn để tiêu thụ, học tập hoặc làm việc theo nhịp độ của bạn.
            </p>
          </div>

          {/* Ai nên tải xuống */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những người hưởng lợi nhiều nhất từ chế độ offline
            </h2>
            <p className="section-muted mb-4">
              Tải xuống là cần thiết cho những ai sử dụng TikTok như công cụ sáng tạo, học tập hoặc kinh doanh. Nếu video hỗ trợ thói quen của bạn, việc lưu chúng là hợp lý.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người tạo nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video của riêng họ hoặc cảm hứng để chỉnh sửa một cách thoải mái, so sánh xu hướng và tạo phản hồi mà không có logo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Giáo viên và học sinh
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu trữ các cuộc biểu diễn, thí nghiệm hoặc mẹo nhanh để sử dụng trong lớp, xem lại sau hoặc chuẩn bị hoạt động mà không phụ thuộc vào internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gia đình và người chăm sóc
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu những khoảnh khắc đặc biệt, bài hát và câu chuyện để xem cùng nhau hoặc chia sẻ với những người không sử dụng ứng dụng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Doanh nghiệp nhỏ
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tận dụng UGC, lời chứng thực và hậu trường để sử dụng trong cửa hàng, bài thuyết trình và chiến dịch đa kênh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người có sở thích và tự học
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải công thức nấu ăn, bài học âm nhạc, hướng dẫn làm vườn hoặc thói quen tập luyện để thực hành đúng nhịp độ.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Dù hồ sơ của bạn là gì, tải video tiết kiệm thời gian, dữ liệu và đảm bảo quyền truy cập liên tục vào nội dung chính.
            </p>
          </div>

          {/* Khía cạnh pháp lý */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Việc tải video TikTok có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Luật pháp nói gì về tải xuống
            </h2>
            <p className="section-muted mb-4">
              Tải video TikTok là một vùng xám. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Quy tắc của nền tảng cho phép lưu clip công khai</a> để xem offline khi người sáng tạo không chặn tùy chọn. Đối với sử dụng cá nhân không có vấn đề gì, nhưng các điều khoản cấm công cụ của bên thứ ba, vì vậy về lý thuyết TikTok có thể nhận diện các mẫu. Trên thực tế, các nỗ lực tập trung vào việc tải lại hàng loạt.
            </p>
            <p className="section-muted mb-4">
              Luật bản quyền như DMCA bảo vệ người sáng tạo. Lưu video để xem sau thường thuộc về sử dụng hợp lý nếu bạn không sửa đổi hoặc phân phối. Đăng lại mà không có ghi nhận hoặc không chuyển đổi cấu thành vi phạm và có thể dẫn đến việc gỡ bỏ. Nhạc nền cũng có chủ sở hữu, mặc dù các đoạn ngắn để sử dụng cá nhân hiếm khi được đánh dấu.
            </p>
            <p className="section-muted mb-2">
              Các tình huống tải xuống được phép:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Sự cho phép của người sáng tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu tác giả cho phép tải xuống, bạn có thể tải mà không lo lắng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Nội dung công cộng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Các tác phẩm không còn được bảo vệ bản quyền có thể tải xuống tự do.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Sử dụng giáo dục hợp lý
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trường học và giáo viên có thể sử dụng các đoạn ngắn cho mục đích giáo dục trong giới hạn sử dụng hợp lý. Luôn kiểm tra mô tả video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Kết luận: giữ việc sử dụng riêng tư và tôn trọng. Nếu bạn muốn chia sẻ, hãy xin phép hoặc ghi rõ tác giả.
            </p>
          </div>

          {/* Rủi ro */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy hiểm phổ biến và cách tránh chúng
            </h2>
            <p className="section-muted mb-4">
              Công cụ của bên thứ ba có thể ẩn chứa bẫy: từ vi-rút đến lừa đảo. Trước khi dán liên kết trên bất kỳ trang web nào, nên biết các rủi ro chính để bảo vệ thiết bị của bạn.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Phần mềm độc hại trên trang web đáng ngờ">
                Một số cổng thông tin chèn vi-rút, trojan hoặc ransomware cùng với tải xuống. Một cú nhấp chuột có thể làm tổn hại dữ liệu của bạn hoặc khóa thiết bị.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Lừa đảo qua phishing">
                Các nút giả mạo bắt chước màn hình đăng nhập TikTok và đánh cắp thông tin đăng nhập, hoặc cung cấp "cập nhật" cài đặt phần mềm gián điệp.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò rỉ dữ liệu">
                Các công cụ không đáng tin cậy ghi lại lịch sử của bạn và bán thông tin cho bên thứ ba, dẫn đến thư rác và nỗ lực lừa đảo.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Mất chất lượng">
                Các dịch vụ yếu nén tệp quá mức, gây ra tình trạng gián đoạn, âm thanh không đồng bộ và màu sắc bạc nhạt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Cấm tài khoản">
                TikTok có thể phát hiện tải xuống hàng loạt qua các công cụ bên ngoài và đình chỉ hồ sơ, đặc biệt là của người sáng tạo.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Bộ nhớ đầy">
                Tích lũy video lớn chiếm bộ nhớ nhanh chóng và có thể làm treo trình phát. Giữ thư viện được tổ chức.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Chỉ sử dụng các trang web đáng tin cậy, phân tích các tệp đã tải xuống và nếu có thể, duyệt web với VPN và phần mềm chống vi-rút cập nhật.
            </p>
          </div>

          {/* Tại sao sử dụng videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại sao sử dụng videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đối tác đáng tin cậy của bạn để tải TikTok
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi tạo videodownload.io để có một phương pháp đáng tin cậy, không có quảng cáo xâm phạm hay ứng dụng nặng nề. Kể từ đó, chúng tôi đã xử lý hàng triệu lượt tải xuống một cách an toàn. Chúng tôi tiếp tục cải thiện công cụ dựa trên phản hồi của cộng đồng để cung cấp trải nghiệm đơn giản và ổn định.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Tốc độ tức thì">
                Chúng tôi xử lý hầu hết các video trong vài giây nhờ các máy chủ được tối ưu hóa.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Không có quảng cáo khó chịu">
                Giao diện sạch sẽ, không có cửa sổ bật lên hoặc chuyển hướng kỳ lạ.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Không có logo">
                Chúng tôi cung cấp tệp không có watermark, sẵn sàng để chỉnh sửa hoặc đăng lại được ủy quyền.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Tải xuống không giới hạn">
                Sử dụng bao nhiêu tùy thích. Chúng tôi không giới hạn số lượng video mỗi ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
                Chỉ cần một trình duyệt trên điện thoại, máy tính bảng hoặc máy tính của bạn. Không cần cài đặt gì.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Quyền riêng tư được đảm bảo">
                Chúng tôi không theo dõi tải xuống của bạn và không lưu trữ liên kết. Sau khi quá trình kết thúc, không có dữ liệu nào được lưu giữ.
              </FeatureCard>
            </div>
          </div>

          {/* Câu hỏi thường gặp */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tất cả những gì bạn cần biết về videodownload.io
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã tập hợp các câu trả lời nhanh chóng để bạn sử dụng dịch vụ một cách thoải mái và tận dụng tối đa tải xuống TikTok của mình.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video TikTok riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Công cụ chỉ hoạt động với video công khai. Nội dung riêng tư yêu cầu sự cho phép của người sáng tạo. Nếu video là của bạn, hãy sử dụng tính năng tải xuống gốc của TikTok.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải xuống có làm chậm điện thoại của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không phải do chúng tôi. Các tệp nhẹ và chúng tôi không cài đặt gì. Chỉ cần theo dõi dung lượng nếu bạn tải nhiều video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tại sao video đã tải không có logo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bởi vì chúng tôi sử dụng luồng gốc và loại bỏ logo được áp dụng bởi TikTok, để lại tệp sạch sẽ để sử dụng cá nhân.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể chỉ tải xuống âm thanh không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Sau khi dán liên kết, chọn định dạng MP3 để chỉ lưu âm thanh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Phải làm gì nếu tải xuống thất bại?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Đảm bảo rằng liên kết đầy đủ và video là công khai. Thử trình duyệt khác hoặc xóa bộ nhớ cache. Vẫn tiếp tục? Gọi hỗ trợ của chúng tôi - chúng tôi trả lời nhanh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có giới hạn về kích thước hoặc thời lượng không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi hỗ trợ video lên đến 60 phút. Các video lớn hơn mất nhiều thời gian xử lý hơn một chút, nhưng được tải xuống hoàn toàn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Các bạn có lưu trữ video tôi đã tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Quá trình được thực hiện trong thời gian thực và không có gì được lưu trữ. Tệp chỉ ở lại với bạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Người sáng tạo có biết tôi đã tải video không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. TikTok không gửi thông báo; việc tải xuống vẫn ẩn danh.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bắt đầu ngay */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Sẵn sàng lưu yêu thích của bạn?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đưa video của bạn offline trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao chép liên kết TikTok
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán ở đây
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Nhấp vào Tải xuống
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải video TikTok
                </Button>
              </a>
            </div>
          </div>

          {/* Khám phá các trình tải xuống khác */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá các trình tải xuống khác
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải xuống từ các nền tảng yêu thích của bạn
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
              {[
                {
                  name: "YouTube",
                  Icon: FaYoutube,
                  color: "bg-[#FF0000]",
                  hex: "#FF0000",
                },
                {
                  name: "Instagram",
                  Icon: FaInstagram,
                  color:
                    "bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C]",
                  hex: "#C13584",
                },
                {
                  name: "TikTok",
                  Icon: FaTiktok,
                  color: "bg-[#000000]",
                  hex: "#000000",
                },
                {
                  name: "Facebook",
                  Icon: FaFacebook,
                  color: "bg-[#1877F2]",
                  hex: "#1877F2",
                },
                {
                  name: "Twitter",
                  Icon: FaXTwitter,
                  color: "bg-[#0f1419]",
                  hex: "#0f1419",
                },
                {
                  name: "Pinterest",
                  Icon: FaPinterest,
                  color: "bg-[#E60023]",
                  hex: "#E60023",
                },
                {
                  name: "LinkedIn",
                  Icon: FaLinkedin,
                  color: "bg-[#0A66C2]",
                  hex: "#0A66C2",
                },
                {
                  name: "Reddit",
                  Icon: FaRedditAlien,
                  color: "bg-[#FF4500]",
                  hex: "#FF4500",
                },
                {
                  name: "Vimeo",
                  Icon: FaVimeoV,
                  color: "bg-[#19B7EA]",
                  hex: "#19B7EA",
                },
                {
                  name: "Threads",
                  Icon: SiThreads,
                  color: "bg-[#000000]",
                  hex: "#000000",
                },
              ].map((p) => (
                <Link
                  key={p.name}
                  to={buildUrl(`/${p.name.toLowerCase().replace(/\s+/g, "")}`)}
                  className="block h-full"
                >
                  <Card className="group glass-card p-4 h-24 sm:h-28 flex items-center hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-200 border border-primary/10 hover:border-primary/30 overflow-hidden relative">
                    <div className={`absolute inset-0 ${p.color} opacity-10`} />
                    <div
                      className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${p.color} blur-2xl opacity-20`}
                    />
                    <div className="flex items-center justify-between gap-3 relative z-10 w-full">
                      <div className="text-white font-medium text-sm md:text-base">
                        Tải video {p.name}
                      </div>
                      <div
                        className={`w-24 h-12 rounded-full ${p.color} flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110`}
                      >
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
        <div
          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow ${toneClasses}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedFeatures() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
      <FeatureCard icon={VideoIcon} title="Tải xuống HD">
        Tải lên đến 1080p (hoặc hơn, nếu có) và giữ màu sắc sống động và chi tiết sắc nét, vì chúng tôi thu thập tệp trực tiếp từ nguồn.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Không có logo">
        Khác với ứng dụng chính thức, chúng tôi cung cấp video sạch sẽ, không có logo, sẵn sàng để chỉnh sửa hoặc đăng lại được ủy quyền.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
        Sử dụng trên Android, iOS, Windows hoặc macOS trực tiếp qua trình duyệt. Không cần cài đặt hoặc cấu hình.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Xử lý nhanh">
        Hầu hết các lượt tải xuống chỉ mất vài giây nhờ các máy chủ được tối ưu hóa gần TikTok.
      </FeatureCard>
      <FeatureCard icon={Download} title="100% miễn phí">
        Không cần đăng ký, thẻ tín dụng hoặc phí ẩn. Tải xuống bao nhiêu video tùy thích, mỗi ngày.
      </FeatureCard>
      <FeatureCard icon={Shield} title="An toàn và riêng tư">
        Chúng tôi không theo dõi và không lưu trữ liên kết. Sau khi tải xuống, không có thông tin nào ở lại với chúng tôi.
      </FeatureCard>
    </div>
  );
}

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
          <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">
            {step}
          </div>
          <div className="w-px grow bg-gradient-to-b from-accent/30 to-transparent mt-2" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </Card>
  );
}

function EnhancedSteps() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
      <StepCard step={1} title="Sao chép liên kết video">
        <a href="https://www.tiktok.com/">Mở TikTok</a> qua ứng dụng hoặc trình duyệt, tìm video mong muốn, nhấn vào nút Chia sẻ và chọn «Sao chép liên kết» để lấy URL đầy đủ.
      </StepCard>
      <StepCard step={2} title="Dán liên kết trên videodownload.io">
        Mở videodownload.io trong trình duyệt, nhấp vào hộp trên cùng và dán địa chỉ đã sao chép. Xác nhận rằng liên kết bắt đầu bằng tiktok.com và video là công khai.
      </StepCard>
      <StepCard step={3} title="Để hệ thống chuẩn bị tệp">
        Nhấp vào «Tải xuống». Chúng tôi lấy video từ máy chủ TikTok, loại bỏ logo và kiểm tra chất lượng trong vài giây.
      </StepCard>
      <StepCard step={4} title="Chọn định dạng và lưu">
        Chọn MP4 cho video + âm thanh hoặc MP3 để chỉ tải xuống âm thanh. Tệp sẽ được lưu trong thư mục mặc định của thiết bị và có sẵn để xem offline.
      </StepCard>
    </div>
  );
}
