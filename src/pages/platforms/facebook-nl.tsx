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

export default function FacebookPageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Facebook Video Downloaden | Gratis & HD",
    description: "Download Facebook video's, Reels en livestreams in mp4, 1080p en HD-kwaliteit. Gratis online video downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox (zonder extra homepage-secties) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Facebook video-, Reel- of Watch-URL"
            />
          </div>
          {/* Functies */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Tools die het downloaden van Facebook video's eenvoudig maken
          </h2>
          <p className="text-muted-foreground mb-6">
            Dit zijn zes functies die van videodownload.io de beste keuze maken om Facebook-video's te downloaden. Elke functie is ontwikkeld om tijd te besparen, kwaliteit te garanderen en je ervaring veilig en helder te houden.
          </p>

          <EnhancedFeatures />

          {/* Hoe downloaden */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je Facebook-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Stapsgewijze gids om snel video's op te slaan
          </h2>
          <p className="text-muted-foreground mb-6">
            Facebook-video's downloaden met videodownload.io is eenvoudig en snel, ook als je niet technisch bent. Met deze vier stappen staat de video binnen enkele minuten op je apparaat.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Facebook-video downloaden
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Facebook-video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Beste toepassingen voor offline kijken en hergebruik
            </h2>
            <p className="section-muted mb-4">
              Door Facebook-video's te downloaden kun je content bekijken of opnieuw gebruiken zonder internetverbinding. Ideaal om data te besparen, herinneringen te archiveren of nieuw materiaal te maken. Dit zijn de belangrijkste redenen om Facebook-video's te downloaden voor persoonlijk of professioneel gebruik.
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
                    Bewaar video's voor in de trein, het vliegtuig of plekken zonder wifi of data, zoals landelijke gebieden of buitenlandse reizen.
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
                    Download clips voor reactions, edits of montages voor je eigen social media, zolang je de auteursrechten respecteert of toestemming hebt van de maker.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leren en trainen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar tutorials, webinars of instructievideo's voor offline studie, zoals kookdemo's, workouts of zakelijke tips.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Herinneringen bewaren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar familievideo's, hoogtepunten van evenementen of groepsposts die kunnen verdwijnen als accounts worden verwijderd of privacy-instellingen wijzigen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing en business
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bedrijven kunnen eigen branded video's of livestreams downloaden voor offline gebruik in presentaties, advertenties of klantgesprekken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Datakosten besparen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download via wifi om mobiele data te besparen, vooral bij lange of hoge kwaliteit video's wanneer je bundel beperkt is.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline entertainment
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bouw een collectie grappige clips, muziekvideo's of livestreams om offline te kijken tijdens vrije momenten of op reis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Delen binnen de community
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar video's van Facebook-groepen of -pagina's om offline te delen in workshops, lessen of community-evenementen zonder internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Facebook-video's downloaden geeft je de flexibiliteit om content te gebruiken waar en wanneer je wilt, zonder afhankelijk te zijn van een verbinding.
            </p>
          </div>

          {/* Wie zou moeten downloaden */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie Facebook-video's zou moeten downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mensen die profiteren van offline toegang
            </h2>
            <p className="section-muted mb-4">
              Facebook-video's downloaden is handig voor iedereen die content offline wil bekijken of inzetten. Niet alleen voor casual gebruikers — bepaalde groepen besparen tijd en moeite door te downloaden. Dit zijn de doelgroepen en redenen.
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
                    Influencers, YouTubers of TikTokers kunnen video's downloaden voor reactions, samenwerkingen of edits, zolang ze het auteursrecht respecteren of toestemming hebben.
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
                    Bewaar educatieve content, zoals colleges, tutorials of webinars, voor offline studie of gebruik in de klas — ideaal op plekken met een zwakke verbinding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reizigers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download entertainment, zoals virale clips of livestreams, om onderweg zonder internet te kunnen kijken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ondernemers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar je eigen branded video's, livestreams of advertenties voor offline gebruik in marketing, pitches of klantpresentaties.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Herinneringenbewakers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar persoonlijke video's, familie momenten of groepsposts die kunnen verdwijnen door accountwijzigingen of privacyinstellingen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sportliefhebbers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download workoutvideo's, yogasessies of gezondheidstips om offline te volgen, thuis of in de sportschool.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Communityleiders
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar groepsvideo's of pagina-inhoud om offline te delen tijdens meetings, events of workshops zonder wifi.
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
                    Download video's ter inspiratie, zoals doe-het-zelfprojecten of knutsel-tutorials, zodat je ze offline kunt raadplegen tijdens je hobby's.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Juridisch */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om Facebook-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De juridische regels uitgelegd
            </h2>
            <p className="section-muted mb-4">
              Facebook-video's downloaden is een complex onderwerp. Volgens de Servicevoorwaarden van Facebook mag je geen content downloaden zonder toestemming van de maker of het platform. Volgens het Amerikaanse auteursrecht is het opslaan van beschermde video's zonder toestemming illegaal en kan het leiden tot juridische stappen, al komt dat bij persoonlijk gebruik zelden voor. Uitzonderingen zijn bijvoorbeeld:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Video's in het publieke domein
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video's die tot het publieke domein behoren en niet door auteursrecht worden beschermd.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Creative Commons-licenties
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video's met Creative Commons-licenties die downloaden voor specifieke doeleinden toestaan, zoals delen of remixen, zolang je de voorwaarden volgt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Toestemming van de maker
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video's waarvoor de maker expliciet toestemming geeft om te downloaden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Fair-use situaties
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fair-use scenario's, zoals downloaden voor educatie, commentaar of onderzoek, al hangt het af van hoe je de video gebruikt.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Controleer altijd de beschrijving van de video op licentie-informatie of vraag de maker om toestemming. Met de opslaan-functie van Facebook kun je posts markeren voor persoonlijk gebruik — een legaal alternatief. Respecteer het auteursrecht en vraag makers om toestemming voordat je downloadt.
            </p>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's bij het downloaden van Facebook-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Gevaren om te vermijden tijdens het downloaden
            </h2>
            <p className="section-muted mb-4">
              Facebook-video's downloaden is handig, maar er zijn risico's wanneer je onbetrouwbare tools gebruikt of de juridische grenzen negeert. Door deze risico's te kennen, bescherm je jouw apparaat en blijf je veilig. Dit zijn de belangrijkste aandachtspunten.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware van onbetrouwbare sites"
              >
                Veel downloadsites plaatsen nepknoppen, pop-ups of verborgen scripts <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">die virussen of malware installeren</a>. Dat kan je apparaat beschadigen of gegevens stelen. Gebruik betrouwbare platforms zoals videodownload.io om dat te voorkomen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Juridische problemen">
                Downloaden zonder toestemming schendt de regels van Facebook en kan leiden tot accountblokkades of, in zeldzame gevallen, juridische stappen door rechthebbenden. Controleer daarom altijd eerst de licentie.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Bestanden van lage kwaliteit"
              >
                Onbetrouwbare sites leveren vaak wazige of kapotte video's die niet goed afspelen, wat je tijd en opslagruimte kost.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacyrisico's">
                Dubieuze sites kunnen je gedrag volgen, persoonlijke informatie verzamelen of je data aan derden verkopen. Kies daarom een tool die geen onnodige permissies vraagt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Beschadigde downloads">
                Slecht gebouwde sites leveren soms incomplete bestanden die niet openen, wat voor frustratie zorgt.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Ethische overwegingen"
              >
                Door te downloaden mis je views of advertenties, wat nadelig kan zijn voor makers die afhankelijk zijn van engagement. Steun hen door waar mogelijk online te kijken.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Opslag die volloopt"
              >
                Veel video's downloaden, zeker in hoge kwaliteit, kan je opslag snel vullen. Beheer je downloads om dat te voorkomen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Door een veilige, betrouwbare tool zoals videodownload.io te gebruiken en de auteursrechtregels te respecteren, voorkom je deze risico's en download je zorgeloos.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De betrouwbare keuze voor Facebook-downloads
            </h2>
            <p className="section-muted mb-4">
            We hebben videodownload.io gebouwd om een snelle, veilige en schone manier te bieden om Facebook-video's te downloaden zonder de risico's van dubieuze websites. Ons doel: downloaden eenvoudig en veilig maken voor iedereen. Dit zijn zes redenen om voor ons te kiezen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Zonder malware en veilig">
                Onze site heeft geen pop-ups, nepknoppen of schadelijke scripts, zodat je apparaat beschermd blijft tegen virussen of spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Eenvoudig in gebruik">
                Plak de link, klik op downloaden en klaar. Geen ingewikkelde stappen of technische kennis nodig.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Snelle verwerking">
                Onze servers verwerken video's razendsnel en leveren je download in seconden, zelfs bij livestreams of groepscontent.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexibele formaten">
                Kies MP4 voor video of MP3 voor audio, met kwaliteitsopties zoals 720p of 1080p, passend bij jouw voorkeur.
              </FeatureCard>
              <FeatureCard icon={Download} title="Volledig gratis">
                Download onbeperkt video's zonder te betalen. Geen abonnementen of verborgen kosten.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacybescherming">
                We volgen je downloads niet, slaan geen data op en delen geen informatie, zodat je activiteit privé blijft.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Veelgestelde vragen over videodownload.io en Facebook-downloads
            </h2>
            <p className="section-muted mb-4">
              Hier vind je antwoorden op veelgestelde vragen over het downloaden van Facebook-video's met videodownload.io, zodat je met een gerust gevoel kunt beginnen.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Is videodownload.io gratis te gebruiken?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, ons platform is 100% gratis. Download zoveel video's als je wilt zonder kosten of limieten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Moet ik software installeren om te downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, alles werkt in je browser. Geen apps, extensies of installaties nodig — lekker eenvoudig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Kan ik Facebook-livestreams of groepsvideo's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, wij ondersteunen het downloaden van livestreams en groepsvideo's, zolang je toegang hebt tot de content. Plak simpelweg de link.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Is videodownload.io veilig?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absoluut. Onze site is veilig, zonder pop-ups of verdachte links. We stellen jouw veiligheid voorop en testen het platform regelmatig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Kan ik video's in hoge kwaliteit downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, je kunt downloaden in de hoogste beschikbare kwaliteit, zoals 720p of 1080p, afhankelijk van de originele Facebook-video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Wat als een video niet wil downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer de URL en je internetverbinding. Werkt het nog steeds niet, neem dan contact op met onze support en we lossen het snel op.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Kan ik alleen het audio van een Facebook-video opslaan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, met onze MP3-functie haal je het geluid uit elke video — ideaal voor muziek, speeches of korte fragmenten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Is het legaal om Facebook-video's te downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Dat hangt ervan af. Volgens de regels van Facebook mag je niet downloaden zonder toestemming. Video's in het publieke domein, met een Creative Commons-licentie of met toestemming van de maker zijn meestal toegestaan. Fair use kan gelden voor educatie of commentaar, maar controleer altijd de licentie om problemen te voorkomen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Direct starten */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin nu met downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Haal je Facebook-video's binnen enkele seconden binnen
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Snel en eenvoudig proces
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Veilige downloads zonder malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video en audio in hoge kwaliteit
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Facebook-video downloaden
                </Button>
              </a>
            </div>
          </div>

          {/* Ontdek meer downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ontdek meer downloadtools
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
                        {p.name}-video downloaden
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
      <FeatureCard icon={VideoIcon} title="Videodownloads in hoge kwaliteit">
        Kies uit resoluties zoals 720p of 1080p, afhankelijk van wat de Facebook-video aanbiedt. Of het nu een livestream of korte clip is, je kiest eenvoudig de beste kwaliteit zonder ingewikkelde instellingen.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Snelle downloadsnelheden">
        Onze servers halen Facebook-video's razendsnel op. De meeste downloads zijn binnen een minuut klaar, afhankelijk van je internetsnelheid en de lengte van de video.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio-extractie optie">
        Alleen het geluid nodig? Converteer Facebook-video's met één klik naar MP3. Ideaal voor muziek, speeches of podcast-achtige fragmenten om offline te luisteren.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Geen software nodig">
        Download video's direct via onze website in elke browser op telefoon, tablet of computer. Geen apps of extra programma's nodig.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Ondersteuning voor live- en groepsvideo's">
        Sla video's op van Facebook-posts, livestreams of privégroepen (mits je toegang hebt). Plak de link en wij regelen de rest, ook bij speciale contenttypes.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilige interface zonder advertenties">
        Onze site bevat geen pop-ups, nepknoppen of gevaarlijke redirects. Je downloadt elke keer in een schone, veilige omgeving zonder zorgen over virussen.
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
      <StepCard step={1} title="Kopieer de URL van de Facebook-video">
        <a href="http://www.facebook.com">Open Facebook</a> in de app of browser, zoek de gewenste video, livestream of groepspost en kopieer de URL. Tik op de drie puntjes van de post en kies "Link kopiëren" of kopieer het adres uit de browser.
      </StepCard>
      <StepCard step={2} title="Plak de link op onze site">
        Ga naar videodownload.io in een willekeurige browser. Zoek op de homepage de downloadbalk en plak de gekopieerde Facebook-link. Controleer of de URL klopt.
      </StepCard>
      <StepCard step={3} title="Wij verwerken de video">
        Klik op de knop "Downloaden". Ons systeem haalt de video op en maakt die binnen enkele seconden klaar. Kies het gewenste formaat, zoals MP4 voor video of MP3 voor audio, en selecteer eventueel de kwaliteit.
      </StepCard>
      <StepCard step={4} title="Sla je Facebook-video op">
        Zodra de downloadlink verschijnt, klik je erop om de video op je apparaat op te slaan. Hernoem het bestand als je je downloads overzichtelijk wilt houden.
      </StepCard>
    </div>
  );
}
