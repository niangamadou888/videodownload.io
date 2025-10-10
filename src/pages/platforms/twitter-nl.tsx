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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Twitter X Video Download | Gratis & HD",
    description: "Download Twitter X video's en posts in mp4, 1080p kwaliteit. Gratis online video downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Twitter Video
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Twitter X video of post URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Twitter X Video's Snel
          </h2>
          <p className="text-muted-foreground mb-6">
            Uw Snelle Gids voor het Offline Opslaan van Clips
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe Twitter X Video's te Downloaden
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een Duidelijke, Stap-voor-Stap Gids om Video's Moeiteloos op te Slaan
          </h2>
          <p className="text-muted-foreground mb-6">
            Twitter X video's op uw apparaat krijgen is eenvoudig met
            videodownload.io. Volg deze vier eenvoudige stappen om
            elke video in minuten te downloaden. Elke stap is ontworpen om
            intuïtief te zijn, zelfs als u niet technisch onderlegd bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Download Twitter Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Twitter X Video's Downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Beste Gebruikssituaties
            </h2>
            <p className="section-muted mb-4">
              Twitter X beweegt razendsnel, waarbij video's verloren gaan in de stroom van posts. Downloaden stelt u in staat om de clips te behouden die opvallen, en verandert snel scrollen in een persoonlijke verzameling. Het gaat niet om alles opslaan, maar om te behouden wat vreugde, informatie of inspiratie brengt. U controleert uw verzameling, veilig voor verwijderde posts of app-wijzigingen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline Bekijken
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar nieuwsclips of tutorials voor vluchten, treinen of gebieden met slecht wifi. Ouders downloaden leuke animaties voor kinderen om te kijken tijdens lange autoritten, zonder buffering stress.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hergebruik van Inhoud
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Makers pakken virale clips om ze te remixen in hun eigen posts, met toevoeging van commentaar of bewerkingen. Een journalist bewaart een actueel nieuwsvideo om te analyseren voor een artikel, waarbij watermerken worden verwijderd voor schoon gebruik.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Back-up van Uw Eigen Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Als u video's deelt op Twitter X, kunnen ze verdwijnen door accountproblemen of platform-updates. Download ze naar een schijf om uw werk veilig te houden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leren en Onderzoek
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studenten bewaren expertlezingen of data-analyses voor studienotities. Professionals pakken branche-updates om te delen in vergaderingen, zonder opnieuw in de feed te hoeven zoeken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Momenten Delen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download de mijlpaalclip van een vriend of een grappige reactie om te verzenden in groepschats of voor later op te slaan. Het is een manier om persoonlijke hoogtepunten te bewaren zonder afhankelijk te zijn van de app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Het downloaden van Twitter X video's biedt flexibiliteit en gemak,
              waardoor het gemakkelijker wordt om van inhoud te genieten op uw voorwaarden, of het nu voor plezier,
              werk of leren is.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie Zou Twitter X Video's Moeten Downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mensen die het Meest Profiteren van Downloaden
            </h2>
            <p className="section-muted mb-4">
              Twitter X is een hub voor snelle meningen en grote momenten, maar het downloaden van video's past bij mensen die het platform met intentie gebruiken. Het is voor degenen die clips zien als tools, herinneringen of inspiratie, niet alleen voorbijgaande inhoud. Als u actief bent op de app en wilt behouden wat telt, is downloaden voor u.
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
                    Ze posten dagelijks, waarbij ze ideeën halen uit trending video's. Downloaden stelt hen in staat om hun eigen clips op te slaan of die van anderen te bestuderen, zoals een komiek die een reactievideo pakt om op te improviseren zonder logo's in de weg.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Journalisten en Onderzoekers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ze bewaren nieuwsclips of interviews voor artikelen of feitencontrole. Studenten downloaden expertthreads met video's voor schoolprojecten, waarbij ze offline studeren in hun eigen tempo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gezinnen en Occasionele Gebruikers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar de aankondigingsvideo van een broer of zus of een virale huisdierclip om te delen tijdens bijeenkomsten. Het is betrouwbaarder dan hopen dat Twitter X het live houdt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketeers en Bedrijfseigenaren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Een startup bewaart klantreferenties om te presenteren op websites. Social media managers pakken concurrentclips om trends te analyseren of te hergebruiken voor andere platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten en Lerenden
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tech-fans bewaren codeerdemo's om later te oefenen. Nieuwsjunkies downloaden actuele verhalen om opnieuw te bekijken. Zelfs occasionele scrollers bewaren motiverende clips voor moeilijke dagen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Ongeacht uw rol of levensstijl, het downloaden van Twitter X video's kan
              tijd, data en moeite besparen terwijl uw favoriete inhoud
              toegankelijk blijft.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het Legaal om Twitter X Video's te Downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Wat U Moet Weten Over de Wet
            </h2>
            <p className="section-muted mb-4">
              Video's zijn auteursrechtelijk beschermd door hun makers volgens wetten zoals de DMCA in de VS. Opslaan voor privéweergave, zoals het offline bekijken van een nieuwsclip, telt vaak als fair use. Maar delen zonder toestemming of gebruiken voor winst kan leiden tot juridische problemen. Muziek of voice-overs in video's kunnen extra auteursrechtlagen hebben, hoewel korte persoonlijke opslagen zelden problemen ondervinden.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wanneer het Toegestaan is
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Als de maker downloads toestaat of de inhoud publiek domein is, bent u veilig. Educatief gebruik, zoals het tonen van een clip in de klas, kwalificeert vaak als fair use. Controleer postbijschriften op toestemmingen. Houd het privé en vermeld makers als u deelt om veilig te blijven.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              De Risico's Verbonden aan het Downloaden van Twitter X Video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Potentiële Gevaren en Hoe Ze te Vermijden
            </h2>
            <p className="section-muted mb-4">
              Downloaders van derden lijken gemakkelijk, maar dubieuze kunnen grote problemen veroorzaken. Niet elke site is betrouwbaar, en achteloos klikken kan uw apparaat of gegevens beschadigen. Ken de risico's voordat u begint met downloaden om later problemen te voorkomen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Onbetrouwbare sites verbergen virussen in videobestanden, waarbij spyware of ransomware wordt binnengesmokkeld. Eén slechte download kan uw bestanden vergrendelen of wachtwoorden stelen. Sommige tools zijn betrapt met keyloggers, waarbij een snelle opslag verandert in een datalek.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing-zwendel">
                Valse downloadpagina's imiteren de Twitter X-login, waarbij ze uw inloggegevens pakken als u ze invoert. Of advertenties pushen "updates" die trackers installeren, waarbij uw activiteit buiten het platform wordt gevolgd.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Kwaliteitsproblemen"
              >
                Slechte sites comprimeren video's, wat haperige weergave of verloren audio veroorzaakt. U wilde een duidelijke nieuwsclip, maar krijgt in plaats daarvan een glitchy bestand.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy Lekken">
                Sommige sites loggen uw downloads, waarbij ze uw IP of videokeuzes verkopen aan adverteerders. Hackers kunnen die gegevens krijgen, wat leidt tot spam of gerichte oplichting.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Twitter X Verboden">
                Zwaar gebruik van tools van derden kan uw account markeren, vooral voor makers. U zou uw profiel of volgers van de ene op de andere dag kunnen verliezen.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Opslag Overbelasting"
              >
                Het opslaan van veel video's verbruikt ruimte, waarbij telefoons of schijven worden vertraagd. Corrupte bestanden kunnen spelers laten crashen, waarbij tijd wordt verspild aan reparaties.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gebruik vertrouwde sites, scan downloads en overweeg VPN's om veilig te blijven.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io Gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Uw Vertrouwde Partner voor Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              We zijn in 2022 begonnen met videodownload.io omdat we genoeg hadden van dubieuze tools en buggy apps. Als Twitter X-gebruikers wilden we een snelle, schone manier om video's op te slaan zonder risico's. We zijn een klein team, geen groot bedrijf, gericht op het eenvoudig en veilig maken van downloads. Miljoenen gebruikers vertrouwen ons zonder datalekken, en we blijven verbeteren op basis van hun feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Minder dan Vijf Seconden">
                Downloads worden zelfs op drukke dagen voltooid.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen Advertenties of Pop-ups">
                Gewoon een schone site.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken Verwijderd">
                Pure, bruikbare clips.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Onbeperkte Opslagen">
                Geen dagelijkse limieten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt op Elk Apparaat">
                Van telefoons tot laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig Systeem">
                Geen gegevens bewaard na uw vertrek.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde Vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Veelvoorkomende Vragen Over Twitter X Downloads
            </h2>
            <p className="section-muted mb-4">
              We hebben antwoorden verzameld op de meest gestelde vragen over het gebruik van
              videodownload.io en het downloaden van Twitter X video's om u te helpen
              met vertrouwen te beginnen.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privé Twitter X video's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we behandelen alleen openbare posts. Beschermde of privévideo's hebben toestemming van de maker nodig, en we respecteren dat om de zaken legitiem te houden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Zal downloaden mijn apparaat vertragen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Onze bestanden zijn schoon en licht, dus geen vertraging. Maar het opslaan van veel video's kan opslag vullen, dus houd uw ruimte in de gaten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom is mijn video zonder watermerk?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X voegt logo's toe om shares te volgen, maar wij halen het originele bestand op en verwijderen ze voor een schone opslag die u vrij kunt gebruiken.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen de audio van een Twitter X video opslaan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, kies MP3 na het plakken van de link. Perfect voor het pakken van podcastclips of trending geluiden zonder de video.
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
                  Controleer of de link openbaar is en begint met x.com. Probeer een andere browser of wis de cache. Onze ondersteuningschat lost problemen snel op.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Zijn er limieten op videogrootte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We verwerken video's tot 60 minuten, hoewel de meeste Twitter X clips kort zijn. Langere duren even maar downloaden volledig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bewaren jullie mijn gedownloade video's?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absoluut niet. We verwerken onmiddellijk en verwijderen alles daarna. Uw bestanden blijven op uw apparaat, niet op onze servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kunnen makers zien dat ik hun video heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X stelt hen niet op de hoogte. Uw download blijft privé, zonder waarschuwingen voor de poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin Nu met het Opslaan van Twitter X Video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Krijg Uw Clips Offline in Seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Kopieer Twitter X Post Link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plak op Onze Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download Schone Video
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Twitter Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ontdek Meer Downloaders
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download van uw favoriete platforms
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
      <FeatureCard icon={VideoIcon} title="Scherpe Videokwaliteit">
        Bewaar Twitter X video's in hun beste resolutie, tot 1080p als de originele post dat levert. Geen vage frames of doffe kleuren bij later bekijken. We halen het ruwe bestand rechtstreeks van de Twitter X servers, waarbij elk detail scherp blijft voor die virale clip of nieuwsupdate.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Geen Watermerken of Branding">
        Twitter X voegt zijn logo of gebruikersnaam toe aan video's die via hun app worden opgeslagen, waardoor de weergave wordt overbevolkt. We verwijderen dat allemaal, waardoor u een schone clip krijgt die klaar is om te delen of bewerken. Bekijk dat grappige moment of keynote-speech zonder tekst die het scherm blokkeert.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op Elk Apparaat">
        Gebruik uw telefoon, tablet, laptop of desktop, en het werkt soepel. Geen apps installeren of omgaan met extra software. Open onze site in uw browser, plak de link en download. Getest op alles van budget Androids tot high-end pc's, het is altijd betrouwbaar.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Snelle Downloadsnelheden">
        Niemand wil wachten. Onze tool pakt Twitter X video's in seconden, vaak onder de 10 voor de meeste clips. We gebruiken servers dicht bij die van Twitter X voor snelle ophaalacties, zodat u een reactievideo of hot take kunt opslaan tijdens een snelle scrollpauze.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Helemaal Gratis te Gebruiken">
        Geen kosten, geen aanmeldingen, geen verrassingskosten. Download zoveel video's als u wilt, elke dag, zonder limieten. We houden het gratis zodat u die meme of dat breaking news-clip kunt opslaan zonder een paywall tegen te komen.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilige en Privé Downloads">
        Uw informatie blijft veilig. We bewaren uw links of video's niet na het downloaden. Geen tracking, geen logs en geen spam-advertenties. Het proces is schoon, waardoor uw apparaat vrij blijft van rommel of risico's.
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
      <StepCard step={1} title="Pak de Video Link van Twitter X">
        <a href="http://www.x.com">Open Twitter X</a> op uw telefoon of browser. Vind de video die u leuk vindt, misschien een snelle meme of conferentiehoogtepunt. Klik op het deelpictogram onder de post, een kleine pijl naar boven. Kies uit het menu "Link naar Post kopiëren". Dit kopieert de volledige URL, zoals x.com/username/status/123456. Controleer of het correct is.
      </StepCard>
      <StepCard step={2} title="Plak de Link in Onze Tool">
        Ga naar videodownload.io in uw browser. U ziet een vak met het label "Plak Twitter X link hier". Klik erin en plak de link die u hebt gekopieerd. Zorg ervoor dat het begint met x.com om problemen te voorkomen. Alleen openbare posts werken; privé of beschermde video's worden niet gedownload.
      </StepCard>
      <StepCard step={3} title="We Halen en Bereiden de Video Voor">
        Klik op de blauwe "Download" knop naast het vak. Ons systeem haalt de video in seconden van de Twitter X servers. We verwijderen alle watermerken en controleren de kwaliteit, zodat u een soepele clip krijgt. Audio blijft helder, geen glitches of ontbrekend geluid.
      </StepCard>
      <StepCard step={4} title="Bewaar het Bestand op Uw Apparaat">
        U ziet opties: MP4 voor de volledige video met audio of MP3 voor alleen het geluid. Kies MP4 voor de meeste clips. Tik om te downloaden, en het belandt in uw Downloads map of telefoon galerij. Noem het iets eenvoudigs, zoals "meme_clip.mp4", voordat u opslaat. Speel het af om er zeker van te zijn dat het perfect is.
      </StepCard>
    </div>
  );
}
