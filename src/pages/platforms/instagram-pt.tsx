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

export default function InstagramPagePt() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Baixar Vídeo do Instagram | Grátis & HD",
    description:
      "Baixe vídeos do Instagram, Reels, Stories e IGTV em mp4, 1080p e 4k. Downloader e conversor de vídeos online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caixa de download mínima */}
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Cole uma URL de vídeo, Reel ou Story do Instagram"
            />
          </div>
          {/* Recursos */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Recursos
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Baixe vídeos do Instagram com facilidade
          </h2>
          <p className="text-muted-foreground mb-6">
            Seu guia simples para salvar Reels e clipes para assistir offline.
          </p>

          <EnhancedFeatures />

          {/* Como baixar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Como baixar vídeos do Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Passo a passo claro para salvar vídeos sem esforço
          </h2>
          <p className="text-muted-foreground mb-6">
            Colocar vídeos do Instagram no seu dispositivo é simples com o
            videodownload.io. Siga estes quatro passos diretos para baixar
            qualquer vídeo em minutos. Cada etapa foi pensada para ser intuitiva,
            mesmo se você não for expert em tecnologia.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Baixar vídeo do Instagram
              </Button>
            </a>
          </div>

          {/* Por que baixar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que baixar vídeos do Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Melhores casos de uso
            </h2>
            <p className="section-muted mb-4">
              O feed acelerado do Instagram enterra conteúdos valiosos rapidinho.
              Baixar permite guardar os clipes que importam, transformando o
              scroll em uma coleção pessoal. Não é sobre salvar cada post, e sim
              manter vídeos que inspiram ou significam algo. Você decide o que
              fica, mesmo que contas virem privadas ou posts sumam.
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
                    Salve dicas de viagem ou Reels de treino para voos ou
                    acampamentos sem sinal. Pais baixam músicas infantis ou
                    histórias para viagens de carro, mantendo as crianças
                    entretidas sem Wi-Fi.
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
                    Criadores usam downloads para remixar. Uma blogueira de moda
                    guarda Reels de looks para misturar no conteúdo dela,
                    adicionando narrações ou novos ângulos. Músicos salvam sons
                    em alta para sobrepor nas faixas, evitando marcas d'água e
                    garantindo cortes limpos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fazer backup das suas postagens
                  </div>
                  <p className="text-sm text-muted-foreground">
                    O Instagram pode deletar ou falhar, então criadores salvam
                    seus Reels em HD em discos externos. Estudantes guardam
                    dicas de estudo ou trechos de aula para rever sem precisar
                    logar no app.
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
                    Transforme um Reel em um Short do YouTube ou clipe do TikTok
                    com alguns ajustes. Negócios salvam depoimentos de clientes
                    para incorporar em sites, aumentando a confiança.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Recordações pessoais
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Baixe momentos em família, como a dança de casamento de um
                    primo ou a atualização do bebê de um amigo, para rever em
                    encontros ou guardar por anos. É um jeito de manter memórias
                    por perto.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Baixar vídeos do Instagram oferece flexibilidade e conveniência,
              tornando mais fácil curtir o conteúdo do seu jeito, seja para
              lazer, trabalho ou aprendizado.
            </p>
          </div>

          {/* Quem deve baixar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quem deve baixar vídeos do Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Pessoas que mais se beneficiam
            </h2>
            <p className="section-muted mb-4">
              O scroll infinito do Instagram prende milhões, mas baixar vídeos é
              ideal para quem usa a plataforma com propósito. É para quem vê os
              Reels como ferramentas, inspiração ou lembranças, não só
              entretenimento rápido. Se você está construindo, aprendendo ou
              guardando momentos, essa solução é para você.
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
                    Postam diariamente e buscam ideias em Reels em alta.
                    Baixar permite guardar o próprio trabalho ou estudar outros,
                    como uma vlogger de gastronomia coletando técnicas de
                    empratamento para adaptar ao estilo dela sem logotipos no
                    meio.
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
                    Docentes guardam Reels demonstrativos para aulas, como
                    experimentos científicos, exibindo sem depender da internet.
                    Estudantes baixam guias de estudo ou exercícios de idiomas e
                    revisam offline no próprio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Famílias
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pais salvam os primeiros passos de um filho ou um momento de
                    férias para compartilhar com parentes ou arquivar para o
                    futuro. É mais confiável do que esperar que o Instagram
                    mantenha tudo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Donos de negócios e marketers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Uma boutique salva posts de clientes usando seus produtos
                    para anúncios ou prova social. Marketers testam tendências de
                    Reels para campanhas e adaptam o conteúdo em várias redes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entusiastas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fãs de treino guardam fluxos de yoga para praticar na
                    academia. Amantes de DIY baixam tutoriais de artesanato para
                    seguir passo a passo. Mesmo usuários casuais salvam clipes
                    motivacionais para rever em dias difíceis.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Não importa seu papel ou estilo de vida: baixar vídeos do
              Instagram economiza tempo, dados e esforço enquanto mantém seu
              conteúdo favorito acessível.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              É legal baixar vídeos do Instagram?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              O que você precisa saber sobre a lei
            </h2>
            <p className="section-muted mb-4">
              Baixar vídeos do Instagram não é totalmente preto no branco. As
              regras do Instagram permitem salvar posts públicos pelo app para
              uso pessoal, desde que o criador não tenha desativado. Usar
              ferramentas de terceiros como a nossa tecnicamente viola os
              termos, o que pode sinalizar sua conta, embora banimentos sejam
              raros a menos que haja download em massa ou republicação.
            </p>
            <p className="section-muted mb-2">
              Legalmente, os vídeos pertencem aos criadores sob leis de direitos
              autorais como a DMCA nos EUA. Guardar para visualização pessoal
              geralmente se encaixa em uso justo, como assistir a um Reel offline.
              Mas compartilhar sem permissão ou editar para fins lucrativos pode
              gerar alegações de infração. A música nos Reels complica mais,
              pois gravadoras detêm as faixas, mas salvamentos pessoais curtos
              raramente enfrentam problemas.
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
                    Se o criador permite downloads ou o vídeo é de domínio
                    público, tudo certo. Uso educacional, como professores
                    mostrando clipes em aula, muitas vezes se enquadra como uso
                    justo. Confira as legendas dos posts para ver se há
                    permissão. Mantenha para uso privado e credite os criadores
                    ao compartilhar e você tende a ficar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riscos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riscos de baixar vídeos do Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Perigos potenciais e como evitá-los
            </h2>
            <p className="section-muted mb-4">
              Baixar de sites de terceiros parece fácil, mas páginas suspeitas
              trazem problemas reais. Nem toda ferramenta é confiável, e clicar
              sem cuidado pode comprometer seu dispositivo ou dados. Conheça os
              riscos para se manter seguro antes de apertar o botão de download.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware é a maior ameaça">
                Sites duvidosos escondem vírus em arquivos de vídeo, instalando
                spyware ou ransomware. Um download ruim pode bloquear seus
                arquivos ou roubar senhas. Alguns relatos mostram ferramentas com
                keyloggers, transformando um simples Reel em uma violação de
                dados.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Golpes de phishing">
                Páginas falsas imitam o login do Instagram e capturam suas
                credenciais se você digitar. Pop-ups insistentes empurram
                "atualizações" que instalam rastreadores e monitoram cada clique.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Problemas de qualidade">
                Sites ruins comprimem os vídeos, deixando frames travados ou
                áudio em silêncio. Você espera um Reel em HD e recebe um arquivo
                borrado e inutilizável.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Vazamento de privacidade">
                Alguns serviços registram suas downloads e vendem seu IP ou
                preferências de vídeo para anunciantes. Hackers podem obter esses
                dados e disparar spam ou golpes.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Banimentos no Instagram">
                Downloads intensos com ferramentas de terceiros podem sinalizar a
                conta, especialmente para criadores. Você pode perder o perfil ou
                seguidores de um dia para o outro.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Problemas de armazenamento">
                Reels acumulam rápido, deixando celulares lentos ou enchendo
                discos. Arquivos corrompidos podem travar o player, fazendo você
                perder tempo tentando consertar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Use sites confiáveis, escaneie os arquivos baixados e considere uma
              VPN para manter tudo seguro.
            </p>
          </div>

          {/* Por que usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por que usar o videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Seu parceiro confiável para downloads do Instagram
            </h2>
            <p className="section-muted mb-4">
              Criamos o videodownload.io em 2022 porque estávamos cansados de
              apps cheios de bugs e <a href="https://blog.avast.com/malicious-browser-extensions-avast">downloaders com malware</a>.
              Como usuários do Instagram, queríamos um jeito limpo de salvar
              Reels sem dor de cabeça ou risco. Somos uma equipe pequena, focada
              em tornar o download simples e seguro. Depois de milhões de
              downloads, não tivemos violações e os usuários continuam voltando
              pela confiabilidade.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Downloads rápidos">
                Menos de cinco segundos mesmo em horários de pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sem anúncios, sem pop-ups">
                Apenas uma página limpa.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sem marcas d'água">
                Cada vídeo sai puro.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Salvar ilimitado">
                Sem limites diários.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona em qualquer dispositivo">
                De celulares a computadores.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                Nada fica armazenado depois do download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Perguntas frequentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dúvidas comuns sobre baixar vídeos do Instagram
            </h2>
            <p className="section-muted mb-4">
              Reunimos respostas para as perguntas mais frequentes sobre o uso do
              videodownload.io e o download de vídeos do Instagram para ajudar
              você a começar com confiança.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar vídeos privados do Instagram?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, apenas lidamos com Reels e posts públicos. Conteúdos
                  privados precisam de permissão do criador, e respeitamos isso
                  para manter tudo legítimo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Baixar prejudica o desempenho do meu telefone?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Não, os arquivos vêm limpos e prontos. Basta garantir que você
                  tenha armazenamento livre. O download é tão leve quanto
                  assistir ao Reel normalmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Posso baixar apenas o áudio de um Reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim! Oferecemos opção MP3 para que você capture apenas o áudio.
                  Perfeito para mixes, dublagens ou listas de reprodução offline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Preciso instalar algum aplicativo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nada de instalação. Tudo é feito no navegador. Cole o link,
                  clique em baixar e pronto.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  As marcas d'água são removidas automaticamente?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sim, removemos marcas d'água do Instagram para que o vídeo fique
                  pronto para uso, sem texto cobrindo a imagem.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Há limites de tamanho para os vídeos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Trabalhamos com Reels de até 60 minutos, embora a maioria seja
                  curta. Os maiores demoram um pouco mais, mas entregamos o
                  arquivo completo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Vocês guardam meus downloads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  De jeito nenhum. Processamos instantaneamente e excluímos tudo
                  depois. Seus arquivos ficam apenas no seu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  O criador consegue ver que baixei o Reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  O Instagram não envia notificações. Seu download permanece
                  privado, sem alertas para o autor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comece a salvar vídeos do Instagram agora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Baixe seus Reels offline em segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copie o link do Instagram
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
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Baixar vídeo do Instagram
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
      <FeatureCard icon={VideoIcon} title="Vídeo cristalino em HD">
        Pegue vídeos do Instagram em toda a qualidade, até 1080p quando a
        publicação original permite. Nada de reprodução granulada ou cores sem
        vida ao assistir depois. Buscamos o arquivo direto dos servidores do
        Instagram para manter cada frame nítido, perfeito para aquele clip de
        viagem ou demo de culinária.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Downloads sem marca d'água">
        O Instagram aplica logo e nome de usuário nos vídeos salvos, poluindo a
        tela. Removemos tudo, deixando um clipe limpo e pronto para editar ou
        compartilhar. Assista à coreografia ou ao momento com pets sem textos
        cobrindo a ação.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona em todos os dispositivos">
        Use iPhone, Android, PC ou tablet e tudo simplesmente funciona. Sem apps
        para instalar ou softwares complicados. Abra o site em qualquer
        navegador, cole o link e baixe. Testado de laptops antigos a celulares
        novos, o fluxo é suave sempre.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Downloads ultrarrápidos">
        Ninguém gosta de esperar. Nossa ferramenta captura vídeos do Instagram
        em segundos, muitas vezes em menos de 10 para a maioria dos clipes.
        Usamos servidores próximos aos do Instagram para garantir velocidade, o
        que permite salvar um Reel no intervalo sem travamentos ou erros.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Acesso totalmente gratuito">
        Sem taxas, cadastros ou cobranças escondidas. Baixe quantos vídeos quiser
        por dia, sem limites. Mantemos gratuito para você salvar aquela rotina de
        treino ou cena engraçada sem se preocupar com paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processo seguro e protegido">
        Sua privacidade fica blindada. Não guardamos links nem vídeos depois do
        download. Nada de rastreamento, dados armazenados ou anúncios suspeitos.
        O processo é limpo e seu dispositivo permanece protegido.
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
      <StepCard step={1} title="Copie o link do vídeo no Instagram">
        <a href="http://www.instagram.com">Abra o Instagram</a> no celular ou no
        navegador. Encontre o Reel ou vídeo que deseja, como uma receita rápida
        ou vlog de viagem. Toque nos três pontos no canto superior direito do
        post. No menu, selecione "Copiar link". Isso captura a URL completa,
        algo como instagram.com/reel/ABC123. Confira se está correta.
      </StepCard>
      <StepCard step={2} title="Cole o link em nosso site">
        Acesse o videodownload.io no navegador. Você verá uma caixa clara com o
        texto "Cole o link do Instagram aqui". Clique dentro e cole o link
        copiado. Verifique se começa com instagram.com para evitar erros. Posts
        privados não funcionam, mas Reels e vídeos públicos estão liberados.
      </StepCard>
      <StepCard step={3} title="Nós buscamos e limpamos o vídeo">
        Clique no botão verde "Baixar" ao lado da caixa. Nosso sistema captura o
        vídeo dos servidores do Instagram em segundos. Removemos a marca d'água e
        conferimos a qualidade, assim você não fica preso a arquivos problemáticos.
        O áudio continua sincronizado, pronto para reproduzir.
      </StepCard>
      <StepCard step={4} title="Salve o arquivo no seu dispositivo">
        Você verá opções: MP4 para o vídeo completo com áudio ou MP3 apenas para
        o som. Escolha MP4 para a maioria dos clipes. Toque para baixar e o
        arquivo irá para a pasta de Downloads ou galeria. Renomeie algo simples,
        como "reel_treino.mp4", antes de salvar. Reproduza para confirmar que
        está perfeito.
      </StepCard>
    </div>
  );
}
