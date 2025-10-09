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
    title: "Baixar Vídeo Twitter X | Grátis & HD",
    description: "Baixe vídeos e posts do Twitter X em mp4, qualidade 1080p. Downloader e conversor de vídeos online grátis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Baixar vídeo do Twitter
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole uma URL de vídeo ou post do Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe Vídeos do Twitter X Rapidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Seu Guia Rápido para Salvar Clipes Offline
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como Baixar Vídeos do Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Um Guia Claro, Passo a Passo para Salvar Vídeos sem Esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Obter vídeos do Twitter X em seu dispositivo é simples com
            videodownload.io. Siga estes quatro passos simples para
            baixar qualquer vídeo em minutos. Cada passo é projetado para ser
            intuitivo, mesmo se você não for experiente em tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Baixar Vídeo Twitter X
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Que Baixar Vídeos do Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores Casos de Uso
            </h2>
            <p className="section-muted mb-4">
              O Twitter X se move em velocidade vertiginosa, com vídeos se perdendo na inundação de posts. Baixar permite que você mantenha os clipes que se destacam, transformando rolagens rápidas em uma coleção pessoal. Não se trata de salvar tudo, mas de manter o que traz alegria, informa ou inspira. Você controla sua coleção, segura de posts excluídos ou mudanças no aplicativo.
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
                    Salve clipes de notícias ou tutoriais para voos, trens ou áreas com Wi-Fi ruim. Pais baixam animações divertidas para as crianças assistirem em longas viagens de carro, sem estresse de buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilização de Conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Criadores pegam clipes virais para remixar em seus próprios posts, adicionando comentários ou edições. Um jornalista salva um vídeo de última hora para analisar em um artigo, removendo marcas d'água para uso limpo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Backup de Seus Próprios Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se você compartilha vídeos no Twitter X, eles podem desaparecer devido a problemas de conta ou atualizações da plataforma. Baixe-os para um disco para manter seu trabalho seguro.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizado e Pesquisa
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estudantes salvam palestras de especialistas ou análises de dados para notas de estudo. Profissionais pegam atualizações do setor para compartilhar em reuniões, sem precisar pesquisar no feed novamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Compartilhando Momentos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe o clipe de marco de um amigo ou uma reação engraçada para enviar em chats de grupo ou salvar para depois. É uma maneira de manter destaques pessoais sem depender do aplicativo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Twitter X oferece flexibilidade e conveniência,
              tornando mais fácil aproveitar o conteúdo em seus próprios termos, seja por diversão,
              trabalho ou aprendizado.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem Deve Baixar Vídeos do Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas que Mais se Beneficiam do Download
            </h2>
            <p className="section-muted mb-4">
              O Twitter X é um hub para opiniões rápidas e grandes momentos, mas baixar vídeos se adapta a pessoas que usam a plataforma com intenção. É para aqueles que veem clipes como ferramentas, memórias ou inspiração, não apenas conteúdo passageiro. Se você é ativo no aplicativo e quer manter o que importa, baixar é para você.
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
                    Eles postam diariamente, obtendo ideias de vídeos em alta. Baixar permite que salvem seus próprios clipes ou estudem os de outros, como um comediante que pega um vídeo de reação para improvisar sem logos no caminho.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Jornalistas e Pesquisadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eles salvam clipes de notícias ou entrevistas para artigos ou verificação de fatos. Estudantes baixam threads de especialistas com vídeos para projetos escolares, estudando offline em seu próprio ritmo.
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
                    Salve o vídeo de anúncio de um irmão ou irmã ou um clipe viral de animal de estimação para compartilhar em reuniões. É mais confiável do que esperar que o Twitter X o mantenha ao vivo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profissionais de Marketing e Proprietários de Negócios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Uma startup salva depoimentos de clientes para apresentar em sites. Gerentes de mídia social pegam clipes de concorrentes para analisar tendências ou reutilizar para outras plataformas.
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
                    Fãs de tecnologia salvam demos de programação para praticar depois. Viciados em notícias baixam histórias de última hora para assistir novamente. Até mesmo scrollers ocasionais salvam clipes motivacionais para dias difíceis.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Independentemente de seu papel ou estilo de vida, baixar vídeos do Twitter X pode
              economizar tempo, dados e esforço enquanto mantém seu conteúdo favorito
              acessível.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É Legal Baixar Vídeos do Twitter X?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O Que Você Precisa Saber Sobre a Lei
            </h2>
            <p className="section-muted mb-4">
              Os vídeos são protegidos por direitos autorais de seus criadores sob leis como o DMCA nos EUA. Salvar para visualização privada, como assistir a um clipe de notícias offline, geralmente conta como uso justo. Mas compartilhar sem permissão ou usar para lucro pode levar a problemas legais. Música ou narrações em vídeos podem ter camadas extras de direitos autorais, embora salvamentos pessoais curtos raramente enfrentem problemas.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando é Permitido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se o criador permite downloads ou o conteúdo é de domínio público, você está seguro. Uso educacional, como mostrar um clipe em sala de aula, geralmente se qualifica como uso justo. Verifique as legendas dos posts para permissões. Mantenha privado e credite criadores se compartilhar para ficar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Os Riscos Associados ao Download de Vídeos do Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos Potenciais e Como Evitá-los
            </h2>
            <p className="section-muted mb-4">
              Downloaders de terceiros parecem fáceis, mas os duvidosos podem causar grandes problemas. Nem todos os sites são confiáveis, e clicar descuidadamente pode prejudicar seu dispositivo ou dados. Conheça os riscos antes de começar a baixar para evitar problemas mais tarde.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Sites não confiáveis escondem vírus em arquivos de vídeo, infiltrando spyware ou ransomware. Um download ruim pode bloquear seus arquivos ou roubar senhas. Algumas ferramentas foram pegas com keyloggers, transformando um salvamento rápido em uma violação de dados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de Phishing">
                Páginas de download falsas imitam o login do Twitter X, capturando suas credenciais se você as inserir. Ou anúncios promovem "atualizações" que instalam rastreadores, observando sua atividade além da plataforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de Qualidade"
              >
                Sites ruins comprimem vídeos, causando reprodução irregular ou perda de áudio. Você queria um clipe de notícias claro, mas recebe um arquivo com falhas.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamentos de Privacidade">
                Alguns sites registram seus downloads, vendendo seu IP ou escolhas de vídeo para anunciantes. Hackers podem obter esses dados, levando a spam ou golpes direcionados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Banimentos do Twitter X">
                Uso pesado de ferramentas de terceiros pode sinalizar sua conta, especialmente para criadores. Você pode perder seu perfil ou seguidores da noite para o dia.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de Armazenamento"
              >
                Salvar muitos vídeos consome espaço, deixando telefones ou discos lentos. Arquivos corrompidos podem travar players, perdendo tempo para consertar.
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
              Seu Parceiro Confiável para Downloads do Twitter X
            </h2>
            <p className="section-muted mb-4">
              Iniciamos o videodownload.io em 2022 porque estávamos cansados de ferramentas duvidosas e aplicativos com bugs. Como usuários do Twitter X, queríamos uma maneira rápida e limpa de salvar vídeos sem riscos. Somos uma pequena equipe, não uma grande empresa, focada em tornar os downloads simples e seguros. Milhões de usuários confiam em nós sem violações de dados, e continuamos melhorando com base em seus feedbacks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de Cinco Segundos">
                Downloads completam mesmo em dias movimentados.
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
                De telefones a laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Seguro">
                Nenhum dado mantido após sua saída.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas Frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perguntas Comuns Sobre Downloads do Twitter X
            </h2>
            <p className="section-muted mb-4">
              Compilamos respostas para as perguntas mais frequentes sobre o uso do
              videodownload.io e o download de vídeos do Twitter X para ajudá-lo a
              começar com confiança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, lidamos apenas com posts públicos. Vídeos protegidos ou privados precisam de permissão do criador, e respeitamos isso para manter as coisas legítimas.
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
                  Nossos arquivos são limpos e leves, então sem lentidão. Mas salvar muitos vídeos pode encher o armazenamento, então fique de olho no seu espaço.
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
                  O Twitter X adiciona logos para rastrear compartilhamentos, mas puxamos o arquivo original e os removemos para um salvamento limpo que você pode usar livremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvar apenas o áudio de um vídeo do Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, escolha MP3 após colar o link. Perfeito para pegar clipes de podcast ou sons em alta sem o vídeo.
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
                  Verifique se o link é público e começa com x.com. Tente outro navegador ou limpe o cache. Nosso chat de suporte resolve problemas rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Há limites no tamanho do vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Lidamos com vídeos de até 60 minutos, embora a maioria dos clipes do Twitter X sejam curtos. Os mais longos demoram um pouco, mas baixam completamente.
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
                  Os criadores podem ver que baixei o vídeo deles?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Twitter X não os notifica. Seu download permanece privado, sem alertas para quem postou.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a Salvar Vídeos do Twitter X Agora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtenha Seus Clipes Offline em Segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar Link do Post do Twitter X
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Colar em Nosso Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Baixar Vídeo Limpo
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar Vídeo Twitter X
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore Mais Downloaders
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
                        Baixar Vídeo {p.name}
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
      <FeatureCard icon={VideoIcon} title="Qualidade de Vídeo Nítida">
        Salve vídeos do Twitter X em sua melhor resolução, até 1080p se o post original oferecer. Sem quadros desfocados ou cores opacas ao assistir depois. Puxamos o arquivo bruto diretamente dos servidores do Twitter X, mantendo cada detalhe nítido para aquele clipe viral ou atualização de notícias.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sem Marcas d'Água ou Branding">
        O Twitter X adiciona seu logo ou nome de usuário a vídeos salvos através de seu aplicativo, poluindo a visualização. Removemos tudo isso, dando a você um clipe limpo pronto para compartilhar ou editar. Assista àquele momento engraçado ou discurso principal sem texto bloqueando a tela.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em Qualquer Dispositivo">
        Use seu telefone, tablet, laptop ou desktop, e funciona suavemente. Não precisa instalar aplicativos ou lidar com software extra. Abra nosso site em seu navegador, cole o link e baixe. Testado em tudo, desde Androids econômicos até PCs de ponta, sempre é confiável.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de Download Rápidas">
        Ninguém quer esperar. Nossa ferramenta pega vídeos do Twitter X em segundos, geralmente menos de 10 para a maioria dos clipes. Usamos servidores próximos aos do Twitter X para extrações rápidas, para que você possa salvar um vídeo de reação ou opinião quente durante uma pausa de rolagem rápida.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalmente Grátis para Usar">
        Sem taxas, sem cadastros, sem cobranças surpresa. Baixe quantos vídeos quiser, todos os dias, sem limites. Mantemos grátis para que você possa salvar aquele meme ou clipe de notícias sem encontrar um paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Downloads Seguros e Privados">
        Suas informações permanecem seguras. Não guardamos seus links ou vídeos após o download. Sem rastreamento, sem registros e sem anúncios de spam. O processo é limpo, mantendo seu dispositivo livre de bagunça ou riscos.
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
      <StepCard step={1} title="Pegue o Link do Vídeo do Twitter X">
        <a href="http://www.x.com">Abra o Twitter X</a> no seu telefone ou navegador. Encontre o vídeo que você gosta, talvez um meme rápido ou destaque de conferência. Clique no ícone de compartilhar abaixo do post, uma pequena seta apontando para cima. Do menu, escolha "Copiar link para o Post". Isso copia a URL completa, como x.com/username/status/123456. Verifique se está correto.
      </StepCard>
      <StepCard step={2} title="Cole o Link em Nossa Ferramenta">
        Vá para videodownload.io em seu navegador. Você verá uma caixa rotulada "Cole o link do Twitter X aqui". Clique dentro e cole o link que você copiou. Certifique-se de que começa com x.com para evitar problemas. Apenas posts públicos funcionam; vídeos privados ou protegidos não serão baixados.
      </StepCard>
      <StepCard step={3} title="Buscamos e Preparamos o Vídeo">
        Clique no botão azul "Download" ao lado da caixa. Nosso sistema puxa o vídeo dos servidores do Twitter X em segundos. Removemos todas as marcas d'água e verificamos a qualidade, para que você obtenha um clipe suave. O áudio permanece claro, sem falhas ou som faltando.
      </StepCard>
      <StepCard step={4} title="Salve o Arquivo em Seu Dispositivo">
        Você verá opções: MP4 para o vídeo completo com áudio ou MP3 apenas para o som. Escolha MP4 para a maioria dos clipes. Toque para baixar, e ele vai para sua pasta de Downloads ou galeria do telefone. Nomeie algo simples, como "meme_clip.mp4", antes de salvar. Reproduza para ter certeza de que está perfeito.
      </StepCard>
    </div>
  );
}
