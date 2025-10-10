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

export default function RedditPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Vidéo Reddit | Gratuit & HD",
    description: "Téléchargez des vidéos et posts Reddit en mp4, qualité 1080p. Téléchargeur et convertisseur de vidéos en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Reddit" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Reddit Video
          </h1>
          <div id="reddit-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez une URL de vidéo ou post Reddit"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez des Vidéos Reddit Sans Effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre Guide Simple pour Sauvegarder des Clips Hors Ligne
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment Télécharger des Vidéos Reddit
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un Guide Clair, Étape par Étape pour Sauvegarder des Vidéos Sans Effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtenir des vidéos Reddit sur votre appareil est simple avec
            videodownload.io. Suivez ces quatre étapes simples pour
            télécharger n'importe quelle vidéo en quelques minutes. Chaque étape est conçue pour être
            intuitive, même si vous n'êtes pas technophile.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#reddit-downloader">
              <Button variant="download" className="px-6">
                Download Reddit Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi Télécharger des Vidéos Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs Cas d'Usage
            </h2>
            <p className="section-muted mb-4">
              Le fil Reddit est un mélange sauvage d'idées, mais les bonnes vidéos sont vite enterrées. Télécharger vous permet de garder les clips qui vous touchent, transformant des scrolls rapides en une collection personnelle. Il s'agit de sauvegarder ce qui inspire, enseigne ou vous fait rire, pas seulement de collecter des posts aléatoires. Vous contrôlez votre collection, à l'abri des fils supprimés ou des changements d'application.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visionnage Hors Ligne
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des tutoriels ou des clips d'actualités pour les vols, les trajets ou les endroits avec un mauvais Wi-Fi. Les parents téléchargent des animations adaptées aux enfants pour les trajets en voiture, gardant les enfants heureux sans mise en mémoire tampon.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutilisation pour les Créateurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les blogueurs récupèrent des clips viraux pour les remixer dans leur contenu, ajoutant des commentaires ou des modifications. Les streamers sauvegardent des moments de jeu pour les analyser ou les partager sur d'autres plateformes, évitant les filigranes pour une utilisation propre.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivage de Vos Propres Posts
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous partagez des vidéos sur Reddit, elles peuvent disparaître suite à des interdictions de subreddit ou des bugs de plateforme. Téléchargez-les sur un disque pour protéger votre travail, comme une démo de projet ou un vlog personnel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et Loisirs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les étudiants sauvegardent des démos scientifiques ou des conseils de codage pour étudier hors ligne. Les amateurs téléchargent des guides DIY ou des tutoriels d'art pour pratiquer à leur rythme, sans avoir à fouiller à nouveau dans les subreddits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Partage de Moments
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez le clip drôle d'un ami ou un moment fort de la communauté pour l'envoyer dans des chats ou le garder pour plus tard. C'est une façon de conserver des souvenirs sans dépendre de l'application.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Reddit offre flexibilité et commodité,
              facilitant la consommation de contenu selon vos conditions, que ce soit pour le plaisir,
              le travail ou l'apprentissage.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui Devrait Télécharger des Vidéos Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personnes qui Bénéficient le Plus du Téléchargement
            </h2>
            <p className="section-muted mb-4">
              Reddit est un hub pour les communautés de niche, mais télécharger des vidéos convient aux personnes qui l'utilisent pour apprendre, créer ou se connecter. C'est pour ceux qui voient les posts comme plus que du divertissement, transformant les clips en outils ou souvenirs. Si vous êtes actif dans les subreddits et voulez garder ce qui compte, télécharger est votre choix.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Créateurs de Contenu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les streamers et vlogueurs sauvegardent des clips de jeu ou des vidéos de réaction pour les remixer pour leur audience. Ils téléchargent aussi leurs propres posts, gardant des copies propres sans logos pour les montages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Amateurs et Bricoleurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les artisans sauvegardent des tutoriels de travail du bois ou de couture à suivre à la maison. Les gamers téléchargent des clips de stratégie pour étudier les mouvements. C'est de l'inspiration pratique, prête hors ligne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Étudiants et Éducateurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les enseignants sauvegardent des vidéos de démonstration pour les cours, comme des expériences de physique. Les étudiants récupèrent des conseils d'étude ou des leçons de langue à revoir sans se reconnecter.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familles et Utilisateurs Occasionnels
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les parents sauvegardent des clips drôles d'enfants ou des vidéos d'animaux à partager lors de rassemblements. Les amis téléchargent des moments forts de subreddit pour en rire plus tard.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Petites Entreprises et Marketeurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les boutiques sauvegardent des avis d'utilisateurs ou des démos de produits à présenter sur des sites web. Les pros des réseaux sociaux récupèrent des clips tendance pour les analyser ou les réutiliser, gardant leur contenu frais.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Peu importe votre rôle ou style de vie, télécharger des vidéos Reddit peut
              économiser du temps, des données et des efforts tout en gardant votre contenu préféré
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il Légal de Télécharger des Vidéos Reddit ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce que Vous Devez Savoir sur la Loi
            </h2>
            <p className="section-muted mb-4">
              Les vidéos sont protégées par des droits d'auteur par leurs créateurs en vertu de lois comme le <a href="https://fr.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> aux États-Unis. Sauvegarder pour un visionnage privé, comme regarder un tutoriel hors ligne, compte souvent comme usage équitable. Mais partager sans permission ou utiliser à des fins lucratives peut entraîner des problèmes juridiques. La musique ou les voix off dans les vidéos peuvent avoir des couches de droits d'auteur supplémentaires, bien que les sauvegardes personnelles courtes rencontrent rarement des problèmes.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quand C'est Autorisé
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si le créateur autorise les téléchargements ou le contenu est dans le domaine public, vous êtes tranquille. L'utilisation éducative, comme montrer un clip en classe, est souvent qualifiée d'usage équitable. Vérifiez les commentaires des posts pour les permissions. Gardez les téléchargements privés et créditez les créateurs si vous partagez pour rester en sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les Risques Associés au Téléchargement de Vidéos Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers Potentiels et Comment les Éviter
            </h2>
            <p className="section-muted mb-4">
              Les téléchargeurs tiers semblent faciles, mais les douteux apportent de vrais problèmes. Tous les sites ne sont pas fiables, et cliquer négligemment peut nuire à votre appareil ou données. Connaissez les risques avant de commencer pour éviter les problèmes par la suite.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Logiciels Malveillants"
              >
                Les sites peu fiables cachent des virus dans les fichiers vidéo, introduisant des logiciels espions ou des rançongiciels. Un mauvais téléchargement peut verrouiller vos fichiers ou voler des mots de passe. Certains outils ont été pris avec des enregistreurs de frappe, transformant une sauvegarde de mème en violation de données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Escroqueries de Phishing">
                Les fausses pages de téléchargement imitent la connexion Reddit, récupérant vos identifiants si vous les entrez. Ou les publicités poussent des "mises à jour" qui installent des trackers, surveillant votre activité au-delà de la plateforme.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problèmes de Qualité"
              >
                Les mauvais sites compressent les vidéos, causant une lecture saccadée ou une perte audio. Vous vouliez un tutoriel clair, mais obtenez un fichier bogué à la place.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de Confidentialité">
                Certains sites enregistrent vos téléchargements, vendant votre IP ou vos choix de vidéos aux annonceurs. Les hackers pourraient récupérer ces données, menant à du spam ou des arnaques ciblées.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Interdictions Reddit">
                L'utilisation intensive d'outils tiers peut signaler votre compte, en particulier pour les posteurs actifs. Vous pourriez perdre votre profil ou karma du jour au lendemain.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Surcharge de Stockage"
              >
                Sauvegarder beaucoup de vidéos mange de l'espace, ralentissant les téléphones ou disques. Les fichiers corrompus peuvent planter les lecteurs, gaspillant du temps à réparer.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilisez des sites de confiance, scannez les téléchargements et envisagez des VPN pour rester en sécurité.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi Utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre Partenaire de Confiance pour les Téléchargements Reddit
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 parce que nous en avions assez des outils douteux et des applications lentes. En tant qu'utilisateurs de Reddit, nous voulions un moyen rapide et propre de sauvegarder des vidéos sans risques. Nous sommes une petite équipe, pas une grande entreprise, concentrée sur rendre les téléchargements faciles et sécurisés. Des millions d'utilisateurs nous font confiance sans fuites de données, et nous continuons à nous améliorer grâce à leurs retours.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de Cinq Secondes">
                Les téléchargements se terminent même aux heures de pointe.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Pas de Pubs ni de Pop-ups">
                Juste un site propre.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigranes Supprimés">
                Des clips purs et utilisables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Sauvegardes Illimitées">
                Pas de plafonds quotidiens.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fonctionne sur Tout Appareil">
                Des vieux téléphones aux nouveaux ordinateurs portables.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Système Sécurisé">
                Aucune donnée stockée après votre départ.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions Courantes sur les Téléchargements Reddit
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé les réponses aux questions les plus fréquentes sur l'utilisation de
              videodownload.io et le téléchargement de vidéos Reddit pour vous aider à
              commencer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos de subreddits privés Reddit ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous ne traitons que les posts publics. Les vidéos de subreddits privés ou restreints nécessitent la permission du créateur ou du modérateur, et nous respectons ces limites pour rester légitimes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement ralentira-t-il mon appareil ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nos fichiers sont propres et légers, donc pas de lag. Mais sauvegarder beaucoup de vidéos peut remplir l'espace de stockage, alors gardez un œil sur votre espace.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi ma vidéo est-elle sans filigrane ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit ajoute des logos pour suivre les partages, mais nous extrayons le fichier brut et les supprimons pour une sauvegarde propre que vous pouvez utiliser librement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je sauvegarder uniquement l'audio d'une vidéo Reddit ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez MP3 après avoir collé le lien. Idéal pour récupérer des clips de podcast ou de la musique de vidéos sans les visuels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si mon téléchargement échoue ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez que le lien est public et commence par reddit.com. Essayez un autre navigateur ou videz le cache. Notre chat d'assistance résout les problèmes rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite sur la longueur de la vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous gérons des vidéos jusqu'à 60 minutes, bien que la plupart des clips Reddit soient courts. Les plus longs prennent un peu de temps mais se téléchargent entièrement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Stockez-vous mes vidéos téléchargées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolument pas. Nous traitons instantanément et supprimons tout après. Vos fichiers restent sur votre appareil, pas sur nos serveurs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Les posteurs peuvent-ils voir si j'ai téléchargé leur vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit ne les notifie pas. Votre téléchargement reste privé, sans alertes pour le créateur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à Sauvegarder des Vidéos Reddit Aujourd'hui
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Récupérez Vos Clips Préférés en Quelques Secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiez le Lien du Post Reddit
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Collez sur Notre Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Téléchargez la Vidéo Propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#reddit-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Reddit Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explorez Plus de Téléchargeurs
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
                  to={`/fr/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Qualité Vidéo Nette">
        Sauvegardez des vidéos Reddit dans leur pleine résolution, jusqu'à 1080p si le post original le supporte. Pas de visuels flous ou de couleurs délavées quand vous regardez plus tard. Nous récupérons le fichier directement depuis les serveurs de Reddit, gardant chaque image nette pour ce clip de jeu ou tutoriel.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Pas de Filigranes ni de Logos">
        Reddit appose sa marque sur les vidéos sauvegardées via leur application, encombrant l'écran. Nous retirons tout cela, vous donnant un clip propre prêt pour le partage ou l'édition. Regardez cette vidéo drôle d'animal ou démo technique sans superpositions de texte dans le chemin.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Fonctionne sur Tout Appareil">
        Utilisez votre téléphone, tablette, PC ou ordinateur portable, et ça fonctionne sans problème. Pas d'applications ni de logiciels supplémentaires nécessaires. Ouvrez simplement notre site dans votre navigateur, collez le lien et téléchargez. Testé sur tout, des vieux Androids aux nouveaux Macs, c'est toujours fiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Téléchargements Rapides">
        Attendre est pénible. Notre outil extrait les vidéos Reddit en quelques secondes, généralement moins de 10 pour la plupart des clips. Nous utilisons des serveurs proches de ceux de Reddit pour des extractions rapides, donc vous pouvez sauvegarder un mème ou clip d'actualités pendant une pause rapide.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratuit Sans Limites">
        Pas de frais, pas d'inscriptions, pas de coûts cachés. Téléchargez autant de vidéos que vous le souhaitez, chaque jour, sans restrictions. Nous le gardons gratuit pour que vous puissiez sauvegarder ce moment viral ou conseil DIY sans heurter un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus Sûr et Privé">
        Vos données restent sécurisées. Nous ne stockons pas vos liens ou vidéos après votre téléchargement. Pas de suivi, pas de journaux, et pas de publicités spammy. Le processus est propre, gardant votre appareil libre de déchets ou de risques.
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
      <StepCard step={1} title="Copiez le Lien Vidéo depuis Reddit">
        <a href="http://www.reddit.com">Ouvrez Reddit</a> sur votre téléphone ou navigateur. Trouvez la vidéo que vous aimez, peut-être une astuce de cuisine ou un moment fort de jeu. Cliquez sur l'icône de partage sous le post, une petite flèche pointant vers le haut. Dans le menu, choisissez "Copier le lien." Cela récupère l'URL complète, comme reddit.com/r/subreddit/comments/abc123. Vérifiez qu'elle est correcte.
      </StepCard>
      <StepCard step={2} title="Collez le Lien dans Notre Outil">
        Allez sur videodownload.io dans votre navigateur. Vous verrez une boîte intitulée "Collez le lien Reddit ici." Cliquez à l'intérieur et collez le lien copié. Assurez-vous qu'il commence par reddit.com pour éviter les erreurs. Seuls les posts publics fonctionnent ; les vidéos de subreddits privés ou restreints ne se téléchargeront pas.
      </StepCard>
      <StepCard step={3} title="Nous Récupérons et Préparons la Vidéo">
        Cliquez sur le bouton bleu "Télécharger" à côté de la boîte. Notre système extrait la vidéo des serveurs de Reddit en quelques secondes. Nous retirons tous les filigranes et vérifions la qualité, donc vous obtenez un clip fluide. L'audio reste clair, pas de bugs ni de son manquant.
      </StepCard>
      <StepCard step={4} title="Sauvegardez le Clip sur Votre Appareil">
        Vous verrez des options : MP4 pour la vidéo complète avec son ou MP3 pour uniquement l'audio. Choisissez MP4 pour la plupart des clips. Appuyez pour télécharger, et il atterrit dans votre dossier Téléchargements ou galerie du téléphone. Nommez-le quelque chose de simple, comme "meme_clip.mp4," avant de sauvegarder. Lisez-le pour confirmer qu'il est bon.
      </StepCard>
    </div>
  );
}
