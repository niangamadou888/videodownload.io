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

export default function ThreadsPageFR() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Téléchargement de Vidéos Threads | Gratuit & HD",
    description: "Téléchargez des vidéos et publications Threads en mp4, qualité 1080p. Téléchargeur et convertisseur de vidéos en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez l'URL d'une vidéo ou publication Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez des Vidéos Threads Rapidement
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre Guide Simple pour Sauvegarder des Clips Hors Ligne
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment Télécharger des Vidéos Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un Guide Clair, Étape par Étape, pour Sauvegarder des Vidéos Sans Effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtenir des vidéos Threads sur votre appareil est simple avec
            videodownload.io. Suivez ces quatre étapes simples pour
            télécharger n'importe quelle vidéo en quelques minutes. Chaque étape est conçue pour être
            intuitive, même si vous n'êtes pas un expert en technologie.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Télécharger une Vidéo Threads
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi Télécharger des Vidéos Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs Cas d'Usage
            </h2>
            <p className="section-muted mb-4">
              Threads défile rapidement, les publications étant enfouies sous de nouvelles conversations. Le téléchargement vous permet de conserver les vidéos qui attirent votre attention, transformant des défilements rapides en une collection personnelle. Il s'agit de sauvegarder ce qui suscite la joie, informe ou inspire, et non de simplement collecter des clips aléatoires. Vous contrôlez votre collection, à l'abri des publications supprimées ou des modifications d'applications.
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
                    Sauvegardez des conseils de voyage ou des clips d'entraînement pour les vols, les trajets ou les endroits avec un mauvais Wi-Fi. Les parents téléchargent des sketchs ou des chansons adaptés aux enfants pour les trajets en voiture, gardant les enfants heureux sans mise en tampon.
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
                    Les influenceurs récupèrent des clips viraux pour les remixer dans leur contenu, en ajoutant leur propre touche. Les blogueurs sauvegardent des vidéos de mode ou de cuisine à partager sur d'autres plateformes, en sautant les filigranes pour des montages propres.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivage de Vos Propres Publications
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous partagez des vidéos sur Threads, elles peuvent disparaître en raison de problèmes de compte ou de mises à jour de la plateforme. Téléchargez-les sur un disque pour protéger votre travail, comme un vlog personnel ou une promotion de marque.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et Inspiration
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les étudiants sauvegardent des astuces d'étude ou des discours motivants pour une révision hors ligne. Les amateurs téléchargent des conseils de bricolage ou des démos d'art pour pratiquer à leur rythme, sans avoir besoin de rechercher à nouveau.
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
                    Sauvegardez une mise à jour de la vie d'un ami ou un clip amusant à envoyer dans des discussions de groupe ou à conserver pour plus tard. C'est un moyen de conserver des souvenirs sans dépendre de l'application.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Le téléchargement de vidéos Threads offre flexibilité et commodité,
              facilitant la consommation de contenu selon vos conditions, que ce soit pour le plaisir,
              le travail ou l'apprentissage.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui Devrait Télécharger des Vidéos Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les Personnes Qui Bénéficient le Plus du Téléchargement
            </h2>
            <p className="section-muted mb-4">
              Threads est un hub de contenu rapide et personnel, mais le téléchargement de vidéos convient aux personnes qui l'utilisent pour créer, apprendre ou se connecter. C'est pour ceux qui voient les publications comme plus qu'un simple amusement éphémère, transformant les clips en outils ou en souvenirs. Si vous êtes actif sur Threads et que vous voulez conserver ce qui compte, le téléchargement est votre solution.
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
                    Les influenceurs et vlogueurs sauvegardent des clips tendance pour les remixer pour leur public, comme un gourou de la beauté peaufinant un tutoriel de maquillage. Ils téléchargent également leurs propres publications, conservant des copies propres sans logos pour les montages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Passionnés et Apprenants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les fans de fitness sauvegardent des clips d'entraînement à suivre à la salle de sport. Les artisans téléchargent des démos de bricolage à essayer à la maison. C'est une inspiration pratique, prête hors ligne.
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
                    Les enseignants sauvegardent des discours motivants pour les discussions en classe. Les étudiants récupèrent des astuces d'étude ou des leçons de langue à réviser sans se reconnecter.
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
                    Les parents sauvegardent des clips amusants d'enfants ou des mises à jour familiales à partager lors de rassemblements. Les amis téléchargent des mèmes viraux pour en rire plus tard.
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
                    Les boutiques sauvegardent les témoignages de clients à présenter sur les sites web. Les pros des médias sociaux récupèrent des clips tendance à analyser ou à réutiliser, gardant leur contenu frais.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre rôle ou votre style de vie, le téléchargement de vidéos Threads peut
              économiser du temps, des données et des efforts tout en gardant votre contenu préféré
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il Légal de Télécharger des Vidéos Threads ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce Que Vous Devez Savoir Sur la Loi
            </h2>
            <p className="section-muted mb-4">
              Les vidéos sont protégées par le droit d'auteur de leurs créateurs en vertu de lois comme le DMCA aux États-Unis. Sauvegarder pour un visionnage privé, comme regarder un clip hors ligne, compte souvent comme un usage équitable. Mais partager sans permission ou utiliser à des fins lucratives peut entraîner des problèmes juridiques. La musique ou les voix off dans les vidéos peuvent avoir des couches supplémentaires de droits d'auteur, bien que les courtes sauvegardes personnelles rencontrent rarement des problèmes.
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
                    Si le créateur autorise les téléchargements ou si le contenu est du domaine public, vous êtes tranquille. L'usage éducatif, comme montrer un clip en classe, est souvent qualifié d'usage équitable. Vérifiez les légendes des publications pour les autorisations. Gardez les téléchargements privés et créditez les créateurs si vous partagez pour rester en sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les Risques Associés au Téléchargement de Vidéos Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers Potentiels et Comment les Éviter
            </h2>
            <p className="section-muted mb-4">
              Les téléchargeurs tiers semblent faciles, mais les sites douteux apportent de vrais problèmes. Tous les sites ne sont pas fiables, et cliquer sans réfléchir peut nuire à votre appareil ou à vos données. Connaissez les risques avant de commencer pour éviter les problèmes par la suite.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Logiciels Malveillants"
              >
                Les sites peu fiables cachent des virus dans les fichiers vidéo, infiltrant des logiciels espions ou des ransomwares. Un mauvais téléchargement peut verrouiller vos fichiers ou voler des mots de passe. Certains outils ont été pris avec des enregistreurs de frappe, transformant une sauvegarde de mème en une violation de données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Escroqueries par Hameçonnage">
                Les fausses pages de téléchargement imitent la connexion de Threads, récupérant vos identifiants si vous les entrez. Ou les publicités poussent des "mises à jour" qui installent des trackers, surveillant votre activité au-delà de la plateforme.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problèmes de Qualité"
              >
                Les mauvais sites compressent les vidéos, provoquant une lecture saccadée ou une perte audio. Vous vouliez un tutoriel clair, mais vous obtenez un fichier bogué à la place.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de Confidentialité">
                Certains sites enregistrent vos téléchargements, vendant votre IP ou vos choix de vidéos aux annonceurs. Les pirates pourraient récupérer ces données, entraînant du spam ou des escroqueries ciblées.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bannissements Threads">
                L'utilisation intensive d'outils tiers peut signaler votre compte, en particulier pour les créateurs. Vous pourriez perdre votre profil ou vos abonnés du jour au lendemain.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Surcharge de Stockage"
              >
                Sauvegarder beaucoup de vidéos consomme de l'espace, ralentissant les téléphones ou les disques. Les fichiers corrompus pourraient faire planter les lecteurs, perdant du temps à réparer.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilisez des sites de confiance, analysez les téléchargements et envisagez des VPN pour rester en sécurité.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi Utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre Partenaire de Confiance pour les Téléchargements Threads
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 parce que nous en avions assez des outils douteux et des applications lentes. En tant qu'utilisateurs de Threads, nous voulions un moyen rapide et propre de sauvegarder des vidéos sans risques. Nous sommes une petite équipe, pas une grande entreprise, concentrée sur la facilité et la sécurité des téléchargements. Des millions d'utilisateurs nous font confiance sans fuites de données, et nous continuons à nous améliorer en fonction de leurs commentaires.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de Cinq Secondes">
                Les téléchargements se terminent même pendant les heures de pointe.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Pas de Publicités ni de Pop-ups">
                Juste un site propre.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigranes Supprimés">
                Clips purs et utilisables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Sauvegardes Illimitées">
                Pas de plafonds quotidiens.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fonctionne sur N'importe Quel Appareil">
                Des vieux téléphones aux nouveaux ordinateurs portables.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Système Sécurisé">
                Aucune donnée stockée après que vous ayez terminé.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions Courantes Sur les Téléchargements Threads
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé des réponses aux questions les plus fréquentes sur l'utilisation de
              videodownload.io et le téléchargement de vidéos Threads pour vous aider à
              démarrer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos Threads privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous ne gérons que les publications publiques. Les vidéos privées ou restreintes nécessitent l'autorisation du créateur, et nous respectons ces limites pour rester légitimes.
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
                  Nos fichiers sont propres et légers, donc pas de ralentissement. Mais sauvegarder beaucoup de vidéos peut remplir le stockage, alors gardez un œil sur votre espace.
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
                  Threads ajoute des logos pour suivre les partages, mais nous extrayons le fichier brut et les supprimons pour une sauvegarde propre que vous pouvez utiliser librement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je sauvegarder uniquement l'audio d'une vidéo Threads ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez MP3 après avoir collé le lien. Idéal pour récupérer de la musique ou des voix off de clips sans les visuels.
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
                  Vérifiez que le lien est public et commence par threads.net. Essayez un autre navigateur ou videz le cache. Notre chat d'assistance résout les problèmes rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite à la durée de la vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous gérons des vidéos jusqu'à 60 minutes, bien que la plupart des clips Threads soient courts. Les plus longs prennent un peu de temps mais se téléchargent complètement.
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
                  Les créateurs peuvent-ils voir si j'ai téléchargé leur vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads ne les notifie pas. Votre téléchargement reste privé, sans alertes pour le créateur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à Sauvegarder des Vidéos Threads Aujourd'hui
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Récupérez Vos Clips Préférés en Quelques Secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copier le Lien de Publication Threads
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Coller sur Notre Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Télécharger une Vidéo Propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une Vidéo Threads
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
                        Télécharger Vidéo {p.name}
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
      <FeatureCard icon={VideoIcon} title="Téléchargements Clairs et Nets">
        Sauvegardez des vidéos Threads dans leur meilleure qualité, jusqu'à 1080p si la publication originale le permet. Pas d'images floues ou de couleurs ternes lors de la lecture. Nous récupérons le fichier directement depuis les serveurs de Threads, en gardant chaque détail net pour ce sketch rapide ou ce conseil de style.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Pas de Filigranes ni de Logos">
        Threads ajoute sa marque aux vidéos sauvegardées via leur application, encombrant la vue. Nous supprimons tout cela, vous donnant un clip propre prêt à partager ou à éditer. Regardez ce moment amusant ou ce tutoriel sans superpositions de texte bloquant l'action.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Fonctionne sur N'importe Quel Appareil">
        Utilisez votre téléphone, tablette, ordinateur portable ou de bureau, et cela fonctionne parfaitement. Aucune application ni logiciel supplémentaire nécessaire. Ouvrez simplement notre site dans votre navigateur, collez le lien et téléchargez. Testé sur tout, des vieux Android aux nouveaux Mac, c'est toujours fiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de Téléchargement Rapides">
        L'attente tue l'ambiance. Notre outil extrait des vidéos Threads en quelques secondes, généralement moins de 10 pour la plupart des clips. Nous utilisons des serveurs proches de ceux de Threads pour des récupérations rapides, afin que vous puissiez sauvegarder un clip de danse ou une opinion lors d'une courte pause.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Complètement Gratuit à Utiliser">
        Pas de frais, pas d'inscriptions, pas de coûts cachés. Téléchargez autant de vidéos que vous le souhaitez, chaque jour, sans limites. Nous le gardons gratuit pour que vous puissiez sauvegarder ce mème viral ou cette astuce de vie sans atteindre un mur payant.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus Sûr et Privé">
        Vos informations restent sécurisées. Nous ne stockons pas vos liens ou vidéos après votre téléchargement. Pas de suivi, pas de journaux et pas de publicités spammy. Le processus est propre, gardant votre appareil exempt de déchets ou de risques.
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
      <StepCard step={1} title="Copiez le Lien Vidéo depuis Threads">
        <a href="http://www.threads.net">Ouvrez Threads</a> sur votre téléphone ou navigateur. Trouvez la vidéo que vous aimez, peut-être une recette rapide ou un reel de mode. Appuyez sur l'icône de partage, un avion en papier, en bas à droite de la publication. Dans le menu, sélectionnez "Copier le lien". Cela récupère l'URL complète, comme threads.net/@username/post/abc123. Vérifiez qu'elle est correcte.
      </StepCard>
      <StepCard step={2} title="Collez le Lien dans Notre Outil">
        Allez sur videodownload.io dans votre navigateur. Vous verrez une boîte intitulée "Collez le lien Threads ici". Cliquez à l'intérieur et collez le lien copié. Assurez-vous qu'il commence par threads.net pour éviter les erreurs. Seules les publications publiques fonctionnent ; les vidéos privées ou restreintes ne se téléchargeront pas.
      </StepCard>
      <StepCard step={3} title="Nous Récupérons et Préparons la Vidéo">
        Cliquez sur le bouton bleu "Télécharger" à côté de la boîte. Notre système extrait la vidéo des serveurs de Threads en quelques secondes. Nous supprimons tous les filigranes et vérifions la qualité, afin que vous obteniez un clip fluide. L'audio reste clair, sans pépins ni son manquant.
      </StepCard>
      <StepCard step={4} title="Sauvegardez le Clip sur Votre Appareil">
        Vous verrez des options : MP4 pour la vidéo complète avec son ou MP3 pour uniquement l'audio. Choisissez MP4 pour la plupart des clips. Appuyez pour télécharger, et cela atterrit dans votre dossier Téléchargements ou la galerie de votre téléphone. Nommez-le quelque chose de simple, comme "conseil_style.mp4", avant de sauvegarder. Jouez-le pour confirmer qu'il est bon.
      </StepCard>
    </div>
  );
}
