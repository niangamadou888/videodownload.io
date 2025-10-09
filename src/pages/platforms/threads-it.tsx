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

export default function ThreadsPageIT() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Threads | Gratis & HD",
    description: "Scarica video e post di Threads in mp4, qualità 1080p. Downloader e convertitore video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Scarica video Threads
          </h1>
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video o post di Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica Video Threads Rapidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            La Tua Guida Semplice per Salvare Clip Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come Scaricare Video Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guida Chiara, Passo dopo Passo, per Salvare Video Senza Sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Ottenere video Threads sul tuo dispositivo è semplice con
            videodownload.io. Segui questi quattro passaggi semplici per
            scaricare qualsiasi video in pochi minuti. Ogni passaggio è progettato per essere
            intuitivo, anche se non sei un esperto di tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Scarica Video Threads
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché Scaricare Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Migliori Casi d'Uso
            </h2>
            <p className="section-muted mb-4">
              Threads si muove velocemente, con i post che vengono sepolti sotto nuove conversazioni. Scaricare ti permette di conservare i video che catturano la tua attenzione, trasformando scorri rapidi in una collezione personale. Si tratta di salvare ciò che suscita gioia, informa o ispira, non solo raccogliere clip casuali. Controlli la tua collezione, al sicuro da post eliminati o modifiche dell'app.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visione Offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva consigli di viaggio o clip di allenamento per voli, spostamenti o luoghi con Wi-Fi scarso. I genitori scaricano sketch o canzoni adatte ai bambini per viaggi in auto, mantenendo i bambini felici senza buffering.
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
                    Gli influencer afferrano clip virali per remixare nel loro contenuto, aggiungendo il loro tocco personale. I blogger salvano video di moda o cibo da condividere su altre piattaforme, saltando le filigrane per modifiche pulite.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviazione dei Tuoi Post
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se condividi video su Threads, possono svanire a causa di problemi di account o aggiornamenti della piattaforma. Scaricali su un'unità per proteggere il tuo lavoro, come un vlog personale o una promo del brand.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprendimento e Ispirazione
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli studenti salvano trucchi di studio o discorsi motivazionali per revisioni offline. Gli hobbisti scaricano suggerimenti fai-da-te o demo d'arte per praticare al loro ritmo, senza dover cercare di nuovo.
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
                    Salva un aggiornamento della vita di un amico o una clip divertente da inviare nelle chat di gruppo o conservare per dopo. È un modo per conservare i ricordi senza dipendere dall'app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video Threads offre flessibilità e convenienza,
              rendendo più facile godersi i contenuti alle tue condizioni, che sia per divertimento,
              lavoro o apprendimento.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi Dovrebbe Scaricare Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Persone Che Beneficiano di Più dal Download
            </h2>
            <p className="section-muted mb-4">
              Threads è un hub per contenuti rapidi e personali, ma scaricare video si adatta alle persone che lo usano per creare, imparare o connettersi. È per coloro che vedono i post come più di un semplice divertimento fugace, trasformando le clip in strumenti o ricordi. Se sei attivo su Threads e vuoi conservare ciò che conta, scaricare è la tua mossa.
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
                    Influencer e vlogger salvano clip di tendenza per remixare per il loro pubblico, come un guru della bellezza che perfeziona un tutorial di trucco. Scaricano anche i loro post, mantenendo copie pulite senza loghi per le modifiche.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Appassionati e Studenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I fan del fitness salvano clip di allenamento da seguire in palestra. Gli artigiani scaricano demo fai-da-te da provare a casa. È ispirazione pratica, pronta offline.
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
                    Gli insegnanti salvano discorsi motivazionali per discussioni in classe. Gli studenti prendono trucchi di studio o lezioni di lingua da rivedere senza doversi riconnettere.
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
                    I genitori salvano clip divertenti di bambini o aggiornamenti familiari da condividere durante gli incontri. Gli amici scaricano meme virali per ridere dopo.
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
                    I negozi salvano i complimenti dei clienti da presentare sui siti web. I professionisti dei social media afferrano clip di tendenza da analizzare o riutilizzare, mantenendo i loro contenuti freschi.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Indipendentemente dal tuo ruolo o stile di vita, scaricare video Threads può
              risparmiare tempo, dati e sforzi mantenendo i tuoi contenuti preferiti
              accessibili.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È Legale Scaricare Video Threads?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa Devi Sapere Sulla Legge
            </h2>
            <p className="section-muted mb-4">
              I video sono protetti da copyright dai loro creatori secondo leggi come il <a href="https://it.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> negli Stati Uniti. Salvare per visione privata, come guardare una clip offline, spesso conta come uso equo. Ma condividere senza permesso o usare a scopo di lucro può portare a problemi legali. Musica o voci fuori campo nei video possono avere ulteriori livelli di copyright, anche se i brevi salvataggi personali raramente affrontano problemi.
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
                    Se il creatore consente i download o il contenuto è di dominio pubblico, sei a posto. L'uso educativo, come mostrare una clip in classe, spesso si qualifica come uso equo. Controlla le didascalie dei post per le autorizzazioni. Mantieni i download privati e accredita i creatori se condividi per stare al sicuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I Rischi Associati al Download di Video Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli Potenziali e Come Evitarli
            </h2>
            <p className="section-muted mb-4">
              I downloader di terze parti sembrano facili, ma quelli loschi portano veri problemi. Non tutti i siti sono affidabili, e cliccare senza riflettere può danneggiare il tuo dispositivo o i tuoi dati. Conosci i rischi prima di iniziare per evitare problemi lungo la strada.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                I siti inaffidabili nascondono virus nei file video, introducendo spyware o ransomware. Un cattivo download può bloccare i tuoi file o rubare password. Alcuni strumenti sono stati colti con keylogger, trasformando un salvataggio di meme in una violazione dei dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Truffe di Phishing">
                Le false pagine di download imitano il login di Threads, recuperando le tue credenziali se le inserisci. O gli annunci spingono "aggiornamenti" che installano tracker, guardando la tua attività oltre la piattaforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemi di Qualità"
              >
                I siti scadenti comprimono i video, causando riproduzione instabile o perdita di audio. Volevi un tutorial chiaro, ma ottieni un file difettoso invece.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fughe di Privacy">
                Alcuni siti registrano i tuoi download, vendendo il tuo IP o le scelte video agli inserzionisti. Gli hacker potrebbero afferrare quei dati, portando a spam o truffe mirate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban di Threads">
                L'uso intensivo di strumenti di terze parti può segnalare il tuo account, specialmente per i creatori. Potresti perdere il tuo profilo o i follower durante la notte.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sovraccarico di Archiviazione"
              >
                Salvare molti video consuma spazio, appesantendo telefoni o unità. I file corrotti potrebbero mandare in crash i lettori, perdendo tempo per riparare.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa siti affidabili, scansiona i download e considera le VPN per stare al sicuro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché Usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il Tuo Partner di Fiducia per i Download Threads
            </h2>
            <p className="section-muted mb-4">
              Abbiamo avviato videodownload.io nel 2022 perché eravamo stanchi di strumenti loschi e app lente. Come utenti di Threads, volevamo un modo veloce e pulito per salvare video senza rischi. Siamo un piccolo team, non una grande azienda, concentrati nel rendere i download facili e sicuri. Milioni di utenti si fidano di noi senza fughe di dati, e continuiamo a migliorare in base ai loro feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Meno di Cinque Secondi">
                I download si completano anche durante le ore di punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Nessuna Pubblicità o Pop-up">
                Solo un sito pulito.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigrane Rimosse">
                Clip pure e utilizzabili.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvataggi Illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
                Dai vecchi telefoni ai nuovi laptop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Sicuro">
                Nessun dato archiviato dopo che hai finito.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande Comuni sui Download Threads
            </h2>
            <p className="section-muted mb-4">
              Abbiamo compilato risposte alle domande più frequenti sull'uso di
              videodownload.io e il download di video Threads per aiutarti a
              iniziare con fiducia.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video Threads privati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, gestiamo solo post pubblici. I video privati o ristretti necessitano del permesso del creatore, e noi rispettiamo quei confini per rimanere legittimi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il download rallenterà il mio dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  I nostri file sono puliti e leggeri, quindi nessun rallentamento. Ma salvare molti video può riempire lo spazio di archiviazione, quindi tieni d'occhio il tuo spazio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il mio video è senza filigrana?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads aggiunge loghi per tracciare le condivisioni, ma noi estraiamo il file grezzo e li rimuoviamo per un salvataggio pulito che puoi usare liberamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio da un video Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, scegli MP3 dopo aver incollato il link. Ottimo per afferrare musica o voci fuori campo dalle clip senza i video.
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
                  Controlla che il link sia pubblico e inizi con threads.net. Prova un altro browser o cancella la cache. La nostra chat di supporto risolve i problemi velocemente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  C'è un limite alla lunghezza del video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti, anche se la maggior parte delle clip Threads sono brevi. Quelli più lunghi richiedono un po' di tempo ma si scaricano completamente.
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
                  I creatori possono vedere se ho scaricato il loro video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads non li notifica. Il tuo download rimane privato, senza avvisi al creatore.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a Salvare Video Threads Oggi
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Afferra le Tue Clip Preferite in Secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia Link Post Threads
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
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica Video Threads
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
                        Scarica Video {p.name}
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
      <FeatureCard icon={VideoIcon} title="Download Chiari e Nitidi">
        Salva video Threads nella loro migliore qualità, fino a 1080p se il post originale lo consente. Nessun fotogramma sfocato o colori spenti durante la riproduzione. Prendiamo il file direttamente dai server di Threads, mantenendo ogni dettaglio nitido per quello sketch rapido o quel consiglio di stile.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Nessuna Filigrana o Logo">
        Threads aggiunge il suo marchio ai video salvati tramite la loro app, ingombrando la vista. Rimuoviamo tutto questo, dandoti una clip pulita pronta per condividere o modificare. Guarda quel momento divertente o tutorial senza sovrapposizioni di testo che bloccano l'azione.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
        Usa il tuo telefono, tablet, laptop o desktop, e funziona senza problemi. Nessuna app o software aggiuntivo necessario. Apri semplicemente il nostro sito nel tuo browser, incolla il link e scarica. Testato su tutto, dai vecchi Android ai nuovi Mac, è sempre affidabile.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di Download Rapide">
        L'attesa uccide l'atmosfera. Il nostro strumento estrae video Threads in pochi secondi, di solito meno di 10 per la maggior parte delle clip. Usiamo server vicini a quelli di Threads per recuperi rapidi, così puoi salvare una clip di danza o un'opinione durante una breve pausa.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente Gratuito da Usare">
        Nessuna tariffa, nessuna iscrizione, nessun costo nascosto. Scarica tutti i video che vuoi, ogni giorno, senza limiti. Lo manteniamo gratuito così puoi salvare quel meme virale o quell'hack di vita senza colpire un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo Sicuro e Privato">
        Le tue informazioni rimangono sicure. Non archiviamo i tuoi link o video dopo il download. Nessun tracciamento, nessun registro e nessuna pubblicità spam. Il processo è pulito, mantenendo il tuo dispositivo libero da spazzatura o rischi.
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
      <StepCard step={1} title="Copia il Link Video da Threads">
        <a href="http://www.threads.net">Apri Threads</a> sul tuo telefono o browser. Trova il video che ti piace, forse una ricetta rapida o un reel di moda. Tocca l'icona di condivisione, un aeroplanino di carta, in basso a destra del post. Dal menu, seleziona "Copia link". Questo afferra l'URL completo, come threads.net/@username/post/abc123. Controlla che sia corretto.
      </StepCard>
      <StepCard step={2} title="Incolla il Link nel Nostro Strumento">
        Vai su videodownload.io nel tuo browser. Vedrai una casella etichettata "Incolla il link Threads qui". Clicca all'interno e incolla il link copiato. Assicurati che inizi con threads.net per evitare errori. Solo i post pubblici funzionano; i video privati o ristretti non verranno scaricati.
      </StepCard>
      <StepCard step={3} title="Recuperiamo e Prepariamo il Video">
        Clicca sul pulsante blu "Scarica" accanto alla casella. Il nostro sistema estrae il video dai server di Threads in pochi secondi. Rimuoviamo eventuali filigrane e controlliamo la qualità, così ottieni una clip fluida. L'audio rimane chiaro, nessun problema o suono mancante.
      </StepCard>
      <StepCard step={4} title="Salva la Clip sul Tuo Dispositivo">
        Vedrai opzioni: MP4 per il video completo con audio o MP3 per solo l'audio. Scegli MP4 per la maggior parte delle clip. Tocca per scaricare, e atterra nella tua cartella Download o nella galleria del telefono. Nominala qualcosa di semplice, come "consiglio_stile.mp4", prima di salvare. Riproducila per confermare che sia buona.
      </StepCard>
    </div>
  );
}
