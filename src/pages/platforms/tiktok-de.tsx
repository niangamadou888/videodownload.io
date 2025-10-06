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

export default function TikTokPageDe() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "TikTok Video Herunterladen | Kostenlos & HD",
    description:
      "TikTok-Videos ohne Wasserzeichen in HD-Qualität herunterladen. Kostenloser TikTok-Downloader: schnell, sicher und ohne Kosten."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimale Download-Box */}
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="TikTok-Video-URL einfügen"
            />
          </div>

          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            TikTok-Videos ganz einfach herunterladen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Der praktische Leitfaden zum Offline-Speichern von Clips
          </h2>
          <p className="text-muted-foreground mb-6">
            Speichere TikTok-Videos in HD ohne Wasserzeichen. Unser Downloader ist schnell, sicher und völlig kostenlos – perfekt für unterwegs.
          </p>

          <EnhancedFeatures />

          {/* Wie herunterladen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du TikTok-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine einfache Schritt-für-Schritt-Anleitung
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io lädst du jeden Clip in wenigen Minuten herunter. Vier intuitive Schritte, die auch ohne technisches Wissen funktionieren.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                TikTok-Video herunterladen
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum TikTok-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Wann Offline-Zugriff den Unterschied macht
            </h2>
            <p className="section-muted mb-4">
              TikTok ändert sich in Stunden: Trends verschwinden, Profile wechseln und wichtige Videos sind weg. Durch Herunterladen behältst du, was wirklich wichtig ist, baust deine eigene Sammlung auf und bleibst unabhängig von Signal oder Plattform.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline ansehen auf Reisen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Flugzeuge, U-Bahnen oder instabiles WLAN zerstören das Erlebnis. Speichere Tutorials, Comedy und Kinderlieder vor dem Verlassen des Hauses und schau ohne Unterbrechungen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix und Content-Erstellung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creator speichern Referenz-Clips zum Remixen von Trends, Vergleichen von Techniken oder Antworten ans Publikum ohne Wasserzeichen. Ideal für Reacts, Reels und Kollaborationen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backup deiner eigenen Videos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wer häufig postet, weiß, dass ein Bann oder eine falsche Bearbeitung alles löschen kann. Speichere eine HD-Kopie auf dem Computer oder in der Cloud und bleib entspannt. Auch Schüler speichern Zusammenfassungen oder Lerntipps zur Offline-Wiederholung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Auf anderen Plattformen wiederverwenden
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Passe das Video für Reels oder Shorts an und erweitere deine Reichweite. Kleine Unternehmen speichern Testimonials oder Backstage-Material für Websites, Präsentationen oder Verkaufsstellen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persönliches Archiv von Erinnerungen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Familienmomente, Rezepte, Schulpräsentationen oder Ehrungen bleiben geschützt und können geteilt werden, ohne von der App abhängig zu sein.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Kurz gesagt: Das Herunterladen von TikTok-Videos gibt dir völlige Freiheit zum Konsumieren, Lernen oder Arbeiten in deinem eigenen Tempo.
            </p>
          </div>

          {/* Wer sollte herunterladen */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer sollte TikTok-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menschen, die am meisten vom Offline-Modus profitieren
            </h2>
            <p className="section-muted mb-4">
              Das Herunterladen ist wichtig für alle, die TikTok als Werkzeug für Kreation, Studium oder Business nutzen. Wenn Videos deine Routine unterstützen, macht es Sinn, sie gespeichert zu haben.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content Creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern eigene Videos oder Inspirationen zum entspannten Bearbeiten, Vergleichen von Trends und Produzieren von Antworten ohne Wasserzeichen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lehrer und Schüler
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Demonstrationen, Experimente oder schnelle Tipps für den Unterricht, späteres Wiederholen oder Vorbereiten von Aktivitäten ohne Internetabhängigkeit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familien und Betreuer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern besondere Momente, Lieder und Geschichten zum gemeinsamen Anschauen oder Teilen mit denen, die die App nicht nutzen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kleine Unternehmen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nutzen UGC, Testimonials und Backstage-Material für Schaufenster, Präsentationen und Omnichannel-Kampagnen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten und Autodidakten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Rezepte, Musiklektionen, Gartentipps oder Trainingsroutinen herunter, um im richtigen Tempo zu üben.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Egal welches Profil: Das Herunterladen von Videos spart Zeit, Daten und garantiert ständigen Zugriff auf Hauptinhalte.
            </p>
          </div>

          {/* Rechtliche Aspekte */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist das Herunterladen von TikTok-Videos legal?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was das Gesetz über Downloads sagt
            </h2>
            <p className="section-muted mb-4">
              Das Herunterladen von TikTok-Videos ist eine Grauzone. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Die Plattformregeln erlauben das Speichern öffentlicher Clips</a> zum Offline-Ansehen, wenn der Creator es nicht blockiert hat. Für den persönlichen Gebrauch gibt es kein Problem, aber die Bedingungen verbieten Tools von Drittanbietern, also könnte TikTok theoretisch Muster erkennen. In der Praxis konzentrieren sich die Bemühungen auf massive Re-Uploads.
            </p>
            <p className="section-muted mb-4">
              Urheberrechtsgesetze wie das DMCA schützen die Creator. Das Speichern eines Videos zum späteren Ansehen fällt meist unter Fair Use, wenn du es nicht änderst oder verteilst. Reposten ohne Credit oder ohne Transformation stellt eine Verletzung dar und kann zu Entfernungen führen. Soundtracks haben auch Eigentümer, obwohl kurze Ausschnitte für den persönlichen Gebrauch selten markiert werden.
            </p>
            <p className="section-muted mb-2">
              Situationen, in denen der Download erlaubt ist:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Erlaubnis des Creators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn der Autor den Download freigibt, kannst du ohne Bedenken herunterladen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Inhalte im Public Domain
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Werke ohne Urheberrechtsschutz können frei heruntergeladen werden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Faire Bildungsnutzung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Schulen und Lehrer können auf kurze Ausschnitte für pädagogische Zwecke im Rahmen von Fair Use zurückgreifen. Überprüfe immer die Videobeschreibung.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Fazit: Halte die Nutzung privat und respektvoll. Wenn du teilen möchtest, frage um Erlaubnis oder kreditiere den Autor klar.
            </p>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von TikTok-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Gefahren und wie man sie vermeidet
            </h2>
            <p className="section-muted mb-4">
              Tools von Drittanbietern können Fallen verstecken: von Viren bis zu Betrug. Bevor du einen Link auf einer Website einfügst, lohnt es sich, die Hauptrisiken zu kennen, um dein Gerät zu schützen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware auf verdächtigen Seiten">
                Einige Portale fügen Viren, Trojaner oder Ransomware zusammen mit dem Download hinzu. Ein Klick kann deine Daten gefährden oder das Gerät sperren.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Betrug">
                Gefälschte Buttons imitieren den TikTok-Login-Bildschirm und stehlen Zugangsdaten oder bieten "Updates" an, die Spyware installieren.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenexposition">
                Unzuverlässige Tools protokollieren deinen Verlauf und verkaufen Informationen an Dritte, was zu Spam und Betrugsversuchen führt.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualitätsverlust">
                Schwache Dienste komprimieren die Datei zu stark, was zu Unterbrechungen, asynchronem Audio und verblassten Farben führt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Kontosperrung">
                TikTok kann massive Downloads über externe Tools erkennen und Profile sperren, besonders von Creators.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Speicher voll">
                Das Ansammeln großer Videos belegt schnell Speicher und kann den Player zum Absturz bringen. Halte die Bibliothek organisiert.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze nur vertrauenswürdige Seiten, analysiere heruntergeladene Dateien und surfe wenn möglich mit VPN und aktualisierter Antivirensoftware.
            </p>
          </div>

          {/* Warum videodownload.io nutzen */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io nutzen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein vertrauenswürdiger Partner für TikTok-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io entwickelt, um eine zuverlässige Methode ohne aufdringliche Werbung oder schwere Apps zu haben. Seitdem haben wir Millionen Downloads sicher verarbeitet. Wir verbessern das Tool weiterhin basierend auf Community-Feedback, um ein einfaches und stabiles Erlebnis zu bieten.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Sofortige Geschwindigkeit">
                Wir verarbeiten die meisten Videos in wenigen Sekunden dank optimierter Server.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Keine nervige Werbung">
                Saubere Oberfläche ohne Pop-ups oder seltsame Weiterleitungen.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Ohne Wasserzeichen">
                Wir liefern die Datei ohne Watermark, bereit für Bearbeitungen oder autorisierte Reposts.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Downloads">
                Nutze so viel du willst. Wir begrenzen nicht die Anzahl der Videos pro Tag.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
                Nur ein Browser auf deinem Handy, Tablet oder Computer. Nichts zu installieren.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Garantierte Privatsphäre">
                Wir tracken deine Downloads nicht und speichern keine Links. Nach dem Prozess bleiben keine Daten gespeichert.
              </FeatureCard>
            </div>
          </div>

          {/* Häufige Fragen */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufig gestellte Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Alles, was du über videodownload.io wissen musst
            </h2>
            <p className="section-muted mb-4">
              Wir haben schnelle Antworten zusammengestellt, damit du den Service beruhigt nutzen und deine TikTok-Downloads optimal nutzen kannst.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private TikTok-Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein. Das Tool funktioniert nur mit öffentlichen Videos. Private Inhalte erfordern die Erlaubnis des Creators. Wenn das Video dein eigenes ist, verwende den nativen TikTok-Download.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Macht das Herunterladen mein Handy langsam?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nicht durch uns. Die Dateien sind leicht und wir installieren nichts. Überwache nur den Speicherplatz, wenn du viele Videos herunterlädst.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum hat das heruntergeladene Video kein Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Weil wir den Original-Stream verwenden und das von TikTok angebrachte Wasserzeichen entfernen, sodass die Datei sauber für den persönlichen Gebrauch bleibt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja. Nach dem Einfügen des Links wähle das MP3-Format, um nur den Ton zu speichern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was tun, wenn der Download fehlschlägt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Stelle sicher, dass der Link vollständig ist und das Video öffentlich ist. Versuche einen anderen Browser oder lösche den Cache. Bestehen bleibt? Rufe unseren Support an – wir antworten schnell.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es eine Größen- oder Längenbeschränkung?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir unterstützen Videos bis zu 60 Minuten. Die größeren brauchen etwas mehr Zeit zur Verarbeitung, werden aber vollständig heruntergeladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr die Videos, die ich heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein. Der Prozess erfolgt in Echtzeit und nichts wird gespeichert. Die Datei bleibt nur bei dir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Erfährt der Creator, dass ich das Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein. TikTok sendet keine Benachrichtigungen; der Download bleibt anonym.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Jetzt starten */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Bereit, deine Favoriten zu speichern?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Nimm deine Videos in Sekunden offline
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                TikTok-Link kopieren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Hier einfügen
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Auf Herunterladen klicken
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  TikTok-Video herunterladen
                </Button>
              </a>
            </div>
          </div>

          {/* Weitere Downloader entdecken */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Weitere Downloader entdecken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Von deinen Lieblingsplattformen herunterladen
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
      <FeatureCard icon={VideoIcon} title="Downloads in HD">
        Lade bis zu 1080p herunter (oder mehr, wenn verfügbar) und behalte lebendige Farben und scharfe Details, da wir die Datei direkt von der Quelle erfassen.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Ohne Wasserzeichen">
        Anders als die offizielle App liefern wir das Video sauber, ohne Logos, bereit für Bearbeitung oder autorisierten Repost.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
        Nutze auf Android, iOS, Windows oder macOS direkt im Browser. Nichts zu installieren oder konfigurieren.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Verarbeitung">
        Die meisten Downloads dauern nur wenige Sekunden dank optimierter Server in der Nähe von TikTok.
      </FeatureCard>
      <FeatureCard icon={Download} title="100% kostenlos">
        Keine Registrierung, Kreditkarte oder versteckte Gebühr. Lade so viele Videos herunter, wie du willst, jeden Tag.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicher und privat">
        Wir tracken nichts und speichern keine Links. Nach dem Download bleiben keine Informationen bei uns.
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
      <StepCard step={1} title="Kopiere den Video-Link">
        <a href="https://www.tiktok.com/">Öffne TikTok</a> per App oder Browser, finde das gewünschte Video, tippe auf Teilen und wähle «Link kopieren», um die vollständige URL zu erhalten.
      </StepCard>
      <StepCard step={2} title="Füge den Link auf videodownload.io ein">
        Öffne videodownload.io im Browser, klicke in das obere Feld und füge die kopierte Adresse ein. Bestätige, dass der Link mit tiktok.com beginnt und das Video öffentlich ist.
      </StepCard>
      <StepCard step={3} title="Lass das System die Datei vorbereiten">
        Klicke auf «Herunterladen». Wir holen das Video von den TikTok-Servern, entfernen das Wasserzeichen und prüfen die Qualität in wenigen Sekunden.
      </StepCard>
      <StepCard step={4} title="Wähle das Format und speichere">
        Wähle MP4 für Video + Audio oder MP3, um nur den Ton herunterzuladen. Die Datei landet im Standard-Download-Ordner des Geräts und ist zum Offline-Ansehen verfügbar.
      </StepCard>
    </div>
  );
}
