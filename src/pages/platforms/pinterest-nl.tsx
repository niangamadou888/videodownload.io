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

export default function PinterestPageNl() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Pinterest Video Downloaden | Gratis & HD",
    description:
      "Download Pinterest-video's en pins in mp4, 1080p kwaliteit. Gratis online downloader en converter."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimalistische downloadbox */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Pinterest-video downloaden
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Plak een Pinterest video- of pinlink"
            />
          </div>
          {/* Functionaliteiten */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Functionaliteiten
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Download Pinterest-video's in een paar klikken
          </h2>
          <p className="text-muted-foreground mb-6">
            Ontdek hoe je inspiratie vasthoudt en offline beschikbaar maakt
          </p>

          <EnhancedFeatures />

          {/* Hoe downloaden */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Hoe download je Pinterest-video's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Vier eenvoudige stappen zonder gedoe
          </h2>
          <p className="text-muted-foreground mb-6">
            Via videodownload.io staat elk Pinterest-video binnen enkele minuten op je toestel. Volg de vier stappen hieronder –
            geen technische kennis vereist – en sla elke clip moeiteloos op.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Pinterest-video downloaden
              </Button>
            </a>
          </div>

          {/* Waarom downloaden */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom Pinterest-video's downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De handigste toepassingen
            </h2>
            <p className="section-muted mb-4">
              Pinterest levert inspiratie, maar pins verdwijnen snel. Door te downloaden bewaar je de video's die je echt wil
              uitproberen en bouw je een persoonlijk archief op. Niet om alles te hamsteren, wel om je creativiteit te voeden en
              projecten zeker te stellen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Altijd offline beschikbaar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar DIY-tutorials of reisgidsen voor momenten zonder internet. Ouders hebben creatieve activiteiten klaar
                    voor schermvrije dagen.
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
                    Creators verwerken opgeslagen clips in hun eigen content, voegen tips toe en delen het zonder watermerk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigen pins veiligstellen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bewaar je eigen video's – van recepten tot portfoliofragmenten – zodat je nooit afhankelijk bent van boards of
                    app-glitches.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studeren en plannen
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studenten bewaren tutorials en inspiratievideo's voor oefensessies. Eventplanners tonen ideeën direct aan
                    klanten, zonder opnieuw te zoeken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eigen projecten uitwerken
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Van tuintips tot inrichtingshacks: alles staat klaar voor wanneer je eraan wilt beginnen.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Downloads geven je vrijheid en controle over je Pinterest-inspiratie – altijd en overal.
            </p>
          </div>

          {/* Voor wie */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Voor wie zijn downloads ideaal?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              De doelgroepen die er het meest uithalen
            </h2>
            <p className="section-muted mb-4">
              Van creators tot planners – iedereen die Pinterest gebruikt om ideeën tot leven te brengen, profiteert van een
              downloadtool.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creators en bloggers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ze gebruiken opgeslagen clips als basis voor nieuwe content en bewaren eigen video's zonder watermerken.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbyisten en makers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    DIY-liefhebbers downloaden uitgebreide tutorials om stap voor stap te volgen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Eventplanners en ondernemers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wedding planners tonen opgeslagen inspiratie in pitches. Ondernemers gebruiken productvideo's om vertrouwen te
                    wekken op hun kanalen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ouders en leerkrachten
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Leraren bewaren knutselideeën voor lessen. Ouders hebben leuke activiteiten binnen handbereik voor schermvrije
                    middagen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Huiseigenaren en verbouwers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Opslaan van make-over ideeën, meubelhacks of renovatietips helpt je plannen zodra je start.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Kortom: iedereen die Pinterest inzet om te maken, plannen of leren, haalt voordeel uit downloads.
            </p>
          </div>

          {/* Juridisch */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Is het legaal om Pinterest-video's te downloaden?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Belangrijk om te weten over auteursrechten
            </h2>
            <p className="section-muted mb-4">
              Video's zijn eigendom van de makers en beschermd door wetten zoals de DMCA. Opslaan voor persoonlijk gebruik —
              bijvoorbeeld een tutorial oefenen — valt vaak onder fair use. Delen zonder toestemming of commercieel gebruik kan
              juridische gevolgen hebben. Houd er ook rekening mee dat muziek en voice-overs aparte rechten kunnen hebben.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Wanneer je veilig zit
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Als de maker downloaden toestaat of het materiaal publiek domein is, zit je goed. Gebruik je het voor onderwijs
                    of inspiratie en houd je het privé, dan zit je doorgaans aan de veilige kant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risico's */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risico's bij het downloaden van Pinterest-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mogelijke gevaren en hoe je ze ontwijkt
            </h2>
            <p className="section-muted mb-4">
              Niet elke downloadsite is betrouwbaar. Kies je verkeerd, dan loop je het risico op malware of datalekken.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware & virussen">
                Onbetrouwbare sites stoppen spyware of ransomware in je download. Eén fout kan je bestanden vergrendelen of
                gegevens stelen.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Fake loginpagina's vangen je Pinterest-gegevens af. Pop-ups met "updates" installeren trackers.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Verlies van kwaliteit">
                Slechte tools comprimeren zwaar, waardoor beeld en geluid achteruitgaan.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Privacy-lekken">
                Sommige diensten loggen je downloads en verkopen IP-adres of voorkeuren aan derden.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Kans op blokkade">
                Veelvuldig gebruik van niet-officiële tools kan je Pinterest-account markeren.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Opslagproblemen">
                Veel video's nemen snel ruimte in beslag en vertragen je toestel. Beschadigde bestanden kunnen je videospeler laten
                crashen.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Gebruik betrouwbare sites, scan je downloads en overweeg een VPN voor extra bescherming.
            </p>
          </div>

          {/* Waarom videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Waarom videodownload.io?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Je vertrouwde partner voor Pinterest
            </h2>
            <p className="section-muted mb-4">
              We startten videodownload.io in 2022 omdat we een snelle, veilige manier zochten om Pinterest-inspiratie te bewaren.
              Ons team houdt het proces eenvoudig en veilig – iets waar inmiddels miljoenen gebruikers op vertrouwen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Supersnel">
                Downloads klaar binnen enkele seconden.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Geen advertenties">
                Een rustige interface zonder pop-ups.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermerken weg">
                Je krijgt een cleane versie die direct bruikbaar is.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Geen limieten">
                Download zoveel als je wilt, elke dag opnieuw.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Werkt overal">
                Compatibel met oudere laptops én moderne smartphones.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Veilig systeem">
                We slaan niets op nadat je download klaar is.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Veelgestelde vragen</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Antwoorden op vragen over Pinterest-downloads
            </h2>
            <p className="section-muted mb-4">
              We hebben de meest gestelde vragen over videodownload.io en het downloaden van Pinterest-video's voor je verzameld.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik video's van geheime borden downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, alleen openbare pins worden ondersteund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vertraagt downloaden mijn apparaat?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Onze bestanden zijn licht en veilig. Houd wel je opslagruimte in de gaten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Waarom ontbreekt het watermerk?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We leveren een schone versie van het origineel voor persoonlijk gebruik.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Kan ik alleen audio downloaden?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Ja, kies MP3 nadat je de link hebt ingevoerd om enkel audio te ontvangen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Wat als de download mislukt?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controleer of de link openbaar is en probeer een andere browser of wis de cache. Ons supportteam helpt je graag.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Is er een limiet op de videoduur?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  We ondersteunen video's tot 60 minuten. Langere clips duren iets langer, maar worden volledig gedownload.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover{text-primary transition-colors">
                  Bewaren jullie mijn downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nee, we verwijderen alles direct na de verwerking. Alleen jij behoudt het bestand.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Weet de maker dat ik zijn video heb gedownload?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest stuurt geen meldingen; je downloads blijven privé.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Begin vandaag nog met het bewaren van Pinterest-video's
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Download inspirerende clips in seconden
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Kopieer de pin-link
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Plak hem op onze site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download een schone video
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Pinterest-video downloaden
                </Button>
              </a>
            </div>
          </div>

          {/* Andere downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Ontdek onze andere downloaders
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
      <FeatureCard icon={VideoIcon} title="Topkwaliteit video">
        Bewaar Pinterest-video's in de beste resolutie, tot 1080p als de originele pin dit ondersteunt. Geen wazige beelden of vervaagde kleuren bij het afspelen. We halen het bestand rechtstreeks van Pinterest's servers, waarbij elk detail scherp blijft voor die doe-het-zelf tutorial of dat recept.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Geen watermerken of overlays">
        <a href="https://help.pinterest.com/nl/article/download-an-image">Pinterest toont de gebruikersnaam van de maker op video's gedownload via hun app</a>, waardoor het zicht belemmerd wordt. Wij verwijderen dat allemaal en leveren een schone clip, klaar voor je projecten of persoonlijk gebruik. Bekijk dat interieuridee zonder tekst die details blokkeert.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Werkt op elk apparaat">
        Gebruik je telefoon, tablet, laptop of desktop, en het werkt perfect. Geen apps of extra software nodig. Open gewoon onze site in je browser, plak de link en download. Getest op alles van oude iPhones tot nieuwe PC's, het is altijd eenvoudig.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Snelle downloadsnelheden">
        Wachten is vervelend. Onze tool haalt Pinterest-video's binnen enkele seconden op, meestal onder de 10 voor de meeste clips. We gebruiken servers dicht bij Pinterest voor snelle ophalingen, zodat je een knutselvideo of trainingsroutine kunt opslaan tijdens een koffiepauze.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Volledig gratis">
        Geen kosten, geen registraties, geen verborgen kosten. Download zoveel video's als je wilt, elke dag, zonder limieten. We houden het gratis zodat je die bruiloftinspiratie of dat kunstproject kunt opslaan zonder een betaalmuur tegen te komen.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Veilig en privé proces">
        Je informatie blijft veilig. We bewaren je links of video's niet na het downloaden. Geen tracking, geen logs en geen opdringerige advertenties. Het proces is schoon en houdt je apparaat vrij van rommel of risico's.
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
      <StepCard step={1} title="Kopieer de videolink van Pinterest">
        <a href="http://www.pinterest.com">Open Pinterest</a> op je telefoon of browser. Vind de video die je leuk vindt, zoals een breiles of een huis-makeover. Klik op de drie puntjes rechtsboven bij de pin. Selecteer in het menu "Link kopiëren". Dit haalt de volledige URL op, zoiets als pinterest.com/pin/123456789. Zorg dat het exact is.
      </StepCard>
      <StepCard step={2} title="Plak de link op onze site">
        Ga naar videodownload.io in je browser. Je ziet een vak met de tekst "Plak hier de Pinterest-link". Klik erin en plak de gekopieerde link. Controleer of deze begint met pinterest.com om fouten te voorkomen. Alleen openbare pins werken; video's van privé of geheime borden worden niet gedownload.
      </StepCard>
      <StepCard step={3} title="Wij halen de video op en maken hem schoon">
        Klik op de groene knop "Download" naast het vak. Ons systeem haalt de video binnen enkele seconden op van Pinterest's servers. We verwijderen eventuele watermerken en zorgen voor solide kwaliteit. Audio blijft helder, zodat je geen stappen mist in dat recept of die knutselgids.
      </StepCard>
      <StepCard step={4} title="Bewaar de clip op je apparaat">
        Je krijgt opties: MP4 voor de volledige video met geluid of MP3 alleen voor audio. Kies MP4 voor de meeste clips. Tik om te downloaden en het wordt opgeslagen in je Downloads-map of telefoon galerij. Geef het een duidelijke naam, zoals "diy_schilderen.mp4", voordat je opslaat. Speel het af om te bevestigen dat het perfect is.
      </StepCard>
    </div>
  );
}
