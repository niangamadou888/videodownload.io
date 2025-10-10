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

export default function TikTokPageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video TikTok | Gratis & HD",
    description:
      "Unduh video TikTok tanpa watermark dalam kualitas HD. Pengunduh TikTok gratis: cepat, aman, dan tanpa biaya."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Kotak unduh minimal */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download TikTok Video
          </h1>
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video TikTok"
            />
          </div>

          {/* Fitur */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Unduh video TikTok dengan mudah
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan penting untuk menyimpan klip secara offline
          </h2>
          <p className="text-muted-foreground mb-6">
            Simpan video TikTok dalam kualitas HD tanpa watermark. Pengunduh kami cepat, aman, dan sepenuhnya gratis, sempurna untuk ditonton kapan saja.
          </p>

          <EnhancedFeatures />

          {/* Cara mengunduh */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan langkah demi langkah sederhana untuk menyimpan dalam hitungan detik
          </h2>
          <p className="text-muted-foreground mb-6">
            Dengan videodownload.io, Anda mengunduh video apa pun dalam beberapa menit. Empat langkah intuitif yang dirancang untuk kemudahan, bahkan tanpa keahlian teknis.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Download TikTok Video
              </Button>
            </a>
          </div>

          {/* Mengapa mengunduh */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ketika akses offline membuat perbedaan
            </h2>
            <p className="section-muted mb-4">
              TikTok berubah dalam hitungan jam: tren menghilang, profil berganti arah, dan video penting hilang. Dengan mengunduh, Anda menyimpan apa yang benar-benar penting, membangun koleksi khusus, dan tidak bergantung pada sinyal atau platform.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menonton offline saat bepergian
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pesawat, kereta bawah tanah, atau Wi-Fi yang tidak stabil merusak pengalaman. Simpan tutorial, komedi, dan lagu anak-anak sebelum meninggalkan rumah dan tonton tanpa gangguan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix dan pembuatan konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kreator menyimpan klip referensi untuk me-remix tren, membandingkan teknik, atau menjawab audiens tanpa watermark. Ideal untuk react, reels, dan kolaborasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Cadangkan video Anda sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Yang sering memposting tahu bahwa larangan atau pengeditan yang salah dapat menghapus semuanya. Simpan salinan HD di komputer atau cloud dan tetap tenang. Siswa juga menyimpan ringkasan atau tips belajar untuk ditinjau secara offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gunakan kembali di platform lain
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sesuaikan video untuk Reels atau Shorts dan perluas jangkauan. Bisnis kecil menyimpan testimoni atau behind-the-scenes untuk ditampilkan di situs web, presentasi, atau titik penjualan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arsip pribadi kenangan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Momen keluarga, resep, presentasi sekolah, atau penghargaan tetap terlindungi dan siap untuk dibagikan tanpa bergantung pada aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Singkatnya, mengunduh video TikTok memberi Anda kebebasan penuh untuk mengonsumsi, belajar, atau bekerja dengan kecepatan Anda sendiri.
            </p>
          </div>

          {/* Siapa yang harus mengunduh */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang harus mengunduh video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang paling diuntungkan dari mode offline
            </h2>
            <p className="section-muted mb-4">
              Mengunduh sangat penting bagi mereka yang menggunakan TikTok sebagai alat untuk kreasi, studi, atau bisnis. Jika video mendukung rutinitas Anda, masuk akal untuk menyimpannya.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pembuat konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Menyimpan video mereka sendiri atau inspirasi untuk mengedit dengan santai, membandingkan tren, dan menghasilkan tanggapan tanpa watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Guru dan siswa
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Menyimpan demonstrasi, eksperimen, atau tips cepat untuk digunakan di kelas, ditinjau nanti, atau mempersiapkan aktivitas tanpa ketergantungan internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Keluarga dan pengasuh
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Menyimpan momen istimewa, lagu, dan cerita untuk ditonton bersama atau dibagikan dengan mereka yang tidak menggunakan aplikasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Bisnis kecil
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Memanfaatkan UGC, testimoni, dan behind-the-scenes untuk digunakan di etalase, presentasi, dan kampanye omnichannel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penghobi dan autodidak
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mengunduh resep, pelajaran musik, panduan berkebun, atau rutinitas latihan untuk dipraktikkan dengan kecepatan yang tepat.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Apa pun profil Anda, mengunduh video menghemat waktu, data, dan menjamin akses konstan ke konten utama.
            </p>
          </div>

          {/* Aspek hukum */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah mengunduh video TikTok legal?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Apa yang dikatakan hukum tentang unduhan
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video TikTok adalah area abu-abu. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Aturan platform memungkinkan penyimpanan klip publik</a> untuk menonton offline ketika kreator tidak memblokirnya. Untuk penggunaan pribadi tidak ada masalah, tetapi ketentuan melarang alat pihak ketiga, jadi secara teoritis TikTok dapat mengenali pola. Dalam praktiknya, upaya berfokus pada unggah ulang massal.
            </p>
            <p className="section-muted mb-4">
              Undang-undang hak cipta seperti DMCA melindungi kreator. Menyimpan video untuk ditonton nanti biasanya termasuk dalam penggunaan wajar jika Anda tidak mengubah atau mendistribusikannya. Memposting ulang tanpa kredit atau tanpa transformasi merupakan pelanggaran dan dapat mengakibatkan penghapusan. Soundtrack juga memiliki pemilik, meskipun potongan pendek untuk penggunaan pribadi jarang ditandai.
            </p>
            <p className="section-muted mb-2">
              Situasi di mana pengunduhan diizinkan:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Izin kreator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika penulis mengizinkan unduhan, Anda dapat mengunduh tanpa khawatir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Konten domain publik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Karya tanpa perlindungan hak cipta dapat diunduh secara bebas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Penggunaan pendidikan yang adil
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sekolah dan guru dapat menggunakan potongan pendek untuk tujuan pedagogis dalam batas penggunaan wajar. Selalu periksa deskripsi video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Kesimpulan: jaga penggunaan tetap pribadi dan hormat. Jika Anda ingin membagikan, minta izin atau beri kredit pada penulis dengan jelas.
            </p>
          </div>

          {/* Risiko */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko saat mengunduh video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya umum dan cara menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Alat pihak ketiga dapat menyembunyikan jebakan: dari virus hingga penipuan. Sebelum menempelkan tautan di situs web mana pun, patut diketahui risiko utama untuk melindungi perangkat Anda.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware di situs mencurigakan">
                Beberapa portal menyisipkan virus, trojan, atau ransomware bersama dengan unduhan. Satu klik dapat membahayakan data Anda atau mengunci perangkat.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan phishing">
                Tombol palsu meniru layar login TikTok dan mencuri kredensial, atau menawarkan "pembaruan" yang menginstal spyware.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran data">
                Alat yang tidak dapat diandalkan mencatat riwayat Anda dan menjual informasi kepada pihak ketiga, menghasilkan spam dan upaya penipuan.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kehilangan kualitas">
                Layanan lemah mengompresi file terlalu banyak, menyebabkan gangguan, audio tidak sinkron, dan warna pudar.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Pemblokiran akun">
                TikTok dapat mendeteksi unduhan massal melalui alat eksternal dan menangguhkan profil, terutama kreator.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Penyimpanan penuh">
                Mengumpulkan video besar dengan cepat mengisi penyimpanan dan dapat membuat pemutar crash. Jaga perpustakaan tetap terorganisir.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Hanya gunakan situs terpercaya, analisis file yang diunduh, dan jika mungkin, jelajahi dengan VPN dan antivirus yang diperbarui.
            </p>
          </div>

          {/* Mengapa menggunakan videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa menggunakan videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mitra terpercaya Anda untuk mengunduh TikTok
            </h2>
            <p className="section-muted mb-4">
              Kami membuat videodownload.io untuk memiliki metode yang dapat diandalkan tanpa iklan yang mengganggu atau aplikasi berat. Sejak itu, kami telah memproses jutaan unduhan dengan aman. Kami terus meningkatkan alat berdasarkan umpan balik komunitas untuk memberikan pengalaman yang sederhana dan stabil.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Kecepatan instan">
                Kami memproses sebagian besar video dalam beberapa detik berkat server yang dioptimalkan.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Tanpa iklan mengganggu">
                Antarmuka bersih tanpa pop-up atau pengalihan aneh.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Tanpa watermark">
                Kami menyediakan file tanpa watermark, siap untuk pengeditan atau posting ulang yang diotorisasi.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unduhan tak terbatas">
                Gunakan sebanyak yang Anda inginkan. Kami tidak membatasi jumlah video per hari.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Berfungsi di perangkat apa pun">
                Hanya browser di ponsel, tablet, atau komputer Anda. Tidak perlu instalasi.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privasi terjamin">
                Kami tidak melacak unduhan Anda dan tidak menyimpan tautan. Setelah proses selesai, tidak ada data yang tersimpan.
              </FeatureCard>
            </div>
          </div>

          {/* Pertanyaan yang sering diajukan */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan yang sering diajukan</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Semua yang perlu Anda ketahui tentang videodownload.io
            </h2>
            <p className="section-muted mb-4">
              Kami telah mengumpulkan jawaban cepat agar Anda dapat menggunakan layanan dengan tenang dan memanfaatkan unduhan TikTok Anda dengan lebih baik.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video TikTok pribadi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak. Alat ini hanya berfungsi dengan video publik. Konten pribadi memerlukan izin kreator. Jika video adalah milik Anda, gunakan unduhan asli TikTok.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah mengunduh membuat ponsel saya lambat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak karena kami. File ringan dan kami tidak menginstal apa pun. Hanya pantau ruang jika Anda mengunduh banyak video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video yang diunduh tidak memiliki watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Karena kami menggunakan aliran asli dan menghapus watermark yang diterapkan oleh TikTok, meninggalkan file bersih untuk penggunaan pribadi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya hanya mengunduh audio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya. Setelah menempelkan tautan, pilih format MP3 untuk hanya menyimpan audio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apa yang harus dilakukan jika unduhan gagal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pastikan tautan lengkap dan video bersifat publik. Coba browser lain atau hapus cache. Masih berlanjut? Hubungi dukungan kami - kami menjawab dengan cepat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batasan ukuran atau durasi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami mendukung video hingga 60 menit. Yang lebih besar membutuhkan sedikit lebih banyak waktu untuk diproses, tetapi diunduh sepenuhnya.
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
                  Tidak. Proses dilakukan secara real-time dan tidak ada yang disimpan. File hanya tetap dengan Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kreator tahu bahwa saya mengunduh video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak. TikTok tidak mengirim notifikasi; unduhan tetap anonim.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Mulai sekarang */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Siap menyimpan favorit Anda?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bawa video Anda offline dalam hitungan detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin tautan TikTok
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tempel di sini
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Klik Unduh
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download TikTok Video
                </Button>
              </a>
            </div>
          </div>

          {/* Jelajahi pengunduh lain */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi pengunduh lain
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
      <FeatureCard icon={VideoIcon} title="Unduhan HD">
        Unduh hingga 1080p (atau lebih, jika tersedia) dan pertahankan warna cerah dan detail tajam, karena kami mengambil file langsung dari sumber.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Tanpa watermark">
        Tidak seperti aplikasi resmi, kami menyediakan video bersih tanpa logo, siap untuk pengeditan atau posting ulang yang diotorisasi.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Berfungsi di perangkat apa pun">
        Gunakan di Android, iOS, Windows, atau macOS langsung melalui browser. Tidak perlu instalasi atau konfigurasi.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Pemrosesan cepat">
        Sebagian besar unduhan hanya memakan waktu beberapa detik berkat server yang dioptimalkan dekat TikTok.
      </FeatureCard>
      <FeatureCard icon={Download} title="100% gratis">
        Tidak perlu pendaftaran, kartu kredit, atau biaya tersembunyi. Unduh sebanyak yang Anda inginkan, setiap hari.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Aman dan pribadi">
        Kami tidak melacak dan tidak menyimpan tautan. Setelah mengunduh, tidak ada informasi yang tersisa dengan kami.
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
      <StepCard step={1} title="Salin tautan video">
        <a href="https://www.tiktok.com/">Buka TikTok</a> melalui aplikasi atau browser, temukan video yang diinginkan, ketuk tombol Bagikan dan pilih «Salin tautan» untuk mendapatkan URL lengkap.
      </StepCard>
      <StepCard step={2} title="Tempel tautan di videodownload.io">
        Buka videodownload.io di browser, klik kotak atas dan tempel alamat yang disalin. Konfirmasikan bahwa tautan dimulai dengan tiktok.com dan video bersifat publik.
      </StepCard>
      <StepCard step={3} title="Biarkan sistem menyiapkan file">
        Klik «Unduh». Kami mengambil video dari server TikTok, menghapus watermark dan memeriksa kualitas dalam beberapa detik.
      </StepCard>
      <StepCard step={4} title="Pilih format dan simpan">
        Pilih MP4 untuk video + audio atau MP3 untuk hanya mengunduh audio. File akan disimpan di folder default perangkat dan tersedia untuk ditonton offline.
      </StepCard>
    </div>
  );
}
