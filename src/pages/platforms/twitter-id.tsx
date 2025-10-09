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
    title: "Unduh Video Twitter X | Gratis & HD",
    description: "Unduh video dan postingan Twitter X dalam mp4, kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Unduh Video Twitter
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video atau postingan Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh Video Twitter X dengan Cepat
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan Cepat Anda untuk Menyimpan Klip Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara Mengunduh Video Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan Jelas, Langkah demi Langkah untuk Menyimpan Video dengan Mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Mendapatkan video Twitter X ke perangkat Anda sederhana dengan
            videodownload.io. Ikuti empat langkah mudah ini untuk
            mengunduh video apa pun dalam hitungan menit. Setiap langkah dirancang agar
            intuitif, bahkan jika Anda tidak paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Unduh Video Twitter X
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Mengunduh Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kasus Penggunaan Terbaik
            </h2>
            <p className="section-muted mb-4">
              Twitter X bergerak dengan kecepatan kilat, dengan video yang hilang dalam banjir postingan. Mengunduh memungkinkan Anda menyimpan klip yang menonjol, mengubah scroll cepat menjadi koleksi pribadi. Bukan tentang menyimpan semuanya, tetapi menyimpan apa yang memicu kegembiraan, memberi informasi, atau menginspirasi. Anda mengontrol koleksi Anda, aman dari postingan yang dihapus atau perubahan aplikasi.
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
                    Simpan klip berita atau tutorial untuk penerbangan, kereta, atau area dengan Wi-Fi buruk. Orang tua mengunduh animasi lucu untuk anak-anak tonton selama perjalanan panjang, tanpa stres buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menggunakan Kembali Konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kreator mengambil klip viral untuk di-remix ke postingan mereka sendiri, menambahkan komentar atau editan. Jurnalis menyimpan video berita terbaru untuk dianalisis dalam artikel, memotong watermark untuk penggunaan bersih.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mencadangkan Postingan Anda Sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika Anda berbagi video di Twitter X, video tersebut bisa hilang karena masalah akun atau pembaruan platform. Unduh ke drive untuk menjaga pekerjaan Anda tetap aman.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan Riset
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Siswa menyimpan ceramah ahli atau analisis data untuk catatan belajar. Profesional mengambil pembaruan industri untuk dibagikan dalam rapat, tidak perlu mencari lagi di feed.
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
                    Unduh klip pencapaian teman atau reaksi lucu untuk dikirim di obrolan grup atau disimpan untuk nanti. Ini cara menyimpan highlight pribadi tanpa bergantung pada aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Twitter X menawarkan fleksibilitas dan kenyamanan,
              memudahkan Anda menikmati konten sesuai keinginan, baik untuk bersenang-senang,
              bekerja, atau belajar.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang Harus Mengunduh Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang Paling Diuntungkan dari Mengunduh
            </h2>
            <p className="section-muted mb-4">
              Twitter X adalah pusat untuk opini cepat dan momen besar, tetapi mengunduh video cocok untuk orang yang menggunakan platform dengan niat. Ini untuk mereka yang melihat klip sebagai alat, kenangan, atau inspirasi, bukan hanya konten yang lewat. Jika Anda aktif di aplikasi dan ingin menyimpan yang penting, mengunduh adalah untuk Anda.
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
                    Mereka posting setiap hari, mengambil ide dari video trending. Mengunduh memungkinkan mereka menyimpan klip mereka sendiri atau mempelajari orang lain, seperti komedian yang mengambil video reaksi untuk improvisasi tanpa logo menghalangi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Jurnalis dan Peneliti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mereka menyimpan klip berita atau wawancara untuk artikel atau pengecekan fakta. Siswa mengunduh thread ahli dengan video untuk proyek sekolah, belajar offline dengan kecepatan mereka sendiri.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Keluarga dan Pengguna Santai
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video pengumuman saudara atau klip hewan peliharaan viral untuk dibagikan di pertemuan. Lebih andal daripada berharap Twitter X tetap menyalakannya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemasar dan Pemilik Bisnis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startup menyimpan testimoni pelanggan untuk ditampilkan di website. Manajer media sosial mengambil klip pesaing untuk menganalisis tren atau menggunakan kembali untuk platform lain.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penghobi dan Pelajar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Penggemar teknologi menyimpan demo coding untuk berlatih nanti. Pecinta berita mengunduh cerita terbaru untuk ditonton ulang. Bahkan scroller biasa menyimpan klip motivasi untuk hari-hari sulit.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tidak peduli peran atau gaya hidup Anda, mengunduh video Twitter X dapat
              menghemat waktu, data, dan usaha sambil menjaga konten favorit Anda
              tetap dapat diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah Legal Mengunduh Video Twitter X?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Apa yang Perlu Anda Ketahui Tentang Hukum
            </h2>
            <p className="section-muted mb-4">
              Video dilindungi hak cipta oleh pembuatnya berdasarkan undang-undang seperti DMCA di AS. Menyimpan untuk menonton pribadi, seperti menonton klip berita offline, sering dihitung sebagai penggunaan wajar. Tetapi berbagi tanpa izin atau menggunakan untuk keuntungan dapat menyebabkan masalah hukum. Musik atau voice-over dalam video mungkin memiliki lapisan hak cipta tambahan, meskipun penyimpanan pribadi pendek jarang menghadapi masalah.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Kapan Diperbolehkan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika pembuat mengizinkan unduhan atau konten adalah domain publik, Anda aman. Penggunaan pendidikan, seperti menampilkan klip di kelas, sering memenuhi syarat sebagai penggunaan wajar. Periksa caption postingan untuk izin. Simpan pribadi dan beri kredit pembuat jika berbagi untuk tetap aman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko yang Terkait dengan Mengunduh Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya Potensial dan Cara Menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Pengunduh pihak ketiga tampak mudah, tetapi yang teduh dapat menyebabkan masalah besar. Tidak semua situs dapat dipercaya, dan mengklik sembarangan dapat merusak perangkat atau data Anda. Ketahui risikonya sebelum mulai mengunduh untuk menghindari masalah nanti.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Situs tidak andal menyembunyikan virus di file video, menyelipkan spyware atau ransomware. Satu unduhan buruk dapat mengunci file Anda atau mencuri kata sandi. Beberapa alat tertangkap dengan keylogger, mengubah penyimpanan cepat menjadi pelanggaran data.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan Phishing">
                Halaman unduhan palsu meniru login Twitter X, mengambil kredensial Anda jika Anda memasukkannya. Atau iklan mendorong "pembaruan" yang menginstal pelacak, mengawasi aktivitas Anda di luar platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Masalah Kualitas"
              >
                Situs buruk mengompres video, menyebabkan pemutaran tersendat atau audio hilang. Anda menginginkan klip berita yang jelas tetapi mendapatkan file yang rusak.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran Privasi">
                Beberapa situs mencatat unduhan Anda, menjual IP atau pilihan video Anda ke pengiklan. Peretas mungkin mendapatkan data itu, menyebabkan spam atau penipuan yang ditargetkan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Larangan Twitter X">
                Penggunaan berat alat pihak ketiga dapat menandai akun Anda, terutama untuk pembuat. Anda bisa kehilangan profil atau pengikut dalam semalam.
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
              Mitra Terpercaya Anda untuk Unduhan Twitter X
            </h2>
            <p className="section-muted mb-4">
              Kami memulai videodownload.io pada tahun 2022 karena kami muak dengan alat yang teduh dan aplikasi yang bermasalah. Sebagai pengguna Twitter X, kami menginginkan cara cepat dan bersih untuk menyimpan video tanpa risiko. Kami adalah tim kecil, bukan perusahaan besar, yang berfokus membuat unduhan sederhana dan aman. Jutaan pengguna mempercayai kami tanpa pelanggaran data, dan kami terus meningkat berdasarkan umpan balik mereka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Di Bawah Lima Detik">
                Unduhan selesai bahkan di hari sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tanpa Iklan atau Pop-up">
                Hanya situs yang bersih.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark Dihapus">
                Klip murni dan dapat digunakan.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Penyimpanan Tak Terbatas">
                Tanpa batas harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Berfungsi di Perangkat Apa Pun">
                Dari ponsel ke laptop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistem Aman">
                Tidak ada data yang disimpan setelah Anda pergi.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan Umum</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pertanyaan Umum Tentang Unduhan Twitter X
            </h2>
            <p className="section-muted mb-4">
              Kami telah mengumpulkan jawaban untuk pertanyaan paling sering tentang penggunaan
              videodownload.io dan mengunduh video Twitter X untuk membantu Anda
              memulai dengan percaya diri.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video Twitter X pribadi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, kami hanya menangani postingan publik. Video yang dilindungi atau pribadi memerlukan izin pembuat, dan kami menghormati itu untuk menjaga hal-hal tetap sah.
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
                  File kami bersih dan ringan, jadi tidak ada perlambatan. Tetapi menyimpan banyak video dapat mengisi penyimpanan, jadi pantau ruang Anda.
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
                  Twitter X menambahkan logo untuk melacak berbagi, tetapi kami menarik file asli dan menghapusnya untuk penyimpanan bersih yang dapat Anda gunakan dengan bebas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya hanya menyimpan audio dari video Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, pilih MP3 setelah menempelkan tautan. Sempurna untuk mengambil klip podcast atau suara trending tanpa video.
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
                  Periksa tautan bersifat publik dan dimulai dengan x.com. Coba browser lain atau hapus cache. Obrolan dukungan kami memperbaiki masalah dengan cepat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batasan ukuran video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami menangani video hingga 60 menit, meskipun sebagian besar klip Twitter X pendek. Yang lebih panjang membutuhkan waktu sedikit tetapi unduh sepenuhnya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah Anda menyimpan video yang saya unduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sama sekali tidak. Kami memproses secara instan dan menghapus semuanya setelahnya. File Anda tetap di perangkat Anda, bukan di server kami.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah pembuat melihat bahwa saya mengunduh video mereka?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X tidak memberi tahu mereka. Unduhan Anda tetap pribadi, tanpa peringatan untuk poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai Menyimpan Video Twitter X Sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan Klip Offline Anda dalam Hitungan Detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin Tautan Postingan Twitter X
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
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh Video Twitter X
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
        Simpan video Twitter X dalam resolusi terbaiknya, hingga 1080p jika postingan asli menyediakannya. Tidak ada frame buram atau warna kusam saat menonton nanti. Kami menarik file mentah langsung dari server Twitter X, menjaga setiap detail tajam untuk klip viral atau pembaruan berita itu.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tanpa Watermark atau Branding">
        Twitter X menambahkan logo atau nama penggunanya ke video yang disimpan melalui aplikasi mereka, mengacaukan tampilan. Kami menghapus semua itu, memberi Anda klip bersih yang siap untuk dibagikan atau diedit. Tonton momen lucu itu atau pidato utama tanpa teks menghalangi layar.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Berfungsi di Perangkat Apa Pun">
        Gunakan ponsel, tablet, laptop, atau desktop Anda, dan berjalan dengan lancar. Tidak perlu menginstal aplikasi atau berurusan dengan software tambahan. Buka situs kami di browser Anda, tempel tautan, dan unduh. Diuji di semua, dari Android murah hingga PC kelas atas, selalu andal.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan Unduh Cepat">
        Tidak ada yang mau menunggu. Alat kami mengambil video Twitter X dalam hitungan detik, sering di bawah 10 untuk sebagian besar klip. Kami menggunakan server dekat dengan Twitter X untuk penarikan cepat, sehingga Anda dapat menyimpan video reaksi atau opini panas selama istirahat scroll cepat.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Sepenuhnya Gratis untuk Digunakan">
        Tanpa biaya, tanpa pendaftaran, tanpa biaya kejutan. Unduh sebanyak mungkin video yang Anda inginkan, setiap hari, tanpa batas. Kami membuatnya gratis sehingga Anda dapat menyimpan meme atau klip berita itu tanpa menabrak paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Unduhan Aman dan Pribadi">
        Informasi Anda tetap aman. Kami tidak menyimpan tautan atau video Anda setelah mengunduh. Tanpa pelacakan, tanpa log, dan tanpa iklan spam. Prosesnya bersih, menjaga perangkat Anda bebas dari sampah atau risiko.
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
      <StepCard step={1} title="Ambil Tautan Video dari Twitter X">
        <a href="http://www.x.com">Buka Twitter X</a> di ponsel atau browser Anda. Temukan video yang Anda suka, mungkin meme cepat atau highlight konferensi. Klik ikon bagikan di bawah postingan, panah kecil menunjuk ke atas. Dari menu, pilih "Salin tautan ke Postingan". Ini menyalin URL lengkap, seperti x.com/username/status/123456. Periksa kembali apakah benar.
      </StepCard>
      <StepCard step={2} title="Tempel Tautan ke Alat Kami">
        Buka videodownload.io di browser Anda. Anda akan melihat kotak berlabel "Tempel tautan Twitter X di sini". Klik di dalamnya dan tempel tautan yang Anda salin. Pastikan dimulai dengan x.com untuk menghindari masalah. Hanya postingan publik yang berfungsi; video pribadi atau terlindungi tidak akan diunduh.
      </StepCard>
      <StepCard step={3} title="Kami Mengambil dan Menyiapkan Video">
        Klik tombol "Unduh" biru di samping kotak. Sistem kami menarik video dari server Twitter X dalam hitungan detik. Kami menghapus semua watermark dan memeriksa kualitas, sehingga Anda mendapatkan klip yang mulus. Audio tetap jelas, tanpa gangguan atau suara hilang.
      </StepCard>
      <StepCard step={4} title="Simpan File ke Perangkat Anda">
        Anda akan melihat opsi: MP4 untuk video lengkap dengan audio atau MP3 hanya untuk suara. Pilih MP4 untuk sebagian besar klip. Ketuk untuk mengunduh, dan masuk ke folder Unduhan atau galeri ponsel Anda. Beri nama sesuatu yang sederhana, seperti "meme_clip.mp4", sebelum menyimpan. Putar untuk memastikan sempurna.
      </StepCard>
    </div>
  );
}
