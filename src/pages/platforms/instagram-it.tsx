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

export default function InstagramPageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Scarica Video Instagram | Gratis & HD",
    description: "Scarica video Instagram, Reels, Stories e IGTV in mp4, 1080p, 4k. Convertitore e downloader video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla un URL di video, Reel o Story Instagram"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Caratteristiche
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica video Instagram con facilità
          </h2>
          <p className="text-muted-foreground mb-6">
            La tua guida semplice per salvare Reels e clip offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guida chiara passo dopo passo per salvare video senza sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Ottenere video Instagram sul tuo dispositivo è semplice con
            videodownload.io. Segui questi quattro passaggi diretti per
            scaricare qualsiasi video in pochi minuti. Ogni passaggio è
            progettato per essere intuitivo, anche se non sei esperto di
            tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Scarica video Instagram
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Migliori casi d'uso
            </h2>
            <p className="section-muted mb-4">
              Il feed in rapido movimento di Instagram seppellisce rapidamente le gemme. Scaricare ti permette di tenere le clip che contano, trasformando gli scroll in una collezione personale. Non si tratta di salvare ogni post, ma di conservare video che ispirano o significano qualcosa. Controlli cosa resta, non importa se gli account diventano privati o i post scompaiono.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visione offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva consigli di viaggio o reel di allenamento per voli o campeggi senza segnale. I genitori scaricano canzoni per bambini o clip di storie per viaggi in auto, tenendo i bambini felici senza Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creazione di contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I creatori usano i download per remixare. Una fashion blogger salva reel di outfit per mescolarli nel suo contenuto, aggiungendo voci fuori campo o nuove angolazioni. I musicisti prendono suoni di tendenza per sovrapporli nelle loro tracce, saltando watermark per montaggi puliti.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backup dei tuoi post
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram può cancellare o avere problemi, quindi i creatori salvano i loro reel su hard disk. Gli studenti prendono trucchi di studio o clip di lezioni per gli appunti, guardando senza login all'app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo per altre piattaforme
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trasforma un reel in un YouTube Short o clip TikTok con modifiche. Le aziende salvano testimonianze dei clienti da incorporare sui siti web, aumentando la fiducia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ricordi personali
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica momenti familiari, come il ballo al matrimonio di un cugino o l'aggiornamento sul bambino di un amico, da condividere alle riunioni o conservare per anni. È un modo per tenere stretti i ricordi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video Instagram offre flessibilità e comodità,
              rendendo più facile godersi i contenuti alle tue condizioni, che sia
              per divertimento, lavoro o apprendimento.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Persone che ne beneficiano di più
            </h2>
            <p className="section-muted mb-4">
              Lo scorrimento infinito di Instagram aggancia milioni, ma scaricare video si adatta a persone che usano la piattaforma con uno scopo. È per coloro che vedono i reel come strumenti, ispirazione o ricordi, non solo intrattenimento veloce. Se stai costruendo, imparando o salvando momenti, questo è per te.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creatori di contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Postano quotidianamente, traendo idee dai reel di tendenza. Scaricare permette loro di salvare il loro lavoro o studiare altri, come un food vlogger che prende suggerimenti di impiattamento per remixare nel suo stile senza loghi in mezzo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenti e insegnanti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I professori salvano reel dimostrativi per le lezioni, come esperimenti scientifici, da mostrare senza problemi di internet. Gli studenti scaricano guide di studio o esercizi di lingua, rivedendo offline al loro ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Famiglie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I genitori salvano i primi passi di un bambino o uno sketch festivo da condividere con i parenti o archiviare per dopo. È più affidabile che sperare che Instagram lo conservi per sempre.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Imprenditori e marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Una boutique salva i post di outfit dei clienti per annunci o prova sociale. I marketer testano tendenze di reel per campagne, adattandole su tutte le piattaforme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbisti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli appassionati di fitness salvano flussi di yoga da praticare in palestra. I fai-da-te scaricano tutorial di artigianato da seguire passo dopo passo. Anche gli utenti occasionali prendono clip motivazionali da rivedere nei giorni difficili.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Non importa il tuo ruolo o stile di vita, scaricare video Instagram
              può farti risparmiare tempo, dati e fatica mantenendo i tuoi
              contenuti preferiti accessibili.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video Instagram?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa devi sapere sulla legge
            </h2>
            <p className="section-muted mb-4">
              Scaricare video Instagram non è bianco o nero. Le regole di Instagram permettono di salvare post pubblici tramite la loro app per uso personale, purché il creatore non l'abbia disabilitato. Usare strumenti di terze parti come il nostro tecnicamente viola i loro termini, il che potrebbe segnalare il tuo account, anche se i ban sono rari a meno che tu non stia scaricando in massa o ripubblicando.
            </p>
            <p className="section-muted mb-2">
              Legalmente, i video sono di proprietà dei loro creatori secondo le leggi sul copyright, come il DMCA degli Stati Uniti. Salvare per visione personale spesso rientra nel fair use, come guardare un reel offline. Ma condividere senza permesso o modificare per profitto può scatenare rivendicazioni di violazione. La musica nei reel aggiunge complessità, poiché le etichette possiedono le tracce, ma i salvataggi personali brevi raramente affrontano problemi.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando è consentito
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se il creatore consente i download o il video è di pubblico dominio, sei a posto. L'uso educativo, come insegnanti che mostrano clip in classe, spesso si qualifica come fair use. Controlla le didascalie dei post per il permesso. Mantienilo privato e accredita i creatori se condividi, e generalmente sei al sicuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I rischi associati al download di video Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli potenziali e come evitarli
            </h2>
            <p className="section-muted mb-4">
              Scaricare da siti di terze parti sembra facile, ma quelli loschi portano veri problemi. Non tutti gli strumenti sono puliti, e cliccare alla cieca può rovinare il tuo dispositivo o i dati. Conosci i rischi per stare al sicuro prima di premere quel pulsante di download.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Il malware è la minaccia più grande"
              >
                I siti loschi nascondono virus nei file video, introducendo spyware o ransomware. Un cattivo download può bloccare i tuoi file o rubare password. I report mostrano che alcuni strumenti nascondono keylogger, trasformando il salvataggio di un reel in una violazione di dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Truffe di phishing">
                Le pagine di download false imitano il login di Instagram, prendendo le tue credenziali se le digiti. O gli annunci pop-up spingono "aggiornamenti" che installano tracker, guardando ogni tuo clic.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemi di qualità"
              >
                I siti cattivi comprimono i video, lasciando fotogrammi a scatti o audio muto. Volevi un reel nitido, ma ottieni un pasticcio sfocato invece.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fughe di privacy">
                Alcuni siti registrano i tuoi download, vendendo il tuo IP o preferenze video agli inserzionisti. Gli hacker potrebbero ottenere quei dati, inviandoti spam o peggio.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban Instagram">
                Il download pesante tramite strumenti di terze parti può segnalare il tuo account, specialmente per i creatori. Potresti perdere il tuo profilo o follower durante la notte.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Problemi di archiviazione"
              >
                I reel si accumulano, rallentando i telefoni o riempiendo i dischi. I file corrotti potrebbero far crashare il tuo player, perdendo tempo per riparare.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa siti fidati, scansiona i download e considera VPN per stare al
              sicuro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il tuo partner fidato per i download Instagram
            </h2>
            <p className="section-muted mb-4">
              Abbiamo avviato videodownload.io nel 2022 perché eravamo stufi di app buggate e <a href="https://blog.avast.com/malicious-browser-extensions-avast">downloader con malware</a>. Come utenti di Instagram, volevamo un modo pulito per salvare reel senza problemi o rischi. Siamo un piccolo team, non una grande azienda, focalizzato nel rendere i download semplici e sicuri. Milioni di download dopo, non abbiamo avuto violazioni e gli utenti continuano a tornare per la nostra affidabilità.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Download veloci">
                Meno di cinque secondi anche nei giorni affollati.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Niente annunci, niente pop-up">
                Solo un sito pulito.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark rimossi">
                Ogni video puro.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvataggi illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su ogni dispositivo">
                Da telefoni a PC.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema sicuro">
                Nessun dato conservato dopo l'uso.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande comuni sui download Instagram
            </h2>
            <p className="section-muted mb-4">
              Abbiamo compilato risposte alle domande più frequenti sull'uso di
              videodownload.io e il download di video Instagram per aiutarti a
              iniziare con fiducia.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video Instagram privati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, gestiamo solo reel e post pubblici. Quelli privati necessitano del permesso del creatore, e rispettiamo questo per restare legittimi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il download danneggerà le prestazioni del mio telefono?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  I nostri file sono puliti e leggeri, quindi nessun rallentamento. Ma guarda il tuo spazio di archiviazione; salvare molti reel può riempirlo velocemente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché non c'è watermark sul mio video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram aggiunge loghi per il tracciamento, ma noi prendiamo il file originale e li rimuoviamo per un salvataggio pulito che puoi usare liberamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio da un reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, scegli MP3 dopo aver incollato il link. Perfetto per prendere suoni di tendenza o voci fuori campo senza il video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Cosa succede se il mio download non inizia?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controlla che il link sia pubblico e inizi con instagram.com. Prova un altro browser o cancella la cache. La nostra chat di supporto risolve i problemi velocemente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ci sono limiti di dimensione per i video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo reel fino a 60 minuti, anche se la maggior parte sono brevi. Quelli più lunghi richiedono un po' di tempo, ma non tagliamo gli angoli.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservate i miei video scaricati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assolutamente no. Processiamo istantaneamente e cancelliamo tutto dopo. I tuoi file restano sul tuo dispositivo, da nessun'altra parte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il creatore può vedere che ho scaricato il suo reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram non li avvisa. Il tuo download resta privato, nessun avviso al poster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a salvare video Instagram ora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ottieni i tuoi Reels offline in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia link Instagram
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Incolla sul nostro sito
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Scarica video pulito
              </div>
            </div>
            <div className="mt-2">
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video Instagram
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Esplora altri downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Scarica dalle tue piattaforme preferite
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
                        Scarica video {p.name}
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
      <FeatureCard icon={VideoIcon} title="Qualità video cristallina">
        Ottieni video Instagram nella loro piena gloria, fino a 1080p se il post originale lo offre. Nessuna riproduzione granulosa o colori sbiaditi quando guardi dopo. Prendiamo il file grezzo dai server di Instagram, mantenendo ogni fotogramma nitido per quel clip di viaggio perfetto o demo di cucina.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Download senza watermark">
        Instagram timbra il suo logo e username sui video salvati, ingombrando la vista. Li rimuoviamo completamente, lasciandoti con una clip pulita pronta per l'editing o la condivisione. Guarda quel reel di ballo o momento di animali senza testo che blocca l'azione.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su tutti i dispositivi">
        Usa il tuo iPhone, Android, PC o tablet, e funziona semplicemente. Nessuna app da installare o software con cui armeggiare. Apri il nostro sito in qualsiasi browser, incolla il link e prendi il tuo video. Testato su tutto, dai vecchi laptop ai nuovi telefoni, è fluido ogni volta.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Download fulminei">
        Nessuno ama aspettare. Il nostro strumento recupera video Instagram in pochi secondi, spesso meno di 10 per la maggior parte delle clip. Sfruttiamo server vicini a quelli di Instagram per la velocità, quindi puoi salvare un reel durante una pausa veloce senza buffering o errori.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Accesso completamente gratuito">
        Nessuna tariffa, nessuna iscrizione, nessun costo a sorpresa. Scarica tutti i video che vuoi quotidianamente, senza limiti. Lo manteniamo gratuito così puoi salvare quella routine di allenamento o sketch divertente senza preoccuparti di un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo sicuro e protetto">
        La tua privacy rimane bloccata. Non conserviamo i tuoi link o video dopo il download. Nessun tracciamento, nessun dato archiviato e nessuna pubblicità losca. Il processo è pulito e il tuo dispositivo resta al sicuro da cose indesiderate.
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
      <StepCard step={1} title="Copia il link del video da Instagram">
        <a href="http://www.instagram.com">Apri Instagram</a> sul tuo telefono o browser. Trova il reel o video che vuoi, come una ricetta veloce o un vlog di viaggio. Tocca i tre punti in alto a destra del post. Dal menu, seleziona "Copia link". Questo prende l'URL completo, qualcosa come instagram.com/reel/ABC123. Assicurati che sia esatto.
      </StepCard>
      <StepCard step={2} title="Incolla il link sul nostro sito">
        Vai su videodownload.io nel tuo browser. Vedrai una casella chiara etichettata "Incolla link Instagram qui". Clicca dentro e incolla il link copiato. Controlla che inizi con instagram.com per evitare errori. I post privati non funzioneranno, ma reel e video pubblici vanno bene.
      </StepCard>
      <StepCard step={3} title="Recuperiamo e puliamo il video">
        Clicca il pulsante verde "Download" accanto alla casella. Il nostro sistema prende il video dai server di Instagram in pochi secondi. Rimuoviamo il watermark e controlliamo la qualità, così non rimani bloccato con problemi. L'audio resta sincronizzato, pronto per la riproduzione.
      </StepCard>
      <StepCard step={4} title="Salva il file sul tuo dispositivo">
        Vedrai opzioni: MP4 per il video completo con audio o MP3 per solo l'audio. Scegli MP4 per la maggior parte delle clip. Tocca per scaricare, e arriva nella tua cartella Download o galleria del telefono. Chiamalo qualcosa di semplice, come "reel_workout.mp4", prima di salvare. Riproducilo per confermare che sia perfetto.
      </StepCard>
    </div>
  );
}
