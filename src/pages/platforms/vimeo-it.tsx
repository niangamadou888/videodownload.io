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

export default function VimeoPageIT() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Vimeo | Gratis & HD",
    description: "Scarica video Vimeo in formato MP4 e qualità 1080p. Downloader e convertitore video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Box di download minimale */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Scarica video Vimeo
          </h1>
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video Vimeo"
            />
          </div>
          {/* Caratteristiche */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Caratteristiche
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica video Vimeo con facilità
          </h2>
          <p className="text-muted-foreground mb-6">
            La tua guida semplice per salvare offline clip creative
          </p>

          <EnhancedFeatures />

          {/* Come scaricare */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guida chiara, passo dopo passo, per salvare video senza fatica
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io portare i video Vimeo sul tuo dispositivo è davvero semplice.
            Segui questi quattro passaggi veloci per scaricare qualsiasi video in pochi minuti.
            Ogni fase è stata pensata per essere intuitiva, anche se non sei esperto di tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Scarica video Vimeo
              </Button>
            </a>
          </div>

          {/* Perché scaricare */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video da Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I casi d'uso migliori
            </h2>
            <p className="section-muted mb-4">
              Vimeo è un punto di riferimento per contenuti creativi e professionali, ma i video possono sparire o venir rimossi. Scaricarli ti permette di conservare quelli che ispirano o insegnano, trasformando scoperte fugaci in una raccolta personale. Significa salvare ciò che alimenta i tuoi progetti o la tua passione, non accumulare contenuti a caso. Hai il pieno controllo sulla tua libreria, al riparo da upload cancellati o modifiche alla piattaforma.
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
                    Salva tutorial di filmmaking o interviste d'artista per viaggi senza Wi-Fi, come voli o set in location. Gli studenti scaricano clip educative per studiare senza connessione.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo per i creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I registi salvano cortometraggi per studiare tecniche o remixarli nei propri lavori. I marketer recuperano contenuti di brand da adattare su altre piattaforme, senza filigrane per un editing pulito.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviare i propri upload
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se pubblichi video su Vimeo, potrebbero sparire per problemi di account o aggiornamenti della piattaforma. Scaricali su un disco per proteggere il tuo lavoro, sia che si tratti di un portfolio sia di un progetto per un cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprendimento e ispirazione
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I designer salvano tutorial di motion graphic per esercitarsi offline. Gli insegnanti scaricano lezioni creative per mostrarle in classe senza dipendere dalla connessione.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Progetti personali
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva videoclip musicali o showcase artistici da rivedere per trarne motivazione. Trasforma una scoperta su Vimeo in una risorsa per la tua prossima idea creativa o proposta professionale.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video da Vimeo ti offre flessibilità e comodità,
              così da goderti i contenuti alle tue condizioni, per divertimento,
              lavoro o studio.
            </p>
          </div>

          {/* Chi dovrebbe scaricare */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le persone che ne traggono più vantaggi
            </h2>
            <p className="section-muted mb-4">
              Vimeo è una casa per artisti e professionisti, ma scaricare i video è ideale per chi usa la piattaforma per creare, imparare o crescere. È per chi vede le clip come strumenti, ispirazioni o ricordi, non solo come intrattenimento veloce. Se sei attivo su Vimeo e vuoi conservare ciò che conta, il download è lo strumento giusto.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creator di contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Registi e animatori salvano tutorial o showreel da studiare o rielaborare. Scaricano anche i propri upload per conservare versioni pulite senza loghi, perfette per portfolio o montaggi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenti e docenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gli insegnanti di arti visive salvano demo di animazione per le lezioni. Gli studenti raccolgono consigli di regia o lezioni di design per ripassarli offline al proprio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionisti e aziende
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I marketer scaricano video di brand da riutilizzare in annunci o siti web. I freelancer salvano presentazioni per archiviarle o condividerle, senza filigrane distrattive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Appassionati e creativi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I fotografi salvano tutorial sull'illuminazione per provarli a casa. I musicisti scaricano performance live per studiare l'allestimento del palco e provare offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Utenti occasionali
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva il cortometraggio di un amico o un video motivazionale da rivedere in seguito. Anche i fan archiviano showcase artistici per progetti personali o moodboard.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualunque sia il tuo ruolo o stile di vita, scaricare video Vimeo ti fa risparmiare tempo, dati ed energie mantenendo i tuoi contenuti preferiti a portata di mano.
            </p>
          </div>

          {/* Aspetti legali */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video da Vimeo?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa sapere riguardo alla legge
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da Vimeo è ancora una zona grigia. Le linee guida di Vimeo <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">permettono di scaricare video pubblici dal sito</a> per uso personale, se il creatore non ha disattivato l'opzione. Usare strumenti di terze parti come il nostro viola i termini e potrebbe segnalare il tuo account, anche se i ban sono rari finché non scarichi in massa o ripubblichi senza permesso.
            </p>
            <p className="section-muted mb-4">
              I video sono coperti dal diritto d'autore secondo leggi come il DMCA negli Stati Uniti. Salvare per visione privata, ad esempio studiare un tutorial offline, rientra spesso nel fair use. Ma condividere senza credito o usare a fini commerciali può creare problemi legali. Musica e voice-over possono aggiungere ulteriori diritti, sebbene i salvataggi personali e brevi raramente causino controversie.
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
                    Se il creatore consente il download o il contenuto è di dominio pubblico, sei a posto. Gli usi educativi, come mostrare un clip in classe, rientrano spesso nel fair use. Controlla le descrizioni per le autorizzazioni. Mantieni i download privati e cita i creatori quando condividi per restare al sicuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rischi */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I rischi legati al download di video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli potenziali e come evitarli
            </h2>
            <p className="section-muted mb-4">
              I downloader di terze parti sembrano comodi, ma siti poco affidabili nascondono problemi reali. Non tutti sono sicuri e un clic sbagliato può danneggiare dispositivo o dati. Conoscere i rischi in anticipo ti aiuta a evitare guai.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Siti poco seri nascondono virus nei file video e installano spyware o ransomware. Un solo download sbagliato può bloccare i tuoi file o rubare password. Alcuni strumenti sono stati scoperti con keylogger, trasformando un semplice meme in una violazione di dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Finte pagine di download imitano il login di Vimeo e rubano le credenziali se le inserisci. Oppure gli annunci spingono "aggiornamenti" che installano tracker e monitorano la tua attività.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemi di qualità"
              >
                Piattaforme di bassa qualità comprimono i video causando scatti o audio mancante. Cercavi un tutorial nitido e ti ritrovi con un file difettoso.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Perdita di privacy">
                Alcuni siti registrano i download e vendono il tuo IP o le preferenze video agli inserzionisti. Gli hacker potrebbero intercettare questi dati e generare spam o truffe mirate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban su Vimeo">
                Un uso intenso di strumenti esterni può segnalare il tuo account, soprattutto se sei un creator. Potresti perdere profilo o caricamenti dall'oggi al domani.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Spazio pieno"
              >
                Salvare molti video occupa memoria e rallenta telefoni o dischi. File corrotti possono far crashare i player, facendoti perdere tempo a sistemare tutto.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa siti affidabili, scansiona i download e valuta una VPN per restare protetto.
            </p>
          </div>

          {/* Perché usare videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il tuo partner di fiducia per i download da Vimeo
            </h2>
            <p className="section-muted mb-4">
              Abbiamo creato videodownload.io nel 2022 perché eravamo stanchi di app lente e siti rischiosi. Da utenti Vimeo volevamo un modo rapido e pulito per salvare i video senza complicazioni. Siamo un piccolo team, non una grande azienda, e puntiamo su download semplici e sicuri. Milioni di utenti si fidano di noi senza fughe di dati, e continuiamo a migliorare ascoltando i loro feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Meno di cinque secondi">
                I download terminano velocemente anche nei momenti di punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Nessuna pubblicità o pop-up">
                Solo un'interfaccia pulita.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigrane eliminate">
                Clip pulite e subito utilizzabili.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvataggi illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su ogni dispositivo">
                Dai vecchi tablet ai laptop più recenti.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema sicuro">
                Nessun dato archiviato dopo il download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Domande frequenti</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande comuni sui download da Vimeo
            </h2>
            <p className="section-muted mb-4">
              Abbiamo raccolto le risposte alle domande più frequenti sull'uso di
              videodownload.io e sul download dei video Vimeo per aiutarti a partire con tranquillità.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video Vimeo privati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, supportiamo solo i video pubblici. I contenuti privati o protetti da password richiedono il permesso del creatore e rispettiamo questi limiti per restare conformi.
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
                  I nostri file sono leggeri e puliti, quindi niente lag. Tuttavia salvare molti video può riempire la memoria: tieni d'occhio lo spazio libero.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il video scaricato non ha filigrane?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo aggiunge loghi per tracciare le condivisioni, ma noi estraiamo il file originale e lo puliamo, offrendoti un video chiaro per uso personale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio di un video Vimeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, dopo aver incollato il link scegli MP3. Perfetto per estrarre musica o voice-over dai tutorial senza immagini.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  E se il download non parte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controlla che il link sia pubblico e inizi con vimeo.com. Prova un altro browser o svuota la cache. La nostra chat di supporto risolve rapidamente eventuali problemi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Esiste un limite alla durata dei video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti, anche se la lunghezza dei clip Vimeo varia. Quelli più lunghi richiedono qualche istante in più ma vengono scaricati per intero.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservate i video che scarico?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assolutamente no. Elaboriamo tutto all'istante e cancelliamo subito dopo. I file restano sul tuo dispositivo, mai sui nostri server.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  I creator vedono se scarico il loro video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo non li avvisa. Il download resta privato, senza notifiche al creatore.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Inizia ora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia subito a salvare video Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ottieni i tuoi clip creativi in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia il link del video Vimeo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Incollalo sul nostro sito
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Scarica un video pulito
              </div>
            </div>
            <div className="mt-2">
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video Vimeo
                </Button>
              </a>
            </div>
          </div>

          {/* Esplora altri downloader */}
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
      <FeatureCard icon={VideoIcon} title="Download in alta definizione">
        Salva i video Vimeo nella loro risoluzione completa, fino a 1080p o superiore se l'upload originale lo consente. Nessuna riproduzione granulosa o colori spenti quando li riguardi. Recuperiamo il file direttamente dai server di Vimeo, mantenendo ogni fotogramma nitido per quel cortometraggio o tutorial artistico.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Nessun watermark o branding">
        Vimeo aggiunge il proprio logo ai video salvati tramite l'app, rendendo l'esperienza più confusa. Noi lo rimuoviamo e ti consegniamo un clip pulito, pronto per l'editing o l'uso personale. Guarda quel documentario o quell'animazione senza sovrapposizioni di testo.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su tutti i dispositivi">
        Usa telefono, tablet, laptop o desktop e tutto scorre liscio. Nessuna app o software extra richiesto. Apri il sito nel browser, incolla il link e scarica. Testato da vecchi iPhone a nuovi PC, sempre senza intoppi.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di download elevate">
        Nessuno ama aspettare. Il nostro strumento scarica video Vimeo in pochi secondi, spesso meno di dieci per la maggior parte dei clip. Utilizziamo server vicini a quelli di Vimeo per prelievi rapidi, così puoi salvare un tutorial o uno showreel durante una pausa.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente gratuito">
        Niente costi, iscrizioni o spese nascoste. Scarica quanti video vuoi, ogni giorno, senza limiti. Lo manteniamo gratuito così puoi salvare quel film ispirante o video musicale senza incontrare paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo sicuro e privato">
        I tuoi dati restano protetti. Non memorizziamo link o video dopo il download. Nessun tracking, nessun log e zero pubblicità invadenti. Il processo è pulito e tiene il dispositivo al sicuro da rischi.
      </FeatureCard>
    </div>
  );
}

// --- Passaggi dettagliati ---
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
      <StepCard step={1} title="Copia il link del video da Vimeo">
        <a href="http://www.vimeo.com">Apri Vimeo</a> sul telefono o nel browser. Trova il video che ti piace, magari un consiglio di regia o un'animazione creativa. Clicca sull'icona di condivisione, di solito un aeroplanino, in basso o a lato del video. Dal menu scegli "Copia link". Otterrai l'URL completo, ad esempio vimeo.com/123456789. Controlla che sia corretto.
      </StepCard>
      <StepCard step={2} title="Incolla il link nel nostro strumento">
        Visita videodownload.io nel browser. Vedrai un campo con scritto "Incolla qui il link Vimeo". Clicca e incolla il link copiato. Assicurati che inizi con vimeo.com per evitare errori. Funzionano solo i video pubblici; quelli privati o protetti non possono essere scaricati.
      </StepCard>
      <StepCard step={3} title="Noi recuperiamo e puliamo il video">
        Premi il pulsante verde "Scarica" accanto al campo. Il nostro sistema preleva il video dai server di Vimeo in pochi secondi. Rimuoviamo eventuali watermark e controlliamo la qualità, così ottieni un clip fluido. L'audio resta nitido, così non perdi dettagli del tutorial o dell'intervista.
      </StepCard>
      <StepCard step={4} title="Salva il clip sul tuo dispositivo">
        Appariranno diverse opzioni: MP4 per il video completo con audio oppure MP3 solo per l'audio. Per la maggior parte dei clip scegli MP4. Avvia il download e il file finirà nella cartella Download o nella galleria del telefono. Rinominandolo, ad esempio "film_tutorial.mp4", lo ritroverai subito. Riproducilo per assicurarti che sia perfetto.
      </StepCard>
    </div>
  );
}
