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

export default function VimeoPageNL() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Vimeo Video Download | Gratis & HD",
    description: "Download Vimeo-video's in MP4 en 1080p-kwaliteit. Gratis online videodownloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Vimeo Video
          </h1>
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Vimeo video-URL"
            />
          </div>
          {/* Functies */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Vimeo-video's zonder gedoe
          </h2>
          <p className="text-muted-foreground mb-6">
            Je eenvoudige handleiding om creatieve clips offline op te slaan
          </p>

          <EnhancedFeatures />

          {/* Hoe downloaden */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je Vimeo-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een heldere stappenplan om video's moeiteloos te bewaren
          </h2>
          <p className="text-muted-foreground mb-6">
            Met videodownload.io zet je Vimeo-video's in een paar tellen op je apparaat.
            Volg deze vier eenvoudige stappen en download elke video binnen enkele minuten.
            Elke stap is intuïtief, zelfs als je niet technisch bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Download Vimeo Video
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Vimeo-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De beste usecases
            </h2>
            <p className="section-muted mb-4">
              Vimeo barst van creatieve en professionele content, maar video's kunnen verdwijnen of worden verwijderd. Door te downloaden bewaar je de clips die je inspireren of iets leren, en verander je snelle vondsten in een persoonlijke collectie. Het draait om het bewaren van wat je projecten of passie voedt, niet om willekeurig verzamelen. Jij houdt de regie, los van verwijderde uploads of wijzigingen op het platform.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline kijken
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar filmworkshops of artiesten-interviews voor reizen zonder Wi-Fi, zoals vluchten of opnames op locatie. Studenten downloaden lesmateriaal om zonder internet verder te leren.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hergebruik voor makers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Filmmakers slaan korte films op om technieken te bestuderen of te verwerken in hun projecten. Marketeers pakken branded content om te vertalen naar andere kanalen, zonder watermerken die edits vervuilen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigen uploads archiveren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deel je zelf video's op Vimeo, dan kunnen ze verdwijnen door accountproblemen of updates. Download alles naar een schijf en bescherm je werk, van portfoliostuk tot klantproject.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leren en inspiratie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designers bewaren motion-graphicslessen om offline te oefenen. Docenten downloaden creatieve lessen voor in de klas, zonder afhankelijk te zijn van een verbinding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persoonlijke projecten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar videoclips of kunstshows om later terug te kijken voor motivatie. Maak van een snelle Vimeo-vondst een bron voor je volgende idee of professionele pitch.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Vimeo-video's downloaden geeft je vrijheid en gemak,
              zodat je content op je voorwaarden beleeft - voor plezier,
              werk of studie.
            </p>
          </div>

          {/* Wie moet downloaden */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie zou Vimeo-video's moeten downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Voor wie downloads het meeste opleveren
            </h2>
            <p className="section-muted mb-4">
              Vimeo is een thuis voor artiesten en professionals, maar downloaden past bij iedereen die het platform inzet om te maken, te leren of te groeien. Het is er voor wie clips ziet als tools, inspiratie of herinneringen, niet alleen als vluchtige entertainment. Ben je actief op Vimeo en wil je bewaren wat telt, dan is downloaden jouw tool.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentmakers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Filmmakers en animators bewaren tutorials of showreels om te bestuderen of opnieuw te monteren. Ze downloaden ook hun eigen uploads voor schone versies zonder logo's, klaar voor portfolio of edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenten en docenten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kunstdocenten slaan animatiedemo's op voor hun lessen. Studenten verzamelen film- en design-tips om zonder inloggen opnieuw te bekijken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionals en bedrijven
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketeers downloaden branded video's om te hergebruiken in advertenties of op websites. Freelancers bewaren klantpitches om te archiveren of te delen zonder storende watermerken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten en creatieven
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fotografen bewaren licht-tutorials om thuis te testen. Muzikanten downloaden live optredens om podiumopstellingen te bestuderen en offline te oefenen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Casual gebruikers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar de korte film van een vriend of een motiverend fragment om later terug te kijken. Zelfs fans downloaden kunstshows voor eigen projecten of moodboards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Welke rol je ook hebt, Vimeo-video's downloaden bespaart tijd, data en moeite terwijl je favoriete content binnen handbereik blijft.
            </p>
          </div>

          {/* Juridisch */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om Vimeo-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dit moet je weten over de regels
            </h2>
            <p className="section-muted mb-4">
              Video's van Vimeo downloaden zit in een grijs gebied. De regels van Vimeo <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">staan toe dat je openbare video's via de site downloadt</a> voor persoonlijk gebruik, zolang de maker het niet heeft uitgeschakeld. Tools van derden zoals de onze schenden hun voorwaarden en kunnen je account markeren, al zijn bans zeldzaam tenzij je massaal downloadt of zonder toestemming opnieuw uploadt.
            </p>
            <p className="section-muted mb-4">
              Video's zijn beschermd door auteursrecht onder wetten zoals de DMCA. Opslaan voor privégebruik, bijvoorbeeld om een tutorial offline te bestuderen, valt vaak onder fair use. Maar delen zonder credits of commercieel gebruik kan juridische problemen geven. Muziek of voice-overs kunnen extra rechten hebben, al veroorzaken korte persoonlijke downloads zelden gedoe.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wanneer het mag
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geeft de maker downloads vrij of is het werk publiek domein, dan zit je goed. Gebruik voor onderwijs - zoals een clip tonen in de klas - valt vaak binnen fair use. Check beschrijvingen voor licenties. Houd downloads privé en vermeld makers als je deelt, dan blijf je veilig.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's bij het downloaden van Vimeo-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze voorkomt
            </h2>
            <p className="section-muted mb-4">
              Downloaders van derden lijken makkelijk, maar dubieuze sites brengen echte risico's mee. Niet elke pagina is betrouwbaar en een verkeerde klik kan je apparaat of data schaden. Ken de risico's vooraf om problemen te vermijden.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware">
                Onbetrouwbare sites verpakken virussen in videobestanden en sluizen spyware of ransomware binnen. Eén verkeerde download kan je bestanden vergrendelen of wachtwoorden stelen. Sommige tools bleken keyloggers te bevatten, waardoor een grappige clip eindigt in een datalek.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Nep-downloadpagina's doen zich voor als de Vimeo-login en hengelen je gegevens binnen als je ze invult. Advertenties pushen soms "updates" die trackers installeren en je activiteit volgen.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kwaliteitsverlies">
                Slechte platforms comprimeren de video, met haperend beeld of wegvallend geluid tot gevolg. Je wilde een scherpe tutorial, maar krijgt een kapot bestand terug.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-lekken">
                Sommige sites loggen je downloads en verkopen je IP of kijkgedrag. Hackers kunnen die data buitmaken, met spam of gerichte scams als resultaat.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Vimeo-bans">
                Intensief gebruik van externe tools kan je account markeren, zeker als je creator bent. Je kunt profiel of uploads in één nacht verliezen.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Opslag vol">
                Veel downloads vullen opslag razendsnel en maken telefoons of schijven traag. Beschadigde bestanden laten spelers crashen en kosten tijd om te fixen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gebruik betrouwbare sites, scan downloads en overweeg een VPN voor extra veiligheid.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je betrouwbare partner voor Vimeo-downloads
            </h2>
            <p className="section-muted mb-4">
              We zijn in 2022 met videodownload.io gestart omdat we klaar waren met trage apps en risicovolle sites. Als Vimeo-gebruikers wilden we een snelle, schone manier om video's te bewaren zonder gedoe. We zijn een klein team, geen groot bedrijf, en focussen op veilige, simpele downloads. Miljoenen gebruikers vertrouwen ons zonder datalekken en we blijven verbeteren met hun feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Binnen vijf seconden">
                Downloads ronden zelfs in piekuren snel af.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen advertenties of pop-ups">
                Alleen een overzichtelijke interface.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken verdwijnen">
                Schone clips, direct bruikbaar.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Onbeperkt opslaan">
                Geen dagelijkse limieten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt op elk apparaat">
                Van oude tablets tot nieuwe laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig systeem">
                Geen data opgeslagen nadat je klaar bent.
              </FeatureCard>
            </div>
          </div>

          {/* Veelgestelde vragen */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Veelgestelde vragen over Vimeo-downloads
            </h2>
            <p className="section-muted mb-4">
              We verzamelden antwoorden op de meest gestelde vragen over
              videodownload.io en het downloaden van Vimeo-video's, zodat je met vertrouwen start.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privé Vimeo-video's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we ondersteunen alleen openbare video's. Privé of met wachtwoord beveiligde content vereist toestemming van de maker en die grenzen respecteren we.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wordt mijn apparaat traag door downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Onze bestanden zijn licht en schoon, dus geen vertraging. Maar als je veel downloads bewaart, kan de opslag vollopen - houd je vrije ruimte in de gaten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom heeft mijn download geen watermerk?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo voegt een logo toe om gedeelde content te volgen, maar wij halen het originele bestand op en maken het schoon zodat je een helder video-bestand voor privégebruik krijgt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen het audio opslaan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, kies voor MP3 nadat je de link hebt geplakt. Perfect om muziek of voice-overs te bewaren zonder beeld.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wat als mijn download niet start?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer of de link openbaar is en begint met vimeo.com. Probeer een andere browser of wis de cache. Onze supportchat helpt snel verder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Zit er een limiet op de videolengte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We ondersteunen video's tot 60 minuten, al verschilt de lengte per Vimeo-clip. Langere bestanden duren iets langer, maar komen volledig binnen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Slaan jullie mijn downloads op?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Zeker niet. We verwerken alles meteen en verwijderen het daarna. Je bestanden blijven op je eigen device, niet op onze servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ziet de maker dat ik zijn video download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo stuurt geen melding. Je download blijft privé, zonder waarschuwing voor de maker.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start nu */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin vandaag nog met Vimeo-video's bewaren
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pak je creatieve clips in seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Vimeo-link kopiëren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plakken op onze site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Schoon videobestand downloaden
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

          {/* Ontdek meer downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ontdek meer downloaders
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download van je favoriete platforms
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
                  to={`/nl/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Downloads in hoge resolutie">
        Bewaar Vimeo-video's in hun volledige kwaliteit, tot 1080p of hoger als het origineel dat ondersteunt. Geen korrelige playback of fletse kleuren wanneer je later kijkt. We halen het bestand direct van de Vimeo-servers, zodat elke frame haarscherp blijft.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Geen watermerken of branding">
        Vimeo plaatst een logo op video's die je via de app bewaart en dat stoort. Wij strippen alles weg en leveren een schoon fragment, klaar voor edit of persoonlijk gebruik. Bekijk die documentaire of animatie zonder tekst over de details.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op elk apparaat">
        Gebruik telefoon, tablet, laptop of desktop en alles loopt soepel. Geen apps of extra software nodig. Open onze site, plak de link en download. Getest van oude iPhones tot nieuwe pc's.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Snelle downloadsnelheden">
        Niemand houdt van wachten. Onze tool haalt Vimeo-video's binnen seconden op, meestal onder de tien voor de meeste clips. We gebruiken servers dicht bij Vimeo voor snelle pulls, zodat je tijdens een pauze een reel of tutorial kunt opslaan.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Helemaal gratis">
        Geen kosten, geen accounts, geen verborgen limieten. Download elke dag zoveel als je wilt. Zo sla je dat inspirerende optreden of muziekvideo op zonder paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilig en privé">
        Je gegevens blijven beschermd. We bewaren geen links of video's na de download. Geen tracking, geen logs, geen opdringerige ads. Alles blijft schoon en veilig.
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
      <StepCard step={1} title="Kopieer de videolink op Vimeo">
        <a href="http://www.vimeo.com">Open Vimeo</a> op je telefoon of in de browser. Zoek de video die je aanspreekt, misschien een film-tip of een creatieve animatie. Klik op het deel-icoon, meestal een papieren vliegtuigje, onder of naast de video. Kies "Link kopiëren" in het menu. Zo pak je de volledige URL, bijvoorbeeld vimeo.com/123456789. Controleer even of hij klopt.
      </StepCard>
      <StepCard step={2} title="Plak de link in onze tool">
        Ga naar videodownload.io. Je ziet een vak met "Plak hier de Vimeo-link". Plak de link in het veld. Let erop dat hij begint met vimeo.com om fouten te voorkomen. Alleen openbare video's werken; privé of beschermde content downloadt niet.
      </StepCard>
      <StepCard step={3} title="Wij halen en schonen de video">
        Klik op de groene knop "Downloaden" naast het veld. Ons systeem haalt de video binnen enkele seconden van de Vimeo-servers, verwijdert watermerken en checkt de kwaliteit. Het geluid blijft helder, zonder haperingen.
      </StepCard>
      <StepCard step={4} title="Bewaar het fragment op je apparaat">
        Je krijgt opties: MP4 voor video met audio of MP3 voor alleen geluid. Kies meestal MP4. Start de download en het bestand komt in je downloadmap of galerij terecht. Geef het een duidelijke naam, zoals "film_tutorial.mp4", en speel het af om te controleren.
      </StepCard>
    </div>
  );
}
