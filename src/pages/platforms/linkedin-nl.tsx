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

export default function LinkedInPageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "LinkedIn Video Downloaden | Gratis & HD",
    description:
      "Download LinkedIn-video's en posts in mp4, 1080p kwaliteit. Gratis online video-downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download LinkedIn Video
          </h1>
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een LinkedIn video- of post-URL"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functionaliteiten
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download LinkedIn-video's zonder gedoe
          </h2>
          <p className="text-muted-foreground mb-6">
            De snelle gids om professionele clips offline op te slaan
          </p>

          <EnhancedFeatures />

          {/* Hoe download je */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je LinkedIn-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Een duidelijke, stap-voor-stap aanpak
          </h2>
          <p className="text-muted-foreground mb-6">
            Met videodownload.io staat elk LinkedIn-video binnen enkele minuten op je toestel.
            Volg vier intuïtieve stappen – zelfs als je geen tech-specialist bent – en je download
            je favoriete clip zonder moeite.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Download LinkedIn Video
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom LinkedIn-video's downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De beste toepassingsscenario's
            </h2>
            <p className="section-muted mb-4">
              Het LinkedIn-nieuwsoverzicht gaat razendsnel en sterke video's raken ondergesneeuwd.
              Door te downloaden bewaar je wat echt waarde heeft en maak je van even scrollen een
              blijvend archief. Kies bewust: sla de clips op die jouw carrière, netwerk of bedrijf
              versterken – beschermd tegen glitches of verwijderde posts.
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
                    Bewaar een leiderschapstalk of marketingcase voor in het vliegtuig of tijdens
                    woon-werkverkeer zonder wifi. Trainers nemen fragmenten van workshops mee om ze
                    op locatie af te spelen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content hergebruiken
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketeers slaan klantverhalen en cases op om ze te tonen in decks of op andere
                    kanalen. Werkzoekenden analyseren cv-tips of pitch-video's beeld voor beeld en
                    scherpen hun verhaal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Je eigen posts veiligstellen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Platformupdates of bugs kunnen posts laten verdwijnen. Houd je video's lokaal beschikbaar
                    zodat je werk intact blijft.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Training en onderwijs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR-teams bewaren onboardingvideo's voor nieuwe medewerkers. Studenten downloaden
                    paneldiscussies of webinars om offline aantekeningen te maken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Persoonlijke groei
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar motiverende talks of netwerkadvies om terug te kijken wanneer je energie nodig hebt.
                    Een mentorvideo wordt zo een dagelijkse reminder.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloaden geeft je controle: je beslist wanneer en hoe je LinkedIn-content consumeert – voor werk,
              studie of inspiratie.
            </p>
          </div>

          {/* Doelgroep */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Wie profiteren het meest van LinkedIn-downloads?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De doelgroepen met de grootste winst
            </h2>
            <p className="section-muted mb-4">
              LinkedIn is gemaakt voor professionals. Downloaden past perfect bij iedereen die het platform gebruikt om
              gericht te groeien, te leren of te netwerken. Zie je posts als hulpmiddelen? Dan is dit precies voor jou.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionals en managers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Managers delen leadership-video's met hun team. Marketeers analyseren campagnes van concurrenten en
                    plaatsen cleane clips in hun presentaties.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Werkzoekenden en loopbaancoaches
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download interviewtips of cv-walkthroughs om offline te oefenen. Coaches verzamelen klantsucces als
                    bewijs tijdens sessies, zonder watermerken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ondernemers en mkb'ers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Start-ups bewaren pitches of marktupdates om concurrentie te volgen. Het mkb verwerkt klantreviews in
                    websites en salesmateriaal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Trainers en docenten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    HR-teams houden compliance-video's paraat voor interne trainingen. Docenten tonen panelgesprekken als
                    praktijkcase zonder afhankelijk te zijn van een live verbinding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenten en levenslange lerenden
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download carrière-advies of technische tutorials en neem de tijd om alles door te nemen. Ook casual users
                    bewaren motiverende clips voor lastige momenten.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Welke rol je ook hebt, LinkedIn-downloads besparen tijd, data en moeite terwijl je favoriete content binnen
              handbereik blijft.
            </p>
          </div>

          {/* Juridisch */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om LinkedIn-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Wat je moet weten over auteursrecht
            </h2>
            <p className="section-muted mb-4">
              Het downloaden van LinkedIn-video's valt in een grijs gebied. Makers behouden hun rechten onder wetten zoals de
              <a href="https://nl.wikipedia.org/wiki/Digital_Millennium_Copyright_Act"> DMCA</a>. Voor privégebruik – bijvoorbeeld een webinar offline terugkijken – valt dat vaak onder fair use. Delen zonder toestemming of commerciële inzet kan echter problemen opleveren. Geluidssporen, zoals muziek of voice-overs, kunnen extra rechten hebben.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wanneer mag het?
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geeft de maker toestemming of is het materiaal publiek domein, dan zit je goed. Educatief gebruik – zoals
                    een docent die een fragment in de klas toont – wordt meestal gedoogd. Gebruik je downloads privé en vermeld
                    de bron als je deelt, dan blijf je doorgaans veilig.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's bij het downloaden van LinkedIn-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze voorkomt
            </h2>
            <p className="section-muted mb-4">
              Niet elke downloader is even betrouwbaar. Slechte tools kunnen je apparaat of data in gevaar brengen.
              Weet waar je op klikt vóórdat je download.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware en virussen">
                Onbetrouwbare sites verstoppen spyware of ransomware in videobestanden. Eén verkeerde download kan je
                bestanden versleutelen of wachtwoorden stelen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishingpraktijken">
                Fake loginpagina's voor LinkedIn vangen je inloggegevens af. Pop-ups met "updates" installeren trackingsoftware.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Slechte videokwaliteit">
                Slechte tools comprimeren zwaar, waardoor beeld hapert of audio wegvalt.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-lekken">
                Sommige diensten loggen je downloads en verkopen je IP of voorkeuren. Cybercriminelen gebruiken die voor spam
                of fraude.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Risico op LinkedIn-blokkades">
                Overmatig gebruik van derde-partij-tools kan je account flaggen, vooral bij actieve postende gebruikers.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Opslagvolumes">
                Veel video's nemen snel ruimte in en vertragen apparaten. Beschadigde bestanden laten videospelers crashen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Kies altijd voor betrouwbare sites, scan je downloads en overweeg een VPN voor extra bescherming.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io gebruiken?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je betrouwbare partner voor LinkedIn-downloads
            </h2>
            <p className="section-muted mb-4">
              We lanceerden videodownload.io in 2022, gefrustreerd door trage, onveilige tools. Als LinkedIn-gebruikers
              wilden we een snelle en schone manier om video’s veilig op te slaan. Ons kleine team blijft optimaliseren en
              heeft na miljoenen downloads nog geen datalek gehad.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Razendsnel">
                Downloads zijn klaar in minder dan vijf seconden, zelfs tijdens piekmomenten.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen advertenties">
                Een rustige interface zonder pop-ups of afleiding.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken verwijderd">
                Klaar voor direct gebruik in presentaties of workflows.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Onbeperkte downloads">
                Geen daglimiet, download wat je nodig hebt.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt overal">
                Compatibel met oude laptops én nieuwe smartphones.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig systeem">
                We bewaren geen gegevens nadat de download is afgerond.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antwoorden op vragen over LinkedIn-downloads
            </h2>
            <p className="section-muted mb-4">
              Hier vind je antwoorden op de meest gestelde vragen rond videodownload.io en het downloaden van LinkedIn-video's,
              zodat je meteen van start kunt.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik privévideo's downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we ondersteunen alleen openbare posts. Voor privécontent heb je toestemming van de maker nodig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wordt mijn toestel trager van downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Onze bestanden zijn licht en schoon, dus je device blijft performant. Let wel op je opslagruimte als je
                  veel videos bewaart.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom heeft mijn video geen watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We halen de originele stream op en strippen branding, zodat jij een nette versie krijgt voor privégebruik.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen audio opslaan?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Zeker. Kies voor MP3 nadat je de link hebt geplakt en je krijgt enkel het geluid.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wat doe ik als de download faalt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer of de link openbaar is en met linkedin.com begint. Probeer een andere browser of maak de cache schoon.
                  Onze chat helpt je graag verder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Is er een limiet op de videoduur?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We ondersteunen video's tot 60 minuten. Langere bestanden duren iets langer in verwerking maar komen volledig binnen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Bewaren jullie mijn downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee. We verwerken je request realtime en verwijderen alles direct daarna. De video blijft alleen bij jou.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ziet de maker dat ik zijn video heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn verstuurt geen meldingen. Je downloads zijn privé.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin vandaag nog met het opslaan van LinkedIn-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download professionele clips in seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Kopieer de LinkedIn-link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plak op onze website
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download een schone video
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download LinkedIn Video
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
              Download van je favoriete platformen
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
      <FeatureCard icon={VideoIcon} title="Video's in haarscherpe kwaliteit">
        Download LinkedIn-video's tot 1080p zolang de bron het ondersteunt. Geen wazige beelden meer tijdens het terugkijken.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Zonder logo's of watermerken">
        Het LinkedIn-logo verdwijnt. Je krijgt een schone clip voor presentaties of archief.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op elk toestel">
        Op laptop, telefoon of tablet – open de browser, plak de link, download klaar.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Supersnelle downloads">
        Onze servers staan dicht bij LinkedIn, waardoor je binnen seconden klaar bent, zelfs tijdens drukte.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis en zonder limiet">
        Geen kosten, geen accounts, geen daglimieten. Download wat je nodig hebt.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilige workflow">
        We bewaren geen links of bestanden na afloop. Geen trackers of advertenties.
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
      <StepCard step={1} title="Kopieer de link op LinkedIn">
        <a href="http://www.linkedin.com">Open LinkedIn</a>, vind de post, tik op de drie puntjes en kies "Copy link to post".
      </StepCard>
      <StepCard step={2} title="Plak de link op onze site">
        Ga naar videodownload.io, plak de URL in het veld en zorg dat deze met linkedin.com begint.
      </StepCard>
      <StepCard step={3} title="Wij verwerken de video">
        Klik op de blauwe "Download"-knop. We halen het bestand op, strippen watermerken en bewaken de kwaliteit.
      </StepCard>
      <StepCard step={4} title="Sla het bestand op">
        Kies MP4 voor beeld + geluid of MP3 voor alleen audio. Het bestand belandt in je downloadmap. Hernoem en speel het af om te checken.
      </StepCard>
    </div>
  );
}
