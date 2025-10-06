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

export default function FacebookPageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Scarica Video Facebook | Gratis & HD",
    description: "Scarica video Facebook, Reels e Live in mp4, 1080p, HD. Convertitore e downloader video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla un URL di video, Reel o Watch di Facebook"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Strumenti che rendono facile il download dei video di Facebook
          </h2>
          <p className="text-muted-foreground mb-6">
            Ecco sei funzionalità che rendono videodownload.io la scelta migliore per scaricare video da Facebook. Ognuna è progettata per farti risparmiare tempo, garantire la qualità e mantenere la tua esperienza sicura e semplice.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video da Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Guida passo dopo passo per salvare video velocemente
          </h2>
          <p className="text-muted-foreground mb-6">
            Scaricare video da Facebook con videodownload.io è semplice e veloce, anche se non sei un esperto di tecnologia. Segui questi quattro passaggi per salvare il tuo video sul dispositivo in pochi minuti.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Scarica video da Facebook
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video da Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I migliori casi d'uso per la visualizzazione e l'utilizzo offline
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da Facebook ti permette di guardare o riutilizzare i contenuti senza bisogno di una connessione internet. È ideale per risparmiare dati, archiviare ricordi o creare nuovi contenuti. Ecco alcuni dei principali motivi per scaricare video da Facebook per uso personale o professionale.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualizzazione offline in movimento
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva video da guardare durante i viaggi in treno, i voli o in zone senza Wi-Fi o dati, come luoghi rurali o viaggi internazionali.
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
                    Scarica clip per reaction, montaggi o video per i tuoi social media, purché tu rispetti le norme sul copyright o ottenga il permesso del creatore.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprendimento e formazione
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva tutorial, webinar o video dimostrativi per studiare offline, come ricette di cucina, routine di fitness o consigli di business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Conservare i ricordi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva video familiari, momenti salienti di eventi o post di gruppo che potrebbero sparire se gli account vengono eliminati o cambiano le impostazioni di privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing e business
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Le aziende possono scaricare i propri video brandizzati o live stream per uso offline in presentazioni, annunci o incontri con i clienti.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Risparmiare sui costi dei dati
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica tramite Wi-Fi per evitare di consumare dati mobili, soprattutto per video lunghi o in alta qualità con piani limitati.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Intrattenimento offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Crea una collezione di clip divertenti, video musicali o live stream da goderti offline durante il tempo libero o i viaggi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Condivisione nella community
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva video da gruppi o pagine Facebook per condividerli offline in workshop, lezioni o eventi della community senza internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video da Facebook ti dà la flessibilità di goderti o utilizzare i contenuti quando e dove ne hai bisogno, senza dipendere da una connessione.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video da Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Persone che traggono vantaggio dall'accesso offline
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da Facebook è utile per chiunque voglia guardare o utilizzare contenuti offline. Non è solo per gli utenti occasionali: gruppi specifici possono risparmiare tempo e fatica scaricando. Ecco chi dovrebbe prenderlo in considerazione e perché.
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
                    Influencer, YouTuber o TikToker possono scaricare video per reaction, collaborazioni o montaggi, purché rispettino il copyright o ottengano il permesso.
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
                    Salva contenuti educativi, come lezioni, tutorial o webinar, per studiare offline o usarli in classe, soprattutto in zone con scarsa connettività.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viaggiatori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica intrattenimento, come clip virali o live stream, per la visione offline durante i viaggi senza accesso a internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Imprenditori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva i tuoi video brandizzati, live stream o annunci per uso offline in marketing, pitch o presentazioni ai clienti.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Custodi di ricordi
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva video personali, momenti familiari o post di gruppo che potrebbero scomparire a causa di modifiche agli account o alle impostazioni di privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Appassionati di fitness
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scarica video di allenamento, sessioni di yoga o consigli sulla salute da seguire offline a casa o in palestra.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leader della community
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salva video di gruppo o contenuti di pagine per condividerli offline in riunioni, eventi o workshop senza bisogno di Wi-Fi.
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
                    Scarica video per ispirazione, come progetti fai-da-te o tutorial di artigianato, da consultare offline mentre lavori ai tuoi hobby.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video da Facebook?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Comprendere le regole legali
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da Facebook è un argomento complesso. I Termini di servizio di Facebook non consentono di scaricare contenuti senza il permesso del creatore o della piattaforma. Secondo la legge statunitense sul copyright, salvare video protetti da copyright senza approvazione è illegale e potrebbe portare a cause legali, anche se questo è raro per l'uso personale. Le eccezioni includono:
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
                    Video di pubblico dominio, che non sono protetti da copyright.
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
                    Video con licenze Creative Commons, che possono consentire il download per usi specifici, come condivisione o remix, se rispetti i termini.
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
                    Video per cui il creatore consente esplicitamente il download.
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
                    Casi di fair use, come il download per scopi educativi, commento o ricerca, anche se questo dipende da come utilizzi il video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Controlla sempre la descrizione del video per la sua licenza o chiedi il permesso al creatore. La funzione di salvataggio di Facebook ti permette di salvare i post per la visualizzazione personale, che è un'alternativa legale. Per stare al sicuro, rispetta le norme sul copyright e considera di chiedere ai creatori prima di scaricare.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rischi del download di video da Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pericoli da evitare durante il download
            </h2>
            <p className="section-muted mb-4">
              Scaricare video da Facebook può essere estremamente comodo, ma comporta rischi se utilizzi strumenti non affidabili o ignori i limiti legali. Conoscere questi rischi ti aiuta a proteggere il tuo dispositivo e a rimanere al sicuro. Ecco i principali da tenere d'occhio.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware da siti sospetti"
              >
                Molti siti di download hanno pulsanti falsi, pop-up pubblicitari o script nascosti <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">che installano virus o malware</a>. Questi possono danneggiare il tuo dispositivo o rubare dati. Usa piattaforme affidabili come videodownload.io per evitarlo.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Problemi legali">
                Scaricare senza permesso viola le regole di Facebook e potrebbe portare al ban dell'account o, in rari casi, ad azioni legali da parte dei titolari del copyright. Controlla prima la licenza del video.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="File di scarsa qualità"
              >
                I siti inaffidabili spesso forniscono video sfocati o danneggiati che non si riproducono correttamente, sprecando tempo e spazio di archiviazione.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Rischi per la privacy">
              I siti sospetti potrebbero tracciare la tua attività, raccogliere informazioni personali o vendere i tuoi dati a terzi. Scegli uno strumento che non richieda permessi non necessari.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Download corrotti">
              Siti mal progettati potrebbero darti file incompleti che non si aprono, lasciandoti frustrato.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Preoccupazioni etiche"
              >
                Scaricare salta le visualizzazioni o gli annunci, il che può danneggiare i creatori che dipendono dal coinvolgimento per il reddito. Supporta i creatori guardando online quando possibile.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sovraccarico di archiviazione"
              >
                Scaricare molti video, specialmente in alta qualità, può riempire rapidamente lo spazio di archiviazione del tuo dispositivo. Gestisci i tuoi download per evitarlo.
              </FeatureCard>
            </div>
            <p className="section-muted">
            Utilizzare uno strumento sicuro e affidabile come videodownload.io e rispettare le norme sul copyright può aiutarti a evitare questi rischi e scaricare in sicurezza.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché usare videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              La tua scelta affidabile per i download da Facebook
            </h2>
            <p className="section-muted mb-4">
            Abbiamo lanciato videodownload.io per fornire un modo pulito, veloce e sicuro per scaricare video da Facebook senza i rischi dei siti sospetti. Il nostro obiettivo era rendere il download semplice e sicuro per tutti. Ecco sei motivi per sceglierci.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sicuro e senza malware">
              Il nostro sito non ha annunci pop-up, link falsi o script dannosi, mantenendo il tuo dispositivo al sicuro da virus o spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Facile da usare">
              Incolla il link, clicca su scarica e hai finito. Nessun passaggio complicato o competenze tecniche richieste.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Elaborazione veloce">
                I nostri server gestiscono i video rapidamente, consegnandoti i download in pochi secondi, anche per live stream o contenuti di gruppo.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Formati flessibili">
                Scegli MP4 per i video o MP3 per l'audio, con opzioni di qualità come 720p o 1080p per soddisfare le tue esigenze.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completamente gratuito">
                Scarica video illimitati senza pagare nulla. Nessun abbonamento o costo nascosto, mai.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Protezione della privacy">
                Non tracciamo i tuoi download, non memorizziamo i tuoi dati, né condividiamo le tue informazioni, quindi la tua attività rimane privata.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Domande comuni su videodownload.io e i download da Facebook
            </h2>
            <p className="section-muted mb-4">
              Ecco le risposte alle domande più comuni sull'utilizzo di videodownload.io per scaricare video da Facebook, così puoi iniziare a scaricare con sicurezza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. videodownload.io è gratuito?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, la nostra piattaforma è completamente gratuita al 100%. Scarica tutti i video che vuoi senza costi o limiti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Devo installare un software per scaricare?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, tutto funziona tramite il tuo browser. Non sono richieste app, estensioni o download, mantenendo tutto semplice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Posso scaricare live stream o video di gruppo di Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, supportiamo il download di live stream e video di gruppo, purché tu abbia accesso al contenuto. Basta incollare il link.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. videodownload.io è sicuro?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assolutamente. Il nostro sito è sicuro, senza annunci pop-up o link rischiosi. Diamo priorità alla tua sicurezza e testiamo regolarmente la nostra piattaforma.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Posso scaricare video di alta qualità?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, puoi scaricare nella massima qualità disponibile, come 720p o 1080p, in base al video originale di Facebook.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Cosa fare se un video non si scarica?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Controlla l'URL e la tua connessione internet. Se continua a non funzionare, contatta il nostro team di supporto e lo risolveremo rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Posso salvare solo l'audio da un video di Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, la nostra funzione MP3 ti consente di estrarre l'audio da qualsiasi video, perfetto per musica, discorsi o clip.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Scaricare video da Facebook è legale?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Dipende. Le regole di Facebook vietano il download senza permesso. I video di pubblico dominio, con Creative Commons o con l'approvazione del creatore sono generalmente accettabili. Il fair use potrebbe applicarsi per educazione o commento, ma controlla sempre la licenza per stare al sicuro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a scaricare ora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ottieni i tuoi video di Facebook in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Processo veloce e semplice
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
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video da Facebook
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
                        Scarica video da {p.name}
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
      <FeatureCard icon={VideoIcon} title="Download di video di alta qualità">
        Scegli tra risoluzioni come 720p o 1080p, a seconda di ciò che il video di Facebook offre. Che si tratti di un live stream o di un breve clip, puoi scegliere la migliore qualità senza affrontare impostazioni complesse.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di download rapide">
        I nostri server catturano i video di Facebook rapidamente. La maggior parte dei download si completa in meno di un minuto, in base alla tua velocità internet e alla lunghezza del video, quindi non rimani in attesa.
      </FeatureCard>
      <FeatureCard icon={Music} title="Opzione di estrazione audio">
        Hai bisogno solo del suono? Converti i video di Facebook in file MP3 con un clic. Perfetto per salvare musica, discorsi o clip in stile podcast per l'uso offline.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Nessun software richiesto">
        Scarica video direttamente dal nostro sito web utilizzando qualsiasi browser sul tuo telefono, tablet o computer. Non sono necessarie app o programmi extra, mantenendo tutto pulito e facile.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Supporto per video Live e di gruppo">
        Salva video da post di Facebook, live stream o contenuti di gruppi privati (se hai accesso). Basta incollare il link e gestiremo il resto, anche per tipi di contenuti unici.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interfaccia sicura e senza pubblicità">
        Il nostro sito non ha annunci pop-up, pulsanti falsi o reindirizzamenti rischiosi. Ottieni un'esperienza pulita e sicura ogni volta, così puoi scaricare senza preoccuparti di virus.
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
      <StepCard step={1} title="Copia l'URL del video di Facebook">
        <a href="http://www.facebook.com">Apri Facebook</a> sulla tua app o browser, trova il video, il live stream o il post di gruppo che desideri e copia il suo URL. Clicca sui tre punti sul post e seleziona "Copia link" oppure prendi l'URL dalla barra degli indirizzi del browser.
      </StepCard>
      <StepCard step={2} title="Incolla l'URL sul nostro sito">
        Vai su videodownload.io in qualsiasi browser. Sulla nostra homepage, trova la barra di download e incolla il link di Facebook copiato. Controlla l'URL per assicurarti che sia corretto.
      </StepCard>
      <StepCard step={3} title="Elaboriamo il video">
        Clicca sul pulsante "Download". Il nostro sistema recupererà il video e lo preparerà per te in pochi secondi. Scegli il formato, come MP4 per i video o MP3 per l'audio, e la qualità se richiesto.
      </StepCard>
      <StepCard step={4} title="Salva il tuo video di Facebook">
        Quando appare il link di download, cliccaci sopra per salvare il video sul tuo dispositivo. Rinomina il file se vuoi mantenere i tuoi download organizzati per un accesso facile in seguito.
      </StepCard>
    </div>
  );
}
