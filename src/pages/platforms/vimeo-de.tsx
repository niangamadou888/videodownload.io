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

export default function VimeoPageDE() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Vimeo Video Download | Kostenlos & HD",
    description: "Lade Vimeo-Videos als MP4 in 1080p-Qualität herunter. Kostenloser Online-Video-Downloader und Konverter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische Download-Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Vimeo Video
          </h1>
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Füge die URL eines Vimeo-Videos ein"
            />
          </div>
          {/* Funktionen */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funktionen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Vimeo-Videos mühelos herunterladen
          </h2>
          <p className="text-muted-foreground mb-6">
            Dein einfacher Leitfaden, um kreative Clips offline zu speichern
          </p>

          <EnhancedFeatures />

          {/* So funktioniert der Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            So lädst du Vimeo-Videos herunter
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Eine klare Schritt-für-Schritt-Anleitung für stressfreie Downloads
          </h2>
          <p className="text-muted-foreground mb-6">
            Mit videodownload.io bringst du Vimeo-Videos im Handumdrehen auf dein Gerät.
            Folge diesen vier einfachen Schritten und lade jedes Video in wenigen Minuten herunter.
            Jeder Schritt ist so gestaltet, dass er auch ohne Technikkenntnisse intuitiv bleibt.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Download Vimeo Video
              </Button>
            </a>
          </div>

          {/* Warum herunterladen */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum Vimeo-Videos speichern
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Die besten Einsatzmöglichkeiten
            </h2>
            <p className="section-muted mb-4">
              Vimeo ist eine Anlaufstelle für kreative und professionelle Inhalte, doch Videos können verschwinden oder gelöscht werden. Durch das Herunterladen behältst du Clips, die dich inspirieren oder weiterbilden, und verwandelst flüchtige Funde in deine persönliche Sammlung. Es geht darum, das zu sichern, was deine Projekte oder deine Leidenschaft antreibt – nicht darum, wahllos Inhalte zu horten. Du behältst die Kontrolle über deine Bibliothek, unabhängig von gelöschten Uploads oder Plattformänderungen.
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
                    Speichere Filmemacher-Tutorials oder Künstler-Interviews für Reisen ohne WLAN, etwa im Flugzeug oder bei Außendrehs. Studierende laden Lernvideos herunter und können so jederzeit ohne Internet pauken.
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
                    Filmschaffende sichern Kurzfilme, um Techniken zu studieren oder sie in eigenen Projekten zu adaptieren. Marketer laden Brand-Videos herunter, um sie für andere Plattformen aufzubereiten – ganz ohne Wasserzeichen für saubere Schnitte.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigene Uploads archivieren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wenn du Videos auf Vimeo veröffentlichst, können sie durch Kontoprobleme oder Updates verschwinden. Lade sie auf ein Laufwerk herunter, um Portfolio-Stücke oder Kundenprojekte zu sichern.
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
                    Designer speichern Motion-Graphics-Tutorials für Offline-Übungen. Lehrkräfte laden kreative Unterrichtseinheiten herunter und zeigen Ideen im Klassenzimmer, ohne auf eine Verbindung angewiesen zu sein.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Private Projekte
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewahre Musikvideos oder Kunst-Showcases auf, um sie bei Bedarf zur Inspiration abzurufen. So wird ein schneller Vimeo-Fund zum hilfreichen Material für deinen nächsten Pitch oder kreativen Funken.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Vimeo-Videos herunterzuladen schafft Flexibilität und Komfort
              und lässt dich Inhalte zu deinen Bedingungen genießen – ob für Spaß,
              Arbeit oder Weiterbildung.
            </p>
          </div>

          {/* Wer sollte herunterladen */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wer sollte Vimeo-Videos herunterladen
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menschen, die am meisten profitieren
            </h2>
            <p className="section-muted mb-4">
              Vimeo ist ein Zuhause für Künstlerinnen und Profis, doch das Herunterladen lohnt sich für alle, die die Plattform zum Gestalten, Lernen oder Wachsen nutzen. Es richtet sich an alle, die Clips als Werkzeuge, Inspiration oder Erinnerungen sehen – nicht nur als flüchtiges Entertainment. Wenn du auf Vimeo aktiv bist und behalten willst, was zählt, ist der Download dein Werkzeug.
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
                    Filmemacher und Animatorinnen speichern Tutorials oder Showreels, um sie zu studieren oder neu zu schneiden. Auch ihre eigenen Uploads holen sie sich als saubere Version ohne Logos für Portfolio oder Bearbeitung.
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
                    Kunstlehrkräfte sichern Animations-Demos für den Unterricht. Studierende laden Film- oder Design-Tipps herunter, um sie offline und im eigenen Tempo zu wiederholen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profis und Unternehmen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketer laden Markenclips herunter, um sie für Ads oder Websites neu zu nutzen. Freelancer sichern Kunden-Pitches zur Ablage oder zum Teilen – ohne störende Wasserzeichen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobby und Kreative
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fotografen speichern Licht-Workshops für Zuhause. Musiker laden Live-Performances, um Bühnen-Setups zu studieren und offline zu üben.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gelegenheitsnutzer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Speichere den Kurzfilm eines Freundes oder einen Motivationsclip zum späteren Anschauen. Auch Fans behalten Kunst-Shows für eigene Projekte oder Moodboards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Egal welche Rolle du hast – das Herunterladen von Vimeo-Videos spart Zeit, Daten und Aufwand und hält Lieblingsinhalte jederzeit bereit.
            </p>
          </div>

          {/* Rechtliches */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ist es legal, Vimeo-Videos herunterzuladen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Was du über die Rechtslage wissen solltest
            </h2>
            <p className="section-muted mb-4">
              Vimeo-Downloads bewegen sich in einer Grauzone. Die Vimeo-Regeln <a href="https://help.vimeo.com/hc/de/articles/12426502581265-Wie-kann-ich-ein-Video-auf-vimeo-com-herunterladen">erlauben den Download öffentlicher Videos direkt über die Website</a> für private Nutzung, sofern der Creator Downloads nicht deaktiviert hat. Der Einsatz von Dritt-Tools wie unserem verstößt gegen die Nutzungsbedingungen und kann dein Konto markieren – Sperren sind jedoch selten, solange du nicht massenhaft herunterlädst oder ohne Erlaubnis repostest.
            </p>
            <p className="section-muted mb-4">
              Videos sind durch Urheberrecht geschützt, etwa nach dem DMCA in den USA. Das Speichern zur privaten Ansicht, z. B. um ein Tutorial offline zu studieren, gilt oft als Fair Use. Doch das Teilen ohne Nennung oder eine kommerzielle Nutzung kann rechtliche Folgen haben. Musik oder Voice-overs können zusätzliche Rechte mitbringen, auch wenn kurze private Sicherungen kaum Probleme verursachen.
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
                    Wenn der Creator Downloads freigibt oder der Inhalt gemeinfrei ist, bist du auf der sicheren Seite. Bildungszwecke – etwa ein Clip im Unterricht – gelten häufig als Fair Use. Prüfe Beschreibungen auf Hinweise. Halte Downloads privat und nenne die Urheber beim Teilen, um sicher zu bleiben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risiken */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risiken beim Download von Vimeo-Videos
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mögliche Gefahren und wie du sie vermeidest
            </h2>
            <p className="section-muted mb-4">
              Drittanbieter-Downloader wirken bequem, doch unsichere Seiten bringen echte Probleme. Nicht jede Plattform ist vertrauenswürdig und ein unbedachter Klick kann Gerät oder Daten gefährden. Kenn die Risiken vorher, um Ärger zu vermeiden.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware">
                Dubiose Websites verstecken Viren in Videodateien und schleusen Spyware oder Ransomware ein. Ein falscher Download kann Dateien sperren oder Passwörter abgreifen. Manche Tools waren mit Keyloggern verseucht – aus einem Meme wird schnell ein Datenleck.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Gefälschte Download-Seiten imitieren den Vimeo-Login und stehlen deine Zugangsdaten. Oder Anzeigen locken mit angeblichen Updates, die Tracker installieren und deine Aktivitäten überwachen.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualitätsverlust">
                Schlechte Portale komprimieren Videos, was zu Rucklern oder fehlendem Ton führt. Statt eines klaren Tutorials bekommst du eine fehlerhafte Datei.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-Leaks">
                Einige Seiten protokollieren Downloads und verkaufen IP-Adresse oder Sehgewohnheiten an Werbetreibende. Hacker könnten diese Daten abgreifen und Spam oder gezielte Betrugsversuche senden.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Vimeo-Sperren">
                Häufige Nutzung von Dritt-Tools kann dein Konto markieren, speziell bei Creators. Im schlimmsten Fall verlierst du Profil oder Uploads über Nacht.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Speicher voll">
                Viele Videos fressen Speicherplatz und bremsen Handy oder Festplatte. Beschädigte Dateien lassen Player abstürzen und kosten Zeit für Reparaturen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Nutze vertrauenswürdige Seiten, prüfe Downloads mit Virenscans und erwäge eine VPN-Verbindung, um geschützt zu bleiben.
            </p>
          </div>

          {/* Warum videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Warum videodownload.io verwenden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dein verlässlicher Partner für Vimeo-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben videodownload.io 2022 gestartet, weil wir genug von trägen Apps und riskanten Seiten hatten. Als Vimeo-User wollten wir eine schnelle, saubere Lösung ohne Stress. Wir sind ein kleines Team, kein Konzern, und konzentrieren uns darauf, Downloads einfach und sicher zu machen. Millionen Nutzende vertrauen uns ohne Datenlecks – und wir verbessern das Tool stetig mit ihrem Feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Unter fünf Sekunden">
                Downloads laufen selbst zu Stoßzeiten schnell durch.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Keine Werbung oder Pop-ups">
                Eine klare Oberfläche ohne Ablenkung.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Wasserzeichen entfernt">
                Saubere Clips, direkt einsatzbereit.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Unbegrenzte Downloads">
                Keine täglichen Limits.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Auf jedem Gerät nutzbar">
                Von älteren Tablets bis zu neuen Laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sicheres System">
                Keine Daten, die nach dem Download gespeichert bleiben.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Häufige Fragen zu Vimeo-Downloads
            </h2>
            <p className="section-muted mb-4">
              Wir haben Antworten auf die häufigsten Fragen rund um videodownload.io
              und das Herunterladen von Vimeo-Videos gesammelt, damit du mit einem guten Gefühl startest.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich private Vimeo-Videos herunterladen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nein, wir unterstützen nur öffentliche Videos. Private oder passwortgeschützte Inhalte benötigen die Zustimmung des Creators und diese Grenzen respektieren wir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wird mein Gerät durch Downloads langsamer?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Unsere Dateien sind schlank und sauber, daher entsteht kein Lag. Wenn du jedoch viele Videos speicherst, kann der Speicher voll werden – behalte deinen freien Platz im Blick.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Warum hat mein Download kein Wasserzeichen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo fügt Logos hinzu, um Shares zu verfolgen, aber wir laden die Originaldatei und bereiten sie auf, damit du ein klares Video für den privaten Gebrauch erhältst.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kann ich nur den Ton eines Vimeo-Videos speichern?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wähle nach dem Einfügen des Links MP3. Ideal, um Musik oder Voice-overs ohne Video mitzunehmen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Was, wenn mein Download nicht startet?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Prüfe, ob der Link öffentlich ist und mit vimeo.com beginnt. Teste einen anderen Browser oder leere den Cache. Unser Support-Chat hilft schnell weiter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gibt es eine Längenbegrenzung?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Wir verarbeiten Videos bis zu 60 Minuten, auch wenn Vimeo-Clips unterschiedlich lang sind. Längere Dateien dauern etwas länger, werden aber vollständig geladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Speichert ihr meine heruntergeladenen Videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Auf keinen Fall. Wir verarbeiten alles sofort und löschen es anschließend. Deine Dateien bleiben auf deinem Gerät, nicht auf unseren Servern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Sehen Creator, dass ich ihr Video heruntergeladen habe?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo informiert sie nicht. Dein Download bleibt privat, ohne Benachrichtigung an die Urheber.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Jetzt loslegen */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Starte noch heute mit Vimeo-Downloads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Hol dir deine kreativen Clips in Sekunden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Vimeo-Link kopieren
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
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Vimeo Video
                </Button>
              </a>
            </div>
          </div>

          {/* Weitere Downloader entdecken */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Entdecke weitere Downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lade von deinen Lieblingsplattformen
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
      <FeatureCard icon={VideoIcon} title="Downloads in hoher Auflösung">
        Speichere Vimeo-Videos in voller Qualität, bis zu 1080p oder höher, sofern der Original-Upload es zulässt. Kein Rauschen und keine blassen Farben beim späteren Abspielen. Wir holen die Datei direkt von den Vimeo-Servern, damit jeder Frame deines Kurzfilms oder Tutorials gestochen scharf bleibt.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Keine Wasserzeichen oder Logos">
        Vimeo fügt Videos aus der App ein Logo hinzu und stört damit die Ansicht. Wir entfernen alles, damit du einen sauberen Clip zum Bearbeiten oder privaten Anschauen erhältst – ohne Text, der Details verdeckt.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Auf allen Geräten nutzbar">
        Egal ob Smartphone, Tablet, Laptop oder Desktop – alles funktioniert reibungslos. Du brauchst keine App oder Zusatzsoftware: Browser öffnen, Link einfügen, herunterladen. Getestet von alten iPhones bis zu neuen PCs.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Schnelle Download-Geschwindigkeiten">
        Niemand wartet gern. Unser Tool lädt Vimeo-Videos in Sekunden, meist unter zehn für die meisten Clips. Wir verwenden Server in der Nähe von Vimeo, damit du Tutorial oder Reel sogar in kurzen Pausen sichern kannst.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Komplett kostenlos">
        Keine Gebühren, keine Registrierung, keine versteckten Kosten. Lade täglich so viele Videos herunter, wie du möchtest. So kannst du inspirierende Filme oder Musikvideos ohne Paywall speichern.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicher und privat">
        Deine Daten bleiben geschützt. Wir speichern weder Links noch Videos nach dem Download. Kein Tracking, keine Logs, keine nervige Werbung – so bleibt dein Gerät frei von Risiken.
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
      <StepCard step={1} title="Videolink auf Vimeo kopieren">
        <a href="http://www.vimeo.com">Öffne Vimeo</a> auf deinem Handy oder im Browser. Such dir ein Video, etwa einen Filmtipp oder eine kreative Animation. Klicke auf das Teilen-Symbol - meist ein Papierflugzeug - unten oder seitlich am Video. Wähle im Menü "Link kopieren". So erhältst du die vollständige URL, z. B. vimeo.com/123456789. Achte darauf, dass sie vollständig ist.
      </StepCard>
      <StepCard step={2} title="Link in unser Tool einfügen">
        Besuche videodownload.io in deinem Browser. In der Box "Vimeo-Link hier einfügen" klickst du hinein und fügst den Link ein. Prüfe, dass er mit vimeo.com beginnt, damit keine Fehler auftreten. Nur öffentliche Videos funktionieren; private oder passwortgeschützte Inhalte lassen sich nicht herunterladen.
      </StepCard>
      <StepCard step={3} title="Wir holen und bereinigen das Video">
        Drücke auf den grünen Button "Herunterladen" neben der Box. Unser System zieht das Video in Sekunden von den Vimeo-Servern, entfernt Wasserzeichen und prüft die Qualität. Der Ton bleibt klar, damit dir keine Details entgehen.
      </StepCard>
      <StepCard step={4} title="Clip auf deinem Gerät speichern">
        Du erhältst Auswahlmöglichkeiten: MP4 für das komplette Video mit Ton oder MP3 nur für Audio. Für die meisten Clips empfiehlt sich MP4. Nach dem Download landet die Datei im Downloads-Ordner oder in deiner Galerie. Benenne sie, z. B. "film_tutorial.mp4", und spiele sie ab, um alles zu checken.
      </StepCard>
    </div>
  );
}
