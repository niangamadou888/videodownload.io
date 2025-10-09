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

export default function PinterestPageDe() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Pinterest Video Herunterladen | Kostenlos & HD",
    description:
      "Lade Pinterest-Videos und Pins als mp4 in 1080p herunter. Kostenloser Online-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimale Download-Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Pinterest Video Herunterladen
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Füge die URL eines Pinterest-Videos oder Pins ein"
            />
          </div>
          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Pinterest-Videos mühelos speichern
          </h2>
          <p className="text-muted-foreground mb-6">
            Dein schneller Leitfaden, um kreative Clips offline verfügbar zu machen
          </p>

          <EnhancedFeatures />

          {/* Anleitung */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du Pinterest-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Schritt für Schritt – in wenigen Minuten zum Download
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io sind deine Pinterest-Videos im Handumdrehen auf deinem Gerät. Folge vier einfachen Schritten –
            auch ohne Technik-Know-how – und speichere jeden Clip ohne Aufwand.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Pinterest-Video herunterladen
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Pinterest-Videos herunterladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die besten Einsatzszenarien
            </h2>
            <p className="section-muted mb-4">
              Pinterest liefert massenhaft Inspiration, doch Pins geraten schnell in Vergessenheit. Durch Downloads behältst du
              genau die Videos, die Ideen auslösen, und baust dir ein persönliches Archiv auf. Es geht nicht ums Horten, sondern
              ums Sichern dessen, was deine Kreativität oder Projekte voranbringt – geschützt vor gelöschten Pins oder App-Fehlern.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline ansehen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichere DIY-Anleitungen oder Reisetipps für Orte ohne Internet – im Zug, im Flugzeug oder auf Campingtrips.
                    Eltern sammeln kreative Videos für verregnete Nachmittage ohne Bildschirme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content wiederverwenden
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blogger:innen sichern Deko- oder Styling-Clips, um sie mit eigenen Tipps zu versehen. Kleine Shops nutzen
                    Produktvideos für andere Kanäle – ohne störende Wasserzeichen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigene Pins sichern
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn du Rezepte, Tutorials oder Portfolio-Clips teilst, können Änderungen an Boards sie verschwinden lassen.
                    Lade deine Videos herunter, bevor sie verloren gehen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen & planen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studierende speichern Kunst-Tutorials oder Lern-Tipps für Offline-Übungen. Eventplaner zeigen Deko-Ideen
                    jederzeit im Kundengespräch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigene Projekte umsetzen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lege Anbaupläne für den Garten ab oder sichere Trainingsroutinen. So hast du deine Inspiration immer griffbereit
                    für das nächste Vorhaben.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von Pinterest-Videos gibt dir Flexibilität und Komfort – du bestimmst, wann und wie du deine
              Inspiration nutzt.
            </p>
          </div>

          {/* Zielgruppe */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer profitiert am meisten?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nutzergruppen mit den größten Vorteilen
            </h2>
            <p className="section-muted mb-4">
              Pinterest richtet sich an alle, die Ideen in Taten umsetzen. Wenn du Pins als Werkzeug betrachtest – zum Kreieren,
              Planen oder Lernen – wird ein Downloader unverzichtbar.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content-Creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creator:innen sichern DIY- oder Modevideos und geben ihnen ihren eigenen Dreh. Sie behalten zudem saubere Kopien
                    ihrer eigenen Clips.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobby-Bastler:innen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Handarbeits- und DIY-Fans laden Schritt-für-Schritt-Anleitungen herunter, um sie am Basteltisch parat zu haben.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eventplaner & kleine Unternehmen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hochzeitsplaner zeigen abgespeicherte Ideen direkt im Beratungsgespräch. Shops nutzen Produktvideos für ihre
                    Social-Media-Feeds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eltern & Pädagog:innen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lehrkräfte sichern Bastelideen für Projekte im Unterricht. Eltern laden Aktivitäten für Kinder herunter,
                    perfekt für bildschirmfreie Nachmittage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hausbesitzer:innen & Renovierer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewahre Wohnideen, Möbel-Hacks oder Renovierungstipps, um sie beim nächsten Projekt griffbereit zu haben.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Egal ob Creator, Planer oder Hobbyist – mit Downloads bleibt deine Pinterest-Inspiration jederzeit abrufbar.
            </p>
          </div>

          {/* Rechtliches */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, Pinterest-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was du über Urheberrecht wissen musst
            </h2>
            <p className="section-muted mb-4">
              Pinterest-Videos sind urheberrechtlich geschützt. Der Download zur privaten Nutzung – etwa zum Lernen offline –
              fällt häufig unter Fair Use. Das Teilen ohne Zustimmung oder die kommerzielle Nutzung kann jedoch rechtliche Folgen
              haben. Audiospuren können zusätzliche Rechte beinhalten.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wann es erlaubt ist
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gibt der Creator eine Erlaubnis oder ist das Material gemeinfrei, bist du auf der sicheren Seite. Im Bildungs-
                    oder Trainingskontext wird das Zeigen kurzer Clips meist toleriert. Bleib beim privaten Gebrauch und nenne die
                    Quelle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Download von Pinterest-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mögliche Gefahren und wie du sie vermeidest
            </h2>
            <p className="section-muted mb-4">
              Nicht alle Downloader sind vertrauenswert. Einige Seiten bringen Malware oder Datendiebstahl mit sich. Achte deshalb
              auf die Quelle, bevor du Videos herunterlädst.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware & Viren">
                Unseriöse Plattformen verstecken Schadsoftware in Downloads. Ein falscher Klick kann Passwörter preisgeben oder
                Dateien verschlüsseln.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Gefälschte Logins sammeln deine Zugangsdaten. Aggressive Pop-ups für vermeintliche Updates installieren Tracker.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Schlechte Qualität">
                Schlechte Tools komprimieren, wodurch Bild und Ton leiden. Statt eines klaren Tutorials erhältst du ein ruckelndes
                Video.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenlecks">
                Manche Dienste protokollieren Downloads und verkaufen IP oder Interessen. Das kann zu Spam oder Betrugsversuchen
                führen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Pinterest-Sperren">
                Intensive Nutzung von Dritt-Tools kann den Account markieren, especially für Creator.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Speicherprobleme">
                Viele Downloads füllen den Speicher und verlangsamen Geräte. Beschädigte Dateien lassen Player abstürzen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze vertrauenswürdige Seiten, scanne Downloads und nutze bei Bedarf eine VPN-Verbindung.
            </p>
          </div>

          {/* Warum videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein zuverlässiger Partner für Pinterest-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gegründet, weil wir schnelle und sichere Downloads wollten. Als Pinterest-Fans
              wollten wir unsere Inspiration ohne Risiko speichern. Unser kleines Team hält den Prozess schlank und sicher –
              bewiesen durch Millionen Nutzer:innen ohne Datenpannen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Schnelle Downloads">
                Unter fünf Sekunden – sogar in Stoßzeiten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werbefrei">
                Keine Pop-ups, keine Ablenkungen.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Ohne Wasserzeichen">
                Saubere Clips für direkte Nutzung.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unlimitiert">
                Kein tägliches Limit oder versteckte Kosten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geräteunabhängig">
                Funktioniert vom alten Laptop bis zum Smartphone.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicher">
                Wir speichern keine Daten nach dem Download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufige Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Alles zum Thema Pinterest-Download
            </h2>
            <p className="section-muted mb-4">
              Hier beantworten wir die wichtigsten Fragen rund um videodownload.io und das Herunterladen von Pinterest-Videos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich Videos von geheimen Pinnwänden herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, nur öffentliche Pins werden unterstützt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wird mein Gerät langsamer durchs Herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Unsere Dateien sind sauber und kompakt. Achte lediglich auf deinen freien Speicher.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum hat mein Download kein Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir liefern die Originalversion ohne zusätzliche Kennzeichnung.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wähle den MP3-Download nachdem du den Link eingefügt hast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was tun, wenn der Download fehlschlägt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Stelle sicher, dass die URL öffentlich und vollständig ist. Versuch einen anderen Browser oder leere den Cache.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es Längenbeschränkungen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir unterstützen Videos bis zu 60 Minuten. Längere Clips dauern etwas länger, werden aber vollständig geladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr die heruntergeladenen Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein. Nach Abschluss des Downloads wird alles gelöscht.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Sieht der Creator, dass ich den Clip heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest informiert Creator nicht über Downloads. Alles bleibt privat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Starte jetzt mit Pinterest-Downloads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Sicher dir inspirierende Clips in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pinterest-Link kopieren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                In unser Formular einfügen
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sauberes Video herunterladen
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Pinterest-Video herunterladen
                </Button>
              </a>
            </div>
          </div>

          {/* Weitere Downloader */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Entdecke weitere Downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lade Inhalte von deinen Lieblingsplattformen
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
                  hex: "##0A66C2",
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
                        Descargar video de {p.name}
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
  icon: ComponentType<{ className?
: string }>;
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
      <FeatureCard icon={VideoIcon} title="Erstklassige Videoqualität">
        Speichern Sie Pinterest-Videos in bester Auflösung, bis zu 1080p, wenn der ursprüngliche Pin dies unterstützt. Keine verschwommenen Bilder oder verblassten Farben beim späteren Ansehen. Wir ziehen die Datei direkt von Pinterests Servern und halten jedes Detail scharf für dieses DIY-Tutorial oder Rezept-Clip.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Keine Wasserzeichen oder Overlays">
        <a href="https://help.pinterest.com/de/article/download-an-image">Pinterest zeigt den Benutzernamen des Erstellers auf über die App heruntergeladenen Videos an</a>, was die Ansicht überladen macht. Wir entfernen all das und liefern einen sauberen Clip, der für Ihre Projekte oder den persönlichen Gebrauch bereit ist. Sehen Sie sich diese Wohndekor-Idee an, ohne dass Text die Details blockiert.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
        Verwenden Sie Ihr Telefon, Tablet, Laptop oder Desktop, und es läuft reibungslos. Keine Apps oder zusätzliche Software erforderlich. Öffnen Sie einfach unsere Website in Ihrem Browser, fügen Sie den Link ein und laden Sie herunter. Getestet auf allem von alten iPhones bis zu neuen PCs, es ist immer problemlos.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Download-Geschwindigkeiten">
        Warten nervt. Unser Tool holt Pinterest-Videos in Sekunden, normalerweise unter 10 für die meisten Clips. Wir verwenden Server in der Nähe von Pinterest für schnelle Abrufe, sodass Sie ein Bastel-Video oder eine Trainingsroutine während einer Kaffeepause speichern können.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Völlig kostenlos zu nutzen">
        Keine Kosten, keine Anmeldungen, keine versteckten Gebühren. Laden Sie so viele Videos herunter, wie Sie möchten, jeden Tag, ohne Grenzen. Wir halten es kostenlos, damit Sie diese Hochzeitsinspiration oder Kunstprojekt-Clip ohne Paywall speichern können.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicherer und privater Prozess">
        Ihre Informationen bleiben sicher. Wir speichern Ihre Links oder Videos nach dem Download nicht. Kein Tracking, keine Protokolle und keine Spam-Werbung. Der Prozess ist sauber und hält Ihr Gerät frei von Müll oder Risiken.
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
      <StepCard step={1} title="Kopieren Sie den Videolink von Pinterest">
        <a href="http://www.pinterest.com">Öffnen Sie Pinterest</a> auf Ihrem Telefon oder Browser. Finden Sie das Video, das Sie lieben, wie ein Stricktutorial oder einen Hausumbau-Clip. Klicken Sie auf die drei Punkte oben rechts am Pin. Wählen Sie im Menü "Link kopieren". Dies erfasst die vollständige URL, etwa pinterest.com/pin/123456789. Stellen Sie sicher, dass sie genau ist.
      </StepCard>
      <StepCard step={2} title="Fügen Sie den Link auf unserer Website ein">
        Gehen Sie zu videodownload.io in Ihrem Browser. Sie sehen ein Feld mit der Beschriftung "Pinterest-Link hier einfügen". Klicken Sie hinein und fügen Sie den kopierten Link ein. Überprüfen Sie, ob er mit pinterest.com beginnt, um Fehler zu vermeiden. Nur öffentliche Pins funktionieren; private oder geheime Board-Videos werden nicht heruntergeladen.
      </StepCard>
      <StepCard step={3} title="Wir holen und bereinigen das Video">
        Klicken Sie auf die grüne "Download"-Schaltfläche neben dem Feld. Unser System zieht das Video in Sekunden von Pinterests Servern. Wir entfernen alle Wasserzeichen und stellen sicher, dass die Qualität solide ist. Der Ton bleibt klar, sodass Sie keine Schritte in diesem Rezept oder Bastelführer verpassen.
      </StepCard>
      <StepCard step={4} title="Speichern Sie den Clip auf Ihrem Gerät">
        Sie erhalten Optionen: MP4 für das vollständige Video mit Ton oder MP3 nur für den Ton. Wählen Sie MP4 für die meisten Clips. Tippen Sie zum Herunterladen, und es wird in Ihrem Downloads-Ordner oder der Galerie Ihres Telefons gespeichert. Benennen Sie es klar, wie "diy_paint.mp4", bevor Sie speichern. Spielen Sie es ab, um zu bestätigen, dass es perfekt ist.
      </StepCard>
    </div>
  );
}
