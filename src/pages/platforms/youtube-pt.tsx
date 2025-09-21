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

export default function YouTubePagePt() {
  const { buildUrl } = useLanguageNavigation();

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole uma URL de vídeo, Shorts ou playlist do YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Recursos que tornam o download de vídeos do YouTube simples e confiável
          </h2>
          <p className="text-muted-foreground mb-6">
            Confira seis recursos poderosos que tornam o videodownload.io a escolha ideal
            para baixar vídeos do YouTube com rapidez, segurança e eficiência. Cada recurso
            foi pensado para melhorar sua experiência e oferecer flexibilidade para todas as
            necessidades de download.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Um guia claro e passo a passo para salvar vídeos sem esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Colocar vídeos do YouTube no seu dispositivo é simples com o videodownload.io.
            Siga estas quatro etapas diretas para baixar qualquer vídeo em minutos. Cada etapa
            foi criada para ser intuitiva, mesmo para quem não é especialista em tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo do YouTube
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Principais usos para acessar vídeos offline
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do YouTube lhe dá a liberdade de assistir a conteúdos quando
              e onde quiser, sem depender de conexão com a internet. Seja para economizar
              dados, se preparar para uma viagem ou guardar conteúdo, os vídeos offline são
              extremamente úteis. Confira alguns dos melhores motivos para baixar vídeos do
              YouTube para uso pessoal.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajando sem acesso à internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve filmes, vlogs ou clipes musicais para assistir em voos longos, viagens
                    de trem ou em áreas remotas onde não há Wi‑Fi ou dados móveis. Isso garante
                    entretenimento contínuo durante a viagem.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudos e aprendizado
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe tutoriais, aulas ou guias passo a passo para aprender offline. Por
                    exemplo, salve walkthroughs de programação, aulas de idiomas ou vídeos de
                    reparos para revisar no seu ritmo, sem streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Criação e edição de conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Capture trechos para seus próprios vídeos, como reações, montagens ou
                    comentários, desde que respeite os direitos autorais ou tenha permissão do
                    criador. Ótimo para YouTubers ou criadores no TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arquivar vídeos favoritos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alguns vídeos são excluídos ou removidos do YouTube por mudanças no canal ou
                    problemas de direitos autorais. Baixar permite preservar favoritos pessoais ou
                    conteúdos raros para acesso a longo prazo.
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
                    Assistir a vídeos em streaming consome muitos dados, especialmente em
                    planos limitados. Baixar usando o Wi‑Fi permite assistir sem se
                    preocupar com franquias ou contas caras.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Biblioteca de entretenimento offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monte uma coleção de videoclipes, trailers de filmes ou vlogs para
                    aproveitar offline. Perfeito para acampamentos, treinos na academia ou
                    para relaxar em casa sem travamentos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Workshops e apresentações
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Profissionais podem baixar vídeos relevantes para o setor, como
                    palestras principais ou sessões de treinamento, para compartilhar em
                    workshops ou reuniões offline, garantindo reprodução contínua sem
                    depender da internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do YouTube oferece flexibilidade e praticidade, tornando mais
              fácil aproveitar o conteúdo do seu jeito, seja para diversão, trabalho ou
              aprendizado.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas que mais se beneficiam com vídeos offline
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do YouTube não é só para espectadores ocasionais — é uma
              virada de jogo para quem precisa de acesso offline para trabalhar, criar
              ou ganhar praticidade. Veja quem mais aproveita essa possibilidade e por
              que ela vale a pena.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Criadores de conteúdo e influenciadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTubers, tiktokers ou streamers podem baixar trechos para vídeos de
                    reação, mashups ou análises, desde que respeitem as leis de direitos
                    autorais e de fair use ou obtenham permissão do criador original.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudantes e professores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve conteúdos educacionais como tutoriais de matemática, explicações
                    de ciências ou documentários de história para estudar offline ou usar
                    em sala de aula. Ideal para regiões com internet instável ou para
                    manter o foco sem distrações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajantes frequentes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Esteja você em um avião, trem ou em um destino remoto, os vídeos baixados
                    garantem entretenimento sem depender de Wi‑Fi instável ou planos de
                    dados caros.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apaixonados por música
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Converta videoclipes ou apresentações ao vivo em MP3 para ouvir offline.
                    Ótimo para montar playlists de treino ou ouvir entrevistas sem streaming,
                    desde que a fonte seja legal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arquivistas de vídeo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Colecionadores ou fãs de conteúdos de nicho podem salvar vídeos raros,
                    uploads antigos ou favoritos pessoais que podem desaparecer do YouTube
                    por fechamento de contas ou limpezas de conteúdo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fãs de fitness e bem-estar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe sessões de ioga, rotinas de treino ou guias de meditação para
                    acompanhar offline, seja em casa, no parque ou na academia, sem precisar
                    de conexão.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pesquisadores e profissionais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Acadêmicos ou especialistas do setor podem salvar palestras de
                    conferências, webinars ou vídeos de treinamento para consulta offline
                    durante trabalhos de campo, apresentações ou sessões de estudo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Independentemente do seu perfil ou estilo de vida, baixar vídeos do YouTube
              economiza tempo, dados e esforço, mantendo seus conteúdos favoritos sempre
              acessíveis.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do YouTube?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que você precisa saber sobre a lei
            </h2>
            <p className="section-muted mb-4">
              A legalidade de baixar vídeos do YouTube depende de vários fatores, e é
              importante entender as regras para evitar problemas. Os Termos de Serviço
              do YouTube proíbem explicitamente o download de vídeos, a menos que a
              plataforma ofereça uma opção oficial, como o{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=en&co=GENIE.Platform%3DAndroid"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                recurso offline do YouTube Premium
              </a>{" "}
              para assinantes. Pela lei de direitos autorais dos EUA, baixar{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                conteúdo protegido por direitos autorais
              </a>{" "}
              sem permissão do criador ou do detentor dos direitos é ilegal e pode gerar
              processos civis, embora a aplicação contra usuários individuais para uso
              pessoal seja rara.
            </p>
            <p className="section-muted mb-2">
              No entanto, existem exceções em que o download pode ser legal:
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
                    Conteúdos que não estão mais protegidos por direitos autorais podem ser
                    baixados livremente.
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
                    Alguns vídeos no YouTube têm licenças que permitem o download para
                    usos específicos, como remixar ou compartilhar, desde que você siga os
                    termos.
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
                    Se o criador do vídeo permitir explicitamente o download, você está liberado
                    para fazê-lo.
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
                    Downloads limitados para educação, comentários, críticas ou pesquisa podem
                    se enquadrar em{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=en"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      fair use
                    </a>
                    , mas isso depende do contexto e de como você utiliza o vídeo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Para ficar em segurança, verifique a licença do vídeo na descrição ou entre
              em contato com o criador para pedir permissão. O YouTube Premium oferece uma
              forma legal de salvar vídeos offline para uso pessoal. Se ficar em dúvida,
              prefira agir com cautela para respeitar os criadores e evitar infringir as
              leis de direitos autorais.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos de baixar vídeos do YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos em potencial e como evitá-los
            </h2>
            <p className="section-muted mb-4">
              Embora baixar vídeos do YouTube seja conveniente, isso traz riscos se você
              usar as ferramentas erradas ou ignorar os limites legais. Conhecer esses
              perigos ajuda a tomar decisões inteligentes e proteger seu dispositivo e
              seus dados. Veja os principais riscos a evitar.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware de sites não confiáveis"
              >
                Muitos sites de download estão cheios de falsos botões de “download”,
                pop-ups ou scripts ocultos que instalam{" "}
                <a href="https://cyberpress.org/youtube-downloader-malware/"
                className="text-primary hover:text-primary-glow underline transition-colors">
                  vírus ou malware no seu dispositivo
                </a>
                . Eles podem roubar seus dados ou danificar o sistema. Prefira
                plataformas confiáveis, como o videodownload.io, para se manter protegido.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Consequências legais">
                Baixar vídeos protegidos por direitos autorais sem permissão viola os
                Termos de Serviço do YouTube, o que pode levar à suspensão da conta ou, em
                casos raros, a ações legais dos detentores dos direitos. Sempre verifique
                a licença do vídeo ou use alternativas legais como o YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Arquivos de baixa qualidade ou corrompidos"
              >
                Sites duvidosos costumam entregar vídeos em baixa resolução ou arquivos que não
                reproduzem corretamente, desperdiçando seu tempo e armazenamento. Ferramentas
                confiáveis garantem a qualidade que você espera.

              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Quebras de privacidade">
                Sites de download não confiáveis podem rastrear seus hábitos de navegação,
                coletar informações pessoais ou vender seus dados para terceiros. Escolha um
                serviço que priorize a privacidade do usuário e não exija permissões desnecessárias.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Downloads incompletos">
                Algumas ferramentas falham ao processar os vídeos corretamente, deixando você com
                arquivos parciais ou corrompidos que não abrem. Isso é comum em sites
                desatualizados ou mal projetados.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Questões éticas para os criadores"
              >
                Baixar vídeos pode driblar anúncios e prejudicar criadores que dependem de
                visualizações ou receita publicitária. Sempre que possível, apoie assistindo
                ao conteúdo online ou solicite permissão antes de fazer downloads.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Ao usar uma ferramenta confiável e segura como o videodownload.io e respeitar as
              regras de direitos autorais, você reduz esses riscos e garante downloads seguros
              e confiáveis.
            </p>
          </div>

          {/* Por que usar o videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu parceiro confiável para downloads do YouTube
            </h2>
            <p className="section-muted mb-4">
              Criamos o videodownload.io para oferecer uma forma segura, simples e rápida de baixar
              vídeos do YouTube sem os transtornos dos sites suspeitos. Nossa missão foi construir
              uma plataforma limpa que foge dos downloaders cheios de anúncios e riscos. Confira
              seis motivos que fazem do videodownload.io a melhor escolha para baixar vídeos do
              YouTube.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Livre de malware e seguro">
                Nosso site não tem pop-ups, botões falsos nem scripts maliciosos, garantindo que
                seu dispositivo permaneça protegido contra vírus e spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Design fácil de usar">
                Com uma interface limpa e um processo simples, qualquer pessoa baixa vídeos em
                segundos, sem precisar de conhecimentos técnicos.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Downloads em alta velocidade">
                Nossos servidores otimizados processam os vídeos rapidamente,
                então você recebe os arquivos sem longas esperas, mesmo em alta
                qualidade ou em vídeos longos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Opções flexíveis de formato">
                Escolha MP4 para vídeo ou MP3 para áudio, com diversas opções de
                resolução para atender às suas necessidades, de 720p a 4K.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completamente gratuito">
                Baixe vídeos ilimitados sem pagar nada. Sem assinaturas, sem taxas
                ocultas — todos os recursos sem custo.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacidade em primeiro lugar">
                Não rastreamos seus downloads, não armazenamos seus dados pessoais
                nem compartilhamos suas informações com ninguém. Sua atividade
                permanece privada.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perguntas comuns sobre o videodownload.io e downloads do YouTube
            </h2>
            <p className="section-muted mb-4">
              Reunimos respostas para as dúvidas mais comuns sobre o uso do
              videodownload.io e o download de vídeos do YouTube, para que você comece com
              segurança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. O videodownload.io é realmente gratuito?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, nossa plataforma é 100% gratuita. Você pode baixar quantos vídeos
                  quiser sem cobranças ou limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Preciso instalar algum software para baixar vídeos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. O videodownload.io funciona totalmente no navegador. Não é preciso
                  instalar aplicativos, extensões ou programas — tudo permanece simples.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Posso baixar playlists inteiras do YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Com certeza. Basta colar a URL da playlist e nosso sistema processa todos
                  os vídeos de uma vez para você baixar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. É seguro usar o videodownload.io?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, nosso site é seguro, sem pop-ups ou links maliciosos. Priorizamos a
                  segurança do usuário e testamos a plataforma para mantê-la limpa e confiável.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Posso baixar vídeos em alta qualidade, como 4K?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Se o vídeo do YouTube estiver disponível em 4K, você pode baixá-lo nessa
                  resolução. Oferecemos várias qualidades, de 360p a 4K, dependendo da fonte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. E se um vídeo não baixar corretamente?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifique novamente a URL e sua conexão com a internet. Se o problema
                  continuar, fale com nossa equipe de suporte para que possamos ajudar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Posso extrair apenas o áudio dos vídeos do YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim. O recurso de conversão para MP3 permite baixar somente o áudio de
                  qualquer vídeo, perfeito para músicas ou trechos de podcasts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Baixar vídeos do YouTube é legal?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Depende do vídeo. Os Termos de Serviço do YouTube proíbem o download,
                  salvo quando permitido. Vídeos em domínio público, com licença Creative
                  Commons ou com autorização do criador geralmente estão liberados. O fair
                  use pode se aplicar em casos de educação ou comentários, mas sempre verifique
                  a licença para evitar problemas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a baixar agora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe seus vídeos do YouTube em segundos
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
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo do YouTube
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
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
                        Baixar vídeo do {p.name}
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
        Escolha entre várias resoluções, incluindo 720p, 1080p e até 4K quando o
        vídeo oferece essa opção. Quer esteja salvando um tutorial ou um clipe
        musical, você define a qualidade que melhor combina com seu dispositivo
        ou preferências sem precisar navegar por configurações complexas.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de download ultrarrápidas">
        Nossos servidores otimizados garantem downloads em segundos, não em minutos.
        Dependendo da sua conexão e do tamanho do vídeo, a maioria dos arquivos fica
        pronta em menos de um minuto, economizando tempo e evitando frustrações. Nada
        de esperar por processamentos lentos.
      </FeatureCard>
      <FeatureCard icon={Music} title="Extração de áudio em MP3">
        Precisa apenas do áudio? Converta qualquer vídeo do YouTube em um arquivo MP3
        com um clique. Perfeito para salvar músicas, episódios de podcast ou áudios de
        aulas para ouvir offline, atendendo a vários usos.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Nenhuma instalação de software necessária">
        Baixe vídeos diretamente pelo navegador em qualquer dispositivo — desktop, tablet
        ou celular. Não é preciso instalar aplicativos, plugins ou programas extras,
        mantendo seu aparelho limpo e o processo de download simples.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Suporte completo para download de playlists">
        Salve playlists inteiras do YouTube de uma vez. Em vez de baixar cada vídeo
        separadamente, cole o link da playlist e nosso sistema processa tudo ao mesmo tempo,
        organizando os arquivos para acesso fácil. É um grande ganho de tempo para
        downloads em lote.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interface segura e sem anúncios">
        Diferente de muitos sites de download, o videodownload.io não tem pop-ups irritantes,
        redirecionamentos ou links suspeitos. Nosso design limpo e intuitivo garante uma
        experiência segura e tranquila, para você baixar sem se preocupar com riscos de
        segurança.
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
      <StepCard step={1} title="Copie a URL do vídeo do YouTube">
        Abra o YouTube no navegador ou aplicativo, encontre o vídeo que deseja baixar
        e copie a URL. Você pode pegar o link na barra de endereços ou tocar no botão
        “Compartilhar” abaixo do vídeo e escolher “Copiar link”.
      </StepCard>
      <StepCard step={2} title="Cole a URL em nosso site">
        Acesse o videodownload.io em qualquer navegador. Na página inicial há uma barra
        de download para colar a URL copiada do YouTube. Basta clicar com o botão direito
        ou pressionar e segurar para colar o link no campo e conferir se está correto.
      </StepCard>
      <StepCard step={3} title="Deixe que a gente processe o vídeo">
        Clique no botão “Baixar” ao lado da barra de URL. Nosso sistema busca o vídeo
        imediatamente e prepara o download. Se aparecer a opção, escolha o formato (como
        MP4 ou MP3) e a qualidade (como 1080p ou 4K). Essa etapa leva apenas alguns
        segundos.
      </StepCard>
      <StepCard step={4} title="Salve e organize o seu vídeo">
        Após o processamento, um link de download aparece. Clique para salvar o vídeo
        no armazenamento do dispositivo. Você pode renomear o arquivo durante o download
        para manter sua coleção organizada e encontrar tudo com facilidade depois.
      </StepCard>
    </div>
  );
}
