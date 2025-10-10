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

export default function YouTubePageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video YouTube | Miễn Phí & HD",
    description: "Tải video YouTube, Shorts và Live ở định dạng mp4, 1080p, 4k. Công cụ tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download YouTube Video
          </h1>
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video, Shorts hoặc playlist YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Những điểm nổi bật giúp tải video YouTube trở nên đơn giản và đáng tin cậy
          </h2>
          <p className="text-muted-foreground mb-6">
            Đây là sáu tính năng mạnh mẽ khiến videodownload.io trở thành lựa chọn hàng đầu để tải
            video YouTube nhanh chóng, an toàn và hiệu quả. Mỗi tính năng được thiết kế để nâng cao trải
            nghiệm và mang đến sự linh hoạt cho mọi nhu cầu tải của bạn.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn rõ ràng từng bước để lưu video dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Tải video YouTube về thiết bị của bạn cực kỳ đơn giản với videodownload.io. Làm theo bốn bước
            ngắn gọn này để tải bất kỳ video nào trong vài phút. Mỗi bước đều trực quan, ngay cả khi bạn
            không rành công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Download YouTube Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên tải video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những trường hợp cần thiết khi xem ngoại tuyến
            </h2>
            <p className="section-muted mb-4">
              Tải video YouTube giúp bạn tự do xem nội dung bất cứ lúc nào, ở bất kỳ đâu mà không phụ thuộc
              vào kết nối internet. Dù bạn muốn tiết kiệm dữ liệu, chuẩn bị cho chuyến đi hay lưu trữ nội
              dung, video ngoại tuyến luôn cực kỳ hữu ích. Dưới đây là những lý do tốt nhất để tải video
              YouTube cho mục đích cá nhân.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Di chuyển đến nơi không có internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu phim, vlog hoặc MV để xem trên các chuyến bay, tàu hỏa hoặc ở vùng xa không có
                    Wi‑Fi hay dữ liệu di động. Bạn sẽ có giải trí liên tục khi di chuyển.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Phục vụ học tập và giáo dục
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải các video hướng dẫn, bài giảng hoặc video how‑to để học ngoại tuyến. Ví dụ, lưu các
                    video hướng dẫn lập trình, học ngôn ngữ hay sửa chữa DIY để xem lại theo tốc độ của bạn
                    mà không cần streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sáng tạo nội dung và dựng video
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lấy clip để dùng cho video phản ứng, cắt ghép hay bình luận, miễn là bạn tuân thủ bản
                    quyền hoặc xin phép tác giả. Rất tuyệt cho YouTuber hoặc người tạo nội dung TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu trữ video yêu thích
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Một số video có thể bị xóa khỏi YouTube vì thay đổi kênh hoặc vấn đề bản quyền. Tải về
                    giúp bạn giữ lại những nội dung yêu thích hoặc hiếm gặp để xem lâu dài.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tiết kiệm dữ liệu di động
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Xem video trực tuyến tiêu tốn rất nhiều dữ liệu, nhất là với gói giới hạn. Tải bằng
                    Wi‑Fi giúp bạn xem mà không sợ vượt gói hay hóa đơn cao.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Thư viện giải trí ngoại tuyến
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Xây dựng bộ sưu tập MV, trailer phim hoặc vlog để thưởng thức ngoại tuyến. Hoàn hảo cho
                    chuyến cắm trại, tập gym hoặc thư giãn tại nhà mà không lo giật lag.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hội thảo và thuyết trình
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chuyên gia có thể tải video liên quan đến ngành như bài phát biểu, buổi đào tạo để chia sẻ
                    trong workshop hoặc cuộc họp ngoại tuyến, đảm bảo phát mượt mà không cần internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video YouTube mang lại sự linh hoạt và tiện lợi, giúp bạn thưởng thức nội dung theo cách của
              riêng mình dù để giải trí, làm việc hay học tập.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những nhóm người được lợi nhất từ video ngoại tuyến
            </h2>
            <p className="section-muted mb-4">
              Tải video YouTube không chỉ dành cho người xem thông thường mà còn là bước ngoặt với các nhóm
              cần truy cập ngoại tuyến cho công việc, sáng tạo hay tiện lợi. Dưới đây là những đối tượng hưởng lợi
              nhiều nhất khi tải video YouTube và lý do nên làm.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người sáng tạo nội dung và influencer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTuber, TikToker hoặc streamer có thể tải clip để làm video phản ứng, mashup hay phân tích,
                    miễn là tôn trọng bản quyền và luật fair use hoặc được phép từ tác giả gốc.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học sinh và giáo viên
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu nội dung học tập như video toán, khoa học hay lịch sử để học ngoại tuyến hoặc dùng trên lớp.
                    Rất hữu ích ở khu vực mạng yếu hoặc khi cần tập trung học mà không bị xao nhãng.
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
                    Dù bạn đang trên máy bay, tàu hay ở vùng xa, video đã tải giúp giải trí mà không phụ thuộc Wi‑Fi
                    chập chờn hoặc gói data đắt đỏ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người yêu nhạc
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chuyển MV hoặc buổi diễn live thành MP3 cho playlist ngoại tuyến. Tuyệt để tạo list tập luyện hoặc
                    nghe phỏng vấn mà không cần streaming, miễn nguồn hợp pháp.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người lưu trữ video
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nhà sưu tầm hoặc fan nội dung hiếm có thể lưu video cũ, bản đăng hiếm hoặc tác phẩm yêu thích có nguy cơ
                    biến mất vì kênh đóng hay bị gỡ bỏ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người yêu thể thao và sức khỏe
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải video yoga, bài tập hoặc thiền để theo dõi ngoại tuyến, từ ở nhà, công viên đến phòng gym mà không
                    cần kết nối.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Nhà nghiên cứu và chuyên gia
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Các nhà nghiên cứu hoặc chuyên gia có thể lưu hội thảo, webinar hay video đào tạo để tham khảo ngoại tuyến
                    khi làm việc thực địa, thuyết trình hoặc nghiên cứu.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Dù bạn thuộc nhóm nào, tải video YouTube giúp tiết kiệm thời gian, dữ liệu và công sức, đồng thời giữ nội dung yêu
              thích luôn trong tầm tay.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải video YouTube có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những điều cần biết về luật pháp
            </h2>
            <p className="section-muted mb-4">
              Tính hợp pháp của việc tải video YouTube phụ thuộc vào nhiều yếu tố, và bạn nên hiểu rõ quy định để tránh rắc rối.
              Điều khoản dịch vụ của YouTube nêu rõ cấm tải video trừ khi nền tảng cung cấp tùy chọn chính thức như{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=vi&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                tính năng xem ngoại tuyến của YouTube Premium
              </a>{" "}
              dành cho thuê bao. Theo luật bản quyền Hoa Kỳ, tải xuống{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                nội dung có bản quyền
              </a>{" "}
              mà không được phép của tác giả hoặc chủ sở hữu là bất hợp pháp và có thể dẫn tới kiện tụng dân sự, dù việc xử lý đối
              với người dùng cá nhân cho mục đích riêng tư khá hiếm.
            </p>
            <p className="section-muted mb-2">
              Tuy vậy, vẫn có một số ngoại lệ cho phép tải hợp pháp:
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
                    Nội dung không còn được bảo hộ bản quyền có thể tải tự do.
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
                    Một số video YouTube có giấy phép cho phép tải về cho một số mục đích, như remix hoặc chia sẻ, miễn bạn tuân thủ
                    điều khoản.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Được phép từ người sáng tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu người tạo video cho phép tải xuống, bạn hoàn toàn có thể thực hiện.
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
                    Việc tải hạn chế cho mục đích giáo dục, bình luận, phê bình hoặc nghiên cứu có thể thuộc{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=vi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      phạm vi fair use
                    </a>
                    , nhưng phụ thuộc vào bối cảnh và cách bạn khai thác video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Để an toàn, hãy kiểm tra giấy phép trong phần mô tả video hoặc liên hệ tác giả để xin phép. YouTube Premium cung cấp
              cách hợp pháp để lưu video ngoại tuyến cho mục đích cá nhân. Nếu bạn còn băn khoăn, hãy thận trọng để tôn trọng người
              sáng tạo và tránh vi phạm luật bản quyền.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy hiểm tiềm ẩn và cách tránh
            </h2>
            <p className="section-muted mb-4">
              Mặc dù tải video YouTube rất tiện, bạn vẫn có thể gặp rủi ro nếu dùng công cụ kém chất lượng hoặc bỏ qua giới hạn pháp lý.
              Hiểu rõ các nguy hiểm này giúp bạn đưa ra lựa chọn thông minh và bảo vệ thiết bị, dữ liệu. Dưới đây là những rủi ro chính
              cần chú ý.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Phần mềm độc hại từ website không uy tín"
              >
                Nhiều trang tải xuống kèm các nút “tải” giả, quảng cáo pop-up hoặc script ẩn cài đặt{" "}
                <a href="https://cyberpress.org/youtube-downloader-malware/"
                className="text-primary hover:text-primary-glow underline transition-colors">
                  virus hoặc mã độc lên thiết bị
                </a>
                . Chúng có thể đánh cắp dữ liệu hoặc phá hỏng hệ thống của bạn. Hãy dùng nền tảng đáng tin như videodownload.io để an toàn.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Hệ quả pháp lý">
                Tải video có bản quyền mà không được phép vi phạm Điều khoản dịch vụ của YouTube, có thể khiến tài khoản bị khóa hoặc hiếm hoi hơn
                là bị chủ sở hữu bản quyền kiện.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Lộ thông tin cá nhân">
                Một số trang tải xuống yêu cầu email hoặc đăng nhập mạng xã hội, có thể bị lợi dụng để spam hoặc rò rỉ dữ liệu cá nhân.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Tệp kém chất lượng hoặc bị hỏng">
                Các trình tải kém uy tín thường xuất ra video mờ, âm thanh lệch hoặc file bị lỗi. videodownload.io giữ nguyên chất lượng gốc khi có thể.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Vi phạm điều khoản nền tảng">
                Tải nội dung để đăng lại có thể khiến kênh của bạn bị cảnh cáo bản quyền hoặc bị gỡ video. Luôn tuân thủ nguyên tắc cộng đồng của YouTube.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Lừa đảo và cài đặt phần mềm độc hại">
                Cẩn thận với các công cụ yêu cầu cài phần mềm bên ngoài hoặc yêu cầu thanh toán mơ hồ. Chúng thường đi kèm malware hoặc đăng ký không mong muốn.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Để giảm rủi ro, hãy sử dụng website tải đáng tin cậy, tránh chia sẻ thông tin cá nhân không cần thiết và luôn kiểm tra quyền sử dụng trước khi tải.
            </p>
          </div>

          {/* Downloader Tips */}
          <div className="section-block section-tips mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mẹo sử dụng công cụ tải YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tối ưu hóa quá trình tải video
            </h2>
            <p className="section-muted mb-4">
              Để có trải nghiệm tải xuống mượt mà nhất, hãy ghi nhớ những mẹo hữu ích này. Chúng giúp bạn tiết kiệm thời gian
              và tăng độ an toàn mỗi khi lấy nội dung từ YouTube.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <FeatureCard tone="accent" icon={VideoIcon} title="Kiểm tra chất lượng video nguồn">
                Đảm bảo video gốc trên YouTube có độ phân giải cao; công cụ tải sẽ chỉ xuất được chất lượng đúng bằng
                video nguồn.
              </FeatureCard>
              <FeatureCard tone="accent" icon={Zap} title="Sử dụng kết nối ổn định">
                Kết nối Wi‑Fi mạnh giúp tải nhanh hơn và tránh file bị lỗi giữa chừng.
              </FeatureCard>
              <FeatureCard tone="accent" icon={Music} title="Chọn đúng định dạng">
                Nếu chỉ cần âm thanh, hãy xuất MP3 để tiết kiệm dung lượng. Muốn video đầy đủ? Giữ định dạng MP4.
              </FeatureCard>
              <FeatureCard tone="accent" icon={Monitor} title="Dùng trình duyệt cập nhật">
                Trình duyệt hiện đại như Chrome hoặc Firefox thường tương thích hơn với các công cụ tải.
              </FeatureCard>
              <FeatureCard tone="accent" icon={ListChecks} title="Đặt tên file dễ tìm">
                Đổi tên file khi tải về để dễ sắp xếp thư viện video ngoại tuyến.
              </FeatureCard>
              <FeatureCard tone="accent" icon={Shield} title="Quét virus định kỳ">
                Dù dùng công cụ đáng tin, bạn vẫn nên quét virus để đảm bảo thiết bị an toàn tuyệt đối.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faq mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Câu hỏi thường gặp
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Giải đáp thắc mắc về công cụ tải YouTube
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Videodownload.io hỗ trợ định dạng nào?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi hỗ trợ các định dạng phổ biến như MP4 cho video và MP3 cho âm thanh. Khi video nguồn cung cấp các tùy chọn cao hơn,
                  bạn có thể chọn độ phân giải như 720p, 1080p hoặc 4K.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Tôi có thể tải playlist YouTube không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Chỉ cần dán link playlist và hệ thống sẽ xử lý toàn bộ video trong danh sách, giúp bạn tiết kiệm thời gian hơn so với tải từng video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Tải video về có an toàn cho thiết bị không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, miễn là bạn dùng công cụ đáng tin như videodownload.io. Chúng tôi không chứa quảng cáo độc hại hay nút tải giả, giúp bạn tránh malware.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Quá trình tải mất bao lâu?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Thường chỉ vài giây đến một phút tùy vào độ dài video và kết nối internet. Server của chúng tôi được tối ưu để tải nhanh nhất có thể.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Tôi có cần cài đặt phần mềm không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không cần. Videodownload.io hoạt động trực tiếp trên trình duyệt ở mọi thiết bị máy tính, điện thoại hay máy tính bảng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Tôi có thể tải video ở chế độ riêng tư (private) không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Chúng tôi chỉ hỗ trợ các video công khai hoặc không công khai trên YouTube. Tôn trọng quyền riêng tư của người khác là điều bắt buộc.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Có giới hạn số lần tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không có giới hạn nghiêm ngặt. Tuy nhiên, sử dụng hợp lý sẽ giúp dịch vụ ổn định cho tất cả mọi người.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Tải video YouTube có hợp pháp không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Còn tùy vào video. Điều khoản của YouTube cấm tải nếu không được phép, nhưng các video thuộc phạm vi công cộng, có giấy phép Creative Commons
                  hoặc được tác giả cho phép thường sẽ ổn. Fair use có thể áp dụng cho giáo dục hoặc bình luận, nhưng luôn kiểm tra giấy phép để tránh rắc rối.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu tải ngay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lấy video YouTube trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Quy trình nhanh chóng, dễ dàng
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải xuống an toàn, không malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video và âm thanh chất lượng cao
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download YouTube Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm công cụ tải
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải nội dung từ nền tảng yêu thích của bạn
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
        Chọn nhiều độ phân giải khác nhau, bao gồm 720p, 1080p và cả 4K khi video hỗ trợ. Dù bạn lưu video hướng dẫn hay MV, bạn đều
        chọn được chất lượng phù hợp với thiết bị hoặc sở thích mà không cần thao tác phức tạp.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải cực nhanh">
        Máy chủ được tối ưu giúp video tải xuống chỉ trong vài giây. Tùy vào kết nối và độ dài video, hầu hết file sẵn sàng dưới một phút,
        tiết kiệm thời gian và tránh chờ đợi khó chịu.
      </FeatureCard>
      <FeatureCard icon={Music} title="Tách âm thanh MP3 dễ dàng">
        Chỉ cần âm thanh? Chuyển bất kỳ video YouTube nào thành file MP3 trong một lần nhấp. Hoàn hảo để lưu nhạc, podcast hoặc âm thanh bài giảng
        nghe ngoại tuyến cho nhiều mục đích khác nhau.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Không cần cài phần mềm">
        Tải video trực tiếp từ trình duyệt trên mọi thiết bị máy tính, máy tính bảng hay điện thoại. Không cần ứng dụng, plugin hoặc chương trình bổ sung,
        giữ thiết bị gọn nhẹ và thao tác tải đơn giản.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hỗ trợ tải toàn bộ playlist">
        Lưu cả playlist YouTube trong một lần. Thay vì tải từng video, chỉ cần dán link playlist và hệ thống sẽ xử lý tất cả, sắp xếp gọn gàng để bạn dễ truy cập.
        Đây là cách tiết kiệm thời gian lớn khi tải hàng loạt.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Giao diện an toàn, không quảng cáo">
        Không như nhiều trang tải khác, videodownload.io không có pop-up khó chịu, chuyển hướng hay link đáng ngờ. Thiết kế gọn gàng, thân thiện giúp bạn
        tập trung tải video mà không lo rủi ro bảo mật.
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
      <StepCard step={1} title="Sao chép URL video YouTube">
        <a href="http://www.youtube.com">Mở YouTube</a> trên trình duyệt hoặc ứng dụng, tìm video bạn muốn tải và sao chép URL. Bạn có thể lấy link từ thanh địa chỉ hoặc nhấn nút "Chia sẻ" dưới video
        rồi chọn "Sao chép liên kết".
      </StepCard>
      <StepCard step={2} title="Dán URL vào website của chúng tôi">
        Truy cập videodownload.io bằng bất kỳ trình duyệt nào. Ở trang chủ, bạn sẽ thấy ô nhập để dán URL YouTube. Nhấn giữ hoặc click chuột phải để dán link vào đúng ô.
      </StepCard>
      <StepCard step={3} title="Để hệ thống xử lý video">
        Nhấn nút “Tải xuống” cạnh ô URL. Hệ thống sẽ lấy video và chuẩn bị file. Nếu được yêu cầu, hãy chọn định dạng (như MP4 hoặc MP3) và chất lượng (1080p hoặc 4K).
        Bước này thường chỉ mất vài giây.
      </StepCard>
      <StepCard step={4} title="Lưu và sắp xếp video">
        Khi hoàn tất, link tải sẽ xuất hiện. Nhấn để lưu video vào thiết bị. Bạn có thể đổi tên file trong quá trình tải để dễ quản lý bộ sưu tập video ngoại tuyến.
      </StepCard>
    </div>
  );
}
