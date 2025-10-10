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

export default function FacebookPageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Facebook | Miễn Phí & HD",
    description: "Tải video Facebook, Reels và Livestream ở định dạng mp4, 1080p, chất lượng HD. Trình tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Hộp tải tối giản (không có phần trang chủ khác) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video, Reel hoặc Watch của Facebook"
            />
          </div>
          {/* Tính năng */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Công cụ giúp tải video Facebook dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Dưới đây là sáu tính năng khiến videodownload.io trở thành lựa chọn hàng đầu để tải video Facebook. Mỗi tính năng đều được tạo ra để tiết kiệm thời gian, đảm bảo chất lượng và mang đến trải nghiệm an toàn, đơn giản.
          </p>

          <EnhancedFeatures />

          {/* Cách tải xuống */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn từng bước để lưu video nhanh chóng
          </h2>
          <p className="text-muted-foreground mb-6">
            Tải video Facebook với videodownload.io rất nhanh và đơn giản, ngay cả khi bạn không rành công nghệ. Chỉ cần làm theo bốn bước sau để lưu video vào thiết bị trong vài phút.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Download Facebook Video
              </Button>
            </a>
          </div>

          {/* Vì sao nên tải xuống */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên tải video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những cách sử dụng tốt nhất khi xem và dùng offline
            </h2>
            <p className="section-muted mb-4">
              Tải video Facebook giúp bạn xem hoặc tái sử dụng nội dung mà không cần kết nối internet. Điều này tuyệt vời để tiết kiệm dữ liệu, lưu giữ kỷ niệm hoặc tạo nội dung mới. Dưới đây là những lý do hàng đầu để tải video Facebook cho nhu cầu cá nhân hay công việc.
          </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Xem offline khi di chuyển
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video để xem trong lúc đi làm, trên máy bay hoặc ở nơi không có Wi-Fi và dữ liệu, như vùng quê hay khi du lịch nước ngoài.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sáng tạo nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải các đoạn clip để làm reaction, chỉnh sửa hay dựng lại cho kênh của bạn, miễn là tuân thủ bản quyền hoặc được phép từ người sáng tạo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học tập và đào tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu các video hướng dẫn, webinar hay clip chỉ dẫn để học offline, như demo nấu ăn, bài tập thể dục hoặc mẹo kinh doanh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu giữ kỷ niệm
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Giữ lại video gia đình, khoảnh khắc sự kiện hoặc bài đăng trong nhóm có thể biến mất khi tài khoản bị xóa hoặc thay đổi quyền riêng tư.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing và kinh doanh
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Doanh nghiệp có thể tải video thương hiệu hoặc livestream của mình để dùng offline trong thuyết trình, quảng cáo hay buổi gặp khách hàng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tiết kiệm dữ liệu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải bằng Wi-Fi để không tiêu tốn dữ liệu di động, đặc biệt với video dài hoặc chất lượng cao khi gói cước bị giới hạn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Giải trí offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tạo bộ sưu tập clip hài, MV hay livestream để xem offline lúc rảnh rỗi hoặc khi đi xa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chia sẻ trong cộng đồng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video từ nhóm hoặc trang Facebook để chia sẻ offline trong workshop, lớp học hoặc sự kiện cộng đồng khi không có internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Facebook mang đến sự linh hoạt để xem hoặc sử dụng nội dung bất cứ lúc nào, ở bất cứ đâu mà không phụ thuộc vào kết nối.
            </p>
          </div>

          {/* Ai nên tải xuống */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những người hưởng lợi từ việc truy cập offline
            </h2>
            <p className="section-muted mb-4">
              Tải video Facebook hữu ích cho bất kỳ ai muốn xem hoặc sử dụng nội dung offline. Không chỉ người dùng thông thường, một số nhóm cụ thể sẽ tiết kiệm thời gian và công sức khi tải xuống. Dưới đây là những đối tượng nên cân nhắc và lý do.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người sáng tạo nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencer, YouTuber hay TikToker có thể tải video để làm reaction, hợp tác hoặc chỉnh sửa, miễn là tôn trọng bản quyền hoặc được cho phép.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học sinh, sinh viên và giáo viên
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu nội dung học tập như bài giảng, tutorial hoặc webinar để học offline hoặc sử dụng trong lớp, đặc biệt ở nơi kết nối yếu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người thường xuyên di chuyển
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải các video giải trí như clip viral hoặc livestream để xem offline trong những chuyến đi thiếu internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chủ doanh nghiệp
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video thương hiệu, livestream hoặc quảng cáo của chính bạn để sử dụng offline trong marketing, pitching hoặc trình bày với khách hàng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người lưu giữ kỷ niệm
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Giữ lại video cá nhân, khoảnh khắc gia đình hoặc bài đăng nhóm có thể mất nếu tài khoản bị xoá hoặc đổi quyền riêng tư.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người yêu thích thể thao
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải video tập luyện, yoga hoặc mẹo sức khỏe để theo dõi offline tại nhà hay phòng gym.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người dẫn dắt cộng đồng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video nhóm hoặc nội dung fanpage để chia sẻ offline trong họp, sự kiện hoặc workshop mà không cần Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người đam mê sở thích
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải video lấy cảm hứng như dự án DIY hoặc hướng dẫn thủ công để tham khảo offline khi làm sở thích.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vấn đề pháp lý */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải video Facebook có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hiểu các quy định pháp lý
            </h2>
            <p className="section-muted mb-4">
              Việc tải video Facebook khá phức tạp. Điều khoản dịch vụ của Facebook không cho phép tải nội dung nếu không có sự đồng ý của người tạo hoặc nền tảng. Theo luật bản quyền Hoa Kỳ, lưu video có bản quyền mà không được phép là bất hợp pháp và có thể dẫn đến kiện tụng, dù hiếm xảy ra khi dùng cá nhân. Một số ngoại lệ bao gồm:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Video thuộc phạm vi công cộng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video đã thuộc phạm vi công cộng và không còn được bảo vệ bản quyền.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Giấy phép Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video mang giấy phép Creative Commons cho phép tải về cho những mục đích cụ thể, như chia sẻ hoặc remix, miễn là bạn tuân thủ điều khoản.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Sự cho phép của người tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video mà người tạo cho phép tải xuống một cách rõ ràng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Trường hợp sử dụng hợp lý (fair use)
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Các trường hợp fair use, chẳng hạn tải để phục vụ giáo dục, bình luận hoặc nghiên cứu, tuy nhiên còn tùy vào cách bạn sử dụng video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Hãy kiểm tra mô tả video để biết giấy phép hoặc xin phép người tạo. Tính năng lưu của Facebook cho phép bạn đánh dấu bài viết để xem cá nhân, đây là lựa chọn hợp pháp. Để an toàn, hãy tôn trọng bản quyền và cân nhắc xin phép trước khi tải.
            </p>
          </div>

          {/* Rủi ro */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những mối nguy cần tránh khi tải xuống
            </h2>
            <p className="section-muted mb-4">
              Tải video Facebook rất tiện lợi nhưng cũng tiềm ẩn rủi ro nếu dùng công cụ không đáng tin hoặc bỏ qua giới hạn pháp lý. Nắm rõ những rủi ro này sẽ giúp bạn bảo vệ thiết bị và luôn an toàn. Dưới đây là các vấn đề lớn cần chú ý.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Phần mềm độc hại từ trang web kém tin cậy"
              >
                Nhiều trang tải về có nút giả, quảng cáo bật lên hoặc script ẩn <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">cài virus hay malware</a>. Chúng có thể làm hỏng thiết bị hoặc đánh cắp dữ liệu. Hãy dùng nền tảng uy tín như videodownload.io để tránh tình trạng này.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Vấn đề pháp lý">
                Tải video khi chưa được phép vi phạm quy định của Facebook và có thể khiến tài khoản bị khóa, thậm chí bị chủ sở hữu bản quyền kiện. Luôn kiểm tra giấy phép trước.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Tệp kém chất lượng"
              >
                Những trang không uy tín thường cung cấp video mờ, lỗi và khó phát, gây tốn thời gian lẫn dung lượng lưu trữ.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Nguy cơ về quyền riêng tư">
                Các trang mập mờ có thể theo dõi hoạt động, thu thập thông tin cá nhân hoặc bán dữ liệu của bạn. Hãy chọn công cụ không yêu cầu quyền truy cập không cần thiết.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Tệp tải về bị hỏng">
                Trang được xây dựng cẩu thả có thể tạo ra file không đầy đủ và không mở được, gây khó chịu cho bạn.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Vấn đề đạo đức"
              >
                Khi tải về, bạn bỏ qua lượt xem hoặc quảng cáo - nguồn thu của người sáng tạo. Hãy ủng hộ họ bằng cách xem online khi có thể.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Quá tải bộ nhớ"
              >
                Tải nhiều video, đặc biệt video chất lượng cao, có thể lấp đầy bộ nhớ nhanh chóng. Quản lý danh sách tải về để tránh tình trạng này.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Sử dụng công cụ an toàn, uy tín như videodownload.io và tuân thủ bản quyền sẽ giúp bạn tránh được các rủi ro và tải xuống an toàn.
            </p>
          </div>

          {/* Vì sao chọn videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao chọn videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lựa chọn đáng tin cậy để tải video Facebook
            </h2>
            <p className="section-muted mb-4">
            Chúng tôi xây dựng videodownload.io để mang đến cách tải video Facebook sạch, nhanh và an toàn mà không phải lo lắng trước những trang đáng ngờ. Mục tiêu là giúp mọi người tải xuống dễ dàng và bảo mật. Đây là sáu lý do nên chọn chúng tôi.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="An toàn, không có malware">
                Trang web không chứa pop-up, liên kết giả hay script độc hại, giúp thiết bị của bạn tránh virus và spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Dễ sử dụng">
                Dán liên kết, bấm tải, xong ngay. Không cần thao tác phức tạp hay kỹ năng công nghệ.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Xử lý nhanh chóng">
                Máy chủ xử lý video rất nhanh, trả kết quả trong vài giây kể cả với livestream hoặc nội dung nhóm.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Định dạng linh hoạt">
                Chọn MP4 cho video hoặc MP3 cho âm thanh cùng các tùy chọn chất lượng như 720p hay 1080p theo nhu cầu.
              </FeatureCard>
              <FeatureCard icon={Download} title="Hoàn toàn miễn phí">
                Tải không giới hạn mà không tốn phí. Không có đăng ký hay chi phí ẩn.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Bảo vệ quyền riêng tư">
                Chúng tôi không theo dõi lượt tải, không lưu dữ liệu hay chia sẻ thông tin, đảm bảo hoạt động của bạn luôn riêng tư.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Giải đáp về videodownload.io và việc tải video Facebook
            </h2>
            <p className="section-muted mb-4">
              Đây là câu trả lời cho những thắc mắc phổ biến khi dùng videodownload.io để tải video Facebook, giúp bạn bắt đầu tự tin hơn.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. videodownload.io có miễn phí không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Nền tảng hoàn toàn miễn phí. Bạn có thể tải bao nhiêu video tuỳ thích mà không mất phí hay giới hạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Tôi có phải cài phần mềm để tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Mọi thứ chạy trực tiếp trên trình duyệt, không cần ứng dụng, tiện ích hay cài đặt thêm, rất đơn giản.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Tôi có thể tải livestream hoặc video trong nhóm Facebook không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Chúng tôi hỗ trợ tải livestream và video nhóm nếu bạn có quyền truy cập nội dung đó. Chỉ cần dán liên kết là được.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. videodownload.io có an toàn không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Hoàn toàn an toàn. Trang web không có pop-up hay liên kết nguy hiểm. Chúng tôi ưu tiên bảo mật và kiểm tra định kỳ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Tôi có thể tải video chất lượng cao không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Bạn có thể tải ở chất lượng cao nhất có sẵn như 720p hoặc 1080p, tùy vào video gốc trên Facebook.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Nếu tải không thành công thì sao?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kiểm tra lại URL và kết nối internet. Nếu vẫn lỗi, hãy liên hệ đội hỗ trợ để được giúp đỡ nhanh chóng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Tôi có thể chỉ lưu phần âm thanh không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Tính năng MP3 cho phép bạn tách âm thanh từ bất kỳ video nào, rất thích hợp cho nhạc, bài phát biểu hoặc đoạn clip.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Tải video Facebook có hợp pháp không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Còn tùy. Facebook cấm tải khi chưa được phép. Video thuộc phạm vi công cộng, mang giấy phép Creative Commons hoặc được tác giả cho phép thường không vấn đề. Fair use có thể áp dụng cho giáo dục hay bình luận, nhưng hãy luôn kiểm tra giấy phép để an toàn.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bắt đầu ngay */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu tải xuống ngay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lưu video Facebook chỉ trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Quy trình nhanh và đơn giản
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải an toàn, không malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video và âm thanh chất lượng cao
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Facebook Video
                </Button>
              </a>
            </div>
          </div>

          {/* Khám phá thêm trình tải khác */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm trình tải về
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải từ những nền tảng yêu thích
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
                        Download {p.name} Video
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
      <FeatureCard icon={VideoIcon} title="Tải video chất lượng cao">
        Chọn độ phân giải như 720p hoặc 1080p tùy vào video Facebook gốc. Dù là livestream hay clip ngắn, bạn đều có thể lấy chất lượng tốt nhất mà không phải chỉnh nhiều.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải nhanh">
        Máy chủ của chúng tôi xử lý video Facebook rất nhanh. Phần lớn lượt tải hoàn tất dưới một phút, phụ thuộc tốc độ mạng và độ dài video.
      </FeatureCard>
      <FeatureCard icon={Music} title="Tùy chọn tách âm thanh">
        Chỉ cần âm thanh? Chuyển video Facebook sang MP3 bằng một cú nhấp. Rất tiện để lưu nhạc, bài phát biểu hoặc đoạn podcast nghe offline.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Không cần cài phần mềm">
        Tải trực tiếp từ website bằng bất kỳ trình duyệt nào trên điện thoại, máy tính bảng hoặc máy tính. Không cần cài ứng dụng hay phần mềm bổ sung.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hỗ trợ live và video nhóm">
        Lưu video từ bài đăng, livestream hoặc nội dung nhóm riêng tư (khi bạn có quyền truy cập). Chỉ cần dán liên kết, phần còn lại để chúng tôi lo.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Giao diện an toàn, không quảng cáo">
        Trang không có pop-up, nút giả hay chuyển hướng nguy hiểm. Mỗi lần tải về đều sạch sẽ và an toàn, không lo virus.
      </FeatureCard>
    </div>
  );
}

// --- Enhanced Steps ---
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
      <StepCard step={1} title="Sao chép URL video Facebook">
        <a href="http://www.facebook.com">Mở Facebook</a> bằng ứng dụng hoặc trình duyệt, tìm video, livestream hay bài đăng nhóm bạn muốn và sao chép URL. Nhấn vào biểu tượng ba chấm rồi chọn "Sao chép liên kết" hoặc copy địa chỉ trên thanh trình duyệt.
      </StepCard>
      <StepCard step={2} title="Dán URL vào trang của chúng tôi">
        Truy cập videodownload.io trên bất kỳ trình duyệt nào. Ở trang chủ, tìm khung tải xuống và dán liên kết Facebook đã sao chép. Kiểm tra lại URL cho chính xác.
      </StepCard>
      <StepCard step={3} title="Chúng tôi xử lý video">
        Nhấp nút "Download". Hệ thống sẽ lấy video và chuẩn bị trong vài giây. Chọn định dạng như MP4 cho video hoặc MP3 cho âm thanh, cùng chất lượng phù hợp.
      </StepCard>
      <StepCard step={4} title="Lưu video Facebook của bạn">
        Khi liên kết tải xuất hiện, nhấn để lưu video về thiết bị. Đổi tên file nếu muốn sắp xếp dễ tìm về sau.
      </StepCard>
    </div>
  );
}
