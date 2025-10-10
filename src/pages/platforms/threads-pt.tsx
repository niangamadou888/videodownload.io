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

export default function ThreadsPagePT() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeos do Threads | Grátis & HD",
    description: "Baixe vídeos e postagens do Threads em mp4, qualidade 1080p. Baixador e conversor de vídeos online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Threads Video
          </h1>
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole a URL de um vídeo ou postagem do Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe Vídeos do Threads Rapidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Seu Guia Simples para Salvar Clipes Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como Baixar Vídeos do Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Um Guia Claro, Passo a Passo, para Salvar Vídeos Sem Esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Obter vídeos do Threads no seu dispositivo é simples com
            videodownload.io. Siga estes quatro passos simples para
            baixar qualquer vídeo em minutos. Cada passo é projetado para ser
            intuitivo, mesmo se você não for experiente em tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Download Threads Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Que Baixar Vídeos do Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores Casos de Uso
            </h2>
            <p className="section-muted mb-4">
              O Threads se move rápido, com postagens sendo enterradas sob novas conversas. Baixar permite que você mantenha os vídeos que chamam sua atenção, transformando rolagens rápidas em uma coleção pessoal. É sobre salvar o que desperta alegria, informa ou inspira, não apenas coletar clipes aleatórios. Você controla sua coleção, segura de postagens excluídas ou mudanças no aplicativo.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualização Offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve dicas de viagem ou clipes de treino para voos, deslocamentos ou locais com Wi-Fi ruim. Pais baixam esquetes ou músicas adequadas para crianças para viagens de carro, mantendo as crianças felizes sem buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilização para Criadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influenciadores pegam clipes virais para remixar em seu conteúdo, adicionando seu próprio toque. Blogueiros salvam vídeos de moda ou comida para compartilhar em outras plataformas, pulando marcas d'água para edições limpas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arquivar Suas Próprias Postagens
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se você compartilha vídeos no Threads, eles podem desaparecer devido a problemas de conta ou atualizações da plataforma. Baixe-os para um drive para proteger seu trabalho, como um vlog pessoal ou promoção de marca.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizado e Inspiração
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estudantes salvam truques de estudo ou palestras motivacionais para revisão offline. Entusiastas baixam dicas de DIY ou demos de arte para praticar no seu ritmo, sem precisar pesquisar novamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Compartilhar Momentos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve uma atualização de vida de um amigo ou um clipe engraçado para enviar em chats de grupo ou guardar para depois. É uma maneira de manter memórias sem depender do aplicativo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Threads oferece flexibilidade e conveniência,
              facilitando aproveitar o conteúdo nos seus termos, seja por diversão,
              trabalho ou aprendizado.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem Deve Baixar Vídeos do Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas Que Mais Se Beneficiam do Download
            </h2>
            <p className="section-muted mb-4">
              O Threads é um hub de conteúdo rápido e pessoal, mas baixar vídeos se adapta às pessoas que o usam para criar, aprender ou se conectar. É para aqueles que veem as postagens como mais do que diversão passageira, transformando clipes em ferramentas ou lembranças. Se você é ativo no Threads e quer manter o que importa, baixar é sua jogada.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Criadores de Conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influenciadores e vloggers salvam clipes em alta para remixar para seu público, como um guru de beleza aperfeiçoando um tutorial de maquiagem. Eles também baixam suas próprias postagens, mantendo cópias limpas sem logos para edições.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entusiastas e Aprendizes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fãs de fitness salvam clipes de treino para seguir na academia. Artesãos baixam demos de DIY para experimentar em casa. É inspiração prática, pronta offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudantes e Educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professores salvam palestras motivacionais para discussões em sala de aula. Estudantes pegam truques de estudo ou lições de idiomas para revisar sem fazer login novamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Famílias e Usuários Casuais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pais salvam clipes engraçados de crianças ou atualizações familiares para compartilhar em reuniões. Amigos baixam memes virais para rir depois.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pequenas Empresas e Profissionais de Marketing
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lojas salvam elogios de clientes para apresentar em sites. Profissionais de mídia social pegam clipes em alta para analisar ou reutilizar, mantendo seu conteúdo fresco.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Não importa seu papel ou estilo de vida, baixar vídeos do Threads pode
              economizar tempo, dados e esforço enquanto mantém seu conteúdo favorito
              acessível.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É Legal Baixar Vídeos do Threads?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O Que Você Precisa Saber Sobre a Lei
            </h2>
            <p className="section-muted mb-4">
              Os vídeos são protegidos por direitos autorais de seus criadores sob leis como a <a href="https://pt.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> nos EUA. Salvar para visualização privada, como assistir a um clipe offline, geralmente conta como uso justo. Mas compartilhar sem permissão ou usar para lucro pode levar a problemas legais. Música ou narrações em vídeos podem ter camadas adicionais de direitos autorais, embora salvamentos pessoais curtos raramente enfrentem problemas.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando É Permitido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se o criador permite downloads ou o conteúdo é de domínio público, você está seguro. Uso educacional, como mostrar um clipe em sala de aula, geralmente se qualifica como uso justo. Verifique as legendas das postagens para permissões. Mantenha os downloads privados e dê crédito aos criadores se você compartilhar para ficar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Os Riscos Associados ao Download de Vídeos do Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos Potenciais e Como Evitá-los
            </h2>
            <p className="section-muted mb-4">
              Baixadores de terceiros parecem fáceis, mas os duvidosos trazem problemas reais. Nem todo site é confiável, e clicar descuidadamente pode prejudicar seu dispositivo ou dados. Conheça os riscos antes de começar para evitar problemas no futuro.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Sites não confiáveis escondem vírus em arquivos de vídeo, infiltrando spyware ou ransomware. Um download ruim pode bloquear seus arquivos ou roubar senhas. Algumas ferramentas foram pegas com keyloggers, transformando um salvamento de meme em violação de dados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de Phishing">
                Páginas de download falsas imitam o login do Threads, capturando suas credenciais se você as inserir. Ou anúncios empurram "atualizações" que instalam rastreadores, monitorando sua atividade além da plataforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de Qualidade"
              >
                Sites ruins comprimem vídeos, causando reprodução entrecortada ou perda de áudio. Você queria um tutorial claro, mas recebe um arquivo com falhas em vez disso.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamentos de Privacidade">
                Alguns sites registram seus downloads, vendendo seu IP ou escolhas de vídeo para anunciantes. Hackers podem pegar esses dados, levando a spam ou golpes direcionados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Banimentos do Threads">
                O uso pesado de ferramentas de terceiros pode sinalizar sua conta, especialmente para criadores. Você pode perder seu perfil ou seguidores da noite para o dia.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de Armazenamento"
              >
                Salvar muitos vídeos consome espaço, sobrecarregando telefones ou drives. Arquivos corrompidos podem travar players, perdendo tempo para consertar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Use sites confiáveis, escaneie downloads e considere VPNs para ficar seguro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Que Usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu Parceiro Confiável para Downloads do Threads
            </h2>
            <p className="section-muted mb-4">
              Começamos o videodownload.io em 2022 porque estávamos cansados de ferramentas duvidosas e aplicativos lentos. Como usuários do Threads, queríamos uma maneira rápida e limpa de salvar vídeos sem riscos. Somos uma equipe pequena, não uma grande empresa, focada em tornar os downloads fáceis e seguros. Milhões de usuários confiam em nós sem vazamentos de dados, e continuamos melhorando com base em seus feedbacks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de Cinco Segundos">
                Os downloads são concluídos mesmo durante horários de pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sem Anúncios ou Pop-ups">
                Apenas um site limpo.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Marcas d'Água Removidas">
                Clipes puros e utilizáveis.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvamentos Ilimitados">
                Sem limites diários.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona em Qualquer Dispositivo">
                De telefones antigos a laptops novos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Seguro">
                Nenhum dado armazenado depois que você termina.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas Frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perguntas Comuns Sobre Downloads do Threads
            </h2>
            <p className="section-muted mb-4">
              Compilamos respostas para as perguntas mais frequentes sobre usar
              videodownload.io e baixar vídeos do Threads para ajudá-lo a
              começar com confiança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, lidamos apenas com postagens públicas. Vídeos privados ou restritos precisam de permissão do criador, e respeitamos esses limites para permanecer legítimos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar vai deixar meu dispositivo lento?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nossos arquivos são limpos e leves, então sem atraso. Mas salvar muitos vídeos pode encher o armazenamento, então fique de olho no seu espaço.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Por que meu vídeo está sem marca d'água?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Threads adiciona logos para rastrear compartilhamentos, mas puxamos o arquivo bruto e os removemos para um salvamento limpo que você pode usar livremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvar apenas o áudio de um vídeo do Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, escolha MP3 depois de colar o link. Ótimo para pegar música ou narrações de clipes sem os visuais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  E se meu download falhar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifique se o link é público e começa com threads.net. Tente outro navegador ou limpe o cache. Nosso chat de suporte resolve problemas rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Há um limite no tamanho do vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Lidamos com vídeos de até 60 minutos, embora a maioria dos clipes do Threads seja curta. Os mais longos demoram um pouco, mas fazem download completo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês armazenam meus vídeos baixados?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  De jeito nenhum. Processamos instantaneamente e excluímos tudo depois. Seus arquivos ficam no seu dispositivo, não em nossos servidores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Os criadores podem ver se eu baixei o vídeo deles?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Threads não os notifica. Seu download permanece privado, sem alertas para o criador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a Salvar Vídeos do Threads Hoje
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pegue Seus Clipes Favoritos em Segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar Link da Postagem do Threads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Colar no Nosso Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Baixar Vídeo Limpo
              </div>
            </div>
            <div className="mt-2">
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Threads Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore Mais Baixadores
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe de suas plataformas favoritas
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
                  to={`/pt/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Downloads Claros e Nítidos">
        Salve vídeos do Threads na melhor qualidade, até 1080p se a postagem original permitir. Sem quadros borrados ou cores desbotadas ao reproduzir. Pegamos o arquivo diretamente dos servidores do Threads, mantendo todos os detalhes nítidos para aquela esquete rápida ou dica de estilo.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sem Marcas d'Água ou Logos">
        O Threads adiciona sua marca aos vídeos salvos pelo aplicativo, poluindo a visualização. Removemos tudo isso, dando a você um clipe limpo pronto para compartilhar ou editar. Assista aquele momento engraçado ou tutorial sem sobreposições de texto bloqueando a ação.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em Qualquer Dispositivo">
        Use seu telefone, tablet, laptop ou desktop, e funciona perfeitamente. Sem aplicativos ou software extra necessários. Apenas abra nosso site no seu navegador, cole o link e baixe. Testado em tudo, de Androids antigos a Macs novos, sempre confiável.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de Download Rápidas">
        Esperar mata a vibe. Nossa ferramenta puxa vídeos do Threads em segundos, geralmente menos de 10 para a maioria dos clipes. Usamos servidores próximos aos do Threads para capturas rápidas, para que você possa salvar um clipe de dança ou opinião durante um intervalo curto.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente Grátis para Usar">
        Sem taxas, sem cadastros, sem custos ocultos. Baixe quantos vídeos quiser, todos os dias, sem limites. Mantemos gratuito para que você possa salvar aquele meme viral ou hack de vida sem encontrar um paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo Seguro e Privado">
        Suas informações permanecem seguras. Não armazenamos seus links ou vídeos depois que você baixa. Sem rastreamento, sem logs e sem anúncios de spam. O processo é limpo, mantendo seu dispositivo livre de lixo ou riscos.
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
      <StepCard step={1} title="Copie o Link do Vídeo do Threads">
        <a href="http://www.threads.net">Abra o Threads</a> no seu telefone ou navegador. Encontre o vídeo que você gosta, talvez uma receita rápida ou um reel de moda. Toque no ícone de compartilhamento, um avião de papel, no canto inferior direito da postagem. No menu, selecione "Copiar link". Isso pega a URL completa, como threads.net/@username/post/abc123. Verifique se está correto.
      </StepCard>
      <StepCard step={2} title="Cole o Link em Nossa Ferramenta">
        Vá para videodownload.io no seu navegador. Você verá uma caixa rotulada "Cole o link do Threads aqui". Clique dentro e cole o link copiado. Certifique-se de que começa com threads.net para evitar erros. Apenas postagens públicas funcionam; vídeos privados ou restritos não farão download.
      </StepCard>
      <StepCard step={3} title="Buscamos e Preparamos o Vídeo">
        Clique no botão azul "Baixar" ao lado da caixa. Nosso sistema puxa o vídeo dos servidores do Threads em segundos. Removemos quaisquer marcas d'água e verificamos a qualidade, para que você obtenha um clipe suave. O áudio permanece claro, sem falhas ou som ausente.
      </StepCard>
      <StepCard step={4} title="Salve o Clipe no Seu Dispositivo">
        Você verá opções: MP4 para o vídeo completo com som ou MP3 apenas para o áudio. Escolha MP4 para a maioria dos clipes. Toque para baixar, e ele chega na sua pasta de Downloads ou galeria do telefone. Nomeie algo simples, como "dica_estilo.mp4", antes de salvar. Reproduza para confirmar que está bom.
      </StepCard>
    </div>
  );
}
