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

export default function FacebookPageDe() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Facebook Video Herunterladen | Kostenlos & HD",
    description: "Facebook-Videos, Reels und Livestreams in mp4, 1080p und HD-Qualität herunterladen. Kostenloser Online-Video-Downloader und Converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische Download-Box (ohne weitere Startseiten-Sektionen) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Fügen Sie die URL eines Facebook-Videos, Reels oder Watch-Inhalts ein"
            />
          </div>
          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tools, die das Herunterladen von Facebook-Videos einfach machen
          </h2>
          <p className="text-muted-foreground mb-6">
            Hier sind sechs Funktionen, die videodownload.io zur ersten Wahl für das Herunterladen von Facebook-Videos machen. Jede davon spart Zeit, garantiert Qualität und sorgt für ein sicheres, unkompliziertes Erlebnis.
          </p>

          <EnhancedFeatures />

          {/* So funktioniert der Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So laden Sie Facebook-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Schritt-für-Schritt-Anleitung für schnelle Downloads
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io laden Sie Facebook-Videos schnell und einfach herunter, auch ohne Technik-Know-how. Folgen Sie diesen vier Schritten und speichern Sie Ihr Video in wenigen Minuten auf Ihrem Gerät.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Download Facebook Video
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Facebook-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die besten Einsatzmöglichkeiten für Offline-Nutzung
            </h2>
            <p className="section-muted mb-4">
              Mit heruntergeladenen Facebook-Videos sehen oder nutzen Sie Inhalte ohne Internetverbindung. Ideal, um Daten zu sparen, Erinnerungen zu archivieren oder neues Material zu erstellen. Hier sind die wichtigsten Gründe für den Download - ob privat oder beruflich.
          </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline ansehen unterwegs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Videos für Pendelstrecken, Flüge oder Orte ohne WLAN und Daten - etwa in ländlichen Regionen oder auf Reisen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content-Erstellung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Clips für Reactions, Edits oder Montagen in Ihren eigenen Channels herunter - natürlich nur mit Beachtung der Urheberrechte oder nach Zustimmung des Creators.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen und Training
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sichern Sie Tutorials, Webinare oder How-to-Videos für das Lernen offline - etwa Koch-Demos, Fitness-Routinen oder Business-Tipps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Erinnerungen bewahren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewahren Sie Familienvideos, Event-Highlights oder Gruppenbeiträge auf, die verschwinden könnten, wenn Accounts gelöscht oder Privatsphäreneinstellungen geändert werden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing und Business
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Unternehmen laden eigene Brand-Videos oder Livestreams herunter, um sie offline in Präsentationen, Ads oder Kundenterminen einzusetzen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Datenvolumen sparen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie über WLAN herunter, um mobiles Datenvolumen zu schonen - besonders bei langen oder hochauflösenden Videos mit limitierten Tarifen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Unterhaltung offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Stellen Sie eine Sammlung aus witzigen Clips, Musikvideos oder Livestreams zusammen, um sie unterwegs oder in Pausen offline zu genießen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Teilen in Communities
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Videos aus Facebook-Gruppen oder -Seiten, um sie in Workshops, Kursen oder Community-Events ohne Internet zu teilen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Facebook-Videos herunterzuladen verschafft Ihnen Flexibilität: Nutzen Sie Inhalte, wann und wo Sie wollen - ganz ohne Verbindung.
            </p>
          </div>

          {/* Wer herunterladen sollte */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer Facebook-Videos herunterladen sollte
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Für wen sich der Offline-Zugriff lohnt
            </h2>
            <p className="section-muted mb-4">
              Facebook-Videos herunterzuladen hilft jedem, der Inhalte offline ansehen oder einsetzen möchte. Nicht nur Gelegenheitsnutzer profitieren - bestimmte Gruppen sparen dadurch Zeit und Aufwand. Hier sehen Sie, für wen sich der Download besonders lohnt.
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
                    Influencer, YouTuber oder TikToker laden Videos für Reactions, Kooperationen oder Edits herunter - vorausgesetzt, sie beachten das Urheberrecht oder holen eine Erlaubnis ein.
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
                    Sichern Sie Lerninhalte wie Vorlesungen, Tutorials oder Webinare für das Studium offline oder den Unterricht - ideal bei schlechter Verbindung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reisende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Unterhaltung wie virale Clips oder Livestreams herunter, um sie auf Reisen ohne Internetzugang anzusehen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Unternehmer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie eigene Brand-Videos, Livestreams oder Ads für den Offline-Einsatz in Marketing, Pitches oder Kundenpräsentationen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Erinnerungssammler
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewahren Sie persönliche Videos, Familienmomente oder Gruppenbeiträge, die durch Account-Änderungen oder Privatsphäreneinstellungen verschwinden könnten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fitness-Fans
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Workouts, Yoga-Sessions oder Gesundheitstipps herunter, um sie offline daheim oder im Studio zu nutzen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Community-Leiter
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Gruppen-Videos oder Seiteninhalte, um sie in Meetings, Events oder Workshops ohne WLAN zu teilen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Videos zur Inspiration herunter - etwa DIY-Projekte oder Bastel-Tutorials - und nutzen Sie sie offline beim Arbeiten an Ihren Hobbys.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechtliches */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, Facebook-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die rechtlichen Rahmenbedingungen verstehen
            </h2>
            <p className="section-muted mb-4">
              Facebook-Videos herunterzuladen ist juristisch nicht ganz trivial. Laut den Nutzungsbedingungen von Facebook dürfen Inhalte ohne Zustimmung des Urhebers oder der Plattform nicht gespeichert werden. Nach US-Copyright-Recht ist das Sichern urheberrechtlich geschützter Videos ohne Freigabe illegal und kann - wenn auch selten - zu Klagen führen. Ausnahmen sind unter anderem:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Videos aus dem Public Domain
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Inhalte, die gemeinfrei sind und nicht mehr dem Urheberrecht unterliegen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Creative-Commons-Lizenzen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Videos mit Creative-Commons-Lizenz, die den Download für bestimmte Zwecke erlauben - etwa zum Teilen oder Remixen - sofern Sie die Bedingungen einhalten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Zustimmung des Creators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Videos, bei denen der Urheber ausdrücklich den Download erlaubt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Fair-Use-Szenarien
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fair-Use-Situationen, etwa für Bildung, Kommentare oder Forschung - abhängig davon, wie Sie das Video weiterverwenden.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Prüfen Sie die Videobeschreibung auf Lizenzhinweise oder fragen Sie die Urheber nach einer Freigabe. Über die Speicherfunktion von Facebook können Sie Beiträge für den persönlichen Gebrauch vormerken - eine legale Alternative. Bleiben Sie auf der sicheren Seite, indem Sie Urheberrechte achten und Creators vor dem Download um Erlaubnis bitten.
            </p>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von Facebook-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Gefahren, die Sie beim Download vermeiden sollten
            </h2>
            <p className="section-muted mb-4">
              Facebook-Videos herunterzuladen ist praktisch, bringt aber Risiken mit sich, wenn Sie unseriöse Tools nutzen oder rechtliche Grenzen ignorieren. Wer diese Risiken kennt, schützt sein Gerät besser und bleibt sicher. Achten Sie besonders auf Folgendes:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware von fragwürdigen Seiten"
              >
                Viele Download-Seiten locken mit Fake-Buttons, Pop-ups oder versteckten Skripten <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">, die Viren oder Malware einschleusen</a>. So etwas schädigt Ihr Gerät oder stiehlt Daten. Setzen Sie auf vertrauenswürdige Plattformen wie videodownload.io, um das zu vermeiden.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Rechtliche Probleme">
                Downloaden ohne Erlaubnis verstößt gegen die Facebook-Regeln und kann zu Account-Sperren oder - in seltenen Fällen - zu rechtlichen Schritten führen. Prüfen Sie daher zuerst die Lizenz.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Dateien in schlechter Qualität"
              >
                Unzuverlässige Seiten liefern häufig unscharfe oder defekte Videos, die nicht richtig abspielen - das kostet Zeit und Speicherplatz.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenschutzrisiken">
                Dubiose Anbieter verfolgen Ihr Verhalten, sammeln persönliche Informationen oder verkaufen Ihre Daten an Dritte. Nutzen Sie Tools, die keine unnötigen Berechtigungen verlangen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Beschädigte Downloads">
                Schlecht gemachte Seiten liefern unter Umständen unvollständige Dateien, die sich nicht öffnen lassen - sehr frustrierend.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Ethische Bedenken"
              >
                Durch das Herunterladen umgehen Sie Views oder Ads - das kann Creator treffen, die auf Engagement angewiesen sind. Unterstützen Sie sie, indem Sie bei Gelegenheit online schauen.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Überfüllter Speicher"
              >
                Viele Videos, vor allem in hoher Qualität, füllen den Gerätespeicher schnell. Behalten Sie Ihre Downloads im Blick, um das zu verhindern.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Mit einer sicheren, seriösen Lösung wie videodownload.io und respektiertem Urheberrecht umgehen Sie diese Risiken und laden entspannt herunter.
            </p>
          </div>

          {/* Warum videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io nutzen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die vertrauenswürdige Wahl für Facebook-Downloads
            </h2>
            <p className="section-muted mb-4">
            Wir haben videodownload.io entwickelt, um eine schnelle, sichere und aufgeräumte Möglichkeit für Facebook-Downloads zu bieten - ganz ohne die Risiken dubioser Seiten. Unser Ziel: Downloads für alle einfach und sicher machen. Hier sind sechs gute Gründe.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sicher und ohne Malware">
                Unsere Seite verzichtet auf Pop-ups, Fake-Links oder schädliche Skripte - so bleibt Ihr Gerät vor Viren oder Spyware geschützt.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Einfache Bedienung">
                Link einfügen, auf Download klicken, fertig. Keine komplizierten Schritte, keine Technikkenntnisse erforderlich.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Schnelle Verarbeitung">
                Unsere Server bearbeiten Videos zügig und liefern Downloads in Sekunden - auch bei Livestreams oder Gruppeninhalten.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexible Formate">
                Wählen Sie MP4 für Videos oder MP3 für Audio, mit Qualitätsstufen wie 720p oder 1080p - passend zu Ihrem Bedarf.
              </FeatureCard>
              <FeatureCard icon={Download} title="Komplett kostenlos">
                Laden Sie unbegrenzt viele Videos herunter, ohne zu zahlen. Keine Abos, keine versteckten Gebühren.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Datenschutz inklusive">
                Wir tracken Ihre Downloads nicht, speichern keine Daten und teilen keine Infos - Ihre Aktivitäten bleiben privat.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufige Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antworten rund um videodownload.io und Facebook-Downloads
            </h2>
            <p className="section-muted mb-4">
              Hier finden Sie Antworten auf die häufigsten Fragen zum Herunterladen von Facebook-Videos mit videodownload.io - damit Sie direkt loslegen können.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Ist videodownload.io kostenlos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, unsere Plattform ist zu 100 % gratis. Laden Sie so viele Videos herunter, wie Sie möchten - ohne Gebühren oder Limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Muss ich eine Software installieren?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, alles läuft über den Browser. Es sind keine Apps, Erweiterungen oder Installationen nötig - ganz unkompliziert.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Kann ich Facebook-Livestreams oder Gruppenvideos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wir unterstützen Downloads von Livestreams und Gruppeninhalten, sofern Sie Zugriff darauf haben. Fügen Sie einfach den Link ein.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Ist videodownload.io sicher?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Auf jeden Fall. Unsere Seite ist sicher, ohne Pop-ups oder riskante Links. Sicherheit hat Priorität und wir testen die Plattform regelmäßig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Kann ich Videos in hoher Qualität herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, Sie können in der höchsten verfügbaren Qualität herunterladen - etwa 720p oder 1080p - je nach Originalvideo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Was, wenn ein Video nicht herunterlädt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Prüfen Sie die URL und Ihre Internetverbindung. Falls es weiterhin nicht klappt, kontaktieren Sie unser Support-Team - wir kümmern uns schnell darum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Kann ich nur den Ton eines Facebook-Videos speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, mit der MP3-Funktion extrahieren Sie den Ton aus jedem Video - ideal für Musik, Reden oder kurze Ausschnitte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Ist es legal, Facebook-Videos herunterzuladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Das kommt darauf an. Laut Facebook-Regeln ist das Herunterladen ohne Erlaubnis verboten. Gemeinfreie Videos, Inhalte mit Creative-Commons-Lizenz oder mit Zustimmung des Urhebers sind meist unproblematisch. Fair Use kann für Bildung oder Kommentare gelten - prüfen Sie immer die Lizenz, um auf der sicheren Seite zu bleiben.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Jetzt beginnen */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Jetzt herunterladen starten
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Holen Sie sich Facebook-Videos in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Schneller, einfacher Ablauf
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sichere Downloads ohne Malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video und Audio in hoher Qualität
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Facebook Video
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
      <FeatureCard icon={VideoIcon} title="Videodownloads in hoher Qualität">
        Wählen Sie Auflösungen wie 720p oder 1080p - je nachdem, was das Facebook-Video anbietet. Ob Livestream oder kurzer Clip: Sie entscheiden sich für die beste Qualität ohne komplizierte Einstellungen.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Hohe Downloadgeschwindigkeit">
        Unsere Server holen Facebook-Videos flott ab. Die meisten Downloads dauern weniger als eine Minute - abhängig von Ihrer Verbindung und der Videolänge.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio einfach extrahieren">
        Sie brauchen nur den Ton? Wandeln Sie Facebook-Videos mit einem Klick in MP3-Dateien um. Perfekt für Musik, Reden oder Podcast-Ausschnitte zum Offline-Hören.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Keine Software nötig">
        Laden Sie Videos direkt über unsere Website mit jedem Browser auf Smartphone, Tablet oder Desktop herunter. Keine Apps, keine Zusatzprogramme.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Supports Live- und Gruppenvideos">
        Speichern Sie Beiträge, Livestreams oder Inhalte aus privaten Gruppen (sofern Sie Zugriff haben). Link einfügen genügt - wir erledigen den Rest, auch bei speziellen Formaten.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sichere, werbefreie Oberfläche">
        Unsere Seite kommt ohne Pop-ups, Fake-Buttons oder riskante Redirects aus. So laden Sie jedes Mal in einer sauberen, sicheren Umgebung herunter.
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
      <StepCard step={1} title="Facebook-Video-URL kopieren">
        <a href="http://www.facebook.com">Öffnen Sie Facebook</a> in der App oder im Browser, suchen Sie das gewünschte Video, den Livestream oder Gruppenpost und kopieren Sie die URL. Tippen Sie auf die drei Punkte und wählen Sie "Link kopieren" oder übernehmen Sie die Adresse aus der Browserleiste.
      </StepCard>
      <StepCard step={2} title="URL auf unserer Seite einfügen">
        Besuchen Sie videodownload.io in einem beliebigen Browser. Auf der Startseite finden Sie das Downloadfeld - fügen Sie dort den kopierten Facebook-Link ein und prüfen Sie ihn auf Richtigkeit.
      </StepCard>
      <StepCard step={3} title="Wir verarbeiten das Video">
        Klicken Sie auf "Download". Unser System ruft das Video ab und bereitet es in Sekunden für Sie vor. Wählen Sie anschließend Format und Qualität, z. B. MP4 für Video oder MP3 für Audio.
      </StepCard>
      <StepCard step={4} title="Facebook-Video speichern">
        Sobald der Downloadlink erscheint, klicken Sie ihn an, um die Datei auf Ihrem Gerät zu sichern. Benennen Sie sie bei Bedarf um, damit Ihre Downloads übersichtlich bleiben.
      </StepCard>
    </div>
  );
}
