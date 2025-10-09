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

export default function InstagramPageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Instagram Video Downloaden | Gratis & HD",
    description:
      "Download Instagram-video's, Reels, Stories en IGTV in mp4, 1080p en 4k. Gratis online video-downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Instagram Video
          </h1>
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Instagram video-, Reel- of Story-URL"
            />
          </div>
          {/* Functies */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Instagram-video's zonder gedoe
          </h2>
          <p className="text-muted-foreground mb-6">
            Een eenvoudige gids om Reels en clips op te slaan zodat je ze offline kunt bekijken.
          </p>

          <EnhancedFeatures />

          {/* Hoe download je */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je Instagram-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Heldere stappen om moeiteloos video's te bewaren
          </h2>
          <p className="text-muted-foreground mb-6">
            Met videodownload.io staat elke Instagram-video zo op je apparaat. Volg deze vier duidelijke stappen en download binnen enkele minuten.
            Elke stap is intuïtief, zelfs als je niet technisch aangelegd bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Instagram-video downloaden
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Instagram-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De beste gebruiksscenario's
            </h2>
            <p className="section-muted mb-4">
              De Instagram-feed gaat razendsnel, waardoor inspirerende content vaak uit beeld verdwijnt. Door te downloaden houd je de clips die ertoe doen en maak je van scrollen een persoonlijke collectie.
              Je bewaart niet alles, maar juist de video's die je inspireren of iets betekenen. Jij bepaalt wat blijft, ook als accounts privé worden of posts verdwijnen.
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
                    Bewaar reistips of workout-Reels voor vluchten of plekken zonder bereik. Ouders downloaden kinderliedjes of verhaaltjes voor lange autoritten, zodat kinderen zonder Wi-Fi vermaakt blijven.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentcreatie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Makers gebruiken downloads om te remixen. Een modeblogger slaat outfit-Reels op om in eigen content te verwerken met voice-overs of nieuwe hoeken.
                    Muzikanten pakken trending sounds om ze in hun tracks te leggen, zonder watermark voor een strakke edit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Back-up van je posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram kan posts verwijderen of vastlopen, dus creators bewaren hun Reels op harde schijven.
                    Studenten slaan studiehacks of collegeclips op als naslag, zodat ze zonder app-login kunnen terugkijken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hergebruiken op andere platforms
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maak van een Reel een YouTube Short of TikTok-clip met een paar tweaks. Bedrijven bewaren klantreviews om in websites te plaatsen en vertrouwen te versterken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persoonlijke herinneringen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download familie momenten, zoals de openingsdans van een bruiloft of updates van vrienden met baby's, om te delen tijdens bijeenkomsten of jarenlang te bewaren.
                    Zo houd je herinneringen dichtbij.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Instagram-video's downloaden geeft je flexibiliteit en gemak, zodat je content op eigen voorwaarden beleeft – voor plezier, werk of studie.
            </p>
          </div>

          {/* Voor wie */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie zouden Instagram-video's moeten downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De mensen die er het meest van profiteren
            </h2>
            <p className="section-muted mb-4">
              De eindeloze feed is verslavend, maar downloaden past bij gebruikers die Instagram doelgericht inzetten.
              Voor wie Reels als tools, inspiratie of herinneringen ziet – niet alleen als snelle entertainment. Ben je aan het bouwen, leren of herinneringen aan het bewaren? Dan is dit voor jou.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentcreators
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ze posten dagelijks en halen ideeën uit trending Reels. Door te downloaden bewaren ze hun eigen werk of analyseren ze anderen,
                    bijvoorbeeld een foodvlogger die plating-trucs opslaat om die zonder logo's te verwerken in haar stijl.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leerlingen en docenten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Docenten bewaren demonstratieve Reels voor lessen, zoals science-experimenten, om ze zonder internetproblemen te tonen.
                    Studenten slaan studietips of taalclips op en bekijken ze offline in hun eigen tempo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gezinnen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ouders bewaren de eerste stapjes van hun kindje of een vakantieclip om te delen met familie of archiveren voor later. Veel betrouwbaarder dan hopen dat Instagram alles bewaart.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ondernemers en marketeers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Een boetiek slaat klantvideo's op voor advertenties of social proof.
                    Marketeers testen Reel-trends voor campagnes en passen het aan per kanaal.
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
                    Fitnessfans bewaren yoga flows voor in de sportschool. Doe-het-zelvers downloaden DIY-tutorials om stap voor stap te volgen.
                    Zelfs casual gebruikers bewaren motiverende clips om later opnieuw te kijken.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Welke rol je ook hebt, Instagram-video's downloaden bespaart tijd, data en moeite terwijl je favoriete content binnen handbereik blijft.
            </p>
          </div>

          {/* Is het legaal? */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om Instagram-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Wat je moet weten over de wetgeving
            </h2>
            <p className="section-muted mb-4">
              Instagram-video's downloaden is grijs gebied. Instagram laat toe dat je openbare posts via de app bewaart voor persoonlijk gebruik, zolang de maker het niet uitschakelt.
              Tools van derden zoals de onze schenden technisch hun voorwaarden, waardoor je account gemarkeerd kan worden. Ban's zijn zeldzaam zolang je niet massaal downloadt of herplaatst.
            </p>
            <p className="section-muted mb-2">
              Juridisch gezien liggen de rechten bij de maker volgens auteurswetgeving zoals de DMCA.
              Opslaan voor eigen gebruik valt vaak onder fair use, vergelijkbaar met een reel offline bekijken.
              Delen zonder toestemming of commerciële edits kan tot claims leiden. Muziek in Reels maakt het complexer omdat labels de rechten hebben, maar korte persoonlijke downloads geven zelden problemen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wanneer het is toegestaan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Als een maker downloads toelaat of de video publiek domein is, zit je goed.
                    Educatief gebruik – zoals docenten die clips in de klas tonen – valt vaak onder fair use.
                    Check beschrijvingen voor expliciete toestemming. Houd downloads privé en geef credits bij het delen; dan zit je meestal veilig.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's van Instagram-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze vermijdt
            </h2>
            <p className="section-muted mb-4">
              Downloaden via onbetrouwbare websites lijkt makkelijk, maar brengt echte risico's mee. Niet elk hulpmiddel is veilig en ondoordachte klikken kunnen je apparaat of data schaden.
              Ken de risico's voordat je op die downloadknop drukt.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware is de grootste dreiging">
                Verdachte sites verstoppen virussen in videobestanden en sluizen spyware of ransomware binnen.
                Eén verkeerde download kan je bestanden blokkeren of wachtwoorden stelen. Sommige tools bevatten keyloggers en veranderen een simpele download in een datalek.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-trucs">
                Nep-downloadpagina's lijken op de Instagram-login en stelen je gegevens als je inlogt.
                Of ze tonen pop-ups met "updates" die trackers installeren die elke klik volgen.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kwaliteitsverlies">
                Slechte sites comprimeren video's teveel, waardoor ze schokkerig of zonder geluid worden.
                In plaats van een scherpe Reel krijg je een korrelige opname terug.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy lekken">
                Sommige diensten registreren wat je downloadt en verkopen je IP of kijkgedrag aan adverteerders.
                Hackers kunnen die info misbruiken voor spam of phishing.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Instagram-bans">
                Veelvuldig downloaden via derde partijen kan je account markeren, zeker voor creators.
                Je kunt je profiel of volgers in één klap kwijt zijn.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Opslagproblemen">
                Reels stapelen snel op, maken telefoons traag of vullen schijven.
                Beschadigde bestanden laten je videospeler crashen en kosten tijd om te fixen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gebruik betrouwbare sites, scan downloads en overweeg een VPN om jezelf te beschermen.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je betrouwbare partner voor Instagram-downloads
            </h2>
            <p className="section-muted mb-4">
              We zijn videodownload.io in 2022 gestart omdat we genoeg hadden van buggy apps en <a href="https://blog.avast.com/malicious-browser-extensions-avast">downloaders vol malware</a>.
              Als Instagram-gebruikers wilden we een nette manier om Reels te bewaren zonder gedoe of risico.
              We zijn een klein team dat downloads eenvoudig en veilig maakt. Miljoenen downloads later hebben we geen datalekken gehad en gebruikers blijven terugkomen voor onze betrouwbaarheid.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Razendsnelle downloads">
                Minder dan vijf seconden, zelfs op drukke momenten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen advertenties of pop-ups">
                Een schone website en niets anders.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken verwijderd">
                Elke video blijft puur.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Onbeperkt opslaan">
                Geen dagelijkse limieten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt op ieder apparaat">
                Van telefoon tot pc.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig systeem">
                Geen data blijft achter na gebruik.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antwoorden op veel voorkomende vragen over Instagram-downloads
            </h2>
            <p className="section-muted mb-4">
              We hebben de meest gestelde vragen verzameld over het gebruik van videodownload.io en het downloaden van Instagram-video's, zodat je met een gerust hart kunt starten.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privé Instagram-video's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we ondersteunen alleen openbare Reels en posts. Privé-inhoud vereist toestemming van de maker en dat respecteren we.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Beschadigt downloaden de prestaties van mijn telefoon?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, de bestanden zijn schoon en klaar voor gebruik. Zorg alleen dat je voldoende opslagruimte hebt. Het downloaden is net zo licht als het bekijken van een Reel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen de audio van een Reel downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja! We bieden een MP3-optie zodat je alleen de audio kunt bewaren. Ideaal voor remixes, voice-overs of offline playlists.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Moet ik een app installeren?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, alles werkt in de browser. Link plakken, op downloaden klikken en klaar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Worden watermerken automatisch verwijderd?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, we verwijderen Instagram-watermerken zodat je video meteen bruikbaar is zonder tekst in beeld.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Zijn er limieten op de bestandsgrootte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We verwerken Reels tot 60 minuten; de meeste zijn korter. Langere clips duren iets langer om te downloaden, maar we leveren ze volledig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bewaren jullie mijn downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absoluut niet. We verwerken alles direct en verwijderen het daarna. Je bestanden blijven alleen op je eigen apparaat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ziet de maker dat ik zijn Reel heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram stuurt geen meldingen. Je download blijft privé, zonder waarschuwingen voor de maker.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin nu met het opslaan van Instagram-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Haal je Reels binnen enkele seconden offline
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Kopieer Instagram-link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plak op onze site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download een schone video
              </div>
            </div>
            <div className="mt-2">
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Instagram-video downloaden
                </Button>
              </a>
            </div>
          </div>

          {/* Andere downloaders */}
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
                        Download {p.name}-video
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
      <FeatureCard icon={VideoIcon} title="Haarscherpe videokwaliteit">
        Download Instagram-video's in volledige kwaliteit tot wel 1080p wanneer de originele post dat ondersteunt. Geen korrelige beelden of fletse kleuren bij het terugkijken.
        We halen het bestand rechtstreeks van de servers van Instagram zodat elk frame scherp blijft – ideaal voor reisclips of kookdemo's.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Downloads zonder watermerk">
        Instagram plaatst logo en gebruikersnaam op opgeslagen video's, wat het beeld verstoort.
        Wij verwijderen dat volledig, zodat je een schone clip overhoudt die klaar is om te bewerken of te delen. Geniet van dansreels of huisdiermomenten zonder tekst in beeld.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op ieder apparaat">
        Gebruik je iPhone, Android, pc of tablet en het werkt meteen. Geen apps om te installeren of software om te configureren.
        Open onze site in elke browser, plak de link en downloaden maar. Getest van oude laptops tot gloednieuwe telefoons – soepel elke keer.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Supersnelle downloads">
        Niemand wacht graag. Onze tool haalt Instagram-video's binnen enkele seconden binnen, vaak minder dan tien voor de meeste clips.
        We gebruiken servers dicht bij Instagram voor snelheid, zodat je in een korte pauze een Reel kunt opslaan zonder buffering of fouten.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Volledig gratis toegang">
        Geen kosten, geen accounts, geen verborgen tarieven. Download zo veel als je wilt per dag zonder limieten.
        We houden het gratis zodat je workouts of grappige sketches kunt bewaren zonder aan een paywall te denken.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilig en beschermd">
        Je privacy blijft gewaarborgd. We slaan geen links of video's op na het downloaden.
        Geen tracking, geen opgeslagen data en geen verdachte advertenties. Het proces is schoon en je apparaat blijft veilig.
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
      <StepCard step={1} title="Kopieer de link van Instagram">
        <a href="http://www.instagram.com">Open Instagram</a> op je telefoon of in de browser. Zoek de Reel of video die je wilt bewaren,
        bijvoorbeeld een snel recept of een travel vlog. Tik op de drie puntjes rechtsboven en kies "Link kopiëren". Zo krijg je de volledige URL, zoals instagram.com/reel/ABC123. Check even of hij klopt.
      </StepCard>
      <StepCard step={2} title="Plak de link op onze website">
        Ga naar videodownload.io in je browser. Je ziet een duidelijk veld met "Plak je Instagram-link hier". Klik erin en plak de link.
        Zorg dat hij met instagram.com begint om fouten te vermijden. Privéposts werken niet, maar openbare Reels en video's wel.
      </StepCard>
      <StepCard step={3} title="Wij halen en schonen de video op">
        Klik op de groene knop "Download" naast het veld. Ons systeem haalt de video in een paar seconden van de Instagram-servers,
        verwijdert het watermerk en controleert de kwaliteit zodat je geen problematische bestanden krijgt. De audio blijft synchroon en klaar om af te spelen.
      </StepCard>
      <StepCard step={4} title="Sla het bestand op je apparaat op">
        Je krijgt opties te zien: MP4 voor het complete filmpje met audio of MP3 voor alleen geluid.
        Kies voor de meeste clips MP4. Klik op downloaden en het bestand komt in je downloadmap of galerij terecht. Geef het een herkenbare naam zoals "reel_workout.mp4" en speel het af om zeker te zijn dat alles klopt.
      </StepCard>
    </div>
  );
}
