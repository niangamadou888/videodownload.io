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

export default function LinkedInPageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Scaricare Video LinkedIn | Gratis & HD",
    description:
      "Scarica video e post LinkedIn in mp4, qualità 1080p. Downloader e convertitore video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Box di download minimale */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Scarica video LinkedIn
          </h1>
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video o post LinkedIn"
            />
          </div>
          {/* Funzionalità */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica i video LinkedIn con facilità
          </h2>
          <p className="text-muted-foreground mb-6">
            La guida semplice per salvare clip professionali e vederle offline
          </p>

          <EnhancedFeatures />

          {/* Come scaricare */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Istruzioni chiare, passo dopo passo, per salvare senza sforzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io portare un video LinkedIn sul tuo dispositivo è
            questione di minuti. Segui questi quattro passaggi intuitivi – anche se
            non sei esperto di tecnologia – e scarica qualsiasi clip in un attimo.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Scarica video LinkedIn
              </Button>
            </a>
          </div>

          {/* Perché scaricare */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I casi d'uso più efficaci
            </h2>
            <p className="section-muted mb-4">
              Il feed di LinkedIn scorre veloce e i video di valore finiscono presto
              nel dimenticatoio. Scaricandoli puoi conservare ciò che conta,
              trasformando lo scroll veloce in risorse durature. Non si tratta di
              raccogliere tutto, ma di salvare ciò che supporta carriera o business,
              al sicuro da bug e post eliminati.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Accesso offline per professionisti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva un talk di leadership o una strategia marketing per vederli
                    in aereo o durante i pendolarismi senza Wi-Fi. I trainer
                    scaricano clip dei workshop da mostrare ai team senza affidarsi a
                    connessioni instabili.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Riutilizzo dei contenuti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I marketer salvano case study da mostrare ai clienti o da
                    ricondividere su altre piattaforme. Chi cerca lavoro scarica
                    consigli su CV e colloqui per analizzarli fotogramma per
                    fotogramma. Puoi estrarre i momenti chiave per presentazioni e
                    pitch senza ripartire da zero.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviare i propri post
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se condividi aggiornamenti o contenuti di thought leadership, le
                    piattaforme possono modificarli o rimuoverli. Salvali su un drive
                    per proteggerli da ban o glitch improvvisi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Formazione e didattica
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I team HR salvano video di onboarding per i nuovi assunti.
                    Studenti e corsisti scaricano panel e webinar per prendere appunti
                    e rivedere i contenuti offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Crescita personale
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva talk motivazionali o suggerimenti sul networking da
                    riguardare quando serve una spinta. Trasforma il consiglio di un
                    mentor in un promemoria quotidiano senza cercarlo ogni volta
                    nell'app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video LinkedIn ti offre flessibilità e comodità, permettendoti
              di utilizzare i contenuti alle tue condizioni, per lavoro, studio o
              ispirazione.
            </p>
          </div>

          {/* A chi serve */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le persone che ne traggono maggiore vantaggio
            </h2>
            <p className="section-muted mb-4">
              LinkedIn è il centro dei professionisti, ma il download dei video è
              perfetto per chi usa la piattaforma per crescere, imparare o costruire
              relazioni. È pensato per chi vede i post come strumenti, non come
              semplici aggiornamenti. Se sei attivo e strategico, è una marcia in
              più.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionisti e manager
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I manager salvano speech di leadership da condividere con i team.
                    I marketer scaricano annunci e casi studio dei competitor per
                    studiare i trend e riutilizzano clip pulite nelle loro slide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Candidati e career coach
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica consigli su colloqui e CV per esercitarti offline. I coach
                    di carriera raccolgono storie di successo dei clienti da mostrare
                    durante le sessioni, senza watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Imprenditori e titolari di PMI
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Le startup salvano pitch o aggiornamenti di settore per studiare la
                    concorrenza. Le piccole aziende scaricano testimonianze clienti da
                    inserire nel sito o nelle proposte commerciali.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Formatori e docenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I professionisti HR conservano video di compliance per le sessioni
                    interne. I docenti scaricano panel aziendali da discutere in aula,
                    mostrando esempi reali anche senza connessione.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studenti e learner a vita
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica consigli di carriera o tutorial tecnici da rivedere con i
                    tuoi tempi. Anche gli utenti occasionali salvano clip motivanti da
                    riguardare durante una ricerca di lavoro o un progetto impegnativo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualunque sia il tuo ruolo, scaricare video LinkedIn ti fa risparmiare
              tempo, dati e fatica, tenendo i contenuti più importanti sempre a
              portata di mano.
            </p>
          </div>

          {/* Legale */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video LinkedIn?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa sapere sulla normativa
            </h2>
            <p className="section-muted mb-4">
              Scaricare video LinkedIn rientra in un'area grigia. I contenuti sono
              coperti dal diritto d'autore dei creatori, secondo leggi come il
              <a href="https://it.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> negli Stati Uniti. Salvare per uso personale – ad
              esempio rivedere un webinar offline – spesso rientra nel fair use.
              Condividere senza permesso o usarli a scopo di lucro può però causare
              problemi legali. L'audio, come musica o voiceover, può avere ulteriori
              livelli di copyright, anche se i salvataggi brevi e personali raramente
              vengono contestati.
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
                    Se il creator permette la diffusione o se il video è di dominio
                    pubblico, sei al sicuro. L'uso educativo – insegnanti che mostrano
                    clip in aula – rientra spesso nel fair use. Controlla la descrizione
                    del post per eventuali permessi e mantieni i download per uso
                    privato, citando sempre l'autore quando condividi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rischi */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rischi legati al download di video LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Minacce potenziali e come evitarle
            </h2>
            <p className="section-muted mb-4">
              Scaricare da siti poco affidabili può sembrare comodo, ma espone a
              rischi reali. Non tutti gli strumenti sono sicuri e pochi click
              distratti possono compromettere dispositivo e dati. Conosci i rischi
              prima di premere “Download”.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware e virus">
                Siti sospetti inseriscono virus nei file video, installando spyware o
                ransomware. Un singolo download errato può bloccare i tuoi file o
                rubare password. Alcuni tool nascondono keylogger, trasformando un
                semplice salvataggio in una fuga di dati.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Truffe di phishing">
                Pagine fake imitano il login LinkedIn e rubano le credenziali.
                Pop-up insistenti propongono “aggiornamenti” che installano tracker su
                ogni clic.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Perdita di qualità">
                Strumenti scadenti comprimono troppo i video, causando fotogrammi
                scattosi o audio muto. Ti aspetti un contenuto nitido e ottieni un file
                inutilizzabile.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Falle di privacy">
                Alcuni servizi registrano i tuoi download e vendono IP e preferenze a
                inserzionisti. I malintenzionati possono usarli per spam o frodi.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Blocchi del profilo LinkedIn">
                L'uso intensivo di tool esterni può segnalare l'account, soprattutto
                per i creator attivi. Potresti perdere accesso a rete e contenuti.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Memoria piena">
                Salvare molti video occupa spazio, rallenta smartphone e dischi.
                File corrotti possono mandare in crash i player e farti perdere tempo.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Affidati a siti sicuri, scansiona i file scaricati e valuta l'uso di una
              VPN per ridurre i rischi.
            </p>
          </div>

          {/* Perché videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scegliere videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il partner affidabile per i download LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Abbiamo lanciato videodownload.io nel 2022 perché eravamo stanchi di
              strumenti lenti e poco sicuri. Da utenti LinkedIn avevamo bisogno di un
              modo rapido e pulito per salvare video senza rischi. Siamo un piccolo
              team, focalizzato su download semplici e protetti. Dopo milioni di
              utenti e zero violazioni, continuiamo a migliorare ascoltando i loro
              feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Meno di cinque secondi">
                I download si completano anche nelle ore di punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Nessuna pubblicità">
                Interfaccia pulita, senza pop-up.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Senza watermark">
                Clip pulite e pronte all'uso.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Download illimitati">
                Nessun limite giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funziona ovunque">
                Da vecchi tablet a laptop nuovi.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Setup sicuro">
                Nessun dato viene conservato dopo il download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Domande frequenti</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le risposte ai dubbi più comuni sui download LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Abbiamo raccolto le risposte alle domande più frequenti su
              videodownload.io e sul download dei video LinkedIn, per aiutarti a
              iniziare con sicurezza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video LinkedIn privati?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, supportiamo solo post pubblici. I video privati o di gruppo
                  richiedono l'autorizzazione del creator e rispettiamo questi limiti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il download rallenta il mio dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  I nostri file sono puliti e ottimizzati, quindi nessun rallentamento.
                  Monitora tuttavia lo spazio se scarichi molti video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il video scaricato non ha watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn aggiunge i loghi per tracciare le condivisioni, ma noi
                  preleviamo il file originale e lo puliamo, offrendoti un video
                  limpido per uso personale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvare solo l'audio di un video LinkedIn?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Certo, scegli MP3 dopo aver incollato il link. Perfetto per podcast o
                  discorsi senza parte visiva.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Cosa faccio se il download non parte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica che il link sia pubblico e inizi con linkedin.com. Prova un
                  altro browser o svuota la cache. Il nostro supporto in chat è pronto
                  ad aiutarti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Ci sono limiti di durata?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti. Quelli più lunghi richiedono un po'
                  più di tempo, ma vengono scaricati completi.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservate i video che scarico?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assolutamente no. Elaboriamo e cancelliamo subito tutto. I file restano
                  solo sul tuo dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il creator vede che ho scaricato il suo video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn non invia notifiche ai creator. Il download resta privato e
                  invisibile all'autore.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a salvare i video LinkedIn oggi
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Scarica clip professionali in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia il link LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Incolla sul nostro sito
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Scarica il video pulito
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Altri downloader */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Scopri altri downloader
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Scarica dai tuoi social preferiti
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
      <FeatureCard icon={VideoIcon} title="Video in alta qualità">
        Ottieni video LinkedIn nitidi fino a 1080p quando il post originale lo
        consente. Niente fotogrammi sfocati o colori spenti quando li riguardi.
        Preleviamo il file direttamente dai server LinkedIn per mantenere ogni
        dettaglio, perfetto per talk e demo.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Zero watermark o loghi">
        L'app LinkedIn aggiunge il proprio branding alle clip salvate. Noi lo
        rimuoviamo, consegnandoti un video pulito pronto per presentazioni o uso
        personale.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su ogni dispositivo">
        Usa laptop, iPhone, Android o tablet e funziona senza installare nulla.
        Apri il sito, incolla il link e scarica. Testato su PC datati e smartphone
        nuovi, sempre fluido.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Download rapidi e affidabili">
        Attendere spezza il ritmo. Il nostro tool scarica i video in pochi secondi,
        di solito meno di 10 per la maggior parte dei clip. I server vicino a LinkedIn
        garantiscono velocità e stabilità.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis e senza limiti">
        Nessun costo, registrazione o fee nascosta. Scarica tutti i video che vuoi
        ogni giorno senza limiti. Tieni i consigli professionali sempre con te.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo sicuro e privato">
        I tuoi dati restano protetti. Non memorizziamo link o video dopo il download.
        Nessun tracking, log o pubblicità fastidiose: solo un flusso pulito.
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
      <StepCard step={1} title="Copia il link dal post LinkedIn">
        <a href="http://www.linkedin.com">Apri LinkedIn</a> da smartphone o browser.
        Trova il video da salvare, ad esempio un consiglio per il colloquio o un
        annuncio aziendale. Tocca i tre puntini in alto a destra del post e scegli
        "Copia link al post" per ottenere l'URL completo (es. linkedin.com/posts/utente_123456).
        Controlla che sia corretto.
      </StepCard>
      <StepCard step={2} title="Incolla il link nel nostro strumento">
        Vai su videodownload.io nel browser. Vedrai un campo "Incolla il link LinkedIn qui".
        Clicca e incolla l'URL copiato. Assicurati che inizi con linkedin.com per
        evitare errori. Solo i post pubblici sono supportati; niente contenuti privati
        o di gruppo.
      </StepCard>
      <StepCard step={3} title="Elaboriamo il video per te">
        Premi il pulsante blu "Download" accanto al campo. Il nostro sistema recupera
        il video dai server LinkedIn in pochi istanti, rimuove watermark e verifica la
        qualità. L'audio resta limpido, ideale per interventi e panel.
      </StepCard>
      <StepCard step={4} title="Salva la clip sul dispositivo">
        Scegli il formato: MP4 per video + audio oppure MP3 solo audio. Per la
        maggior parte dei casi seleziona MP4. Il file finirà nella cartella Download o
        nella galleria. Rinominalo, ad esempio "talk_carriera.mp4", e riproducilo per
        confermare che sia perfetto.
      </StepCard>
    </div>
  );
}
