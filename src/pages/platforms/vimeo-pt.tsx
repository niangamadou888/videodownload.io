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

export default function VimeoPagePT() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download de Vídeos do Vimeo | Grátis & HD",
    description: "Baixe vídeos do Vimeo em MP4 com qualidade 1080p. Downloader e conversor de vídeo online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download minimalista */}
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole a URL de um vídeo do Vimeo"
            />
          </div>
          {/* Funcionalidades */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Funcionalidades
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe vídeos do Vimeo com facilidade
          </h2>
          <p className="text-muted-foreground mb-6">
            Seu guia simples para salvar clipes criativos offline
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Um passo a passo claro para salvar vídeos sem esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Com o videodownload.io, colocar vídeos do Vimeo no seu dispositivo é rapidinho.
            Siga estes quatro passos diretos para baixar qualquer vídeo em minutos.
            Cada etapa foi pensada para ser intuitiva, mesmo se você não for especialista em tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo do Vimeo
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores casos de uso
            </h2>
            <p className="section-muted mb-4">
              O Vimeo é um hub de conteúdo criativo e profissional, mas vídeos podem sumir ou ser removidos. Fazer download permite guardar os clipes que inspiram ou ensinam, transformando descobertas rápidas em uma coleção pessoal. É sobre salvar o que alimenta seus projetos ou sua paixão, não acumular conteúdo aleatório. Você mantém o controle da sua biblioteca, protegido contra exclusões ou mudanças da plataforma.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Assistir offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve tutoriais de cinema ou entrevistas com artistas para viagens sem Wi-Fi, como voos ou gravações externas. Estudantes baixam vídeos educativos para revisar sem precisar de internet.
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
                    Cineastas salvam curtas para estudar técnicas ou remixar em novos projetos. Profissionais de marketing pegam vídeos de marca para adaptar a outras plataformas, sem marcas d'água para atrapalhar a edição.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Arquivar seus próprios uploads
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se você publica vídeos no Vimeo, eles podem sumir por causa de problemas na conta ou mudanças da plataforma. Baixe tudo para um drive e proteja seu trabalho, seja um portfólio ou um job para cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizado e inspiração
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designers salvam tutoriais de motion graphics para praticar offline. Professores baixam aulas criativas para a sala, mostrando ideias sem depender da conexão.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Projetos pessoais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde videoclipes ou apresentações artísticas para revisitar quando precisar de motivação. Transforme um achado rápido no Vimeo em referência para sua próxima ideia ou apresentação profissional.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Vimeo dá flexibilidade e praticidade,
              deixando você aproveitar o conteúdo do seu jeito, seja por lazer,
              trabalho ou estudo.
            </p>
          </div>

          {/* Quem deve baixar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Quem mais se beneficia dos downloads
            </h2>
            <p className="section-muted mb-4">
              O Vimeo é o lar de artistas e profissionais, mas baixar vídeos faz sentido para quem usa a plataforma para criar, aprender ou crescer. É para quem vê os clipes como ferramentas, inspiração ou lembranças – não só como entretenimento rápido. Se você é ativo no Vimeo e quer guardar o que importa, fazer download é o caminho.
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
                    Diretores e animadores guardam tutoriais ou showreels para estudar ou editar. Eles também baixam seus próprios uploads para manter versões limpas sem logos, prontas para portfólio ou pós-produção.
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
                    Professores de artes salvam demos de animação para a aula. Estudantes baixam dicas de filmmaking ou lições de design para revisar offline no próprio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profissionais e empresas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketeiros baixam vídeos de marca para reutilizar em anúncios ou sites. Freelancers guardam apresentações para arquivar ou compartilhar sem distrações de marca d'água.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entusiastas e criativos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fotógrafos salvam tutoriais de iluminação para testar em casa. Músicos baixam apresentações ao vivo para estudar montagem de palco e ensaiar offline.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Usuários casuais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Salve o curta de um amigo ou um vídeo motivacional para rever depois. Mesmo fãs baixam mostras artísticas para projetos pessoais ou moodboards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Não importa seu perfil, baixar vídeos do Vimeo economiza tempo, dados e energia, mantendo seus conteúdos favoritos acessíveis.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do Vimeo?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que você precisa saber sobre a lei
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Vimeo ainda é uma área cinzenta. As regras da plataforma <a href="https://help.vimeo.com/hc/en-us/articles/12426502581265-How-to-download-a-video-on-vimeo-com">permitem baixar vídeos públicos pelo site</a> para uso pessoal, caso o criador não tenha desativado a opção. Usar ferramentas de terceiros como a nossa quebra os termos de uso e pode marcar sua conta, embora banimentos sejam raros a menos que você faça downloads em massa ou publique sem permissão.
            </p>
            <p className="section-muted mb-4">
              Os vídeos são protegidos por direitos autorais, seguindo leis como o DMCA nos EUA. Guardar para assistir de forma privada – por exemplo, estudar um tutorial offline – normalmente se encaixa em fair use. Mas compartilhar sem crédito ou usar comercialmente pode gerar problemas legais. Músicas ou narrações podem ter camadas extras de direitos, ainda que downloads pessoais e curtos raramente causem dores de cabeça.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quando está tudo certo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Se o criador libera o download ou o conteúdo é de domínio público, você está tranquilo. Uso educacional, como mostrar um vídeo em aula, costuma se enquadrar em fair use. Confira as descrições para ver permissões. Mantenha os downloads privados e credite os autores se for compartilhar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos ao baixar vídeos do Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos potenciais e como evitá-los
            </h2>
            <p className="section-muted mb-4">
              Ferramentas de terceiros parecem práticas, mas sites suspeitos trazem riscos reais. Nem todo lugar é confiável e um clique errado pode comprometer seu dispositivo ou seus dados. Entenda os riscos antes de começar para não ter dor de cabeça.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware">
                Sites inseguros escondem vírus nos arquivos de vídeo, instalando spyware ou ransomware. Um download ruim pode bloquear seus arquivos ou roubar senhas. Algumas ferramentas já foram flagradas com keyloggers, transformando um simples meme em vazamento de dados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Páginas falsas imitam o login do Vimeo e capturam suas credenciais se você digitar. Ou anúncios empurram "atualizações" que instalam rastreadores e monitoram sua atividade fora da plataforma.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Problemas de qualidade">
                Sites ruins comprimem os vídeos, causando travamentos ou perda de áudio. Você queria um tutorial nítido e recebe um arquivo defeituoso.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamento de dados">
                Alguns sites registram seus downloads e vendem IP ou preferências de vídeo para anunciantes. Hackers podem roubar essas informações e gerar spam ou golpes direcionados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Ban no Vimeo">
                Uso intenso de ferramentas externas pode sinalizar sua conta, especialmente se você é criador. Você pode perder perfil ou uploads da noite para o dia.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Armazenamento lotado">
                Guardar muitos vídeos ocupa espaço e deixa celular ou disco lentos. Arquivos corrompidos podem travar players e tomar tempo para consertar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Use sites confiáveis, escaneie os arquivos baixados e considere uma VPN para manter tudo seguro.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu parceiro confiável para downloads do Vimeo
            </h2>
            <p className="section-muted mb-4">
              Criamos o videodownload.io em 2022 porque estávamos cansados de apps travados e sites arriscados. Como usuários do Vimeo, queríamos uma forma rápida e limpa de baixar vídeos sem dor de cabeça. Somos uma equipe pequena, não uma grande empresa, e focamos em tornar os downloads fáceis e seguros. Milhões de usuários confiam na gente sem vazamentos de dados, e continuamos melhorando com o feedback deles.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de cinco segundos">
                Os downloads finalizam rápido, mesmo em horários de pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sem anúncios ou pop-ups">
                Apenas uma interface limpa.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sem marcas d'água">
                Clipes limpos e prontos para usar.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Downloads ilimitados">
                Nenhum limite diário.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
                De celulares antigos a notebooks novos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                Nenhum dado fica armazenado depois que você termina.
              </FeatureCard>
            </div>
          </div>

          {/* Perguntas frequentes */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dúvidas comuns sobre downloads do Vimeo
            </h2>
            <p className="section-muted mb-4">
              Reunimos respostas para as dúvidas mais comuns sobre
              usar o videodownload.io e baixar vídeos do Vimeo, para você começar com segurança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do Vimeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, trabalhamos apenas com vídeos públicos. Conteúdos privados ou protegidos por senha precisam de autorização do criador e respeitamos esses limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar vai deixar meu dispositivo lento?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nossos arquivos são leves e limpos, então não causam travamentos. Mas salvar muitos vídeos pode encher o armazenamento; fique de olho no espaço livre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Por que o vídeo baixado não tem marca d'água?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Vimeo adiciona logos para rastrear compartilhamentos, mas a gente puxa o arquivo original e limpa tudo para entregar um vídeo nítido para uso pessoal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvar apenas o áudio de um vídeo do Vimeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, depois de colar o link, escolha MP3. Ótimo para pegar música ou narrativas sem o vídeo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  E se o download não começar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Confirme que o link é público e começa com vimeo.com. Experimente outro navegador ou limpe o cache. Nosso chat de suporte resolve rápido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Existe limite de duração?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Processamos vídeos com até 60 minutos, embora a duração varie no Vimeo. Os mais longos demoram um pouco mais, mas baixam completos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês guardam os vídeos que eu baixo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  De jeito nenhum. Processamos tudo na hora e apagamos em seguida. Seus arquivos ficam apenas no seu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O criador fica sabendo que baixei o vídeo dele?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Vimeo não envia notificações. O download permanece privado, sem alertas para o criador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Comece agora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a salvar vídeos do Vimeo hoje
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Garanta seus clipes criativos em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar link do vídeo do Vimeo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Colar no nosso site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Baixar vídeo limpo
              </div>
            </div>
            <div className="mt-2">
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo do Vimeo
                </Button>
              </a>
            </div>
          </div>

          {/* Explore mais downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explore mais downloaders
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
                        Baixar vídeo {p.name}
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
      <FeatureCard icon={VideoIcon} title="Downloads em alta definição">
        Salve vídeos do Vimeo na resolução máxima, até 1080p ou mais se o upload original permitir. Sem reprodução granulada ou cores apagadas quando você assistir depois. A gente puxa o arquivo direto dos servidores do Vimeo, mantendo cada frame nítido para aquele curta ou tutorial artístico.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sem logotipos ou branding">
        O Vimeo adiciona seu logo aos vídeos salvos pelo app, poluindo a tela. Nós removemos tudo e entregamos um clipe limpo, pronto para edição ou uso pessoal. Assista ao documentário ou à animação sem texto cobrindo os detalhes.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em todo dispositivo">
        Use celular, tablet, notebook ou desktop e tudo roda suave. Nada de apps ou softwares extras. Abra o site no navegador, cole o link e faça o download. Testado de iPhones antigos a PCs novos, sempre sem estresse.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidade de download rápida">
        Ninguém gosta de esperar. Nossa ferramenta pega vídeos do Vimeo em segundos, geralmente menos de dez para a maioria dos clipes. Usamos servidores próximos aos da plataforma para acelerar tudo, então você salva um tutorial ou reel no intervalo.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalmente gratuito">
        Sem tarifas, cadastros ou custos escondidos. Baixe quantos vídeos quiser, todos os dias, sem limite. Mantemos tudo grátis para você guardar aquele filme inspirador ou clipe musical sem topar com paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo seguro e privado">
        Seus dados ficam protegidos. Não armazenamos links ou vídeos depois do download. Nada de rastreamento, logs ou anúncios invasivos. Tudo limpo para manter seu dispositivo livre de riscos.
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
      <StepCard step={1} title="Copie o link do vídeo no Vimeo">
        <a href="http://www.vimeo.com">Abra o Vimeo</a> no celular ou navegador. Encontre o vídeo que você curte, como um truque de filmagem ou uma animação criativa. Clique no ícone de compartilhar, normalmente um aviãozinho de papel, na parte inferior ou lateral do vídeo. Escolha "Copiar link" no menu. Assim você pega a URL completa, por exemplo vimeo.com/123456789. Verifique se está certinha.
      </StepCard>
      <StepCard step={2} title="Cole o link na nossa ferramenta">
        Acesse o videodownload.io no navegador. Você verá uma caixa "Cole o link do Vimeo aqui". Clique dentro e cole o link. Garanta que ele começa com vimeo.com para evitar erros. Só vídeos públicos funcionam; privados ou protegidos não baixam.
      </StepCard>
      <StepCard step={3} title="Nós buscamos e limpamos o vídeo">
        Clique no botão verde "Baixar" ao lado da caixa. Nosso sistema puxa o vídeo dos servidores do Vimeo em segundos. Removemos marcas d'água e conferimos a qualidade para entregar um clipe fluido. O áudio continua claro, sem falhas.
      </StepCard>
      <StepCard step={4} title="Salve o clipe no seu dispositivo">
        Você verá opções: MP4 para o vídeo completo com som ou MP3 só com áudio. Para a maioria dos clipes, escolha MP4. Inicie o download e o arquivo irá para sua pasta de Downloads ou galeria. Renomeie para algo simples, como "film_tutorial.mp4", antes de salvar. Reproduza para confirmar que está tudo certo.
      </StepCard>
    </div>
  );
}
