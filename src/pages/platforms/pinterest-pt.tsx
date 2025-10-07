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

export default function PinterestPagePt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeo Pinterest | Grátis & HD",
    description:
      "Baixe vídeos e pins do Pinterest em mp4, qualidade 1080p. Downloader e conversor online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download minimalista */}
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole a URL de um vídeo ou pin do Pinterest"
            />
          </div>
          {/* Recursos */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe vídeos do Pinterest com facilidade
          </h2>
          <p className="text-muted-foreground mb-6">
            Guia rápido para guardar clipes criativos e assisti-los offline
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Passo a passo simples para guardar conteúdo sem esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Com o videodownload.io, levar um vídeo do Pinterest para o seu dispositivo leva apenas alguns minutos. Siga estes
            quatro passos intuitivos — mesmo sem ser especialista em tecnologia — e baixe qualquer clipe com facilidade.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo do Pinterest
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores casos de uso
            </h2>
            <p className="section-muted mb-4">
              Pinterest é um oceano de inspiração, mas os pins desaparecem rápido. Ao baixar os vídeos que despertam ideias, você
              transforma descobertas passageiras em uma coleção pessoal. Foque no que impulsiona sua criatividade ou projetos —
              protegido contra exclusões e falhas do aplicativo.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualização offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarde tutoriais DIY ou guias de viagem para usar em voos, viagens ou locais sem internet. Pais salvam ideias
                    de atividades para crianças — perfeitas para tardes sem telas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilizar conteúdo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Criadores guardam clipes de décor ou estilo para remixar com sua abordagem. Pequenos negócios baixam demos
                    para mostrar em outros canais, sem marcas d'água.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proteger seus próprios pins
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mudanças em quadros ou bugs podem ocultar seus vídeos. Baixe suas criações — como receitas, tutoriais ou peças
                    de portfólio — e mantenha cópias seguras.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizado e planejamento
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estudantes salvam tutoriais artísticos ou dicas de estudo para exercitar offline. Organizadores de eventos
                    baixam ideias de decoração e apresentam aos clientes sem depender da busca.
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
                    Guarde ideias de jardinagem, hacks de móveis ou rotinas de treino para usar quando precisar. Uma inspiração
                    salva na hora certa pode virar seu próximo grande projeto.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Pinterest traz flexibilidade e praticidade: desfrute do conteúdo no seu ritmo, seja para trabalho,
              aprendizado ou lazer.
            </p>
          </div>

          {/* Quem deve baixar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Usuários que mais aproveitam
            </h2>
            <p className="section-muted mb-4">
              Pinterest é para quem transforma inspiração em ação. Se você usa a plataforma para criar, planejar ou aprender — e
              não apenas para rolar o feed — o downloader é essencial.
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
                    Guardam tutoriais ou looks para adaptar e compartilhar. Mantêm versões sem marcas d'água dos próprios vídeos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Hobbistas e fãs de DIY
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Artesãos e makers seguem os tutoriais passo a passo mesmo sem internet. Jardineiros consultam guias de plantio
                    enquanto trabalham.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Organizadores e pequenos negócios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wedding planners baixam inspirações para apresentar aos clientes. Pequenos lojistas usam vídeos de produtos para
                    fortalecer a presença online.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pais e educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professores guardam atividades para a sala de aula. Pais e cuidadores mantêm vídeos de brincadeiras para dias
                    sem telas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proprietários e renovadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guardam ideias de reformas, truques de organização ou dicas de decoração para aplicar mais tarde.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Qualquer que seja o seu perfil, baixar vídeos do Pinterest ajuda a economizar tempo, dados e energia, mantendo suas
              referências favoritas sempre acessíveis.
            </p>
          </div>

          {/* Aspectos legais */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do Pinterest?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que saber sobre direitos autorais
            </h2>
            <p className="section-muted mb-4">
              Os vídeos pertencem aos autores e são protegidos por leis como a DMCA. Guardar para uso pessoal — como rever um
              tutorial offline — geralmente é considerado fair use. Já compartilhar sem crédito ou monetizar pode trazer conflitos.
              As faixas de áudio também podem ter direitos extras.
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
                    Se o criador autoriza ou o conteúdo é de domínio público, você está seguro. Uso educacional, como mostrar um
                    tutorial em sala, também costuma ser aceitável. Mantenha os vídeos para uso privado e credite ao compartilhar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos ao baixar vídeos do Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ameaças potenciais e como evitá-las
            </h2>
            <p className="section-muted mb-4">
              Nem todo site de download é seguro. Alguns podem introduzir malware ou coletar seus dados. Antes de baixar, avalie
              a confiabilidade da fonte.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware e vírus">
                Websites suspeitos embutem spyware ou ransomware nos arquivos. Um único download malicioso pode bloquear seus
                dados ou roubar senhas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de phishing">
                Páginas que simulam o login do Pinterest coletam credenciais. Pop-ups falsos instalam rastreadores.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Perda de qualidade">
                Ferramentas ruins comprimem demais o vídeo, gerando travamentos e áudio instável.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamento de dados">
                Alguns serviços guardam o histórico de downloads e vendem IP ou preferências a terceiros.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Risco de bloqueio">
                Uso excessivo de ferramentas externas pode sinalizar sua conta, principalmente se você posta com frequência.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Armazenamento cheio">
                Muitos vídeos ocupam espaço rápido e deixam o dispositivo lento. Arquivos corrompidos podem travar players.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Use sites confiáveis, escaneie os arquivos baixados e avalie o uso de uma VPN para aumentar a segurança.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu aliado confiável para Pinterest
            </h2>
            <p className="section-muted mb-4">
              Lançamos o videodownload.io em 2022 porque buscávamos uma forma rápida e segura de guardar ideias do Pinterest. Somos
              uma equipe pequena com foco em downloads simples e protegidos, com milhões de usuários satisfeitos e zero vazamentos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Velocidade imediata">
                Conclui downloads em segundos, mesmo em horários de pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sem anúncios">
                Interface limpa, sem pop-ups incômodos.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sem watermarks">
                Clipes prontos para uso em apresentações ou edições.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Downloads ilimitados">
                Nenhum limite diário.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Compatível com qualquer dispositivo">
                De tablets antigos a smartphones modernos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Processo seguro">
                Não armazenamos dados após o download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Respostas sobre downloads do Pinterest
            </h2>
            <p className="section-muted mb-4">
              Reunimos as dúvidas mais comuns sobre o videodownload.io e o download de vídeos do Pinterest para que você comece confiantes.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos de quadros secretos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, suportamos apenas pins públicos. Pins privados exigem permissão do autor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar deixa meu dispositivo lento?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Os arquivos são leves. Observe apenas o espaço livre se guardar muitos vídeos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Por que o vídeo baixado não tem watermark?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Extraímos o arquivo original, removendo marcas visuais para uso pessoal sem ruído.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso salvar apenas o áudio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, escolha MP3 após colar o link para baixar somente o som.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O que faço se o download falhar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifique se o pin é público e se a URL está correta. Tente outro navegador ou limpe o cache. Nosso chat de suporte
                  pode ajudá-lo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Existe limite de duração?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Trabalhamos com vídeos de até 60 minutos. Os mais longos levam um pouco mais de tempo, mas são completados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês guardam as vídeos que baixo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Processamos e excluímos imediatamente. Os arquivos permanecem apenas no seu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O criador recebe aviso do download?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não. Pinterest não notifica o autor; o download é privado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a salvar vídeos do Pinterest hoje
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tenha clipes inspiradores em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copie o link do Pinterest
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Cole em nosso site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Baixe um vídeo limpo
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo do Pinterest
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
              Baixe das plataformas que você mais usa
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
      <FeatureCard icon={VideoIcon} title="Qualidade de vídeo premium">
        Salve vídeos do Pinterest na melhor resolução disponível, até 1080p se o pin original suportar. Sem imagens desfocadas ou cores desbotadas na reprodução. Obtemos o arquivo diretamente dos servidores do Pinterest, preservando cada detalhe nítido para aquele tutorial DIY ou receita.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sem marcas d'água ou sobreposições">
        <a href="https://help.pinterest.com/pt-br/article/download-an-image">O Pinterest exibe o nome de usuário do criador em vídeos baixados através do aplicativo</a>, poluindo a visualização. Removemos tudo isso, entregando um clipe limpo pronto para seus projetos ou uso pessoal. Assista àquela ideia de decoração sem texto bloqueando os detalhes.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
        Use seu telefone, tablet, laptop ou desktop, e funciona perfeitamente. Sem aplicativos ou software adicional necessário. Basta abrir nosso site no navegador, colar o link e baixar. Testado em tudo, desde iPhones antigos até PCs novos, é sempre simples.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades rápidas de download">
        Esperar é chato. Nossa ferramenta obtém vídeos do Pinterest em segundos, geralmente menos de 10 para a maioria dos clipes. Usamos servidores próximos ao Pinterest para extrações rápidas, permitindo que você salve um vídeo de artesanato ou rotina de exercícios durante uma pausa para o café.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente grátis">
        Sem custos, sem cadastros, sem taxas ocultas. Baixe quantos vídeos quiser, todos os dias, sem limites. Mantemos tudo gratuito para que você possa salvar aquela inspiração de casamento ou projeto artístico sem encontrar um paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo seguro e privado">
        Suas informações permanecem seguras. Não armazenamos seus links ou vídeos após o download. Sem rastreamento, sem registros e sem anúncios invasivos. O processo é limpo, mantendo seu dispositivo livre de lixo ou riscos.
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
      <StepCard step={1} title="Copie o link do vídeo do Pinterest">
        <a href="http://www.pinterest.com">Abra o Pinterest</a> no seu telefone ou navegador. Encontre o vídeo que você gosta, como um tutorial de tricô ou uma transformação de casa. Clique nos três pontos no canto superior direito do pin. No menu, selecione "Copiar link". Isso captura a URL completa, algo como pinterest.com/pin/123456789. Certifique-se de que esteja exato.
      </StepCard>
      <StepCard step={2} title="Cole o link no nosso site">
        Vá para videodownload.io no seu navegador. Você verá uma caixa com o texto "Cole aqui o link do Pinterest". Clique dentro e cole o link copiado. Verifique se começa com pinterest.com para evitar erros. Apenas pins públicos funcionam; vídeos de quadros privados ou secretos não serão baixados.
      </StepCard>
      <StepCard step={3} title="Buscamos e limpamos o vídeo">
        Clique no botão verde "Download" ao lado da caixa. Nosso sistema obtém o vídeo dos servidores do Pinterest em segundos. Removemos quaisquer marcas d'água e garantimos qualidade sólida. O áudio permanece claro, para que você não perca etapas naquela receita ou guia de artesanato.
      </StepCard>
      <StepCard step={4} title="Salve o clipe no seu dispositivo">
        Você terá opções: MP4 para o vídeo completo com som ou MP3 apenas para áudio. Escolha MP4 para a maioria dos clipes. Toque para baixar e ele é salvo na sua pasta Downloads ou galeria do telefone. Dê um nome claro, como "diy_pintura.mp4", antes de salvar. Reproduza para confirmar que está perfeito.
      </StepCard>
    </div>
  );
}
