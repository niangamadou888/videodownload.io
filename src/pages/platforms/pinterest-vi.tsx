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

export default function PinterestPageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Pinterest | Miễn Phí & HD",
    description: "Tải video Pinterest và ghim ở định dạng mp4, chất lượng 1080p. Trình tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video hoặc ghim Pinterest"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải video Pinterest dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng dẫn đơn giản để lưu các clip sáng tạo ngoại tuyến
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn từng bước rõ ràng để lưu video dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Lấy video Pinterest về thiết bị của bạn rất đơn giản với
            videodownload.io. Làm theo bốn bước đơn giản này để tải bất kỳ
            video nào trong vài phút. Mỗi bước được thiết kế trực quan, ngay
            cả khi bạn không am hiểu công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Tải video Pinterest
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại sao tải video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Các trường hợp sử dụng tốt nhất
            </h2>
            <p className="section-muted mb-4">
              Pinterest là kho tàng cảm hứng, nhưng nguồn cấp dữ liệu di chuyển nhanh và ghim có thể biến mất. Tải xuống cho phép bạn giữ những video tạo ra ý tưởng, biến những phát hiện thoáng qua thành bộ sưu tập cá nhân. Đó là về việc lưu những gì thúc đẩy sự sáng tạo hoặc kế hoạch của bạn, không chỉ tích trữ nội dung. Bạn kiểm soát kho của mình, an toàn khỏi ghim bị xóa hoặc sự cố ứng dụng.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Xem ngoại tuyến
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu hướng dẫn tự làm hoặc hướng dẫn du lịch cho các chuyến đi không có Wi-Fi, như cắm trại hoặc chuyến bay dài. Phụ huynh tải video thủ công thân thiện với trẻ em cho những ngày mưa, giữ trẻ bận rộn mà không cần internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái sử dụng cho người tạo nội dung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blogger lưu clip trang trí để pha trộn vào nội dung của họ, thêm mẹo hoặc chỉnh sửa. Doanh nghiệp nhỏ lấy video demo sản phẩm để chia sẻ trên các nền tảng khác, bỏ qua hình mờ để chỉnh sửa sạch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu trữ ghim của riêng bạn
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu bạn đăng video, chúng có thể biến mất do thay đổi bảng hoặc sự cố nền tảng. Tải chúng vào ổ đĩa để bảo vệ công việc của bạn, như công thức bạn đã chia sẻ hoặc mẫu danh mục đầu tư.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học tập và lập kế hoạch
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sinh viên lưu hướng dẫn nghệ thuật hoặc mẹo học tập để thực hành ngoại tuyến. Người lập kế hoạch sự kiện tải ý tưởng đám cưới hoặc tiệc để cho khách hàng xem, không cần tìm kiếm lại.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Dự án cá nhân
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu mẹo làm vườn cho mùa trồng xuân hoặc thói quen tập luyện hàng ngày. Biến ghim nhanh thành tài nguyên tiếp theo cho ý tưởng lớn tiếp theo của bạn.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Pinterest mang lại sự linh hoạt và tiện lợi, giúp bạn dễ
              dàng thưởng thức nội dung theo cách của mình, cho dù là để giải trí,
              làm việc hay học tập.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những người được lợi nhiều nhất từ việc tải xuống
            </h2>
            <p className="section-muted mb-4">
              Pinterest là tất cả về ý tưởng, nhưng việc tải video phù hợp với những người biến ý tưởng thành hành động. Đó là dành cho những người sử dụng nền tảng để tạo, lập kế hoạch hoặc học hỏi, không chỉ duyệt cho vui. Nếu bạn lưu clip để tạo ra điều gì đó thực tế, tải xuống là công cụ của bạn.
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
                    Blogger và influencer lưu video tự làm hoặc phong cách để pha trộn cho khán giả của họ, như vlogger thời trang điều chỉnh vẻ ngoài từ ghim. Họ cũng tải bài đăng của riêng mình, giữ bản sao sạch không có logo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người yêu thích và thợ DIY
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Thợ thủ công lưu hướng dẫn đan hoặc vẽ để theo dõi từng bước tại nhà. Người làm vườn tải hướng dẫn trồng để kiểm tra khi đào. Đó là cảm hứng thực hành, ngoại tuyến.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người lập kế hoạch sự kiện và doanh nghiệp nhỏ
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Người lập kế hoạch đám cưới lưu clip trang trí để giới thiệu khách hàng. Cửa hàng lấy video sản phẩm để đặc trưng trên trang web hoặc quảng cáo, xây dựng lòng tin mà không có hình mờ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Phụ huynh và nhà giáo dục
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Giáo viên lưu demo thủ công cho dự án lớp học. Các bà mẹ tải video chơi cảm giác cho trẻ mới biết đi, sẵn sàng cho những ngày không màn hình.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chủ nhà và người cải tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu mẹo cải tạo bếp hoặc mẹo về đồ nội thất để lập kế hoạch nâng cấp. Ngay cả người dùng bình thường cũng tải clip động lực, như ý tưởng bảng tầm nhìn, để giữ ước mơ tập trung.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Bất kể vai trò hoặc lối sống của bạn, tải video Pinterest có thể tiết
              kiệm thời gian, dữ liệu và công sức trong khi giữ nội dung yêu thích
              của bạn có thể truy cập.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Có hợp pháp khi tải video Pinterest không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những gì bạn cần biết về luật pháp
            </h2>
            <p className="section-muted mb-4">
              Video được bảo vệ bản quyền bởi người tạo ra chúng theo luật như DMCA ở Mỹ. Lưu để xem riêng tư, như thực hành thủ công ngoại tuyến, thường được tính là sử dụng hợp lý. Nhưng chia sẻ mà không ghi công hoặc sử dụng cho mục đích lợi nhuận có thể dẫn đến rắc rối pháp lý. Nhạc hoặc lồng tiếng trong video có thể có các lớp bản quyền bổ sung, mặc dù việc lưu cá nhân ngắn hiếm khi gặp vấn đề.
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
                    Nếu người tạo cho phép tải xuống hoặc nội dung thuộc phạm vi công cộng, bạn an toàn. Sử dụng giáo dục, như hiển thị hướng dẫn trong lớp, thường đủ điều kiện là sử dụng hợp lý. Kiểm tra mô tả ghim để biết quyền. Giữ tải xuống riêng tư và ghi công người tạo nếu bạn chia sẻ để ở phía đúng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro liên quan đến việc tải video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy hiểm tiềm ẩn và cách tránh chúng
            </h2>
            <p className="section-muted mb-4">
              Trình tải xuống của bên thứ ba nghe có vẻ tiện lợi, nhưng những trình đáng ngờ mang lại rắc rối thực sự. Không phải mọi trang web đều an toàn, và nhấp mù quáng có thể làm hỏng thiết bị hoặc dữ liệu của bạn. Biết rủi ro trước khi tải xuống để tránh đau đầu sau này.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Phần mềm độc hại"
              >
                Các trang web đáng ngờ giấu virus trong tệp video, len lỏi phần mềm gián điệp hoặc ransomware. Một lần tải xuống tồi có thể khóa tệp của bạn hoặc đánh cắp mật khẩu. Một số công cụ đã bị phát hiện với keylogger, biến clip thủ công thành mớ hỗn độn về quyền riêng tư.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Lừa đảo Phishing">
                Các trang tải xuống giả mạo đăng nhập Pinterest, lấy thông tin đăng nhập của bạn nếu bạn tin vào nó. Hoặc quảng cáo đẩy "cập nhật" cài đặt trình theo dõi, xem hoạt động của bạn ngoài nền tảng.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Vấn đề chất lượng"
              >
                Các trang web xấu nén video, gây ra phát lại giật lag hoặc mất âm thanh. Bạn muốn hướng dẫn rõ ràng, nhưng nhận được tệp lỗi thay thế.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò rỉ quyền riêng tư">
                Một số trang web ghi lại lượt tải xuống của bạn, bán IP hoặc lựa chọn video của bạn cho nhà quảng cáo. Tin tặc có thể lấy dữ liệu đó, dẫn đến spam hoặc lừa đảo có mục tiêu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Cấm Pinterest">
                Sử dụng nhiều công cụ của bên thứ ba có thể đánh dấu tài khoản của bạn, đặc biệt là đối với người tạo. Bạn có thể mất bảng hoặc người theo dõi qua đêm.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Quá tải lưu trữ"
              >
                Lưu nhiều video ăn không gian, làm chậm điện thoại hoặc ổ đĩa. Tệp bị hỏng có thể làm sập trình phát, lãng phí thời gian sửa chữa.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Chọn các trang web đáng tin cậy, quét tải xuống và sử dụng VPN để an toàn.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tại sao sử dụng videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đối tác đáng tin cậy của bạn cho tải xuống Pinterest
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi bắt đầu videodownload.io vào năm 2022 vì chúng tôi chán với các ứng dụng lỗi và trang web rủi ro. Là người dùng Pinterest, chúng tôi muốn một cách nhanh chóng, sạch sẽ để lưu video mà không gây rắc rối. Chúng tôi là một nhóm nhỏ, không phải công ty lớn, tập trung vào làm cho việc tải xuống dễ dàng và an toàn. Hàng triệu người dùng tin tưởng chúng tôi không có vi phạm dữ liệu, và chúng tôi tiếp tục điều chỉnh dựa trên phản hồi của họ.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Dưới năm giây">
                Tải xuống hoàn thành ngay cả trong những ngày bận rộn.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không có quảng cáo hoặc pop-up">
                Chỉ một giao diện đơn giản.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Hình mờ được xóa">
                Clip sạch, có thể sử dụng.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Lưu không giới hạn">
                Không có giới hạn hàng ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
                Từ máy tính bảng cũ đến máy tính xách tay mới.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Cài đặt an toàn">
                Không có dữ liệu được lưu trữ sau khi bạn xong.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Câu hỏi phổ biến về tải xuống Pinterest
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã biên soạn câu trả lời cho các câu hỏi thường gặp nhất về
              việc sử dụng videodownload.io và tải video Pinterest để giúp bạn bắt
              đầu với sự tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video từ bảng Pinterest riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không, chúng tôi chỉ hỗ trợ ghim công khai. Video bảng riêng tư hoặc bí mật cần sự cho phép của người tạo, và chúng tôi tôn trọng ranh giới đó để hợp pháp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải xuống có làm chậm điện thoại hoặc máy tính của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tệp của chúng tôi sạch và nhẹ, vì vậy không trễ. Nhưng lưu nhiều video có thể lấp đầy bộ nhớ, vì vậy hãy quản lý không gian của bạn cẩn thận.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tại sao video đã tải xuống của tôi không có hình mờ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest thêm logo để theo dõi chia sẻ, nhưng chúng tôi kéo tệp thô và làm sạch nó, cung cấp cho bạn video rõ ràng để sử dụng cá nhân.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể chỉ lưu âm thanh từ video Pinterest không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, chọn MP3 sau khi dán liên kết. Tuyệt vời để lấy nhạc hoặc lồng tiếng từ hướng dẫn mà không có hình ảnh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Điều gì xảy ra nếu tải xuống của tôi không bắt đầu?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Đảm bảo liên kết là công khai và bắt đầu bằng pinterest.com. Thử trình duyệt khác hoặc xóa bộ nhớ cache. Trò chuyện hỗ trợ của chúng tôi khắc phục sự cố nhanh chóng.
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
                  Chúng tôi xử lý video lên đến 60 phút, mặc dù hầu hết clip Pinterest đều ngắn. Những cái dài hơn mất một chút nhưng tải xuống đầy đủ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bạn có giữ video đã tải xuống của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không đâu. Chúng tôi xử lý ngay lập tức và xóa mọi thứ sau đó. Tệp của bạn ở trên thiết bị của bạn, không phải máy chủ của chúng tôi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Người tạo có thể thấy nếu tôi tải video của họ không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest không thông báo cho họ. Tải xuống của bạn ở lại riêng tư, không có cảnh báo cho người đăng.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu lưu video Pinterest ngay bây giờ
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lấy clip cảm hứng của bạn trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao chép liên kết ghim Pinterest
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán trên trang web của chúng tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải video sạch
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải video Pinterest
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm trình tải xuống
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
      <FeatureCard icon={VideoIcon} title="Chất lượng video hàng đầu">
        Lưu video Pinterest ở độ phân giải tốt nhất của chúng, lên đến 1080p nếu ghim gốc hỗ trợ. Không có hình ảnh mờ hoặc màu phai khi bạn xem sau. Chúng tôi kéo tệp thẳng từ máy chủ Pinterest, giữ mọi chi tiết sắc nét cho hướng dẫn DIY hoặc clip công thức đó.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không có hình mờ hoặc lớp phủ">
        <a href="https://help.pinterest.com/en/article/download-an-image">Pinterest hiển thị tên người dùng của người tạo trên video được tải xuống qua ứng dụng của họ</a>, làm lộn xộn chế độ xem. Chúng tôi loại bỏ tất cả điều đó, cung cấp clip sạch sẵn sàng cho các dự án hoặc sử dụng cá nhân của bạn. Xem ý tưởng trang trí nhà đó mà không có văn bản chặn các chi tiết.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
        Sử dụng điện thoại, máy tính bảng, máy tính xách tay hoặc máy tính để bàn của bạn và nó chạy mượt mà. Không cần ứng dụng hoặc phần mềm bổ sung. Chỉ cần mở trang web của chúng tôi trong trình duyệt của bạn, dán liên kết và tải xuống. Được thử nghiệm trên mọi thứ từ iPhone cũ đến PC mới, nó luôn không rắc rối.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải xuống nhanh">
        Chờ đợi thật tệ. Công cụ của chúng tôi lấy video Pinterest trong vài giây, thường dưới 10 cho hầu hết các clip. Chúng tôi sử dụng máy chủ gần Pinterest để kéo nhanh, vì vậy bạn có thể lưu video thủ công hoặc thói quen tập luyện trong giờ nghỉ cà phê.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hoàn toàn miễn phí sử dụng">
        Không có chi phí, không có đăng ký, không có phí ẩn. Tải xuống nhiều video như bạn muốn, mỗi ngày, không giới hạn. Chúng tôi giữ nó miễn phí để bạn có thể lưu cảm hứng đám cưới hoặc clip dự án nghệ thuật mà không gặp rào cản thanh toán.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Quy trình an toàn và riêng tư">
        Thông tin của bạn được bảo mật. Chúng tôi không lưu trữ liên kết hoặc video của bạn sau khi bạn tải xuống. Không theo dõi, không ghi nhật ký và không có quảng cáo spam. Quy trình sạch sẽ, giữ cho thiết bị của bạn không có rác hoặc rủi ro.
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
      <StepCard step={1} title="Sao chép liên kết video từ Pinterest">
        <a href="http://www.pinterest.com">Mở Pinterest</a> trên điện thoại hoặc trình duyệt của bạn. Tìm video bạn yêu thích, như hướng dẫn đan hoặc clip cải tạo nhà. Nhấp vào ba dấu chấm ở góc trên bên phải của ghim. Từ menu, chọn "Sao chép liên kết". Điều này lấy URL đầy đủ, một cái gì đó như pinterest.com/pin/123456789. Đảm bảo nó chính xác.
      </StepCard>
      <StepCard step={2} title="Dán liên kết vào trang web của chúng tôi">
        Truy cập videodownload.io trong trình duyệt của bạn. Bạn sẽ thấy một hộp có nhãn "Dán liên kết Pinterest tại đây". Nhấp vào bên trong và dán liên kết đã sao chép. Kiểm tra rằng nó bắt đầu bằng pinterest.com để tránh lỗi. Chỉ ghim công khai hoạt động; video bảng riêng tư hoặc bí mật sẽ không tải xuống.
      </StepCard>
      <StepCard step={3} title="Chúng tôi lấy và làm sạch video">
        Nhấp vào nút "Tải xuống" màu xanh lá cây bên cạnh hộp. Hệ thống của chúng tôi kéo video từ máy chủ Pinterest trong vài giây. Chúng tôi loại bỏ bất kỳ hình mờ nào và đảm bảo chất lượng vững chắc. Âm thanh vẫn rõ ràng, vì vậy bạn không bỏ lỡ các bước trong công thức hoặc hướng dẫn thủ công đó.
      </StepCard>
      <StepCard step={4} title="Lưu clip vào thiết bị của bạn">
        Bạn sẽ có các tùy chọn: MP4 cho video đầy đủ có âm thanh hoặc MP3 chỉ cho âm thanh. Chọn MP4 cho hầu hết các clip. Nhấn để tải xuống và nó lưu vào thư mục Tải xuống hoặc thư viện điện thoại của bạn. Đặt tên nó một cái gì đó rõ ràng, như "diy_paint.mp4", trước khi lưu. Phát nó để xác nhận nó hoàn hảo.
      </StepCard>
    </div>
  );
}
