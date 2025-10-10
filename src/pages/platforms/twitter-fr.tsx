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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Télécharger Vidéo Twitter X | Gratuit & HD",
    description: "Téléchargez des vidéos et publications Twitter X en mp4, qualité 1080p. Téléchargeur et convertisseur de vidéos en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Twitter Video
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez l'URL d'une vidéo ou publication Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez Rapidement les Vidéos Twitter X
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre Guide Rapide pour Sauvegarder des Clips Hors Ligne
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment Télécharger les Vidéos Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un Guide Clair, Étape par Étape pour Sauvegarder les Vidéos Sans Effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtenir des vidéos Twitter X sur votre appareil est simple avec
            videodownload.io. Suivez ces quatre étapes simples pour
            télécharger n'importe quelle vidéo en quelques minutes. Chaque étape est conçue pour être
            intuitive, même si vous n'êtes pas très technophile.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Download Twitter Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi Télécharger les Vidéos Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs Cas d'Usage
            </h2>
            <p className="section-muted mb-4">
              Twitter X évolue à une vitesse fulgurante, avec des vidéos qui se perdent dans le flot de publications. Télécharger vous permet de conserver les clips qui se démarquent, transformant les défilements rapides en une collection personnelle. Il ne s'agit pas de tout sauvegarder, mais de garder ce qui suscite la joie, informe ou inspire. Vous contrôlez votre collection, à l'abri des publications supprimées ou des changements d'application.
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
                    Sauvegardez des clips d'actualités ou des tutoriels pour les vols, les trains ou les zones avec une mauvaise connexion Wi-Fi. Les parents téléchargent des animations amusantes pour que les enfants puissent les regarder lors de longs trajets en voiture, sans stress de mise en tampon.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutilisation du Contenu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les créateurs saisissent des clips viraux pour les remixer dans leurs propres publications, en ajoutant des commentaires ou des modifications. Un journaliste sauvegarde une vidéo d'actualité pour l'analyser dans un article, en supprimant les filigranes pour une utilisation propre.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sauvegarde de Vos Propres Publications
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous partagez des vidéos sur Twitter X, elles peuvent disparaître en raison de problèmes de compte ou de mises à jour de la plateforme. Téléchargez-les sur un disque pour garder votre travail en sécurité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et Recherche
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les étudiants sauvegardent des conférences d'experts ou des analyses de données pour leurs notes d'étude. Les professionnels saisissent les mises à jour de l'industrie pour les partager lors de réunions, sans avoir besoin de rechercher à nouveau dans le fil.
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
                    Téléchargez le clip d'une étape importante d'un ami ou une réaction amusante à envoyer dans des discussions de groupe ou à sauvegarder pour plus tard. C'est une façon de garder des moments personnels marquants sans dépendre de l'application.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Twitter X offre flexibilité et commodité,
              facilitant la consommation de contenu selon vos propres conditions, que ce soit pour le plaisir,
              le travail ou l'apprentissage.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui Devrait Télécharger les Vidéos Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les Personnes qui Bénéficient le Plus du Téléchargement
            </h2>
            <p className="section-muted mb-4">
              Twitter X est un hub pour les prises rapides et les grands moments, mais télécharger des vidéos convient aux personnes qui utilisent la plateforme avec intention. C'est pour ceux qui voient les clips comme des outils, des souvenirs ou de l'inspiration, pas seulement du contenu passager. Si vous êtes actif sur l'application et que vous voulez garder ce qui compte, télécharger est pour vous.
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
                    Ils publient quotidiennement, tirant des idées de vidéos tendance. Télécharger leur permet de sauvegarder leurs propres clips ou d'étudier les autres, comme un comédien qui saisit une vidéo de réaction pour improviser sans logos gênants.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Journalistes et Chercheurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ils sauvegardent des clips d'actualités ou des interviews pour des articles ou de la vérification des faits. Les étudiants téléchargent des fils d'experts avec des vidéos pour des projets scolaires, étudiant hors ligne à leur propre rythme.
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
                    Sauvegardez la vidéo d'annonce d'un frère ou sœur ou un clip viral d'animal de compagnie à partager lors de rassemblements. C'est plus fiable que d'espérer que Twitter X le garde en ligne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Spécialistes du Marketing et Propriétaires d'Entreprise
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Une startup sauvegarde les témoignages de clients pour les présenter sur des sites Web. Les gestionnaires de médias sociaux saisissent des clips de concurrents pour analyser les tendances ou réutiliser pour d'autres plateformes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Amateurs et Apprenants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les fans de technologie sauvegardent des démos de codage pour pratiquer plus tard. Les accros de l'actualité téléchargent des histoires de dernière minute pour les revoir. Même les scrolleurs occasionnels sauvegardent des clips motivants pour les jours difficiles.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre rôle ou votre style de vie, télécharger des vidéos Twitter X peut
              économiser du temps, des données et des efforts tout en gardant votre contenu préféré
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il Légal de Télécharger les Vidéos Twitter X ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce que Vous Devez Savoir sur la Loi
            </h2>
            <p className="section-muted mb-4">
              Les vidéos sont protégées par le droit d'auteur de leurs créateurs en vertu de lois comme le DMCA aux États-Unis. Sauvegarder pour un visionnage privé, comme regarder un clip d'actualité hors ligne, compte souvent comme usage équitable. Mais partager sans permission ou utiliser à des fins lucratives peut entraîner des problèmes juridiques. La musique ou les voix off dans les vidéos peuvent avoir des couches de droits d'auteur supplémentaires, bien que les sauvegardes personnelles courtes rencontrent rarement des problèmes.
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
                    Si le créateur autorise les téléchargements ou si le contenu est dans le domaine public, vous êtes tranquille. L'utilisation éducative, comme montrer un clip en classe, est souvent qualifiée d'usage équitable. Vérifiez les légendes des publications pour les autorisations. Gardez-le privé et créditez les créateurs si vous partagez pour rester en sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les Risques Associés au Téléchargement de Vidéos Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers Potentiels et Comment les Éviter
            </h2>
            <p className="section-muted mb-4">
              Les téléchargeurs tiers semblent faciles, mais ceux qui sont douteux peuvent causer de gros problèmes. Tous les sites ne sont pas dignes de confiance, et cliquer négligemment peut nuire à votre appareil ou à vos données. Connaissez les risques avant de commencer à télécharger pour éviter les ennuis par la suite.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Logiciels Malveillants"
              >
                Les sites peu fiables cachent des virus dans les fichiers vidéo, infiltrant des logiciels espions ou des rançongiciels. Un mauvais téléchargement peut verrouiller vos fichiers ou voler des mots de passe. Certains outils ont été pris avec des enregistreurs de frappe, transformant une sauvegarde rapide en violation de données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Arnaques de Phishing">
                Les fausses pages de téléchargement imitent la connexion de Twitter X, saisissant vos identifiants si vous les entrez. Ou les publicités poussent des "mises à jour" qui installent des trackers, surveillant votre activité au-delà de la plateforme.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problèmes de Qualité"
              >
                Les mauvais sites compressent les vidéos, causant une lecture saccadée ou une perte de son. Vous vouliez un clip d'actualité clair, mais obtenez un fichier glitché à la place.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de Confidentialité">
                Certains sites enregistrent vos téléchargements, vendant votre adresse IP ou vos choix de vidéos aux annonceurs. Les pirates pourraient obtenir ces données, entraînant du spam ou des arnaques ciblées.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bannissements Twitter X">
                L'utilisation intensive d'outils tiers peut signaler votre compte, en particulier pour les créateurs. Vous pourriez perdre votre profil ou vos abonnés du jour au lendemain.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Surcharge de Stockage"
              >
                Sauvegarder beaucoup de vidéos consomme de l'espace, ralentissant les téléphones ou les disques. Les fichiers corrompus peuvent faire planter les lecteurs, perdant du temps à réparer.
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
              Votre Partenaire de Confiance pour les Téléchargements Twitter X
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 parce que nous en avions assez des outils douteux et des applications boguées. En tant qu'utilisateurs de Twitter X, nous voulions un moyen rapide et propre de sauvegarder des vidéos sans risques. Nous sommes une petite équipe, pas une grande entreprise, axée sur la simplicité et la sécurité des téléchargements. Des millions d'utilisateurs nous font confiance sans violation de données, et nous continuons à nous améliorer en fonction de leurs commentaires.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de Cinq Secondes">
                Les téléchargements se terminent même les jours chargés.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Pas de Publicités ni de Pop-ups">
                Juste un site propre.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigranes Supprimés">
                Des clips purs et utilisables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Sauvegardes Illimitées">
                Pas de plafonds quotidiens.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fonctionne sur N'importe Quel Appareil">
                Des téléphones aux ordinateurs portables.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Système Sécurisé">
                Aucune donnée conservée après votre départ.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions Fréquentes sur les Téléchargements Twitter X
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé des réponses aux questions les plus fréquentes sur l'utilisation de
              videodownload.io et le téléchargement de vidéos Twitter X pour vous aider à
              commencer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos Twitter X privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous gérons uniquement les publications publiques. Les vidéos protégées ou privées nécessitent l'autorisation du créateur, et nous respectons cela pour garder les choses légitimes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement va-t-il ralentir mon appareil ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nos fichiers sont propres et légers, donc pas de ralentissement. Mais sauvegarder de nombreuses vidéos peut remplir le stockage, alors gardez un œil sur votre espace.
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
                  Twitter X ajoute des logos pour suivre les partages, mais nous extrayons le fichier original et les supprimons pour une sauvegarde propre que vous pouvez utiliser librement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je sauvegarder uniquement l'audio d'une vidéo Twitter X ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez MP3 après avoir collé le lien. Parfait pour saisir des clips de podcast ou des sons tendance sans la vidéo.
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
                  Vérifiez que le lien est public et commence par x.com. Essayez un autre navigateur ou videz le cache. Notre chat d'assistance résout les problèmes rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il des limites sur la taille de la vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous gérons des vidéos jusqu'à 60 minutes, bien que la plupart des clips Twitter X soient courts. Les plus longues prennent un peu de temps mais se téléchargent entièrement.
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
                  Les créateurs peuvent-ils voir que j'ai téléchargé leur vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X ne les en informe pas. Votre téléchargement reste privé, sans alertes pour le posteur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à Sauvegarder les Vidéos Twitter X Maintenant
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtenez Vos Clips Hors Ligne en Quelques Secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copier le Lien de Publication Twitter X
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Coller sur Notre Site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Télécharger Vidéo Propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Twitter Video
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
        Sauvegardez des vidéos Twitter X dans leur meilleure résolution, jusqu'à 1080p si la publication originale le permet. Pas d'images floues ou de couleurs ternes lorsque vous regardez plus tard. Nous extrayons le fichier brut directement des serveurs de Twitter X, gardant chaque détail net pour ce clip viral ou cette mise à jour d'actualité.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Pas de Filigranes ni de Marques">
        Twitter X ajoute son logo ou nom d'utilisateur aux vidéos sauvegardées via leur application, encombrant la vue. Nous supprimons tout cela, vous donnant un clip propre prêt pour le partage ou l'édition. Regardez ce moment drôle ou ce discours clé sans texte bloquant l'écran.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Fonctionne sur N'importe Quel Appareil">
        Utilisez votre téléphone, tablette, ordinateur portable ou de bureau, et ça fonctionne sans problème. Pas besoin d'installer des applications ou de gérer des logiciels supplémentaires. Ouvrez notre site dans votre navigateur, collez le lien et téléchargez. Testé sur tout, des Androids bon marché aux PC haut de gamme, c'est toujours fiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de Téléchargement Rapides">
        Personne ne veut attendre. Notre outil saisit les vidéos Twitter X en quelques secondes, souvent moins de 10 pour la plupart des clips. Nous utilisons des serveurs proches de ceux de Twitter X pour des extractions rapides, afin que vous puissiez sauvegarder une vidéo de réaction ou une déclaration chaude lors d'une pause de défilement rapide.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalement Gratuit à Utiliser">
        Pas de frais, pas d'inscriptions, pas de frais surprises. Téléchargez autant de vidéos que vous voulez, chaque jour, sans limites. Nous le gardons gratuit afin que vous puissiez sauvegarder ce mème ou ce clip d'actualité sans rencontrer de paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Téléchargements Sûrs et Privés">
        Vos informations restent sécurisées. Nous ne conservons pas vos liens ou vidéos après le téléchargement. Pas de suivi, pas de journaux et pas de publicités spammy. Le processus est propre, gardant votre appareil exempt d'encombrement ou de risques.
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
      <StepCard step={1} title="Saisissez le Lien Vidéo de Twitter X">
        <a href="http://www.x.com">Ouvrez Twitter X</a> sur votre téléphone ou navigateur. Trouvez la vidéo que vous aimez, peut-être un mème rapide ou un point fort de conférence. Cliquez sur l'icône de partage sous la publication, une petite flèche pointant vers le haut. Dans le menu, choisissez "Copier le lien vers la publication". Cela copie l'URL complète, comme x.com/username/status/123456. Vérifiez bien que c'est correct.
      </StepCard>
      <StepCard step={2} title="Collez le Lien dans Notre Outil">
        Allez sur videodownload.io dans votre navigateur. Vous verrez une boîte intitulée "Collez le lien Twitter X ici". Cliquez à l'intérieur et collez le lien que vous avez copié. Assurez-vous qu'il commence par x.com pour éviter les problèmes. Seules les publications publiques fonctionnent ; les vidéos privées ou protégées ne se téléchargeront pas.
      </StepCard>
      <StepCard step={3} title="Nous Récupérons et Préparons la Vidéo">
        Cliquez sur le bouton bleu "Télécharger" à côté de la boîte. Notre système extrait la vidéo des serveurs de Twitter X en quelques secondes. Nous supprimons tous les filigranes et vérifions la qualité, afin que vous obteniez un clip fluide. L'audio reste clair, pas de problèmes ou de son manquant.
      </StepCard>
      <StepCard step={4} title="Sauvegardez le Fichier sur Votre Appareil">
        Vous verrez des options : MP4 pour la vidéo complète avec audio ou MP3 pour juste le son. Choisissez MP4 pour la plupart des clips. Appuyez pour télécharger, et il atterrit dans votre dossier Téléchargements ou la galerie de votre téléphone. Nommez-le quelque chose de simple, comme "meme_clip.mp4", avant de sauvegarder. Lisez-le pour vous assurer qu'il est parfait.
      </StepCard>
    </div>
  );
}
