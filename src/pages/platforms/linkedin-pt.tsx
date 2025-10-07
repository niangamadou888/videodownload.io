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

export default function LinkedInPagePt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeo do LinkedIn | Grátis & HD",
    description:
      "Baixe vídeos e publicações do LinkedIn em mp4, qualidade 1080p. Downloader e conversor de vídeo online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download minimalista */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole a URL de um vídeo ou post do LinkedIn"
            />
          </div>
          {/* Recursos */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe vídeos do LinkedIn com facilidade
          </h2>
          <p className="text-muted-foreground mb-6">
            Um guia direto para salvar clipes profissionais e assistir offline quando quiser
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Passo a passo simples para guardar vídeos sem esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Com o videodownload.io, colocar um vídeo do LinkedIn no seu dispositivo leva só
            alguns minutos. Siga estes quatro passos intuitivos — mesmo sem ser expert em
            tecnologia — para baixar qualquer conteúdo rapidamente.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo do LinkedIn
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores casos de uso
            </h2>
            <p className="section-muted mb-4">
              O feed do LinkedIn muda rápido e vídeos valiosos somem em meio a novos posts.
              Ao baixar, você mantém o que realmente importa, transformando o scroll rápido em
              um repositório confiável. Priorize o conteúdo que ajuda sua carreira ou empresa,
              longe de bugs ou exclusões inesperadas.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Acesso offline para profissionais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve palestras de liderança ou estratégias de marketing para assistir em
                    viagens sem Wi-Fi. Facilitadores baixam trechos de workshops para mostrar
                    em reuniões sem depender da conexão.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reaproveitar conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Profissionais de marketing guardam estudos de caso para incluir em decks ou
                    publicar em outros canais. Quem busca emprego baixa dicas de currículo para
                    analisar com calma e ajustar seu pitch. Recorte os melhores momentos para
                    apresentações sem refazer do zero.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proteger suas publicações
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se você compartilha atualizações ou insights, mudanças na plataforma podem
                    ocultar ou remover seus vídeos. Baixe-os e mantenha um backup seguro em disco.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Treinamentos e educação
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Equipes de RH baixam vídeos de onboarding para novos colaboradores. Estudantes
                    salvam painéis e webinars para revisar com calma e montar anotações offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Crescimento pessoal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde palestras motivacionais ou conselhos de networking para rever quando
                    precisar de um incentivo. Transforme a fala de um mentor em lembrete diário
                    sem precisar caçar o post de novo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do LinkedIn oferece flexibilidade e conveniência: consuma o conteúdo
              no seu tempo, seja para trabalho, estudo ou inspiração.
            </p>
          </div>

          {/* Para quem */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perfis que mais se beneficiam
            </h2>
            <p className="section-muted mb-4">
              O LinkedIn é o ponto de encontro dos profissionais e o download de vídeos é ideal
              para quem usa a plataforma de forma estratégica — para crescer, aprender ou construir
              relacionamentos. Se você enxerga os posts como ferramentas, aproveitar os downloads
              é um diferencial.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profissionais e gestores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gestores guardam palestras de liderança para compartilhar com o time.
                    Marketers baixam anúncios e cases de concorrentes para analisar tendências e
                    inserir clipes limpos nas apresentações.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Candidatos e coaches de carreira
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe dicas de entrevista ou walkthroughs de currículo para praticar offline.
                    Coaches reúnem depoimentos de clientes para mostrar em sessões, sem risco de
                    watermarks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Donos de negócios e empreendedores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Startups salvam pitches ou análises do mercado para acompanhar a concorrência.
                    Pequenas empresas baixam testemunhos de clientes para usar em sites ou propostas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educadores e treinadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Equipes de RH guardam vídeos de compliance para treinamentos internos.
                    Professores e instrutores baixam painéis do mercado para discutir em sala,
                    sem depender da internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudantes e aprendizes contínuos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde conselhos de carreira ou tutoriais técnicos para revisar no seu ritmo.
                    Até usuários casuais salvam clipes motivacionais para dias desafiadores.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Independentemente do seu papel, baixar vídeos do LinkedIn economiza tempo, dados e
              esforço, mantendo os conteúdos essenciais sempre à mão.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do LinkedIn?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que você precisa saber sobre direitos autorais
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do LinkedIn está em uma área cinzenta. Os criadores detêm os direitos
              autorais conforme leis como a <a href="https://pt.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a>. Guardar para
              uso pessoal — por exemplo, rever um webinar offline — costuma se enquadrar em fair
              use. Já compartilhar sem autorização ou usar comercialmente pode gerar problemas
              legais. O áudio (músicas ou narrações) pode ter camadas extras de proteção.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando é permitido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se o criador autoriza downloads ou o conteúdo é de domínio público, você
                    está seguro. Usos educacionais — como professores exibindo trechos em aula —
                    geralmente são aceitos. Mantenha os vídeos para consumo próprio e credite o
                    autor ao compartilhar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos ao baixar vídeos do LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ameaças potenciais e como evitá-las
            </h2>
            <p className="section-muted mb-4">
              Baixar de sites pouco confiáveis parece simples, mas traz riscos. Nem toda
              ferramenta é segura e um clique errado pode comprometer seu aparelho ou dados.
              Entenda os perigos antes de baixar.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware e vírus">
                Sites suspeitos escondem malware em arquivos de vídeo, instalando spyware ou
                ransomware. Um download ruim pode bloquear arquivos ou roubar senhas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de phishing">
                Páginas falsas imitam o login do LinkedIn para capturar credenciais. Pop-ups com
                "atualizações" instalam rastreadores.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Perda de qualidade">
                Ferramentas ruins comprimem demais os vídeos, gerando imagem travada ou áudio
                ausente. O resultado é inutilizável.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamento de dados">
                Alguns serviços registram suas preferências e vendem IP para anunciantes.
                Criminosos podem usar isso em golpes.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Risco de banimento">
                Uso excessivo de ferramentas de terceiros pode sinalizar sua conta, sobretudo
                para criadores ativos. Você pode perder acesso à rede.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Memória cheia">
                Acumular vídeos ocupa espaço e deixa dispositivos lentos. Arquivos corrompidos
                podem travar players.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Prefira sites confiáveis, verifique os arquivos baixados e considere usar uma VPN
              para reforçar a segurança.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu parceiro confiável para downloads do LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Criamos o videodownload.io em 2022 cansados de ferramentas lentas e inseguras.
              Como usuários do LinkedIn, precisávamos de um jeito rápido e limpo de salvar
              vídeos. Somos uma equipe enxuta dedicada a tornar o download simples e protegido.
              Após milhões de usuários e zero vazamentos, seguimos evoluindo com base no
              feedback deles.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de cinco segundos">
                Downloads concluídos mesmo em horários de pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sem anúncios chato">
                Interface limpa, sem pop-ups.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sem watermark">
                Clipes prontos para uso imediato.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Descargas ilimitadas">
                Nenhum limite diário.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona em qualquer aparelho">
                De notebooks antigos a smartphones novos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                Nada é salvo após o download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dúvidas comuns sobre baixar vídeos do LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Reunimos as respostas para as perguntas mais frequentes sobre o uso do
              videodownload.io e o download de vídeos do LinkedIn, para você começar com
              tranquilidade.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do LinkedIn?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Suportamos apenas posts públicos. Conteúdos privados exigem permissão do
                  criador e respeitamos essa limitação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar deixa meu dispositivo lento?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Os arquivos são leves e seguros, então não afetam o desempenho. Apenas monitore o
                  espaço disponível se baixar muitos vídeos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Por que o vídeo baixado não tem marca d'água?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O LinkedIn adiciona logos para rastrear compartilhamentos, mas buscamos o arquivo
                  original e removemos as marcas para uso pessoal limpo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Consigo baixar apenas o áudio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim. Selecione o formato MP3 depois de colar o link para capturar só o som — ideal
                  para podcasts ou discursos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  E se o download não funcionar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifique se o link é público e começa com linkedin.com. Tente outro navegador ou
                  limpe o cache. Nosso chat de suporte pode ajudar rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Há limite de duração do vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Trabalhamos com vídeos de até 60 minutos. Os mais longos levam um pouco mais de
                  tempo, mas são baixados por completo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês guardam os vídeos que baixo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Processamos o arquivo de forma instantânea e apagamos tudo em seguida. Ele
                  fica apenas no seu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O criador fica sabendo que baixei o vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. O LinkedIn não envia notificações — o download permanece privado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a salvar vídeos do LinkedIn hoje
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe clipes profissionais em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copie o link do LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Cole em nosso site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Baixe o vídeo limpo
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo do LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Outros downloaders */}
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
      <FeatureCard icon={VideoIcon} title="Vídeos em alta qualidade">
        Receba vídeos do LinkedIn em resolução nítida, até 1080p se o post original permitir.
        Nada de imagem borrada ou cores lavadas ao reproduzir depois.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sem logos ou marcas d'água">
        O aplicativo do LinkedIn adiciona marcações aos vídeos salvos. Nós removemos tudo,
        deixando o arquivo limpo.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
        Use notebook, iPhone, Android ou tablet. Não é preciso instalar nada: abra o site,
        cole o link e faça o download.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Downloads rápidos e estáveis">
        Nossa ferramenta busca os vídeos em segundos, normalmente em menos de dez para a
        maioria dos clips, graças a servidores próximos ao LinkedIn.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Grátis e sem limites">
        Sem custos, cadastros ou limites diários. Salve tudo o que for útil.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo seguro e privado">
        Não armazenamos links nem arquivos após o download. Sem rastreamento ou anúncios
        invasivos.
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
      <StepCard step={1} title="Copie o link no LinkedIn">
        <a href="http://www.linkedin.com">Abra o LinkedIn</a> no celular ou no navegador. Ache o
        vídeo desejado, toque nos três pontos no canto superior do post e selecione "Copy link to post"
        para copiar a URL completa.
      </StepCard>
      <StepCard step={2} title="Cole o link em nosso site">
        Entre em videodownload.io e cole o link no campo indicado. Certifique-se de que a URL comece
        com linkedin.com; conteúdos privados não funcionam.
      </StepCard>
      <StepCard step={3} title="Nós processamos o vídeo">
        Clique no botão "Download" para buscarmos o arquivo direto dos servidores do LinkedIn, removendo
        quaisquer marcas e validando a qualidade.
      </StepCard>
      <StepCard step={4} title="Salve o arquivo no dispositivo">
        Escolha MP4 para vídeo com áudio completo ou MP3 para apenas som. O arquivo aparece na pasta de
        downloads ou na galeria. Renomeie e reproduza para garantir que está perfeito.
      </StepCard>
    </div>
  );
}
