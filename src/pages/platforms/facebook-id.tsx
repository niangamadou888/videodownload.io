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

export default function FacebookPageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Unduh Video Facebook | Gratis & HD",
    description: "Unduh video Facebook, Reels, dan Live dalam format mp4, 1080p, dan kualitas HD. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Kotak unduhan minimal (tanpa bagian beranda lainnya) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Unduh Video Facebook
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video, Reel, atau Watch Facebook"
            />
          </div>
          {/* Fitur */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Alat yang memudahkan pengunduhan video Facebook
          </h2>
          <p className="text-muted-foreground mb-6">
            Berikut enam fitur yang menjadikan videodownload.io pilihan terbaik untuk mengunduh video Facebook. Semuanya dirancang untuk menghemat waktu, menjaga kualitas, dan membuat pengalaman Anda tetap aman serta sederhana.
          </p>

          <EnhancedFeatures />

          {/* Cara mengunduh */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan langkah demi langkah untuk menyimpan video dengan cepat
          </h2>
          <p className="text-muted-foreground mb-6">
            Mengunduh video Facebook dengan videodownload.io sangat mudah dan cepat, bahkan jika Anda bukan pengguna yang teknis. Ikuti empat langkah ini untuk menyimpan video ke perangkat Anda dalam hitungan menit.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Unduh video Facebook
              </Button>
            </a>
          </div>

          {/* Mengapa perlu mengunduh */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kegunaan terbaik untuk menonton dan memakai secara offline
            </h2>
            <p className="section-muted mb-4">
              Dengan mengunduh video Facebook Anda bisa menonton atau memanfaatkannya ulang tanpa koneksi internet. Cara ini ideal untuk menghemat kuota, menyimpan kenangan, atau membuat konten baru. Berikut alasan utama mengunduh video Facebook untuk kebutuhan pribadi maupun profesional.
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
                    Simpan video untuk ditonton saat perjalanan, penerbangan, atau di area tanpa Wi-Fi maupun data, seperti daerah terpencil atau perjalanan luar negeri.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pembuatan konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh klip untuk reaction, edit, atau montage di media sosial Anda sendiri selama tetap mematuhi hak cipta atau mendapatkan izin kreator.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan pelatihan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan tutorial, webinar, atau video panduan untuk belajar offline, misalnya demo memasak, rutinitas kebugaran, atau tips bisnis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menyimpan kenangan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jaga tetap aman video keluarga, sorotan acara, atau unggahan grup yang bisa hilang jika akun terhapus atau pengaturan privasi berubah.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemasaran dan bisnis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bisnis dapat mengunduh video bermerek atau siaran langsung mereka sendiri untuk dipakai offline dalam presentasi, iklan, atau pertemuan klien.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menghemat kuota data
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh melalui Wi-Fi untuk menghindari penggunaan data seluler, terutama untuk video panjang atau berkualitas tinggi ketika paket data terbatas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hiburan offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bangun koleksi klip lucu, video musik, atau siaran langsung yang bisa dinikmati offline saat senggang atau bepergian.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Berbagi di komunitas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video dari grup atau halaman Facebook untuk dibagikan offline dalam workshop, kelas, atau acara komunitas tanpa internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Facebook memberi fleksibilitas untuk menikmati atau menggunakan konten kapan pun dan di mana pun tanpa bergantung pada koneksi.
            </p>
          </div>

          {/* Siapa yang sebaiknya mengunduh */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang sebaiknya mengunduh video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pengguna yang mendapatkan manfaat akses offline
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video Facebook bermanfaat bagi siapa saja yang ingin menonton atau memakai konten secara offline. Bukan hanya pengguna kasual, beberapa kelompok bisa menghemat waktu dan tenaga dengan mengunduh. Berikut siapa saja yang perlu mempertimbangkannya dan alasannya.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kreator konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencer, YouTuber, atau TikToker dapat mengunduh video untuk reaction, kolaborasi, atau edit, selama tetap menghormati hak cipta atau mendapat izin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelajar dan pendidik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan konten edukasi seperti kuliah, tutorial, atau webinar untuk belajar offline atau digunakan di kelas, terutama di daerah dengan konektivitas rendah.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelancong
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh hiburan seperti klip viral atau siaran langsung untuk ditonton offline selama perjalanan tanpa akses internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemilik bisnis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video bermerek, siaran langsung, atau iklan Anda sendiri untuk dipakai offline saat pemasaran, presentasi, atau pertemuan klien.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penjaga kenangan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video pribadi, momen keluarga, atau postingan grup yang bisa hilang karena perubahan akun atau kebijakan privasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar kebugaran
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh video latihan, sesi yoga, atau tips kesehatan untuk diikuti secara offline di rumah atau di gym.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemimpin komunitas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video grup atau konten halaman untuk dibagikan offline dalam rapat, acara, atau workshop tanpa perlu Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar hobi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh video inspirasi seperti proyek DIY atau tutorial kerajinan dan simpan sebagai referensi offline saat mengerjakan hobi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legalitas */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah mengunduh video Facebook itu legal?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Memahami aturan hukumnya
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video Facebook memiliki aturan yang perlu diperhatikan. Ketentuan layanan Facebook tidak mengizinkan pengunduhan tanpa izin dari kreator atau platform. Berdasarkan hukum hak cipta AS, menyimpan video berhak cipta tanpa persetujuan adalah tindakan ilegal dan bisa berujung gugatan, meski jarang terjadi untuk penggunaan pribadi. Pengecualian yang diperbolehkan antara lain:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Video domain publik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video yang sudah berada di domain publik dan tidak lagi dilindungi hak cipta.
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
                    Video dengan lisensi Creative Commons yang memperbolehkan pengunduhan untuk penggunaan tertentu seperti berbagi atau remix selama syaratnya dipatuhi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Izin kreator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video yang secara jelas memberikan izin pengunduhan dari kreatornya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Penggunaan wajar (fair use)
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Situasi fair use, misalnya untuk pendidikan, komentar, atau riset, meski tetap bergantung pada cara Anda menggunakan video tersebut.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Selalu periksa deskripsi video untuk melihat lisensinya atau mintalah izin kreator. Fitur simpan Facebook memungkinkan Anda menandai postingan untuk ditonton pribadi, sebagai alternatif yang legal. Untuk tetap aman, hormati aturan hak cipta dan pertimbangkan meminta izin sebelum mengunduh.
            </p>
          </div>

          {/* Risiko */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko saat mengunduh video Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya yang perlu dihindari saat mengunduh
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video Facebook memang praktis, namun ada risikonya bila memakai alat yang tidak terpercaya atau mengabaikan aturan. Mengetahui risiko ini membantu Anda melindungi perangkat dan tetap aman. Perhatikan hal-hal berikut:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware dari situs tidak terpercaya"
              >
                Banyak situs download menampilkan tombol palsu, iklan pop-up, atau skrip tersembunyi <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">yang memasang virus atau malware</a>. Hal ini dapat merusak perangkat atau mencuri data Anda. Gunakan platform tepercaya seperti videodownload.io untuk menghindarinya.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Masalah hukum">
                Mengunduh tanpa izin melanggar aturan Facebook dan dapat menyebabkan akun diblokir atau bahkan tindakan hukum dari pemegang hak cipta. Selalu cek lisensi video terlebih dahulu.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="File berkualitas rendah"
              >
                Situs yang tidak dapat dipercaya sering memberikan video buram atau rusak yang sulit diputar, membuang waktu dan ruang penyimpanan Anda.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Risiko privasi">
                Situs mencurigakan bisa melacak aktivitas Anda, mengumpulkan informasi pribadi, atau menjual data ke pihak ketiga. Pilih alat yang tidak meminta izin berlebihan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Unduhan rusak">
                Situs yang buruk bisa memberikan file tidak lengkap yang tidak dapat dibuka, membuat Anda frustrasi.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Pertimbangan etis"
              >
                Mengunduh melewatkan tayangan atau iklan yang menjadi sumber pendapatan kreator. Dukung kreator dengan menonton secara online bila memungkinkan.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Penyimpanan penuh"
              >
                Mengunduh banyak video, terlebih yang berkualitas tinggi, dapat dengan cepat memenuhi penyimpanan perangkat. Kelola unduhan Anda agar tetap terkontrol.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Menggunakan alat yang aman dan tepercaya seperti videodownload.io serta mematuhi aturan hak cipta membantu Anda menghindari risiko ini dan tetap aman saat mengunduh.
            </p>
          </div>

          {/* Mengapa memilih videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa memilih videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pilihan tepercaya untuk mengunduh dari Facebook
            </h2>
            <p className="section-muted mb-4">
            Kami membuat videodownload.io agar Anda bisa mengunduh video Facebook dengan cara yang bersih, cepat, dan aman tanpa risiko situs abal-abal. Tujuannya sederhana: membuat proses unduh mudah dan aman untuk semua orang. Berikut enam alasan untuk memilih kami.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Aman tanpa malware">
                Situs kami bebas dari iklan pop-up, tautan palsu, dan skrip berbahaya, sehingga perangkat Anda terlindungi dari virus maupun spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Mudah digunakan">
                Tempel tautan, klik unduh, selesai. Tidak ada langkah rumit atau keahlian teknis yang dibutuhkan.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Proses cepat">
                Server kami memproses video dengan cepat dan menghadirkan unduhan hanya dalam hitungan detik, termasuk untuk siaran langsung atau konten grup.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Format fleksibel">
                Pilih MP4 untuk video atau MP3 untuk audio dengan opsi kualitas seperti 720p atau 1080p sesuai kebutuhan Anda.
              </FeatureCard>
              <FeatureCard icon={Download} title="Benar-benar gratis">
                Unduh video sebanyak yang Anda mau tanpa biaya. Tidak ada langganan atau biaya tersembunyi.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privasi terjaga">
                Kami tidak melacak unduhan Anda, tidak menyimpan data, dan tidak membagikan informasi, sehingga aktivitas Anda tetap privat.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan umum</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seputar videodownload.io dan pengunduhan Facebook
            </h2>
            <p className="section-muted mb-4">
              Berikut jawaban atas pertanyaan yang sering muncul saat memakai videodownload.io untuk mengunduh video Facebook, supaya Anda bisa mulai dengan tenang.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Apakah videodownload.io gratis?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, platform kami 100% gratis. Unduh video sebanyak yang Anda inginkan tanpa biaya maupun batasan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Haruskah saya memasang software?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, semuanya berjalan lewat browser. Tidak perlu aplikasi, ekstensi, atau instalasi tambahan, jadi sangat praktis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Bisakah saya mengunduh live atau video grup Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa. Kami mendukung unduhan siaran langsung dan video grup selama Anda memiliki akses terhadap kontennya. Tinggal tempel tautannya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Apakah videodownload.io aman?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tentu saja. Situs kami aman, tanpa pop-up atau tautan berbahaya. Kami mengutamakan keamanan Anda dan rutin menguji platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Bisakah saya mengunduh video berkualitas tinggi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa. Anda dapat mengunduh dalam kualitas tertinggi yang tersedia, seperti 720p atau 1080p, sesuai kualitas video aslinya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Bagaimana jika video gagal diunduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Periksa kembali URL dan koneksi internet Anda. Jika masih gagal, hubungi tim dukungan kami dan kami akan membantu secepatnya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Bisakah saya menyimpan audionya saja?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa. Fitur MP3 kami memungkinkan Anda mengekstrak audio dari video apa pun, cocok untuk musik, pidato, atau potongan tertentu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Apakah mengunduh video Facebook itu legal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tergantung. Aturan Facebook melarang pengunduhan tanpa izin. Video domain publik, berlisensi Creative Commons, atau yang mendapat izin kreator biasanya aman. Fair use bisa berlaku untuk edukasi atau komentar, tetapi selalu periksa lisensi agar tetap aman.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Mulai sekarang */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai unduh sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan video Facebook hanya dalam hitungan detik
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
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh video Facebook
                </Button>
              </a>
            </div>
          </div>

          {/* Jelajahi downloader lain */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi downloader lainnya
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
      <FeatureCard icon={VideoIcon} title="Unduhan video berkualitas tinggi">
        Pilih resolusi seperti 720p atau 1080p sesuai ketersediaan video Facebook. Baik itu siaran langsung maupun klip pendek, Anda bisa menentukan kualitas terbaik tanpa pengaturan rumit.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan unduh tinggi">
        Server kami mengambil video Facebook dengan cepat. Mayoritas unduhan selesai kurang dari satu menit, tergantung koneksi dan durasi video.
      </FeatureCard>
      <FeatureCard icon={Music} title="Opsi ekstrak audio">
        Hanya butuh suaranya? Ubah video Facebook menjadi file MP3 dalam satu klik. Sangat pas untuk menyimpan musik, pidato, atau potongan ala podcast agar bisa diputar offline.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Tanpa instal perangkat lunak">
        Unduh langsung dari situs kami menggunakan browser di ponsel, tablet, atau komputer. Tidak perlu aplikasi atau program tambahan.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Dukungan live dan video grup">
        Simpan video dari postingan, live, atau konten grup privat (jika Anda punya akses). Cukup tempel tautan dan kami urus sisanya, bahkan untuk format yang unik.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Antarmuka aman tanpa iklan">
        Situs kami bebas dari pop-up, tombol palsu, atau redirect berbahaya. Anda mendapat pengalaman yang bersih dan aman setiap kali mengunduh.
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
      <StepCard step={1} title="Salin URL video Facebook">
        <a href="http://www.facebook.com">Buka Facebook</a> lewat aplikasi atau browser, temukan video, siaran langsung, atau postingan grup yang diinginkan, lalu salin URL-nya. Ketuk tiga titik pada postingan dan pilih "Salin tautan" atau ambil alamatnya dari bilah alamat browser.
      </StepCard>
      <StepCard step={2} title="Tempel URL di situs kami">
        Kunjungi videodownload.io melalui browser apa pun. Di halaman utama, temukan kolom unduhan dan tempel tautan Facebook tadi. Pastikan URL-nya sudah benar.
      </StepCard>
      <StepCard step={3} title="Kami memproses videonya">
        Klik tombol "Download". Sistem kami akan mengambil video dan menyiapkannya dalam hitungan detik. Pilih format seperti MP4 untuk video atau MP3 untuk audio, serta kualitas yang tersedia.
      </StepCard>
      <StepCard step={4} title="Simpan video Facebook Anda">
        Saat tautan unduhan muncul, klik untuk menyimpan video ke perangkat. Ganti nama file jika ingin menjaga unduhan tetap rapi dan mudah ditemukan.
      </StepCard>
    </div>
  );
}
