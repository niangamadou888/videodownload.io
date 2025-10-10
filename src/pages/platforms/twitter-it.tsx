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
    title: "Download Video Twitter X | Gratis & HD",
    description: "Scarica video e post di Twitter X in mp4, qualità 1080p. Downloader e convertitore video online gratuito."
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
              inputPlaceholder="Incolla un URL di video o post di Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica Video Twitter X Velocemente
          </h2>
          <p className="text-muted-foreground mb-6">
            La Tua Guida Rapida per Salvare Clip Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come Scaricare Video Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guida Chiara, Passo Dopo Passo per Salvare Video Senza Sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Ottenere video di Twitter X sul tuo dispositivo è semplice con
            videodownload.io. Segui questi quattro semplici passaggi per
            scaricare qualsiasi video in pochi minuti. Ogni passaggio è progettato per essere
            intuitivo, anche se non sei esperto di tecnologia.
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
              Perché Scaricare Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Migliori Casi d'Uso
            </h2>
            <p className="section-muted mb-4">
              Twitter X si muove a velocità fulminea, con video che si perdono nel flusso di post. Scaricare ti permette di conservare le clip che si distinguono, trasformando scorrimenti rapidi in una collezione personale. Non si tratta di salvare tutto, ma di conservare ciò che suscita gioia, informa o ispira. Controlli la tua collezione, al sicuro da post cancellati o cambiamenti dell'app.
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
                    Salva clip di notizie o tutorial per voli, treni o aree con Wi-Fi scadente. I genitori scaricano animazioni divertenti per far guardare ai bambini durante lunghi viaggi in auto, senza stress di buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo dei Contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I creatori prendono clip virali per remixarle nei propri post, aggiungendo commenti o modifiche. Un giornalista salva un video di notizie dell'ultima ora per analizzarlo in un articolo, rimuovendo watermark per un uso pulito.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backup dei Tuoi Post
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se condividi video su Twitter X, possono scomparire a causa di problemi dell'account o aggiornamenti della piattaforma. Scaricali su un disco per mantenere il tuo lavoro al sicuro.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprendimento e Ricerca
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli studenti salvano interventi di esperti o analisi di dati per appunti di studio. I professionisti prendono aggiornamenti di settore da condividere in riunioni, senza dover cercare di nuovo nel feed.
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
                    Scarica la clip di un traguardo importante di un amico o una reazione divertente da inviare nelle chat di gruppo o salvare per dopo. È un modo per mantenere momenti personali salienti senza fare affidamento sull'app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video di Twitter X offre flessibilità e comodità,
              rendendo più facile godere dei contenuti alle tue condizioni, che sia per divertimento,
              lavoro o apprendimento.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi Dovrebbe Scaricare Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Persone che Beneficiano di Più dal Download
            </h2>
            <p className="section-muted mb-4">
              Twitter X è un hub per opinioni rapide e grandi momenti, ma scaricare video si adatta alle persone che usano la piattaforma con intenzione. È per coloro che vedono le clip come strumenti, ricordi o ispirazione, non solo contenuto passeggero. Se sei attivo sull'app e vuoi mantenere ciò che conta, scaricare è per te.
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
                    Pubblicano quotidianamente, traendo idee da video di tendenza. Scaricare permette loro di salvare le proprie clip o studiare quelle altrui, come un comico che prende un video di reazione per improvvisare senza loghi di mezzo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Giornalisti e Ricercatori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salvano clip di notizie o interviste per articoli o fact-checking. Gli studenti scaricano thread di esperti con video per progetti scolastici, studiando offline al proprio ritmo.
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
                    Salva il video di annuncio di un fratello o sorella o una clip virale di un animale domestico da condividere durante raduni. È più affidabile che sperare che Twitter X lo mantenga attivo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketer e Proprietari di Aziende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Una startup salva testimonianze di clienti da presentare sui siti web. I social media manager prendono clip di concorrenti per analizzare tendenze o riutilizzare per altre piattaforme.
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
                    Gli appassionati di tecnologia salvano demo di codifica per esercitarsi dopo. I fanatici delle notizie scaricano storie dell'ultima ora per rivederle. Anche gli scroller occasionali salvano clip motivazionali per giornate difficili.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Indipendentemente dal tuo ruolo o stile di vita, scaricare video di Twitter X può
              risparmiare tempo, dati e sforzi mantenendo i tuoi contenuti preferiti
              accessibili.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È Legale Scaricare Video Twitter X?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa Devi Sapere sulla Legge
            </h2>
            <p className="section-muted mb-4">
              I video sono protetti da copyright dai loro creatori secondo leggi come il DMCA negli Stati Uniti. Salvare per visualizzazione privata, come guardare una clip di notizie offline, spesso conta come uso corretto. Ma condividere senza permesso o utilizzare a scopo di lucro può portare a problemi legali. Musica o voci fuori campo nei video potrebbero avere ulteriori livelli di copyright, anche se i salvataggi personali brevi raramente affrontano problemi.
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
                    Se il creatore consente i download o il contenuto è di pubblico dominio, sei a posto. L'uso educativo, come mostrare una clip in classe, spesso si qualifica come uso corretto. Controlla le didascalie dei post per le autorizzazioni. Tienilo privato e accredita i creatori se condividi per restare al sicuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I Rischi Associati al Download di Video Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli Potenziali e Come Evitarli
            </h2>
            <p className="section-muted mb-4">
              I downloader di terze parti sembrano facili, ma quelli poco affidabili possono causare grossi problemi. Non tutti i siti sono affidabili e cliccare con noncuranza può danneggiare il tuo dispositivo o i tuoi dati. Conosci i rischi prima di iniziare a scaricare per evitare problemi in seguito.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                I siti inaffidabili nascondono virus nei file video, introducendo spyware o ransomware. Un download sbagliato può bloccare i tuoi file o rubare password. Alcuni strumenti sono stati scoperti con keylogger, trasformando un salvataggio veloce in una violazione di dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Truffe di Phishing">
                Le pagine di download false imitano il login di Twitter X, catturando le tue credenziali se le inserisci. Oppure gli annunci promuovono "aggiornamenti" che installano tracker, osservando la tua attività oltre la piattaforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemi di Qualità"
              >
                I siti scadenti comprimono i video, causando riproduzione discontinua o perdita di audio. Volevi una clip di notizie chiara, ma ottieni un file difettoso invece.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fughe di Privacy">
                Alcuni siti registrano i tuoi download, vendendo il tuo IP o le scelte video agli inserzionisti. Gli hacker potrebbero ottenere quei dati, portando a spam o truffe mirate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban di Twitter X">
                L'uso intenso di strumenti di terze parti può segnalare il tuo account, specialmente per i creatori. Potresti perdere il tuo profilo o i follower da un giorno all'altro.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sovraccarico di Memoria"
              >
                Salvare molti video consuma spazio, rallentando telefoni o dischi. File corrotti potrebbero bloccare i player, perdendo tempo per riparare.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa siti affidabili, scansiona i download e considera le VPN per rimanere al sicuro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché Usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il Tuo Partner Affidabile per Download Twitter X
            </h2>
            <p className="section-muted mb-4">
              Abbiamo avviato videodownload.io nel 2022 perché eravamo stanchi di strumenti poco affidabili e app piene di bug. Come utenti di Twitter X, volevamo un modo veloce e pulito per salvare video senza rischi. Siamo un piccolo team, non una grande azienda, focalizzato nel rendere i download semplici e sicuri. Milioni di utenti ci affidano senza violazioni di dati e continuiamo a migliorare in base ai loro feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Meno di Cinque Secondi">
                I download si completano anche nei giorni più impegnativi.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Nessuna Pubblicità o Pop-up">
                Solo un sito pulito.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Watermark Rimossi">
                Clip pure e utilizzabili.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvataggi Illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
                Da telefoni a laptop.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Sicuro">
                Nessun dato conservato dopo la tua uscita.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande Comuni sui Download Twitter X
            </h2>
            <p className="section-muted mb-4">
              Abbiamo compilato risposte alle domande più frequenti sull'uso di
              videodownload.io e sul download di video Twitter X per aiutarti a
              iniziare con fiducia.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video privati di Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, gestiamo solo post pubblici. I video protetti o privati richiedono il permesso del creatore, e lo rispettiamo per mantenere le cose legittime.
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
                  Perché il mio video è senza watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X aggiunge loghi per tracciare le condivisioni, ma noi estraiamo il file originale e li rimuoviamo per un salvataggio pulito che puoi usare liberamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio da un video Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, scegli MP3 dopo aver incollato il link. Perfetto per catturare clip di podcast o suoni di tendenza senza il video.
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
                  Verifica che il link sia pubblico e inizi con x.com. Prova un altro browser o cancella la cache. La nostra chat di supporto risolve i problemi rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ci sono limiti sulla dimensione del video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti, anche se la maggior parte delle clip di Twitter X sono brevi. Quelli più lunghi richiedono un po' di tempo ma si scaricano completamente.
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
                  Assolutamente no. Processiamo istantaneamente e cancelliamo tutto dopo. I tuoi file restano sul tuo dispositivo, non sui nostri server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  I creatori possono vedere che ho scaricato il loro video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X non li notifica. Il tuo download resta privato, senza avvisi per chi ha postato.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a Salvare Video Twitter X Ora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ottieni le Tue Clip Offline in Secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia Link Post Twitter X
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
        Salva video di Twitter X nella loro migliore risoluzione, fino a 1080p se il post originale lo offre. Nessun fotogramma sfocato o colori spenti quando guardi dopo. Estraiamo il file grezzo direttamente dai server di Twitter X, mantenendo ogni dettaglio nitido per quella clip virale o aggiornamento di notizie.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Nessun Watermark o Branding">
        Twitter X aggiunge il suo logo o nome utente ai video salvati tramite la loro app, ingombrando la vista. Rimuoviamo tutto questo, dandoti una clip pulita pronta per la condivisione o l'editing. Guarda quel momento divertente o discorso chiave senza testo che blocca lo schermo.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su Qualsiasi Dispositivo">
        Usa il tuo telefono, tablet, laptop o desktop, e funziona senza problemi. Non serve installare app o gestire software extra. Apri il nostro sito nel tuo browser, incolla il link e scarica. Testato su tutto, dagli Android economici ai PC di fascia alta, è sempre affidabile.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di Download Rapide">
        Nessuno vuole aspettare. Il nostro strumento cattura video di Twitter X in pochi secondi, spesso meno di 10 per la maggior parte delle clip. Usiamo server vicini a quelli di Twitter X per estrazioni veloci, così puoi salvare un video di reazione o un'opinione calda durante una pausa di scorrimento veloce.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente Gratuito da Usare">
        Nessuna tariffa, nessuna registrazione, nessun addebito a sorpresa. Scarica tutti i video che vuoi, ogni giorno, senza limiti. Lo manteniamo gratuito così puoi salvare quel meme o quella clip di notizie senza incontrare un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Download Sicuri e Privati">
        Le tue informazioni restano sicure. Non conserviamo i tuoi link o video dopo il download. Nessun tracciamento, nessun log e nessun annuncio spam. Il processo è pulito, mantenendo il tuo dispositivo libero da ingombri o rischi.
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
      <StepCard step={1} title="Prendi il Link Video da Twitter X">
        <a href="http://www.x.com">Apri Twitter X</a> sul tuo telefono o browser. Trova il video che ti piace, magari un meme veloce o un punto saliente di conferenza. Clicca sull'icona di condivisione sotto il post, una piccola freccia che punta verso l'alto. Dal menu, scegli "Copia link al Post". Questo copia l'URL completo, come x.com/username/status/123456. Ricontrolla che sia corretto.
      </StepCard>
      <StepCard step={2} title="Incolla il Link nel Nostro Strumento">
        Vai su videodownload.io nel tuo browser. Vedrai una casella etichettata "Incolla link Twitter X qui". Clicca all'interno e incolla il link che hai copiato. Assicurati che inizi con x.com per evitare problemi. Funzionano solo i post pubblici; i video privati o protetti non si scaricheranno.
      </StepCard>
      <StepCard step={3} title="Recuperiamo e Prepariamo il Video">
        Clicca sul pulsante blu "Download" accanto alla casella. Il nostro sistema estrae il video dai server di Twitter X in pochi secondi. Rimuoviamo tutti i watermark e controlliamo la qualità, così ottieni una clip fluida. L'audio resta chiaro, nessun problema o suono mancante.
      </StepCard>
      <StepCard step={4} title="Salva il File sul Tuo Dispositivo">
        Vedrai opzioni: MP4 per il video completo con audio o MP3 per solo il suono. Scegli MP4 per la maggior parte delle clip. Tocca per scaricare, e finisce nella tua cartella Download o nella galleria del telefono. Nominalo qualcosa di semplice, come "meme_clip.mp4", prima di salvare. Riproducilo per assicurarti che sia perfetto.
      </StepCard>
    </div>
  );
}
