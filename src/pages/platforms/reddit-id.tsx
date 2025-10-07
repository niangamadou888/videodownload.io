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

export default function RedditPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Unduh Video Reddit | Gratis & HD",
    description: "Unduh video dan postingan Reddit dalam mp4, kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Reddit" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="reddit-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video atau postingan Reddit"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh Video Reddit Dengan Mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan Sederhana Anda untuk Menyimpan Klip Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara Mengunduh Video Reddit
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan Jelas, Langkah demi Langkah untuk Menyimpan Video dengan Mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Mendapatkan video Reddit ke perangkat Anda mudah dengan
            videodownload.io. Ikuti empat langkah sederhana ini untuk
            mengunduh video apa pun dalam hitungan menit. Setiap langkah dirancang agar
            intuitif, bahkan jika Anda tidak paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#reddit-downloader">
              <Button variant="download" className="px-6">
                Unduh Video Reddit
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Mengunduh Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kasus Penggunaan Terbaik
            </h2>
            <p className="section-muted mb-4">
              Feed Reddit adalah campuran liar dari ide, tetapi video bagus cepat terkubur. Mengunduh memungkinkan Anda menyimpan klip yang menyentuh Anda, mengubah scroll cepat menjadi koleksi pribadi. Ini tentang menyimpan apa yang menginspirasi, mengajar, atau membuat Anda tertawa, bukan hanya mengumpulkan postingan acak. Anda mengontrol koleksi Anda, aman dari thread yang dihapus atau perubahan aplikasi.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menonton Offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan tutorial atau klip berita untuk penerbangan, perjalanan, atau tempat dengan Wi-Fi buruk. Orang tua mengunduh animasi ramah anak untuk perjalanan mobil, menjaga anak-anak senang tanpa buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggunaan Ulang untuk Kreator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blogger mengambil klip viral untuk diremix ke dalam konten mereka, menambahkan komentar atau edit. Streamer menyimpan momen gaming untuk dianalisis atau dibagikan di platform lain, melewati watermark untuk penggunaan bersih.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mengarsipkan Postingan Anda Sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika Anda membagikan video di Reddit, mereka bisa hilang karena larangan subreddit atau gangguan platform. Unduh ke drive untuk melindungi pekerjaan Anda, seperti demo proyek atau vlog pribadi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan Hobi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Siswa menyimpan demo sains atau tips coding untuk belajar offline. Hobbyist mengunduh panduan DIY atau tutorial seni untuk berlatih dengan kecepatan mereka, tidak perlu menggali subreddit lagi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Berbagi Momen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan klip lucu teman atau sorotan komunitas untuk dikirim dalam obrolan atau disimpan untuk nanti. Ini cara menyimpan kenangan tanpa bergantung pada aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Reddit menawarkan fleksibilitas dan kenyamanan,
              membuatnya lebih mudah untuk menikmati konten dengan cara Anda, baik untuk bersenang-senang,
              bekerja, atau belajar.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang Harus Mengunduh Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang Paling Diuntungkan dari Mengunduh
            </h2>
            <p className="section-muted mb-4">
              Reddit adalah pusat untuk komunitas niche, tetapi mengunduh video cocok untuk orang yang menggunakannya untuk belajar, membuat, atau terhubung. Ini untuk mereka yang melihat postingan lebih dari sekadar hiburan, mengubah klip menjadi alat atau kenang-kenangan. Jika Anda aktif di subreddit dan ingin menyimpan apa yang penting, mengunduh adalah langkah Anda.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pembuat Konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streamer dan vlogger menyimpan klip gaming atau video reaksi untuk diremix untuk audiens mereka. Mereka juga mengunduh postingan mereka sendiri, menyimpan salinan bersih tanpa logo untuk edit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyist dan DIYer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pengrajin menyimpan tutorial pertukangan atau menjahit untuk diikuti di rumah. Gamer mengunduh klip strategi untuk mempelajari gerakan. Ini inspirasi praktis, siap offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Siswa dan Pendidik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guru menyimpan video demo untuk kelas, seperti eksperimen fisika. Siswa mengambil tips belajar atau pelajaran bahasa untuk ditinjau tanpa masuk lagi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Keluarga dan Pengguna Kasual
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Orang tua menyimpan klip anak lucu atau video hewan peliharaan untuk dibagikan di pertemuan. Teman mengunduh sorotan subreddit untuk tertawa nanti.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Bisnis Kecil dan Pemasar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Toko menyimpan ulasan pengguna atau demo produk untuk ditampilkan di situs web. Pro media sosial mengambil klip trending untuk dianalisis atau digunakan ulang, menjaga konten mereka segar.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tidak peduli peran atau gaya hidup Anda, mengunduh video Reddit dapat
              menghemat waktu, data, dan usaha sambil menjaga konten favorit Anda
              dapat diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah Legal Mengunduh Video Reddit?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Apa yang Perlu Anda Ketahui Tentang Hukum
            </h2>
            <p className="section-muted mb-4">
              Video dilindungi hak cipta oleh pembuatnya di bawah hukum seperti <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> di AS. Menyimpan untuk menonton pribadi, seperti menonton tutorial offline, sering dihitung sebagai penggunaan wajar. Tapi berbagi tanpa izin atau menggunakan untuk keuntungan dapat menyebabkan masalah hukum. Musik atau voice-over dalam video mungkin memiliki lapisan hak cipta tambahan, meskipun penyimpanan pribadi pendek jarang menghadapi masalah.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Kapan Diizinkan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika pembuat mengizinkan unduhan atau konten adalah domain publik, Anda aman. Penggunaan pendidikan, seperti menampilkan klip di kelas, sering memenuhi syarat sebagai penggunaan wajar. Periksa komentar postingan untuk izin. Jaga unduhan tetap pribadi dan beri kredit pembuat jika Anda berbagi agar tetap aman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko yang Terkait dengan Mengunduh Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya Potensial dan Cara Menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Pengunduh pihak ketiga tampak mudah, tetapi yang teduh membawa masalah nyata. Tidak setiap situs dapat dipercaya, dan mengklik sembarangan dapat merusak perangkat atau data Anda. Ketahui risikonya sebelum Anda mulai untuk menghindari masalah nanti.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Situs tidak dapat dipercaya menyembunyikan virus dalam file video, menyelipkan spyware atau ransomware. Satu unduhan buruk dapat mengunci file Anda atau mencuri kata sandi. Beberapa alat tertangkap dengan keylogger, mengubah penyimpanan meme menjadi pelanggaran data.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan Phishing">
                Halaman unduhan palsu meniru login Reddit, mengambil kredensial Anda jika Anda memasukkannya. Atau iklan mendorong "pembaruan" yang menginstal pelacak, mengamati aktivitas Anda di luar platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Masalah Kualitas"
              >
                Situs buruk mengompresi video, menyebabkan pemutaran tersendat atau audio hilang. Anda ingin tutorial yang jelas, tetapi mendapatkan file bermasalah sebagai gantinya.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran Privasi">
                Beberapa situs mencatat unduhan Anda, menjual IP atau pilihan video Anda kepada pengiklan. Hacker bisa mengambil data itu, menyebabkan spam atau penipuan yang ditargetkan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Larangan Reddit">
                Penggunaan berat alat pihak ketiga dapat menandai akun Anda, terutama untuk poster aktif. Anda bisa kehilangan profil atau karma dalam semalam.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Kelebihan Penyimpanan"
              >
                Menyimpan banyak video memakan ruang, memperlambat ponsel atau drive. File yang rusak mungkin membuat player crash, membuang waktu untuk memperbaiki.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gunakan situs terpercaya, pindai unduhan, dan pertimbangkan VPN untuk tetap aman.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Menggunakan videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mitra Terpercaya Anda untuk Unduhan Reddit
            </h2>
            <p className="section-muted mb-4">
              Kami memulai videodownload.io pada tahun 2022 karena kami lelah dengan alat teduh dan aplikasi lambat. Sebagai pengguna Reddit, kami menginginkan cara cepat dan bersih untuk menyimpan video tanpa risiko. Kami adalah tim kecil, bukan perusahaan besar, fokus membuat unduhan mudah dan aman. Jutaan pengguna mempercayai kami tanpa kebocoran data, dan kami terus meningkatkan berdasarkan umpan balik mereka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Di Bawah Lima Detik">
                Unduhan selesai bahkan selama jam sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tidak Ada Iklan atau Pop-up">
                Hanya situs yang bersih.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark Dihapus">
                Klip murni, dapat digunakan.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Penyimpanan Tak Terbatas">
                Tidak ada batas harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Bekerja di Setiap Perangkat">
                Dari ponsel lama hingga laptop baru.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistem Aman">
                Tidak ada data yang disimpan setelah Anda selesai.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan Umum</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pertanyaan Umum Tentang Unduhan Reddit
            </h2>
            <p className="section-muted mb-4">
              Kami telah mengumpulkan jawaban untuk pertanyaan paling sering tentang menggunakan
              videodownload.io dan mengunduh video Reddit untuk membantu Anda
              memulai dengan percaya diri.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video dari subreddit pribadi Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, kami hanya menangani postingan publik. Video subreddit pribadi atau terbatas memerlukan izin pembuat atau moderator, dan kami menghormati batasan tersebut untuk tetap sah.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah mengunduh akan memperlambat perangkat saya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File kami bersih dan ringan, jadi tidak ada lag. Tapi menyimpan banyak video dapat mengisi penyimpanan, jadi pantau ruang Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video saya bebas watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit menambahkan logo untuk melacak berbagi, tetapi kami mengambil file mentah dan menghapusnya untuk penyimpanan bersih yang dapat Anda gunakan dengan bebas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya menyimpan hanya audio dari video Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, pilih MP3 setelah menempel tautan. Bagus untuk mengambil klip podcast atau musik dari video tanpa visual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bagaimana jika unduhan saya gagal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Periksa tautan yang publik dan dimulai dengan reddit.com. Coba browser lain atau hapus cache. Obrolan dukungan kami memperbaiki masalah dengan cepat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batas panjang video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami menangani video hingga 60 menit, meskipun sebagian besar klip Reddit pendek. Yang lebih panjang membutuhkan sedikit waktu tetapi diunduh sepenuhnya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah Anda menyimpan video yang diunduh saya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak sama sekali. Kami memproses secara instan dan menghapus semuanya setelahnya. File Anda tetap di perangkat Anda, bukan di server kami.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah poster melihat jika saya mengunduh video mereka?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit tidak memberi tahu mereka. Unduhan Anda tetap pribadi, tanpa peringatan kepada pembuat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai Menyimpan Video Reddit Hari Ini
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan Klip Favorit Anda dalam Hitungan Detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin Tautan Postingan Reddit
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tempel di Situs Kami
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Unduh Video Bersih
              </div>
            </div>
            <div className="mt-2">
              <a href="#reddit-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh Video Reddit
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi Lebih Banyak Pengunduh
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
                  to={`/id/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Kualitas Video Tajam">
        Simpan video Reddit dalam resolusi penuh mereka, hingga 1080p jika postingan asli mendukungnya. Tidak ada visual buram atau warna pudar saat Anda menonton nanti. Kami mengambil file langsung dari server Reddit, menjaga setiap frame tajam untuk klip gaming atau tutorial itu.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tidak Ada Watermark atau Logo">
        Reddit menempelkan branding mereka pada video yang disimpan melalui aplikasi mereka, mengacaukan layar. Kami menghapus semua itu, memberi Anda klip bersih siap untuk dibagikan atau diedit. Tonton video hewan peliharaan lucu atau demo teknologi itu tanpa overlay teks menghalangi.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Bekerja di Setiap Perangkat">
        Gunakan ponsel, tablet, PC, atau laptop Anda, dan itu bekerja dengan lancar. Tidak perlu aplikasi atau software tambahan. Cukup buka situs kami di browser Anda, tempel tautan, dan unduh. Diuji di segala hal dari Android lama hingga Mac baru, selalu dapat diandalkan.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Unduhan Cepat">
        Menunggu itu membosankan. Alat kami mengambil video Reddit dalam hitungan detik, biasanya di bawah 10 untuk sebagian besar klip. Kami menggunakan server dekat dengan Reddit untuk pengambilan cepat, sehingga Anda dapat menyimpan meme atau klip berita selama jeda cepat.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis Tanpa Batas">
        Tidak ada biaya, tidak ada pendaftaran, tidak ada biaya tersembunyi. Unduh sebanyak mungkin video yang Anda inginkan, setiap hari, tanpa batasan. Kami menjaganya gratis sehingga Anda dapat menyimpan momen viral atau tip DIY itu tanpa menabrak paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses Aman dan Pribadi">
        Data Anda tetap aman. Kami tidak menyimpan tautan atau video Anda setelah mengunduh. Tidak ada pelacakan, tidak ada log, dan tidak ada iklan spam. Prosesnya bersih, menjaga perangkat Anda bebas dari sampah atau risiko.
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
      <StepCard step={1} title="Salin Tautan Video dari Reddit">
        <a href="http://www.reddit.com">Buka Reddit</a> di ponsel atau browser Anda. Temukan video yang Anda suka, mungkin trik memasak atau sorotan game. Klik ikon berbagi di bawah postingan, panah kecil menunjuk ke atas. Dari menu, pilih "Salin tautan." Ini mengambil URL lengkap, seperti reddit.com/r/subreddit/comments/abc123. Periksa apakah itu benar.
      </StepCard>
      <StepCard step={2} title="Tempel Tautan ke Alat Kami">
        Kunjungi videodownload.io di browser Anda. Anda akan melihat kotak berlabel "Tempel tautan Reddit di sini." Klik di dalam dan tempel tautan yang disalin. Pastikan dimulai dengan reddit.com untuk menghindari kesalahan. Hanya postingan publik yang berfungsi; video subreddit pribadi atau terbatas tidak akan diunduh.
      </StepCard>
      <StepCard step={3} title="Kami Mengambil dan Menyiapkan Video">
        Klik tombol "Unduh" biru di samping kotak. Sistem kami mengambil video dari server Reddit dalam hitungan detik. Kami menghapus semua watermark dan memeriksa kualitas, sehingga Anda mendapatkan klip yang mulus. Audio tetap jelas, tidak ada bug atau suara yang hilang.
      </StepCard>
      <StepCard step={4} title="Simpan Klip ke Perangkat Anda">
        Anda akan melihat opsi: MP4 untuk video lengkap dengan suara atau MP3 hanya untuk audio. Pilih MP4 untuk sebagian besar klip. Ketuk untuk mengunduh, dan itu masuk ke folder Unduhan atau galeri ponsel Anda. Beri nama sesuatu yang sederhana, seperti "meme_clip.mp4," sebelum menyimpan. Putar untuk mengonfirmasi itu bagus.
      </StepCard>
    </div>
  );
}
