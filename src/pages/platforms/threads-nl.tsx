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

export default function ThreadsPageNL() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Threads Video Downloaden | Gratis & HD",
    description: "Download Threads-video's en posts in MP4, 1080p-kwaliteit. Gratis online videodownloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimale downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Threads Video
          </h1>
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Threads video- of post-URL"
            />
          </div>
          {/* Functies */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Threads-video's in een oogwenk
          </h2>
          <p className="text-muted-foreground mb-6">
            Je eenvoudige handleiding om clips offline op te slaan
          </p>

          <EnhancedFeatures />

          {/* Hoe download je */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je Threads-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een heldere stap-voor-stap gids om video's moeiteloos te bewaren
          </h2>
          <p className="text-muted-foreground mb-6">
            Met videodownload.io zet je Threads-video's in een handomdraai op je apparaat.
            Volg deze vier eenvoudige stappen en download elke video binnen enkele minuten.
            Elke stap is intuïtief, ook als je niet technisch bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Download Threads Video
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Threads-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De beste toepassingsscenario's
            </h2>
            <p className="section-muted mb-4">
              Threads gaat razendsnel, posts verdwijnen onder nieuwe gesprekken. Door te downloaden kun je de video's bewaren die je raken en maak je van een korte scroll een persoonlijke collectie. Het gaat om het veiligstellen van wat plezier brengt, informeert of inspireert, niet om willekeurige clips te stapelen. Jij houdt de regie over je verzameling, ongeacht verwijderde posts of app-updates.
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
                    Bewaar reistips of workout-clips voor vluchten, woon-werkverkeer of plekken met slecht wifi. Ouders downloaden kindvriendelijke sketches of liedjes voor autoritten, zodat de kids zonder buffering vermaakt blijven.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hergebruiken voor creators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencers pakken virale clips om ze te remixen in hun eigen content en geven er hun eigen draai aan. Bloggers bewaren mode- of foodvideo's om te delen op andere platforms, zonder watermerk zodat edits strak blijven.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Je eigen posts archiveren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deel je zelf video's op Threads, dan kunnen ze verdwijnen door accountproblemen of platformupdates. Download ze naar een schijf om je werk te beschermen, of het nu om een persoonlijke vlog of een merkpromo gaat.
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
                    Studenten bewaren studiehacks of motiverende talks om offline terug te kijken. Hobbyisten downloaden DIY-tips of kunstdemo's om in hun eigen tempo te oefenen, zonder opnieuw te hoeven zoeken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Momenten delen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar een levensupdate van een vriend of een grappige clip om later in groepschats te sturen. Zo houd je herinneringen vast zonder afhankelijk te zijn van de app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Threads-video's downloaden geeft je flexibiliteit en gemak,
              zodat je content op je eigen voorwaarden beleeft – voor plezier,
              werk of studie.
            </p>
          </div>

          {/* Wie moet downloaden */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie Threads-video's zou moeten downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mensen die er het meest baat bij hebben
            </h2>
            <p className="section-muted mb-4">
              Threads is een plek voor snelle, persoonlijke content, maar downloaden past bij iedereen die het gebruikt om te creëren, te leren of contact te houden. Het is voor wie posts ziet als meer dan vluchtig vermaak en clips omtovert tot hulpmiddelen of herinneringen. Ben je actief op Threads en wil je bewaren wat belangrijk is, dan is downloaden de slimme zet.
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
                    Influencers en vloggers bewaren trending clips om ze voor hun publiek te remixen, zoals een beautygoeroe die een tutorial aanpast. Ze downloaden ook hun eigen posts om schone versies zonder logo's te houden voor edits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten en leerlingen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sportfans slaan workout-clips op om in de sportschool te volgen. Knutselaars downloaden DIY-demo's om thuis uit te proberen. Praktische inspiratie, altijd offline bij de hand.
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
                    Docenten bewaren motiverende talks voor in de klas. Studenten pakken studietips of taallessen om zonder opnieuw in te loggen te herhalen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gezinnen en casual gebruikers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ouders bewaren grappige kinderclips of familie-updates om op bijeenkomsten te laten zien. Vrienden downloaden virale memes om er later samen om te lachen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Kleine bedrijven en marketeers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Shops bewaren klant shout-outs om op hun website te tonen. Socialmedia-pro's verzamelen trending clips om te analyseren of te hergebruiken en houden hun content zo vers.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Welke rol of levensstijl je ook hebt: Threads-video's downloaden bespaart tijd, data en moeite en houdt favoriete content binnen bereik.
            </p>
          </div>

          {/* Juridisch */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om Threads-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Wat je moet weten over de wetgeving
            </h2>
            <p className="section-muted mb-4">
              Video's zijn auteursrechtelijk beschermd door de makers, onder wetten zoals de <a href="https://nl.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> in de VS. Opslaan voor privégebruik, zoals offline terugkijken, valt vaak onder fair use. Maar delen zonder toestemming of commercieel gebruik kan juridische problemen geven. Muziek of voice-overs in video's kunnen extra rechten hebben, al leidt een korte persoonlijke download zelden tot gedoe.
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
                    Staat de maker downloads toe of is de content publiek domein, dan zit je goed. Onderwijsdoeleinden, zoals een clip in de klas, vallen vaak onder fair use. Check bijschriften op gebruiksinformatie. Houd downloads privé en vermeld de maker als je deelt, dan blijf je veilig.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              De risico's van Threads-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze vermijdt
            </h2>
            <p className="section-muted mb-4">
              Downloaders van derden lijken makkelijk, maar schimmige sites brengen echte risico's mee. Niet elke pagina is betrouwbaar en een verkeerde klik kan je apparaat of data schaden. Ken de gevaren vooraf om problemen te voorkomen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Onbetrouwbare sites verstoppen virussen in videobestanden en sluizen spyware of ransomware binnen. Eén verkeerde download kan je bestanden vergrendelen of wachtwoorden stelen. Sommige tools bleken keyloggers te bevatten, waardoor een meme leidt tot een datalek.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Nep-downloadpagina's doen zich voor als de Threads-login en vissen je gegevens binnen als je ze invult. Of advertenties pushen "updates" die trackers installeren en je activiteit buiten het platform volgen.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Kwaliteitsproblemen"
              >
                Slechte sites comprimeren video's waardoor beeld hapert of audio verdwijnt. Je wilde een duidelijk tutorial, maar krijgt een gebroken bestand.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-lekken">
                Sommige sites loggen je downloads en verkopen je IP of kijkgedrag aan adverteerders. Hackers kunnen die data buitmaken, met spam of gerichte scams tot gevolg.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Threads-bans">
                Intensief gebruik van tools van derden kan je account markeren, zeker als je creator bent. Je kunt in één nacht je profiel of volgers kwijtraken.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Opslag overstroomt"
              >
                Veel video's slorpen opslag op en maken telefoons of drives traag. Beschadigde bestanden kunnen spelers laten crashen en kosten tijd om op te lossen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gebruik betrouwbare sites, scan downloads en overweeg een VPN om veilig te blijven.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je betrouwbare partner voor Threads-downloads
            </h2>
            <p className="section-muted mb-4">
              We zijn in 2022 met videodownload.io begonnen omdat we klaar waren met vage tools en trage apps. Als Threads-gebruikers wilden we een snelle, schone manier om video's veilig te bewaren. We zijn een klein team, geen groot bedrijf, en focussen op eenvoudige en veilige downloads. Miljoenen gebruikers vertrouwen ons zonder datalekken, en we blijven verbeteren op basis van hun feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Binnen vijf seconden">
                Downloads ronden zelfs op piekmomenten snel af.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen advertenties of pop-ups">
                Alleen een heldere site.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken verdwijnen">
                Schone clips die je direct kunt gebruiken.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Onbeperkt opslaan">
                Geen dagelijkse limieten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt op ieder apparaat">
                Van oude telefoons tot nieuwe laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig systeem">
                Geen data opgeslagen nadat je klaar bent.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ's */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Veelgestelde vragen over Threads-downloads
            </h2>
            <p className="section-muted mb-4">
              We verzamelden de meest gestelde vragen over videodownload.io en het downloaden van Threads-video's, zodat je met vertrouwen start.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privé Threads-video's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we verwerken alleen openbare posts. Privé- of beperkte video's vragen toestemming van de maker en we respecteren die grenzen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wordt mijn apparaat traag van downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Onze bestanden zijn schoon en licht, dus geen vertraging. Maar als je veel video's bewaart, kan de opslag vollopen – houd de ruimte in de gaten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom mist mijn download het geluid?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Soms levert Threads alleen video of alleen audio. Probeer de link opnieuw, ververs de pagina of wacht een paar minuten. Wij voegen beeld en geluid samen zodra beide beschikbaar zijn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen het audio van een Threads-video opslaan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, kies na het plakken van de link voor MP3. Perfect om muziek of voice-overs zonder beeld te bewaren.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wat als mijn download mislukt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer of de link openbaar is en met threads.net begint. Probeer een andere browser of wis de cache. Onze supportchat lost problemen snel op.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Zit er een limiet op de videolengte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We ondersteunen video's tot 60 minuten, al zijn de meeste Threads-clips kort. Langere video's duren wat langer maar worden volledig binnengehaald.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Slaan jullie mijn gedownloade video's op?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absoluut niet. We verwerken alles direct en verwijderen het daarna. Je bestanden blijven op je eigen apparaat, niet op onze servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ziet de maker dat ik zijn video heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads stuurt geen melding. Je download blijft privé zonder waarschuwingen voor de maker.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Nu starten */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin vandaag nog met Threads-video's bewaren
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pak je favoriete clips in seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Threads-link kopiëren
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plakken op onze site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Schoon video-bestand downloaden
              </div>
            </div>
            <div className="mt-2">
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Threads Video
                </Button>
              </a>
            </div>
          </div>

          {/* Meer downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ontdek meer downloaders
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download vanaf je favoriete platforms
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
      <FeatureCard icon={VideoIcon} title="Scherpe downloads">
        Bewaar Threads-video's in hun beste kwaliteit, tot 1080p als de originele post het toestaat. Geen wazige beelden of doffe kleuren bij het terugkijken. We halen het bestand rechtstreeks van de Threads-servers, zodat elke sketch of stijltip haarscherp blijft.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Geen watermerken of logo's">
        Threads plaatst branding op video's die je via de app opslaat, wat afleidt. Wij halen dat weg en geven je een schoon fragment, klaar om te delen of te bewerken. Kijk die grappige momentopname of tutorial zonder tekst die in de weg staat.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op ieder apparaat">
        Gebruik je telefoon, tablet, laptop of desktop: alles loopt soepel. Geen apps of extra software nodig. Open onze site in je browser, plak de link en download. Getest van oude Androids tot nieuwe Macs, altijd betrouwbaar.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Snelle downloadsnelheden">
        Wachten haalt je uit de flow. Onze tool trekt Threads-video's binnen seconden binnen, meestal onder de tien voor de meeste clips. We gebruiken servers dicht bij Threads voor snelle verbindingen, zodat je tijdens een korte pauze een dansclip of hot take kunt bewaren.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Volledig gratis">
        Geen kosten, geen accounts, geen verborgen beperkingen. Download elke dag zoveel video's als je wilt. We houden het gratis zodat je memes of lifehacks bewaart zonder paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilig en privé">
        Je gegevens blijven beschermd. We bewaren je links of video's niet nadat je klaar bent. Geen tracking, geen logs en geen spamadvertenties. Alles verloopt schoon en houdt je apparaat vrij van risico's.
      </FeatureCard>
    </div>
  );
}

// --- Uitgebreide stappen ---
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
      <StepCard step={1} title="Kopieer de videolink uit Threads">
        <a href="http://www.threads.net">Open Threads</a> op je telefoon of in de browser. Zoek de video die je wilt, misschien een snel recept of een fashion-reel. Tik op het deel-icoon, het papieren vliegtuigje rechtsonder in de post. Kies in het menu "Link kopiëren". Daarmee pak je de volledige URL, zoals threads.net/@username/post/abc123. Controleer of hij klopt.
      </StepCard>
      <StepCard step={2} title="Plak de link in onze tool">
        Ga naar videodownload.io in je browser. Je ziet een vak met "Plak Threads-link hier". Klik erin en plak de gekopieerde link. Let erop dat hij begint met threads.net om fouten te voorkomen. Alleen openbare posts werken; privé of beperkte video's worden niet gedownload.
      </StepCard>
      <StepCard step={3} title="Wij halen de video op">
        Klik op de blauwe knop "Download" naast het vak. Ons systeem haalt de video binnen enkele seconden van de Threads-servers. We verwijderen watermerken en checken de kwaliteit zodat je een soepel fragment krijgt. Het geluid blijft helder, zonder glitches.
      </StepCard>
      <StepCard step={4} title="Sla het fragment op je apparaat op">
        Je krijgt keuzes: MP4 voor de volledige video met audio of MP3 voor alleen geluid. Voor de meeste clips kies je MP4. Tik om te downloaden en het bestand komt in je downloadmap of galerij terecht. Geef het een duidelijke naam, zoals "style_tip.mp4", voordat je het bewaart. Speel het af om te bevestigen dat alles werkt.
      </StepCard>
    </div>
  );
}
