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

export default function PinterestPageIt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Scaricare Video Pinterest | Gratis & HD",
    description:
      "Scarica video e pin di Pinterest in mp4, qualità 1080p. Downloader e convertitore video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Box di download minimale */}
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Incolla l'URL di un video o pin di Pinterest"
            />
          </div>
          {/* Funzionalità */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funzionalità
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Scarica facilmente i video di Pinterest
          </h2>
          <p className="text-muted-foreground mb-6">
            La guida essenziale per salvare clip creative e guardarle offline
          </p>

          <EnhancedFeatures />

          {/* Come scaricare */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Come scaricare video da Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Procedura chiara, passo dopo passo, senza complicazioni
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io porti un video Pinterest sul tuo dispositivo in pochi minuti. Segui questi quattro passaggi
            intuitivi — anche se non sei esperto di tecnologia — e scarica qualsiasi clip in un attimo.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Scarica video Pinterest
              </Button>
            </a>
          </div>

          {/* Perché scaricare */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scaricare video da Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              I migliori casi d'uso
            </h2>
            <p className="section-muted mb-4">
              Pinterest è una miniera di idee, ma il feed si aggiorna in fretta e le ispirazioni spariscono. Scaricare i video
              che ti colpiscono significa trasformare le scoperte temporanee in una raccolta personale. Non è questione di
              accumulare tutto, ma di preservare ciò che alimenta creatività e progetti, al riparo da bug o eliminazioni.
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
                    Salva tutorial fai-da-te o guide di viaggio per usarli in aereo, in campeggio o in zone senza Wi-Fi. I
                    genitori scaricano attività creative per intrattenere i bambini anche senza connessione.
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
                    Blogger e creator salvano clip décor o lifestyle per rielaborarle con commenti e suggerimenti. Le piccole
                    aziende recuperano demo prodotto da usare su altri canali, senza watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiviare i propri pin
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se pubblichi ricette, tutorial o portfolio, un cambio di bacheca o un bug può farli sparire. Scarica i tuoi
                    video per tenerli al sicuro in locale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Studio e pianificazione
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Studenti e appassionati salvano lezioni artistiche o suggerimenti di studio per allenarsi offline.
                    Wedding planner e organizzatori scaricano idee per mostrarle ai clienti senza cercarle di nuovo.
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
                    Conserva consigli di giardinaggio o routine di allenamento per consultarli quotidianamente. Una semplice
                    idea salvata può diventare la base del tuo prossimo progetto.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Scaricare video Pinterest ti dà flessibilità e praticità: puoi sfruttare l'ispirazione quando e dove vuoi.
            </p>
          </div>

          {/* A chi è utile */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Chi dovrebbe scaricare video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Le persone che ne traggono il massimo
            </h2>
            <p className="section-muted mb-4">
              Pinterest è pensato per chi trasforma l'ispirazione in azione. Se usi la piattaforma per creare, pianificare o
              imparare — non solo per scorrere — il download è lo strumento giusto per te.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creator e blogger
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salvano clip DIY o moda per reinterpretarle con la propria voce. Mantengono copie pulite dei loro video,
                    pronte per riutilizzi futuri.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbisti e amanti del fai-da-te
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Artigiani e appassionati di craft seguono tutorial passo passo anche offline. Chi cura il giardino scarica
                    guide di semina per consultarle sul campo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Event planner e piccole attività
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Organizzatori di matrimoni salvano idee di allestimento da proporre ai clienti. Negozi e artigiani usano
                    video prodotto per aumentare la fiducia sui loro canali.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Genitori e docenti
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maestri e educatori archiviano attività creative per la classe. Genitori scaricano idee sensoriali per
                    intrattenere i più piccoli senza schermi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proprietari di casa e ristrutturatori
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva spunti per il restyling di una cucina o idee salvaspazio per pianificare lavori futuri. Anche chi
                    usa Pinterest solo per motivarsi scarica clip motivazionali per tenerle a portata di mano.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualunque sia il tuo stile di vita, scaricare video Pinterest ti fa risparmiare tempo, traffico dati e fatica,
              mantenendo l'ispirazione a portata di clic.
            </p>
          </div>

          {/* Aspetti legali */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              È legale scaricare video Pinterest?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Cosa sapere sui diritti d'autore
            </h2>
            <p className="section-muted mb-4">
              I video appartengono ai loro creatori e sono protetti da normative come il DMCA. Salvare un tutorial per uso
              personale — ad esempio per esercitarsi offline — rientra spesso nel fair use. Condividere senza citare o usare a
              scopo commerciale può però causare problemi legali. Le tracce audio possono avere ulteriori vincoli.
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
                    Se l'autore permette il download o il contenuto è di dominio pubblico, procedi serenamente. L'uso didattico —
                    per esempio in classe — è spesso tollerato. Mantieni i video per uso privato e cita sempre la fonte quando
                    li condividi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rischi */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Rischi legati al download di video Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Minacce potenziali e come evitarle
            </h2>
            <p className="section-muted mb-4">
              Non tutti i downloader sono affidabili. Alcuni siti non protetti possono compromettere dispositivo e dati. Prima
              di scaricare, valuta sempre l'affidabilità della fonte.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware e virus">
                Piattaforme dubbie nascondono spyware o ransomware nei file. Un singolo download potrebbe bloccare i tuoi dati
                o rubare credenziali.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Pagine fasulle copiano la schermata di login Pinterest per sottrarre accessi. Pop-up di finti aggiornamenti
                installano traccianti.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualità scadente">
                Alcuni strumenti comprimono eccessivamente i video, generando scatti o audio assente. Il risultato diventa
                inutilizzabile.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Perdita di privacy">
                Alcuni servizi memorizzano e rivendono IP e preferenze. Questi dati possono finire in mani di spammer o truffatori.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Rischio di blocco account">
                Un uso intensivo di downloader esterni può segnalare l'account Pinterest, soprattutto per i creator attivi.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Memoria piena">
                Scaricando molti file saturi rapidamente lo storage e rallenti il dispositivo. File corrotti possono mandare in
                crash il player.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Affidati a siti sicuri, analizza i file e valuta l'uso di una VPN per maggior protezione.
            </p>
          </div>

          {/* Perché videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Perché scegliere videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Il partner affidabile per Pinterest
            </h2>
            <p className="section-muted mb-4">
              videodownload.io è nato nel 2022 dalla frustrazione verso strumenti lenti e rischiosi. Da appassionati di Pinterest
              volevamo un metodo rapido e sicuro per archiviare le idee. Siamo un team snello dedicato a rendere il download
              semplice e protetto, con milioni di utenti soddisfatti e zero fughe di dati.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Velocità immediata">
                Download completati in pochi secondi, anche nelle ore di punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Zero pubblicità">
                Un'interfaccia pulita, senza pop-up.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Nessun watermark">
                Clip pronte all'uso in progetti e presentazioni.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Download illimitati">
                Nessun tetto giornaliero.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Compatibile con tutto">
                Funziona su dispositivi datati e moderni.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Processo sicuro">
                Nessun dato memorizzato dopo il download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Domande frequenti</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tutto quello che c'è da sapere sui download Pinterest
            </h2>
            <p className="section-muted mb-4">
              Abbiamo raccolto le risposte alle domande più comuni su videodownload.io e sul download delle video pin, per
              iniziare in modo sereno.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso scaricare video da bacheche segrete?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, trattiamo solo pin pubblici. I contenuti privati richiedono permesso dal creatore e rispettiamo questo limite.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Scaricare rallenta il mio dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  I file sono leggeri e sicuri: nessun rallentamento. Controlla solo lo spazio libero se scarichi molti video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Perché il video scaricato non ha watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Estraiamo il file originale e rimuoviamo le sovrapposizioni per darti un video pulito per uso personale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso estrarre solo l'audio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sì, scegli MP3 dopo aver incollato il link per conservare esclusivamente la traccia sonora.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Cosa faccio se il download non parte?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica che l'URL sia pubblico e corretto. Prova un altro browser o svuota la cache. Il nostro supporto via chat è pronto ad aiutarti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Esiste un limite di durata?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestiamo video fino a 60 minuti. I contenuti più lunghi richiedono qualche istante in più ma vengono scaricati integralmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservate i video che scarico?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Elaboriamo la richiesta all'istante e cancelliamo tutto subito dopo. I file restano solo sul tuo dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Il creatore viene avvisato del download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pinterest non invia notifiche. Il download rimane privato.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Inizia a salvare i tuoi video Pinterest oggi stesso
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Scarica clip ispirazionali in pochi secondi
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia il link Pinterest
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
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Scarica video Pinterest
                </Button>
              </a>
            </div>
          </div>

          {/* Altri downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Scopri gli altri downloaders
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Scarica dalle piattaforme che ami
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
      <FeatureCard icon={VideoIcon} title="Qualità video eccellente">
        Salva video Pinterest nella migliore risoluzione disponibile, fino a 1080p se il pin originale lo supporta. Niente immagini sfocate o colori sbiaditi durante la riproduzione. Preleviamo il file direttamente dai server Pinterest, mantenendo ogni dettaglio nitido per quel tutorial DIY o quella ricetta.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Nessun watermark o sovrapposizione">
        <a href="https://help.pinterest.com/en/article/download-an-image">Pinterest mostra il nome utente del creatore sui video scaricati tramite la loro app</a>, ingombrando la vista. Rimuoviamo tutto questo, offrendoti una clip pulita pronta per i tuoi progetti o uso personale. Guarda quell'idea di arredamento senza testo che copre i dettagli.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funziona su qualsiasi dispositivo">
        Usa il tuo telefono, tablet, laptop o desktop, e funziona perfettamente. Nessuna app o software aggiuntivo necessario. Apri semplicemente il nostro sito nel browser, incolla il link e scarica. Testato su tutto, dai vecchi iPhone ai PC nuovi, è sempre semplice.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocità di download rapide">
        Aspettare è noioso. Il nostro strumento recupera i video Pinterest in pochi secondi, di solito meno di 10 per la maggior parte delle clip. Usiamo server vicini a Pinterest per recuperi veloci, permettendoti di salvare un video di artigianato o allenamento durante una pausa caffè.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente gratuito">
        Nessun costo, nessuna registrazione, nessun costo nascosto. Scarica tutti i video che vuoi, ogni giorno, senza limiti. Lo manteniamo gratuito così puoi salvare quella ispirazione per matrimoni o quel progetto artistico senza incontrare un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo sicuro e privato">
        Le tue informazioni restano protette. Non conserviamo i tuoi link o video dopo il download. Nessun tracciamento, nessun registro e nessuna pubblicità invasiva. Il processo è pulito, mantenendo il tuo dispositivo libero da spazzatura o rischi.
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
      <StepCard step={1} title="Copia il link video da Pinterest">
        <a href="http://www.pinterest.com">Apri Pinterest</a> sul tuo telefono o browser. Trova il video che ti piace, come un tutorial di maglia o un makeover domestico. Clicca sui tre puntini in alto a destra del pin. Dal menu, seleziona "Copia link". Questo cattura l'URL completo, qualcosa come pinterest.com/pin/123456789. Assicurati che sia esatto.
      </StepCard>
      <StepCard step={2} title="Incolla il link sul nostro sito">
        Vai su videodownload.io nel tuo browser. Vedrai una casella con scritto "Incolla qui il link Pinterest". Clicca dentro e incolla il link copiato. Verifica che inizi con pinterest.com per evitare errori. Funzionano solo i pin pubblici; i video di bacheche private o segrete non si scaricheranno.
      </StepCard>
      <StepCard step={3} title="Recuperiamo e puliamo il video">
        Clicca sul pulsante verde "Download" accanto alla casella. Il nostro sistema preleva il video dai server Pinterest in pochi secondi. Rimuoviamo eventuali watermark e assicuriamo una qualità solida. L'audio rimane chiaro, così non perdi passaggi in quella ricetta o guida artigianale.
      </StepCard>
      <StepCard step={4} title="Salva la clip sul tuo dispositivo">
        Otterrai opzioni: MP4 per il video completo con audio o MP3 solo per l'audio. Scegli MP4 per la maggior parte delle clip. Tocca per scaricare e si salva nella cartella Download o nella galleria del telefono. Assegna un nome chiaro, come "diy_pittura.mp4", prima di salvare. Riproducilo per confermare che sia perfetto.
      </StepCard>
    </div>
  );
}
