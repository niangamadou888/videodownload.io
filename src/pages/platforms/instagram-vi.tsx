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

export default function InstagramPageVi() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Tải Video Instagram | Miễn Phí & HD",
    description:
      "Tải video Instagram, Reels, Stories và IGTV ở định dạng mp4, 1080p, 4k. Công cụ tải và chuyển đổi video trực tuyến miễn phí."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Hộp tải xuống tối giản */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Instagram Video
          </h1>
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Dán URL video, Reel hoặc Story Instagram"
            />
          </div>
          {/* Tính năng */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Tính năng
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tải video Instagram thật dễ dàng
          </h2>
          <p className="text-muted-foreground mb-6">
            Hướng dẫn đơn giản giúp bạn lưu Reels và các đoạn clip để xem ngoại tuyến bất cứ lúc nào.
          </p>

          <EnhancedFeatures />

          {/* Cách tải */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cách tải video Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Hướng dẫn từng bước rõ ràng để lưu video mà không gặp rắc rối
          </h2>
          <p className="text-muted-foreground mb-6">
            Với videodownload.io, việc đưa video Instagram về thiết bị trở nên cực kỳ nhanh chóng. Chỉ cần làm
            theo bốn bước đơn giản để tải bất kỳ video nào trong vài phút. Mỗi bước đều trực quan, kể cả khi bạn
            không rành công nghệ.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Download Instagram Video
              </Button>
            </a>
          </div>

          {/* Lý do nên tải */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên tải video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những trường hợp sử dụng hiệu quả nhất
            </h2>
            <p className="section-muted mb-4">
              Feed của Instagram thay đổi liên tục khiến nội dung hay dễ bị trôi mất. Tải video giúp bạn giữ lại
              những đoạn clip quan trọng, biến việc lướt mạng thành bộ sưu tập cá nhân. Không phải lưu mọi bài đăng,
              mà là nắm giữ những video truyền cảm hứng hoặc có ý nghĩa. Bạn kiểm soát những gì ở lại, kể cả khi tài
              khoản chuyển sang riêng tư hoặc bài bị gỡ.
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
                    Lưu lại mẹo du lịch hoặc Reel luyện tập cho các chuyến bay hay chuyến đi cắm trại không có sóng.
                    Các bậc phụ huynh tải nhạc thiếu nhi hoặc Story kể chuyện để trẻ giải trí trên đường mà không cần Wi-Fi.
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
                    Các creator dùng video tải về để làm remix. Blogger thời trang lưu Reel phối đồ để đưa vào nội dung,
                    thêm lời bình hoặc góc quay mới. Nhạc sĩ lấy âm thanh đang thịnh hành để phối vào ca khúc mà không sợ watermark,
                    giúp bản chỉnh sửa sạch sẽ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sao lưu bài đăng
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram có thể xóa hoặc xảy ra lỗi, vì vậy các creator lưu trữ Reel vào ổ cứng. Học sinh sinh viên lưu mẹo học tập
                    hoặc đoạn bài giảng để xem lại trong ghi chú mà không cần đăng nhập ứng dụng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tái sử dụng trên nền tảng khác
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Biến một Reel thành YouTube Short hoặc clip TikTok với vài chỉnh sửa. Doanh nghiệp lưu lời chứng thực của khách hàng để nhúng vào website,
                    giúp tăng niềm tin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kỷ niệm cá nhân
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tải những khoảnh khắc của gia đình như điệu nhảy đám cưới của người thân hoặc cập nhật về em bé của bạn bè để xem lại trong những buổi tụ họp,
                    hoặc lưu giữ nhiều năm sau. Đó là cách giữ kỷ niệm luôn gần gũi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tải video Instagram mang đến sự linh hoạt và tiện lợi, giúp bạn thưởng thức nội dung theo cách riêng cho dù là để giải trí, làm việc hay học tập.
            </p>
          </div>

          {/* Đối tượng phù hợp */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ai nên tải video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những nhóm người hưởng lợi nhiều nhất
            </h2>
            <p className="section-muted mb-4">
              Vòng lặp cuộn vô tận của Instagram cuốn hút hàng triệu người, nhưng tải video lại phù hợp với những ai dùng nền tảng có mục đích.
              Dành cho người xem Reels như công cụ, nguồn cảm hứng hoặc kỷ niệm chứ không chỉ là giải trí chớp nhoáng. Nếu bạn đang xây dựng,
              học hỏi hoặc muốn lưu giữ khoảnh khắc, công cụ này dành cho bạn.
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
                    Họ đăng bài hàng ngày và tìm ý tưởng từ các Reel đang thịnh hành. Việc tải xuống giúp lưu lại sản phẩm của chính mình hoặc phân tích người khác,
                    như vlogger ẩm thực lưu những mẹo trình bày món ăn để biến tấu theo phong cách riêng mà không bị logo che mất.
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
                    Giáo viên lưu các Reel minh họa để trình chiếu trên lớp, như thí nghiệm khoa học, tránh phụ thuộc vào mạng. Người học tải hướng dẫn học tập hoặc bài luyện ngôn ngữ
                    để xem lại ngoại tuyến theo tốc độ riêng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gia đình
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bố mẹ lưu những bước đi đầu tiên của con hoặc đoạn clip kỳ nghỉ để chia sẻ với người thân hoặc làm kỷ niệm lâu dài. Đáng tin cậy hơn nhiều so với việc trông chờ Instagram
                    lưu lại mãi mãi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chủ doanh nghiệp và marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Một cửa hàng lưu lại video khách hàng sử dụng sản phẩm để dùng cho quảng cáo hoặc bằng chứng xã hội. Đội ngũ marketing thử nghiệm các xu hướng Reel cho chiến dịch và điều chỉnh để đăng trên nhiều kênh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Người yêu thích sở thích cá nhân
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tín đồ thể hình lưu các bài tập yoga để luyện ở phòng gym. Người mê DIY tải hướng dẫn thủ công để làm theo từng bước. Ngay cả người dùng thông thường cũng tải clip tạo động lực để xem lại vào những ngày khó khăn.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Dù bạn là ai hay có lối sống thế nào, tải video Instagram giúp tiết kiệm thời gian, dữ liệu và công sức, đồng thời giữ nội dung yêu thích luôn trong tầm tay.
            </p>
          </div>

          {/* Khía cạnh pháp lý */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Tải video Instagram có hợp pháp không?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Những điều bạn cần biết về pháp lý
            </h2>
            <p className="section-muted mb-4">
              Vấn đề tải video Instagram không hoàn toàn rạch ròi. Instagram cho phép lưu bài đăng công khai trong ứng dụng để dùng riêng, miễn là creator không tắt chức năng. Sử dụng công cụ bên thứ ba như của chúng tôi
              về mặt kỹ thuật là vi phạm điều khoản, có thể khiến tài khoản bị đánh dấu, nhưng hiếm khi bị cấm nếu bạn không tải hàng loạt hoặc đăng lại.
            </p>
            <p className="section-muted mb-2">
              Về pháp luật, video thuộc về người tạo theo các quy định bản quyền như DMCA tại Mỹ. Lưu để xem cá nhân thường được xem là "fair use", giống như xem ngoại tuyến.
              Tuy nhiên chia sẻ mà không xin phép hoặc chỉnh sửa để kiếm lợi nhuận có thể bị khiếu nại vi phạm. Âm nhạc trong Reel khiến vấn đề phức tạp hơn vì hãng đĩa nắm quyền, nhưng các lần lưu ngắn cho mục đích cá nhân hiếm khi gặp rắc rối.
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
                    Nếu creator cho phép tải hoặc video thuộc phạm vi công cộng, bạn hoàn toàn ổn. Mục đích giáo dục – ví dụ giáo viên cho học sinh xem clip – thường được
                    xem là fair use. Hãy kiểm tra mô tả bài đăng để xem creator có cho phép hay không. Giữ cho mục đích cá nhân và ghi nguồn khi chia sẻ, bạn thường sẽ an toàn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rủi ro */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rủi ro khi tải video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Các mối nguy tiềm ẩn và cách phòng tránh
            </h2>
            <p className="section-muted mb-4">
              Tải từ những trang không rõ nguồn gốc nghe có vẻ tiện, nhưng có thể kéo theo những rắc rối thật sự. Không phải công cụ nào cũng sạch, và vài cú nhấp chuột bất cẩn
              có thể làm hỏng thiết bị hoặc để lộ dữ liệu. Hãy hiểu các rủi ro trước khi nhấn vào nút tải.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware là mối đe dọa lớn nhất">
                Những trang mờ ám có thể nhúng virus vào file video, cài spyware hoặc ransomware. Một lần tải sai lầm có thể khóa tất cả tệp hoặc lấy cắp mật khẩu.
                Đã có báo cáo về công cụ ẩn keylogger, biến việc lưu một Reel thành lỗ hổng dữ liệu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Chiêu trò lừa đảo phishing">
                Các trang giả mạo đăng nhập Instagram và lấy cắp tài khoản nếu bạn nhập thông tin. Pop-up quảng cáo cố ép bạn cài "bản cập nhật" thực chất là trình theo dõi, ghi lại mọi cú nhấp.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Suy giảm chất lượng">
                Công cụ kém chất lượng nén video quá mức khiến hình ảnh giật, mờ hoặc mất tiếng. Bạn mong chờ Reel sắc nét nhưng lại nhận về một đoạn clip tệ hại.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rò rỉ quyền riêng tư">
                Một số dịch vụ lưu lịch sử tải và bán địa chỉ IP hoặc sở thích xem video cho nhà quảng cáo. Kẻ xấu có thể dùng dữ liệu đó để spam hoặc lừa đảo.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Nguy cơ bị khóa tài khoản Instagram">
                Tải quá nhiều bằng công cụ bên ngoài có thể khiến tài khoản bị đánh dấu, đặc biệt với creator. Bạn có thể mất profile hay người theo dõi chỉ sau một đêm.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Sự cố lưu trữ">
                Reels tích tụ nhanh chóng, khiến điện thoại chậm lại hoặc đầy bộ nhớ. File hỏng có thể làm trình phát bị treo, mất thời gian khắc phục.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Hãy dùng những trang đáng tin cậy, quét file trước khi mở và cân nhắc dùng VPN để bảo vệ mình.
            </p>
          </div>

          {/* Lý do chọn videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Vì sao nên dùng videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Đối tác đáng tin cậy khi tải video Instagram
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi ra mắt videodownload.io năm 2022 vì quá mệt mỏi với những ứng dụng lỗi và <a href="https://blog.avast.com/malicious-browser-extensions-avast">công cụ tải chứa malware</a>.
              Là người dùng Instagram, chúng tôi muốn một cách lưu Reel sạch sẽ, không phiền toái và không rủi ro. Chúng tôi là một nhóm nhỏ dành toàn bộ tâm huyết để quá trình tải nhanh
              và an toàn nhất. Sau hàng triệu lượt tải, chúng tôi chưa từng gặp sự cố rò rỉ dữ liệu, và người dùng tiếp tục quay lại vì sự ổn định.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Tải cực nhanh">
                Mất chưa đến năm giây ngay cả khi cao điểm.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Không quảng cáo, không pop-up">
                Giao diện sạch sẽ, tập trung vào việc tải.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Không còn watermark">
                Video giữ nguyên bản gốc.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Lưu không giới hạn">
                Không bị giới hạn số lần tải mỗi ngày.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
                Từ điện thoại đến máy tính để bàn.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Hệ thống an toàn">
                Không lưu lại dữ liệu sau khi tải xong.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Câu hỏi thường gặp</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Thắc mắc phổ biến về việc tải video Instagram
            </h2>
            <p className="section-muted mb-4">
              Chúng tôi đã tổng hợp câu trả lời cho những câu hỏi hay gặp nhất về videodownload.io và cách tải video Instagram, giúp bạn bắt đầu một cách tự tin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể tải video Instagram riêng tư không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không. Chúng tôi chỉ hỗ trợ Reels và bài đăng công khai. Nội dung riêng tư cần sự cho phép của creator và chúng tôi tôn trọng điều đó để đảm bảo tính hợp pháp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tải về có làm chậm điện thoại của tôi không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không, file tải xuống sạch và sẵn dùng. Chỉ cần đảm bảo thiết bị còn đủ bộ nhớ. Việc tải nhẹ như khi bạn xem Reel bình thường.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Tôi có thể chỉ tải âm thanh của Reel không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có! Chúng tôi cung cấp tùy chọn MP3 để bạn lấy riêng phần âm thanh, rất phù hợp cho remix, lồng tiếng hoặc nghe offline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Có cần cài ứng dụng không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Không cần. Tất cả diễn ra trên trình duyệt. Chỉ việc dán link, bấm tải và tận hưởng.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Watermark có được xóa tự động không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Có, chúng tôi loại bỏ watermark của Instagram để video sẵn sàng sử dụng mà không bị chữ che khuất.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Video có bị giới hạn dung lượng không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Chúng tôi xử lý Reels dài tới 60 phút, mặc dù đa số ngắn hơn. Clip dài có thể cần thêm thời gian, nhưng bạn vẫn nhận toàn bộ video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Các bạn có lưu trữ video tôi tải không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tuyệt đối không. Chúng tôi xử lý ngay lập tức rồi xóa. File chỉ nằm trên thiết bị của bạn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Creator có biết tôi đã tải Reel của họ không?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram không gửi thông báo nào cả. Lượt tải của bạn hoàn toàn riêng tư và không thông báo cho chủ sở hữu.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bắt đầu tải video Instagram ngay
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lưu Reels về máy chỉ trong vài giây
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sao chép link Instagram
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Dán vào website của chúng tôi
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tải video sạch về máy
              </div>
            </div>
            <div className="mt-2">
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Instagram Video
                </Button>
              </a>
            </div>
          </div>

          {/* Trình tải khác */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Khám phá thêm các trình tải khác
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tải nội dung từ những nền tảng bạn yêu thích
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
      <FeatureCard icon={VideoIcon} title="Chất lượng video sắc nét">
        Tải video Instagram ở chất lượng tối đa, lên tới 1080p nếu bài gốc hỗ trợ. Không còn cảnh bị vỡ hình hay phai màu khi xem lại.
        Chúng tôi lấy trực tiếp file từ máy chủ của Instagram nên từng khung hình đều rõ nét, hoàn hảo cho clip du lịch hay demo nấu ăn.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Không dính watermark">
        Instagram thêm logo và tên người dùng vào video đã lưu, khiến trải nghiệm kém đẹp. Chúng tôi gỡ hoàn toàn watermark,
        để bạn có clip sạch sẽ sẵn sàng chỉnh sửa hoặc chia sẻ. Thưởng thức Reel nhảy múa hay khoảnh khắc thú cưng mà không bị chữ che.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Hoạt động trên mọi thiết bị">
        Dùng iPhone, Android, PC hay máy tính bảng đều được. Không cần cài ứng dụng hay phần mềm phức tạp.
        Chỉ cần mở website của chúng tôi, dán link và tải. Chúng tôi đã kiểm thử trên nhiều thiết bị từ laptop cũ đến smartphone mới, chất lượng luôn ổn định.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tốc độ tải cực nhanh">
        Không ai muốn chờ đợi. Công cụ của chúng tôi lấy video chỉ trong vài giây, thường dưới 10 giây với hầu hết clip.
        Máy chủ đặt gần Instagram giúp đảm bảo tốc độ, bạn có thể lưu Reel ngay trong giờ giải lao mà không sợ lag hay lỗi.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Hoàn toàn miễn phí">
        Không phí dịch vụ, không tài khoản, không chi phí ẩn. Tải bao nhiêu tùy thích mỗi ngày.
        Chúng tôi giữ mọi thứ miễn phí để bạn lưu bài tập, khoảnh khắc vui nhộn mà không lo paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Quy trình an toàn">
        Quyền riêng tư của bạn được bảo vệ. Chúng tôi không lưu link hay video sau khi tải xong.
        Không theo dõi, không lưu dữ liệu, không quảng cáo gây nghi ngờ. Quy trình sạch sẽ giúp thiết bị luôn an toàn.
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
      <StepCard step={1} title="Sao chép link video trên Instagram">
        <a href="http://www.instagram.com">Mở Instagram</a> trên điện thoại hoặc trình duyệt.
        Tìm Reel hoặc video bạn muốn lưu, ví dụ công thức nấu ăn nhanh hoặc vlog du lịch. Chạm vào ba dấu chấm ở góc phải trên của bài đăng.
        Từ menu, chọn "Copy Link" để lấy URL đầy đủ, như instagram.com/reel/ABC123. Hãy kiểm tra lại cho chính xác.
      </StepCard>
      <StepCard step={2} title="Dán link vào trang của chúng tôi">
        Truy cập videodownload.io trong trình duyệt. Bạn sẽ thấy ô nhập với dòng chữ "Dán link Instagram tại đây".
        Bấm vào đó và dán link vừa sao chép. Hãy chắc rằng link bắt đầu bằng instagram.com để tránh lỗi.
        Bài đăng riêng tư sẽ không hoạt động, nhưng Reel và video công khai thì được.
      </StepCard>
      <StepCard step={3} title="Chúng tôi lấy và xử lý video">
        Nhấn nút xanh "Download" bên cạnh ô nhập. Hệ thống sẽ lấy video từ máy chủ Instagram trong vài giây,
        gỡ watermark và kiểm tra chất lượng để bạn không gặp file lỗi. Âm thanh vẫn khớp hoàn toàn và sẵn sàng phát.
      </StepCard>
      <StepCard step={4} title="Lưu file vào thiết bị">
        Bạn sẽ nhận các lựa chọn: MP4 cho video đầy đủ có âm thanh hoặc MP3 nếu chỉ cần audio. Đa số trường hợp nên chọn MP4.
        Nhấn tải xuống, file sẽ về thư mục Downloads hoặc thư viện trên điện thoại. Đặt tên dễ nhớ như "reel_workout.mp4" rồi mở thử để đảm bảo mọi thứ hoàn hảo.
      </StepCard>
    </div>
  );
}
