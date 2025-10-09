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

export default function TikTokPagePt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeo TikTok | Grátis & HD",
    description:
      "Baixe vídeos do TikTok sem marca d'água em qualidade HD. Downloader TikTok online gratuito: rápido, seguro e sem watermark."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download mínima (sem outras seções da home) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Baixar vídeo do TikTok
          </h1>
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole a URL de um vídeo TikTok"
            />
          </div>
          {/* Funções */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Baixe vídeos do TikTok com facilidade
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            O guia essencial para guardar clipes offline
          </h2>
          <p className="text-muted-foreground mb-6">
            Salve vídeos do TikTok em qualidade HD sem marca d'água. Nosso downloader é rápido, seguro e totalmente gratuito, perfeito para assistir quando quiser.
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Passo a passo simples para salvar em segundos
          </h2>
          <p className="text-muted-foreground mb-6">
            Com o videodownload.io você baixa qualquer vídeo em poucos minutos. São quatro passos intuitivos pensados para quem quer praticidade, mesmo sem dominar tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo TikTok
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Quando o acesso offline faz a diferença
            </h2>
            <p className="section-muted mb-4">
              O TikTok muda em questão de horas: tendências somem, perfis viram a chave e vídeos importantes desaparecem. Ao baixar, você fica com o que realmente importa, monta uma coleção sob medida e não depende de sinal ou da plataforma.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ver offline em viagens
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Aviões, metrôs ou Wi-Fi instável destroem a experiência. Salve tutoriais, comédias e músicas infantis antes de sair de casa e assista sem travamentos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix e criação de conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Criadores salvam clipes de referência para remixar tendências, comparar técnicas ou responder à audiência sem marca d'água. Ideal para reacts, reels e colaborações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fazer backup dos seus vídeos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quem publica com frequência sabe que um banimento ou edição errada pode apagar tudo. Guarde uma cópia em HD no computador ou na nuvem e fique tranquilo. Alunos também salvam resumos ou dicas de estudo para rever offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reaproveitar em outras plataformas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ajuste o vídeo para Reels ou Shorts e amplie o alcance. Pequenas empresas salvam depoimentos ou bastidores para mostrar em sites, apresentações ou pontos de venda.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arquivo pessoal de memórias
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Momentos de família, receitas, apresentações escolares ou homenagens ficam protegidos e prontos para serem compartilhados sem depender do aplicativo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Em resumo, baixar vídeos TikTok dá liberdade total para consumir, estudar ou trabalhar no seu ritmo.
            </p>
          </div>

          {/* Quem deve baixar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas que mais se beneficiam do modo offline
            </h2>
            <p className="section-muted mb-4">
              O download é essencial para quem usa o TikTok como ferramenta de criação, estudo ou negócio. Se os vídeos apoiam sua rotina, faz sentido mantê-los salvos.
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
                    Salvam vídeos próprios ou de inspiração para editar com calma, comparar tendências e produzir respostas sem marca d'água.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professores e estudantes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guardam demonstrações, experimentos ou dicas rápidas para usar em aula, revisar depois ou preparar atividades sem depender da internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Famílias e cuidadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rezamos momentos especiais, músicas e histórias para assistir juntos ou compartilhar com quem não usa o aplicativo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pequenos negócios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Aproveitam UGC, depoimentos e bastidores para usar em vitrines, apresentações e campanhas omnichannel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbystas e autodidatas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixam receitas, aulas de música, guias de jardinagem ou rotinas de treino para praticar no ritmo certo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Seja qual for o seu perfil, baixar vídeos economiza tempo, dados e garante acesso constante aos conteúdos principais.
            </p>
          </div>

          {/* Aspectos legais */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do TikTok?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que diz a lei sobre downloads
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do TikTok é uma área cinzenta. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">As regras da plataforma permitem salvar clipes públicos</a> para ver offline quando o criador não bloqueia a opção. Para uso pessoal não há problema, mas os termos proíbem ferramentas de terceiros, então teoricamente o TikTok pode identificar padrões. Na prática, os esforços focam em reuploads massivos.
            </p>
            <p className="section-muted mb-4">
              As leis de direitos autorais, como o DMCA, protegem os criadores. Guardar um vídeo para assistir depois costuma se encaixar em fair use se você não modificar nem distribuir. Repostar sem crédito ou sem transformar configura infração e pode gerar remoções. Trilhas sonoras também têm donos, embora trechos curtos para uso pessoal raramente sejam sinalizados.
            </p>
            <p className="section-muted mb-2">
              Situações em que o download é permitido:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permissão do criador
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se o autor libera o download, você pode baixar sem preocupações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Conteúdo em domínio público
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Obras sem proteção autoral podem ser baixadas livremente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Uso educacional justo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Escolas e professores podem recorrer a trechos curtos para fins pedagógicos dentro dos limites do fair use. Confira sempre a descrição do vídeo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Conclusão: mantenha o uso privado e respeitoso. Se quiser compartilhar, peça autorização ou credite o autor claramente.
            </p>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos ao baixar vídeos do TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos comuns e como evitá-los
            </h2>
            <p className="section-muted mb-4">
              Ferramentas de terceiros podem esconder armadilhas: desde vírus até golpes. Antes de colar um link em qualquer site, vale conhecer os principais riscos para proteger seu dispositivo.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware em sites suspeitos">
                Alguns portais inserem vírus, trojans ou ransomware junto com o download. Um clique pode comprometer seus dados ou bloquear o aparelho.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de phishing">
                Botões falsos imitam a tela de login do TikTok e roubam credenciais, ou oferecem "atualizações" que instalam spyware.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Exposição de dados">
                Ferramentas pouco confiáveis registram seu histórico e vendem informações para terceiros, gerando spam e tentativas de golpe.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Perda de qualidade">
                Serviços fracos comprimem demais o arquivo, causando travamentos, áudio fora de sincronia e cores desbotadas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Banimento da conta">
                O TikTok pode detectar downloads massivos via ferramentas externas e suspender perfis, especialmente de criadores.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Armazenamento lotado">
                Acumular vídeos grandes ocupa memória rapidamente e pode travar o player. Mantenha a biblioteca organizada.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Use apenas sites confiáveis, analise os arquivos baixados e, se possível, navegue com VPN e antivírus atualizados.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu parceiro de confiança para baixar do TikTok
            </h2>
            <p className="section-muted mb-4">
              Criamos o videodownload.io para ter um método confiável, sem anúncios intrusivos nem apps pesados. De lá para cá já processamos milhões de downloads com segurança. Continuamos melhorando a ferramenta a partir do feedback da comunidade para oferecer uma experiência simples e estável.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Velocidade instantânea">
                Processamos a maioria dos vídeos em poucos segundos graças a servidores otimizados.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sem anúncios irritantes">
                Interface limpa, sem pop-ups ou redirecionamentos estranhos.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sem marca d'água">
                Entregamos o arquivo sem watermark, pronto para edições ou repostagens autorizadas.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Downloads ilimitados">
                Use quanto quiser. Não limitamos o número de vídeos por dia.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
                Basta um navegador em seu celular, tablet ou computador. Nada para instalar.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacidade garantida">
                Não rastreamos seus downloads nem guardamos links. Terminou o processo, não fica nenhum dado guardado.
              </FeatureCard>
            </div>
          </div>

          {/* Perguntas frequentes */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tudo o que você precisa saber sobre o videodownload.io
            </h2>
            <p className="section-muted mb-4">
              Reunimos respostas rápidas para você usar o serviço com tranquilidade e aproveitar melhor seus downloads TikTok.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do TikTok?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. A ferramenta funciona apenas com vídeos públicos. Conteúdos privados exigem permissão do criador. Se o vídeo é seu, use o download nativo do TikTok.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar deixa o celular lento?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não por nossa causa. Os arquivos são leves e não instalamos nada. Apenas monitore o espaço se baixar muitos vídeos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Por que o vídeo baixado não tem marca d'água?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Porque usamos o fluxo original e removemos o watermark aplicado pelo TikTok, deixando o arquivo limpo para uso pessoal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Consigo baixar apenas o áudio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim. Depois de colar o link, escolha o formato MP3 para salvar somente o áudio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O que fazer se o download falhar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Certifique-se de que o link está completo e o vídeo é público. Tente outro navegador ou limpe o cache. Persistiu? Chame nosso suporte — respondemos rapidinho.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Existe limite de tamanho ou duração?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Suportamos vídeos de até 60 minutos. Os maiores levam um pouco mais de tempo para processar, mas são baixados por inteiro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês guardam os vídeos que baixei?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. O processo é feito em tempo real e nada fica armazenado. O arquivo permanece apenas com você.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O criador sabe que eu baixei o vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. O TikTok não envia notificações; o download permanece anônimo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Comece agora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Pronto para salvar seus favoritos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Leve seus vídeos offline em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copie o link TikTok
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Cole aqui
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Clique em Baixar
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo TikTok
                </Button>
              </a>
            </div>
          </div>

          {/* Explore outros downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore outros downloaders
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
                        Baixar vídeo de {p.name}
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
      <FeatureCard icon={VideoIcon} title="Downloads em HD">
        Baixe em até 1080p (ou mais, quando disponível) mantendo cores vivas e detalhes nítidos, pois capturamos o arquivo direto da fonte.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Sem marca d'água">
        Diferente do app oficial, entregamos o vídeo limpo, sem logos, pronto para edição ou repostagem autorizada.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
        Use no Android, iOS, Windows ou macOS diretamente pelo navegador. Nada para instalar ou configurar.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Processamento rápido">
        A maioria dos downloads leva poucos segundos graças a servidores otimizados próximos ao TikTok.
      </FeatureCard>
      <FeatureCard icon={Download} title="100% gratuito">
        Sem cadastro, cartão ou taxa escondida. Baixe quantos vídeos quiser todos os dias.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Seguro e privado">
        Não rastreamos nem armazenamos links. Terminou o download, não fica nenhuma informação conosco.
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
      <StepCard step={1} title="Copie o link do vídeo">
        <a href="https://www.tiktok.com/">Abra o TikTok</a> pelo app ou navegador, encontre o vídeo desejado, toque no botão Compartilhar e selecione «Copiar link» para obter a URL completa.
      </StepCard>
      <StepCard step={2} title="Cole o link no videodownload.io">
        Abra o videodownload.io no navegador, clique na caixa superior e cole o endereço copiado. Confirme se o link começa com tiktok.com e se o vídeo é público.
      </StepCard>
      <StepCard step={3} title="Deixe o sistema preparar o arquivo">
        Clique em «Baixar». Buscamos o vídeo nos servidores do TikTok, removemos a marca d'água e verificamos a qualidade em poucos segundos.
      </StepCard>
      <StepCard step={4} title="Escolha o formato e salve">
        Selecione MP4 para vídeo + áudio ou MP3 para baixar apenas o som. O arquivo será salvo na pasta padrão do dispositivo e ficará disponível para assistir offline.
      </StepCard>
    </div>
  );
}
