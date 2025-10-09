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

export default function ThreadsPageDE() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Threads Video Download | Kostenlos & HD",
    description: "Lade Threads-Videos und -Posts in MP4, 1080p-Qualität herunter. Kostenloser Online-Video-Downloader und -Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Threads Video Herunterladen
          </h1>
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Füge die URL eines Threads-Videos oder -Posts ein"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Threads-Videos schnell herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Dein einfacher Leitfaden, um Clips offline zu speichern
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du Threads-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine klare Schritt-für-Schritt-Anleitung, um Videos mühelos zu sichern
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io holst du Threads-Videos ganz einfach auf dein Gerät.
            Folge diesen vier einfachen Schritten und lade in wenigen Minuten jedes Video herunter.
            Jeder Schritt ist intuitiv, selbst wenn du kein Technikprofi bist.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Threads-Video herunterladen
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Threads-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die besten Anwendungsfälle
            </h2>
            <p className="section-muted mb-4">
              Threads bewegt sich rasant, neue Gespräche verdrängen Posts im Sekundentakt. Durch das Herunterladen behältst du Videos, die dich begeistern, und machst aus kurzem Scrollen dein persönliches Archiv. Es geht darum, das zu sichern, was Freude bereitet, informiert oder inspiriert – nicht um zufällige Clips. Du behältst die Kontrolle über deine Sammlung, unabhängig von gelöschten Posts oder App-Änderungen.
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
                    Speichere Reisetipps oder Workout-Clips für Flüge, Pendelwege oder Orte mit schlechtem WLAN. Eltern laden kinderfreundliche Sketche oder Lieder für Autofahrten herunter, damit die Kleinen ohne Buffering zufrieden sind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Wiederverwendung für Creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencer schnappen virale Clips, um sie in eigene Inhalte einzubauen und ihren Stil hinzuzufügen. Blogger speichern Mode- oder Food-Videos für andere Plattformen, ohne Wasserzeichen für saubere Schnitte.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigene Posts archivieren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn du Videos auf Threads teilst, können sie durch Konto-Probleme oder Plattform-Updates verschwinden. Lade sie auf eine Festplatte, um deine Arbeit zu schützen – ob persönlicher Vlog oder Markenpromo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen und Inspiration
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studierende sichern Lerntricks oder Motivationsreden für den Offline-Abruf. Hobbyistinnen und Hobbyisten laden DIY-Tipps oder Kunst-Demos herunter, um in ihrem Tempo zu üben, ohne erneut suchen zu müssen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Momente teilen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichere das Life-Update einer Freundin oder einen witzigen Clip, um ihn später in der Gruppe zu teilen. So bleiben Erinnerungen erhalten, ohne dass du auf die App angewiesen bist.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von Threads-Videos schafft Flexibilität und Komfort
              und lässt dich Inhalte zu deinen Bedingungen genießen – ob für Spaß,
              Arbeit oder Lernen.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer Threads-Videos herunterladen sollte
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menschen, die am meisten profitieren
            </h2>
            <p className="section-muted mb-4">
              Threads ist ein Zentrum für schnelle, persönliche Inhalte, aber das Herunterladen passt zu allen, die damit gestalten, lernen oder verbunden bleiben. Es richtet sich an alle, die Posts als mehr sehen als flüchtige Unterhaltung und Clips als Werkzeuge oder Erinnerungen nutzen. Wenn du auf Threads aktiv bist und behalten willst, was zählt, ist Herunterladen die richtige Wahl.
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
                    Influencer und Vlogger sichern Trend-Clips, um sie für ihr Publikum neu zu schneiden – etwa ein Beauty-Guru, der ein Tutorial anpasst. Sie laden auch ihre eigenen Posts herunter, um saubere Versionen ohne Logos für Bearbeitungen zu behalten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobby und Lernen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fitness-Fans speichern Workout-Clips für das Training im Studio. Bastler laden DIY-Demos herunter, um sie zu Hause auszuprobieren. Praktische Inspiration immer offline griffbereit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studierende und Lehrkräfte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lehrkräfte speichern Motivationsreden für den Unterricht. Studierende holen sich Lerntipps oder Sprachlektionen, um sie ohne erneutes Einloggen zu wiederholen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familien und Gelegenheitsnutzer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eltern speichern lustige Kinderclips oder Familien-Updates, um sie bei Treffen zu zeigen. Freundeskreise laden virale Memes herunter, um später gemeinsam zu lachen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    kleine Unternehmen und Marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Shops sichern Kunden-Posts, um sie auf Websites zu zeigen. Social-Media-Profis sammeln Trend-Clips zur Analyse oder Wiederverwendung und halten so ihre Inhalte frisch.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Egal welche Rolle oder welchen Lifestyle du hast: Threads-Videos herunterzuladen spart Zeit, Daten und Aufwand und hält deine Lieblingsinhalte griffbereit.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, Threads-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Das musst du über die Rechtslage wissen
            </h2>
            <p className="section-muted mb-4">
              Videos sind durch ihre Creator urheberrechtlich geschützt, etwa nach dem <a href="https://de.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> in den USA. Das Speichern für private Nutzung, zum Beispiel um einen Clip offline zu schauen, gilt oft als Fair Use. Doch Teilen ohne Erlaubnis oder kommerzielle Nutzung kann rechtliche Folgen haben. Musik oder Voice-over in Videos können zusätzliche Rechte besitzen, auch wenn kurze private Sicherungen selten Probleme machen.
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
                    Wenn Creator Downloads erlauben oder Inhalte gemeinfrei sind, bist du auf der sicheren Seite. Bildungszwecke, etwa ein Clip im Unterricht, fallen häufig unter Fair Use. Prüfe Captions auf Hinweise zur Nutzung. Halte Downloads privat und nenne Creator beim Teilen, um sicher zu bleiben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von Threads-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mögliche Gefahren und wie du sie vermeidest
            </h2>
            <p className="section-muted mb-4">
              Drittanbieter-Downloader wirken bequem, aber dubiose Seiten bringen echte Probleme. Nicht jede Plattform ist vertrauenswürdig, und unbedachte Klicks gefährden Gerät oder Daten. Kenn die Risiken im Voraus, um Ärger zu vermeiden.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Unseriöse Seiten verstecken Viren in Videodateien und schleusen Spyware oder Ransomware ein. Ein falscher Download kann deine Dateien sperren oder Passwörter stehlen. Manche Tools wurden mit Keyloggern erwischt – aus einem Meme wird schnell ein Datenleck.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Betrug">
                Fake-Downloadseiten imitieren den Threads-Login und greifen deine Zugangsdaten ab, wenn du sie eingibst. Oder Werbeanzeigen locken mit "Updates", die Tracker installieren und deine Aktivitäten überwachen.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Qualitätsverlust"
              >
                Schlechte Seiten komprimieren Videos, was zu ruckelnder Wiedergabe oder fehlendem Ton führt. Statt eines klaren Tutorials erhältst du eine fehlerhafte Datei.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-Leaks">
                Manche Seiten protokollieren deine Downloads und verkaufen IP oder Videoauswahl an Werbetreibende. Hacker könnten diese Daten abgreifen, was zu Spam oder gezielten Betrugsversuchen führt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Threads-Sperren">
                Häufige Nutzung von Drittanbieter-Tools kann dein Konto markieren, besonders bei Creator-Accounts. Im schlimmsten Fall verlierst du Profil oder Follower über Nacht.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Speicherüberlast"
              >
                Viele Videos fressen Speicherplatz und bremsen Handy oder Festplatte. Beschädigte Dateien können Player abstürzen lassen und kosten Zeit bei der Fehlerbehebung.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze vertrauenswürdige Seiten, scanne Downloads und erwäge VPNs, um sicher zu bleiben.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io nutzen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein vertrauenswürdiger Partner für Threads-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gestartet, weil uns zwielichtige Tools und langsame Apps genervt haben. Als Threads-User wollten wir eine schnelle, saubere Lösung, um Videos ohne Risiko zu speichern. Wir sind ein kleines Team, kein Großkonzern, und konzentrieren uns darauf, Downloads einfach und sicher zu machen. Millionen Nutzer vertrauen uns ohne Datenlecks, und wir verbessern uns ständig dank ihres Feedbacks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unter fünf Sekunden">
                Downloads laufen selbst zu Stoßzeiten schnell durch.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung oder Pop-ups">
                Einfach eine aufgeräumte Website.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Keine Wasserzeichen">
                Reine, sofort nutzbare Clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Downloads">
                Keine täglichen Limits.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
                Von alten Smartphones bis zu neuen Laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Keine Daten, die nach dem Download gespeichert werden.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Fragen zu Threads-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben die häufigsten Fragen zu videodownload.io und dem Herunterladen von Threads-Videos zusammengestellt, damit du mit einem guten Gefühl loslegen kannst.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private Threads-Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir verarbeiten nur öffentliche Posts. Private oder eingeschränkte Videos benötigen die Erlaubnis des Creators, und wir respektieren diese Grenzen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wird das Herunterladen mein Gerät langsamer machen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Unsere Dateien sind sauber und schlank, also kein Lag. Wenn du jedoch viele Videos speicherst, kann der Speicher voll werden – behalte den Platz im Blick.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum ist mein Threads-Download ohne Ton?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Manchmal lädt Threads nur Video oder nur Audio. Probiere den Link erneut, aktualisiere die Seite oder warte ein paar Minuten. Wir fügen automatisch Ton und Bild zusammen, sobald beides verfügbar ist.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton eines Threads-Videos speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wähle nach dem Einfügen des Links MP3. Ideal, um Musik oder Voice-over ohne Bild zu sichern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was, wenn mein Download fehlschlägt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Prüfe, ob der Link öffentlich ist und mit threads.net beginnt. Teste einen anderen Browser oder leere den Cache. Unser Support-Chat hilft schnell weiter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es eine Längenbegrenzung für Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Videos bis zu 60 Minuten, auch wenn die meisten Threads-Clips kürzer sind. Längere Videos brauchen etwas länger, werden aber vollständig geladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr meine heruntergeladenen Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Auf keinen Fall. Wir verarbeiten alles sofort und löschen es danach. Deine Dateien bleiben auf deinem Gerät, nicht auf unseren Servern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Sehen Creator, dass ich ihr Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads benachrichtigt sie nicht. Dein Download bleibt privat, ohne Hinweise für den Creator.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Fang noch heute an, Threads-Videos zu speichern
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hol dir deine Lieblingsclips in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Threads-Link kopieren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Auf unserer Seite einfügen
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sauberes Video herunterladen
              </div>
            </div>
            <div className="mt-2">
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Threads-Video herunterladen
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Entdecke weitere Downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lade von deinen Lieblingsplattformen herunter
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
                  to={`/de/${p.name.toLowerCase().replace(/\s+/g, "")}`}
                  className="block h-full"
                >
                  <Card className="group glass-card p-4 h-24 sm:h-28 flex items-center hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-200 border border-primary/10 hover:border-primary/30 overflow-hidden relative">
                    <div className={`absolute inset-0 ${p.color} opacity-10`} />
                    <div
                      className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${p.color} blur-2xl opacity-20`}
                    />
                    <div className="flex items-center justify-between gap-3 relative z-10 w-full">
                      <div className="text-white font-medium text-sm md:text-base">
                        {p.name}-Video herunterladen
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
      <FeatureCard icon={VideoIcon} title="Klare und scharfe Downloads">
        Speichere Threads-Videos in bester Qualität, bis zu 1080p, wenn der Originalpost es erlaubt. Kein Rauschen oder blasse Farben bei der Wiedergabe. Wir holen die Datei direkt von den Threads-Servern, damit jeder Sketch oder Style-Tipp gestochen scharf bleibt.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Keine Wasserzeichen oder Logos">
        Threads versieht Videos, die in der App gespeichert werden, mit Branding und stört damit die Sicht. Wir entfernen alles und liefern dir einen sauberen Clip, bereit zum Teilen oder Bearbeiten. Schau dir witzige Momente oder Tutorials ohne störende Overlays an.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
        Egal ob Smartphone, Tablet, Laptop oder Desktop – alles läuft reibungslos. Keine Apps oder Zusatzsoftware nötig. Öffne einfach unsere Seite im Browser, füge den Link ein und lade herunter. Getestet von alten Androids bis zu neuen Macs, immer zuverlässig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Download-Geschwindigkeiten">
        Warten zerstört die Stimmung. Unser Tool zieht Threads-Videos in Sekunden, meist unter zehn für die meisten Clips. Wir nutzen Server in Threads-Nähe für schnelle Abrufe, damit du während einer kurzen Pause einen Dance-Clip oder Hot Take sichern kannst.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Komplett kostenlos">
        Keine Gebühren, keine Registrierung, keine versteckten Kosten. Lade täglich so viele Videos herunter, wie du möchtest. Wir halten es gratis, damit du Memes oder Lifehacks speicherst, ohne eine Paywall zu treffen.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicher und privat">
        Deine Infos bleiben geschützt. Wir speichern nach dem Download keine Links oder Videos. Kein Tracking, keine Logs und keine nervige Werbung. Der Prozess ist sauber und hält dein Gerät frei von Risiken.
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
      <StepCard step={1} title="Link zum Video in Threads kopieren">
        <a href="http://www.threads.net">Öffne Threads</a> auf deinem Handy oder im Browser. Such dir das Video aus, vielleicht ein schnelles Rezept oder ein Fashion-Reel. Tippe auf das Teilen-Symbol, das Papierflugzeug unten rechts am Post. Wähle im Menü "Link kopieren". Damit sicherst du dir die komplette URL wie threads.net/@username/post/abc123. Prüfe kurz, ob sie stimmt.
      </StepCard>
      <StepCard step={2} title="Link in unser Tool einfügen">
        Besuche videodownload.io in deinem Browser. Du siehst eine Box mit "Threads-Link hier einfügen". Klick hinein und füge den kopierten Link ein. Achte darauf, dass er mit threads.net beginnt, um Fehler zu vermeiden. Nur öffentliche Posts funktionieren; private oder eingeschränkte Videos lassen sich nicht herunterladen.
      </StepCard>
      <StepCard step={3} title="Wir holen und bereiten das Video vor">
        Klick auf den blauen Button "Download" neben der Box. Unser System zieht das Video innerhalb weniger Sekunden von den Threads-Servern. Wir entfernen Wasserzeichen und prüfen die Qualität, damit du einen flüssigen Clip bekommst. Der Ton bleibt klar, ohne Aussetzer.
      </StepCard>
      <StepCard step={4} title="Clip auf deinem Gerät speichern">
        Du siehst Optionen: MP4 für das ganze Video mit Ton oder MP3 nur für Audio. Für die meisten Clips wählst du MP4. Tippe zum Download, und die Datei landet im Downloads-Ordner oder der Galerie deines Handys. Benenne sie am besten um, etwa in "style_tip.mp4", bevor du speicherst. Spiele sie ab, um alles zu prüfen.
      </StepCard>
    </div>
  );
}
