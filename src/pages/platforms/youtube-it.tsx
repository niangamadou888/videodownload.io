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

export default function YouTubePageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video YouTube | Gratis & HD",
    description: "Scarica video YouTube, Shorts e Live in mp4, 1080p, 4k. Convertitore e downloader di video gratuito online."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download YouTube Video
          </h1>
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video, Shorts o playlist di YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Funzionalità che rendono il download dei video di YouTube semplice e affidabile
          </h2>
          <p className="text-muted-foreground mb-6">
            Ecco sei potenti funzionalità che rendono videodownload.io la scelta
            ideale per scaricare video di YouTube in modo rapido, sicuro ed
            efficiente. Ogni funzione è pensata per migliorare l'esperienza
            d'uso e offrirti tutta la flessibilità di cui hai bisogno.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video da YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guida chiara e passo dopo passo per salvare i video senza sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Portare i video di YouTube sul tuo dispositivo è semplice con
            videodownload.io. Segui questi quattro passaggi intuitivi per
            scaricare qualsiasi video in pochi minuti, anche se non sei un
            esperto di tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Download YouTube Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video da YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I migliori casi d'uso per l'accesso offline ai video
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da YouTube ti dà la libertà di guardare contenuti
              quando vuoi, ovunque ti trovi, senza dipendere da una connessione
              internet. Che tu voglia risparmiare dati, prepararti a un viaggio
              o archiviare contenuti, i video offline sono incredibilmente
              utili. Ecco alcuni dei motivi migliori per scaricare video da
              YouTube per uso personale.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viaggiare senza accesso a Internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva film, vlog o video musicali da guardare durante lunghi
                    voli, viaggi in treno o in zone remote dove Wi‑Fi o dati
                    mobili non sono disponibili. In questo modo avrai sempre
                    intrattenimento senza interruzioni mentre sei in viaggio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studio e formazione
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica tutorial, lezioni o guide pratiche per studiare
                    offline. Ad esempio, conserva walkthrough di programmazione,
                    lezioni di lingua o video di riparazioni fai-da-te per
                    rivederli al tuo ritmo senza bisogno di streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creazione e montaggio di contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ritaglia clip per i tuoi video, come reaction, montaggi o
                    commenti, rispettando le norme sul copyright o ottenendo il
                    permesso del creatore. È un'ottima soluzione per YouTuber o
                    creator su TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviare i video preferiti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alcuni video vengono eliminati o rimossi da YouTube per
                    cambi di canale o problemi di copyright. Scaricarli ti
                    permette di conservare i tuoi preferiti o contenuti rari per
                    averli sempre a disposizione.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ridurre il consumo di dati mobili
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lo streaming consuma molti dati, soprattutto con piani
                    limitati. Scaricare tramite Wi‑Fi ti consente di guardare i
                    video senza preoccuparti di soglie o costi elevati.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Biblioteca di intrattenimento offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Crea una collezione di video musicali, trailer o vlog da
                    guardare offline. Perfetto per campeggi, allenamenti in
                    palestra o momenti di relax a casa senza problemi di
                    buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Workshop e presentazioni
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I professionisti possono scaricare video di settore, come
                    keynote o sessioni formative, da mostrare durante workshop o
                    riunioni offline, garantendo una riproduzione fluida senza
                    dipendere da Internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video da YouTube offre flessibilità e praticità, rendendo
              più semplice godersi i contenuti secondo le proprie esigenze,
              che sia per svago, lavoro o studio.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video da YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le persone che traggono il massimo dai video offline
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da YouTube non è solo per chi guarda contenuti in
              modo occasionale: è una svolta per gruppi specifici che hanno
              bisogno dell'accesso offline per lavoro, creatività o comodità.
              Ecco chi può trarre il massimo dal download dei video di YouTube e
              perché conviene farlo.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creator e influencer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTuber, TikToker o streamer possono scaricare clip per
                    video reaction, mashup o analisi, a patto di rispettare le
                    norme sul copyright o ottenere il permesso del creatore
                    originale.
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
                    Conserva contenuti educativi come tutorial di matematica,
                    spiegazioni scientifiche o documentari storici per studiare
                    offline o usarli in classe. È ideale nelle zone con internet
                    instabile o per concentrarsi senza distrazioni.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viaggiatori frequenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Che tu sia in aereo, in treno o in un luogo remoto, i video
                    scaricati garantiscono intrattenimento senza dipendere da
                    Wi‑Fi instabile o da costosi piani dati.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Appassionati di musica
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Converti video musicali o performance live in MP3 per creare
                    playlist offline. È perfetto per preparare mix da
                    allenamento o ascoltare interviste senza streaming, finché
                    la fonte è legale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivisti di video
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Collezionisti o appassionati di contenuti di nicchia possono
                    salvare video rari, vecchi caricamenti o preferiti personali
                    che potrebbero sparire da YouTube per chiusura di account o
                    rimozioni.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Amanti di fitness e benessere
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica sessioni di yoga, routine di allenamento o guide di
                    meditazione da seguire offline, a casa, al parco o in
                    palestra senza bisogno di connessione.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ricercatori e professionisti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Accademici o esperti di settore possono salvare interventi a
                    conferenze, webinar o video formativi per consultarli
                    offline durante ricerche sul campo, presentazioni o sessioni
                    di studio.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualunque sia il tuo ruolo o stile di vita, scaricare video da
              YouTube ti fa risparmiare tempo, dati e fatica, mantenendo i tuoi
              contenuti preferiti sempre a portata di mano.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video da YouTube?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa devi sapere sulla normativa
            </h2>
            <p className="section-muted mb-4">
              La legalità del download dei video di YouTube dipende da diversi
              fattori ed è fondamentale conoscere le regole per evitare
              problemi. I Termini di servizio di YouTube vietano espressamente
              di scaricare video a meno che la piattaforma non offra un'opzione
              ufficiale, come la{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=it&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                funzione offline di YouTube Premium
              </a>{" "}
              per gli abbonati. Secondo la normativa statunitense sul diritto
              d'autore, scaricare{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                contenuti protetti da copyright
              </a>{" "}
              senza il permesso del creatore o del titolare dei diritti è
              illegale e potrebbe portare ad azioni civili, anche se i casi
              contro singoli utenti per uso personale sono rari.
            </p>
            <p className="section-muted mb-2">
              Esistono però alcune eccezioni in cui il download può essere
              consentito:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Video di pubblico dominio
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I contenuti che non sono più protetti da copyright possono
                    essere scaricati liberamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Licenze Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alcuni video di YouTube hanno licenze che consentono il
                    download per determinati usi, come remix o condivisioni,
                    purché vengano rispettati i termini.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permesso del creatore
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se il creatore del video consente esplicitamente il
                    download, sei autorizzato a farlo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Casi di fair use
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Un download limitato per finalità educative, di commento,
                    critica o ricerca può rientrare nel{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      fair use
                    </a>
                    , ma dipende dal contesto e da come utilizzi il video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Per stare tranquillo, controlla la licenza del video nella
              descrizione o contatta il creatore per ottenere il permesso.
              YouTube Premium offre un modo legale per salvare i video offline
              per uso personale. Se hai dubbi, è meglio essere prudenti per
              rispettare i creatori ed evitare violazioni del copyright.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rischi del download dei video di YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli potenziali e come evitarli
            </h2>
            <p className="section-muted mb-4">
              Anche se scaricare video da YouTube è comodo, comporta dei rischi
              se utilizzi gli strumenti sbagliati o ignori i limiti legali.
              Essere consapevoli di questi pericoli ti aiuta a fare scelte
              informate e a proteggere dispositivo e dati. Ecco i principali
              rischi da tenere d'occhio.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware da siti non affidabili"
              >
                Molti siti di download sono pieni di falsi pulsanti "download",
                pop-up invasivi o script nascosti che installano{" "}
                <a
                  href="https://cyberpress.org/youtube-downloader-malware/"
                  className="text-primary hover:text-primary-glow underline transition-colors"
                >
                  virus o malware sul tuo dispositivo
                </a>
                . Possono rubare i tuoi dati o danneggiare il sistema. Affidati
                a piattaforme sicure come videodownload.io per proteggerti.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Conseguenze legali">
                Scaricare video protetti da copyright senza permesso viola i
                Termini di servizio di YouTube e può portare alla sospensione
                dell'account o, nei casi più gravi, ad azioni legali da parte dei
                titolari dei diritti. Controlla sempre la licenza del video o usa
                alternative legali come YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="File di scarsa qualità o corrotti"
              >
                I siti poco affidabili spesso forniscono video a bassa
                risoluzione o file danneggiati che non si riproducono correttamente,
                facendoti perdere tempo e spazio. Strumenti affidabili garantiscono
                la qualità che ti aspetti.

              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Violazioni della privacy">
                I siti di download inaffidabili possono tracciare le tue
                abitudini di navigazione, raccogliere informazioni personali o
                vendere i tuoi dati a terzi. Scegli un servizio che tuteli la
                privacy degli utenti e non richieda permessi inutili.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Download incompleti">
                Alcuni strumenti non elaborano correttamente i video, lasciandoti
                con file parziali o danneggiati che non si aprono. È un problema
                comune con siti obsoleti o progettati male.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Questioni etiche per i creator"
              >
                Scaricare i video può aggirare gli annunci pubblicitari, danneggiando
                i creator che si basano sulle entrate derivanti da visualizzazioni e
                advertising. Supportali guardando i contenuti online quando puoi o
                chiedendo il loro permesso per scaricarli.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilizzando uno strumento affidabile e sicuro come
              videodownload.io e rispettando le regole sul copyright, puoi
              ridurre al minimo questi rischi e ottenere download sicuri e
              affidabili.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il tuo partner di fiducia per scaricare da YouTube
            </h2>
            <p className="section-muted mb-4">
              Abbiamo lanciato videodownload.io per offrire un modo sicuro,
              semplice e veloce di scaricare video da YouTube senza lo stress dei
              siti poco affidabili. La nostra missione è creare una piattaforma
              pulita che elimini il rumore dei downloader pieni di pubblicità e
              rischi. Ecco sei motivi per cui videodownload.io è la scelta
              migliore per i tuoi download da YouTube.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sicuro e senza malware">
                Il nostro sito è privo di pop-up, pulsanti ingannevoli o script
                dannosi, così il tuo dispositivo resta al sicuro da virus e
                spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Interfaccia intuitiva">
                Grazie a un'interfaccia pulita e a una procedura semplice,
                chiunque può scaricare video in pochi secondi, senza competenze
                tecniche.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Download ad alta velocità">
                I nostri server ottimizzati elaborano i video rapidamente, così
                ottieni i file senza attese, anche per contenuti lunghi o in
                alta qualità.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Opzioni di formato flessibili">
                Scegli tra MP4 per i video o MP3 per l'audio, con diverse
                risoluzioni da 720p a 4K per soddisfare ogni esigenza.
              </FeatureCard>
              <FeatureCard icon={Download} title="Totalmente gratuito">
                Scarica video illimitati senza pagare nulla. Niente abbonamenti
                o costi nascosti: tutte le funzionalità sono gratuite.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacy al primo posto">
                Non tracciamo i tuoi download, non conserviamo i tuoi dati
                personali e non condividiamo le tue informazioni con nessuno,
                così la tua attività resta privata.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande frequenti su videodownload.io e sui download da YouTube
            </h2>
            <p className="section-muted mb-4">
              Abbiamo raccolto le risposte alle domande più comuni su
              videodownload.io e sul download dei video di YouTube, così potrai
              iniziare con sicurezza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. videodownload.io è davvero gratuito?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, la nostra piattaforma è completamente gratuita. Puoi
                  scaricare tutti i video che desideri senza costi né limiti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Devo installare un software per scaricare i video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, videodownload.io funziona interamente dal browser. Non
                  servono app, estensioni o installazioni: tutto è semplice e
                  immediato.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Posso scaricare intere playlist di YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Certo. Incolla l'URL della playlist e il nostro sistema
                  elaborerà tutti i video, così potrai scaricarli in un'unica
                  volta.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. videodownload.io è sicuro da usare?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, il nostro sito è sicuro: niente pop-up invasivi o link
                  dannosi. Diamo priorità alla sicurezza degli utenti e
                  testiamo regolarmente la piattaforma per mantenerla pulita e
                  affidabile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Posso scaricare video in alta qualità, ad esempio in 4K?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Se il video su YouTube è disponibile in 4K, puoi scaricarlo a
                  quella risoluzione. Supportiamo varie qualità, da 360p fino a
                  4K, a seconda della fonte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Cosa succede se un video non si scarica correttamente?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controlla l'URL e la tua connessione internet. Se il problema
                  persiste, contatta il nostro supporto e ti aiuteremo a
                  risolverlo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Posso estrarre solo l'audio dai video di YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, la nostra funzione di conversione in MP3 ti permette di
                  scaricare soltanto l'audio di qualsiasi video, ideale per
                  tracce musicali o estratti di podcast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Scaricare video da YouTube è legale?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Dipende dal video. I Termini di servizio di YouTube vietano il
                  download se non espressamente consentito, ma i video di
                  pubblico dominio, con licenza Creative Commons o autorizzati
                  dal creatore sono generalmente ammessi. Il fair use può
                  applicarsi per educazione o commento, ma verifica sempre la
                  licenza per evitare problemi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a scaricare subito
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ottieni i tuoi video di YouTube in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Procedura rapida e semplice
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Download sicuri e senza malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video e audio di alta qualità
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download YouTube Video
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
      <FeatureCard icon={VideoIcon} title="Download video in alta qualità">
        Scegli tra diverse risoluzioni, inclusi 720p, 1080p e persino 4K quando
        il video lo supporta. Che tu stia salvando un tutorial o un video
        musicale, puoi selezionare la qualità più adatta al tuo dispositivo senza
        dover affrontare impostazioni complicate.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di download fulminea">
        I nostri server ottimizzati scaricano i video in pochi secondi, non in
        minuti. In base alla tua connessione e alla durata del video, la maggior
        parte dei file è pronta in meno di un minuto, evitandoti lunghe attese.
      </FeatureCard>
      <FeatureCard icon={Music} title="Estrazione audio in MP3">
        Ti serve solo l'audio? Con un clic puoi convertire qualsiasi video di
        YouTube in un file MP3. È perfetto per salvare tracce musicali, podcast
        o audio di lezioni da ascoltare offline.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Nessuna installazione di software">
        Scarica i video direttamente dal browser su desktop, tablet o smartphone.
        Non serve installare app, plugin o programmi aggiuntivi: il tuo
        dispositivo resta pulito e il processo è lineare.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Supporto per playlist complete">
        Salva intere playlist di YouTube in un solo passaggio. Invece di
        scaricare ogni video singolarmente, incolla il link della playlist e il
        sistema elaborerà tutto insieme, facendoti risparmiare tempo.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interfaccia sicura e senza pubblicità">
        A differenza di molti altri siti, videodownload.io è privo di popup
        fastidiosi, reindirizzamenti o link sospetti. Il design pulito e intuitivo
        garantisce un'esperienza sicura e scorrevole.
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
      <StepCard step={1} title="Copia l'URL del video di YouTube">
        Apri YouTube dal browser o dall'app, trova il video che vuoi scaricare e
        copia il relativo URL. Puoi prendere il link dalla barra degli indirizzi
        o tramite il pulsante "Condividi" sotto il video.
      </StepCard>
      <StepCard step={2} title="Incolla l'URL sul nostro sito">
        Visita videodownload.io da qualsiasi browser. Nella homepage troverai la
        barra in cui incollare l'URL copiato. Fai clic destro o tieni premuto per
        incollare il link nel campo dedicato.
      </StepCard>
      <StepCard step={3} title="Lascia che elaboriamo il video">
        Premi il pulsante "Download" accanto al campo URL. Il nostro sistema
        recupererà subito il video e lo preparerà per il download. Se richiesto,
        scegli il formato (MP4 o MP3) e la qualità desiderata (1080p, 4K e così
        via).
      </StepCard>
      <StepCard step={4} title="Salva e organizza il tuo video">
        Quando l'elaborazione è terminata comparirà il link per il download.
        Cliccalo per salvare il file sul tuo dispositivo. Puoi rinominare il
        video durante il download per mantenere ordinata la tua libreria offline.
      </StepCard>
    </div>
  );
}
