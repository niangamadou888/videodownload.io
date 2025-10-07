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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Twitter X Video Download | Kostenlos & HD",
    description: "Laden Sie Twitter X Videos und Posts in mp4, 1080p Qualität herunter. Kostenloser Online-Video-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Fügen Sie eine Twitter X Video- oder Post-URL ein"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Twitter X Videos Schnell Herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Ihr Schneller Leitfaden zum Offline-Speichern von Clips
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So Laden Sie Twitter X Videos Herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine Klare Schritt-für-Schritt-Anleitung zum Mühelosen Speichern von Videos
          </h2>
          <p className="text-muted-foreground mb-6">
            Twitter X Videos auf Ihr Gerät zu bekommen ist einfach mit
            videodownload.io. Folgen Sie diesen vier einfachen Schritten, um
            jedes Video in Minuten herunterzuladen. Jeder Schritt ist so gestaltet, dass er
            intuitiv ist, auch wenn Sie kein Technik-Experte sind.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Twitter X Video Herunterladen
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Twitter X Videos Herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Beste Anwendungsfälle
            </h2>
            <p className="section-muted mb-4">
              Twitter X bewegt sich in Lichtgeschwindigkeit, wobei Videos in der Flut von Posts verloren gehen. Das Herunterladen ermöglicht es Ihnen, die Clips zu behalten, die herausstechen, und verwandelt schnelles Scrollen in eine persönliche Sammlung. Es geht nicht darum, alles zu speichern, sondern das zu behalten, was Freude, Informationen oder Inspiration bringt. Sie kontrollieren Ihre Sammlung, sicher vor gelöschten Posts oder App-Änderungen.
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
                    Speichern Sie Nachrichtenclips oder Tutorials für Flüge, Züge oder Bereiche mit schlechtem WLAN. Eltern laden lustige Animationen herunter, damit Kinder sie auf langen Autofahrten ansehen können, ohne Buffering-Stress.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Wiederverwendung von Inhalten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ersteller nehmen virale Clips, um sie in ihre eigenen Posts zu remixen und Kommentare oder Bearbeitungen hinzuzufügen. Ein Journalist speichert ein aktuelles Nachrichtenvideo zur Analyse für einen Artikel und entfernt Wasserzeichen für eine saubere Verwendung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sicherung Ihrer Eigenen Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn Sie Videos auf Twitter X teilen, können sie durch Kontoprobleme oder Plattform-Updates verschwinden. Laden Sie sie auf eine Festplatte herunter, um Ihre Arbeit sicher aufzubewahren.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen und Forschen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studenten speichern Expertenvorträge oder Datenanalysen für Studiennotizen. Profis nehmen Branchen-Updates, um sie in Meetings zu teilen, ohne erneut im Feed suchen zu müssen.
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
                    Laden Sie den Meilenstein-Clip eines Freundes oder eine lustige Reaktion herunter, um sie in Gruppenchats zu senden oder für später zu speichern. Es ist eine Möglichkeit, persönliche Highlights zu bewahren, ohne sich auf die App zu verlassen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von Twitter X Videos bietet Flexibilität und Komfort,
              macht es einfacher, Inhalte nach Ihren Bedingungen zu genießen, ob zum Spaß,
              für die Arbeit oder zum Lernen.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer Sollte Twitter X Videos Herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personen, die am Meisten vom Herunterladen Profitieren
            </h2>
            <p className="section-muted mb-4">
              Twitter X ist ein Hub für schnelle Takes und große Momente, aber das Herunterladen von Videos passt zu Menschen, die die Plattform mit Absicht nutzen. Es ist für diejenigen, die Clips als Werkzeuge, Erinnerungen oder Inspiration sehen, nicht nur als vorübergehende Inhalte. Wenn Sie in der App aktiv sind und behalten möchten, was zählt, ist das Herunterladen für Sie.
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
                    Sie posten täglich und ziehen Ideen aus trendigen Videos. Das Herunterladen ermöglicht es ihnen, ihre eigenen Clips zu speichern oder andere zu studieren, wie ein Komiker, der ein Reaktionsvideo nimmt, um darauf zu riffeln, ohne störende Logos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Journalisten und Forscher
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sie speichern Nachrichtenclips oder Interviews für Artikel oder Faktenprüfung. Studenten laden Experten-Threads mit Videos für Schulprojekte herunter und studieren offline in ihrem eigenen Tempo.
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
                    Speichern Sie das Ankündigungsvideo eines Geschwisters oder einen viralen Haustier-Clip, um sie bei Versammlungen zu teilen. Es ist zuverlässiger als zu hoffen, dass Twitter X es live hält.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketer und Geschäftsinhaber
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ein Startup speichert Kundenbewertungen, um sie auf Websites zu präsentieren. Social-Media-Manager nehmen Konkurrenz-Clips, um Trends zu analysieren oder für andere Plattformen wiederzuverwenden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten und Lernende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tech-Fans speichern Coding-Demos zum späteren Üben. Nachrichten-Junkies laden aktuelle Geschichten herunter, um sie erneut anzusehen. Selbst gelegentliche Scroller speichern motivierende Clips für schwierige Tage.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Unabhängig von Ihrer Rolle oder Ihrem Lebensstil kann das Herunterladen von Twitter X Videos
              Zeit, Daten und Aufwand sparen und gleichzeitig Ihre Lieblingsinhalte
              zugänglich halten.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es Legal, Twitter X Videos Herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was Sie Über das Gesetz Wissen Müssen
            </h2>
            <p className="section-muted mb-4">
              Videos sind durch das Urheberrecht ihrer Ersteller gemäß Gesetzen wie dem DMCA in den USA geschützt. Das Speichern für die private Wiedergabe, wie das Offline-Ansehen eines Nachrichtenclips, zählt oft als faire Nutzung. Aber das Teilen ohne Erlaubnis oder die Nutzung für Gewinnzwecke kann zu rechtlichen Problemen führen. Musik oder Voice-Overs in Videos können zusätzliche Urheberrechtsschichten haben, obwohl kurze persönliche Speicherungen selten Probleme haben.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wann es Erlaubt ist
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn der Ersteller Downloads erlaubt oder der Inhalt gemeinfrei ist, sind Sie sicher. Bildungsnutzung, wie das Zeigen eines Clips im Unterricht, qualifiziert sich oft als faire Nutzung. Überprüfen Sie Post-Beschriftungen auf Berechtigungen. Halten Sie es privat und nennen Sie Ersteller, wenn Sie teilen, um sicher zu bleiben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Die Risiken beim Herunterladen von Twitter X Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potenzielle Gefahren und Wie Man Sie Vermeidet
            </h2>
            <p className="section-muted mb-4">
              Drittanbieter-Downloader scheinen einfach, aber zwielichtige können große Probleme verursachen. Nicht jede Website ist vertrauenswürdig, und nachlässiges Klicken kann Ihr Gerät oder Ihre Daten schädigen. Kennen Sie die Risiken, bevor Sie mit dem Herunterladen beginnen, um später Ärger zu vermeiden.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Unzuverlässige Websites verstecken Viren in Videodateien und schmuggeln Spyware oder Ransomware ein. Ein schlechter Download kann Ihre Dateien sperren oder Passwörter stehlen. Einige Tools wurden mit Keyloggern erwischt, die eine schnelle Speicherung in einen Datenschutzverstoß verwandeln.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Betrug">
                Gefälschte Download-Seiten imitieren das Twitter X-Login und erfassen Ihre Anmeldedaten, wenn Sie sie eingeben. Oder Anzeigen drängen "Updates", die Tracker installieren und Ihre Aktivität über die Plattform hinaus beobachten.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Qualitätsprobleme"
              >
                Schlechte Websites komprimieren Videos und verursachen ruckelige Wiedergabe oder verlorenen Ton. Sie wollten einen klaren Nachrichtenclip, bekommen aber stattdessen eine fehlerhafte Datei.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenschutz-Lecks">
                Einige Websites protokollieren Ihre Downloads und verkaufen Ihre IP oder Videoauswahl an Werbetreibende. Hacker könnten diese Daten erhalten, was zu Spam oder gezielten Betrügereien führt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Twitter X Sperren">
                Starke Nutzung von Drittanbieter-Tools kann Ihr Konto markieren, insbesondere für Ersteller. Sie könnten über Nacht Ihr Profil oder Follower verlieren.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Speicherüberlastung"
              >
                Das Speichern vieler Videos frisst Platz und verlangsamt Telefone oder Laufwerke. Beschädigte Dateien könnten Player zum Absturz bringen und Zeit zum Reparieren verschwenden.
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
              Ihr Vertrauenswürdiger Partner für Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gestartet, weil wir von zwielichtigen Tools und fehlerhaften Apps die Nase voll hatten. Als Twitter X-Nutzer wollten wir eine schnelle, saubere Möglichkeit, Videos ohne Risiken zu speichern. Wir sind ein kleines Team, kein großes Unternehmen, das sich darauf konzentriert, Downloads einfach und sicher zu machen. Millionen von Nutzern vertrauen uns ohne Datenschutzverletzungen, und wir verbessern uns weiterhin basierend auf ihrem Feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unter Fünf Sekunden">
                Downloads werden auch an geschäftigen Tagen abgeschlossen.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung oder Pop-ups">
                Nur eine saubere Website.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Wasserzeichen Entfernt">
                Reine, nutzbare Clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Speicherungen">
                Keine täglichen Obergrenzen.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funktioniert auf Jedem Gerät">
                Von Telefonen bis Laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Keine Daten nach Ihrem Abgang gespeichert.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufig Gestellte Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Fragen zu Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben Antworten auf die häufigsten Fragen zur Verwendung von
              videodownload.io und zum Herunterladen von Twitter X Videos zusammengestellt, um Ihnen zu helfen,
              mit Vertrauen zu beginnen.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private Twitter X Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir behandeln nur öffentliche Posts. Geschützte oder private Videos benötigen die Erlaubnis des Erstellers, und wir respektieren das, um die Dinge legitim zu halten.
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
                  Unsere Dateien sind sauber und leicht, also keine Verlangsamung. Aber das Speichern vieler Videos kann den Speicher füllen, also behalten Sie Ihren Platz im Auge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum ist mein Video ohne Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X fügt Logos hinzu, um Shares zu verfolgen, aber wir ziehen die Originaldatei und entfernen sie für eine saubere Speicherung, die Sie frei verwenden können.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton von einem Twitter X Video speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wählen Sie MP3 nach dem Einfügen des Links. Perfekt zum Erfassen von Podcast-Clips oder trendigen Sounds ohne das Video.
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
                  Überprüfen Sie, ob der Link öffentlich ist und mit x.com beginnt. Versuchen Sie einen anderen Browser oder löschen Sie den Cache. Unser Support-Chat behebt Probleme schnell.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es Grenzen für die Videogröße?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Videos bis zu 60 Minuten, obwohl die meisten Twitter X Clips kurz sind. Längere dauern etwas, werden aber vollständig heruntergeladen.
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
                  Können Ersteller sehen, dass ich ihr Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X benachrichtigt sie nicht. Ihr Download bleibt privat, ohne Benachrichtigungen an den Poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Beginnen Sie Jetzt mit dem Speichern von Twitter X Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Holen Sie Ihre Clips in Sekunden Offline
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Twitter X Post-Link Kopieren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Auf Unserer Seite Einfügen
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sauberes Video Herunterladen
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Twitter X Video Herunterladen
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
              Laden Sie von Ihren Lieblingsplattformen herunter
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
        Speichern Sie Twitter X Videos in ihrer besten Auflösung, bis zu 1080p, wenn der ursprüngliche Post dies liefert. Keine verschwommenen Frames oder matten Farben beim späteren Ansehen. Wir ziehen die Rohdatei direkt von den Twitter X-Servern und halten jedes Detail scharf für diesen viralen Clip oder News-Update.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Keine Wasserzeichen oder Branding">
        Twitter X fügt sein Logo oder seinen Benutzernamen zu Videos hinzu, die über ihre App gespeichert werden, und überladen die Ansicht. Wir entfernen all das und geben Ihnen einen sauberen Clip, der zum Teilen oder Bearbeiten bereit ist. Schauen Sie sich diesen lustigen Moment oder die Hauptrede an, ohne dass Text den Bildschirm blockiert.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf Jedem Gerät">
        Verwenden Sie Ihr Telefon, Tablet, Laptop oder Desktop, und es läuft reibungslos. Keine Apps installieren oder mit zusätzlicher Software umgehen. Öffnen Sie unsere Website in Ihrem Browser, fügen Sie den Link ein und laden Sie herunter. Getestet auf allem von Budget-Androids bis zu High-End-PCs, es ist immer zuverlässig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Download-Geschwindigkeiten">
        Niemand will warten. Unser Tool greift Twitter X Videos in Sekunden, oft unter 10 für die meisten Clips. Wir verwenden Server in der Nähe von Twitter X für schnelle Abrufe, sodass Sie ein Reaktionsvideo oder heißen Take während einer schnellen Scroll-Pause speichern können.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Völlig Kostenlos zu Verwenden">
        Keine Gebühren, keine Anmeldungen, keine Überraschungskosten. Laden Sie so viele Videos herunter, wie Sie möchten, jeden Tag, ohne Grenzen. Wir halten es kostenlos, damit Sie dieses Meme oder diesen Breaking-News-Clip speichern können, ohne auf eine Paywall zu stoßen.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sichere und Private Downloads">
        Ihre Informationen bleiben sicher. Wir behalten Ihre Links oder Videos nach dem Download nicht. Kein Tracking, keine Protokolle und keine Spam-Werbung. Der Prozess ist sauber und hält Ihr Gerät frei von Müll oder Risiken.
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
      <StepCard step={1} title="Holen Sie den Video-Link von Twitter X">
        <a href="http://www.x.com">Öffnen Sie Twitter X</a> auf Ihrem Telefon oder Browser. Finden Sie das Video, das Ihnen gefällt, vielleicht ein schnelles Meme oder ein Konferenz-Highlight. Klicken Sie auf das Teilen-Symbol unter dem Post, ein kleiner Pfeil nach oben. Wählen Sie aus dem Menü "Link zum Post kopieren". Dies kopiert die vollständige URL, wie x.com/username/status/123456. Überprüfen Sie, ob sie richtig ist.
      </StepCard>
      <StepCard step={2} title="Fügen Sie den Link in Unser Tool Ein">
        Gehen Sie zu videodownload.io in Ihrem Browser. Sie sehen ein Feld mit der Bezeichnung "Twitter X Link hier einfügen". Klicken Sie hinein und fügen Sie den kopierten Link ein. Stellen Sie sicher, dass er mit x.com beginnt, um Probleme zu vermeiden. Nur öffentliche Posts funktionieren; private oder geschützte Videos werden nicht heruntergeladen.
      </StepCard>
      <StepCard step={3} title="Wir Holen und Bereiten das Video Vor">
        Klicken Sie auf die blaue "Download"-Schaltfläche neben dem Feld. Unser System zieht das Video in Sekunden von den Twitter X-Servern. Wir entfernen alle Wasserzeichen und überprüfen die Qualität, sodass Sie einen glatten Clip erhalten. Der Ton bleibt klar, keine Störungen oder fehlender Sound.
      </StepCard>
      <StepCard step={4} title="Speichern Sie die Datei auf Ihrem Gerät">
        Sie sehen Optionen: MP4 für das vollständige Video mit Audio oder MP3 nur für den Sound. Wählen Sie MP4 für die meisten Clips. Tippen Sie zum Herunterladen, und es landet in Ihrem Download-Ordner oder der Galerie Ihres Telefons. Benennen Sie es etwas Einfaches, wie "meme_clip.mp4", bevor Sie speichern. Spielen Sie es ab, um sicherzustellen, dass es perfekt ist.
      </StepCard>
    </div>
  );
}
