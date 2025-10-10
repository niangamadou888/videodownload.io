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

export default function ThreadsPageID() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Threads | Gratis & HD",
    description: "Unduh video dan postingan Threads dalam mp4, kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Threads Video
          </h1>
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video atau postingan Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh Video Threads dengan Cepat
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan Sederhana Anda untuk Menyimpan Klip Secara Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara Mengunduh Video Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan Langkah demi Langkah yang Jelas untuk Menyimpan Video dengan Mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Mendapatkan video Threads ke perangkat Anda sangat sederhana dengan
            videodownload.io. Ikuti empat langkah sederhana ini untuk
            mengunduh video apa pun dalam hitungan menit. Setiap langkah dirancang agar
            intuitif, bahkan jika Anda tidak paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Download Threads Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Mengunduh Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kasus Penggunaan Terbaik
            </h2>
            <p className="section-muted mb-4">
              Threads bergerak cepat, dengan postingan tertimbun di bawah percakapan baru. Mengunduh memungkinkan Anda menyimpan video yang menarik perhatian Anda, mengubah scroll cepat menjadi koleksi pribadi. Ini tentang menyimpan apa yang memicu kegembiraan, menginformasikan, atau menginspirasi, bukan hanya mengumpulkan klip acak. Anda mengontrol koleksi Anda, aman dari postingan yang dihapus atau perubahan aplikasi.
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
                    Simpan tips perjalanan atau klip olahraga untuk penerbangan, perjalanan, atau tempat dengan Wi-Fi buruk. Orang tua mengunduh sketsa atau lagu yang ramah anak untuk perjalanan mobil, menjaga anak-anak senang tanpa buffering.
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
                    Influencer mengambil klip viral untuk di-remix ke dalam konten mereka, menambahkan sentuhan mereka sendiri. Blogger menyimpan video fashion atau makanan untuk dibagikan di platform lain, melewatkan watermark untuk editan bersih.
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
                    Jika Anda membagikan video di Threads, video tersebut dapat hilang karena masalah akun atau pembaruan platform. Unduh ke drive untuk melindungi karya Anda, seperti vlog pribadi atau promosi merek.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan Inspirasi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Siswa menyimpan trik belajar atau ceramah motivasi untuk ditinjau secara offline. Hobi mengunduh tips DIY atau demo seni untuk berlatih dengan kecepatan mereka, tidak perlu mencari lagi.
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
                    Simpan pembaruan kehidupan teman atau klip lucu untuk dikirim di obrolan grup atau disimpan untuk nanti. Ini cara untuk menyimpan kenangan tanpa bergantung pada aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Threads menawarkan fleksibilitas dan kenyamanan,
              membuatnya lebih mudah untuk menikmati konten dengan cara Anda, baik untuk hiburan,
              pekerjaan, atau pembelajaran.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang Harus Mengunduh Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang Paling Diuntungkan dari Mengunduh
            </h2>
            <p className="section-muted mb-4">
              Threads adalah pusat konten cepat dan pribadi, tetapi mengunduh video cocok untuk orang yang menggunakannya untuk membuat, belajar, atau terhubung. Ini untuk mereka yang melihat postingan sebagai lebih dari sekadar kesenangan sesaat, mengubah klip menjadi alat atau kenangan. Jika Anda aktif di Threads dan ingin menyimpan yang penting, mengunduh adalah langkah Anda.
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
                    Influencer dan vlogger menyimpan klip trending untuk di-remix untuk audiens mereka, seperti guru kecantikan yang menyempurnakan tutorial makeup. Mereka juga mengunduh postingan mereka sendiri, menyimpan salinan bersih tanpa logo untuk edit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar dan Pelajar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Penggemar fitness menyimpan klip latihan untuk diikuti di gym. Pengrajin mengunduh demo DIY untuk dicoba di rumah. Ini inspirasi praktis, siap offline.
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
                    Guru menyimpan ceramah motivasi untuk diskusi kelas. Siswa mengambil trik belajar atau pelajaran bahasa untuk ditinjau tanpa harus masuk lagi.
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
                    Orang tua menyimpan klip anak lucu atau pembaruan keluarga untuk dibagikan di pertemuan. Teman mengunduh meme viral untuk tertawa nanti.
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
                    Toko menyimpan pujian pelanggan untuk ditampilkan di situs web. Profesional media sosial mengambil klip trending untuk dianalisis atau digunakan kembali, menjaga konten mereka tetap segar.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tidak peduli peran atau gaya hidup Anda, mengunduh video Threads dapat
              menghemat waktu, data, dan upaya sambil menjaga konten favorit Anda
              dapat diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah Legal Mengunduh Video Threads?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Apa yang Perlu Anda Ketahui Tentang Hukum
            </h2>
            <p className="section-muted mb-4">
              Video dilindungi hak cipta oleh pembuatnya di bawah undang-undang seperti <a href="https://id.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> di AS. Menyimpan untuk tontonan pribadi, seperti menonton klip offline, sering dihitung sebagai penggunaan wajar. Tetapi berbagi tanpa izin atau menggunakan untuk keuntungan dapat menyebabkan masalah hukum. Musik atau suara latar dalam video mungkin memiliki lapisan hak cipta tambahan, meskipun penyimpanan pribadi singkat jarang menghadapi masalah.
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
                    Jika pembuat mengizinkan unduhan atau konten adalah domain publik, Anda aman. Penggunaan pendidikan, seperti menampilkan klip di kelas, sering memenuhi syarat sebagai penggunaan wajar. Periksa caption postingan untuk izin. Simpan unduhan pribadi dan beri kredit kepada pembuat jika Anda berbagi untuk tetap aman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko yang Terkait dengan Mengunduh Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya Potensial dan Cara Menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Pengunduh pihak ketiga tampak mudah, tetapi yang teduh membawa masalah nyata. Tidak semua situs dapat dipercaya, dan mengklik sembarangan dapat merusak perangkat atau data Anda. Ketahui risikonya sebelum Anda mulai untuk menghindari masalah di kemudian hari.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Situs tidak dapat diandalkan menyembunyikan virus di file video, menyelinap spyware atau ransomware. Satu unduhan buruk dapat mengunci file Anda atau mencuri kata sandi. Beberapa alat telah tertangkap dengan keylogger, mengubah penyimpanan meme menjadi pelanggaran data.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan Phishing">
                Halaman unduhan palsu meniru login Threads, mengambil kredensial Anda jika Anda memasukkannya. Atau iklan mendorong "pembaruan" yang memasang pelacak, memantau aktivitas Anda di luar platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Masalah Kualitas"
              >
                Situs buruk mengompres video, menyebabkan pemutaran tersendat atau audio hilang. Anda menginginkan tutorial yang jelas, tetapi mendapatkan file yang rusak sebagai gantinya.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran Privasi">
                Beberapa situs mencatat unduhan Anda, menjual IP atau pilihan video Anda ke pengiklan. Peretas bisa mendapatkan data itu, menyebabkan spam atau penipuan yang ditargetkan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Larangan Threads">
                Penggunaan berat alat pihak ketiga dapat menandai akun Anda, terutama untuk kreator. Anda bisa kehilangan profil atau pengikut dalam semalam.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Kelebihan Penyimpanan"
              >
                Menyimpan banyak video memakan ruang, memperlambat ponsel atau drive. File yang rusak dapat membuat pemutar crash, membuang waktu untuk memperbaiki.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gunakan situs tepercaya, pindai unduhan, dan pertimbangkan VPN untuk tetap aman.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa Menggunakan videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mitra Tepercaya Anda untuk Unduhan Threads
            </h2>
            <p className="section-muted mb-4">
              Kami memulai videodownload.io pada tahun 2022 karena kami lelah dengan alat teduh dan aplikasi lambat. Sebagai pengguna Threads, kami menginginkan cara cepat dan bersih untuk menyimpan video tanpa risiko. Kami adalah tim kecil, bukan perusahaan besar, fokus membuat unduhan mudah dan aman. Jutaan pengguna mempercayai kami tanpa kebocoran data, dan kami terus meningkat berdasarkan umpan balik mereka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Di Bawah Lima Detik">
                Unduhan selesai bahkan selama jam sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tanpa Iklan atau Pop-up">
                Hanya situs bersih.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark Dihapus">
                Klip murni, dapat digunakan.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Penyimpanan Tak Terbatas">
                Tidak ada batasan harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Bekerja di Semua Perangkat">
                Dari ponsel lama hingga laptop baru.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistem Aman">
                Tidak ada data yang disimpan setelah Anda selesai.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pertanyaan Umum Tentang Unduhan Threads
            </h2>
            <p className="section-muted mb-4">
              Kami telah menyusun jawaban untuk pertanyaan yang paling sering diajukan tentang menggunakan
              videodownload.io dan mengunduh video Threads untuk membantu Anda
              memulai dengan percaya diri.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video Threads pribadi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, kami hanya menangani postingan publik. Video pribadi atau terbatas memerlukan izin pembuat, dan kami menghormati batasan tersebut untuk tetap sah.
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
                  File kami bersih dan ringan, jadi tidak ada lag. Tetapi menyimpan banyak video dapat mengisi penyimpanan, jadi perhatikan ruang Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video saya tanpa watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads menambahkan logo untuk melacak berbagi, tetapi kami menarik file mentah dan menghapusnya untuk penyimpanan bersih yang dapat Anda gunakan dengan bebas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya hanya menyimpan audio dari video Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, pilih MP3 setelah menempel tautan. Bagus untuk mengambil musik atau suara latar dari klip tanpa visual.
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
                  Periksa tautan bersifat publik dan dimulai dengan threads.net. Coba browser lain atau hapus cache. Obrolan dukungan kami memperbaiki masalah dengan cepat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batasan panjang video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami menangani video hingga 60 menit, meskipun sebagian besar klip Threads pendek. Yang lebih panjang membutuhkan sedikit waktu tetapi diunduh sepenuhnya.
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
                  Sama sekali tidak. Kami memproses secara instan dan menghapus semuanya setelahnya. File Anda tetap di perangkat Anda, bukan di server kami.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah pembuat melihat jika saya mengunduh video mereka?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads tidak memberi tahu mereka. Unduhan Anda tetap pribadi, tanpa peringatan kepada pembuat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai Menyimpan Video Threads Hari Ini
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan Klip Favorit Anda dalam Hitungan Detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin Tautan Postingan Threads
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
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Threads Video
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
      <FeatureCard icon={VideoIcon} title="Unduhan Jernih dan Tajam">
        Simpan video Threads dalam kualitas terbaiknya, hingga 1080p jika postingan asli memungkinkan. Tidak ada bingkai buram atau warna kusam saat Anda memutarnya kembali. Kami mengambil file langsung dari server Threads, menjaga setiap detail tajam untuk sketsa cepat atau tips gaya itu.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tanpa Watermark atau Logo">
        Threads menambahkan branding mereka ke video yang disimpan melalui aplikasi mereka, mengacaukan tampilan. Kami menghilangkan semua itu, memberi Anda klip bersih yang siap dibagikan atau diedit. Tonton momen lucu atau tutorial itu tanpa overlay teks menghalangi aksi.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Bekerja di Semua Perangkat">
        Gunakan ponsel, tablet, laptop, atau desktop Anda, dan berfungsi dengan lancar. Tidak perlu aplikasi atau perangkat lunak tambahan. Cukup buka situs kami di browser Anda, tempel tautan, dan unduh. Diuji pada semuanya dari Android lama hingga Mac baru, selalu dapat diandalkan.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan Unduh Cepat">
        Menunggu membunuh suasana. Alat kami menarik video Threads dalam hitungan detik, biasanya di bawah 10 untuk sebagian besar klip. Kami menggunakan server dekat dengan Threads untuk pengambilan cepat, jadi Anda dapat menyimpan klip tarian atau pendapat selama istirahat singkat.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Sepenuhnya Gratis untuk Digunakan">
        Tanpa biaya, tanpa pendaftaran, tanpa biaya tersembunyi. Unduh sebanyak mungkin video yang Anda inginkan, setiap hari, tanpa batas. Kami membuatnya gratis sehingga Anda dapat menyimpan meme viral atau trik hidup itu tanpa menemui paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses Aman dan Pribadi">
        Informasi Anda tetap aman. Kami tidak menyimpan tautan atau video Anda setelah Anda mengunduh. Tanpa pelacakan, tanpa log, dan tanpa iklan spam. Prosesnya bersih, menjaga perangkat Anda bebas dari sampah atau risiko.
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
      <StepCard step={1} title="Salin Tautan Video dari Threads">
        <a href="http://www.threads.net">Buka Threads</a> di ponsel atau browser Anda. Temukan video yang Anda suka, mungkin resep cepat atau reel fashion. Ketuk ikon berbagi, pesawat kertas, di kanan bawah postingan. Dari menu, pilih "Salin tautan". Ini mengambil URL lengkap, seperti threads.net/@username/post/abc123. Periksa apakah sudah benar.
      </StepCard>
      <StepCard step={2} title="Tempel Tautan ke Alat Kami">
        Buka videodownload.io di browser Anda. Anda akan melihat kotak berlabel "Tempel tautan Threads di sini". Klik di dalamnya dan tempel tautan yang disalin. Pastikan dimulai dengan threads.net untuk menghindari kesalahan. Hanya postingan publik yang berfungsi; video pribadi atau terbatas tidak akan diunduh.
      </StepCard>
      <StepCard step={3} title="Kami Mengambil dan Menyiapkan Video">
        Klik tombol biru "Unduh" di sebelah kotak. Sistem kami menarik video dari server Threads dalam hitungan detik. Kami menghapus watermark apa pun dan memeriksa kualitas, jadi Anda mendapatkan klip yang mulus. Audio tetap jernih, tanpa gangguan atau suara yang hilang.
      </StepCard>
      <StepCard step={4} title="Simpan Klip ke Perangkat Anda">
        Anda akan melihat opsi: MP4 untuk video lengkap dengan suara atau MP3 hanya untuk audio. Pilih MP4 untuk sebagian besar klip. Ketuk untuk mengunduh, dan muncul di folder Unduhan atau galeri ponsel Anda. Beri nama sesuatu yang sederhana, seperti "tips_gaya.mp4", sebelum menyimpan. Putar untuk mengonfirmasi sudah baik.
      </StepCard>
    </div>
  );
}
