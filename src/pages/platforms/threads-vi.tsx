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

export default function ThreadsPageVI() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Threads | Miễn Phí & HD",
    description: "Tải video và bài đăng Threads dạng mp4, chất lượng 1080p. Trình tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video hoặc bài đăng Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính Năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải Video Threads Nhanh Chóng
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng Dẫn Đơn Giản Để Lưu Clip Ngoại Tuyến
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách Tải Video Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng Dẫn Từng Bước Rõ Ràng Để Lưu Video Dễ Dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Lấy video Threads về thiết bị của bạn rất đơn giản với
            videodownload.io. Làm theo bốn bước đơn giản này để
            tải xuống bất kỳ video nào trong vài phút. Mỗi bước được thiết kế để
            dễ hiểu, ngay cả khi bạn không am hiểu công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Tải Video Threads
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại Sao Nên Tải Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Các Trường Hợp Sử Dụng Tốt Nhất
            </h2>
            <p className="section-muted mb-4">
              Threads di chuyển nhanh, với các bài đăng bị chôn vùi dưới các cuộc trò chuyện mới. Tải xuống cho phép bạn giữ lại những video thu hút sự chú ý của bạn, biến việc cuộn nhanh thành bộ sưu tập cá nhân. Đó là về việc lưu những gì mang lại niềm vui, thông tin hoặc cảm hứng, không chỉ thu thập các clip ngẫu nhiên. Bạn kiểm soát bộ sưu tập của mình, an toàn khỏi các bài đăng bị xóa hoặc thay đổi ứng dụng.
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
                    Lưu mẹo du lịch hoặc clip tập luyện cho các chuyến bay, đi lại hoặc nơi có Wi-Fi kém. Các bậc cha mẹ tải xuống tiểu phẩm hoặc bài hát phù hợp với trẻ em cho các chuyến đi bằng ô tô, giữ cho trẻ vui vẻ mà không bị buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái Sử Dụng Cho Nhà Sáng Tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Các influencer lấy clip viral để remix vào nội dung của họ, thêm phong cách riêng. Các blogger lưu video thời trang hoặc đồ ăn để chia sẻ trên các nền tảng khác, bỏ qua watermark để chỉnh sửa sạch sẽ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu Trữ Bài Đăng Của Riêng Bạn
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu bạn chia sẻ video trên Threads, chúng có thể biến mất do sự cố tài khoản hoặc cập nhật nền tảng. Tải xuống chúng vào ổ đĩa để bảo vệ công việc của bạn, như vlog cá nhân hoặc quảng cáo thương hiệu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học Tập Và Cảm Hứng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sinh viên lưu các mẹo học tập hoặc bài nói động viên để xem lại ngoại tuyến. Những người có sở thích tải xuống các mẹo DIY hoặc bản demo nghệ thuật để thực hành theo nhịp độ của họ, không cần tìm kiếm lại.
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
                    Lưu cập nhật cuộc sống của bạn bè hoặc clip hài hước để gửi trong các cuộc trò chuyện nhóm hoặc giữ lại để xem sau. Đó là cách giữ lại kỷ niệm mà không phụ thuộc vào ứng dụng.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Threads mang lại sự linh hoạt và tiện lợi,
              giúp bạn dễ dàng thưởng thức nội dung theo cách của riêng bạn, cho dù là để giải trí,
              công việc hay học tập.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai Nên Tải Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những Người Được Lợi Nhất Từ Việc Tải Xuống
            </h2>
            <p className="section-muted mb-4">
              Threads là trung tâm nội dung nhanh chóng, cá nhân, nhưng việc tải video phù hợp với những người sử dụng nó để sáng tạo, học hỏi hoặc kết nối. Đó là dành cho những người xem bài đăng không chỉ là niềm vui thoáng qua, biến clip thành công cụ hoặc kỷ niệm. Nếu bạn hoạt động trên Threads và muốn giữ lại điều quan trọng, tải xuống là lựa chọn của bạn.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Nhà Sáng Tạo Nội Dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencer và vlogger lưu clip xu hướng để remix cho khán giả của họ, như một chuyên gia làm đẹp hoàn thiện hướng dẫn trang điểm. Họ cũng tải xuống bài đăng của riêng mình, giữ các bản sao sạch không có logo để chỉnh sửa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người Có Sở Thích Và Người Học
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fan thể hình lưu clip tập luyện để theo dõi tại phòng gym. Thợ thủ công tải xuống bản demo DIY để thử tại nhà. Đó là cảm hứng thực tế, sẵn sàng ngoại tuyến.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sinh Viên Và Giáo Viên
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Giáo viên lưu các bài nói động viên cho các cuộc thảo luận trên lớp. Sinh viên lấy các mẹo học tập hoặc bài học ngôn ngữ để xem lại mà không cần đăng nhập lại.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gia Đình Và Người Dùng Thông Thường
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cha mẹ lưu clip hài hước của trẻ em hoặc cập nhật gia đình để chia sẻ trong các buổi họp mặt. Bạn bè tải xuống meme viral để cười sau này.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Doanh Nghiệp Nhỏ Và Nhà Tiếp Thị
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Các cửa hàng lưu lời khen của khách hàng để trình bày trên trang web. Chuyên gia truyền thông xã hội lấy clip xu hướng để phân tích hoặc tái sử dụng, giữ nội dung của họ tươi mới.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Bất kể vai trò hay lối sống của bạn, tải video Threads có thể
              tiết kiệm thời gian, dữ liệu và công sức trong khi giữ nội dung yêu thích của bạn
              có thể truy cập được.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Có Hợp Pháp Khi Tải Video Threads Không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Điều Bạn Cần Biết Về Pháp Luật
            </h2>
            <p className="section-muted mb-4">
              Video được bảo vệ bản quyền bởi người sáng tạo theo luật như <a href="https://vi.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> ở Mỹ. Lưu để xem riêng tư, như xem clip ngoại tuyến, thường được coi là sử dụng hợp lý. Nhưng chia sẻ mà không có phép hoặc sử dụng để kiếm lợi nhuận có thể dẫn đến vấn đề pháp lý. Nhạc hoặc lồng tiếng trong video có thể có các lớp bản quyền bổ sung, mặc dù việc lưu cá nhân ngắn hiếm khi gặp vấn đề.
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
                    Nếu người sáng tạo cho phép tải xuống hoặc nội dung thuộc phạm vi công cộng, bạn an toàn. Sử dụng giáo dục, như hiển thị clip trong lớp, thường đủ điều kiện là sử dụng hợp lý. Kiểm tra chú thích bài đăng để biết quyền. Giữ tải xuống riêng tư và ghi công người sáng tạo nếu bạn chia sẻ để an toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi Ro Liên Quan Đến Việc Tải Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy Hiểm Tiềm Ẩn Và Cách Tránh
            </h2>
            <p className="section-muted mb-4">
              Trình tải xuống bên thứ ba có vẻ dễ dàng, nhưng những cái mờ ám mang lại rắc rối thực sự. Không phải trang web nào cũng đáng tin cậy, và nhấp chuột bất cẩn có thể làm hỏng thiết bị hoặc dữ liệu của bạn. Biết rủi ro trước khi bắt đầu để tránh vấn đề sau này.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Phần Mềm Độc Hại"
              >
                Các trang web không đáng tin cậy ẩn virus trong tệp video, lén lút phần mềm gián điệp hoặc ransomware. Một lần tải xuống tệp hại có thể khóa tệp của bạn hoặc đánh cắp mật khẩu. Một số công cụ đã bị bắt với keylogger, biến việc lưu meme thành vi phạm dữ liệu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Lừa Đảo Phishing">
                Trang tải xuống giả mạo đăng nhập Threads, lấy thông tin đăng nhập của bạn nếu bạn nhập. Hoặc quảng cáo đẩy "cập nhật" cài đặt trình theo dõi, theo dõi hoạt động của bạn ngoài nền tảng.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Vấn Đề Chất Lượng"
              >
                Các trang web kém nén video, gây phát lại giật lag hoặc mất âm thanh. Bạn muốn một hướng dẫn rõ ràng, nhưng lại nhận được tệp lỗi thay thế.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò Rỉ Quyền Riêng Tư">
                Một số trang web ghi lại các lần tải xuống của bạn, bán IP hoặc lựa chọn video của bạn cho các nhà quảng cáo. Hacker có thể lấy dữ liệu đó, dẫn đến spam hoặc lừa đảo có mục tiêu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Cấm Threads">
                Sử dụng nhiều công cụ bên thứ ba có thể gắn cờ tài khoản của bạn, đặc biệt đối với người sáng tạo. Bạn có thể mất hồ sơ hoặc người theo dõi qua đêm.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Quá Tải Lưu Trữ"
              >
                Lưu nhiều video tiêu tốn dung lượng, làm chậm điện thoại hoặc ổ đĩa. Tệp bị hỏng có thể làm trình phát bị lỗi, mất thời gian để sửa.
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
              Đối Tác Đáng Tin Cậy Của Bạn Cho Tải Xuống Threads
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi bắt đầu videodownload.io vào năm 2022 vì chúng tôi mệt mỏi với các công cụ mờ ám và ứng dụng chậm. Là người dùng Threads, chúng tôi muốn một cách nhanh chóng, sạch sẽ để lưu video mà không có rủi ro. Chúng tôi là một đội nhỏ, không phải công ty lớn, tập trung vào việc làm cho tải xuống dễ dàng và an toàn. Hàng triệu người dùng tin tưởng chúng tôi mà không có rò rỉ dữ liệu, và chúng tôi tiếp tục cải thiện dựa trên phản hồi của họ.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Dưới Năm Giây">
                Tải xuống hoàn thành ngay cả trong giờ cao điểm.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không Quảng Cáo Hoặc Pop-up">
                Chỉ một trang web sạch.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Đã Xóa Watermark">
                Clip thuần túy, có thể sử dụng.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Lưu Không Giới Hạn">
                Không có giới hạn hàng ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt Động Trên Mọi Thiết Bị">
                Từ điện thoại cũ đến laptop mới.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Hệ Thống An Toàn">
                Không có dữ liệu được lưu trữ sau khi bạn hoàn thành.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu Hỏi Thường Gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Câu Hỏi Phổ Biến Về Tải Xuống Threads
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã biên soạn câu trả lời cho các câu hỏi thường gặp nhất về việc sử dụng
              videodownload.io và tải video Threads để giúp bạn
              bắt đầu với sự tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video Threads riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không, chúng tôi chỉ xử lý các bài đăng công khai. Video riêng tư hoặc bị hạn chế cần sự cho phép của người sáng tạo, và chúng tôi tôn trọng những ranh giới đó để duy trì hợp pháp.
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
                  Các tệp của chúng tôi sạch và nhẹ, nên không có độ trễ. Nhưng lưu nhiều video có thể lấp đầy bộ nhớ, vì vậy hãy theo dõi dung lượng của bạn.
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
                  Threads thêm logo để theo dõi chia sẻ, nhưng chúng tôi lấy tệp gốc và xóa chúng để lưu sạch mà bạn có thể sử dụng tự do.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể chỉ lưu âm thanh từ video Threads không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, chọn MP3 sau khi dán liên kết. Tuyệt vời để lấy nhạc hoặc lồng tiếng từ clip mà không có hình ảnh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Nếu tải xuống của tôi thất bại thì sao?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kiểm tra liên kết có công khai và bắt đầu bằng threads.net. Thử trình duyệt khác hoặc xóa bộ nhớ cache. Chat hỗ trợ của chúng tôi khắc phục sự cố nhanh chóng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có giới hạn về độ dài video không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi xử lý video lên đến 60 phút, mặc dù hầu hết các clip Threads đều ngắn. Những cái dài hơn mất một chút nhưng tải xuống đầy đủ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bạn có lưu trữ video đã tải xuống của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không hề. Chúng tôi xử lý ngay lập tức và xóa mọi thứ sau đó. Các tệp của bạn ở lại trên thiết bị của bạn, không phải trên máy chủ của chúng tôi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Người sáng tạo có thể thấy nếu tôi tải video của họ không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads không thông báo cho họ. Tải xuống của bạn vẫn riêng tư, không có cảnh báo cho người sáng tạo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt Đầu Lưu Video Threads Hôm Nay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lấy Clip Yêu Thích Của Bạn Trong Vài Giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao Chép Liên Kết Bài Đăng Threads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán Trên Trang Web Của Chúng Tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải Video Sạch
              </div>
            </div>
            <div className="mt-2">
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải Video Threads
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám Phá Thêm Trình Tải Xuống
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
      <FeatureCard icon={VideoIcon} title="Tải Xuống Rõ Ràng Và Sắc Nét">
        Lưu video Threads ở chất lượng tốt nhất của chúng, lên đến 1080p nếu bài đăng gốc cho phép. Không có khung hình mờ hoặc màu sắc xỉn khi bạn phát lại. Chúng tôi lấy tệp thẳng từ máy chủ của Threads, giữ mọi chi tiết sắc nét cho tiểu phẩm nhanh hoặc mẹo phong cách đó.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không Có Watermark Hoặc Logo">
        Threads thêm thương hiệu của họ vào video được lưu qua ứng dụng của họ, làm rối tầm nhìn. Chúng tôi loại bỏ tất cả những thứ đó, cho bạn một clip sạch sẵn sàng để chia sẻ hoặc chỉnh sửa. Xem khoảnh khắc hài hước hoặc hướng dẫn đó mà không có lớp phủ văn bản chặn hành động.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt Động Trên Mọi Thiết Bị">
        Sử dụng điện thoại, máy tính bảng, laptop hoặc máy tính để bàn của bạn, và nó hoạt động trơn tru. Không cần ứng dụng hoặc phần mềm bổ sung. Chỉ cần mở trang web của chúng tôi trong trình duyệt của bạn, dán liên kết và tải xuống. Được thử nghiệm trên mọi thứ từ Android cũ đến Mac mới, nó luôn đáng tin cậy.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc Độ Tải Xuống Nhanh">
        Chờ đợi giết chết cảm giác. Công cụ của chúng tôi kéo video Threads trong vài giây, thường dưới 10 cho hầu hết các clip. Chúng tôi sử dụng máy chủ gần với Threads để lấy nhanh, vì vậy bạn có thể lưu clip khiêu vũ hoặc ý kiến trong một khoảng nghỉ ngắn.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hoàn Toàn Miễn Phí Sử Dụng">
        Không có phí, không cần đăng ký, không có chi phí ẩn. Tải xuống bao nhiêu video bạn muốn, mỗi ngày, không giới hạn. Chúng tôi giữ nó miễn phí để bạn có thể lưu meme viral hoặc mẹo cuộc sống đó mà không gặp phải tường phí.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Quy Trình An Toàn Và Riêng Tư">
        Thông tin của bạn vẫn an toàn. Chúng tôi không lưu trữ liên kết hoặc video của bạn sau khi bạn tải xuống. Không theo dõi, không có nhật ký và không có quảng cáo spam. Quy trình sạch sẽ, giữ thiết bị của bạn không có rác hoặc rủi ro.
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
      <StepCard step={1} title="Sao Chép Liên Kết Video Từ Threads">
        <a href="http://www.threads.net">Mở Threads</a> trên điện thoại hoặc trình duyệt của bạn. Tìm video bạn thích, có thể là công thức nấu ăn nhanh hoặc reel thời trang. Chạm vào biểu tượng chia sẻ, một máy bay giấy, ở dưới cùng bên phải của bài đăng. Từ menu, chọn "Sao chép liên kết". Điều này lấy URL đầy đủ, như threads.net/@username/post/abc123. Kiểm tra xem nó đúng.
      </StepCard>
      <StepCard step={2} title="Dán Liên Kết Vào Công Cụ Của Chúng Tôi">
        Truy cập videodownload.io trong trình duyệt của bạn. Bạn sẽ thấy một hộp có nhãn "Dán liên kết Threads vào đây". Nhấp vào bên trong và dán liên kết đã sao chép. Đảm bảo nó bắt đầu bằng threads.net để tránh lỗi. Chỉ có bài đăng công khai hoạt động; video riêng tư hoặc bị hạn chế sẽ không tải xuống.
      </StepCard>
      <StepCard step={3} title="Chúng Tôi Lấy Và Chuẩn Bị Video">
        Nhấp vào nút màu xanh "Tải xuống" bên cạnh hộp. Hệ thống của chúng tôi kéo video từ máy chủ của Threads trong vài giây. Chúng tôi loại bỏ mọi watermark và kiểm tra chất lượng, vì vậy bạn nhận được một clip mượt mà. Âm thanh vẫn rõ ràng, không có trục trặc hoặc âm thanh thiếu.
      </StepCard>
      <StepCard step={4} title="Lưu Clip Vào Thiết Bị Của Bạn">
        Bạn sẽ thấy các tùy chọn: MP4 cho video đầy đủ với âm thanh hoặc MP3 chỉ cho âm thanh. Chọn MP4 cho hầu hết các clip. Chạm để tải xuống, và nó sẽ xuất hiện trong thư mục Tải xuống hoặc thư viện điện thoại của bạn. Đặt tên nó một cái gì đó đơn giản, như "meo_phong_cach.mp4", trước khi lưu. Phát nó để xác nhận nó tốt.
      </StepCard>
    </div>
  );
}
