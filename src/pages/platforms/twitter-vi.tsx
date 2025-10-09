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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Twitter X | Miễn Phí & HD",
    description: "Tải video và bài đăng Twitter X ở định dạng mp4, chất lượng 1080p. Công cụ tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tải video Twitter
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video hoặc bài đăng Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính Năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải Video Twitter X Nhanh Chóng
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng Dẫn Nhanh Của Bạn Để Lưu Clip Ngoại Tuyến
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách Tải Video Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng Dẫn Rõ Ràng, Từng Bước Để Lưu Video Dễ Dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Lấy video Twitter X về thiết bị của bạn rất đơn giản với
            videodownload.io. Làm theo bốn bước đơn giản này để
            tải xuống bất kỳ video nào trong vài phút. Mỗi bước được thiết kế để
            trực quan, ngay cả khi bạn không am hiểu công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Tải Video Twitter X
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại Sao Nên Tải Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Các Trường Hợp Sử Dụng Tốt Nhất
            </h2>
            <p className="section-muted mb-4">
              Twitter X di chuyển với tốc độ chớp nhoáng, với các video bị lạc trong dòng bài đăng. Tải xuống cho phép bạn giữ lại những clip nổi bật, biến việc cuộn nhanh thành bộ sưu tập cá nhân. Không phải lưu tất cả, mà là giữ lại những gì mang lại niềm vui, thông tin hoặc cảm hứng. Bạn kiểm soát bộ sưu tập của mình, an toàn khỏi các bài đăng bị xóa hoặc thay đổi ứng dụng.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Xem Ngoại Tuyến
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu clip tin tức hoặc hướng dẫn cho các chuyến bay, tàu hỏa hoặc khu vực có Wi-Fi kém. Phụ huynh tải hoạt hình vui nhộn cho trẻ em xem trong các chuyến đi xe dài, không lo buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái Sử Dụng Nội Dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Người tạo nội dung lấy clip viral để remix vào bài đăng của riêng họ, thêm bình luận hoặc chỉnh sửa. Nhà báo lưu video tin tức nóng hổi để phân tích cho bài viết, cắt bỏ watermark để sử dụng sạch sẽ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sao Lưu Bài Đăng Của Bạn
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu bạn chia sẻ video trên Twitter X, chúng có thể biến mất do sự cố tài khoản hoặc cập nhật nền tảng. Tải chúng vào ổ đĩa để giữ công việc của bạn an toàn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học Tập và Nghiên Cứu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sinh viên lưu các bài giảng của chuyên gia hoặc phân tích dữ liệu cho ghi chú học tập. Chuyên gia lấy cập nhật ngành để chia sẻ trong các cuộc họp, không cần tìm kiếm lại trong feed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chia Sẻ Khoảnh Khắc
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải clip cột mốc của bạn bè hoặc phản ứng vui nhộn để gửi trong chat nhóm hoặc lưu lại sau. Đây là cách giữ lại những điểm nổi bật cá nhân mà không phụ thuộc vào ứng dụng.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Twitter X mang lại sự linh hoạt và tiện lợi,
              giúp bạn dễ dàng thưởng thức nội dung theo cách của mình, dù là để giải trí,
              công việc hay học tập.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai Nên Tải Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những Người Được Lợi Nhất Từ Việc Tải Xuống
            </h2>
            <p className="section-muted mb-4">
              Twitter X là trung tâm cho các ý kiến nhanh và khoảnh khắc lớn, nhưng tải video phù hợp với những người sử dụng nền tảng có chủ đích. Dành cho những người coi clip là công cụ, ký ức hoặc cảm hứng, không chỉ là nội dung thoáng qua. Nếu bạn hoạt động trên ứng dụng và muốn giữ lại những gì quan trọng, tải xuống là dành cho bạn.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người Tạo Nội Dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Họ đăng hàng ngày, lấy ý tưởng từ các video đang thịnh hành. Tải xuống cho phép họ lưu clip của riêng mình hoặc nghiên cứu của người khác, như diễn viên hài lấy video phản ứng để ứng biến mà không có logo cản trở.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Nhà Báo và Nhà Nghiên Cứu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Họ lưu clip tin tức hoặc phỏng vấn cho bài viết hoặc kiểm tra sự thật. Sinh viên tải các thread chuyên gia có video cho dự án trường học, học ngoại tuyến theo tốc độ riêng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gia Đình và Người Dùng Thường Xuyên
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu video thông báo của anh chị em hoặc clip thú cưng viral để chia sẻ trong các buổi gặp mặt. Đáng tin cậy hơn là hy vọng Twitter X giữ nó hoạt động.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Nhà Tiếp Thị và Chủ Doanh Nghiệp
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startup lưu lời khen của khách hàng để giới thiệu trên website. Quản lý mạng xã hội lấy clip đối thủ để phân tích xu hướng hoặc tái sử dụng cho các nền tảng khác.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người Đam Mê và Học Viên
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Người hâm mộ công nghệ lưu demo lập trình để thực hành sau. Người nghiện tin tức tải các câu chuyện nóng hổi để xem lại. Ngay cả người cuộn thường xuyên cũng lưu clip động viên cho những ngày khó khăn.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Bất kể vai trò hoặc lối sống của bạn, tải video Twitter X có thể
              tiết kiệm thời gian, dữ liệu và công sức trong khi giữ nội dung yêu thích của bạn
              có thể truy cập.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải Video Twitter X Có Hợp Pháp Không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những Gì Bạn Cần Biết Về Luật
            </h2>
            <p className="section-muted mb-4">
              Video được bảo vệ bản quyền bởi người tạo ra chúng theo các luật như DMCA ở Mỹ. Lưu để xem riêng tư, như xem clip tin tức ngoại tuyến, thường được tính là sử dụng hợp lý. Nhưng chia sẻ không có phép hoặc sử dụng để kiếm lời có thể dẫn đến vấn đề pháp lý. Nhạc hoặc lồng tiếng trong video có thể có các lớp bản quyền bổ sung, mặc dù việc lưu cá nhân ngắn hiếm khi gặp rắc rối.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Khi Nào Được Phép
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu người tạo cho phép tải xuống hoặc nội dung thuộc phạm vi công cộng, bạn an toàn. Sử dụng giáo dục, như hiển thị clip trong lớp, thường được tính là sử dụng hợp lý. Kiểm tra chú thích bài đăng để biết quyền. Giữ riêng tư và ghi công người tạo nếu chia sẻ để an toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi Ro Liên Quan Đến Việc Tải Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy Hiểm Tiềm Ẩn và Cách Tránh Chúng
            </h2>
            <p className="section-muted mb-4">
              Công cụ tải của bên thứ ba có vẻ dễ dàng, nhưng những công cụ đáng ngờ có thể gây ra vấn đề lớn. Không phải trang web nào cũng đáng tin cậy, và nhấp chuột bất cẩn có thể làm hỏng thiết bị hoặc dữ liệu của bạn. Biết rủi ro trước khi bắt đầu tải xuống để tránh rắc rối sau này.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Phần Mềm Độc Hại"
              >
                Các trang web không đáng tin cậy ẩn virus trong tệp video, len lỏi phần mềm gián điệp hoặc ransomware. Một lần tải xuống tệp có thể khóa tệp của bạn hoặc đánh cắp mật khẩu. Một số công cụ đã bị phát hiện có keylogger, biến việc lưu nhanh thành vi phạm dữ liệu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Lừa Đảo Phishing">
                Trang tải xuống giả mạo đăng nhập Twitter X, lấy thông tin đăng nhập của bạn nếu bạn nhập. Hoặc quảng cáo đẩy "cập nhật" cài đặt trình theo dõi, theo dõi hoạt động của bạn ngoài nền tảng.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Vấn Đề Chất Lượng"
              >
                Trang web tệ nén video, gây phát lại giật lag hoặc mất âm thanh. Bạn muốn clip tin tức rõ ràng nhưng lại nhận được tệp lỗi.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò Rỉ Quyền Riêng Tư">
                Một số trang web ghi lại các lượt tải xuống của bạn, bán IP hoặc lựa chọn video của bạn cho các nhà quảng cáo. Hacker có thể lấy được dữ liệu đó, dẫn đến spam hoặc lừa đảo có mục tiêu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Cấm Twitter X">
                Sử dụng nhiều công cụ của bên thứ ba có thể đánh dấu tài khoản của bạn, đặc biệt đối với người tạo. Bạn có thể mất hồ sơ hoặc người theo dõi qua đêm.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Quá Tải Lưu Trữ"
              >
                Lưu nhiều video tiêu tốn không gian, làm chậm điện thoại hoặc ổ đĩa. Tệp bị hỏng có thể làm trình phát bị lỗi, lãng phí thời gian sửa chữa.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Sử dụng các trang web đáng tin cậy, quét tải xuống và cân nhắc VPN để giữ an toàn.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại Sao Sử Dụng videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đối Tác Đáng Tin Cậy Của Bạn Cho Tải Xuống Twitter X
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi khởi động videodownload.io vào năm 2022 vì chúng tôi chán ngấy các công cụ đáng ngờ và ứng dụng lỗi. Là người dùng Twitter X, chúng tôi muốn một cách nhanh chóng, sạch sẽ để lưu video mà không có rủi ro. Chúng tôi là một nhóm nhỏ, không phải công ty lớn, tập trung vào làm cho việc tải xuống đơn giản và an toàn. Hàng triệu người dùng tin tưởng chúng tôi không có vi phạm dữ liệu, và chúng tôi tiếp tục cải thiện dựa trên phản hồi của họ.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Dưới Năm Giây">
                Tải xuống hoàn thành ngay cả trong những ngày bận rộn.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không Quảng Cáo hoặc Pop-up">
                Chỉ một trang web sạch sẽ.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Đã Xóa Watermark">
                Clip thuần túy, có thể sử dụng.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Lưu Không Giới Hạn">
                Không có giới hạn hàng ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt Động Trên Mọi Thiết Bị">
                Từ điện thoại đến máy tính xách tay.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Hệ Thống An Toàn">
                Không có dữ liệu được giữ sau khi bạn rời đi.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu Hỏi Thường Gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Câu Hỏi Phổ Biến Về Tải Xuống Twitter X
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã tổng hợp câu trả lời cho các câu hỏi thường gặp nhất về việc sử dụng
              videodownload.io và tải video Twitter X để giúp bạn
              bắt đầu với sự tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video Twitter X riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không, chúng tôi chỉ xử lý các bài đăng công khai. Video được bảo vệ hoặc riêng tư cần sự cho phép của người tạo, và chúng tôi tôn trọng điều đó để giữ mọi thứ hợp pháp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải xuống có làm chậm thiết bị của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tệp của chúng tôi sạch và nhẹ, vì vậy không chậm. Nhưng lưu nhiều video có thể lấp đầy bộ nhớ, vì vậy hãy theo dõi không gian của bạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tại sao video của tôi không có watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X thêm logo để theo dõi chia sẻ, nhưng chúng tôi lấy tệp gốc và xóa chúng để lưu sạch mà bạn có thể sử dụng tự do.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể chỉ lưu âm thanh từ video Twitter X không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, chọn MP3 sau khi dán liên kết. Hoàn hảo để lấy clip podcast hoặc âm thanh thịnh hành mà không có video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Điều gì xảy ra nếu tải xuống của tôi thất bại?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kiểm tra liên kết là công khai và bắt đầu bằng x.com. Thử trình duyệt khác hoặc xóa cache. Chat hỗ trợ của chúng tôi sửa vấn đề nhanh chóng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có giới hạn về kích thước video không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi xử lý video lên đến 60 phút, mặc dù hầu hết các clip Twitter X đều ngắn. Các clip dài hơn mất một chút thời gian nhưng tải xuống đầy đủ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bạn có lưu trữ video đã tải của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không đời nào. Chúng tôi xử lý ngay lập tức và xóa mọi thứ sau đó. Tệp của bạn ở trên thiết bị của bạn, không phải trên máy chủ của chúng tôi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Người tạo có thể thấy tôi đã tải video của họ không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X không thông báo cho họ. Tải xuống của bạn vẫn riêng tư, không có cảnh báo cho người đăng.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt Đầu Lưu Video Twitter X Ngay Bây Giờ
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nhận Clip Ngoại Tuyến Của Bạn Trong Vài Giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao Chép Liên Kết Bài Đăng Twitter X
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán Vào Trang Của Chúng Tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải Video Sạch
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải Video Twitter X
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám Phá Thêm Công Cụ Tải Xuống
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
                  to={`/vi/${p.name.toLowerCase().replace(/\s+/g, "")}`}
                  className="block h-full"
                >
                  <Card className="group glass-card p-4 h-24 sm:h-28 flex items-center hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-200 border border-primary/10 hover:border-primary/30 overflow-hidden relative">
                    <div className={`absolute inset-0 ${p.color} opacity-10`} />
                    <div
                      className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${p.color} blur-2xl opacity-20`}
                    />
                    <div className="flex items-center justify-between gap-3 relative z-10 w-full">
                      <div className="text-white font-medium text-sm md:text-base">
                        Tải Video {p.name}
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
      <FeatureCard icon={VideoIcon} title="Chất Lượng Video Sắc Nét">
        Lưu video Twitter X ở độ phân giải tốt nhất của chúng, lên đến 1080p nếu bài đăng gốc cung cấp. Không có khung hình mờ hoặc màu sắc xỉn khi xem sau. Chúng tôi lấy tệp thô trực tiếp từ máy chủ Twitter X, giữ mọi chi tiết sắc nét cho clip viral hoặc cập nhật tin tức đó.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không Watermark hoặc Branding">
        Twitter X thêm logo hoặc tên người dùng vào video được lưu qua ứng dụng của họ, làm lộn xộn giao diện. Chúng tôi loại bỏ tất cả điều đó, mang đến cho bạn một clip sạch sẵn sàng để chia sẻ hoặc chỉnh sửa. Xem khoảnh khắc vui đó hoặc bài phát biểu chính mà không có văn bản chặn màn hình.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt Động Trên Mọi Thiết Bị">
        Sử dụng điện thoại, máy tính bảng, laptop hoặc máy tính để bàn của bạn, và nó chạy mượt mà. Không cần cài đặt ứng dụng hoặc xử lý phần mềm bổ sung. Mở trang web của chúng tôi trong trình duyệt, dán liên kết và tải xuống. Được thử nghiệm trên mọi thứ từ Android giá rẻ đến PC cao cấp, nó luôn đáng tin cậy.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc Độ Tải Xuống Nhanh">
        Không ai muốn chờ đợi. Công cụ của chúng tôi lấy video Twitter X trong vài giây, thường dưới 10 cho hầu hết các clip. Chúng tôi sử dụng máy chủ gần với Twitter X để lấy nhanh, vì vậy bạn có thể lưu video phản ứng hoặc ý kiến nóng trong thời gian cuộn nhanh.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hoàn Toàn Miễn Phí Sử Dụng">
        Không có phí, không cần đăng ký, không có phí bất ngờ. Tải xuống bao nhiêu video tùy thích, mỗi ngày, không giới hạn. Chúng tôi giữ nó miễn phí để bạn có thể lưu meme hoặc clip tin tức đó mà không gặp paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Tải Xuống An Toàn và Riêng Tư">
        Thông tin của bạn vẫn an toàn. Chúng tôi không giữ liên kết hoặc video của bạn sau khi tải xuống. Không theo dõi, không có nhật ký và không có quảng cáo spam. Quy trình sạch sẽ, giữ thiết bị của bạn không có rác hoặc rủi ro.
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
      <StepCard step={1} title="Lấy Liên Kết Video Từ Twitter X">
        <a href="http://www.x.com">Mở Twitter X</a> trên điện thoại hoặc trình duyệt của bạn. Tìm video bạn thích, có thể là meme nhanh hoặc điểm nổi bật của hội nghị. Nhấp vào biểu tượng chia sẻ bên dưới bài đăng, một mũi tên nhỏ hướng lên. Từ menu, chọn "Sao chép liên kết đến Bài đăng". Điều này sao chép URL đầy đủ, như x.com/username/status/123456. Kiểm tra kỹ xem đúng không.
      </StepCard>
      <StepCard step={2} title="Dán Liên Kết Vào Công Cụ Của Chúng Tôi">
        Truy cập videodownload.io trong trình duyệt của bạn. Bạn sẽ thấy một hộp có nhãn "Dán liên kết Twitter X tại đây". Nhấp vào bên trong và dán liên kết bạn đã sao chép. Đảm bảo nó bắt đầu bằng x.com để tránh vấn đề. Chỉ các bài đăng công khai hoạt động; video riêng tư hoặc được bảo vệ sẽ không tải xuống.
      </StepCard>
      <StepCard step={3} title="Chúng Tôi Lấy và Chuẩn Bị Video">
        Nhấp vào nút "Tải xuống" màu xanh bên cạnh hộp. Hệ thống của chúng tôi lấy video từ máy chủ Twitter X trong vài giây. Chúng tôi loại bỏ mọi watermark và kiểm tra chất lượng, vì vậy bạn nhận được một clip mượt mà. Âm thanh vẫn rõ ràng, không có lỗi hoặc âm thanh bị mất.
      </StepCard>
      <StepCard step={4} title="Lưu Tệp Vào Thiết Bị Của Bạn">
        Bạn sẽ thấy các tùy chọn: MP4 cho video đầy đủ có âm thanh hoặc MP3 chỉ cho âm thanh. Chọn MP4 cho hầu hết các clip. Chạm để tải xuống, và nó vào thư mục Tải xuống hoặc bộ sưu tập điện thoại của bạn. Đặt tên đơn giản, như "meme_clip.mp4", trước khi lưu. Phát lại để đảm bảo nó hoàn hảo.
      </StepCard>
    </div>
  );
}
