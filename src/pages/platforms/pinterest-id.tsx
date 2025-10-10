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

export default function PinterestPageId() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Pinterest | Gratis & HD",
    description: "Unduh video Pinterest dan pin dalam format mp4, kualitas 1080p. Pengunduh dan konverter video online gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Pinterest Video
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Tempel URL video atau pin Pinterest"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fitur
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Unduh video Pinterest dengan mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Panduan sederhana untuk menyimpan klip kreatif secara offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cara mengunduh video Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Panduan langkah demi langkah yang jelas untuk menyimpan video dengan mudah
          </h2>
          <p className="text-muted-foreground mb-6">
            Mendapatkan video Pinterest ke perangkat Anda sangat mudah dengan
            videodownload.io. Ikuti empat langkah sederhana ini untuk mengunduh
            video apa pun dalam hitungan menit. Setiap langkah dirancang agar
            intuitif, bahkan jika Anda tidak paham teknologi.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Download Pinterest Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa mengunduh video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Kasus penggunaan terbaik
            </h2>
            <p className="section-muted mb-4">
              Pinterest adalah tambang emas untuk inspirasi, tetapi feednya bergerak cepat, dan pin dapat menghilang. Mengunduh memungkinkan Anda menyimpan video yang memicu ide, mengubah temuan yang cepat berlalu menjadi koleksi pribadi. Ini tentang menyimpan apa yang mendorong kreativitas atau rencana Anda, bukan hanya menimbun konten. Anda mengontrol simpanan Anda, aman dari pin yang dihapus atau gangguan aplikasi.
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
                    Simpan tutorial DIY atau panduan perjalanan untuk perjalanan tanpa Wi-Fi, seperti berkemah atau penerbangan panjang. Orang tua mengunduh video kerajinan ramah anak untuk hari hujan, menjaga anak-anak sibuk tanpa internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Menggunakan kembali untuk pembuat konten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blogger menyimpan klip dekorasi untuk diremix ke dalam konten mereka, menambahkan tips atau tweak. Bisnis kecil mengambil demo produk untuk dibagikan di platform lain, melewati watermark untuk edit yang bersih.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mengarsipkan pin Anda sendiri
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika Anda memposting video, mereka dapat menghilang dari perubahan papan atau masalah platform. Unduh mereka ke drive untuk melindungi pekerjaan Anda, seperti resep yang Anda bagikan atau portofolio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Belajar dan merencanakan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Siswa menyimpan tutorial seni atau tips belajar untuk latihan offline. Perencana acara mengunduh ide pernikahan atau pesta untuk ditunjukkan kepada klien, tidak perlu mencari lagi.
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
                    Simpan tips berkebun untuk penanaman musim semi atau rutinitas olahraga untuk penggunaan harian. Ubah pin cepat menjadi sumber daya untuk ide besar Anda berikutnya.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Mengunduh video Pinterest menawarkan fleksibilitas dan kenyamanan,
              membuatnya lebih mudah untuk menikmati konten dengan cara Anda sendiri,
              baik untuk bersenang-senang, bekerja, atau belajar.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Siapa yang harus mengunduh video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Orang yang paling diuntungkan dari mengunduh
            </h2>
            <p className="section-muted mb-4">
              Pinterest adalah tentang ide, tetapi mengunduh video cocok untuk orang yang mengubah ide menjadi tindakan. Ini untuk mereka yang menggunakan platform untuk membuat, merencanakan, atau belajar, bukan hanya menjelajah untuk bersenang-senang. Jika Anda menyimpan klip untuk membuat sesuatu yang nyata, mengunduh adalah alat Anda.
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
                    Blogger dan influencer menyimpan video DIY atau gaya untuk diremix untuk audiens mereka, seperti vlogger fashion yang mengubah tampilan dari pin. Mereka juga mengunduh posting mereka sendiri, menjaga salinan bersih tanpa logo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Penggemar dan DIYer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perajin menyimpan tutorial merajut atau melukis untuk diikuti langkah demi langkah di rumah. Tukang kebun mengunduh panduan penanaman untuk diperiksa sambil menggali. Ini adalah inspirasi praktis, offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Perencana acara dan bisnis kecil
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perencana pernikahan menyimpan klip dekorasi untuk dipresentasikan ke klien. Toko mengambil video produk untuk ditampilkan di situs web atau iklan, membangun kepercayaan tanpa watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Orang tua dan pendidik
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guru menyimpan demo kerajinan untuk proyek kelas. Ibu mengunduh video bermain sensorik untuk balita, siap untuk hari tanpa layar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pemilik rumah dan renovator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simpan tips renovasi dapur atau hack furnitur untuk merencanakan upgrade. Bahkan pengguna biasa mengunduh klip motivasi, seperti ide papan visi, untuk menjaga impian tetap fokus.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Tidak peduli peran atau gaya hidup Anda, mengunduh video Pinterest dapat
              menghemat waktu, data, dan usaha sambil menjaga konten favorit Anda tetap
              dapat diakses.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Apakah legal mengunduh video Pinterest?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Apa yang perlu Anda ketahui tentang hukum
            </h2>
            <p className="section-muted mb-4">
              Video dilindungi hak cipta oleh pembuatnya berdasarkan hukum seperti DMCA di AS. Menyimpan untuk menonton pribadi, seperti berlatih kerajinan offline, sering dihitung sebagai penggunaan wajar. Tetapi berbagi tanpa kredit atau menggunakan untuk keuntungan dapat menyebabkan masalah hukum. Musik atau sulih suara dalam video mungkin memiliki lapisan hak cipta tambahan, meskipun penyimpanan pribadi singkat jarang menghadapi masalah.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Kapan diizinkan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jika pembuat mengizinkan unduhan atau konten adalah domain publik, Anda aman. Penggunaan pendidikan, seperti menunjukkan tutorial di kelas, sering memenuhi syarat sebagai penggunaan wajar. Periksa deskripsi pin untuk izin. Simpan unduhan pribadi dan beri kredit pembuat jika Anda berbagi untuk tetap di sisi yang benar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiko yang terkait dengan mengunduh video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Bahaya potensial dan cara menghindarinya
            </h2>
            <p className="section-muted mb-4">
              Pengunduh pihak ketiga terdengar nyaman, tetapi yang mencurigakan membawa masalah nyata. Tidak setiap situs aman, dan mengklik secara membabi buta dapat merusak perangkat atau data Anda. Ketahui risikonya sebelum Anda mengunduh untuk menghindari sakit kepala nanti.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Situs yang mencurigakan menyembunyikan virus dalam file video, menyelipkan spyware atau ransomware. Satu unduhan buruk dapat mengunci file Anda atau mencuri kata sandi. Beberapa alat telah tertangkap dengan keylogger, mengubah klip kerajinan menjadi kekacauan privasi.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Penipuan Phishing">
                Halaman unduhan palsu meniru login Pinterest, mengambil kredensial Anda jika Anda tertipu. Atau iklan mendorong "pembaruan" yang menginstal pelacak, melihat aktivitas Anda di luar platform.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Masalah kualitas"
              >
                Situs buruk mengompres video, menyebabkan pemutaran terputus-putus atau audio hilang. Anda menginginkan tutorial yang jelas, tetapi mendapatkan file yang rusak sebagai gantinya.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Kebocoran privasi">
                Beberapa situs mencatat unduhan Anda, menjual IP atau pilihan video Anda kepada pengiklan. Peretas bisa mendapatkan data itu, yang mengarah ke spam atau penipuan yang ditargetkan.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Larangan Pinterest">
                Penggunaan berat alat pihak ketiga dapat menandai akun Anda, terutama untuk pembuat. Anda bisa kehilangan papan atau pengikut Anda dalam semalam.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Kelebihan penyimpanan"
              >
                Menyimpan banyak video memakan ruang, memperlambat ponsel atau drive. File yang rusak mungkin merusak pemain, membuang waktu untuk memperbaiki.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Tetap pada situs tepercaya, pindai unduhan, dan gunakan VPN untuk tetap aman.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mengapa menggunakan videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mitra tepercaya Anda untuk unduhan Pinterest
            </h2>
            <p className="section-muted mb-4">
              Kami memulai videodownload.io pada tahun 2022 karena kami muak dengan aplikasi buggy dan situs berisiko. Sebagai pengguna Pinterest, kami menginginkan cara cepat dan bersih untuk menyimpan video tanpa drama. Kami adalah tim kecil, bukan perusahaan besar, berfokus membuat unduhan mudah dan aman. Jutaan pengguna mempercayai kami tanpa pelanggaran data, dan kami terus menyesuaikan berdasarkan umpan balik mereka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Di bawah lima detik">
                Unduhan selesai bahkan di hari sibuk.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Tidak ada iklan atau pop-up">
                Hanya antarmuka sederhana.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark dihapus">
                Klip bersih, dapat digunakan.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Penyimpanan tak terbatas">
                Tidak ada batas harian.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Bekerja di perangkat apa pun">
                Dari tablet lama ke laptop baru.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Pengaturan aman">
                Tidak ada data yang disimpan setelah Anda selesai.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Pertanyaan yang sering diajukan</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pertanyaan umum tentang unduhan Pinterest
            </h2>
            <p className="section-muted mb-4">
              Kami telah menyusun jawaban untuk pertanyaan yang paling sering diajukan
              tentang menggunakan videodownload.io dan mengunduh video Pinterest untuk
              membantu Anda memulai dengan percaya diri.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya mengunduh video dari papan Pinterest pribadi?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Tidak, kami hanya mendukung pin publik. Video papan pribadi atau rahasia memerlukan izin pembuat, dan kami menghormati batas itu untuk tetap sah.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Apakah mengunduh akan memperlambat ponsel atau komputer saya?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  File kami bersih dan ringan, jadi tidak ada lag. Tetapi menyimpan banyak video dapat mengisi penyimpanan, jadi kelola ruang Anda dengan hati-hati.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Mengapa video yang diunduh saya bebas watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest menambahkan logo untuk melacak berbagi, tetapi kami menarik file mentah dan membersihkannya, memberi Anda video yang jelas untuk penggunaan pribadi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bisakah saya hanya menyimpan audio dari video Pinterest?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ya, pilih MP3 setelah menempelkan tautan. Bagus untuk mengambil musik atau sulih suara dari tutorial tanpa visual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bagaimana jika unduhan saya tidak dimulai?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pastikan tautan bersifat publik dan dimulai dengan pinterest.com. Coba browser lain atau hapus cache. Obrolan dukungan kami memperbaiki masalah dengan cepat.
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
                  Kami menangani video hingga 60 menit, meskipun sebagian besar klip Pinterest pendek. Yang lebih panjang membutuhkan sedikit waktu tetapi diunduh sepenuhnya.
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
                  Tidak sama sekali. Kami memproses secara instan dan menghapus semuanya setelahnya. File Anda tetap di perangkat Anda, bukan server kami.
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
                  Pinterest tidak memberi tahu mereka. Unduhan Anda tetap pribadi, tanpa peringatan kepada poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Mulai menyimpan video Pinterest sekarang
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dapatkan klip inspirasi Anda dalam hitungan detik
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Salin tautan pin Pinterest
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
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Pinterest Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Jelajahi lebih banyak pengunduh
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
      <FeatureCard icon={VideoIcon} title="Kualitas video terbaik">
        Simpan video Pinterest dalam resolusi terbaik mereka, hingga 1080p jika pin asli mendukungnya. Tidak ada visual buram atau warna pudar saat Anda menonton nanti. Kami menarik file langsung dari server Pinterest, menjaga setiap detail tajam untuk tutorial DIY atau klip resep itu.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Tanpa watermark atau overlay">
        <a href="https://help.pinterest.com/id/article/download-an-image">Pinterest menampilkan nama pengguna pembuat pada video yang diunduh melalui aplikasi mereka</a>, mengacaukan tampilan. Kami menghapus semua itu, memberikan klip bersih yang siap untuk proyek atau penggunaan pribadi Anda. Tonton ide dekorasi rumah itu tanpa teks menghalangi detail.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Bekerja di perangkat apa pun">
        Gunakan ponsel, tablet, laptop, atau desktop Anda, dan berjalan dengan lancar. Tidak perlu aplikasi atau perangkat lunak tambahan. Cukup buka situs kami di browser Anda, tempel tautan, dan unduh. Diuji pada segala hal dari iPhone lama hingga PC baru, selalu tanpa hambatan.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Kecepatan unduh cepat">
        Menunggu menyebalkan. Alat kami mengambil video Pinterest dalam hitungan detik, biasanya di bawah 10 untuk sebagian besar klip. Kami menggunakan server dekat Pinterest untuk tarikan cepat, sehingga Anda dapat menyimpan video kerajinan atau rutinitas olahraga selama istirahat kopi.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Sepenuhnya gratis untuk digunakan">
        Tidak ada biaya, tidak ada pendaftaran, tidak ada biaya tersembunyi. Unduh sebanyak mungkin video yang Anda inginkan, setiap hari, tanpa batas. Kami membuatnya gratis sehingga Anda dapat menyimpan inspirasi pernikahan atau klip proyek seni tanpa terkena paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proses aman dan pribadi">
        Info Anda tetap aman. Kami tidak menyimpan tautan atau video Anda setelah Anda mengunduh. Tidak ada pelacakan, tidak ada log, dan tidak ada iklan spam. Prosesnya bersih, menjaga perangkat Anda bebas dari sampah atau risiko.
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
      <StepCard step={1} title="Salin tautan video dari Pinterest">
        <a href="http://www.pinterest.com">Buka Pinterest</a> di ponsel atau browser Anda. Temukan video yang Anda sukai, seperti tutorial merajut atau klip renovasi rumah. Klik tiga titik di kanan atas pin. Dari menu, pilih "Salin tautan". Ini mengambil URL lengkap, sesuatu seperti pinterest.com/pin/123456789. Pastikan itu tepat.
      </StepCard>
      <StepCard step={2} title="Tempel tautan ke situs kami">
        Buka videodownload.io di browser Anda. Anda akan melihat kotak berlabel "Tempel tautan Pinterest di sini". Klik di dalam dan tempel tautan yang disalin. Periksa bahwa itu dimulai dengan pinterest.com untuk menghindari kesalahan. Hanya pin publik yang berfungsi; video papan pribadi atau rahasia tidak akan diunduh.
      </StepCard>
      <StepCard step={3} title="Kami mengambil dan membersihkan video">
        Klik tombol "Unduh" hijau di sebelah kotak. Sistem kami menarik video dari server Pinterest dalam hitungan detik. Kami menghapus watermark apa pun dan memastikan kualitasnya solid. Audio tetap jelas, jadi Anda tidak melewatkan langkah dalam resep atau panduan kerajinan itu.
      </StepCard>
      <StepCard step={4} title="Simpan klip ke perangkat Anda">
        Anda akan mendapatkan opsi: MP4 untuk video lengkap dengan suara atau MP3 hanya untuk audio. Pilih MP4 untuk sebagian besar klip. Ketuk untuk mengunduh, dan itu menyimpan ke folder Unduhan atau galeri ponsel Anda. Beri nama sesuatu yang jelas, seperti "diy_paint.mp4", sebelum menyimpan. Putar untuk mengonfirmasi itu sempurna.
      </StepCard>
    </div>
  );
}
