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

export default function VimeoPageVI() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Vimeo | Miễn Phí & HD",
    description: "Tải video Vimeo định dạng MP4 với chất lượng 1080p. Trình tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Hộp tải xuống tối giản */}
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video Vimeo"
            />
          </div>
          {/* Tính năng */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải video Vimeo thật đơn giản
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng dẫn dễ hiểu giúp bạn lưu những clip sáng tạo để xem ngoại tuyến
          </p>

          <EnhancedFeatures />

          {/* Cách tải xuống */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Quy trình từng bước rõ ràng để lưu video nhanh chóng
          </h2>
          <p className="text-muted-foreground mb-6">
            Với videodownload.io, đưa video Vimeo về thiết bị của bạn chỉ mất vài phút.
            Làm theo bốn bước đơn giản này để tải bất kỳ video nào trong chốc lát.
            Mỗi bước đều trực quan, ngay cả khi bạn không rành công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Tải video Vimeo
              </Button>
            </a>
          </div>

          {/* Vì sao nên tải */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên tải video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những tình huống hữu ích nhất
            </h2>
            <p className="section-muted mb-4">
              Vimeo là kho nội dung sáng tạo và chuyên nghiệp, nhưng video có thể bị ẩn hoặc xóa bất cứ lúc nào. Tải xuống giúp bạn giữ lại những clip truyền cảm hứng hoặc mang tính học hỏi, biến những phát hiện thoáng qua thành bộ sưu tập riêng. Đó là cách bạn lưu giữ những gì phục vụ dự án hay đam mê của mình, chứ không phải gom nhặt ngẫu nhiên. Bạn toàn quyền kiểm soát thư viện, không lo video bị gỡ hay nền tảng thay đổi.
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
                    Lưu các video hướng dẫn làm phim hoặc phỏng vấn nghệ sĩ để xem trên máy bay hoặc tại địa điểm không có Wi-Fi. Học sinh, sinh viên tải các clip học tập để ôn luyện bất cứ lúc nào mà không cần mạng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái sử dụng cho người sáng tạo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nhà làm phim lưu trữ phim ngắn để nghiên cứu kỹ thuật hoặc lồng ghép vào dự án mới. Marketer tải video thương hiệu để chỉnh sửa cho kênh khác, không lo watermark làm hỏng khung hình.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lưu trữ video do bạn đăng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nếu bạn đăng video lên Vimeo, chúng có thể biến mất do sự cố tài khoản hoặc cập nhật hệ thống. Hãy tải về ổ cứng để bảo vệ thành quả, từ portfolio cá nhân đến dự án cho khách hàng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Học tập và lấy cảm hứng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nhà thiết kế lưu các bài hướng dẫn motion graphics để luyện tập ngoại tuyến. Giáo viên tải bài giảng sáng tạo mang vào lớp, trình chiếu dễ dàng dù không có mạng.
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
                    Lưu lại MV hoặc màn trình diễn nghệ thuật để xem mỗi khi cần động lực. Một video bắt gặp trên Vimeo có thể trở thành nguồn tư liệu cho ý tưởng hoặc bản thuyết trình tiếp theo của bạn.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Vimeo mang lại sự linh hoạt và tiện lợi,
              giúp bạn thưởng thức nội dung theo cách riêng - cho giải trí,
              công việc hay học tập.
            </p>
          </div>

          {/* Ai nên tải */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những nhóm tận dụng được nhiều nhất
            </h2>
            <p className="section-muted mb-4">
              Vimeo là điểm đến của nghệ sĩ và chuyên gia, nhưng tải video rất hữu ích cho bất kỳ ai dùng nền tảng để sáng tạo, học hỏi hay phát triển. Đây là công cụ dành cho người xem clip như một tài nguyên, nguồn cảm hứng hoặc kỷ niệm chứ không chỉ giải trí thoáng qua. Nếu bạn thường xuyên dùng Vimeo và muốn giữ lại điều quan trọng, hãy tải video về.
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
                    Nhà làm phim và họa sĩ hoạt hình lưu tutorial hoặc showreel để nghiên cứu hay chỉnh sửa lại. Họ cũng tải video của chính mình để giữ bản gốc sạch, không logo cho portfolio hoặc hậu kỳ.
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
                    Giáo viên mỹ thuật lưu demo animation cho giờ học. Sinh viên tải mẹo làm phim hoặc bài học thiết kế để xem lại offline, luyện tập theo tốc độ của mình.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chuyên gia và doanh nghiệp
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Đội ngũ marketing tải video thương hiệu để tái sử dụng trong quảng cáo hoặc website. Freelancer lưu bản thuyết trình khách hàng để lưu trữ hoặc gửi đi, không bị watermark làm phiền.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người đam mê và sáng tạo tự do
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nhiếp ảnh gia lưu bài học ánh sáng để thử nghiệm tại nhà. Nhạc sĩ tải các buổi biểu diễn live để nghiên cứu cách dàn dựng sân khấu và luyện tập ngoại tuyến.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người dùng thông thường
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lưu phim ngắn của bạn bè hoặc clip truyền cảm hứng để xem lại sau. Ngay cả fan hâm mộ cũng tải các màn trình diễn nghệ thuật cho dự án cá nhân hoặc bảng moodboard.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Dù bạn là ai, tải video Vimeo giúp tiết kiệm thời gian, dữ liệu và công sức, đồng thời giữ nội dung yêu thích luôn sẵn sàng.
            </p>
          </div>

          {/* Pháp lý */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải video Vimeo có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những điều cần biết về luật
            </h2>
            <p className="section-muted mb-4">
              Việc tải video Vimeo vẫn nằm trong vùng xám. Quy định của Vimeo <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">cho phép tải video công khai trên website</a> cho mục đích cá nhân nếu người đăng không tắt tính năng tải. Dùng công cụ bên thứ ba như của chúng tôi vi phạm điều khoản và có thể khiến tài khoản bị cảnh báo, nhưng hiếm khi bị khóa trừ khi bạn tải ồ ạt hoặc đăng lại không xin phép.
            </p>
            <p className="section-muted mb-4">
              Video được bảo vệ bản quyền theo các luật như DMCA tại Mỹ. Lưu về để xem riêng, chẳng hạn học một tutorial offline, thường được xem là fair use. Tuy nhiên chia sẻ mà không ghi nguồn hoặc dùng thương mại có thể gây rắc rối pháp lý. Âm nhạc hay lời thoại trong video cũng có lớp bản quyền riêng, dù tải cá nhân trong thời gian ngắn hiếm khi gặp vấn đề.
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
                    Nếu tác giả bật tải xuống hoặc nội dung thuộc phạm vi công cộng, bạn có thể yên tâm. Mục đích giáo dục như chiếu trong lớp học thường được coi là fair use. Hãy xem phần mô tả để biết quyền sử dụng. Giữ video ở chế độ riêng tư và ghi nguồn khi chia sẻ để luôn an toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rủi ro */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nguy cơ tiềm ẩn và cách phòng tránh
            </h2>
            <p className="section-muted mb-4">
              Công cụ của bên thứ ba trông rất tiện, nhưng nhiều trang kém uy tín tiềm ẩn nguy hiểm thật sự. Không phải website nào cũng an toàn và chỉ một cú nhấp chuột sai có thể khiến thiết bị hoặc dữ liệu gặp vấn đề. Biết trước rủi ro giúp bạn tránh phiền toái.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Phần mềm độc hại">
                Trang thiếu uy tín có thể cài virus vào file video, đưa spyware hoặc ransomware vào máy. Một lần tải nhầm có thể khóa toàn bộ dữ liệu hoặc lấy cắp mật khẩu. Thậm chí có công cụ bị phát hiện gắn keylogger khiến một chiếc meme trở thành lỗ hổng bảo mật.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Lừa đảo phishing">
                Trang giả mạo giao diện đăng nhập Vimeo để lấy thông tin của bạn. Hoặc quảng cáo dụ bạn cài "cập nhật" nhưng thực chất là trình theo dõi, thu thập hoạt động ngoài nền tảng.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Giảm chất lượng">
                Website kém chất lượng nén video quá mức khiến hình giật, tiếng mất. Bạn mong một tutorial rõ ràng nhưng nhận về file lỗi.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò rỉ thông tin">
                Một số trang ghi lại lịch sử tải và bán địa chỉ IP hoặc sở thích xem video cho quảng cáo. Hacker có thể lấy dữ liệu đó rồi gửi spam hoặc lừa đảo có chủ đích.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bị khóa tài khoản Vimeo">
                Lạm dụng công cụ bên ngoài có thể khiến tài khoản bị đánh dấu, đặc biệt với creator. Bạn có thể mất hồ sơ hoặc toàn bộ video chỉ sau một đêm.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Đầy bộ nhớ">
                Lưu quá nhiều video sẽ chiếm dung lượng, làm điện thoại hay ổ cứng chậm chạp. File hỏng có thể khiến trình phát bị treo và mất thời gian khắc phục.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Hãy dùng website uy tín, quét file tải xuống và cân nhắc sử dụng VPN để đảm bảo an toàn.
            </p>
          </div>

          {/* Vì sao chọn videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên dùng videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đối tác đáng tin cậy cho việc tải Vimeo
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi tạo ra videodownload.io vào năm 2022 vì đã chán ngán ứng dụng chậm chạp và website rủi ro. Là người dùng Vimeo, chúng tôi muốn một cách tải video nhanh, sạch và an toàn. Chúng tôi là đội ngũ nhỏ, không phải tập đoàn lớn, tập trung mang đến trải nghiệm tải xuống đơn giản, bảo mật. Hàng triệu người tin tưởng chúng tôi mà không xảy ra rò rỉ dữ liệu, và sản phẩm vẫn được cải tiến dựa trên phản hồi của họ.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Dưới năm giây">
                Tải xong ngay cả khi lượng truy cập tăng cao.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không quảng cáo hay pop-up">
                Giao diện gọn gàng, không phiền toái.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Không còn watermark">
                Clip sạch, sẵn sàng chia sẻ hoặc biên tập.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Không giới hạn lượt tải">
                Tải bao nhiêu video tùy thích mỗi ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
                Từ điện thoại cũ đến laptop mới đều dùng được.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Hệ thống an toàn">
                Không lưu dữ liệu sau khi bạn tải xong.
              </FeatureCard>
            </div>
          </div>

          {/* Câu hỏi thường gặp */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những thắc mắc phổ biến về việc tải Vimeo
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã tổng hợp câu trả lời cho những câu hỏi gặp nhiều nhất khi dùng
              videodownload.io và tải video Vimeo, giúp bạn bắt đầu một cách tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video Vimeo riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không, chúng tôi chỉ hỗ trợ video công khai. Nội dung riêng tư hoặc đặt mật khẩu cần sự cho phép của tác giả và chúng tôi tôn trọng điều đó.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải xuống có làm thiết bị chậm đi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File chúng tôi cung cấp nhẹ và sạch nên không gây lag. Tuy nhiên lưu quá nhiều video có thể làm đầy bộ nhớ, vì vậy hãy theo dõi dung lượng trống.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vì sao video tôi tải không còn watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo thêm logo để theo dõi việc chia sẻ, nhưng chúng tôi lấy file gốc và xử lý lại giúp bạn có video sắc nét để dùng cá nhân.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể lưu riêng phần âm thanh không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, sau khi dán link hãy chọn MP3. Rất phù hợp khi bạn chỉ muốn nhạc hoặc giọng đọc mà không cần hình.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Nếu quá trình tải không bắt đầu thì sao?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Hãy kiểm tra link có công khai và bắt đầu bằng vimeo.com không. Thử trình duyệt khác hoặc xóa cache. Đội hỗ trợ qua chat của chúng tôi có thể giúp bạn nhanh chóng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có giới hạn thời lượng video không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi xử lý video dài tới 60 phút, dù phần lớn clip trên Vimeo ngắn hơn. Video dài có thể mất thêm chút thời gian nhưng sẽ tải đầy đủ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Các bạn có lưu video tôi tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không hề. Mọi dữ liệu được xử lý tức thì và xóa ngay sau đó. File chỉ nằm trên thiết bị của bạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tác giả có biết tôi đã tải video của họ không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo không gửi thông báo. Việc tải xuống của bạn hoàn toàn riêng tư, không ai bị cảnh báo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bắt đầu ngay */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu lưu video Vimeo ngay hôm nay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Giữ những clip sáng tạo chỉ trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao chép link video Vimeo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán vào trang của chúng tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải video chất lượng cao
              </div>
            </div>
            <div className="mt-2">
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Tải video Vimeo
                </Button>
              </a>
            </div>
          </div>

          {/* Khám phá thêm trình tải */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm trình tải xuống
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải video từ nền tảng bạn yêu thích
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
      <FeatureCard icon={VideoIcon} title="Chất lượng cao, sắc nét">
        Lưu video Vimeo ở độ phân giải tốt nhất, lên tới 1080p hoặc cao hơn nếu bản gốc hỗ trợ. Không còn cảnh mờ hay màu sắc nhạt khi phát lại. Chúng tôi lấy trực tiếp từ máy chủ của Vimeo để từng khung hình luôn rõ nét.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không còn watermark hay logo">
        Vimeo thêm logo khi bạn lưu qua ứng dụng, gây vướng tầm nhìn. Chúng tôi loại bỏ mọi dấu hiệu đó để bạn có clip sạch, sẵn sàng chỉnh sửa hoặc phát lại.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
        Dùng điện thoại, máy tính bảng, laptop hay máy bàn đều trơn tru. Không cần cài ứng dụng hay phần mềm bổ sung. Mở trình duyệt, dán link và tải xuống.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải nhanh">
        Chẳng ai muốn chờ đợi. Công cụ của chúng tôi tải video trong vài giây, thường dưới 10 giây cho hầu hết clip. Máy chủ đặt gần Vimeo nên việc lấy file cực kỳ nhanh chóng.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hoàn toàn miễn phí">
        Không phí ẩn, không yêu cầu đăng ký. Bạn có thể tải bao nhiêu video tùy thích mỗi ngày mà không bị chặn.
      </FeatureCard>
      <FeatureCard icon={Shield} title="An toàn và riêng tư">
        Thông tin của bạn luôn được bảo vệ. Chúng tôi không lưu link hay video sau khi xử lý, không theo dõi, không quảng cáo gây phiền.
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
      <StepCard step={1} title="Sao chép link video từ Vimeo">
        <a href="http://www.vimeo.com">Mở Vimeo</a> trên điện thoại hoặc trình duyệt. Chọn video bạn thích, có thể là mẹo làm phim hoặc một đoạn animation sáng tạo. Nhấn biểu tượng chia sẻ - thường là chiếc máy bay giấy - ở cạnh video và chọn "Copy link". Đảm bảo bạn đã lấy đúng URL, ví dụ vimeo.com/123456789.
      </StepCard>
      <StepCard step={2} title="Dán link vào công cụ">
        Truy cập videodownload.io. Trong ô "Dán link Vimeo tại đây", hãy dán URL vừa sao chép. Kiểm tra đường dẫn bắt đầu bằng vimeo.com để tránh lỗi. Chỉ video công khai mới tải được, video riêng tư sẽ bị chặn.
      </StepCard>
      <StepCard step={3} title="Chúng tôi lấy và làm sạch video">
        Bấm nút "Tải xuống" màu xanh bên cạnh ô nhập. Hệ thống sẽ gọi video từ máy chủ Vimeo trong vài giây, loại bỏ watermark và đảm bảo chất lượng hình, tiếng luôn ổn định.
      </StepCard>
      <StepCard step={4} title="Lưu clip về thiết bị">
        Chọn định dạng phù hợp: MP4 cho cả hình lẫn tiếng hoặc MP3 nếu chỉ cần âm thanh. Với đa số clip, hãy chọn MP4. Sau khi tải, file nằm trong thư mục Downloads hoặc thư viện máy. Đổi tên dễ nhớ, ví dụ "film_tutorial.mp4", rồi mở lên kiểm tra.
      </StepCard>
    </div>
  );
}
