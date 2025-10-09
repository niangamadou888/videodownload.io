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

export default function TikTokPageFr() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Télécharger Vidéo TikTok | Gratuit & HD",
    description: "Téléchargez des vidéos TikTok sans filigrane en qualité HD. Téléchargeur TikTok en ligne gratuit - rapide, sûr et sans watermark."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Boîte de téléchargement minimale (sans autres sections de la page d'accueil) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Télécharger une vidéo TikTok
          </h1>
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez une URL de vidéo TikTok"
            />
          </div>
          {/* Fonctionnalités */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Téléchargez facilement des vidéos TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Le guide essentiel pour enregistrer des clips hors ligne
          </h2>
          <p className="text-muted-foreground mb-6">
            Téléchargez des vidéos TikTok en qualité HD sans filigrane. Notre outil offre un moyen rapide, sécurisé et entièrement gratuit d'enregistrer vos clips préférés pour les visionner hors ligne.
          </p>

          <EnhancedFeatures />

          {/* Comment télécharger */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un guide simple pour enregistrer vos vidéos en quelques secondes
          </h2>
          <p className="text-muted-foreground mb-6">
            Avec videodownload.io, mettre une vidéo TikTok sur votre appareil est un jeu d'enfant. Suivez ces quatre étapes très simples pour télécharger n'importe quel clip en quelques minutes. Chaque étape est pensée pour rester intuitive, même si vous n'êtes pas expert en technologie.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo TikTok
              </Button>
            </a>
          </div>

          {/* Pourquoi télécharger */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les meilleurs usages du visionnage hors ligne
            </h2>
            <p className="section-muted mb-4">
              TikTok évolue à toute vitesse : les tendances disparaissent dans la nuit et les comptes changent de cap. Télécharger vous permet de conserver ce qui vous parle vraiment et de transformer les visionnages éphémères en contenus durables. Il ne s'agit pas d'accumuler tout et n'importe quoi, mais de garder ce qui vous inspire, vous fait rire ou vous rend service. Vous constituez ainsi votre propre bibliothèque, à l'abri des effacements et des bugs de l'application.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visionnage hors ligne en déplacement
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avion, métro ou Wi-Fi capricieux : rien de pire qu'une vidéo qui charge à l'infini. Enregistrez à l'avance l'astuce voyage ou le sketch qui vous plaît pour le lire sans interruption. Les parents gardent des comptines ou des histoires adaptées aux enfants pour les trajets, sans écran figé en plein refrain.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix et création de contenu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les créateurs récupèrent des clips pour assembler leurs idées et ajouter leur touche sans repartir de zéro. Un adepte de fitness télécharge par exemple des vidéos de posture pour les comparer à sa séance et affiner ses tutoriels. Les passionnés de DIY, eux, sauvegardent les étapes afin de mettre la vidéo en pause et reproduire le geste à la maison.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sauvegarder vos propres contenus
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quand vous publiez souvent, une modification ou une suspension peut faire disparaître un clip. Téléchargez vos vidéos sur un support externe pour les préserver des aléas de la plateforme. Les étudiants, eux, enregistrent des extraits de cours ou des astuces de révision pour les consulter sans devoir se reconnecter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutilisation sur d'autres plateformes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exportez vos vidéos vers Instagram Reels ou YouTube Shorts en les ajustant pour toucher un public plus large. Un petit commerçant peut garder les témoignages clients pour les mettre sur son site ou dans sa boutique, renforçant ainsi la confiance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archives personnelles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Certains souvenirs familiaux - la recette dansée par mamie, un moment précieux - méritent mieux qu'une simple application. Téléchargez-les pour les projeter en réunion de famille ou les transmettre, afin que la mémoire reste intacte.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos TikTok vous apporte souplesse et confort : vous profitez des contenus comme vous le souhaitez, pour le plaisir, le travail ou l'apprentissage.
            </p>
          </div>

          {/* Qui devrait télécharger */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ceux qui profitent le plus des vidéos hors ligne
            </h2>
            <p className="section-muted mb-4">
              Tout le monde connaît l'attrait d'un bon clip TikTok, mais le téléchargement s'adresse surtout à certains profils. C'est pour celles et ceux qui voient l'application comme un outil, pas seulement comme un passe-temps, et qui utilisent les vidéos pour nourrir leur quotidien ou leur travail. Si les contenus influencent votre journée, sauvegarder des fichiers devient logique.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Créateurs de contenu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ils filment chaque jour, ajustent leur style en fonction des tendances virales. Télécharger leurs propres publications ou celles qui les inspirent leur permet d'aller plus loin dans le montage, par exemple en intégrant une tendance à une série sans filigrane gênant. Une créatrice beauté récupère les réactions de sa communauté pour les intégrer dans ses réponses vidéo et développer sa chaîne plus intelligemment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Enseignants et étudiants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les professeurs sauvegardent des démonstrations pour les cours, comme des reconstitutions historiques, afin de les montrer sans craindre une panne de réseau. Les élèves téléchargent des astuces de maths ou des leçons de langue pour faire leurs devoirs à leur rythme. C'est une approche pratique, tirée directement du foisonnement de l'application.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Parents et familles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    La première comptine d'anniversaire ou la déco faite maison ? Enregistrez-la proprement, imprimez quelques images ou gravez une vidéo pour les grands-parents. Plus besoin de dépendre d'un cloud qui pourrait défaillir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Petits entrepreneurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Un café télécharge les vidéos de clients pour les afficher sur ses menus ou newsletters, ce qui stimule l'engagement. Les marketeurs s'inspirent des tendances pour tester des idées de campagnes et les adapter rapidement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Passionnés
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les jardiniers récupèrent des guides de plantation pour suivre les saisons, les cuisiniers sauvegardent des recettes afin de tester des variantes. Même les amateurs téléchargent des séances de sport pour la salle, transformant un like en routine.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre profil ou votre mode de vie, télécharger des vidéos TikTok vous fait gagner du temps, économise des données et garde vos contenus favoris à portée de main.
            </p>
          </div>

          {/* Questions juridiques */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Télécharger des vidéos TikTok, est-ce légal ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce qu'il faut savoir sur la loi
            </h2>
            <p className="section-muted mb-4">
              Le téléchargement de vidéos TikTok reste une zone grise qui dépend de l'usage que vous en faites. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Les règles de TikTok autorisent l'enregistrement de vidéos publiques</a> pour un visionnage hors ligne tant que le créateur ne l'a pas bloqué. Rien à signaler si c'est pour vous, par exemple pour garder une vidéo drôle. En revanche, leurs conditions interdisent les outils tiers : utiliser un service comme le nôtre peut donc théoriquement alerter la plateforme si elle repère des schémas suspects. Dans les faits, des millions d'utilisateurs le font sans problème, les modérations visant surtout les reuploads massifs.
            </p>
            <p className="section-muted mb-4">
              Le droit d'auteur est plus strict. Les vidéos appartiennent à leurs auteurs et sont protégées par des lois comme le DMCA aux États-Unis. Les enregistrements personnels, pour un visionnage privé, entrent souvent dans le fair use lorsque vous ne les modifiez pas et ne les diffusez pas. Mais republier sans crédit ou transformation constitue une violation passible de retrait ou d'action en justice. La musique ajoute un niveau supplémentaire, car les labels détiennent les droits, même si de courts extraits personnels déclenchent rarement des signalements.
            </p>
            <p className="section-muted mb-2">
              Certaines situations permettent toutefois un téléchargement légal :
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Autorisation du créateur
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si l'auteur de la vidéo autorise explicitement le téléchargement, vous êtes couvert.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Contenus du domaine public
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les contenus qui ne sont plus protégés par le droit d'auteur peuvent être téléchargés librement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Usage pédagogique loyal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les établissements scolaires utilisent des extraits éducatifs au titre du fair use pour leurs cours. Vérifiez toujours la description de la vidéo pour connaître les permissions.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              En résumé, restez dans un cadre privé et respectueux : vous serez généralement tranquille. Si vous partagez, demandez l'autorisation ou créditez généreusement.
            </p>
          </div>

          {/* Risques */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les risques liés au téléchargement de vidéos TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les dangers potentiels et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Les téléchargeurs tiers semblent pratiques, mais ils cachent souvent des pièges. Tous les sites ne jouent pas franc jeu, et foncer sans vérifier expose votre appareil. Prenez le temps d'évaluer ces risques avant de coller un lien pour éviter les mauvaises surprises.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malwares venant de sites douteux">
                Certains sites peu fiables glissent des virus dans les fichiers téléchargés, injectant un cheval de Troie ou un ransomware dans votre MP4. Un clic suffit pour qu'un programme fouille vos dossiers ou bloque votre écran contre rançon. Des keyloggers peuvent même voler vos mots de passe via des outils soi-disant gratuits.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Arnaques de phishing">
                Des faux boutons de téléchargement renvoient vers des pages imitant TikTok pour récupérer vos identifiants. D'autres affichent de fausses mises à jour installant des logiciels espions qui suivent votre activité au-delà de l'application.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de données">
                Certains services enregistrent vos habitudes de visionnage ou votre adresse IP pour les revendre à des annonceurs. Pire, ils peuvent partager ces informations avec des pirates, entraînant spam ciblé et tentatives d'escroquerie.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Perte de qualité">
                Les outils bas de gamme compressent les fichiers, ajoutent des artefacts ou font sauter des images. Le son se décale, les couleurs pâlissent : le clip perd en netteté.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Suspension de compte">
                TikTok peut détecter des téléchargements massifs provenant de services externes et suspendre les profils, surtout ceux des créateurs. Vous risquez de perdre vos abonnés du jour au lendemain.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Saturation de l'appareil">
                Multiplier les sauvegardes remplit vite la mémoire et ralentit le téléphone. Et un fichier corrompu peut planter votre lecteur, vous obligeant à dépanner au lieu de regarder.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Restez sur des sites fiables pour éviter l'essentiel, mais pensez aussi à analyser vos fichiers et à utiliser un VPN pour plus de protection.
            </p>
          </div>

          {/* Pourquoi utiliser videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre partenaire de confiance pour les téléchargements TikTok
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 car nous en avions assez des applications bancales qui plantent ou ajoutent des éléments indésirables. Fans de TikTok, nous voulions une solution simple pour enregistrer nos clips sans prise de tête. Pas de grosse société derrière, juste une petite équipe qui résout les irritants du quotidien. Faites-nous confiance : nous avons géré plusieurs millions de téléchargements sans fuite de données ni avalanche de plaintes. Les utilisateurs reviennent pour la fiabilité, et nous améliorons l'outil grâce à leurs retours.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Ultra rapide">
                Les vidéos sont prêtes en moins de cinq secondes, même aux heures de pointe. Nos serveurs optimisés garantissent des téléchargements express.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sans publicité intrusive">
                Une interface épurée, aucun pop-up qui détourne l'attention. Nous privilégions votre confort sans annonces agressives.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sans filigrane garanti">
                Chaque fichier est récupéré sans watermark TikTok. Idéal pour un rendu propre et professionnel.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Téléchargements illimités">
                Téléchargez des centaines de vidéos par jour, sans limite. Utilisez le service autant que nécessaire.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Compatible tous appareils">
                Smartphone, tablette ou ordinateur : tout fonctionne sans installer de logiciel.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sécurité maximale">
                Nous chiffrons les liens et effaçons les traces immédiatement. Votre confidentialité reste notre priorité.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Questions fréquentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Réponses sur videodownload.io et le téléchargement TikTok
            </h2>
            <p className="section-muted mb-4">
              Nous avons rassemblé les réponses aux questions les plus courantes pour vous aider à utiliser videodownload.io et télécharger des vidéos TikTok en toute sérénité.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos TikTok privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, notre outil ne fonctionne que sur les vidéos publiques. Les contenus privés nécessitent l'accord du créateur et nous les respectons. S'il s'agit des vôtres, utilisez l'export TikTok pour les sauvegarder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement ralentit-il mon téléphone ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pas via notre service. Les fichiers sont légers et nous n'installons rien. Surveillez simplement votre stockage : les vidéos peuvent s'accumuler rapidement si vous en gardez beaucoup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi mon téléchargement n'a-t-il pas de filigrane ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok ajoute un watermark pour suivre les partages, mais nous récupérons le flux original et supprimons ce marquage. La vidéo reste propre pour un usage personnel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je récupérer uniquement l'audio d'un TikTok ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez l'option MP3 après avoir collé le lien. Parfait pour extraire une musique ou une voix off sans l'image.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si le téléchargement échoue ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez que le lien est complet et public. Essayez un autre navigateur ou videz le cache. Si le problème persiste, notre support vous répond en quelques minutes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite de taille de fichier ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous gérons des vidéos jusqu'à 60 minutes, même si la plupart des TikToks sont courts. Les formats plus longs prennent un peu plus de temps mais restent intacts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservez-vous mes vidéos téléchargées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non. Nous traitons la vidéo à la volée puis supprimons tout. Les fichiers restent chez vous, aucun double n'est stocké sur nos serveurs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Les créateurs voient-ils que j'ai téléchargé leur vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok ne les avertit pas. Les téléchargements restent anonymes, vous évitez donc les situations gênantes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Commencer maintenant */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Prêt à sauvegarder vos favoris ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Récupérez vos vidéos hors ligne dès aujourd'hui
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copier le lien TikTok
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Coller ici
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Cliquer sur Télécharger
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo TikTok
                </Button>
              </a>
            </div>
          </div>

          {/* Découvrir d'autres téléchargeurs */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explorer d'autres téléchargeurs
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Téléchargez depuis vos plateformes préférées
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
                        Télécharger une vidéo {p.name}
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
      <FeatureCard icon={VideoIcon} title="Téléchargements en HD">
        Récupérez vos vidéos en haute définition, jusqu'à 1080p lorsque la source le permet. Aucun bord flou ni pixel visible : nous tirons directement le fichier depuis TikTok pour conserver les couleurs et les détails.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Sans aucun filigrane">
        L'outil intégré de TikTok ajoute un logo sur chaque clip sauvegardé. Ici, nous le retirons complètement. La vidéo reste nette, prête à être partagée ou montée sans overlay gênant.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Compatible avec tous les appareils">
        Android, iPhone, PC Windows ou Mac : tout fonctionne sans installation d'application. Ouvrez simplement notre site, collez le lien et téléchargez. Nous l'avons testé sur des appareils anciens comme récents.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Traitement ultra rapide">
        L'attente est frustrante quand vous voulez garder une recette virale ou une astuce fitness. Notre outil récupère la vidéo en quelques secondes, souvent en moins de dix. Nos serveurs proches de TikTok évitent les longues mises en mémoire tampon et les échecs.
      </FeatureCard>
      <FeatureCard icon={Download} title="100 % gratuit">
        Pas d'inscription, pas de carte bancaire, aucun frais caché. Téléchargez autant de vidéos que vous le souhaitez chaque jour, sans dépenser un centime.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Sécurisé et privé">
        Nous ne conservons ni vos liens ni vos vidéos. Une fois le téléchargement lancé, aucune donnée n'est stockée. Pas de pop-up ni de suivi : vos informations restent entre vos mains.
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
      <StepCard step={1} title="Récupérer le lien vidéo dans l'application">
        <a href="https://www.tiktok.com/">Ouvrez TikTok</a> sur votre smartphone ou via le site web sur ordinateur. Faites défiler jusqu'à la vidéo qui vous intéresse, qu'il s'agisse d'un tuto maquillage express ou des premiers pas de votre enfant. Touchez la flèche de partage sur la droite, celle qui est courbée. Dans le menu qui s'affiche, choisissez « Copier le lien ». Vous obtenez l'URL complète du type tiktok.com/@pseudo/video/123456789. Vérifiez bien que c'est le bon lien.
      </StepCard>
      <StepCard step={2} title="Coller le lien dans notre outil">
        Rendez-vous sur videodownload.io dans votre navigateur. En haut de la page, un grand champ indique « Collez le lien TikTok ici ». Cliquez dedans et collez l'URL copiée. Vérifiez qu'elle commence bien par tiktok.com pour éviter les erreurs. Si la vidéo est privée, cela ne fonctionnera pas, mais les contenus publics passent sans souci.
      </StepCard>
      <StepCard step={3} title="Laisser le système préparer le fichier">
        Appuyez sur le bouton « Télécharger » juste à côté du champ. Nous récupérons aussitôt la vidéo depuis les serveurs de TikTok. Un petit chargement s'affiche quelques secondes, le temps de retirer le watermark et de vérifier la qualité. Pas besoin d'intervenir, on s'occupe de tout. Si la vidéo contient du son, il reste bien synchronisé.
      </StepCard>
      <StepCard step={4} title="Choisir le format et enregistrer sur l'appareil">
        Des options apparaissent : MP4 pour la vidéo avec audio ou MP3 si vous ne voulez que la piste sonore. Sélectionnez ce qui vous convient puis laissez le fichier se télécharger dans votre dossier habituel (Téléchargements sur PC ou Pellicule sur mobile). Donnez-lui un nom parlant, du style « tuto_danse.mp4 ». Ouvrez-le pour vérifier et profitez-en hors ligne quand vous voulez.
      </StepCard>
    </div>
  );
}
