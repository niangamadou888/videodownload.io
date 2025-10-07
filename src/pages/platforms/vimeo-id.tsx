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

export default function VimeoPageID() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Unduh Video Vimeo | Gratis & HD",
    description: "Unduh video Vimeo dalam format MP4 dengan kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Kotak unduhan minimalis */}
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video Vimeo"
            />
          </div>
          {/* Fitur */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh video Vimeo dengan mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan sederhana untuk menyimpan klip kreatif secara offline
          </p>

          <EnhancedFeatures />

          {/* Cara mengunduh */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan langkah demi langkah agar video tersimpan tanpa repot
          </h2>
          <p className="text-muted-foreground mb-6">
            Bersama videodownload.io, memindahkan video Vimeo ke perangkat Anda jadi super cepat.
            Ikuti empat langkah singkat ini dan dapatkan video favorit hanya dalam beberapa menit.
            Setiap tahap dibuat agar tetap intuitif, bahkan bila Anda tidak terlalu paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Unduh video Vimeo
              </Button>
            </a>
          </div>

          {/* Mengapa mengunduh */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Skenario penggunaan terbaik
            </h2>
            <p className="section-muted mb-4">
              Vimeo dipenuhi konten kreatif dan profesional, namun video bisa hilang atau dihapus kapan saja. Dengan mengunduh, Anda dapat menyimpan klip yang menginspirasi atau mengedukasi, menjadikannya koleksi pribadi. Fokusnya adalah menyimpan hal yang mendukung proyek atau passion, bukan sekadar menumpuk video. Anda tetap memegang kendali atas arsip Anda, aman dari penghapusan atau perubahan platform.
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
                    Simpan tutorial filmmaking atau wawancara seniman untuk perjalanan tanpa Wi-Fi, seperti penerbangan atau syuting di lokasi terpencil. Pelajar bisa mengunduh video pembelajaran untuk ditonton ulang kapan saja tanpa internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Re-purpose untuk kreator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pembuat film menyimpan film pendek untuk mempelajari teknik atau mengolahnya ke proyek baru. Marketer mengunduh konten brand untuk diadaptasi ke platform lain tanpa watermark yang mengganggu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mengarsipkan unggahan sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika Anda mengunggah video ke Vimeo, konten bisa lenyap karena masalah akun atau pembaruan platform. Unduh ke penyimpanan lokal untuk melindungi karya, baik itu portofolio pribadi maupun proyek klien.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan mencari inspirasi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Desainer menyimpan tutorial motion graphics untuk berlatih offline. Guru mengunduh materi kreatif untuk dibawa ke kelas tanpa bergantung koneksi internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proyek pribadi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan video musik atau pertunjukan seni untuk ditonton ulang saat butuh motivasi. Temuan kecil di Vimeo bisa jadi referensi berharga untuk ide atau pitch profesional berikutnya.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Vimeo memberi keluwesan dan kemudahan,
              sehingga Anda bisa menikmati konten sesuai kebutuhan, baik untuk hiburan,
              pekerjaan, maupun pembelajaran.
            </p>
          </div>

          {/* Siapa yang perlu mengunduh */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang sebaiknya mengunduh video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang paling diuntungkan dari download
            </h2>
            <p className="section-muted mb-4">
              Vimeo adalah rumah bagi seniman dan profesional, tetapi mengunduh cocok untuk siapa pun yang memanfaatkan platform ini demi berkarya, belajar, atau berkembang. Ini untuk mereka yang memandang video sebagai alat, inspirasi, atau kenangan, bukan sekadar tontonan singkat. Jika Anda aktif di Vimeo dan ingin mempertahankan yang penting, unduhan adalah solusi tepat.
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
                    Sutradara dan animator menyimpan tutorial atau showreel untuk dipelajari atau diedit ulang. Mereka juga mengunduh unggahan sendiri agar tetap punya versi bersih tanpa logo untuk portofolio atau editing.
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
                    Guru seni menyimpan demo animasi untuk dibahas di kelas. Siswa mengunduh tips filmmaking atau pelajaran desain agar bisa menonton ulang tanpa login.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profesional dan bisnis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tim pemasaran mengunduh video brand untuk diolah menjadi iklan atau materi situs. Freelancer menyimpan pitch klien sebagai arsip atau bahan kirim ulang tanpa watermark mengganggu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar dan kreator hobi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fotografer menyimpan tutorial pencahayaan untuk dicoba di rumah. Musisi mengunduh penampilan live untuk mempelajari tata panggung dan latihan secara offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pengguna kasual
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan film pendek teman atau video motivasi untuk dibagikan nanti. Bahkan penggemar biasa pun mengunduh pertunjukan seni sebagai referensi proyek pribadi atau moodboard.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Apa pun peran Anda, mengunduh video Vimeo menghemat waktu, kuota, dan tenaga sambil membuat konten favorit tetap mudah dijangkau.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah legal mengunduh video Vimeo?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Fakta hukum yang perlu Anda ketahui
            </h2>
            <p className="section-muted mb-4">
              Mengunduh video Vimeo masih berada di area abu-abu. Aturan Vimeo <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">memungkinkan unduhan video publik langsung dari situs</a> untuk pemakaian pribadi jika kreator tidak menonaktifkan opsi tersebut. Menggunakan alat pihak ketiga seperti milik kami melanggar ketentuan dan bisa menandai akun Anda, meski jarang sampai diblokir kecuali Anda mengunduh berlebihan atau mengunggah ulang tanpa izin.
            </p>
            <p className="section-muted mb-4">
              Video dilindungi hak cipta berdasarkan regulasi seperti DMCA di AS. Menyimpan untuk konsumsi pribadi, misalnya mempelajari tutorial secara offline, sering dianggap fair use. Namun membagikan tanpa kredit atau memakai untuk tujuan komersial bisa memicu masalah hukum. Musik atau voice-over di dalam video mungkin juga memiliki hak terpisah, walaupun unduhan pribadi singkat jarang diperkarakan.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Saat diizinkan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika kreator membuka akses unduhan atau konten berada di domain publik, Anda aman. Penggunaan edukatif—seperti menampilkan video di kelas—sering masuk fair use. Cek keterangan untuk mengetahui izin. Simpan video secara privat dan cantumkan sumber ketika membagikan agar tetap aman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiko */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko saat mengunduh video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya potensial dan cara menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Pengunduh pihak ketiga memang terlihat praktis, tetapi situs yang meragukan membawa risiko nyata. Tidak semua situs dapat dipercaya dan satu klik sembarangan bisa merusak perangkat atau data Anda. Kenali risiko sejak awal agar terhindar dari masalah.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware">
                Situs tidak aman bisa menyelipkan virus ke dalam file video dan memasang spyware atau ransomware. Satu unduhan salah dapat mengunci berkas penting atau mencuri kata sandi. Beberapa alat bahkan kedapatan memuat keylogger sehingga video lucu berujung kebocoran data.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Halaman palsu meniru login Vimeo dan mencuri kredensial saat Anda memasukkannya. Iklan juga bisa memaksa Anda memasang "pembaruan" yang sebenarnya adalah pelacak aktivitas.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kualitas turun">
                Platform abal-abal mengompres video secara berlebihan, membuat gambar tersendat atau audio hilang. Anda berharap tutorial jelas, malah dapat file rusak.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran privasi">
                Beberapa situs mencatat unduhan Anda lalu menjual IP atau preferensi tontonan kepada pengiklan. Peretas bisa mencuri data tersebut dan membombardir Anda dengan spam atau penipuan tertarget.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban dari Vimeo">
                Pemakaian alat eksternal berlebihan dapat menandai akun Anda, terutama jika Anda kreator. Akun atau unggahan bisa hilang dalam semalam.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Penyimpanan penuh">
                Terlalu banyak video menghabiskan ruang dan memperlambat ponsel maupun drive. File korup bisa membuat pemutar crash dan memakan waktu untuk diperbaiki.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gunakan situs tepercaya, pindai file yang diunduh, dan pertimbangkan VPN untuk menjaga keamanan.
            </p>
          </div>

          {/* Mengapa videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa memakai videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Partner tepercaya untuk download Vimeo
            </h2>
            <p className="section-muted mb-4">
              Kami meluncurkan videodownload.io pada 2022 karena lelah dengan aplikasi lambat dan situs berisiko. Sebagai pengguna Vimeo, kami ingin cara yang cepat, bersih, dan aman untuk menyimpan video. Kami tim kecil, bukan korporasi besar, dan fokus menciptakan pengalaman unduh yang mudah serta terlindungi. Jutaan pengguna mempercayai kami tanpa kebocoran data, dan kami terus memperbaiki layanan lewat masukan mereka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Di bawah lima detik">
                Unduhan selesai meski trafik sedang ramai.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tanpa iklan atau pop-up">
                Antarmuka bersih dan fokus.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Tanpa watermark">
                Clip bersih siap digunakan.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Tanpa batas harian">
                Bebas mengunduh sebanyak yang Anda mau.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Berjalan di semua perangkat">
                Mulai dari ponsel lawas hingga laptop terbaru.
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
              Pertanyaan populer tentang download Vimeo
            </h2>
            <p className="section-muted mb-4">
              Kami mengumpulkan jawaban atas pertanyaan yang paling sering muncul seputar penggunaan
              videodownload.io dan pengunduhan video Vimeo agar Anda bisa mulai dengan tenang.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video Vimeo privat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, kami hanya mendukung video publik. Konten privat atau yang dilindungi sandi membutuhkan izin kreator dan kami menghormati batasan tersebut.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah unduhan membuat perangkat jadi lambat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File kami ringan dan bersih, jadi tidak menyebabkan lag. Namun terlalu banyak menyimpan video bisa memenuhi memori, jadi pantau ruang penyimpanan Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video yang saya unduh bebas watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo menambahkan logo untuk melacak distribusi, tetapi kami mengambil file mentah dan membersihkannya supaya Anda mendapat video jernih untuk penggunaan pribadi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah hanya audionya saja yang disimpan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Bisa, pilih MP3 setelah menempelkan tautan. Cocok untuk mengambil musik atau voice-over tanpa visual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bagaimana kalau unduhan tidak dimulai?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pastikan tautan bersifat publik dan diawali vimeo.com. Coba browser lain atau hapus cache. Tim dukungan kami siap membantu lewat chat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah ada batas durasi video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Kami dapat mengunduh video hingga 60 menit, meski panjang video di Vimeo beragam. Video yang lebih lama mungkin memakan sedikit waktu ekstra namun tetap selesai utuh.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kalian menyimpan video yang saya unduh?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sama sekali tidak. Semua diproses instan lalu dihapus. File hanya tersimpan di perangkat Anda sendiri.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah kreator tahu jika saya mengunduh videonya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo tidak mengirimkan notifikasi. Unduhan Anda tetap privat tanpa pemberitahuan ke kreator.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Mulai sekarang */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai simpan video Vimeo hari ini
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan klip favorit dalam hitungan detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin tautan video Vimeo
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
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Unduh video Vimeo
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
      <FeatureCard icon={VideoIcon} title="Kualitas tinggi tanpa kompromi">
        Simpan video Vimeo dalam resolusi terbaik, hingga 1080p atau lebih jika unggahan asli mendukungnya. Tidak ada gambar pecah atau warna pudar saat diputar ulang. Kami mengambil file langsung dari server Vimeo agar setiap frame tetap tajam.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Bebas watermark dan logo">
        Vimeo menyisipkan logo pada video yang disimpan lewat aplikasinya, membuat layar penuh tulisan. Kami menghapus semuanya sehingga Anda mendapatkan klip bersih siap diedit atau ditonton.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Berfungsi di semua perangkat">
        Gunakan ponsel, tablet, laptop, atau desktop—semuanya berjalan mulus. Tidak perlu aplikasi atau software tambahan. Cukup buka situs kami, tempel tautan, lalu unduh.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan unduh tinggi">
        Menunggu itu membosankan. Alat kami mengambil video Vimeo dalam hitungan detik, biasanya di bawah sepuluh detik untuk kebanyakan klip. Server kami ditempatkan dekat dengan infrastruktur Vimeo agar prosesnya kilat.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Benar-benar gratis">
        Tanpa biaya, tanpa pendaftaran, tanpa batas tersembunyi. Unduh sebanyak yang Anda mau setiap hari tanpa hambatan.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses aman dan privat">
        Data Anda tetap terlindungi. Kami tidak menyimpan tautan maupun video setelah selesai. Tidak ada pelacakan, log, ataupun iklan mengganggu.
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
      <StepCard step={1} title="Salin tautan video dari Vimeo">
        <a href="http://www.vimeo.com">Buka Vimeo</a> di ponsel atau browser Anda. Temukan video favorit, entah tips filmmaking atau animasi kreatif. Klik ikon bagikan—biasanya bentuk pesawat kertas—di sisi video dan pilih "Copy link". Pastikan URL lengkap, misalnya vimeo.com/123456789.
      </StepCard>
      <StepCard step={2} title="Tempel tautan ke alat kami">
        Kunjungi videodownload.io. Pada kotak "Tempel link Vimeo di sini", tempel tautan yang sudah disalin. Pastikan diawali vimeo.com untuk menghindari error. Hanya video publik yang bisa diunduh; konten privat atau berpagar sandi tidak akan diproses.
      </StepCard>
      <StepCard step={3} title="Kami ambil dan bersihkan videonya">
        Tekan tombol hijau "Unduh" di samping kotak. Sistem kami mengambil video dari server Vimeo dalam hitungan detik, menghapus watermark, dan menjaga kualitas audio maupun visual.
      </StepCard>
      <StepCard step={4} title="Simpan klip ke perangkat Anda">
        Pilih format yang diinginkan: MP4 untuk video lengkap dengan audio atau MP3 jika hanya butuh suaranya. Umumnya gunakan MP4. Setelah unduhan selesai, file berada di folder Downloads atau galeri. Ubah namanya agar mudah ditemukan, misalnya "film_tutorial.mp4", lalu putar untuk memastikan semuanya lancar.
      </StepCard>
    </div>
  );
}
