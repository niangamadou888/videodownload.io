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

export default function YouTubePageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video YouTube | Gratis & HD",
    description: "Download video YouTube, Shorts, dan Live dalam format mp4, 1080p, 4k. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video, Shorts, atau playlist YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Fitur yang Membuat Pengunduhan Video YouTube Menjadi Mudah dan Andal
          </h2>
          <p className="text-muted-foreground mb-6">
            Berikut enam fitur andalan yang menjadikan videodownload.io pilihan
            utama untuk mengunduh video YouTube dengan cepat, aman, dan efisien.
            Setiap fitur dirancang untuk meningkatkan pengalaman Anda dan
            memberikan fleksibilitas untuk seluruh kebutuhan unduhan.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara Mengunduh Video YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan Langkah demi Langkah untuk Menyimpan Video tanpa Ribet
          </h2>
          <p className="text-muted-foreground mb-6">
            Mengunduh video YouTube ke perangkat Anda sangat mudah bersama
            videodownload.io. Ikuti empat langkah sederhana ini untuk mengunduh
            video apa pun dalam hitungan menit. Setiap langkah dibuat intuitif,
            bahkan jika Anda tidak terbiasa dengan teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Unduh Video YouTube
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Mengunduh Video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kasus Penggunaan Terbaik untuk Akses Video Offline
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video YouTube memberi Anda kebebasan untuk menonton
              konten kapan saja dan di mana saja tanpa bergantung pada koneksi
              internet. Baik untuk menghemat kuota, bersiap perjalanan, maupun
              mengarsipkan konten, video offline sangat berguna. Berikut alasan
              terbaik untuk mengunduh video YouTube untuk penggunaan pribadi.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Bepergian Tanpa Akses Internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan film, vlog, atau video musik untuk ditonton saat
                    penerbangan panjang, perjalanan kereta, atau di daerah
                    terpencil tanpa Wi-Fi atau data seluler. Hiburan Anda tetap
                    lancar di mana pun berada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Tujuan Edukasi dan Belajar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh tutorial, kuliah, atau panduan langkah demi langkah
                    untuk belajar offline. Misalnya, simpan walkthrough coding,
                    pelajaran bahasa, atau video perbaikan DIY untuk dipelajari
                    ulang sesuai ritme Anda tanpa streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kreasi dan Pengeditan Konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ambil cuplikan untuk video Anda sendiri, seperti video
                    reaksi, montase, atau komentar, selama Anda mematuhi aturan
                    hak cipta atau mendapat izin kreator. Sangat berguna bagi
                    YouTuber maupun kreator TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mengarsipkan Video Favorit
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beberapa video dapat dihapus dari YouTube karena perubahan
                    kanal atau masalah hak cipta. Mengunduhnya membantu Anda
                    menyimpan favorit pribadi atau konten langka untuk akses
                    jangka panjang.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menghemat Penggunaan Data Seluler
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streaming video menghabiskan kuota, apalagi pada paket
                    terbatas. Mengunduh melalui Wi-Fi membuat Anda bisa menonton
                    tanpa khawatir batas kuota atau tagihan mahal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Perpustakaan Hiburan Offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bangun koleksi video musik, trailer film, atau vlog untuk
                    dinikmati secara offline. Cocok untuk berkemah, sesi gym, atau
                    bersantai di rumah tanpa jeda buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lokakarya dan Presentasi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Profesional dapat mengunduh video terkait industri, seperti
                    pidato keynote atau sesi pelatihan, untuk dibagikan saat
                    lokakarya atau rapat offline agar pemutaran tetap lancar
                    tanpa internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video YouTube memberi fleksibilitas dan kemudahan,
              sehingga Anda bisa menikmati konten sesuai keinginan, baik untuk
              hiburan, pekerjaan, maupun belajar.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang Sebaiknya Mengunduh Video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang Paling Diuntungkan dari Video Offline
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video YouTube bukan hanya untuk penonton kasual ini
              solusi penting bagi kelompok tertentu yang membutuhkan akses
              offline untuk pekerjaan, kreativitas, atau kepraktisan. Berikut
              siapa saja yang paling diuntungkan dan mengapa layak dilakukan.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kreator Konten dan Influencer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTuber, kreator TikTok, atau streamer dapat mengunduh
                    cuplikan untuk video reaksi, mashup, atau analisis, selama
                    mematuhi hak cipta, aturan fair use, atau memperoleh izin
                    dari kreator asli.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelajar dan Pendidik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan konten pendidikan seperti tutorial matematika,
                    penjelasan sains, atau dokumenter sejarah untuk belajar
                    offline atau digunakan di kelas. Ideal untuk area dengan
                    internet buruk atau belajar fokus tanpa distraksi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelancong yang Sering Bepergian
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baik di pesawat, kereta, maupun lokasi terpencil, video yang
                    telah diunduh memastikan hiburan tanpa bergantung pada
                    Wi-Fi yang tidak stabil atau paket data mahal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar Musik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ubah video musik atau penampilan langsung menjadi MP3 untuk
                    playlist offline. Cocok membuat daftar putar olahraga atau
                    mendengar wawancara tanpa streaming, selama sumbernya legal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arsiparis Video
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kolektor atau penggemar konten niche dapat menyimpan video
                    langka, unggahan lama, atau favorit pribadi yang mungkin
                    hilang dari YouTube karena penutupan akun atau pembersihan
                    konten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar Kebugaran dan Kesehatan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh sesi yoga, rutinitas latihan, atau panduan meditasi
                    untuk diikuti secara offline, baik di rumah, taman, maupun
                    gym tanpa perlu koneksi internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Peneliti dan Profesional
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Akademisi atau pakar industri dapat menyimpan presentasi
                    konferensi, webinar, atau video pelatihan untuk referensi
                    offline saat kerja lapangan, presentasi, atau sesi kajian.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Apa pun profesi atau gaya hidup Anda, mengunduh video YouTube dapat
              menghemat waktu, kuota, dan tenaga sambil menjaga konten favorit
              tetap mudah diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah Legal Mengunduh Video YouTube?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hal yang Perlu Anda Ketahui tentang Hukum
            </h2>
            <p className="section-muted mb-4">
              Legalitas mengunduh video YouTube bergantung pada beberapa faktor,
              dan penting untuk memahami aturannya agar terhindar dari masalah.
              Persyaratan Layanan YouTube secara eksplisit melarang pengunduhan
              video kecuali platform menyediakan opsi resmi, seperti{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=id&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                fitur offline YouTube Premium
              </a>{" "}
              bagi pelanggan. Menurut hukum hak cipta AS, mengunduh{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                konten berhak cipta
              </a>{" "}
              tanpa izin kreator atau pemegang hak ilegal dan dapat memicu gugatan
              perdata, meski penegakan terhadap pengguna individu untuk pemakaian
              pribadi jarang terjadi.
            </p>
            <p className="section-muted mb-2">
              Namun, ada pengecualian di mana mengunduh mungkin diperbolehkan:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Video Domain Publik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Konten yang tidak lagi dilindungi hak cipta dapat diunduh
                    secara bebas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Lisensi Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beberapa video YouTube memiliki lisensi yang mengizinkan
                    pengunduhan untuk keperluan tertentu, seperti remix atau
                    berbagi, selama Anda mengikuti ketentuannya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Izin dari Kreator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika kreator video secara jelas mengizinkan pengunduhan,
                    Anda boleh melakukannya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Kasus Penggunaan Wajar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pengunduhan terbatas untuk edukasi, komentar, kritik, atau
                    riset bisa masuk dalam{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      fair use
                    </a>
                    , tetapi sangat bergantung pada konteks dan cara Anda
                    menggunakan videonya.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Untuk tetap aman, cek lisensi video melalui deskripsinya atau
              hubungi kreator demi mendapatkan izin. YouTube Premium menawarkan
              cara legal menyimpan video secara offline untuk penggunaan pribadi.
              Jika ragu, sebaiknya berhati-hati demi menghormati kreator dan
              menghindari pelanggaran hak cipta.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko Mengunduh Video YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya Potensial dan Cara Menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Meski mengunduh video YouTube itu praktis, ada risiko jika Anda
              memakai alat yang salah atau mengabaikan batasan hukum. Mengetahui
              bahaya ini membantu Anda membuat pilihan cerdas serta melindungi
              perangkat dan data. Berikut risiko utama yang perlu diwaspadai.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware dari Situs Tidak Terpercaya"
              >
                Banyak situs unduhan dipenuhi tombol "download" palsu, iklan
                pop-up, atau skrip tersembunyi yang memasang{" "}
                <a
                  href="https://cyberpress.org/youtube-downloader-malware/"
                  className="text-primary hover:text-primary-glow underline transition-colors"
                >
                  virus atau malware ke perangkat Anda
                </a>
                . Ancaman ini bisa mencuri data atau merusak sistem. Gunakan
                platform tepercaya seperti videodownload.io untuk tetap aman.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Konsekuensi Hukum">
                Mengunduh video berhak cipta tanpa izin melanggar Persyaratan
                Layanan YouTube, yang bisa berujung pada suspensi akun atau,
                dalam kasus langka, tindakan hukum dari pemegang hak. Selalu
                periksa lisensi video atau gunakan alternatif legal seperti
                YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="File Berkualitas Buruk atau Rusak"
              >
                Situs meragukan sering kali memberikan video beresolusi rendah
                atau file yang tidak bisa diputar dengan benar, membuang waktu
                dan ruang penyimpanan Anda. Alat yang terpercaya memastikan Anda
                mendapatkan kualitas sesuai harapan.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran Privasi">
                Situs unduhan yang tidak dapat dipercaya mungkin melacak kebiasaan
                browsing, mengumpulkan data pribadi, atau menjual informasi Anda
                kepada pihak ketiga. Pilih layanan yang mengutamakan privasi
                pengguna dan tidak meminta izin yang tidak perlu.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Unduhan Tidak Lengkap">
                Beberapa alat gagal memproses video dengan benar, membuat Anda
                hanya mendapatkan file sebagian atau rusak yang tidak bisa
                dibuka. Hal ini umum terjadi pada situs jadul atau buruk secara
                teknis.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Dampak Etis bagi Kreator"
              >
                Mengunduh video dapat memotong iklan, sehingga merugikan kreator
                yang mengandalkan pendapatan iklan atau jumlah tayangan.
                Pertimbangkan untuk tetap mendukung kreator dengan menonton
                konten mereka secara online saat memungkinkan atau meminta izin
                sebelum mengunduh.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Dengan menggunakan alat tepercaya seperti videodownload.io dan
              mematuhi aturan hak cipta, Anda bisa meminimalkan risiko ini serta
              menikmati unduhan yang aman dan andal.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Menggunakan videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Partner Tepercaya untuk Unduhan YouTube Anda
            </h2>
            <p className="section-muted mb-4">
              Kami meluncurkan videodownload.io untuk menyediakan cara yang aman,
              sederhana, dan cepat mengunduh video YouTube tanpa pusing dengan
              situs mencurigakan. Misi kami adalah menciptakan platform bersih
              yang menyingkirkan gangguan dari pengunduh penuh iklan dan risiko.
              Berikut enam alasan mengapa videodownload.io unggul sebagai pilihan
              terbaik untuk mengunduh video YouTube.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Bebas Malware dan Aman">
                Situs kami tanpa pop-up, tombol palsu, atau skrip berbahaya,
                menjaga perangkat Anda dari virus maupun spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Desain Ramah Pengguna">
                Antarmuka bersih dan proses sederhana memudahkan siapa saja
                mengunduh video dalam hitungan detik tanpa perlu keahlian teknis.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Unduhan Berkecepatan Tinggi">
                Server kami yang dioptimalkan memproses video dengan cepat, jadi
                Anda memperoleh file tanpa menunggu lama, bahkan untuk video
                berkualitas tinggi atau berdurasi panjang.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Pilihan Format yang Fleksibel">
                Pilih MP4 untuk video atau MP3 untuk audio, dengan banyak opsi
                resolusi sesuai kebutuhan, mulai 720p hingga 4K.
              </FeatureCard>
              <FeatureCard icon={Download} title="Sepenuhnya Gratis">
                Unduh video tanpa batas tanpa biaya sepeser pun. Tidak ada
                langganan, tidak ada biaya tersembunyi, semua fitur tersedia
                tanpa biaya.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Pendekatan Utamakan Privasi">
                Kami tidak melacak unduhan Anda, menyimpan data pribadi, atau
                membagikan informasi kepada siapa pun, sehingga aktivitas Anda
                tetap pribadi.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pertanyaan Umum tentang videodownload.io dan Unduhan YouTube
            </h2>
            <p className="section-muted mb-4">
              Kami merangkum jawaban untuk pertanyaan paling sering tentang
              penggunaan videodownload.io dan pengunduhan video YouTube agar Anda
              dapat mulai dengan percaya diri.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Apakah videodownload.io benar-benar gratis?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, platform kami 100% gratis. Anda bisa mengunduh video
                  sebanyak yang diinginkan tanpa biaya atau batasan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Apakah saya perlu memasang software untuk mengunduh video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, videodownload.io berjalan sepenuhnya di browser.
                  Tidak perlu aplikasi, ekstensi, atau unduhan tambahan, sehingga
                  tetap sederhana.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Bisakah saya mengunduh seluruh playlist YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tentu. Cukup tempel URL playlist, dan sistem kami akan
                  memproses semua video di playlist untuk diunduh sekaligus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Apakah aman menggunakan videodownload.io?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, situs kami aman tanpa pop-up atau tautan berbahaya. Kami
                  memprioritaskan keselamatan pengguna dan rutin menguji platform
                  agar tetap bersih dan andal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Bisakah saya mengunduh video dalam kualitas tinggi seperti 4K?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Jika video YouTube tersedia dalam 4K, Anda bisa mengunduhnya
                  dengan resolusi tersebut. Kami mendukung berbagai kualitas,
                  dari 360p hingga 4K, bergantung pada sumbernya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Bagaimana jika video tidak berhasil diunduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Periksa kembali URL dan koneksi internet Anda. Jika masalah
                  berlanjut, hubungi tim dukungan kami dan kami akan membantu
                  menelusuri penyebabnya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Bisakah saya mengekstrak audio dari video YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa. Fitur konversi MP3 kami memungkinkan Anda mengunduh hanya
                  audionya, ideal untuk musik atau potongan podcast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Apakah legal mengunduh video YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tergantung videonya. Persyaratan Layanan YouTube melarang
                  pengunduhan kecuali diizinkan, tetapi video domain publik,
                  berlisensi Creative Commons, atau dengan izin kreator biasanya
                  diperbolehkan. Fair use dapat berlaku untuk edukasi atau
                  komentar, tetapi selalu cek lisensi video agar aman.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai Unduh Sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan Video YouTube Anda dalam Hitungan Detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Proses cepat dan sederhana
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Unduhan aman tanpa malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video dan audio berkualitas tinggi
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh Video YouTube
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi Pengunduh Lainnya
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Unduh dari platform favorit Anda
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
                        Unduh Video {p.name}
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
      <FeatureCard icon={VideoIcon} title="Unduhan Video Berkualitas Tinggi">
        Pilih berbagai resolusi, termasuk 720p, 1080p, hingga 4K ketika video
        mendukungnya. Baik Anda menyimpan tutorial atau video musik, Anda bebas
        memilih kualitas yang paling cocok dengan perangkat atau preferensi
        tanpa repot mengatur menu teknis.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan Unduh Sangat Cepat">
        Server kami yang dioptimalkan memastikan video terunduh dalam hitungan
        detik, bukan menit. Bergantung pada koneksi internet dan durasi video,
        sebagian besar file siap kurang dari semenit, menghemat waktu dan
        mengurangi frustrasi tanpa proses lambat.
      </FeatureCard>
      <FeatureCard icon={Music} title="Ekstrak Audio ke File MP3">
        Hanya butuh audionya? Ubah video YouTube apa pun menjadi file MP3 dengan
        sekali klik. Cocok untuk menyimpan lagu, episode podcast, atau audio
        kuliah untuk didengarkan offline, sehingga fleksibel untuk berbagai
        kebutuhan.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Tanpa Instalasi Perangkat Lunak">
        Unduh video langsung melalui browser di perangkat apa pun desktop,
        tablet, atau ponsel. Tidak perlu memasang aplikasi, plugin, atau
        program tambahan, sehingga perangkat tetap bersih dan proses unduhan
        tetap sederhana tanpa kerumitan.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Dukungan Unduhan Playlist Penuh">
        Simpan seluruh playlist YouTube sekaligus. Alih-alih mengunduh satu per
        satu, cukup tempel tautan playlist dan sistem kami akan memproses semua
        video secara bersamaan, menatanya agar mudah diakses. Penghemat waktu
        besar untuk unduhan massal.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Antarmuka Aman dan Bebas Iklan">
        Berbeda dengan banyak situs unduhan lain, videodownload.io bebas dari
        pop-up mengganggu, pengalihan, atau tautan mencurigakan. Desain kami yang
        bersih dan ramah pengguna menjamin pengalaman aman dan mulus, sehingga
        Anda dapat fokus mengunduh tanpa khawatir risiko keamanan.
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
      <StepCard step={1} title="Salin URL Video YouTube">
        Buka YouTube di browser atau aplikasi, temukan video yang ingin
        diunduh, lalu salin URL-nya. Anda bisa menyalin tautan dari bilah alamat
        atau menekan tombol "Bagikan" di bawah video dan memilih "Salin Link".
      </StepCard>
      <StepCard step={2} title="Tempel URL di Website Kami">
        Kunjungi videodownload.io melalui browser apa pun. Di beranda, Anda akan
        melihat kolom unduhan untuk menempelkan URL YouTube yang telah disalin.
        Klik kanan atau tekan lama untuk menempelkan tautan ke kolom yang
        disediakan dan pastikan sudah benar.
      </StepCard>
      <StepCard step={3} title="Biarkan Kami Memproses Video">
        Klik tombol "Download" di samping kolom URL. Sistem kami akan langsung
        mengambil video dan menyiapkannya untuk diunduh. Jika diminta, pilih
        format yang diinginkan (seperti MP4 atau MP3) dan kualitas (misalnya
        1080p atau 4K). Langkah ini biasanya hanya membutuhkan beberapa detik.
      </StepCard>
      <StepCard step={4} title="Simpan dan Atur Video Anda">
        Setelah selesai, tautan unduhan akan muncul. Klik untuk menyimpan video
        ke penyimpanan perangkat. Anda bisa mengganti nama file saat proses
        unduh agar koleksi video tetap rapi dan mudah ditemukan untuk ditonton
        offline kapan pun.
      </StepCard>
    </div>
  );
}
