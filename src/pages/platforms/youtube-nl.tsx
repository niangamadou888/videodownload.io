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

export default function YouTubePageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "YouTube Video Downloaden | Gratis & HD",
    description: "Download YouTube videos, Shorts en Lives in mp4, 1080p, 4k. Gratis online video downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een YouTube video, Shorts of afspeellijst URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functies
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Functies die het downloaden van YouTube video's eenvoudig en betrouwbaar maken
          </h2>
          <p className="text-muted-foreground mb-6">
            Dit zijn zes krachtige functies die van videodownload.io de favoriete
            keuze maken om YouTube video's snel, veilig en efficiënt te downloaden.
            Elke functionaliteit is ontworpen om je ervaring te verbeteren en je
            flexibiliteit te geven voor al je downloadbehoeften.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je YouTube video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een duidelijke stap-voor-stap handleiding om video's moeiteloos op te slaan
          </h2>
          <p className="text-muted-foreground mb-6">
            YouTube video's opslaan op je apparaat is eenvoudig met videodownload.io.
            Volg deze vier overzichtelijke stappen en download elke video in een
            paar minuten. Elke stap is intuïtief, zelfs als je niet technisch bent.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                YouTube video downloaden
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom YouTube video's downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Belangrijkste toepassingen voor offline videotoegang
            </h2>
            <p className="section-muted mb-4">
              YouTube video's downloaden geeft je de vrijheid om overal en op elk
              moment naar content te kijken zonder afhankelijk te zijn van internet.
              Of je nu data wilt besparen, een reis voorbereidt of content wilt
              archiveren, offline video's zijn enorm handig. Hieronder vind je de
              beste redenen om YouTube video's voor persoonlijk gebruik te downloaden.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reizen zonder internettoegang
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar films, vlogs of muziekvideo's om te kijken tijdens
                    lange vluchten, treinreizen of in afgelegen gebieden waar
                    geen Wi-Fi of mobiele data beschikbaar is. Zo geniet je
                    onderweg van ononderbroken entertainment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educatieve doeleinden en studie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download tutorials, colleges of how-to gidsen voor offline
                    leren. Sla bijvoorbeeld codewalkthroughs, taallessen of
                    doe-het-zelf reparatievideo's op zodat je ze in je eigen
                    tempo kunt bekijken zonder te streamen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentcreatie en bewerking
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Haal fragmenten voor je eigen video's, zoals reactievideo's,
                    montages of commentaar, zolang je de auteursrechten respecteert
                    of toestemming van de maker hebt. Ideaal voor YouTubers of
                    TikTok makers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Favoriete video's archiveren
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sommige video's verdwijnen van YouTube door kanaalwijzigingen
                    of auteursrechtelijke problemen. Door te downloaden bewaar je
                    persoonlijke favorieten of zeldzame content voor de lange
                    termijn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mobiele data besparen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streaming kost veel data, zeker met beperkte bundels.
                    Downloaden via Wi-Fi maakt het mogelijk om te kijken zonder
                    zorgen over databundels of hoge rekeningen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Offline entertainmentbibliotheek
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bouw een collectie met muziekvideo's, filmtrailers of vlogs
                    om offline van te genieten. Perfect voor kampeertrips,
                    sportsessies of ontspannen thuis zonder buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Workshops en presentaties
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professionals kunnen vakgerichte video's downloaden, zoals
                    keynotes of trainingen, om ze offline te delen tijdens
                    workshops of vergaderingen en zo vloeiende weergave zonder
                    internet te garanderen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              YouTube video's downloaden biedt flexibiliteit en gemak, zodat je
              content kunt bekijken op jouw voorwaarden of het nu voor plezier,
              werk of studie is.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie zou YouTube video's moeten downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mensen die het meest profiteren van offline video's
            </h2>
            <p className="section-muted mb-4">
              YouTube video's downloaden is niet alleen voor gelegenheidskijkers
              het is een gamechanger voor groepen die offline toegang nodig
              hebben voor werk, creativiteit of gemak. Dit zijn de mensen die er
              het meest baat bij hebben en waarom het de moeite waard is.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Contentmakers en influencers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTubers, TikTokers of streamers kunnen clips downloaden
                    voor reactievideo's, mash-ups of analyses, zolang ze de
                    auteursrecht en fair use regels respecteren of toestemming
                    van de maker hebben.
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
                    Sla educatieve content op zoals wiskundetutorials, uitlegvideo's
                    over wetenschap of historische documentaires voor offline studie
                    of gebruik in de klas. Ideaal in gebieden met slecht internet of
                    voor geconcentreerd leren zonder afleiding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Veelreizigers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Of je nu in het vliegtuig zit, de trein neemt of je op een
                    afgelegen plek bevindt, gedownloade video's zorgen voor
                    entertainment zonder afhankelijk te zijn van wankele Wi-Fi of
                    dure databundels.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Muziekliefhebbers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Zet muziekvideo's of live optredens om naar MP3's voor offline
                    afspeellijsten. Ideaal om workoutmixen te maken of interviews te
                    beluisteren zonder te streamen, zolang de bron legaal is.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Videoarchivarissen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Verzamelaars of fans van nichecontent kunnen zeldzame video's,
                    oude uploads of persoonlijke favorieten opslaan die anders van
                    YouTube zouden verdwijnen door kanaalsluitingen of opruimacties.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fitness- en welzijnsfans
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download yogalessen, workouts of meditatiegidsen om offline te
                    volgen, of je nu thuis bent, in het park of in de sportschool
                    zonder verbinding nodig te hebben.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Onderzoekers en professionals
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Academici of vakspecialisten kunnen conferentietoespraken,
                    webinars of trainingsvideo's bewaren voor offline gebruik tijdens
                    veldwerk, presentaties of studiesessies.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Ongeacht je rol of levensstijl: YouTube video's downloaden bespaart
              tijd, data en moeite terwijl je favoriete content altijd binnen
              handbereik blijft.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om YouTube video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dit moet je weten over de wet
            </h2>
            <p className="section-muted mb-4">
              De legaliteit van het downloaden van YouTube video's hangt af van
              verschillende factoren. Het is belangrijk de regels te kennen om
              problemen te voorkomen. In de Servicevoorwaarden van YouTube staat
              duidelijk dat het downloaden van video's verboden is, tenzij het
              platform een officiële optie biedt, zoals{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=nl&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                de offline functie van YouTube Premium
              </a>{" "}
              voor abonnees. Volgens de Amerikaanse auteurswet is het downloaden
              van{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                auteursrechtelijk beschermd materiaal
              </a>{" "}
              zonder toestemming van de maker of rechthebbende illegaal en kan
              het leiden tot civiele rechtszaken, al wordt er zelden opgetreden
              tegen individuele gebruikers voor persoonlijk gebruik.
            </p>
            <p className="section-muted mb-2">
              Er zijn echter uitzonderingen waarbij downloaden wel is toegestaan:
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
                    Content die niet langer onder auteursrecht valt, mag vrij
                    worden gedownload.
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
                    Sommige YouTube video's hebben licenties die downloaden voor
                    bepaalde doeleinden toestaan, zoals remixen of delen,
                    zolang je de voorwaarden volgt.
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
                    Als de maker van de video expliciet downloaden toestaat,
                    zit je goed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Fair use-scenario's
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beperkt downloaden voor educatie, commentaar, kritiek of
                    onderzoek kan vallen onder{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      fair use
                    </a>
                    , maar dit hangt af van de context en hoe je de video inzet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Controleer om veilig te blijven de licentie in de beschrijving of
              vraag de maker om toestemming. Met YouTube Premium kun je video's
              legaal offline opslaan voor persoonlijk gebruik. Twijfel je, kies
              dan voor de voorzichtige aanpak zodat je makers respecteert en geen
              auteursrechten schendt.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's van het downloaden van YouTube-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze voorkomt
            </h2>
            <p className="section-muted mb-4">
              Hoewel YouTube-video's downloaden handig is, brengt het risico's
              met zich mee als je de verkeerde tools gebruikt of wettelijke
              grenzen negeert. Door je bewust te zijn van deze gevaren maak je
              slimme keuzes en bescherm je je apparaat en gegevens. Dit zijn de
              belangrijkste risico's om op te letten.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware van onbetrouwbare websites"
              >
                Veel downloadsites staan vol met neppe "download"-knoppen,
                pop-ups of verborgen scripts die{" "}
                <a
                  href="https://cyberpress.org/youtube-downloader-malware/"
                  className="text-primary hover:text-primary-glow underline transition-colors"
                >
                  virussen of malware op je apparaat installeren
                </a>
                . Ze kunnen je gegevens stelen of je systeem beschadigen. Blijf
                bij betrouwbare platforms zoals videodownload.io om veilig te
                blijven.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Juridische gevolgen">
                Het downloaden van auteursrechtelijk beschermde video's zonder
                toestemming schendt de Servicevoorwaarden van YouTube, wat kan
                leiden tot accountschorsingen of, in zeldzame gevallen,
                juridische stappen door rechthebbenden. Controleer altijd de
                licentie of gebruik een legale optie zoals YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Bestanden van slechte kwaliteit of beschadigd"
              >
                Dubieuze sites leveren vaak video's in lage resolutie of
                bestanden die niet goed afspelen, waardoor je tijd en opslag
                verspilt. Betrouwbare tools zorgen ervoor dat je de kwaliteit
                krijgt die je verwacht.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-inbreuken">
                Onbetrouwbare downloadsites kunnen je surfgedrag volgen,
                persoonlijke informatie verzamelen of je gegevens verkopen aan
                derden. Kies voor een dienst die privacy vooropstelt en geen
                onnodige toestemmingen vraagt.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Onvolledige downloads">
                Sommige tools verwerken video's niet goed, waardoor je eindigt
                met incomplete of corrupte bestanden die niet openen. Dit komt
                vaak voor bij verouderde of slecht ontworpen sites.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Ethische gevolgen voor makers"
              >
                Video's downloaden kan advertenties omzeilen en daarmee makers
                schaden die afhankelijk zijn van advertentie-inkomsten of views.
                Ondersteun makers door hun content online te blijven bekijken of
                om toestemming te vragen als je wilt downloaden.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Door een betrouwbare en veilige tool zoals videodownload.io te
              gebruiken en de auteursrechtregels te respecteren, beperk je deze
              risico's en geniet je van veilige, betrouwbare downloads.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je vertrouwde partner voor YouTube-downloads
            </h2>
            <p className="section-muted mb-4">
              We hebben videodownload.io gelanceerd om een veilige, eenvoudige en
              snelle manier te bieden om YouTube-video's te downloaden zonder de
              ellende van onbetrouwbare websites. Ons doel was een strak platform
              te bouwen dat het lawaai van advertentierijke, riskante downloaders
              wegneemt. Dit zijn zes redenen waarom videodownload.io de beste
              keuze is voor je YouTube-downloads.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Malwarevrij en veilig">
                Onze site bevat geen pop-upadvertenties, nepknoppen of kwaadaardige
                scripts, zodat je apparaat beschermd blijft tegen virussen en
                spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Gebruiksvriendelijk ontwerp">
                Dankzij een overzichtelijke interface en eenvoudig proces kan
                iedereen binnen enkele seconden video's downloaden zonder
                technische kennis nodig te hebben.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Razendsnelle downloads">
                Onze geoptimaliseerde servers verwerken video's razendsnel, zodat
                je bestanden zonder lange wachttijden klaarstaan, zelfs in hoge
                kwaliteit of bij lange video's.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Flexibele formaten">
                Kies voor MP4-video of MP3-audio met meerdere
                resolutieopties van 720p tot 4K zodat het altijd aansluit op je
                wensen.
              </FeatureCard>
              <FeatureCard icon={Download} title="Volledig gratis">
                Download onbeperkt video's zonder een cent te betalen. Geen
                abonnementen, geen verborgen kosten volledige functionaliteit
                zonder prijskaartje.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacygerichte aanpak">
                We volgen je downloads niet, slaan geen persoonlijke gegevens op
                en delen niets met derden, zodat je activiteit privé blijft.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Veelgestelde vragen over videodownload.io en YouTube-downloads
            </h2>
            <p className="section-muted mb-4">
              We hebben de antwoorden verzameld op de meest gestelde vragen over
              het gebruik van videodownload.io en het downloaden van
              YouTube-video's, zodat je met vertrouwen van start gaat.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Is videodownload.io echt gratis te gebruiken?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, ons platform is 100% gratis. Je kunt zoveel video's
                  downloaden als je wilt zonder kosten of beperkingen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Moet ik software installeren om video's te downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, videodownload.io werkt volledig in je webbrowser. Je hebt
                  geen apps, extensies of extra downloads nodig, waardoor alles
                  eenvoudig blijft.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Kan ik complete YouTube-afspeellijsten downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Zeker. Plak gewoon de URL van de afspeellijst en ons systeem
                  verwerkt alle video's, zodat je ze in één keer kunt
                  downloaden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Is het veilig om videodownload.io te gebruiken?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, onze site is veilig en bevat geen pop-upadvertenties of
                  schadelijke links. We geven prioriteit aan gebruikersveiligheid
                  en testen ons platform regelmatig om het schoon en betrouwbaar
                  te houden.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Kan ik video's in hoge kwaliteit downloaden, zoals 4K?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Als de YouTube-video beschikbaar is in 4K, kun je die resolutie
                  downloaden. We ondersteunen kwaliteitsniveaus van 360p tot 4K,
                  afhankelijk van de bron.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Wat als een video niet goed downloadt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer de URL en je internetverbinding. Blijft het probleem
                  bestaan, neem dan contact op met ons supportteam en wij lossen
                  het voor je op.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Kan ik audio uit YouTube-video's halen?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, met onze MP3-conversie download je alleen het audiobestand
                  van elke YouTube-video ideaal voor muziek of podcastfragmenten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Is het legaal om YouTube-video's te downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Dat hangt van de video af. In de Servicevoorwaarden van YouTube
                  is downloaden verboden tenzij er toestemming is, maar video's
                  in het publieke domein, met een Creative Commons-licentie of
                  met toestemming van de maker zijn meestal toegestaan. Fair use
                  kan gelden voor bijvoorbeeld onderwijs of commentaar, maar
                  controleer altijd de licentie om problemen te voorkomen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin nu met downloaden
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download je YouTube-video's in enkele seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Snel en eenvoudig proces
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Veilige, malwarevrije downloads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video en audio in hoge kwaliteit
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  YouTube-video downloaden
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
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
      <FeatureCard icon={VideoIcon} title="Video's downloaden in hoge kwaliteit">
        Kies uit verschillende resoluties, waaronder 720p, 1080p en zelfs 4K als
        de video dat ondersteunt. Of je nu een tutorial of een muziekvideo
        opslaat, je selecteert de kwaliteit die het best bij je apparaat of
        voorkeur past zonder ingewikkelde instellingen.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Bliksemsnelle downloadsnelheden">
        Onze geoptimaliseerde servers zorgen ervoor dat video's in seconden
        binnenkomen in plaats van minuten. Afhankelijk van je verbinding en de
        lengte van de video zijn de meeste bestanden binnen een minuut klaar,
        zodat je geen tijd meer verspilt aan traag verwerken.
      </FeatureCard>
      <FeatureCard icon={Music} title="Audio extraheren als MP3">
        Alleen het geluid nodig? Zet elke YouTube-video met één klik om naar een
        MP3-bestand. Ideaal om muziek, podcastafleveringen of audio van lezingen
        op te slaan voor offline luisteren.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Geen software-installatie nodig">
        Download video's rechtstreeks in je browser op elk apparaat desktop,
        tablet of telefoon. Er is geen noodzaak om apps, plug-ins of extra
        programma's te installeren, waardoor je apparaat schoon blijft en het
        proces moeiteloos verloopt.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Volledige afspeellijstondersteuning">
        Sla volledige YouTube-afspeellijsten in één keer op. In plaats van elke
        video apart te downloaden, plak je de link van de afspeellijst en ons
        systeem verwerkt alles tegelijk en houdt het netjes geordend.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilige en advertentievrije interface">
        In tegenstelling tot veel andere downloadsites is videodownload.io vrij
        van irritante pop-ups, omleidingen of verdachte links. Het strakke en
        gebruiksvriendelijke ontwerp zorgt voor een veilige, soepele ervaring,
        zodat je zonder zorgen kunt downloaden.
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
      <StepCard step={1} title="Kopieer de YouTube-video-URL">
        <a href="http://www.youtube.com">Open YouTube</a> in je browser of app, zoek de video die je wilt downloaden
        en kopieer de URL. Je kunt de link pakken uit de adresbalk of via de
        knop "Delen" onder de video en vervolgens "Link kopiëren" kiezen.
      </StepCard>
      <StepCard step={2} title="Plak de URL op onze website">
        Bezoek videodownload.io in een willekeurige browser. Op de startpagina
        zie je een downloadbalk waarin je de gekopieerde YouTube-URL kunt
        plakken. Klik met de rechtermuisknop of houd ingedrukt en plak de link
        in het veld, zodat alles klopt.
      </StepCard>
      <StepCard step={3} title="Laat ons het videobestand verwerken">
        Klik op de knop "Downloaden" naast de URL-balk. Ons systeem haalt de
        video direct op en maakt hem klaar voor download. Kies indien nodig het
        gewenste formaat (bijvoorbeeld MP4 of MP3) en de kwaliteit (zoals 1080p
        of 4K). Dit duurt meestal maar enkele seconden.
      </StepCard>
      <StepCard step={4} title="Sla je video op en organiseer hem">
        Zodra de verwerking klaar is, verschijnt er een downloadlink. Klik erop
        om de video op je apparaat op te slaan. Je kunt het bestand tijdens het
        downloaden hernoemen zodat je alles overzichtelijk houdt voor later
        offline gebruik.
      </StepCard>
    </div>
  );
}
