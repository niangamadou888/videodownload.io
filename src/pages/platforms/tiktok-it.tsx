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

export default function TikTokPageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Scarica Video TikTok | Gratis & HD",
    description: "Scarica video TikTok senza filigrana in qualità HD. Downloader TikTok online gratuito: veloce, sicuro e senza watermark."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Box di download minimale (senza altre sezioni della home) */}
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video TikTok"
            />
          </div>
          {/* Funzionalità */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Scarica facilmente i video TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            La guida essenziale per salvare i clip offline
          </h2>
          <p className="text-muted-foreground mb-6">
            Scarica video TikTok in qualità HD senza filigrana. Il nostro strumento ti offre un modo rapido, sicuro e totalmente gratuito per salvare i tuoi clip preferiti e guardarli offline.
          </p>

          <EnhancedFeatures />

          {/* Come scaricare */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guida semplice per salvare i video in pochi secondi
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io portare i video TikTok sul tuo dispositivo è facilissimo. Segui quattro passaggi rapidi per scaricare qualsiasi clip in pochi minuti. Ogni step è intuitivo, anche se non sei esperto di tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Scarica video TikTok
              </Button>
            </a>
          </div>

          {/* Perché scaricare */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I migliori casi d'uso per l'accesso offline
            </h2>
            <p className="section-muted mb-4">
              TikTok corre veloce: le tendenze cambiano dalla sera alla mattina e gli account si reinventano. Scaricando i video puoi conservare quelli che ti colpiscono davvero e trasformare lo scroll in una libreria personale. Non è accumulare di tutto, ma tenere ciò che diverte, ispira o torna utile, senza dipendere da connessioni instabili o bug dell'app.
          </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visione offline in viaggio
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In aereo, in metropolitana o in zone con Wi-Fi ballerino è frustrante aspettare il buffering. Salva in anticipo il tutorial di viaggio o lo sketch divertente e riproducilo senza interruzioni. I genitori possono tenere pronte canzoncine o storie per intrattenere i bambini in auto.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix e creazione di contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I creator scaricano clip per montarli, aggiungendo il proprio tocco senza ripartire da zero. Un appassionato di fitness salva video di riferimento per confrontare la tecnica e rendere i tutorial più precisi, mentre gli hobbisti conservano le fasi di un progetto per replicarle con calma a casa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mettere al sicuro i propri contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quando pubblichi spesso, un edit sbagliato o un ban può far sparire un video. Scarica i tuoi contenuti su un disco o nel cloud per conservarli. Anche studenti e studentesse salvano estratti di lezioni o consigli di studio per consultarli senza accedere all'app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo su altre piattaforme
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Esporta i tuoi contenuti su Instagram Reels o YouTube Shorts adattandoli al formato e raggiungendo più pubblico. Un piccolo negozio può salvare le recensioni dei clienti e mostrarle sul sito o in negozio per aumentare la fiducia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivio personale
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I momenti di famiglia - la nonna che balla mentre cucina, un ricordo speciale - meritano di più di un'app. Scaricali per mostrarli alle riunioni o tramandarli, così rimarranno vivi nel tempo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video TikTok ti offre flessibilità e comodità: puoi goderti i contenuti alle tue condizioni, per divertimento, lavoro o studio.
            </p>
          </div>

          {/* Chi dovrebbe scaricare */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le persone che traggono più vantaggi dai video offline
            </h2>
            <p className="section-muted mb-4">
              Tutti conoscono il fascino di un buon clip su TikTok, ma il download è particolarmente utile per chi usa l'app come strumento di lavoro o di ispirazione. Se i contenuti influenzano le tue giornate, salvare i file ha senso.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Content creator
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Girano quasi ogni giorno e prendono spunto dalle tendenze. Scaricare i propri video o quelli di ispirazione permette di montarli meglio, magari integrando una trend in una serie senza filigrane fastidiose. Una beauty vlogger, ad esempio, può recuperare le reazioni dei fan e inserirle nelle risposte, facendo crescere il canale con più qualità.
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
                    I docenti salvano clip dimostrative da mostrare in classe anche senza connessione, come una rievocazione storica. Studentesse e studenti scaricano trucchi di matematica o lezioni di lingua per ripassare con calma. È un modo pratico per trasformare l'app in uno strumento didattico.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Genitori e famiglie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Il primo compleanno cantato o il lavoretto delle feste meritano di essere conservati. Scarica la clip, stampane alcuni frame o masterizzala per i nonni, senza dipendere da un cloud che potrebbe dare problemi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Piccole attività
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Un bar può scaricare i contenuti dei clienti da mostrare sui menù digitali o nelle newsletter, aumentando l'engagement. I marketer testano rapidamente nuove idee pubblicitarie a partire dalle tendenze.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Appassionati
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I giardinieri salvano guide di semina per controllare le stagioni, chi ama cucinare conserva ricette per sperimentare varianti. Anche chi segue l'allenamento scarica le routine per portarle in palestra, trasformando un like in un'abitudine.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualunque sia il tuo ruolo o stile di vita, scaricare video TikTok ti fa risparmiare tempo, dati e fatica, mantenendo i contenuti preferiti sempre accessibili.
            </p>
          </div>

          {/* Aspetti legali */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video TikTok?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa sapere sulle norme in vigore
            </h2>
            <p className="section-muted mb-4">
              Scaricare video TikTok è una zona grigia che dipende dall'uso che ne fai. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Le regole della piattaforma consentono di salvare i clip pubblici</a> per vederli offline, finché l'autore non lo vieta. Va bene se resta per uso personale. Tuttavia i termini proibiscono gli strumenti di terze parti: usare un sito come il nostro potrebbe teoricamente essere segnalato, anche se nella pratica milioni di utenti lo fanno senza problemi perché i controlli si concentrano sui reupload massivi.
            </p>
            <p className="section-muted mb-4">
              Sul fronte del copyright la legge è più severa. I video appartengono ai creatori e sono protetti da normative come il DMCA. Le copie personali per visione offline rientrano spesso nel fair use se non modifichi né diffondi il contenuto. Ri-pubblicare senza credito o senza trasformarlo, invece, è violazione e può comportare rimozioni o azioni legali. La musica inserita nei clip complica la faccenda, anche se gli estratti personali brevi difficilmente vengono segnalati.
            </p>
            <p className="section-muted mb-2">
              Ci sono comunque situazioni in cui il download è consentito:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permesso del creatore
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se l'autore autorizza esplicitamente il download, puoi procedere in tranquillità.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Contenuti nel pubblico dominio
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Il materiale non coperto da copyright può essere scaricato liberamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Uso didattico lecito
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scuole e docenti possono utilizzare brevi clip per scopi educativi in fair use. Controlla sempre la descrizione del video per eventuali indicazioni.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              In sintesi, mantieni l'uso privato e rispettoso e sarai perlopiù al sicuro. Se vuoi condividere, chiedi prima o cita chiaramente l'autore.
            </p>
          </div>

          {/* Rischi */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              I rischi legati al download dei video TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli da conoscere e come evitarli
            </h2>
            <p className="section-muted mb-4">
              I downloader di terze parti promettono scorciatoie veloci, ma spesso nascondono insidie. Non tutti i siti sono affidabili e incollare un link senza controlli può esporre il tuo dispositivo. Meglio conoscere i rischi prima di procedere.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware da siti sospetti">
                Alcuni portali inseriscono virus nei file, infettando il tuo MP4 con trojan o ransomware. Basta un clic per ritrovarsi con lo schermo bloccato o con password rubate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Tentativi di phishing">
                Pulsanti fasulli portano a finte schermate di login simili a TikTok per rubare le credenziali, oppure propongono aggiornamenti che installano spyware.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Perdita di privacy">
                Alcuni strumenti registrano ciò che scarichi e rivendono gusti e indirizzi IP a terzi o, peggio, a malintenzionati.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualità scadente">
                I servizi poco curati comprimono eccessivamente i video, creando artefatti, audio fuori sincrono o colori sbiaditi.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban dell'account">
                TikTok può rilevare scarichi massivi da strumenti esterni e sospendere l'account, soprattutto se sei un creator.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Dispositivo appesantito">
                Salvare continuamente riempie la memoria e rallenta il telefono; un file rovinato può perfino mandare in crash il lettore.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Affidati a servizi sicuri, analizza sempre i file e, se puoi, usa un VPN per un livello extra di protezione.
            </p>
          </div>

          {/* Perché usare videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il tuo alleato affidabile per i download TikTok
            </h2>
            <p className="section-muted mb-4">
              Abbiamo creato videodownload.io nel 2022 perché eravamo stanchi di app lente, piene di pubblicità e crash improvvisi. Siamo utenti TikTok e volevamo un modo semplice per salvare i clip. Nessuna grande azienda dietro, solo un team che risolve i problemi reali degli utenti. Milioni di download effettuati senza fughe di dati e con feedback positivi costanti.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Velocità fulminea">
                I video vengono preparati in pochi secondi grazie a server ottimizzati. Anche nelle ore di punta l'attesa è minima.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Niente pubblicità fastidiose">
                Interfaccia pulita, nessun pop-up o banner invadente. L'esperienza di download resta fluida.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Zero filigrane">
                I file vengono salvati senza watermark, perfetti anche per montaggi professionali.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Download illimitati">
                Nessun limite quotidiano: puoi scaricare tutti i video che vuoi.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona su qualsiasi dispositivo">
                Smartphone, tablet o PC: basta il browser, senza installare software aggiuntivi.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacy protetta">
                Non salviamo link né file. Una volta completato il download non resta traccia.
              </FeatureCard>
            </div>
          </div>

          {/* Domande frequenti */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Domande frequenti</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tutto quello che c'è da sapere su videodownload.io e TikTok
            </h2>
            <p className="section-muted mb-4">
              Ecco le risposte ai dubbi più comuni per usare videodownload.io in modo semplice e sicuro.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video TikTok privati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, il servizio funziona solo con video pubblici. I contenuti privati richiedono l'autorizzazione del creatore. Se è un tuo video, usa l'esportazione interna di TikTok.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il download rallenta il telefono?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. I file sono leggeri e non installiamo nulla. Fai solo attenzione allo spazio di archiviazione se scarichi molti video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il video scaricato non ha filigrana?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok aggiunge il watermark per tracciare le condivisioni, ma noi preleviamo il flusso originale e lo rimuoviamo: il video resta pulito per uso personale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso estrarre solo l'audio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, dopo aver incollato il link scegli l'opzione MP3 per ottenere soltanto la traccia audio.
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
                  Controlla che il link sia completo e il video pubblico. Prova un altro browser o svuota la cache. Se il problema continua, contattaci: rispondiamo in pochi minuti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Esiste un limite di durata o dimensione?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti. I TikTok più lunghi richiedono qualche secondo in più ma non vengono tagliati.
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
                  No. Elaboriamo il file al volo e lo cancelliamo subito dopo. I video restano solo sul tuo dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il creatore vede se scarico il suo video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok non invia notifiche: il download resta anonimo e il creator non riceve avvisi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Inizia subito */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Pronto a salvare i tuoi preferiti?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Porta i video offline in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia il link TikTok
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Incolla qui
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Premi Scarica
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video TikTok
                </Button>
              </a>
            </div>
          </div>

          {/* Scopri altri downloader */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Scopri altri downloader
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
      <FeatureCard icon={VideoIcon} title="Download in HD">
        Ottieni video in alta definizione fino a 1080p, senza perdita di qualità, perché preleviamo il file direttamente alla fonte.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Senza filigrana">
        L'app ufficiale aggiunge il logo ai video salvati. Noi lo rimuoviamo per offrirti un file pulito, pronto da condividere o montare.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Compatibile con ogni dispositivo">
        Funziona su Android, iOS, Windows e macOS senza installare nulla: ti basta aprire il sito, incollare il link e scaricare.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Elaborazione rapida">
        Il video viene preparato in pochi secondi grazie a server veloci: niente attese infinite per salvare una ricetta o un allenamento virale.
      </FeatureCard>
      <FeatureCard icon={Download} title="Completamente gratuito">
        Nessuna registrazione, nessuna carta di credito, zero costi nascosti: scarica quanto vuoi ogni giorno.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sicuro e privato">
        Non conserviamo link o file: dopo il download non resta alcuna traccia e non compaiono pop-up invasivi.
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
      <StepCard step={1} title="Copiare il link del video">
        <a href="https://www.tiktok.com/">Apri TikTok</a> dall'app o dal sito web e raggiungi il video che ti interessa. Tocca l'icona Condividi e seleziona «Copia link» per ottenere l'URL completo.
      </StepCard>
      <StepCard step={2} title="Incollare il link su videodownload.io">
        Visita videodownload.io dal browser e incolla l'URL nel campo in alto. Controlla che inizi con tiktok.com e che il video sia pubblico.
      </StepCard>
      <StepCard step={3} title="Lasciare che il sistema prepari il file">
        Premi il pulsante «Scarica». Recuperiamo il video dai server di TikTok, rimuoviamo il watermark e controlliamo la qualità in pochi secondi.
      </StepCard>
      <StepCard step={4} title="Scegliere formato e salvare">
        Scegli MP4 per avere audio e video, oppure MP3 se ti serve solo la traccia. Il file viene scaricato nella cartella predefinita del dispositivo e potrai guardarlo offline quando vuoi.
      </StepCard>
    </div>
  );
}
