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

export default function LinkedInPageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Unduh Video LinkedIn | Gratis & HD",
    description:
      "Unduh video dan postingan LinkedIn dalam format mp4 kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Kotak unduhan minimalis */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video atau postingan LinkedIn"
            />
          </div>
          {/* Fitur */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh video LinkedIn dengan mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan ringkas untuk menyimpan klip profesional dan menontonnya offline kapan saja
          </p>

          <EnhancedFeatures />

          {/* Cara mengunduh */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Langkah jelas dan cepat untuk menyimpan video
          </h2>
          <p className="text-muted-foreground mb-6">
            Dengan videodownload.io, memindahkan video LinkedIn ke perangkat hanya butuh
            beberapa menit. Ikuti empat langkah intuitif ini—bahkan jika Anda tidak
            terlalu teknis—untuk mengunduh klip apa pun tanpa repot.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Unduh video LinkedIn
              </Button>
            </a>
          </div>

          {/* Mengapa perlu unduh */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kegunaan terbaik
            </h2>
            <p className="section-muted mb-4">
              Feed LinkedIn bergerak cepat dan video berkualitas mudah tenggelam. Dengan
              mengunduh, Anda bisa menyimpan konten yang benar-benar penting dan menjadikan
              scroll singkat sebagai referensi jangka panjang. Fokuslah pada video yang
              mendukung karier atau bisnis Anda, bukan sekadar menumpuk konten.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Akses offline untuk profesional
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan materi kepemimpinan atau strategi pemasaran untuk perjalanan
                    tanpa Wi-Fi. Trainer mengunduh klip workshop agar bisa ditayangkan
                    kepada tim tanpa mengandalkan koneksi internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Memanfaatkan ulang konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketer menyimpan studi kasus untuk dibagikan di presentasi atau
                    platform lain. Pencari kerja mengunduh tips CV untuk dianalisis dan
                    menyempurnakan pitch mereka. Ambil bagian terpenting dan gunakan kembali
                    tanpa membuat ulang dari nol.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Cadangkan konten sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika Anda rutin berbagi insight, perubahan platform bisa saja
                    menyembunyikan atau menghapus postingan. Simpan video ke drive lokal untuk
                    melindungi karya dari bug atau blokir akun.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelatihan dan edukasi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tim HR menyimpan video onboarding untuk karyawan baru. Pelajar dan peserta
                    kursus mengunduh panel industri untuk dicatat dan ditinjau ulang secara
                    offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pengembangan diri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan talk motivasi atau tips networking untuk ditonton ketika Anda
                    butuh dorongan. Jadikan insight mentor sebagai pengingat harian tanpa
                    harus menggulir ulang di aplikasi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video LinkedIn memberi fleksibilitas dan kenyamanan: Anda menikmati
              konten sesuai waktu dan cara Anda, baik untuk pekerjaan, belajar, maupun inspirasi.
            </p>
          </div>

          {/* Siapa yang cocok */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang sebaiknya mengunduh video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pengguna yang paling diuntungkan
            </h2>
            <p className="section-muted mb-4">
              LinkedIn adalah rumah para profesional, dan unduhan video sangat membantu bagi
              mereka yang menggunakan platform secara strategis untuk tumbuh, belajar, atau
              membangun jaringan. Jika Anda melihat postingan sebagai alat kerja, ini adalah
              fitur yang wajib dimiliki.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profesional dan manajer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Manajer menyimpan sesi kepemimpinan untuk dibagikan ke tim. Marketer
                    mengunduh iklan atau studi pesaing untuk menganalisis tren dan
                    menampilkan klip bersih di slide presentasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pencari kerja dan coach karier
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh tips wawancara atau walkthrough CV untuk latihan offline. Coach karier
                    menyimpan testimoni klien sebagai bukti sosial tanpa watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemilik bisnis dan startup
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startup menyimpan pitch atau update industri untuk memantau kompetitor.
                    Bisnis kecil mengunduh testimoni pelanggan untuk dimasukkan ke website atau
                    proposal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Trainer dan pendidik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tim HR menyimpan video compliance untuk pelatihan internal. Dosen dan
                    fasilitator mengunduh panel industri untuk dibahas di kelas tanpa bergantung
                    pada koneksi internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelajar dan lifelong learner
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan saran karier atau tutorial teknis untuk ditinjau ulang sesuai tempo.
                    Bahkan pengguna santai menyimpan klip motivasi untuk ditonton saat butuh
                    dorongan.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Apa pun peran Anda, mengunduh video LinkedIn menghemat waktu, kuota, dan tenaga,
              sekaligus memastikan konten favorit tetap mudah diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah legal mengunduh video LinkedIn?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hal-hal yang perlu Anda ketahui soal hukum
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video LinkedIn berada di area abu-abu. Video dilindungi hak cipta
              kreatornya menurut hukum seperti <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a>. Menyimpan untuk
              ditonton pribadi—misalnya belajar webinar secara offline—sering dianggap fair
              use. Namun membagikan tanpa izin atau memonetisasi dapat menimbulkan masalah
              hukum. Audio seperti musik atau voice-over juga memiliki lapisan hak cipta
              tambahan, walau unduhan pribadi yang singkat jarang dipermasalahkan.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Kapan diperbolehkan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika kreator memberi izin atau videonya berada di domain publik, Anda aman.
                    Penggunaan edukatif—misalnya dosen menayangkan cuplikan di kelas—sering masuk
                    kategori fair use. Cek deskripsi postingan untuk melihat izin dan gunakan
                    secara pribadi sambil tetap memberi kredit saat dibagikan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiko */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko saat mengunduh video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ancaman potensial dan cara menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Mengunduh dari situs tak terpercaya memang cepat, tetapi bisa berbahaya. Tidak
              semua alat bersih, dan beberapa klik sembarangan dapat membahayakan perangkat
              maupun data Anda. Kenali risikonya sebelum menekan tombol unduh.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware dan virus">
                Situs meragukan menyisipkan malware dalam video—mulai spyware sampai ransomware.
                Satu unduhan buruk dapat mengunci file atau mencuri kata sandi. Beberapa alat
                bahkan menyembunyikan keylogger.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Halaman palsu meniru login LinkedIn dan mencuri kredensial. Pop-up "pembaruan"
                palsu memasang pelacak yang memantau setiap klik.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kualitas menurun">
                Alat berkualitas rendah mengompres video berlebihan sehingga gambar patah atau
                audio hilang. Anda berharap webinar tajam, tapi yang datang justru file buram.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran privasi">
                Beberapa layanan mencatat unduhan Anda lalu menjual IP atau preferensi video ke
                pengiklan. Penjahat dapat memanfaatkan data tersebut untuk spam atau penipuan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Akun bisa diblokir">
                Penggunaan berlebihan alat pihak ketiga dapat menandai akun, terutama bagi
                kreator aktif. Anda bisa kehilangan akses ke jaringan dan postingan dalam semalam.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Memori cepat penuh">
                Menumpuk banyak video menghabiskan ruang penyimpanan dan membuat perangkat lambat.
                File rusak dapat menyebabkan pemutar video crash dan menyita waktu Anda.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gunakan situs tepercaya, pindai file yang diunduh, dan pertimbangkan VPN untuk
              menjaga keamanan.
            </p>
          </div>

          {/* Mengapa videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa memilih videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Partner tepercaya untuk unduhan LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Kami meluncurkan videodownload.io pada 2022 karena lelah dengan alat lambat dan
              berisiko. Sebagai pengguna LinkedIn kami ingin solusi cepat dan aman untuk
              menyimpan video. Kami tim kecil yang fokus menjaga proses unduh tetap sederhana
              dan terlindungi. Setelah jutaan unduhan tanpa kebocoran data, kami terus
              meningkatkan layanan dari masukan pengguna.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Kurang dari lima detik">
                Unduhan selesai bahkan saat jam sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tanpa iklan dan pop-up">
                Antarmuka bersih dan fokus.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Tanpa watermark">
                Klip siap pakai untuk presentasi atau arsip pribadi.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unduhan tak terbatas">
                Tidak ada batas harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Berjalan di semua perangkat">
                Dari perangkat lama hingga terbaru.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistem aman">
                Tidak ada data yang disimpan setelah proses selesai.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan umum</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Jawaban seputar pengunduhan video LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Kami mengumpulkan pertanyaan yang paling sering diajukan mengenai penggunaan
              videodownload.io dan cara mengunduh video LinkedIn agar Anda bisa mulai dengan yakin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video LinkedIn privat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak. Kami hanya mendukung postingan publik. Konten privat atau grup
                  memerlukan izin kreator dan kami menghormatinya untuk tetap patuh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah mengunduh memperlambat perangkat saya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File yang kami hasilkan bersih dan ringan, jadi tidak menimbulkan lag. Pastikan
                  saja ruang penyimpanan tetap cukup jika Anda menyimpan banyak video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video yang diunduh bebas watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn menambahkan logo untuk melacak penyebaran. Kami mengambil file asli dan
                  membersihkannya sehingga Anda memperoleh video jelas untuk penggunaan pribadi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya menyimpan hanya audionya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa. Pilih format MP3 setelah menempelkan link untuk mengambil audio saja—ideal
                  untuk podcast atau pidato.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apa yang harus dilakukan jika unduhan gagal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pastikan tautan publik dan diawali linkedin.com. Coba browser lain atau bersihkan cache.
                  Tim dukungan kami di chat siap membantu jika masih bermasalah.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batas durasi video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami mendukung video hingga 60 menit. Yang lebih panjang membutuhkan sedikit waktu
                  lebih untuk diproses tapi tetap terunduh penuh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kalian menyimpan video yang saya unduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak sama sekali. Kami memproses secara instan lalu menghapusnya. File hanya ada di
                  perangkat Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kreator tahu jika saya mengunduh videonya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn tidak mengirim notifikasi. Unduhan Anda sepenuhnya privat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai simpan video LinkedIn sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan klip profesional dalam hitungan detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin link LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Tempel di situs kami
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Unduh video bersih
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh video LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Pengunduh lain */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi pengunduh lainnya
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Unduh konten dari platform favorit Anda
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
                        Unduh video {p.name}
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
      <FeatureCard icon={VideoIcon} title="Video kualitas tinggi">
        Unduh video LinkedIn dalam resolusi tajam hingga 1080p jika postingan aslinya
        mendukung. Tidak ada gambar buram atau warna pudar ketika diputar ulang.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tanpa logo dan watermark">
        LinkedIn menambahkan branding saat Anda menyimpan lewat aplikasi mereka. Kami menghapus
        semuanya supaya Anda mendapatkan klip bersih.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Berfungsi di semua perangkat">
        Gunakan laptop, iPhone, Android, atau tablet—tanpa instalasi tambahan. Cukup buka situs
        kami, tempel tautan, dan unduh.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Unduhan cepat dan stabil">
        Alat kami mengambil video hanya dalam hitungan detik, biasanya kurang dari 10 untuk
        kebanyakan klip, dengan server yang dekat dengan LinkedIn.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis tanpa batas">
        Tidak ada biaya, akun, atau batas harian. Simpan semua video penting yang Anda perlukan.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses aman dan privat">
        Kami tidak menyimpan tautan atau file setelah unduhan selesai. Tanpa tracking maupun
        iklan mengganggu.
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
      <StepCard step={1} title="Salin tautan dari LinkedIn">
        <a href="http://www.linkedin.com">Buka LinkedIn</a> di ponsel atau browser. Cari video
        yang ingin Anda simpan, ketuk tiga titik di kanan atas postingan, lalu pilih "Copy link
        to post" untuk menyalin URL lengkap.
      </StepCard>
      <StepCard step={2} title="Tempel tautan ke situs kami">
        Buka videodownload.io dan tempel tautan pada kotak "Tempel link LinkedIn di sini".
        Pastikan URL diawali linkedin.com—postingan privat tidak akan berfungsi.
      </StepCard>
      <StepCard step={3} title="Kami memproses videonya">
        Klik tombol "Download" berwarna biru. Sistem kami mengambil video langsung dari server
        LinkedIn, menghapus watermark, dan memastikan kualitas tetap terjaga.
      </StepCard>
      <StepCard step={4} title="Simpan file ke perangkat">
        Pilih MP4 jika ingin video lengkap atau MP3 bila hanya perlu audio. File akan tersimpan di
        folder Downloads atau galeri Anda. Ganti nama sesuai kebutuhan dan putar untuk memastikan
        semuanya lancar.
      </StepCard>
    </div>
  );
}
