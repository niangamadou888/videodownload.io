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

export default function TikTokPageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "TikTok Video Downloaden | Gratis & HD",
    description:
      "Download TikTok-video's zonder watermerk in HD-kwaliteit. Gratis TikTok-downloader: snel, veilig en zonder kosten."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download TikTok Video
          </h1>
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een TikTok-video URL"
            />
          </div>

          {/* Functies */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download TikTok-video's in een handomdraai
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            De ideale gids om clips offline op te slaan
          </h2>
          <p className="text-muted-foreground mb-6">
            Bewaar TikTok-video's in HD, zonder watermerk en zonder gedoe. Onze tool is gratis, snel en betrouwbaar zodat je favoriete clips altijd beschikbaar blijven.
          </p>

          <EnhancedFeatures />

          {/* Hoe downloaden */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je TikTok-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een eenvoudig stappenplan in vier stappen
          </h2>
          <p className="text-muted-foreground mb-6">
            Downloaden gaat in vier intuïtieve stappen. Plak de link, kies je formaat en geniet binnen enkele seconden van je video – ook als je geen technische expert bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                TikTok-video downloaden
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom TikTok-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De handigste toepassingen voor offline toegang
            </h2>
            <p className="section-muted mb-4">
              Trends verdwijnen snel, accounts veranderen van richting en favoriete video's worden verwijderd. Door te downloaden creëer je een persoonlijke bibliotheek die altijd beschikbaar is – voor inspiratie, educatie of puur plezier.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline kijken onderweg
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In het vliegtuig, de trein of op vakantie zonder data? Download je favoriete tips en entertainment en bekijk ze zonder buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creatie & remix
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creators bewaren referentieclips, reacties van fans of trends om die later te monteren zonder storende watermerken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Back-up van eigen uploads
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar je best scorende video's lokaal of in de cloud zodat een ban, edit of bug ze niet doet verdwijnen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hergebruiken op andere kanalen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Zet je TikTok om naar Instagram Reels of YouTube Shorts en bereik een nieuw publiek met minimale moeite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Blijvende herinneringen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sla familie- of vakantiebeelden op in hoge kwaliteit zodat je ze later kunt delen of gebruiken in fotoboeken en presentaties.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloaden geeft je controle: je bekijkt en gebruikt content wanneer het jou uitkomt, zonder afhankelijk te zijn van verbinding of app.
            </p>
          </div>

          {/* Wie moet downloaden */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Voor wie is downloaden extra handig?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Groepen die profiteren van offline video’s
            </h2>
            <p className="section-muted mb-4">
              Niet iedereen hoeft elke video te bewaren, maar wie TikTok als hulpmiddel gebruikt, wint tijd door geselecteerde clips op te slaan.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentmakers en social teams
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download referenties en eigen uploads om rustig te monteren, re-editen of reacties van volgers te verwerken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Docenten en studenten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar voorbeeldvideo's, experimenten of taaltrucjes om zonder internet in de klas of thuis te hergebruiken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gezinnen en zorgverleners
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Zet favoriete kindercontent klaar voor lange autoritten of sla familieherinneringen op in hoge kwaliteit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Lokale ondernemers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar reviews, user generated content en behind-the-scenes voor winkelschermen, presentaties of sales pitches.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten en autodidacten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download kookvideo's, tuinadviezen of gitaarlessen en volg ze rustig na, zonder te scrollen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Wat je achtergrond ook is: geselecteerde downloads geven je meer controle en minder afhankelijkheid van apps of data.
            </p>
          </div>

          {/* Juridische vragen */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om TikTok-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De belangrijkste regels op een rij
            </h2>
            <p className="section-muted mb-4">
              Het downloaden van TikTok-video's is juridisch gezien een grijs gebied. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Volgens TikTok mag je openbare video's offline bewaren</a>, zolang de maker dit niet blokkeert. Voor persoonlijk gebruik is dat prima, maar in de voorwaarden wordt het gebruik van tools van derden afgeraden.
            </p>
            <p className="section-muted mb-4">
              Copyright speelt ook mee. Video’s blijven eigendom van de maker en vallen onder wetten zoals de DMCA. Offline opslag voor eigen gebruik kan onder fair use vallen, maar opnieuw posten zonder toestemming of credit kan leiden tot verwijderingen of juridische stappen. Muziek in de video hoort bovendien vaak bij een platenlabel.
            </p>
            <p className="section-muted mb-2">
              Wanneer is downloaden wel toegestaan?
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Toestemming van de maker
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geeft de creator expliciet toestemming, dan mag je de video downloaden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Publiek domein
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video’s die niet langer beschermd zijn door auteursrecht kun je vrij bewaren.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Educatief fair use
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Korte fragmenten kunnen binnen het onderwijs worden gebruikt, mits je de licentie controleert en de context fair use ondersteunt.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Houd het gebruik privé en respectvol. Wil je delen? Vraag vooraf toestemming of vermeld duidelijk de maker.
            </p>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Mogelijke risico's bij het downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Waar je alert op moet zijn
            </h2>
            <p className="section-muted mb-4">
              Niet elke downloader is veilig. Sommige sites voegen malware toe of spelen je gegevens door aan derden. Deze risico's wil je vermijden voordat je een link plakt.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware via dubieuze sites">
                Onbetrouwbare portals verpakken virussen of ransomware in het downloadbestand. Eén klik kan je systeem vergrendelen of data lekken.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing en nep-updates">
                Namaak-downloadknoppen leiden naar nep inlogpagina's of "updates" die spyware installeren.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacyverlies">
                Sommige tools volgen je downloads en verkopen de informatie door, waardoor je gerichte spam of scams ontvangt.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Kwaliteitsverlies">
                Slechte converters comprimeren de video, waardoor beeld en geluid achteruitgaan of haperen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Risico op bans">
                TikTok kan massaal downloaden detecteren en accounts tijdelijk blokkeren – vooral bij creators.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Opslag verstopt">
                Veel grote downloads vullen je opslag en vertragen het toestel. Verwijder oude bestanden regelmatig.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Kies voor betrouwbare diensten, scan je downloads, gebruik een up-to-date antivirus en overweeg een VPN voor extra bescherming.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De voordelen op een rij
            </h2>
            <p className="section-muted mb-4">
              Geen zware software, geen agressieve advertenties: alleen een snelle en veilige manier om clips op te slaan. Gebruikers keren terug omdat het werkt – simpel.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Supersnel">
                De meeste downloads rond je af in minder dan tien seconden.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Zonder advertenties">
                Een schone interface zonder pop-ups of afleidingen.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Geen watermerk">
                Je ontvangt het originele bestand, klaar voor professioneel gebruik.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Geen limieten">
                Download zoveel video's als je nodig hebt, elke dag opnieuw.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt overal">
                Compatibel met elke browser op elk apparaat.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacy first">
                Geen tracking, geen logbestanden. Wat je downloadt blijft van jou.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Snel antwoord op de meest gestelde vragen
            </h2>
            <p className="section-muted mb-4">
              Nog vragen? Deze FAQ helpt je op weg en laat zien hoe je de downloader optimaal gebruikt.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privévideo's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, alleen openbare video's zijn ondersteund. Vraag de maker om toestemming of gebruik de downloadoptie binnen TikTok voor eigen content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wordt mijn telefoon trager door het downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Niet via onze tool. Houd wel je opslag in de gaten als je veel bestanden bewaart.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom zit er geen watermerk op mijn download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We verwijderen het TikTok-watermerk zodat je een zuiver bestand behoudt voor persoonlijk gebruik.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen audio downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, kies simpelweg voor MP3 na het plakken van de link.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wat als de download niet start?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer of de link compleet is en de video openbaar. Probeer desnoods een andere browser of wis je cache. Blijft het misgaan? Neem contact op, wij helpen je verder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Is er een beperking op lengte of grootte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Video's tot 60 minuten werken prima. Lange video's kunnen iets meer tijd kosten maar worden volledig opgeslagen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bewaren jullie mijn downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we verwerken alles realtime en verwijderen links meteen. Het bestand staat alleen bij jou.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ziet een creator dat ik de video heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok stuurt geen meldingen. Het downloadproces blijft anoniem.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Actieblok */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Klaar om te beginnen?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download je favoriete video's in een paar klikken
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Kopieer de link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plak op onze site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download en kijk offline
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  TikTok-video downloaden
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
              Haal content van je favoriete platformen
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
                        Download video van {p.name}
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
        Bewaar clips in hoge resolutie tot 1080p, precies zoals de maker ze uploadde.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Zonder watermerk">
        Geen TikTok-logo's of overlays: je krijgt het originele beeld voor privégebruik of remix.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werk op elk apparaat">
        Werkt in iedere browser, op telefoon, tablet of desktop – zonder software.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Razendsnelle verwerking">
        Je download start binnen seconden dankzij snelle, betrouwbare servers.
      </FeatureCard>
      <FeatureCard icon={Download} title="Volledig gratis">
        Geen registratie, geen abonnement en geen verborgen kosten.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Privacy beschermd">
        We loggen niets en bewaren geen links; alles blijft 100% bij jou.
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
      <StepCard step={1} title="Kopieer de video-link">
        <a href="https://www.tiktok.com/">Open TikTok</a> op je smartphone of in de browser, zoek de gewenste video, tik op delen en kies «Copy link».
      </StepCard>
      <StepCard step={2} title="Plak de link op onze site">
        Ga naar videodownload.io, klik in het invoerveld en plak de link. Controleer of het een publieke TikTok-URL is.
      </StepCard>
      <StepCard step={3} title="Laat ons het werk doen">
        Druk op «Download». Wij halen de video binnen, verwijderen het watermerk en bereiden het bestand voor.
      </StepCard>
      <StepCard step={4} title="Kies formaat en opslaan">
        Selecteer MP4 voor video of MP3 voor alleen audio. Het bestand belandt in je downloadmap en is meteen offline beschikbaar.
      </StepCard>
    </div>
  );
}
