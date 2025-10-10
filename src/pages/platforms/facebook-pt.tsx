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

export default function FacebookPagePt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeo do Facebook | Grátis & HD",
    description: "Baixe vídeos do Facebook, Reels e transmissões ao vivo em mp4, 1080p e qualidade HD. Downloader e conversor de vídeos online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download minimalista (sem outras seções da home) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole uma URL de vídeo, Reel ou Watch do Facebook"
            />
          </div>
          {/* Recursos */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Ferramentas que tornam fácil baixar vídeos do Facebook
          </h2>
          <p className="text-muted-foreground mb-6">
            Confira seis recursos que fazem do videodownload.io a melhor escolha para baixar vídeos do Facebook. Cada um foi pensado para economizar tempo, garantir qualidade e manter sua experiência segura e direta.
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Passo a passo para salvar vídeos rapidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Baixar vídeos do Facebook com o videodownload.io é simples e rápido, mesmo se você não for expert em tecnologia. Siga estes quatro passos para salvar o vídeo no seu dispositivo em poucos minutos.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Download Facebook Video
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores usos para assistir e reutilizar offline
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Facebook permite assistir ou reaproveitar conteúdos sem precisar de internet. É ótimo para economizar dados, guardar memórias ou criar novos materiais. Veja alguns dos principais motivos para baixar vídeos do Facebook para uso pessoal ou profissional.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualização offline em qualquer lugar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve vídeos para assistir em deslocamentos, voos ou em locais sem Wi-Fi ou dados, como áreas rurais ou viagens internacionais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Criação de conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe clipes para reactions, edições ou montagens nas suas redes sociais, desde que siga as regras de direitos autorais ou tenha permissão do criador.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizado e treinamentos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve tutoriais, webinars ou vídeos passo a passo para estudar offline, como demonstrações de culinária, rotinas de treino ou dicas de negócios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Preservar memórias
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde vídeos de família, destaques de eventos ou posts de grupos que podem desaparecer se a conta for deletada ou se as configurações de privacidade mudarem.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing e negócios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Empresas podem baixar seus próprios vídeos ou lives para usar offline em apresentações, anúncios ou reuniões com clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Economizar dados móveis
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe usando o Wi-Fi para evitar gastar dados móveis, principalmente em vídeos longos ou em alta qualidade quando o plano é limitado.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entretenimento offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monte uma coleção de vídeos engraçados, clipes musicais ou lives para assistir offline durante momentos livres ou viagens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Compartilhamento em comunidade
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve vídeos de grupos ou páginas do Facebook para compartilhar offline em workshops, aulas ou eventos comunitários sem internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Facebook dá flexibilidade para aproveitar ou reutilizar conteúdos quando e onde quiser, sem depender de conexão.
            </p>
          </div>

          {/* Quem deve baixar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas que se beneficiam do acesso offline
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Facebook é útil para quem deseja assistir ou usar conteúdo offline. Não é só para usuários casuais - alguns grupos ganham tempo e praticidade ao baixar. Veja quem deve considerar essa opção e por quê.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Criadores de conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influenciadores, YouTubers ou TikTokers podem baixar vídeos para reactions, colabs ou edições, desde que respeitem os direitos autorais ou tenham permissão do criador.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudantes e educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve conteúdos educacionais, como aulas, tutoriais ou webinars, para estudar offline ou usar em sala, especialmente em locais com pouca conexão.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajantes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe entretenimento, como clipes virais ou lives, para assistir offline em viagens sem acesso à internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Empreendedores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde seus próprios vídeos, lives ou anúncios para usar offline em marketing, propostas ou apresentações para clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Guardiões de memórias
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Preserve vídeos pessoais, momentos em família ou posts de grupo que podem sumir com mudanças de conta ou de privacidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fãs de fitness
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe treinos, sessões de ioga ou dicas de saúde para acompanhar offline em casa ou na academia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Líderes comunitários
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve vídeos de grupos ou conteúdo de páginas para compartilhar offline em reuniões, eventos ou workshops sem depender de Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbistas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe vídeos para se inspirar, como projetos DIY ou tutoriais de artesanato, e consulte offline enquanto trabalha nos seus hobbies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legalidade */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do Facebook?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Entenda as regras legais
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Facebook é um tema delicado. Os Termos de Serviço da plataforma não permitem baixar conteúdo sem a permissão do criador ou do próprio Facebook. Pela lei de direitos autorais dos EUA, salvar vídeos protegidos sem autorização é ilegal e pode gerar processos, embora isso seja raro para uso pessoal. As exceções incluem:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Vídeos em domínio público
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vídeos que fazem parte do domínio público e não são protegidos por direitos autorais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Licenças Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vídeos com licenças Creative Commons, que podem permitir download para usos específicos, como compartilhar ou remixar, desde que você siga os termos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permissão do criador
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vídeos em que o criador autoriza explicitamente o download.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Casos de fair use
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Situações de fair use, como download para educação, comentários ou pesquisa, embora isso dependa de como você pretende usar o vídeo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sempre verifique a descrição do vídeo para saber a licença ou peça permissão ao criador. O recurso de salvar do Facebook permite marcar posts para ver depois, uma alternativa legal. Para ficar tranquilo, respeite os direitos autorais e considere pedir autorização antes de baixar.
            </p>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos ao baixar vídeos do Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos para evitar ao fazer downloads
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Facebook é prático, mas traz riscos se você usar ferramentas duvidosas ou ignorar os limites legais. Conhecer esses riscos ajuda a proteger seu dispositivo e manter tudo seguro. Veja os principais pontos de atenção.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware de sites suspeitos"
              >
                Muitos sites de download exibem botões falsos, pop-ups ou scripts escondidos <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">que instalam vírus ou malware</a>. Isso pode danificar seu dispositivo ou roubar dados. Use plataformas confiáveis como o videodownload.io para evitar esse problema.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Questões legais">
                Baixar sem permissão viola as regras do Facebook e pode gerar banimentos ou, em casos raros, ações legais dos detentores de direitos autorais. Verifique a licença do vídeo antes de continuar.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Arquivos de baixa qualidade"
              >
                Sites pouco confiáveis costumam entregar vídeos borrados ou corrompidos que nem reproduzem direito, desperdiçando tempo e espaço.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Riscos à privacidade">
                Sites suspeitos podem rastrear sua atividade, coletar informações pessoais ou vender seus dados para terceiros. Prefira uma ferramenta que não peça permissões desnecessárias.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Downloads corrompidos">
                Plataformas mal feitas podem entregar arquivos incompletos que nem abrem, causando frustração.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Questões éticas"
              >
                Baixar pula visualizações e anúncios, o que pode prejudicar criadores que dependem do engajamento para gerar renda. Apoie-os assistindo online sempre que possível.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Armazenamento lotado"
              >
                Baixar muitos vídeos, especialmente em alta qualidade, pode lotar a memória do seu aparelho rapidamente. Gerencie seus downloads para evitar isso.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usar uma ferramenta segura e confiável como o videodownload.io e respeitar as regras de direitos autorais ajuda a evitar esses riscos e baixar com tranquilidade.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              A opção confiável para baixar do Facebook
            </h2>
            <p className="section-muted mb-4">
            Criamos o videodownload.io para oferecer uma forma limpa, rápida e segura de baixar vídeos do Facebook sem os riscos de sites duvidosos. Nosso objetivo é facilitar o download para qualquer pessoa. Veja seis motivos para nos escolher.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sem malware e seguro">
              Nosso site não tem pop-ups, links falsos ou scripts maliciosos, mantendo seu dispositivo protegido de vírus ou spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fácil de usar">
              Cole o link, clique em baixar e pronto. Nada de etapas complicadas ou habilidades técnicas.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Processamento rápido">
                Nossos servidores processam os vídeos rapidamente, entregando o download em segundos, inclusive para lives ou conteúdo de grupos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Formatos flexíveis">
                Escolha MP4 para vídeo ou MP3 para áudio, com opções de qualidade como 720p ou 1080p para atender ao que você precisa.
              </FeatureCard>
              <FeatureCard icon={Download} title="Totalmente gratuito">
                Baixe vídeos ilimitados sem pagar nada. Sem assinaturas ou taxas escondidas.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Proteção de privacidade">
                Não rastreamos seus downloads, não guardamos seus dados e não compartilhamos suas informações, mantendo sua atividade privada.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perguntas frequentes sobre o videodownload.io e downloads do Facebook
            </h2>
            <p className="section-muted mb-4">
              Reunimos respostas para as dúvidas mais comuns ao usar o videodownload.io para baixar vídeos do Facebook, assim você começa a baixar com confiança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. O videodownload.io é gratuito?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, nossa plataforma é 100% gratuita. Baixe quantos vídeos quiser sem taxas ou limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Preciso instalar algum programa para baixar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Tudo acontece direto no seu navegador. Sem apps, extensões ou instalações - mantendo tudo simples.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Posso baixar lives ou vídeos de grupos do Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, oferecemos suporte para lives e vídeos de grupos, desde que você tenha acesso ao conteúdo. É só colar o link.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. O videodownload.io é seguro?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Com certeza. Nosso site é seguro, sem pop-ups ou links suspeitos. Priorizamos sua segurança e testamos a plataforma regularmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Posso baixar vídeos em alta qualidade?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim. Você pode baixar na melhor qualidade disponível, como 720p ou 1080p, conforme o vídeo original do Facebook.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. E se o vídeo não baixar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifique a URL e sua conexão com a internet. Se ainda assim falhar, fale com nossa equipe de suporte que resolvemos rapidinho.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Posso baixar apenas o áudio de um vídeo do Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim. O recurso de MP3 permite extrair o áudio de qualquer vídeo, ótimo para músicas, discursos ou trechos específicos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. É legal baixar vídeos do Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Depende. As regras do Facebook proíbem baixar sem permissão. Vídeos em domínio público, com licença Creative Commons ou com autorização do criador normalmente estão liberados. O fair use pode se aplicar para educação ou comentários, mas sempre confirme a licença para evitar problemas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Comece agora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a baixar agora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe seus vídeos do Facebook em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Processo rápido e simples
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Downloads seguros, sem malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Vídeo e áudio em alta qualidade
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Facebook Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore mais downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore mais ferramentas de download
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe das suas plataformas favoritas
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
      <FeatureCard icon={VideoIcon} title="Downloads de vídeo em alta qualidade">
        Escolha resoluções como 720p ou 1080p, conforme o que o vídeo do Facebook disponibiliza. Seja uma live ou um clipe curto, você define a melhor qualidade sem lidar com ajustes complicados.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidade de download rápida">
        Nossos servidores capturam vídeos do Facebook rapidamente. A maioria dos downloads termina em menos de um minuto, dependendo da sua conexão e do tamanho do vídeo, sem perder tempo.
      </FeatureCard>
      <FeatureCard icon={Music} title="Opção de extrair áudio">
        Precisa só do som? Converta vídeos do Facebook para arquivos MP3 com um clique. Ideal para salvar músicas, discursos ou trechos de podcasts para ouvir offline.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Sem precisar de software">
        Baixe vídeos direto do nosso site usando qualquer navegador no celular, tablet ou computador. Não precisa instalar apps ou programas extras.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Suporte para lives e vídeos de grupo">
        Salve vídeos de posts, transmissões ao vivo ou conteúdo de grupos privados (quando você tem acesso). É só colar o link e nós cuidamos do resto, mesmo em formatos diferentes.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interface segura e sem anúncios">
        Nosso site não tem pop-ups, botões falsos nem redirecionamentos perigosos. Você ganha uma experiência limpa e segura para baixar sem medo de vírus.
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
      <StepCard step={1} title="Copie a URL do vídeo do Facebook">
        <a href="http://www.facebook.com">Abra o Facebook</a> no aplicativo ou navegador, encontre o vídeo, a live ou o post de grupo desejado e copie a URL. Toque nos três pontos da publicação e escolha "Copiar link" ou pegue o endereço na barra do navegador.
      </StepCard>
      <StepCard step={2} title="Cole o link no nosso site">
        Acesse o videodownload.io em qualquer navegador. Na página inicial, encontre o campo de download e cole o link do Facebook. Confira se a URL está correta.
      </StepCard>
      <StepCard step={3} title="Processamos o vídeo">
        Clique no botão "Baixar". Nosso sistema busca o vídeo e o prepara em segundos. Escolha o formato, como MP4 para vídeo ou MP3 para áudio, e a qualidade disponível.
      </StepCard>
      <StepCard step={4} title="Salve seu vídeo do Facebook">
        Quando o link de download aparecer, clique para salvar o vídeo no seu dispositivo. Renomeie o arquivo, se quiser, para manter seus downloads organizados.
      </StepCard>
    </div>
  );
}
