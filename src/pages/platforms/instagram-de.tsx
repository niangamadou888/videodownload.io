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

export default function InstagramPageDe() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Instagram Video Herunterladen | Kostenlos & HD",
    description:
      "Lade Instagram-Videos, Reels, Stories und IGTV in mp4, 1080p und 4k herunter. Kostenloser Online-Video-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische Download-Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Instagram Video Herunterladen
          </h1>
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Füge eine URL zu einem Instagram-Video, Reel oder einer Story ein"
            />
          </div>
          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Instagram-Videos mühelos herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Dein einfacher Leitfaden zum Speichern von Reels und Clips für die Offline-Nutzung.
          </p>

          <EnhancedFeatures />

          {/* Anleitung */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du Instagram-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Schritt-für-Schritt-Anleitung für einen reibungslosen Download
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io holst du dir Instagram-Videos im Handumdrehen
            auf dein Gerät. Folge diesen vier klaren Schritten und lade jedes
            Video in wenigen Minuten herunter. Jeder Schritt ist intuitiv
            gestaltet, selbst wenn du kein Tech-Profi bist.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Instagram-Video herunterladen
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Instagram-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die besten Einsatzmöglichkeiten
            </h2>
            <p className="section-muted mb-4">
              Der schnelle Instagram-Feed lässt Highlights oft verschwinden.
              Durch Downloads behältst du die Clips, die zählen, und verwandelst
              Scrollen in eine persönliche Sammlung. Es geht nicht darum, jeden
              Post zu sichern, sondern Inhalte zu behalten, die inspirieren oder
              etwas bedeuten. Du entscheidest, was bleibt – auch wenn Accounts
              privat werden oder Beiträge gelöscht werden.
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
                    Speichere Reisetipps oder Workout-Reels für Flüge oder Trips
                    ohne Empfang. Eltern laden Kinderlieder oder Story-Clips für
                    lange Autofahrten, damit der Nachwuchs ohne WLAN beschäftigt
                    bleibt.
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
                    Creators nutzen Downloads zum Remixen. Eine Modebloggerin
                    speichert Outfit-Reels, um sie in ihren Content einzubauen
                    und Voiceovers oder neue Perspektiven hinzuzufügen.
                    Musiker:innen greifen Trend-Sounds ab, um sie in ihre Tracks
                    zu layern – ganz ohne Wasserzeichen für saubere Edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backups deiner Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram kann Inhalte löschen oder Fehler haben, daher
                    sichern Creators ihre Reels auf Festplatten. Studierende
                    speichern Lernhacks oder Vorlesungsclips für ihre Notizen und
                    schauen sie ohne App-Login.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Für andere Plattformen wiederverwenden
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mach aus einem Reel einen YouTube Short oder TikTok-Clip mit
                    ein paar Anpassungen. Unternehmen sichern Kundenstimmen, um
                    sie auf Websites einzubetten und Vertrauen zu stärken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persönliche Erinnerungen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lade Familienmomente wie den Hochzeitstanz deiner Cousine
                    oder Baby-Updates von Freund:innen herunter, um sie bei
                    Treffen zu zeigen oder für später aufzubewahren. So bleiben
                    Erinnerungen greifbar.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Das Herunterladen von Instagram-Videos bringt Flexibilität und
              Komfort. Du genießt Inhalte zu deinen Bedingungen – ob zum Spaß,
              für die Arbeit oder fürs Lernen.
            </p>
          </div>

          {/* Zielgruppe */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer sollte Instagram-Videos herunterladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menschen, die am meisten profitieren
            </h2>
            <p className="section-muted mb-4">
              Der endlose Feed fesselt viele, aber Downloads sind besonders für
              diejenigen, die Instagram gezielt nutzen. Für alle, die Reels als
              Werkzeuge, Inspiration oder Erinnerungen sehen – nicht nur als
              schnellen Zeitvertreib. Wenn du etwas aufbaust, lernst oder
              Momente bewahren willst, bist du hier richtig.
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
                    Sie posten täglich und holen sich Ideen aus trendenden
                    Reels. Durch Downloads sichern sie eigene Arbeit oder
                    analysieren andere, etwa eine Food-Vloggerin, die plating
                    Hacks sammelt, um sie im eigenen Stil umzusetzen – ohne
                    Logos im Bild.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Schüler:innen und Lehrkräfte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lehrkräfte sichern Demonstrations-Reels für den Unterricht,
                    etwa Experimente, und zeigen sie ohne Internetprobleme.
                    Lernende speichern Lernkarten oder Sprachübungen und wiederholen
                    offline im eigenen Tempo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familien
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eltern behalten erste Schritte oder Urlaubsclips, um sie mit
                    Verwandten zu teilen oder für später zu archivieren. Das ist
                    verlässlicher, als sich auf Instagram zu verlassen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Unternehmen und Marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eine Boutique speichert Kunden-Clips mit ihren Produkten für
                    Anzeigen oder Social Proof. Marketing-Teams testen Trend-Reels
                    für Kampagnen und passen sie für andere Kanäle an.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Enthusiast:innen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fitnessfans speichern Yoga-Flows für das Studio. DIY-Fans
                    laden Bastelanleitungen herunter, um Schritt für Schritt
                    mitzumachen. Selbst Gelegenheitsuser sichern motivierende
                    Clips für Tage, an denen sie einen Push brauchen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Ganz gleich, welche Rolle du hast – das Herunterladen von
              Instagram-Videos spart Zeit, Daten und Aufwand und hält deine
              Lieblingsinhalte griffbereit.
            </p>
          </div>

          {/* Rechtliches */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, Instagram-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was du über die Rechtslage wissen solltest
            </h2>
            <p className="section-muted mb-4">
              Das Herunterladen von Instagram-Videos ist rechtlich ein Graubereich.
              Instagram erlaubt das Speichern öffentlicher Posts in der App zur
              privaten Nutzung, solange Creator die Funktion nicht deaktiviert
              haben. Drittanbieter-Tools wie unseres verstoßen technisch gegen die
              Nutzungsbedingungen, was deine Account-Sicherheit beeinflussen kann –
              Sperrungen sind aber selten, solange du nicht massenhaft lädst oder
              Inhalte repostest.
            </p>
            <p className="section-muted mb-2">
              Rechtlich gehören die Videos den Creator:innen gemäß Urheberrecht,
              etwa nach der US-DMCA. Das Speichern zur persönlichen Ansicht fällt
              meist unter Fair Use, ähnlich wie ein Offline-Playback. Wer jedoch
              ohne Erlaubnis teilt oder Inhalte für Profit bearbeitet, riskiert
              Abmahnungen. Musik in Reels erhöht die Komplexität, denn Labels
              besitzen die Rechte – bei kurzen, privaten Downloads gibt es jedoch
              selten Probleme.
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
                    Wenn Creator Downloads freigeben oder der Clip gemeinfrei ist,
                    bist du auf der sicheren Seite. Bildungszwecke – etwa wenn
                    Lehrkräfte Clips im Unterricht zeigen – fallen oft unter Fair
                    Use. Prüfe Beschreibungen für ausdrückliche Erlaubnis. Nutze
                    Downloads privat und nenne die Urheber:innen beim Teilen, dann
                    bist du meist abgesichert.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Herunterladen von Instagram-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mögliche Gefahren und wie du sie vermeidest
            </h2>
            <p className="section-muted mb-4">
              Downloads über Drittseiten klingen bequem, doch dubiose Angebote
              bringen echte Gefahren. Nicht jedes Tool ist sauber, und unbedachte
              Klicks können Gerät oder Daten gefährden. Kenne die Risiken, bevor du
              auf "Download" drückst.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware als größte Bedrohung">
                Unseriöse Seiten verstecken Viren in Videodateien und schleusen
                Spyware oder Ransomware ein. Ein falscher Download kann Dateien
                sperren oder Passwörter abgreifen. Berichte zeigen Tools mit
                Keyloggern – aus einem Reel wird schnell ein Datenleck.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-Betrug">
                Gefälschte Download-Seiten imitieren den Instagram-Login und fangen
                deine Zugangsdaten ab. Oder Pop-ups drängen auf vermeintliche
                "Updates", die Tracker installieren und jeden Klick beobachten.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualitätsprobleme">
                Schlechte Seiten komprimieren Videos stark – das Resultat sind
                ruckelige Frames und verstummter Ton. Statt eines klaren Reels
                bekommst du Pixelmatsch.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Datenschutz-Lecks">
                Manche Dienste loggen deine Downloads und verkaufen IP-Adresse oder
                Sehgewohnheiten an Werbetreibende. Hacker können diese Infos nutzen
                und Spam oder Betrug losschicken.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Instagram-Sperren">
                Intensives Laden über Dritttools kann Accounts markieren,
                insbesondere bei Creator:innen. Im schlimmsten Fall verlierst du
                Profil und Follower über Nacht.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Speicher-Probleme">
                Reels summieren sich schnell, verlangsamen Smartphones oder füllen
                Festplatten. Beschädigte Dateien lassen Player abstürzen und kosten
                Zeit bei der Reparatur.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze vertrauenswürdige Seiten, prüfe Downloads mit Sicherheitssoftware
              und erwäge ein VPN, um geschützt zu bleiben.
            </p>
          </div>

          {/* Warum videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io wählen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein zuverlässiger Partner für Instagram-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gestartet, weil wir genug von
              fehlerhaften Apps und <a href="https://blog.avast.com/malicious-browser-extensions-avast">Downloadern mit Malware</a> hatten. Als
              Instagram-Fans wollten wir Reels unkompliziert und sicher speichern.
              Wir sind ein kleines Team, das Downloads so einfach wie möglich macht.
              Millionen erfolgreiche Downloads später hatten wir keine Datenpannen –
              Nutzer:innen kehren wegen der Zuverlässigkeit zurück.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Schnelle Downloads">
                Unter fünf Sekunden, selbst zu Stoßzeiten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung, keine Pop-ups">
                Eine saubere, fokussierte Oberfläche.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Ohne Wasserzeichen">
                Jeder Clip bleibt unverfälscht.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Speicherung">
                Keine täglichen Limits.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funktioniert auf jedem Gerät">
                Vom Smartphone bis zum Desktop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Keine Daten bleiben nach dem Download gespeichert.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Häufig gestellte Fragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antworten rund um Instagram-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben die häufigsten Fragen zu videodownload.io und dem
              Herunterladen von Instagram-Videos gesammelt, damit du sofort starten
              kannst.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private Instagram-Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir unterstützen nur öffentliche Reels und Posts.
                  Private Inhalte benötigen die Zustimmung der Creator – aus Respekt
                  halten wir uns daran.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Schadet der Download meinem Smartphone?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, die Dateien sind sauber und einsatzbereit. Sorge lediglich
                  für genügend Speicherplatz. Der Download ist so leicht wie das
                  normale Abspielen eines Reels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur die Audiospur eines Reels herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja! Wir bieten eine MP3-Option, damit du nur den Sound sichern
                  kannst – ideal für Remixe, Voiceovers oder Offline-Playlists.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Muss ich eine App installieren?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, alles läuft im Browser. Link einfügen, Download klicken,
                  fertig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Entfernt ihr automatisch Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wir entfernen Instagram-Wasserzeichen, damit dein Video ohne
                  störende Schrift bereitsteht.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es Größenlimits für Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Reels bis zu 60 Minuten Länge. Die meisten sind
                  kürzer. Längere Clips dauern etwas länger im Download, werden aber
                  vollständig gespeichert.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr meine Downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Auf keinen Fall. Wir verarbeiten alles sofort und löschen es
                  anschließend. Die Dateien bleiben nur auf deinem Gerät.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Sieht der Creator, dass ich sein Reel heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram informiert Creator nicht über Downloads. Deine Aktion
                  bleibt privat, ohne Benachrichtigungen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Starte jetzt mit Instagram-Downloads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Sichere dir Reels in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Instagram-Link kopieren
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
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Instagram-Video herunterladen
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
      <FeatureCard icon={VideoIcon} title="Kristallklare Videoqualität">
        Lade Instagram-Videos in voller Qualität herunter – bis zu 1080p, wenn
        das Original es bietet. Kein körniges Playback oder ausgewaschene Farben
        beim späteren Anschauen. Wir greifen die Datei direkt von Instagrams
        Servern ab, damit jeder Frame scharf bleibt – ideal für Reiseclips oder
        Koch-Demos.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Downloads ohne Wasserzeichen">
        Instagram versieht gespeicherte Videos mit Logo und Nutzername, was das
        Bild stört. Wir entfernen alles vollständig. Übrig bleibt ein sauberer
        Clip, bereit für den Schnitt oder zum Teilen. Schau Tanz-Reels oder
        Haustiermomente ohne Text im Bild.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funktioniert auf allen Geräten">
        Egal ob iPhone, Android, PC oder Tablet – es klappt sofort. Keine Apps,
        keine Software-Installation. Öffne unsere Seite im Browser, füge den Link
        ein und lade herunter. Vom alten Laptop bis zum neuen Smartphone haben
        wir alles getestet, der Ablauf bleibt flüssig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Superschnelle Downloads">
        Niemand wartet gern. Unser Tool holt Instagram-Videos in Sekunden – meist
        unter zehn für die meisten Clips. Wir nutzen Server in der Nähe von
        Instagram, um Geschwindigkeit zu sichern, damit du Reels auch in kurzen
        Pausen ohne Buffering speichern kannst.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Komplett kostenloser Zugriff">
        Keine Gebühren, keine Registrierung, keine versteckten Kosten. Lade so
        viele Videos pro Tag, wie du willst. Wir halten den Service gratis, damit
        du Workouts oder Comedy-Sketche speicherst, ohne an eine Paywall zu
        denken.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicherer, geschützter Prozess">
        Deine Privatsphäre bleibt geschützt. Wir speichern keine Links oder
        Videos nach dem Download. Kein Tracking, keine Datenhaltung, keine
        dubiosen Anzeigen. Der Prozess ist sauber und dein Gerät bleibt sicher.
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
      <StepCard step={1} title="Link zum Video auf Instagram kopieren">
        <a href="http://www.instagram.com">Öffne Instagram</a> auf deinem Handy
        oder im Browser. Suche das Reel oder Video, das du sichern möchtest –
        vielleicht ein schnelles Rezept oder ein Travel-Vlog. Tippe oben rechts
        auf die drei Punkte. Wähle im Menü "Link kopieren". So erhältst du die
        vollständige URL, zum Beispiel instagram.com/reel/ABC123. Prüfe, ob sie
        korrekt ist.
      </StepCard>
      <StepCard step={2} title="Link auf unserer Seite einfügen">
        Gehe in deinem Browser auf videodownload.io. Du siehst ein klares Feld
        mit dem Hinweis "Füge deinen Instagram-Link hier ein". Klicke hinein und
        füge den kopierten Link ein. Achte darauf, dass er mit instagram.com
        beginnt, um Fehler zu vermeiden. Private Posts funktionieren nicht,
        öffentliche Reels und Videos schon.
      </StepCard>
      <StepCard step={3} title="Wir holen und bereinigen das Video">
        Klicke auf den grünen Button "Download" neben dem Feld. Unser System
        zieht das Video in Sekunden von den Instagram-Servern, entfernt das
        Wasserzeichen und prüft die Qualität – damit du keine fehlerhaften
        Dateien bekommst. Der Ton bleibt synchron und abspielbereit.
      </StepCard>
      <StepCard step={4} title="Datei auf deinem Gerät speichern">
        Du bekommst Auswahloptionen: MP4 für das komplette Video mit Ton oder MP3
        nur für den Audio-Track. Für die meisten Clips ist MP4 ideal. Tippe auf
        Download, die Datei landet im Download-Ordner oder deiner Galerie. Benenne
        sie sinnvoll, etwa "reel_workout.mp4". Spiele sie ab, um sicherzugehen,
        dass alles passt.
      </StepCard>
    </div>
  );
}
