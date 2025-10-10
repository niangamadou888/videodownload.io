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

export default function InstagramPageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Unduh Video Instagram | Gratis & HD",
    description:
      "Unduh video Instagram, Reels, Stories, dan IGTV dalam format mp4, 1080p, dan 4k. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Kotak unduhan minimal */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Instagram Video
          </h1>
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video, Reel, atau Story Instagram"
            />
          </div>
          {/* Fitur */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh video Instagram dengan mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan sederhana untuk menyimpan Reel dan klip agar bisa ditonton offline.
          </p>

          <EnhancedFeatures />

          {/* Cara mengunduh */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan langkah demi langkah yang jelas untuk menyimpan video tanpa repot
          </h2>
          <p className="text-muted-foreground mb-6">
            Mengunduh video Instagram ke perangkat Anda sangat mudah dengan
            videodownload.io. Ikuti empat langkah sederhana ini untuk mengunduh
            video apa pun dalam hitungan menit. Setiap langkah dibuat intuitif,
            bahkan jika Anda tidak terlalu paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Download Instagram Video
              </Button>
            </a>
          </div>

          {/* Mengapa perlu mengunduh */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Skenario penggunaan terbaik
            </h2>
            <p className="section-muted mb-4">
              Feed Instagram bergerak cepat dan membuat konten menarik cepat tenggelam.
              Mengunduh membantu Anda menyimpan klip yang penting, mengubah scrolling
              menjadi koleksi pribadi. Bukan soal menimbun semua postingan, tetapi
              menjaga video yang memberi ide atau punya makna. Anda menentukan apa
              yang tetap ada, meski akun menjadi privat atau postingan hilang.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menonton offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan tips perjalanan atau Reel olahraga untuk penerbangan atau
                    kemah tanpa sinyal. Orang tua mengunduh lagu anak atau Story untuk
                    perjalanan jauh agar anak tetap terhibur tanpa Wi-Fi.
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
                    Kreator memakai unduhan untuk remix. Seorang blogger fashion
                    menyimpan Reel outfit untuk digabungkan ke kontennya, memberi
                    narasi atau sudut baru. Musisi mengambil suara yang sedang tren
                    untuk dilapis ke lagu mereka, tanpa watermark sehingga editan
                    tetap bersih.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mencadangkan unggahan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram bisa menghapus atau error, jadi kreator mencadangkan
                    Reel mereka ke hard drive. Pelajar menyimpan tips belajar atau
                    potongan kuliah untuk catatan, bisa ditonton tanpa login ke aplikasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menggunakan ulang di platform lain
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ubah satu Reel menjadi YouTube Short atau klip TikTok dengan sedikit
                    penyesuaian. Bisnis menyimpan testimoni pelanggan untuk ditempel di
                    situs web demi meningkatkan kepercayaan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kenangan pribadi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unduh momen keluarga, seperti tarian pernikahan sepupu atau update
                    bayi teman, untuk diputar ulang saat kumpul atau disimpan bertahun-tahun.
                    Cara ini menjaga kenangan tetap dekat.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Instagram memberi fleksibilitas dan kemudahan sehingga
              Anda bisa menikmati konten sesuai keinginan, baik untuk hiburan, kerja,
              maupun belajar.
            </p>
          </div>

          {/* Siapa yang cocok */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang sebaiknya mengunduh video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pengguna yang paling diuntungkan
            </h2>
            <p className="section-muted mb-4">
              Scroll tanpa akhir di Instagram membuat banyak orang terpaku, tetapi
              mengunduh video cocok bagi mereka yang memakai platform secara sadar.
              Untuk mereka yang melihat Reel sebagai alat, inspirasi, atau kenangan,
              bukan sekadar hiburan instan. Jika Anda sedang membangun sesuatu,
              belajar, atau ingin menyimpan momen, inilah solusinya.
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
                    Mengunggah setiap hari dan mencari ide dari Reel yang sedang tren.
                    Mengunduh membantu mereka menyimpan karya sendiri atau mempelajari
                    kreator lain, seperti vlogger kuliner yang mengumpulkan trik plating
                    untuk menyesuaikannya dengan gaya mereka tanpa logo di tengah video.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pelajar dan pengajar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guru menyimpan Reel demonstrasi untuk pelajaran, seperti eksperimen
                    sains, agar bisa ditampilkan tanpa masalah internet. Siswa mengunduh
                    panduan belajar atau latihan bahasa untuk ditinjau offline sesuai
                    kecepatan masing-masing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Keluarga
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Orang tua menyimpan langkah pertama anak atau cuplikan liburan untuk
                    dibagikan ke kerabat atau diarsipkan. Lebih bisa diandalkan daripada
                    berharap Instagram menyimpannya selamanya.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemilik bisnis dan marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sebuah butik menyimpan postingan pelanggan yang memakai produk mereka
                    untuk iklan atau testimoni sosial. Tim marketing mencoba tren Reel
                    untuk kampanye dan menyesuaikannya di berbagai platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pencinta fitness menyimpan alur yoga untuk dipraktikkan di gym. Pecinta
                    DIY mengunduh tutorial kerajinan untuk diikuti langkah demi langkah.
                    Bahkan pengguna kasual menyimpan klip motivasi untuk ditonton ulang
                    di hari-hari berat.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Apa pun peran atau gaya hidup Anda, mengunduh video Instagram membantu
              menghemat waktu, kuota, dan tenaga sambil membuat konten favorit tetap mudah diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah legal mengunduh video Instagram?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hal-hal yang perlu Anda ketahui soal hukum
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video Instagram bukan perkara hitam putih. Aturan Instagram
              mengizinkan penyimpanan postingan publik melalui aplikasinya untuk penggunaan
              pribadi, selama kreator tidak menonaktifkannya. Menggunakan alat pihak ketiga
              seperti milik kami secara teknis melanggar ketentuan, sehingga akun Anda bisa
              ditandai, walaupun pemblokiran jarang terjadi kecuali Anda mengunduh massal atau
              memposting ulang.
            </p>
            <p className="section-muted mb-2">
              Secara hukum, video dimiliki kreatornya berdasarkan undang-undang hak cipta
              seperti DMCA di AS. Menyimpan untuk ditonton pribadi sering dianggap fair use,
              misalnya memutar Reel secara offline. Namun membagikan tanpa izin atau mengeditnya
              untuk tujuan komersial bisa memicu klaim pelanggaran. Musik dalam Reel menambah
              kompleksitas karena label memiliki hak, tetapi simpanan pribadi yang singkat jarang
              bermasalah.
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
                    Jika kreator mengizinkan unduhan atau videonya domain publik, Anda aman.
                    Penggunaan edukatif, seperti guru menayangkan klip di kelas, sering masuk
                    kategori fair use. Periksa caption untuk melihat izin. Simpan untuk pribadi dan
                    cantumkan kredit saat membagikan, biasanya Anda tetap aman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiko */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko saat mengunduh video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potensi bahaya dan cara menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Mengunduh dari situs pihak ketiga terdengar mudah, tapi situs meragukan bisa
              menghadirkan masalah nyata. Tidak semua alat bersih, dan klik sembarangan dapat
              merusak perangkat atau data Anda. Kenali risikonya sebelum menekan tombol unduh.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware adalah ancaman terbesar">
                Situs tidak tepercaya menyisipkan virus dalam file video, memasukkan spyware atau
                ransomware. Satu unduhan buruk dapat mengunci file Anda atau mencuri kata sandi.
                Beberapa laporan menemukan alat yang menyembunyikan keylogger, mengubah unduhan
                Reel menjadi kebocoran data.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan phishing">
                Halaman palsu meniru login Instagram dan akan mencuri kredensial jika Anda mengetikkan
                data. Pop-up agresif menawarkan "pembaruan" yang sebenarnya memasang pelacak yang memantau
                setiap klik.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Masalah kualitas">
                Situs buruk mengompresi video secara agresif sehingga gambar patah-patah atau audio hilang.
                Alih-alih Reel tajam, Anda mendapat rekaman buram yang tidak nyaman ditonton.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran privasi">
                Beberapa layanan mencatat apa yang Anda unduh dan menjual alamat IP atau preferensi video
                ke pengiklan. Peretas bisa memanfaatkan data itu untuk spam atau penipuan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Pemblokiran Instagram">
                Mengunduh berlebihan lewat alat pihak ketiga bisa menandai akun Anda, terutama bagi kreator.
                Anda bisa kehilangan profil atau pengikut dalam semalam.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Masalah penyimpanan">
                Reel menumpuk dengan cepat, memperlambat ponsel atau memenuhi disk. File korup bisa membuat
                pemutar video macet dan menyita waktu saat memperbaiki.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gunakan situs tepercaya, pindai file yang diunduh, dan pertimbangkan VPN untuk menjaga keamanan.
            </p>
          </div>

          {/* Mengapa memilih videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa memakai videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Partner tepercaya untuk unduhan Instagram
            </h2>
            <p className="section-muted mb-4">
              Kami memulai videodownload.io pada 2022 karena bosan dengan aplikasi bermasalah dan <a href="https://blog.avast.com/malicious-browser-extensions-avast">downloader yang membawa malware</a>.
              Sebagai pengguna Instagram, kami ingin cara yang bersih untuk menyimpan Reel tanpa ribet dan tanpa risiko.
              Kami tim kecil yang fokus menjadikan proses unduh sesederhana dan seaman mungkin. Setelah jutaan unduhan,
              tidak ada kebocoran data dan pengguna terus kembali karena keandalannya.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unduhan cepat">
                Kurang dari lima detik bahkan saat jam sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tanpa iklan, tanpa pop-up">
                Hanya satu situs yang bersih.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Tanpa watermark">
                Setiap video tetap murni.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Simpan tanpa batas">
                Tanpa limit harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Berfungsi di perangkat apa pun">
                Dari ponsel hingga PC.
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
              Tanya jawab seputar unduhan Instagram
            </h2>
            <p className="section-muted mb-4">
              Kami mengumpulkan jawaban dari pertanyaan paling sering tentang penggunaan
              videodownload.io dan cara mengunduh video Instagram agar Anda bisa mulai dengan yakin.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video Instagram privat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak. Kami hanya menangani Reel dan postingan publik. Konten privat membutuhkan
                  izin kreator, dan kami menghormatinya agar tetap aman.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah unduhan merusak kinerja ponsel saya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, file yang Anda dapat bersih dan siap pakai. Pastikan saja ruang penyimpanan
                  cukup. Proses unduh seenteng menonton Reel secara langsung.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh hanya audio dari sebuah Reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya! Kami menyediakan opsi MP3 agar Anda bisa mengambil audionya saja. Cocok untuk remix,
                  dubbing, atau playlist offline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah saya perlu menginstal aplikasi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak perlu. Semuanya berjalan di browser. Tempel tautan, klik unduh, selesai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah watermark dihapus otomatis?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, kami menghapus watermark Instagram sehingga videonya siap digunakan tanpa tulisan
                  yang mengganggu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batas ukuran video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami mendukung Reel hingga 60 menit walaupun kebanyakan berdurasi pendek. Video lebih
                  panjang butuh sedikit waktu ekstra, tetapi tetap kami berikan secara utuh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kalian menyimpan video yang saya unduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sama sekali tidak. Kami memproses secara instan lalu menghapus semuanya. File hanya
                  tersimpan di perangkat Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kreator bisa tahu ketika saya mengunduh Reel mereka?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram tidak memberi notifikasi pada kreator. Unduhan Anda tetap privat tanpa memberi
                  tahu pemiliknya.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai unduh video Instagram sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan Reel Anda secara offline dalam hitungan detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin tautan Instagram
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
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Instagram Video
                </Button>
              </a>
            </div>
          </div>

          {/* Downloader lain */}
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
      <FeatureCard icon={VideoIcon} title="Kualitas video jernih">
        Ambil video Instagram dalam kualitas penuh hingga 1080p jika postingan asalnya mendukung.
        Tidak ada tayangan berpasir atau warna pudar saat ditonton ulang. Kami menarik file langsung
        dari server Instagram sehingga setiap frame tetap tajam, sempurna untuk klip perjalanan atau demo memasak.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Unduhan tanpa watermark">
        Instagram menempelkan logo dan nama pengguna pada video yang disimpan, mengganggu tampilan.
        Kami menghapusnya sepenuhnya sehingga klip bersih dan siap diedit atau dibagikan. Nikmati Reel tari
        atau momen hewan peliharaan tanpa teks menutupi aksi.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Berjalan di semua perangkat">
        Pakai iPhone, Android, PC, atau tablet dan semuanya tetap berjalan. Tidak ada aplikasi atau software
        yang perlu diinstal. Buka situs kami di browser mana pun, tempel link, dan ambil videonya. Sudah diuji
        di laptop lama hingga ponsel baru, selalu mulus.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Unduhan super cepat">
        Tidak ada yang suka menunggu. Alat kami mengambil video Instagram dalam hitungan detik, sering kurang
        dari 10 detik untuk kebanyakan klip. Kami memanfaatkan server yang dekat dengan Instagram untuk kecepatan,
        jadi Anda bisa menyimpan Reel saat rehat singkat tanpa buffering atau error.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Akses sepenuhnya gratis">
        Tanpa biaya, tanpa registrasi, tanpa tagihan tersembunyi. Unduh sebanyak yang Anda mau setiap hari tanpa batas.
        Kami menjaga layanan tetap gratis agar Anda bisa menyimpan rutinitas olahraga atau sketsa lucu tanpa memikirkan paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses aman dan terlindungi">
        Privasi Anda tetap aman. Kami tidak menyimpan tautan atau video setelah proses selesai. Tidak ada pelacakan,
        tidak ada data yang disimpan, dan tidak ada iklan meragukan. Prosesnya bersih dan perangkat Anda tetap terlindungi.
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
      <StepCard step={1} title="Salin tautan video dari Instagram">
        <a href="http://www.instagram.com">Buka Instagram</a> di ponsel atau browser Anda. Temukan Reel atau video
        yang ingin disimpan, misalnya resep cepat atau vlog perjalanan. Ketuk tiga titik di kanan atas postingan.
        Dari menu, pilih "Copy Link". Ini akan mengambil URL lengkap, contohnya instagram.com/reel/ABC123. Pastikan sudah benar.
      </StepCard>
      <StepCard step={2} title="Tempel tautan di situs kami">
        Buka videodownload.io di browser. Anda akan melihat kotak dengan teks "Tempel link Instagram Anda di sini".
        Klik di dalamnya dan tempel tautan yang disalin. Pastikan link diawali instagram.com untuk menghindari error.
        Postingan privat tidak akan berfungsi, tetapi Reel dan video publik aman digunakan.
      </StepCard>
      <StepCard step={3} title="Kami mengambil dan membersihkan video">
        Klik tombol hijau "Download" di sebelah kolom. Sistem kami mengambil video dari server Instagram dalam beberapa detik.
        Kami menghapus watermark dan memeriksa kualitas, sehingga Anda tidak mendapat file bermasalah. Audio tetap sinkron dan siap diputar.
      </StepCard>
      <StepCard step={4} title="Simpan file ke perangkat Anda">
        Anda akan melihat opsi: MP4 untuk video lengkap dengan suara atau MP3 bila hanya ingin audio. Pilih MP4 untuk sebagian besar klip.
        Tekan unduh dan file masuk ke folder Downloads atau galeri ponsel. Beri nama sederhana, seperti "reel_workout.mp4" sebelum menyimpan.
        Putar ulang untuk memastikan semuanya sempurna.
      </StepCard>
    </div>
  );
}
