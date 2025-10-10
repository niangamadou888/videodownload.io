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

export default function RedditPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Reddit | Gratis & HD",
    description: "Scarica video e post di Reddit in mp4, qualità 1080p. Downloader e convertitore video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Reddit" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Reddit Video
          </h1>
          <div id="reddit-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla un URL di video o post di Reddit"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica Video Reddit Senza Sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            La Tua Guida Diretta per Salvare Clip Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come Scaricare Video Reddit
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guida Chiara, Passo dopo Passo per Salvare Video Senza Sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Ottenere video Reddit sul tuo dispositivo è semplice con
            videodownload.io. Segui questi quattro passaggi semplici per
            scaricare qualsiasi video in pochi minuti. Ogni passaggio è progettato per essere
            intuitivo, anche se non sei esperto di tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#reddit-downloader">
              <Button variant="download" className="px-6">
                Download Reddit Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché Scaricare Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Migliori Casi d'Uso
            </h2>
            <p className="section-muted mb-4">
              Il feed di Reddit è un mix selvaggio di idee, ma i buoni video vengono sepolti velocemente. Scaricare ti permette di conservare i clip che ti colpiscono, trasformando scroll veloci in una collezione personale. Si tratta di salvare ciò che ispira, insegna o ti fa ridere, non solo raccogliere post casuali. Controlli la tua collezione, al sicuro da thread cancellati o modifiche dell'app.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualizzazione Offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva tutorial o clip di notizie per voli, tragitti o luoghi con Wi-Fi scarso. I genitori scaricano animazioni adatte ai bambini per viaggi in auto, mantenendo i bambini felici senza buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo per Creatori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I blogger prendono clip virali per remixarli nei loro contenuti, aggiungendo commenti o modifiche. Gli streamer salvano momenti di gioco per analizzare o condividere su altre piattaforme, saltando i watermark per un uso pulito.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviare i Tuoi Propri Post
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se condividi video su Reddit, possono scomparire da ban di subreddit o bug della piattaforma. Scaricali su un disco per proteggere il tuo lavoro, come una demo di progetto o vlog personale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprendimento e Hobby
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli studenti salvano demo scientifiche o consigli di programmazione per studiare offline. Gli hobbisti scaricano guide DIY o tutorial d'arte per praticare al loro ritmo, senza dover cercare di nuovo nei subreddit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Condivisione di Momenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva il clip divertente di un amico o un momento saliente della comunità da inviare nelle chat o conservare per dopo. È un modo per conservare ricordi senza dipendere dall'app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video Reddit offre flessibilità e comodità,
              rendendo più facile godersi i contenuti alle tue condizioni, che sia per divertimento,
              lavoro o apprendimento.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi Dovrebbe Scaricare Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Persone che Beneficiano Maggiormente dal Download
            </h2>
            <p className="section-muted mb-4">
              Reddit è un hub per comunità di nicchia, ma scaricare video si adatta a persone che lo usano per imparare, creare o connettersi. È per coloro che vedono i post come più che intrattenimento, trasformando i clip in strumenti o ricordi. Se sei attivo nei subreddit e vuoi conservare ciò che conta, scaricare è la tua mossa.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creatori di Contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streamer e vlogger salvano clip di gioco o video di reazione per remixare per il loro pubblico. Scaricano anche i propri post, mantenendo copie pulite senza loghi per le modifiche.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbisti e Fai-da-Te
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli artigiani salvano tutorial di falegnameria o cucito da seguire a casa. I gamer scaricano clip di strategia per studiare le mosse. È ispirazione pratica, pronta offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenti ed Educatori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli insegnanti salvano video dimostrativi per la classe, come esperimenti di fisica. Gli studenti prendono consigli di studio o lezioni di lingua da rivedere senza riaccedere.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Famiglie e Utenti Occasionali
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I genitori salvano clip divertenti di bambini o video di animali da condividere durante riunioni. Gli amici scaricano momenti salienti di subreddit per ridere più tardi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Piccole Imprese e Marketer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I negozi salvano recensioni degli utenti o demo di prodotti da presentare sui siti web. I professionisti dei social media prendono clip di tendenza per analizzare o riutilizzare, mantenendo i loro contenuti freschi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Non importa il tuo ruolo o stile di vita, scaricare video Reddit può
              risparmiare tempo, dati e sforzi mantenendo i tuoi contenuti preferiti
              accessibili.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È Legale Scaricare Video Reddit?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa Devi Sapere sulla Legge
            </h2>
            <p className="section-muted mb-4">
              I video sono protetti da copyright dai loro creatori secondo leggi come il <a href="https://it.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> negli Stati Uniti. Salvare per visualizzazione privata, come guardare un tutorial offline, spesso conta come uso equo. Ma condividere senza permesso o usare per profitto può portare a problemi legali. La musica o le voci fuori campo nei video possono avere strati aggiuntivi di copyright, anche se i salvataggi personali brevi raramente affrontano problemi.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando È Consentito
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se il creatore consente i download o il contenuto è di pubblico dominio, sei a posto. L'uso educativo, come mostrare un clip in classe, spesso si qualifica come uso equo. Controlla i commenti dei post per i permessi. Mantieni i download privati e accredita i creatori se condividi per stare al sicuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I Rischi Associati allo Scaricamento di Video Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli Potenziali e Come Evitarli
            </h2>
            <p className="section-muted mb-4">
              I downloader di terze parti sembrano facili, ma quelli loschi portano problemi reali. Non tutti i siti sono affidabili, e cliccare con noncuranza può danneggiare il tuo dispositivo o dati. Conosci i rischi prima di iniziare per evitare problemi in seguito.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                I siti inaffidabili nascondono virus nei file video, introducendo spyware o ransomware. Un brutto download può bloccare i tuoi file o rubare password. Alcuni strumenti sono stati presi con keylogger, trasformando un salvataggio di meme in una violazione dei dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Truffe di Phishing">
                Le pagine di download false imitano il login di Reddit, prendendo le tue credenziali se le inserisci. O gli annunci spingono "aggiornamenti" che installano tracker, guardando la tua attività oltre la piattaforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemi di Qualità"
              >
                I siti cattivi comprimono i video, causando riproduzione irregolare o perdita audio. Volevi un tutorial chiaro, ma ottieni un file difettoso invece.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Perdite di Privacy">
                Alcuni siti registrano i tuoi download, vendendo il tuo IP o scelte video agli inserzionisti. Gli hacker potrebbero prendere quei dati, portando a spam o truffe mirate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban Reddit">
                L'uso intenso di strumenti di terze parti può segnalare il tuo account, specialmente per i poster attivi. Potresti perdere il tuo profilo o karma durante la notte.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sovraccarico di Archiviazione"
              >
                Salvare molti video consuma spazio, rallentando telefoni o dischi. I file corrotti potrebbero far crashare i lettori, sprecando tempo per riparare.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa siti fidati, scansiona i download e considera VPN per stare al sicuro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché Usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il Tuo Partner Fidato per i Download Reddit
            </h2>
            <p className="section-muted mb-4">
              Abbiamo avviato videodownload.io nel 2022 perché eravamo stanchi di strumenti loschi e app lente. Come utenti di Reddit, volevamo un modo veloce e pulito per salvare video senza rischi. Siamo un piccolo team, non una grande azienda, concentrati sul rendere i download facili e sicuri. Milioni di utenti si fidano di noi senza perdite di dati, e continuiamo a migliorare in base ai loro feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Meno di Cinque Secondi">
                I download si completano anche durante le ore di punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Niente Annunci o Pop-up">
                Solo un sito pulito.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark Rimossi">
                Clip puri e utilizzabili.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvataggi Illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
                Da vecchi telefoni a nuovi laptop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Sicuro">
                Nessun dato archiviato dopo la tua partenza.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Domande Frequenti</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande Comuni sui Download Reddit
            </h2>
            <p className="section-muted mb-4">
              Abbiamo compilato risposte alle domande più frequenti sull'uso di
              videodownload.io e lo scaricamento di video Reddit per aiutarti a
              iniziare con sicurezza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video da subreddit privati di Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, gestiamo solo post pubblici. I video di subreddit privati o riservati necessitano del permesso del creatore o moderatore, e rispettiamo quei confini per rimanere legittimi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Lo scaricamento rallenterà il mio dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  I nostri file sono puliti e leggeri, quindi nessun lag. Ma salvare molti video può riempire lo spazio di archiviazione, quindi tieni d'occhio il tuo spazio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il mio video è senza watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit aggiunge loghi per tracciare le condivisioni, ma estraiamo il file grezzo e li rimuoviamo per un salvataggio pulito che puoi usare liberamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio da un video Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, scegli MP3 dopo aver incollato il link. Ottimo per prendere clip di podcast o musica dai video senza i visivi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Cosa succede se il mio download fallisce?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controlla che il link sia pubblico e inizi con reddit.com. Prova un altro browser o svuota la cache. La nostra chat di supporto risolve i problemi velocemente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  C'è un limite sulla lunghezza del video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti, anche se la maggior parte dei clip Reddit è breve. Quelli più lunghi richiedono un po' ma si scaricano completamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Archiviate i miei video scaricati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assolutamente no. Processiamo istantaneamente e cancelliamo tutto dopo. I tuoi file rimangono sul tuo dispositivo, non sui nostri server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  I poster possono vedere se ho scaricato il loro video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit non li notifica. Il tuo download rimane privato, senza avvisi per il creatore.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a Salvare Video Reddit Oggi
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Prendi i Tuoi Clip Preferiti in Secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia il Link del Post Reddit
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Incolla sul Nostro Sito
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Scarica Video Pulito
              </div>
            </div>
            <div className="mt-2">
              <a href="#reddit-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Reddit Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Esplora Altri Downloader
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
                  to={`/it/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Qualità Video Nitida">
        Salva video Reddit nella loro piena risoluzione, fino a 1080p se il post originale lo supporta. Niente visivi sfocati o colori sbiaditi quando guardi più tardi. Prendiamo il file direttamente dai server di Reddit, mantenendo ogni fotogramma nitido per quel clip di gioco o tutorial.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Niente Watermark o Loghi">
        Reddit mette il suo marchio sui video salvati tramite la loro app, ingombrando lo schermo. Rimuoviamo tutto questo, dandoti un clip pulito pronto per condividere o modificare. Guarda quel video divertente di animali o demo tecnologica senza sovrapposizioni di testo in mezzo.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
        Usa il tuo telefono, tablet, PC o laptop, e funziona senza problemi. Non servono app o software aggiuntivi. Apri semplicemente il nostro sito nel tuo browser, incolla il link e scarica. Testato su tutto, da vecchi Android a nuovi Mac, è sempre affidabile.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Download Veloci">
        Aspettare è una scocciatura. Il nostro strumento estrae video Reddit in secondi, di solito meno di 10 per la maggior parte dei clip. Usiamo server vicini a quelli di Reddit per estrazioni veloci, così puoi salvare un meme o clip di notizie durante una pausa veloce.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis Senza Limiti">
        Niente tariffe, niente registrazioni, niente costi nascosti. Scarica tutti i video che vuoi, ogni giorno, senza restrizioni. Lo manteniamo gratuito così puoi salvare quel momento virale o consiglio fai-da-te senza colpire un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo Sicuro e Privato">
        I tuoi dati rimangono sicuri. Non archiviamo i tuoi link o video dopo il download. Niente tracciamento, niente log, e niente annunci spam. Il processo è pulito, mantenendo il tuo dispositivo libero da spazzatura o rischi.
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
      <StepCard step={1} title="Copia il Link del Video da Reddit">
        <a href="http://www.reddit.com">Apri Reddit</a> sul tuo telefono o browser. Trova il video che ti piace, forse un trucco di cucina o un momento saliente di gioco. Clicca sull'icona di condivisione sotto il post, una piccola freccia che punta verso l'alto. Dal menu, scegli "Copia link." Questo prende l'URL completo, come reddit.com/r/subreddit/comments/abc123. Controlla che sia corretto.
      </StepCard>
      <StepCard step={2} title="Incolla il Link nel Nostro Strumento">
        Vai su videodownload.io nel tuo browser. Vedrai una casella etichettata "Incolla il link Reddit qui." Clicca dentro e incolla il link copiato. Assicurati che inizi con reddit.com per evitare errori. Funzionano solo post pubblici; i video di subreddit privati o riservati non si scaricheranno.
      </StepCard>
      <StepCard step={3} title="Recuperiamo e Prepariamo il Video">
        Clicca sul pulsante blu "Scarica" accanto alla casella. Il nostro sistema estrae il video dai server di Reddit in secondi. Rimuoviamo i watermark e controlliamo la qualità, così ottieni un clip fluido. L'audio rimane chiaro, niente bug o suono mancante.
      </StepCard>
      <StepCard step={4} title="Salva il Clip sul Tuo Dispositivo">
        Vedrai opzioni: MP4 per il video completo con suono o MP3 per solo l'audio. Scegli MP4 per la maggior parte dei clip. Tocca per scaricare, e atterra nella tua cartella Download o galleria del telefono. Chiamalo qualcosa di semplice, come "meme_clip.mp4," prima di salvare. Riproducilo per confermare che sia buono.
      </StepCard>
    </div>
  );
}
