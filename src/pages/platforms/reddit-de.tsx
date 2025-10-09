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

export default function RedditPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Reddit Videos Herunterladen | Kostenlos & HD",
    description: "Reddit Videos und Beiträge in mp4, 1080p Qualität herunterladen. Kostenloser Online-Video-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Reddit" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Reddit Video Herunterladen
          </h1>
          <div id="reddit-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Reddit Video- oder Beitrags-URL einfügen"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Reddit Videos Mühelos Herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Ihr Einfacher Leitfaden zum Offline-Speichern von Clips
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Wie Man Reddit Videos Herunterlädt
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine Klare, Schrittweise Anleitung zum Mühelosen Speichern von Videos
          </h2>
          <p className="text-muted-foreground mb-6">
            Reddit Videos auf Ihr Gerät zu bekommen ist einfach mit
            videodownload.io. Folgen Sie diesen vier einfachen Schritten, um
            jedes Video in Minuten herunterzuladen. Jeder Schritt ist so gestaltet, dass er
            intuitiv ist, auch wenn Sie nicht technikaffin sind.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#reddit-downloader">
              <Button variant="download" className="px-6">
                Reddit Video Herunterladen
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Reddit Videos Herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Beste Anwendungsfälle
            </h2>
            <p className="section-muted mb-4">
              Reddits Feed ist eine wilde Mischung aus Ideen, aber gute Videos werden schnell begraben. Das Herunterladen ermöglicht es Ihnen, die Clips zu behalten, die Sie berühren, und verwandelt schnelles Scrollen in eine persönliche Sammlung. Es geht darum, zu speichern, was inspiriert, lehrt oder zum Lachen bringt, nicht nur darum, zufällige Beiträge zu sammeln. Sie kontrollieren Ihre Sammlung, sicher vor gelöschten Threads oder App-Änderungen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline-Wiedergabe
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Tutorials oder Nachrichten-Clips für Flüge, Pendelfahrten oder Orte mit schlechtem WLAN. Eltern laden kinderfreundliche Animationen für Autofahrten herunter, damit Kinder ohne Pufferung glücklich bleiben.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Wiederverwendung für Ersteller
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blogger nehmen virale Clips auf, um sie in ihre Inhalte zu remixen, mit Kommentaren oder Bearbeitungen. Streamer speichern Gaming-Momente zum Analysieren oder Teilen auf anderen Plattformen, wobei sie Wasserzeichen für saubere Verwendung überspringen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivierung Ihrer Eigenen Beiträge
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn Sie Videos auf Reddit teilen, können sie durch Subreddit-Sperren oder Plattform-Störungen verschwinden. Laden Sie sie auf eine Festplatte herunter, um Ihre Arbeit zu schützen, wie eine Projektdemo oder einen persönlichen Vlog.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen und Hobbys
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studenten speichern wissenschaftliche Demos oder Coding-Tipps für Offline-Studium. Hobbyisten laden DIY-Anleitungen oder Kunst-Tutorials herunter, um in ihrem eigenen Tempo zu üben, ohne erneut durch Subreddits suchen zu müssen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Momente Teilen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie einen lustigen Clip eines Freundes oder ein Community-Highlight zum Senden in Chats oder zum späteren Aufbewahren. Es ist eine Möglichkeit, Erinnerungen festzuhalten, ohne auf die App angewiesen zu sein.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von Reddit Videos bietet Flexibilität und Komfort,
              und macht es einfacher, Inhalte nach Ihren Bedingungen zu genießen, ob zum Spaß,
              für die Arbeit oder zum Lernen.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer Sollte Reddit Videos Herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personen, die am Meisten vom Herunterladen Profitieren
            </h2>
            <p className="section-muted mb-4">
              Reddit ist ein Hub für Nischen-Communities, aber das Herunterladen von Videos passt zu Leuten, die es zum Lernen, Erstellen oder Verbinden nutzen. Es ist für diejenigen, die Beiträge als mehr als Unterhaltung sehen und Clips in Werkzeuge oder Erinnerungsstücke verwandeln. Wenn Sie in Subreddits aktiv sind und behalten möchten, was wichtig ist, ist das Herunterladen Ihr Schritt.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content-Ersteller
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streamer und Vlogger speichern Gaming-Clips oder Reaktionsvideos zum Remixen für ihr Publikum. Sie laden auch ihre eigenen Beiträge herunter und behalten saubere Kopien ohne Logos für Bearbeitungen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten und Heimwerker
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bastler speichern Holzbearbeitungs- oder Näh-Tutorials zum Folgen zu Hause. Gamer laden Strategie-Clips herunter, um Bewegungen zu studieren. Es ist praktische Inspiration, bereit offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenten und Pädagogen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lehrer speichern Demo-Videos für den Unterricht, wie Physik-Experimente. Studenten nehmen Lerntipps oder Sprachunterricht auf, um sie zu überprüfen, ohne sich erneut anzumelden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familien und Gelegentliche Nutzer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eltern speichern lustige Kinderclips oder Haustiervideos zum Teilen bei Zusammenkünften. Freunde laden Subreddit-Highlights herunter, um später darüber zu lachen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kleine Unternehmen und Vermarkter
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geschäfte speichern Nutzerrezensionen oder Produktdemos zur Präsentation auf Websites. Social-Media-Profis nehmen Trend-Clips auf, um sie zu analysieren oder wiederzuverwenden und ihre Inhalte frisch zu halten.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Unabhängig von Ihrer Rolle oder Ihrem Lebensstil kann das Herunterladen von Reddit Videos
              Zeit, Daten und Mühe sparen, während Ihre Lieblingsinhalte
              zugänglich bleiben.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es Legal, Reddit Videos Herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was Sie Über das Gesetz Wissen Müssen
            </h2>
            <p className="section-muted mb-4">
              Videos sind urheberrechtlich geschützt von ihren Erstellern nach Gesetzen wie dem <a href="https://de.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> in den USA. Das Speichern für private Wiedergabe, wie das Offline-Ansehen eines Tutorials, gilt oft als faire Nutzung. Aber das Teilen ohne Erlaubnis oder die Verwendung für Profit kann zu rechtlichen Problemen führen. Musik oder Voice-Overs in Videos können zusätzliche Urheberrechtsschichten haben, obwohl kurze persönliche Speicherungen selten Probleme haben.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wann es Erlaubt Ist
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn der Ersteller Downloads erlaubt oder der Inhalt gemeinfrei ist, sind Sie im klaren Bereich. Bildungsnutzung, wie das Zeigen eines Clips im Unterricht, qualifiziert sich oft als faire Nutzung. Überprüfen Sie Beitragskommentare für Genehmigungen. Halten Sie Downloads privat und nennen Sie Ersteller, wenn Sie teilen, um sicher zu bleiben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Die Risiken beim Herunterladen von Reddit Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potenzielle Gefahren und Wie Man Sie Vermeidet
            </h2>
            <p className="section-muted mb-4">
              Drittanbieter-Downloader scheinen einfach, aber zwielichtige bringen echte Probleme. Nicht jede Website ist vertrauenswürdig, und sorgloses Klicken kann Ihr Gerät oder Ihre Daten beschädigen. Kennen Sie die Risiken, bevor Sie beginnen, um später Probleme zu vermeiden.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Unzuverlässige Websites verstecken Viren in Videodateien und schmuggeln Spyware oder Ransomware ein. Ein schlechter Download kann Ihre Dateien sperren oder Passwörter stehlen. Einige Tools wurden mit Keyloggern erwischt, wodurch eine Meme-Speicherung zu einer Datenpanne wird.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Betrug">
                Gefälschte Download-Seiten imitieren Reddits Login und schnappen sich Ihre Anmeldedaten, wenn Sie sie eingeben. Oder Anzeigen pushen "Updates", die Tracker installieren und Ihre Aktivität über die Plattform hinaus beobachten.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Qualitätsprobleme"
              >
                Schlechte Websites komprimieren Videos, was zu ruckeliger Wiedergabe oder verlorenem Audio führt. Sie wollten ein klares Tutorial, bekommen aber stattdessen eine fehlerhafte Datei.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenschutzlecks">
                Einige Websites protokollieren Ihre Downloads und verkaufen Ihre IP oder Videoauswahl an Werbetreibende. Hacker könnten diese Daten abgreifen und zu Spam oder gezielten Betrügereien führen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Reddit-Sperren">
                Intensive Nutzung von Drittanbieter-Tools kann Ihr Konto markieren, besonders für aktive Poster. Sie könnten Ihr Profil oder Karma über Nacht verlieren.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Speicherüberlastung"
              >
                Das Speichern vieler Videos frisst Speicherplatz und verlangsamt Telefone oder Laufwerke. Beschädigte Dateien könnten Player zum Absturz bringen und Zeit zum Reparieren verschwenden.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Verwenden Sie vertrauenswürdige Websites, scannen Sie Downloads und erwägen Sie VPNs, um sicher zu bleiben.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io Verwenden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ihr Vertrauenswürdiger Partner für Reddit Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir starteten videodownload.io im Jahr 2022, weil wir genug von zwielichtigen Tools und langsamen Apps hatten. Als Reddit-Nutzer wollten wir eine schnelle, saubere Möglichkeit, Videos ohne Risiken zu speichern. Wir sind ein kleines Team, kein großes Unternehmen, das sich darauf konzentriert, Downloads einfach und sicher zu machen. Millionen von Nutzern vertrauen uns ohne Datenlecks, und wir verbessern uns weiter basierend auf ihrem Feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unter Fünf Sekunden">
                Downloads werden auch zu Stoßzeiten abgeschlossen.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung oder Pop-ups">
                Nur eine saubere Website.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Wasserzeichen Entfernt">
                Reine, nutzbare Clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Speicherungen">
                Keine täglichen Limits.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funktioniert auf Jedem Gerät">
                Von alten Telefonen bis zu neuen Laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Keine Daten nach Abschluss gespeichert.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufig Gestellte Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Fragen zu Reddit Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben Antworten auf die häufigsten Fragen zur Verwendung von
              videodownload.io und zum Herunterladen von Reddit Videos zusammengestellt, um Ihnen zu helfen,
              mit Vertrauen zu beginnen.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich Videos von privaten Reddit Subreddits herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir verarbeiten nur öffentliche Beiträge. Videos von privaten oder eingeschränkten Subreddits benötigen die Erlaubnis des Erstellers oder Moderators, und wir respektieren diese Grenzen, um legitim zu bleiben.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wird das Herunterladen mein Gerät verlangsamen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Unsere Dateien sind sauber und leicht, also kein Lag. Aber das Speichern vieler Videos kann den Speicher füllen, also behalten Sie Ihren Platz im Auge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum hat mein Video kein Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit fügt Logos hinzu, um Shares zu verfolgen, aber wir holen die Rohdatei und entfernen sie für eine saubere Speicherung, die Sie frei verwenden können.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton aus einem Reddit Video speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wählen Sie MP3 nach dem Einfügen des Links. Großartig zum Aufnehmen von Podcast-Clips oder Musik aus Videos ohne die Visuals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was ist, wenn mein Download fehlschlägt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Überprüfen Sie, ob der Link öffentlich ist und mit reddit.com beginnt. Probieren Sie einen anderen Browser oder löschen Sie den Cache. Unser Support-Chat löst Probleme schnell.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es eine Grenze für die Videolänge?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Videos bis zu 60 Minuten, obwohl die meisten Reddit Clips kurz sind. Längere dauern etwas, werden aber vollständig heruntergeladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichern Sie meine heruntergeladenen Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Auf keinen Fall. Wir verarbeiten sofort und löschen alles danach. Ihre Dateien bleiben auf Ihrem Gerät, nicht auf unseren Servern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Können Poster sehen, ob ich ihr Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit benachrichtigt sie nicht. Ihr Download bleibt privat, ohne Benachrichtigungen an den Ersteller.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Beginnen Sie Heute mit dem Speichern von Reddit Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Holen Sie Sich Ihre Lieblingsclips in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Reddit Post Link Kopieren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Auf Unserer Website Einfügen
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sauberes Video Herunterladen
              </div>
            </div>
            <div className="mt-2">
              <a href="#reddit-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Reddit Video Herunterladen
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Entdecken Sie Weitere Downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Von Ihren Lieblingsplattformen herunterladen
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
                        {p.name} Video Herunterladen
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
      <FeatureCard icon={VideoIcon} title="Scharfe Videoqualität">
        Speichern Sie Reddit Videos in ihrer vollen Auflösung, bis zu 1080p, wenn der ursprüngliche Beitrag dies unterstützt. Keine verschwommenen Visuals oder ausgewaschenen Farben, wenn Sie später schauen. Wir holen die Datei direkt von Reddits Servern und halten jeden Frame scharf für diesen Gaming-Clip oder Tutorial.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Keine Wasserzeichen oder Logos">
        Reddit klebt sein Branding auf Videos, die über ihre App gespeichert werden, und verstopft den Bildschirm. Wir entfernen das alles und geben Ihnen einen sauberen Clip, der zum Teilen oder Bearbeiten bereit ist. Schauen Sie sich dieses lustige Haustiervideo oder Tech-Demo ohne Text-Overlays im Weg an.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf Jedem Gerät">
        Verwenden Sie Ihr Telefon, Tablet, PC oder Laptop, und es funktioniert reibungslos. Keine Apps oder zusätzliche Software erforderlich. Öffnen Sie einfach unsere Website in Ihrem Browser, fügen Sie den Link ein und laden Sie herunter. Getestet auf allem von alten Androids bis zu neuen Macs, es ist immer zuverlässig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Downloads">
        Warten ist lästig. Unser Tool holt Reddit Videos in Sekunden, normalerweise unter 10 für die meisten Clips. Wir verwenden Server in der Nähe von Reddits für schnelle Grabs, sodass Sie ein Meme oder Nachrichten-Clip während einer kurzen Pause speichern können.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Kostenlos Ohne Grenzen">
        Keine Gebühren, keine Anmeldungen, keine versteckten Kosten. Laden Sie so viele Videos herunter, wie Sie möchten, jeden Tag, ohne Einschränkungen. Wir halten es kostenlos, damit Sie diesen viralen Moment oder DIY-Tipp speichern können, ohne auf eine Paywall zu stoßen.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicherer und Privater Prozess">
        Ihre Daten bleiben sicher. Wir speichern Ihre Links oder Videos nach dem Herunterladen nicht. Kein Tracking, keine Logs und keine Spam-Anzeigen. Der Prozess ist sauber und hält Ihr Gerät frei von Müll oder Risiken.
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
      <StepCard step={1} title="Kopieren Sie den Videolink von Reddit">
        <a href="http://www.reddit.com">Öffnen Sie Reddit</a> auf Ihrem Telefon oder Browser. Finden Sie das Video, das Ihnen gefällt, vielleicht einen Koch-Trick oder Gaming-Highlight. Klicken Sie auf das Teilen-Symbol unter dem Beitrag, ein kleiner Pfeil nach oben. Wählen Sie aus dem Menü "Link kopieren." Dies erfasst die vollständige URL, wie reddit.com/r/subreddit/comments/abc123. Überprüfen Sie, ob es korrekt ist.
      </StepCard>
      <StepCard step={2} title="Fügen Sie den Link in Unser Tool Ein">
        Gehen Sie zu videodownload.io in Ihrem Browser. Sie sehen ein Feld mit der Beschriftung "Reddit Link hier einfügen." Klicken Sie hinein und fügen Sie den kopierten Link ein. Stellen Sie sicher, dass er mit reddit.com beginnt, um Fehler zu vermeiden. Nur öffentliche Beiträge funktionieren; private oder eingeschränkte Subreddit-Videos werden nicht heruntergeladen.
      </StepCard>
      <StepCard step={3} title="Wir Holen und Bereiten das Video Vor">
        Klicken Sie auf die blaue "Download" Schaltfläche neben dem Feld. Unser System holt das Video in Sekunden von Reddits Servern. Wir entfernen alle Wasserzeichen und prüfen die Qualität, sodass Sie einen reibungslosen Clip erhalten. Audio bleibt klar, keine Fehler oder fehlender Sound.
      </StepCard>
      <StepCard step={4} title="Speichern Sie den Clip auf Ihrem Gerät">
        Sie sehen Optionen: MP4 für das vollständige Video mit Ton oder MP3 nur für den Ton. Wählen Sie MP4 für die meisten Clips. Tippen Sie zum Herunterladen, und es landet in Ihrem Downloads-Ordner oder der Galerie des Telefons. Benennen Sie es etwas Einfaches, wie "meme_clip.mp4," vor dem Speichern. Spielen Sie es ab, um zu bestätigen, dass es gut ist.
      </StepCard>
    </div>
  );
}
