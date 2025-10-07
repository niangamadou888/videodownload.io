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

export default function LinkedInPageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video LinkedIn | Miễn Phí & HD",
    description:
      "Tải video và bài đăng LinkedIn ở định dạng mp4, chất lượng 1080p. Công cụ tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Hộp tải xuống tối giản */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video hoặc bài đăng LinkedIn"
            />
          </div>
          {/* Tính năng */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải video LinkedIn dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng dẫn đơn giản để lưu clip chuyên nghiệp xem offline bất cứ lúc nào
          </p>

          <EnhancedFeatures />

          {/* Cách tải */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Các bước rõ ràng, nhanh gọn để lưu video
          </h2>
          <p className="text-muted-foreground mb-6">
            Với videodownload.io, mang video LinkedIn về thiết bị rất nhanh chóng.
            Chỉ cần bốn bước trực quan bên dưới – dù bạn không rành công nghệ – là
            có thể tải bất kỳ clip nào trong vài phút.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Tải video LinkedIn
              </Button>
            </a>
          </div>

          {/* Lý do tải */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên tải video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những tình huống sử dụng hiệu quả nhất
            </h2>
            <p className="section-muted mb-4">
              Bảng tin LinkedIn thay đổi liên tục, các video hay dễ bị trôi mất dưới
              những bài mới. Tải xuống giúp bạn giữ lại nội dung quan trọng, biến việc
              lướt nhanh thành nguồn tư liệu lâu dài. Bạn chỉ lưu điều mang lại giá trị
              cho công việc hay doanh nghiệp, tránh rủi ro lỗi ứng dụng hoặc bài bị xóa.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Truy cập offline cho dân chuyên nghiệp
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu lại bài nói về lãnh đạo hoặc chiến lược marketing để xem khi đi
                    công tác hoặc di chuyển không có Wi-Fi. Huấn luyện viên tải clip
                    workshop để trình chiếu cho đội nhóm mà không lo mạng chập chờn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái sử dụng nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketer lưu case study để đưa vào deck khách hàng hoặc đăng lại ở nền
                    tảng khác. Người tìm việc tải mẹo CV để xem kỹ từng khung hình và điều
                    chỉnh bài trình bày. Bạn có thể cắt những khoảnh khắc đắt giá cho
                    thuyết trình mà không phải làm lại từ đầu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sao lưu bài đăng của bạn
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu bạn chia sẻ quan điểm hoặc cập nhật thường xuyên, nền tảng có thể
                    thay đổi hoặc ẩn bài. Tải về lưu trữ để bảo vệ nội dung khỏi lỗi hệ
                    thống hay khóa tài khoản.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Đào tạo và giáo dục
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Phòng nhân sự lưu video onboarding cho nhân viên mới. Học viên tải các
                    buổi tọa đàm ngành nghề để ghi chú và xem lại ngoại tuyến.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Phát triển cá nhân
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu lại bài nói truyền cảm hứng hoặc mẹo networking để xem khi cần.
                    Biến lời khuyên của mentor thành nhắc nhở hằng ngày mà không phải tìm
                    lại trong ứng dụng.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video LinkedIn mang đến sự linh hoạt và tiện lợi, cho phép bạn tận
              hưởng nội dung theo cách của mình, dù là công việc, học tập hay truyền cảm
              hứng.
            </p>
          </div>

          {/* Đối tượng phù hợp */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những nhóm hưởng lợi nhiều nhất
            </h2>
            <p className="section-muted mb-4">
              LinkedIn là nơi tụ hội của giới chuyên nghiệp, và tải video đặc biệt hữu ích
              cho những ai dùng nền tảng để phát triển, học hỏi hoặc xây dựng quan hệ.
              Nếu bạn xem các bài đăng là công cụ chứ không chỉ là tin tức nhanh, đây là
              giải pháp phù hợp.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chuyên gia và quản lý
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nhà quản lý lưu bài nói về lãnh đạo để chia sẻ cho đội. Marketer tải
                    quảng cáo hoặc case study của đối thủ để phân tích xu hướng và tái
                    sử dụng clip sạch trong slide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người tìm việc và coach nghề nghiệp
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu mẹo phỏng vấn hoặc hướng dẫn CV để luyện tập offline. Coach nghề
                    nghiệp thu thập câu chuyện thành công của khách hàng làm minh chứng
                    trong buổi tư vấn, không lo watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chủ doanh nghiệp và startup
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startup lưu video pitching hoặc cập nhật ngành để nghiên cứu đối thủ.
                    Doanh nghiệp nhỏ tải testimonal của khách hàng để chèn vào website hay
                    proposal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Giảng viên và trainer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR lưu video tuân thủ quy trình để đào tạo nội bộ. Giảng viên tải panel
                    thực tế để thảo luận trên lớp mà không lo mạng yếu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sinh viên và người học suốt đời
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải lời khuyên nghề nghiệp hoặc tutorial kỹ thuật để xem theo nhịp riêng.
                    Ngay cả người dùng thông thường cũng lưu clip truyền động lực để xem lại
                    khi cần.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Dù bạn là ai, tải video LinkedIn giúp tiết kiệm thời gian, dữ liệu và công sức,
              giữ nội dung quan trọng trong tầm tay.
            </p>
          </div>

          {/* Pháp lý */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải video LinkedIn có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những điều bạn cần biết về bản quyền
            </h2>
            <p className="section-muted mb-4">
              Việc tải video LinkedIn nằm trong vùng xám. Nội dung thuộc bản quyền của
              tác giả theo luật như <a href="https://vi.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> tại Mỹ. Lưu để xem cá nhân –
              ví dụ xem lại webinar offline – thường được xem là fair use. Tuy nhiên,
              chia sẻ lại mà không xin phép hoặc dùng để kiếm lời có thể gây rắc rối pháp
              lý. Âm thanh như nhạc nền hay lời thoại cũng có lớp bản quyền riêng, dù việc
              lưu ngắn cho mục đích cá nhân hiếm khi gặp vấn đề.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Khi nào được phép
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu tác giả cho phép tải hoặc video thuộc phạm vi công cộng, bạn an
                    toàn. Mục đích giáo dục – như giáo viên chiếu clip trên lớp – thường
                    nằm trong fair use. Hãy kiểm tra mô tả bài đăng để xem quyền sử dụng và
                    luôn giữ cho mục đích cá nhân, ghi nguồn khi chia sẻ lại.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rủi ro */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy cơ tiềm ẩn và cách phòng tránh
            </h2>
            <p className="section-muted mb-4">
              Tải từ các website không uy tín nghe có vẻ tiện nhưng tiềm ẩn nhiều nguy cơ.
              Không phải công cụ nào cũng an toàn, và vài cú click vội vàng có thể khiến
              thiết bị hoặc dữ liệu bị xâm phạm. Hãy nắm rõ rủi ro trước khi tải.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Nguy cơ malware lớn nhất">
                Site đáng ngờ nhúng virus vào file video, cài spyware hoặc ransomware. Một
                lần tải sai có thể khóa toàn bộ dữ liệu hoặc đánh cắp mật khẩu. Thậm chí có
                công cụ ẩn keylogger biến việc lưu video thành lỗ hổng dữ liệu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Chiêu trò phishing">
                Trang giả mạo đăng nhập LinkedIn để đánh cắp thông tin. Pop-up mời gọi “cập
                nhật” cài đặt trình theo dõi, giám sát mọi thao tác.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Giảm chất lượng">
                Công cụ kém chất lượng nén video quá mức làm hình giật, mất tiếng. Bạn mong
                đợi webinar sắc nét nhưng lại nhận file khó xem.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò rỉ dữ liệu cá nhân">
                Một số dịch vụ ghi lại lịch sử tải và bán IP hoặc sở thích xem video cho nhà
                quảng cáo. Tin tặc có thể dùng dữ liệu đó để spam hoặc lừa đảo.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Nguy cơ khóa tài khoản LinkedIn">
                Dùng quá nhiều công cụ bên thứ ba có thể khiến tài khoản bị đánh dấu, đặc
                biệt với người đăng bài thường xuyên. Bạn có thể mất quyền truy cập mạng lưới.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Quá tải dung lượng">
                Nhiều video lưu cùng lúc khiến điện thoại chậm hoặc đầy bộ nhớ. File lỗi có
                thể làm trình phát crash và tốn thời gian khắc phục.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nên dùng website uy tín, quét file sau khi tải và cân nhắc dùng VPN để bảo vệ
              bản thân.
            </p>
          </div>

          {/* Vì sao chọn videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao chọn videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Người bạn đồng hành tin cậy cho tải video LinkedIn
            </h2>
            <p className="section-muted mb-4">
              videodownload.io ra mắt năm 2022 vì chúng tôi quá mệt với công cụ lỗi và chậm.
              Là người dùng LinkedIn, chúng tôi cần cách tải nhanh, sạch và an toàn. Đội ngũ
              nhỏ tập trung tối ưu trải nghiệm tải, giữ an toàn cho người dùng. Sau hàng
              triệu lượt tải mà không hề có rò rỉ dữ liệu, chúng tôi vẫn cải tiến dựa trên
              phản hồi.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Dưới năm giây">
                Hoàn tất tải ngay cả lúc cao điểm.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không quảng cáo, không pop-up">
                Giao diện sạch, tập trung vào tải.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Không watermark">
                Clip nguyên bản, sẵn sàng sử dụng.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Tải không giới hạn">
                Không giới hạn lượt tải mỗi ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
                Từ thiết bị cũ tới máy mới nhất.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Hệ thống bảo mật">
                Không lưu dữ liệu sau khi tải xong.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Giải đáp về việc tải video LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi tổng hợp các câu hỏi phổ biến nhất về videodownload.io và cách tải
              video LinkedIn để bạn bắt đầu tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có tải được video LinkedIn riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Chúng tôi chỉ hỗ trợ bài đăng công khai. Nội dung riêng tư cần sự
                  cho phép của tác giả và chúng tôi tôn trọng điều đó.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải về có làm chậm thiết bị không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File được tối ưu nên không gây lag. Tuy nhiên nếu lưu nhiều video, hãy quản
                  lý bộ nhớ hợp lý.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vì sao video không còn watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn thêm logo khi lưu trên ứng dụng của họ, nhưng chúng tôi lấy file gốc
                  và làm sạch để bạn sử dụng cá nhân.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải riêng âm thanh không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có. Chọn MP3 sau khi dán link để chỉ giữ phần âm thanh – phù hợp cho podcast
                  hoặc bài phát biểu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Nếu tải lỗi thì làm sao?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Đảm bảo link ở chế độ công khai và bắt đầu bằng linkedin.com. Thử đổi trình
                  duyệt hoặc xóa cache. Đội hỗ trợ chat của chúng tôi sẵn sàng trợ giúp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có giới hạn thời lượng không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi xử lý video dài tới 60 phút. Clip dài hơn có thể mất nhiều thời gian
                  hơn nhưng vẫn được tải đầy đủ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Các bạn có lưu video tôi tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Chúng tôi xử lý tức thời và xóa ngay sau đó. File chỉ nằm trên thiết bị
                  của bạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tác giả có biết tôi đã tải video không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn không gửi thông báo. Việc tải hoàn toàn riêng tư.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu tải video LinkedIn ngay hôm nay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lưu clip chuyên nghiệp trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao chép link LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán vào trang của chúng tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải video sạch về máy
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải video LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Trình tải khác */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm trình tải khác
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải nội dung từ nền tảng yêu thích
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
      <FeatureCard icon={VideoIcon} title="Chất lượng rõ nét">
        Tải video LinkedIn với chất lượng tối đa tới 1080p nếu bài gốc hỗ trợ. Không lo
        hình mờ hay màu nhạt khi xem lại. Chúng tôi lấy trực tiếp từ máy chủ LinkedIn để
        giữ nguyên chi tiết.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không còn logo hay watermark">
        LinkedIn thêm nhận diện thương hiệu khi lưu qua app của họ. Chúng tôi gỡ bỏ hoàn
        toàn để bạn có clip sạch.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
        Laptop, iPhone, Android hay tablet đều dùng được, không cần cài thêm phần mềm.
        Mở website, dán link và tải thôi.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải nhanh">
        Công cụ lấy video trong vài giây, thường dưới 10s cho đa số clip, nhờ máy chủ gần
        LinkedIn.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Miễn phí, không giới hạn">
        Không phí, không đăng ký, không giới hạn lượt tải mỗi ngày.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Quy trình an toàn">
        Không lưu liên kết hay video sau khi tải. Không tracking, không quảng cáo gây khó chịu.
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
      <StepCard step={1} title="Sao chép link bài đăng trên LinkedIn">
        <a href="http://www.linkedin.com">Mở LinkedIn</a> trên điện thoại hoặc trình
        duyệt. Tìm video muốn tải, chạm ba chấm góc phải và chọn "Copy link to post".
        Đảm bảo URL đầy đủ (ví dụ linkedin.com/posts/ten_123456) và chính xác.
      </StepCard>
      <StepCard step={2} title="Dán link vào trang của chúng tôi">
        Truy cập videodownload.io và dán link vào ô "Dán link LinkedIn tại đây".
        Hãy chắc URL bắt đầu bằng linkedin.com; bài riêng tư sẽ không hoạt động.
      </StepCard>
      <StepCard step={3} title="Hệ thống xử lý video giúp bạn">
        Nhấn nút "Download" màu xanh. Chúng tôi lấy video từ LinkedIn, xóa watermark và
        kiểm tra chất lượng, giữ âm thanh đồng bộ.
      </StepCard>
      <StepCard step={4} title="Lưu file về thiết bị">
        Chọn MP4 để có cả hình và tiếng hoặc MP3 nếu cần audio. Tải về thư mục Downloads
        hoặc thư viện. Đặt tên dễ nhớ rồi mở thử để kiểm tra.
      </StepCard>
    </div>
  );
}
