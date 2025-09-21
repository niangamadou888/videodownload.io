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

export default function YouTubePageDe() {
  const { buildUrl } = useLanguageNavigation();

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Fügen Sie eine YouTube-Video-, Shorts- oder Playlist-URL ein"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Funktionen, die das Herunterladen von YouTube-Videos einfach und zuverlässig machen
          </h2>
          <p className="text-muted-foreground mb-6">
            Hier sind sechs leistungsstarke Funktionen, die videodownload.io zur ersten Wahl machen,
            wenn Sie YouTube-Videos schnell, sicher und effizient herunterladen möchten. Jede Funktion wurde
            entwickelt, um Ihr Erlebnis zu verbessern und Ihnen Flexibilität für all Ihre Download-Bedürfnisse zu bieten.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So laden Sie YouTube-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine klare Schritt-für-Schritt-Anleitung zum mühelosen Speichern von Videos
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io ist es ganz einfach, YouTube-Videos auf Ihr Gerät zu holen. Folgen Sie diesen vier einfachen
            Schritten, um jedes Video innerhalb weniger Minuten herunterzuladen. Jeder Schritt ist intuitiv gestaltet,
            selbst wenn Sie kein Technikprofi sind.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                YouTube-Video herunterladen
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum YouTube-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die wichtigsten Einsatzszenarien für den Offline-Zugriff
            </h2>
            <p className="section-muted mb-4">
              Das Herunterladen von YouTube-Videos gibt Ihnen die Freiheit, Inhalte jederzeit und überall ohne Internetverbindung anzusehen.
              Ob Sie Daten sparen, eine Reise vorbereiten oder Inhalte archivieren – Offline-Videos sind unglaublich praktisch. Hier finden Sie
              einige der besten Gründe, YouTube-Videos für den persönlichen Gebrauch herunterzuladen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reisen ohne Internetzugang
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Filme, Vlogs oder Musikvideos, um sie auf langen Flügen, Zugfahrten oder in abgelegenen Gegenden ohne WLAN oder mobiles Internet anzusehen.
                    So genießen Sie unterwegs Unterhaltung ohne Unterbrechungen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lernen und Weiterbildung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Tutorials, Vorlesungen oder How-to-Anleitungen für das Offline-Lernen herunter. Speichern Sie beispielsweise Coding-Walkthroughs,
                    Sprachlektionen oder DIY-Reparaturvideos, um sie in Ihrem eigenen Tempo ohne Streaming anzusehen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content-Erstellung und Bearbeitung
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sichern Sie Clips für eigene Videos wie Reactions, Montagen oder Kommentare – vorausgesetzt, Sie beachten Urheberrechte oder holen die Erlaubnis der Creator ein.
                    Ideal für YouTuber oder TikTok-Creator.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lieblingsvideos archivieren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Manche Videos verschwinden wegen Kanaländerungen oder Urheberrechtsproblemen. Durch das Herunterladen bewahren Sie persönliche Favoriten oder seltene Inhalte langfristig auf.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mobildaten sparen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streaming verbraucht viele Daten, besonders bei limitierten Tarifen. Laden Sie Videos über WLAN herunter und schauen Sie sie später ohne Sorge um Datenlimits oder hohe Kosten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline-Unterhaltungsbibliothek
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Stellen Sie eine Sammlung aus Musikvideos, Trailern oder Vlogs zusammen, um sie offline zu genießen – perfekt für Camping, das Fitnessstudio oder entspannte Abende ohne Pufferpausen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Workshops und Präsentationen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fachleute können Branchenvideos wie Keynotes oder Schulungen herunterladen, um sie in Offline-Workshops oder Meetings abzuspielen – ganz ohne Abhängigkeit vom Internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von YouTube-Videos bietet Flexibilität und Komfort und ermöglicht es Ihnen, Inhalte zu Ihren Bedingungen zu genießen – ob zur Unterhaltung, für die Arbeit oder zum Lernen.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer sollte YouTube-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menschen, die am meisten von Offline-Videos profitieren
            </h2>
            <p className="section-muted mb-4">
              YouTube-Videos herunterzuladen ist nicht nur etwas für Gelegenheitszuschauer – es ist ein Gamechanger für bestimmte Gruppen, die Offline-Zugriff für Arbeit, Kreativität oder Komfort benötigen.
              Hier erfahren Sie, wer besonders profitiert und warum es sich lohnt.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content-Creator und Influencer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTuber, TikToker oder Streamer können Clips für Reaction-Videos, Mashups oder Analysen sichern – sofern sie Urheberrecht und Fair-Use-Regeln respektieren oder die Erlaubnis der ursprünglichen Creator einholen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Schüler, Studierende und Lehrkräfte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichern Sie Lerninhalte wie Mathe-Tutorials, Wissenschaftserklärungen oder Geschichtsdokumentationen für das Offline-Studium oder den Unterricht – ideal in Regionen mit schlechtem Internet oder für fokussiertes Lernen ohne Ablenkung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Vielfahrer und Vielreisende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ob im Flugzeug, Zug oder an abgelegenen Orten – heruntergeladene Videos sorgen für Unterhaltung, ohne auf instabiles WLAN oder teure Datentarife angewiesen zu sein.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Musikfans
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wandeln Sie Musikvideos oder Live-Auftritte in MP3s für Offline-Playlists um – perfekt für Workouts oder Interviews, solange die Quelle legal ist.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Video-Archivare
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sammler oder Fans von Nischeninhalten können seltene Videos, alte Uploads oder Lieblingsclips sichern, die sonst durch Account-Schließungen oder Löschungen verschwinden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fitness- und Wellness-Fans
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Laden Sie Yoga-Sessions, Workouts oder Meditationen herunter, um sie offline zu verfolgen – zu Hause, im Park oder im Studio, ganz ohne Verbindung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Forscher und Fachleute
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wissenschaftler oder Branchenexpert:innen können Konferenzvorträge, Webinare oder Trainings offline speichern, um sie bei Feldarbeit, Präsentationen oder Studien griffbereit zu haben.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Ganz gleich, welcher Lebensstil – das Herunterladen von YouTube-Videos spart Zeit, Daten und Aufwand und hält wichtige Inhalte jederzeit verfügbar.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, YouTube-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was Sie zur Rechtslage wissen sollten
            </h2>
            <p className="section-muted mb-4">
              Ob das Herunterladen von YouTube-Videos erlaubt ist, hängt von mehreren Faktoren ab. Die Nutzungsbedingungen von YouTube verbieten Downloads ausdrücklich,
              es sei denn, die Plattform bietet eine offizielle Option wie das {" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=en&co=GENIE.Platform%3DAndroid"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                Offline-Feature von YouTube Premium
              </a>{" "}
              für Abonnent:innen. Nach US-amerikanischem Urheberrecht ist das Herunterladen {" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                urheberrechtlich geschützter Inhalte
              </a>{" "}
              ohne die Zustimmung des Creators oder Rechteinhabers illegal und kann zu zivilrechtlichen Klagen führen – auch wenn die Durchsetzung gegen Privatpersonen selten ist.
            </p>
            <p className="section-muted mb-2">
              Es gibt jedoch Ausnahmen, in denen das Herunterladen zulässig sein kann:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Gemeinfreie Videos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Inhalte, die nicht mehr urheberrechtlich geschützt sind, dürfen frei heruntergeladen werden.
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
                    Einige YouTube-Videos erlauben das Herunterladen für bestimmte Zwecke wie Remixing oder Teilen – solange Sie die Lizenzbedingungen einhalten.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Erlaubnis der Creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn der oder die Creator das Herunterladen ausdrücklich gestatten, sind Sie auf der sicheren Seite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Fair-Use-Fälle
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Begrenzte Downloads für Bildung, Kommentar, Kritik oder Forschung können unter {" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=en"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      Fair Use
                    </a>{" "}
                    fallen – das hängt jedoch vom Kontext und der konkreten Nutzung ab.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Prüfen Sie im Zweifel die Lizenz in der Videobeschreibung oder holen Sie die Erlaubnis der Creator ein. YouTube Premium bietet eine legale Möglichkeit,
              Videos für die private Nutzung offline zu speichern. Wenn Sie unsicher sind, entscheiden Sie sich lieber für die sichere Variante, um Urheber zu respektieren und keine Gesetze zu verletzen.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von YouTube-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potenzielle Gefahren und wie Sie sie vermeiden
            </h2>
            <p className="section-muted mb-4">
              So praktisch das Herunterladen von YouTube-Videos ist – mit den falschen Tools oder ohne Blick auf die Rechtslage gehen Sie Risiken ein. Wenn Sie die Gefahren kennen,
              treffen Sie klügere Entscheidungen und schützen Gerät sowie Daten. Auf diese Punkte sollten Sie achten.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware von unseriösen Websites"
              >
                Viele Download-Seiten sind voller gefälschter „Download“-Buttons, Pop-up-Werbung oder versteckter Skripte, die {" "}
                <a
                  href="https://cyberpress.org/youtube-downloader-malware/"
                  className="text-primary hover:text-primary-glow underline transition-colors"
                >
                  Viren oder Malware auf Ihrem Gerät installieren
                </a>
                . Diese können Daten stehlen oder Ihr System beschädigen. Nutzen Sie vertrauenswürdige Plattformen wie videodownload.io, um sicher zu bleiben.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Rechtliche Konsequenzen">
                Das Herunterladen urheberrechtlich geschützter Videos ohne Erlaubnis verstößt gegen die YouTube-Nutzungsbedingungen und kann zu Kontosperrungen oder – in seltenen Fällen – rechtlichen Schritten durch Rechteinhaber führen.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Schlechte Qualität oder beschädigte Dateien">
                Manche Tools komprimieren Videos zu stark oder erzeugen korrupte Dateien. Das führt zu ruckeligen Bildern, fehlendem Ton oder unbrauchbaren Downloads.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Verletzung der Privatsphäre">
                Unseriöse Downloader verlangen unnötige Berechtigungen oder protokollieren Ihre Aktivitäten. Dadurch riskieren Sie Datenlecks oder Tracking.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Unvollständige Downloads">
                Unzuverlässige Konverter können abstürzen oder mitten im Download stoppen. Das kostet Zeit und kann Ihre Dateien beschädigen.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Ethische Fragen für Creator">
                Durch Downloads werden Werbeanzeigen umgangen, wodurch Creator Einnahmen verlieren, die auf Views oder Werbung basieren. Unterstützen Sie Creator, indem Sie Inhalte online ansehen oder um Erlaubnis bitten.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Wenn Sie ein vertrauenswürdiges, sicheres Tool wie videodownload.io verwenden und Urheberrechte respektieren, minimieren Sie diese Risiken und laden Inhalte sicher herunter.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io nutzen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ihr vertrauenswürdiger Partner für YouTube-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io ins Leben gerufen, um eine sichere, einfache und schnelle Möglichkeit zum Herunterladen von YouTube-Videos zu bieten – ohne die Kopfschmerzen dubioser Websites.
              Unser Ziel war eine schlanke Plattform, die den Lärm werbeüberladener, riskanter Downloader durchbricht. Hier sind sechs Gründe, warum videodownload.io die beste Wahl für Ihre YouTube-Downloads ist.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Frei von Malware und sicher">
                Unsere Seite ist frei von Pop-up-Werbung, Fake-Buttons oder bösartigen Skripten – so bleibt Ihr Gerät vor Viren und Spyware geschützt.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Benutzerfreundliches Design">
                Dank klarer Oberfläche und einfachem Ablauf können alle in Sekunden Videos herunterladen – ganz ohne technische Vorkenntnisse.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Downloads mit hoher Geschwindigkeit">
                Unsere optimierten Server verarbeiten Videos schnell, sodass Sie Ihre Dateien ohne lange Wartezeiten erhalten – auch bei hoher Qualität oder langen Videos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexible Formatoptionen">
                Wählen Sie MP4 für Videos oder MP3 für Audio – mit mehreren Auflösungen von 720p bis 4K, passend zu Ihren Anforderungen.
              </FeatureCard>
              <FeatureCard icon={Download} title="Komplett kostenlos">
                Laden Sie unbegrenzt viele Videos herunter, ohne einen Cent zu bezahlen. Keine Abos, keine versteckten Gebühren – voller Funktionsumfang zum Nulltarif.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Datenschutz an erster Stelle">
                Wir verfolgen Ihre Downloads nicht, speichern keine persönlichen Daten und geben keine Informationen weiter – Ihre Aktivitäten bleiben privat.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Fragen zu videodownload.io und YouTube-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben die häufigsten Fragen zur Nutzung von videodownload.io und zum Herunterladen von YouTube-Videos zusammengestellt, damit Sie mit einem guten Gefühl starten können.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Ist videodownload.io wirklich kostenlos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, unsere Plattform ist zu 100 % kostenlos. Sie können so viele Videos herunterladen, wie Sie möchten – ohne Gebühren oder Limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Muss ich eine Software installieren, um Videos herunterzuladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, videodownload.io läuft vollständig im Browser. Sie benötigen keine Apps, Erweiterungen oder zusätzlichen Downloads – so bleibt alles einfach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Kann ich komplette YouTube-Playlists herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolut. Fügen Sie einfach die Playlist-URL ein, und unser System verarbeitet alle Videos der Liste, damit Sie sie in einem Durchgang speichern können.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Ist die Nutzung von videodownload.io sicher?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, unsere Seite ist sicher – ohne Pop-up-Werbung oder schädliche Links. Wir legen Wert auf Sicherheit und testen die Plattform regelmäßig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Kann ich Videos in hoher Qualität wie 4K herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wenn das YouTube-Video in 4K verfügbar ist, können Sie es auch in dieser Auflösung speichern. Wir unterstützen Qualitäten von 360p bis 4K – abhängig von der Quelle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Was mache ich, wenn ein Video nicht richtig heruntergeladen wird?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Überprüfen Sie die URL und Ihre Internetverbindung. Wenn das Problem bleibt, kontaktieren Sie unser Support-Team – wir helfen Ihnen bei der Fehlerbehebung.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Kann ich nur die Audiospur von YouTube-Videos extrahieren?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, unsere MP3-Funktion ermöglicht es, ausschließlich den Ton eines YouTube-Videos herunterzuladen – ideal für Musik oder Podcast-Ausschnitte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Ist das Herunterladen von YouTube-Videos legal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Das hängt vom Video ab. Die Nutzungsbedingungen von YouTube verbieten Downloads ohne Erlaubnis, doch gemeinfreie Inhalte, Creative-Commons-Videos oder Downloads mit Zustimmung der Creator sind meist in Ordnung.
                  Fair Use kann für Bildung oder Kommentare gelten – prüfen Sie jedoch immer die Lizenz, um Probleme zu vermeiden.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Jetzt mit dem Herunterladen beginnen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Sichern Sie sich Ihre YouTube-Videos in Sekundenschnelle
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Schneller und einfacher Ablauf
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sichere, malwarefreie Downloads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Hochwertige Video- und Audiooptionen
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  YouTube-Video herunterladen
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Weitere Downloader entdecken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Laden Sie Inhalte von Ihren Lieblingsplattformen herunter
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
                        Lade {p.name}-Video herunter
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
      <FeatureCard icon={VideoIcon} title="Video-Downloads in hoher Qualität">
        Wählen Sie aus mehreren Auflösungen wie 720p, 1080p oder sogar 4K, wenn das Video es unterstützt. Egal ob Tutorial oder Musikvideo – Sie entscheiden die passende Qualität, ohne komplizierte Einstellungen.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Blitzschnelle Download-Geschwindigkeiten">
        Unsere optimierten Server laden Videos in Sekunden statt Minuten. Je nach Verbindung und Videolänge sind die meisten Dateien in unter einer Minute bereit – ohne langes Warten.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio-Extraktion als MP3">
        Sie brauchen nur den Ton? Konvertieren Sie jedes YouTube-Video mit einem Klick in eine MP3-Datei. Ideal, um Musik, Podcasts oder Vorträge für das Offline-Hören zu speichern.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Keine Softwareinstallation nötig">
        Laden Sie Videos direkt im Browser auf jedem Gerät – ob Desktop, Tablet oder Smartphone. Keine Apps, Plug-ins oder zusätzlichen Programme nötig.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Komplette Playlists herunterladen">
        Speichern Sie ganze YouTube-Playlists auf einmal. Statt jedes Video einzeln zu laden, genügt der Playlist-Link, und wir bereiten alle Clips übersichtlich auf.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sichere, werbefreie Oberfläche">
        Anders als viele andere Seiten bleibt videodownload.io frei von nervigen Pop-ups, Weiterleitungen oder verdächtigen Links. Das saubere Design sorgt für eine sichere, störungsfreie Erfahrung.
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
      <StepCard step={1} title="Kopieren Sie die YouTube-Video-URL">
        Öffnen Sie YouTube im Browser oder in der App, suchen Sie das gewünschte Video und kopieren Sie dessen URL. Nutzen Sie die Adresszeile oder klicken Sie auf "Teilen" und wählen Sie "Link kopieren".
      </StepCard>
      <StepCard step={2} title="Fügen Sie die URL auf unserer Website ein">
        Besuchen Sie videodownload.io in einem beliebigen Browser. Auf der Startseite finden Sie das Eingabefeld, in das Sie den kopierten Link einfügen – per Rechtsklick oder langem Tippen.
      </StepCard>
      <StepCard step={3} title="Wir verarbeiten die Videodatei">
        Klicken Sie auf den "Download"-Button neben dem Eingabefeld. Unser System ruft das Video ab und bereitet es vor. Wählen Sie bei Bedarf Format (z. B. MP4 oder MP3) und Qualität (z. B. 1080p oder 4K).
      </StepCard>
      <StepCard step={4} title="Speichern und organisieren Sie Ihr Video">
        Sobald die Verarbeitung abgeschlossen ist, erscheint ein Download-Link. Speichern Sie die Datei auf Ihrem Gerät und benennen Sie sie bei Bedarf um, damit Ihre Sammlung geordnet bleibt.
      </StepCard>
    </div>
  );
}
