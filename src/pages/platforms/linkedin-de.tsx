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

export default function LinkedInPageDe() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "LinkedIn Video Download | Kostenlos & HD",
    description:
      "Lade LinkedIn-Videos und Posts als mp4 in 1080p herunter. Kostenloser Online-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimale Download-Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download LinkedIn Video
          </h1>
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Füge die URL eines LinkedIn-Videos oder Beitrags ein"
            />
          </div>
          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            LinkedIn-Videos mühelos herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Dein kompakter Leitfaden, um professionelle Clips offline zu sichern
          </p>

          <EnhancedFeatures />

          {/* Anleitung */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du LinkedIn-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Schritt-für-Schritt – schnell und unkompliziert
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io landet jedes LinkedIn-Video in wenigen Minuten auf deinem Gerät.
            Folge diesen vier intuitiven Schritten – ganz ohne Technikkenntnisse – und sichere
            jeden Clip ohne Aufwand.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Download LinkedIn Video
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum LinkedIn-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die wichtigsten Einsatzmöglichkeiten
            </h2>
            <p className="section-muted mb-4">
              Der LinkedIn-Feed bewegt sich schnell und wertvolle Videos verschwinden zwischen
              neuen Posts. Durch Downloads behältst du Inhalte, die wirklich zählen, und verwandelst
              kurzes Scrollen in ein nachhaltiges Archiv. Konzentriere dich auf Clips, die deiner
              Karriere oder deinem Unternehmen helfen – fernab von App-Pannen oder gelöschten Beiträgen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline-Zugriff für Profis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sichere Leadership-Talks oder Marketing-Strategien für Flüge und Pendelstrecken
                    ohne WLAN. Trainer speichern Workshop-Clips, um sie Teams ohne instabile Verbindung
                    zu zeigen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content neu verwerten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketer speichern Case Studies für Präsentationen oder andere Plattformen.
                    Jobsuchende analysieren Bewerbungs-Tipps Bild für Bild und feilen an ihrem Pitch.
                    Schneide Highlights für Pitches, ohne bei null zu beginnen.
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
                    Wenn du regelmäßig Insights teilst, können Plattform-Updates Beiträge verschwinden
                    lassen. Lade die Videos auf eine lokale Festplatte, um deine Arbeit vor Bannwellen
                    oder Bugs zu schützen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Training und Weiterbildung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR-Teams sichern Onboarding-Videos für Neueinstellungen. Studierende laden Panel-Diskussionen
                    herunter, um Notizen zu ergänzen und offline zu lernen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persönliches Wachstum
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichere Motivations-Talks oder Networking-Tipps, um sie anzusehen, wenn du
                    einen Schub brauchst. Mach aus einem Mentor-Video eine tägliche Erinnerung.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloads bieten Flexibilität und Komfort: Du konsumierst Inhalte zu deinen Bedingungen,
              ob für Arbeit, Lernen oder Inspiration.
            </p>
          </div>

          {/* Zielgruppen */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer LinkedIn-Videos herunterladen sollte
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nutzer:innen mit dem größten Nutzen
            </h2>
            <p className="section-muted mb-4">
              LinkedIn ist das Netzwerk für Profis. Videos herunterladen lohnt sich für alle,
              die die Plattform gezielt zum Wachsen, Lernen oder Netzwerken nutzen. Wenn du Posts
              als Werkzeug verstehst, ist das ein echter Vorteil.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionals und Führungskräfte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Manager sichern Leadership-Sessions für ihre Teams. Marketer analysieren
                    Wettbewerbs-Ads oder Cases und nutzen saubere Clips in Präsentationen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Jobsuchende und Karriere-Coaches
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lade Interview-Tipps oder Lebenslauf-Guides herunter und übe offline. Coaches
                    präsentieren Erfolgsgeschichten ihrer Kund:innen ohne störende Wasserzeichen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Unternehmer:innen und KMU
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Start-ups speichern Pitches oder Branchenanalysen, um Wettbewerber im Blick zu behalten.
                    Kleine Unternehmen nutzen Kundenstimmen für Website oder Sales-Decks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Trainer:innen und Lehrkräfte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR-Teams sichern Compliance-Videos für Schulungen. Lehrende zeigen Panel-Diskussionen
                    als Praxisbeispiele ohne Verbindungsprobleme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studierende und Lernende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hol dir Karriere-Tipps oder Tech-Tutorials und lerne in deinem Tempo. Auch Nutzer:innen,
                    die nur gelegentlich aktiv sind, speichern Motivationsclips für schwierige Phasen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Egal welche Rolle du hast: LinkedIn-Videos zu speichern spart Zeit, Daten und Aufwand und hält
              Lieblingsinhalte immer griffbereit.
            </p>
          </div>

          {/* Rechtliches */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, LinkedIn-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was du über Urheberrecht wissen musst
            </h2>
            <p className="section-muted mb-4">
              LinkedIn-Videos herunterzuladen bewegt sich im rechtlichen Graubereich. Die Rechte liegen bei den
              Creator:innen, beispielsweise nach der <a href="https://de.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a>. Für den
              privaten Gebrauch – etwa ein Webinar offline zu sehen – gilt oft Fair Use. Wer Inhalte jedoch teilt
              oder kommerziell nutzt, kann Abmahnungen riskieren. Auch Audiospuren wie Musik unterliegen zusätzlichen
              Rechten.
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
                    Ist der Download vom Creator erlaubt oder das Material gemeinfrei, bist du auf der sicheren Seite.
                    Für Unterricht und Trainings gelten Inhalte oft als Fair Use. Nutze sie privat und gib Quellen an,
                    wenn du sie teilst.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von LinkedIn-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mögliche Gefahren und wie du sie vermeidest
            </h2>
            <p className="section-muted mb-4">
              Dubiose Download-Seiten wirken praktisch, bergen aber echte Gefahren. Nicht jedes Tool ist sauber und ein
              unbedachter Klick kann Gerät oder Daten kompromittieren. Kenne die Risiken, bevor du auf „Download“ klickst.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware & Viren">
                Unseriöse Seiten verstecken Schadsoftware in Videodateien – von Spyware bis Ransomware. Ein falscher
                Download kann Dateien sperren oder Passwörter auslesen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Tricks">
                Gefälschte Login-Seiten fangen deine LinkedIn-Daten ab. Pop-ups mit angeblichen Updates installieren
                Tracker, die jeden Klick beobachten.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualitätsverlust">
                Schlechte Tools komprimieren massiv. Ergebnis: ruckelige Bilder oder Ton-Aussetzer statt eines klaren Videos.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenlecks">
                Manche Dienste protokollieren deine Downloads und verkaufen IP und Vorlieben an Werbetreibende. Angreifer
                nutzen das für Spam oder Betrug.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="LinkedIn-Sperren">
                Intensiver Gebrauch von Dritt-Tools kann dein Konto markieren. Im Extremfall verlierst du Zugang zu deinem
                Netzwerk und zu Beiträgen.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Speicher voll">
                Viele Downloads füllen Speicher und bremsen Geräte. Beschädigte Dateien lassen Player abstürzen und kosten Zeit.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze vertrauenswürdige Seiten, prüfe Downloads mit Sicherheitssoftware und verwende bei Bedarf ein VPN.
            </p>
          </div>

          {/* Warum videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io wählen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein zuverlässiger Partner für LinkedIn-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gestartet, weil wir genug von langsamen, unsicheren Tools hatten. Als
              LinkedIn-Nutzer brauchten wir einen schnellen, sauberen und sicheren Weg, Videos zu speichern. Wir sind ein
              kleines Team, das den Download-Prozess laufend verbessert – Millionen Nutzer:innen später noch immer ohne
              Datenpannen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unter fünf Sekunden">
                Downloads schließen selbst zu Stoßzeiten zügig ab.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung, keine Pop-ups">
                Eine klare, fokussierte Oberfläche.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Wasserzeichen entfernt">
                Du erhältst saubere Clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Downloads">
                Keine Tageslimits – sichere so viel du brauchst.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Auf jedem Gerät">
                Funktioniert vom alten Tablet bis zum neuen Laptop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Wir speichern keinerlei Daten nach dem Download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufige Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antworten rund um LinkedIn-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben die häufigsten Fragen zu videodownload.io und dem Herunterladen von LinkedIn-Videos gesammelt,
              damit du sofort loslegen kannst.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private LinkedIn-Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir unterstützen nur öffentliche Beiträge. Private Inhalte benötigen die Zustimmung der
                  Creator:innen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Verlangsamt das Downloaden mein Gerät?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Unsere Dateien sind sauber und leichtgewichtig. Achte lediglich darauf, genug Speicherplatz frei zu halten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum fehlt das Wasserzeichen im Download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir ziehen die Originaldatei von LinkedIn und entfernen eingeblendete Logos, damit du sie privat nutzen
                  kannst.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur die Audiospur speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja. Wähle nach dem Einfügen des Links einfach MP3, um nur den Ton zu behalten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was, wenn der Download fehlschlägt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Prüfe, ob der Link öffentlich und vollständig ist. Teste ggf. einen anderen Browser oder leere den Cache.
                  Unser Support hilft dir gerne weiter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es Längenbeschränkungen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Videos bis zu 60 Minuten. Längere Clips brauchen etwas mehr Zeit, werden aber vollständig
                  gespeichert.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr meine Downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein. Wir verarbeiten jeden Request sofort und löschen alles unmittelbar danach. Dateien bleiben ausschließlich
                  auf deinem Gerät.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Sieht der Creator, dass ich sein Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn informiert Creator:innen nicht. Deine Downloads bleiben privat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Starte jetzt mit LinkedIn-Downloads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Sicher dir professionelle Clips in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                LinkedIn-Link kopieren
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
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download LinkedIn Video
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
      <FeatureCard icon={VideoIcon} title="Kristallklare Qualität">
        Lade LinkedIn-Videos in maximaler Auflösung bis 1080p herunter, sofern der Original-Post dies zulässt.
        Keine verschwommenen Frames beim späteren Abspielen.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Ohne Logos oder Wasserzeichen">
        LinkedIn fügt beim Speichern eigene Logos hinzu. Wir liefern dir ein sauberes Video.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
        Ob Laptop, Smartphone oder Tablet – du brauchst keine zusätzliche Software. Browser öffnen, Link einfügen,
        fertig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Downloads">
        Unser Tool zieht Videos in wenigen Sekunden, meist unter zehn, dank Servern in LinkedIn-Nähe.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Kostenlos & unbegrenzt">
        Keine Gebühren, kein Account, keine Limits. Lade so viele Videos, wie du benötigst.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicher & privat">
        Wir speichern keine Links oder Dateien nach dem Download. Keine Tracker, keine nervigen Anzeigen.
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
      <StepCard step={1} title="Link auf LinkedIn kopieren">
        <a href="http://www.linkedin.com">Öffne LinkedIn</a> am Smartphone oder im Browser. Finde den Beitrag,
        tippe auf die drei Punkte rechts oben und wähle "Link zum Beitrag kopieren".
      </StepCard>
      <StepCard step={2} title="Link auf unserer Seite einfügen">
        Gehe zu videodownload.io und füge den kopierten Link in das Eingabefeld ein. Achte darauf, dass die URL mit
        linkedin.com beginnt. Private oder Gruppen-Posts funktionieren nicht.
      </StepCard>
      <StepCard step={3} title="Wir bereiten das Video auf">
        Klicke auf den blauen "Download"-Button. Unser System holt das Video von LinkedIn, entfernt Wasserzeichen und
        prüft die Qualität.
      </StepCard>
      <StepCard step={4} title="Datei speichern">
        Wähle MP4 für Video mit Ton oder MP3 für Audio only. Der Download landet im Ordner "Downloads" oder in deiner
        Galerie. Benenne die Datei bei Bedarf um und starte sie zur Kontrolle.
      </StepCard>
    </div>
  );
}
