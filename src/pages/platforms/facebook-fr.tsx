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

export default function FacebookPageFr() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Télécharger Vidéo Facebook | Gratuit & HD",
    description: "Téléchargez des vidéos Facebook, Reels et Lives en mp4, 1080p, HD. Convertisseur et téléchargeur de vidéos gratuit en ligne."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Télécharger une vidéo Facebook
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez une URL de vidéo, Reel ou Watch Facebook"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Outils pour faciliter le téléchargement de vidéos Facebook
          </h2>
          <p className="text-muted-foreground mb-6">
            Voici six fonctionnalités qui font de videodownload.io le meilleur choix pour télécharger des vidéos Facebook. Chacune est conçue pour gagner du temps, garantir la qualité et rendre votre expérience sûre et simple.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Guide étape par étape pour sauvegarder des vidéos rapidement
          </h2>
          <p className="text-muted-foreground mb-6">
            Télécharger des vidéos Facebook avec videodownload.io est simple et rapide, même si vous n'êtes pas très à l'aise avec la technologie. Suivez ces quatre étapes pour sauvegarder votre vidéo sur votre appareil en quelques minutes.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo Facebook
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs cas d'usage pour le visionnage et l'utilisation hors ligne
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Facebook vous permet de regarder ou de réutiliser du contenu sans avoir besoin d'une connexion internet. C'est idéal pour économiser des données, archiver des souvenirs ou créer du nouveau contenu. Voici quelques-unes des meilleures raisons de télécharger des vidéos Facebook pour un usage personnel ou professionnel.
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
                    Sauvegardez des vidéos pour les regarder pendant les trajets, les vols ou dans des zones sans Wi-Fi ou données, comme les zones rurales ou les voyages internationaux.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Création de contenu
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des clips pour des réactions, montages ou vidéos pour vos propres réseaux sociaux, tant que vous respectez les règles de droits d'auteur ou obtenez la permission du créateur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et formation
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des tutoriels, webinaires ou vidéos pratiques pour l'étude hors ligne, comme des démonstrations de cuisine, des routines de fitness ou des conseils business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Préserver les souvenirs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conservez des vidéos de famille, moments forts d'événements ou publications de groupes qui pourraient disparaître si les comptes sont supprimés ou si les paramètres de confidentialité changent.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing et affaires
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les entreprises peuvent télécharger leurs propres vidéos de marque ou streams en direct pour une utilisation hors ligne dans des présentations, publicités ou réunions clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Économiser les coûts de données
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez via Wi-Fi pour éviter d'utiliser les données mobiles, surtout pour les vidéos longues ou de haute qualité sur des forfaits limités.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Divertissement hors ligne
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Créez une collection de clips drôles, clips musicaux ou streams en direct pour en profiter hors ligne pendant vos temps libres ou voyages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Partage communautaire
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des vidéos de groupes ou pages Facebook pour un partage hors ligne lors d'ateliers, cours ou événements communautaires sans internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Facebook vous donne la flexibilité de profiter ou d'utiliser du contenu quand et où vous en avez besoin, sans dépendre d'une connexion.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les personnes qui bénéficient d'un accès hors ligne
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Facebook est utile pour quiconque souhaite regarder ou utiliser du contenu hors ligne. Ce n'est pas seulement pour les utilisateurs occasionnels—des groupes spécifiques peuvent gagner du temps et des efforts en téléchargeant. Voici qui devrait le considérer et pourquoi.
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
                    Les influenceurs, YouTubeurs ou TikTokeurs peuvent télécharger des vidéos pour des réactions, collaborations ou montages, à condition de respecter les droits d'auteur ou d'obtenir la permission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Étudiants et enseignants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez du contenu éducatif, comme des conférences, tutoriels ou webinaires, pour une étude hors ligne ou une utilisation en classe, surtout dans les zones à faible connectivité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Voyageurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez du divertissement, comme des clips viraux ou des streams en direct, pour un visionnage hors ligne pendant les voyages sans accès internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entrepreneurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez vos propres vidéos de marque, streams en direct ou publicités pour une utilisation hors ligne dans le marketing, pitchs ou présentations clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Gardiens de souvenirs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Préservez des vidéos personnelles, moments de famille ou publications de groupes qui pourraient disparaître en raison de changements de compte ou de paramètres de confidentialité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Passionnés de fitness
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des vidéos d'entraînement, sessions de yoga ou conseils santé pour les suivre hors ligne à la maison ou à la salle de sport.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Leaders communautaires
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des vidéos de groupes ou du contenu de pages pour un partage hors ligne lors de réunions, événements ou ateliers sans avoir besoin de Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Amateurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des vidéos pour l'inspiration, comme des projets DIY ou tutoriels d'artisanat, pour les consulter hors ligne tout en travaillant sur vos loisirs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos Facebook ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Comprendre les règles légales
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Facebook est un sujet complexe. Les Conditions d'utilisation de Facebook n'autorisent pas le téléchargement de contenu sans la permission du créateur ou de la plateforme. Selon la loi américaine sur les droits d'auteur, sauvegarder des vidéos protégées sans approbation est illégal et pourrait mener à des poursuites, bien que cela soit rare pour un usage personnel. Les exceptions incluent :
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Vidéos du domaine public
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les vidéos dans le domaine public, qui ne sont pas protégées par le droit d'auteur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Licences Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vidéos sous licences Creative Commons, qui peuvent autoriser le téléchargement pour des usages spécifiques, comme le partage ou le remixage, si vous suivez les termes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permission du créateur
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vidéos où le créateur autorise explicitement les téléchargements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Cas d'usage équitable
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cas d'usage équitable, comme le téléchargement pour l'éducation, commentaire ou recherche, bien que cela dépende de la façon dont vous utilisez la vidéo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Vérifiez toujours la description de la vidéo pour sa licence ou demandez au créateur la permission. La fonction de sauvegarde de Facebook vous permet de marquer des publications pour un visionnage personnel, ce qui est une alternative légale. Pour rester en sécurité, respectez les règles de droits d'auteur et envisagez de demander aux créateurs avant de télécharger.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risques du téléchargement de vidéos Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers à éviter lors du téléchargement
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Facebook peut être super pratique, mais cela comporte des risques si vous utilisez des outils peu fiables ou ignorez les limites légales. Connaître ces risques vous aide à protéger votre appareil et rester en sécurité. Voici les principaux à surveiller.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Logiciels malveillants de sites douteux"
              >
                De nombreux sites de téléchargement ont de faux boutons, des publicités pop-up ou des scripts cachés <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions">qui installent des virus ou des logiciels malveillants</a>. Ceux-ci peuvent endommager votre appareil ou voler des données. Utilisez des plateformes de confiance comme videodownload.io pour éviter cela.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Problèmes légaux">
                Télécharger sans permission viole les règles de Facebook et pourrait mener à des bannissements de compte ou, dans de rares cas, à des actions légales de détenteurs de droits d'auteur. Vérifiez d'abord la licence de la vidéo.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Fichiers de mauvaise qualité"
              >
                Les sites peu fiables livrent souvent des vidéos floues ou cassées qui ne se lisent pas correctement, gaspillant votre temps et votre espace de stockage.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Risques de confidentialité">
              Les sites douteux peuvent suivre votre activité, collecter des informations personnelles ou vendre vos données à des tiers. Choisissez un outil qui ne demande pas de permissions inutiles.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Téléchargements corrompus">
              Les sites mal conçus peuvent vous donner des fichiers incomplets qui ne s'ouvriront pas, vous laissant frustré.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Préoccupations éthiques"
              >
                Télécharger évite les vues ou publicités, ce qui peut nuire aux créateurs qui dépendent de l'engagement pour leurs revenus. Soutenez les créateurs en regardant en ligne quand c'est possible.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Surcharge de stockage"
              >
                Télécharger de nombreuses vidéos, surtout en haute qualité, peut remplir rapidement le stockage de votre appareil. Gérez vos téléchargements pour éviter cela.
              </FeatureCard>
            </div>
            <p className="section-muted">
            Utiliser un outil sécurisé et réputé comme videodownload.io et respecter les règles de droits d'auteur peut vous aider à éviter ces risques et télécharger en toute sécurité.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre choix de confiance pour les téléchargements Facebook
            </h2>
            <p className="section-muted mb-4">
            Nous avons lancé videodownload.io pour fournir un moyen propre, rapide et sécurisé de télécharger des vidéos Facebook sans les risques des sites web douteux. Notre objectif était de rendre le téléchargement simple et sûr pour tous. Voici six raisons de nous choisir.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sans logiciels malveillants et sécurisé">
              Notre site n'a pas de publicités pop-up, faux liens ou scripts nuisibles, gardant votre appareil en sécurité contre les virus ou logiciels espions.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Facile à utiliser">
              Collez le lien, cliquez sur télécharger, et c'est fait. Pas d'étapes compliquées ou de compétences techniques requises.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Traitement rapide">
                Nos serveurs traitent les vidéos rapidement, livrant vos téléchargements en quelques secondes, même pour les streams en direct ou le contenu de groupes.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Formats flexibles">
                Choisissez MP4 pour les vidéos ou MP3 pour l'audio, avec des options de qualité comme 720p ou 1080p pour répondre à vos besoins.
              </FeatureCard>
              <FeatureCard icon={Download} title="Complètement gratuit">
                Téléchargez des vidéos illimitées sans rien payer. Pas d'abonnements ou de frais cachés, jamais.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Protection de la confidentialité">
                Nous ne suivons pas vos téléchargements, ne stockons pas vos données, ni ne partageons vos informations, donc votre activité reste privée.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions courantes sur videodownload.io et les téléchargements Facebook
            </h2>
            <p className="section-muted mb-4">
              Voici les réponses aux questions courantes sur l'utilisation de videodownload.io pour télécharger des vidéos Facebook, afin que vous puissiez commencer à télécharger en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Est-ce que videodownload.io est gratuit ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, notre plateforme est 100% gratuite. Téléchargez autant de vidéos que vous voulez sans frais ni limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Dois-je installer un logiciel pour télécharger ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, tout fonctionne via votre navigateur. Pas d'applications, d'extensions ou de téléchargements requis, pour rester simple.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Puis-je télécharger des streams en direct Facebook ou des vidéos de groupes ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, nous prenons en charge le téléchargement de streams en direct et de vidéos de groupes, tant que vous avez accès au contenu. Collez simplement le lien.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Est-ce que videodownload.io est sûr ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolument. Notre site est sécurisé, sans publicités pop-up ou liens risqués. Nous priorisons votre sécurité et testons notre plateforme régulièrement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Puis-je télécharger des vidéos en haute qualité ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, vous pouvez télécharger dans la meilleure qualité disponible, comme 720p ou 1080p, en fonction de la vidéo Facebook originale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Que faire si une vidéo ne se télécharge pas ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez l'URL et votre connexion internet. Si cela échoue toujours, contactez notre équipe de support, et nous le réparerons rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Puis-je sauvegarder uniquement l'audio d'une vidéo Facebook ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, notre fonction MP3 vous permet d'extraire l'audio de n'importe quelle vidéo, parfait pour la musique, les discours ou les clips.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Est-il légal de télécharger des vidéos Facebook ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Cela dépend. Les règles de Facebook interdisent le téléchargement sans permission. Les vidéos dans le domaine public, sous Creative Commons ou avec l'approbation du créateur sont généralement acceptables. L'usage équitable peut s'appliquer pour l'éducation ou le commentaire, mais vérifiez toujours la licence pour rester en sécurité.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencer à télécharger maintenant
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtenez vos vidéos Facebook en quelques secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Processus rapide et simple
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Téléchargements sûrs, sans logiciels malveillants
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Vidéo et audio haute qualité
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo Facebook
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explorer plus de téléchargeurs
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
                        Télécharger vidéo {p.name}
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
      <FeatureCard icon={VideoIcon} title="Téléchargements vidéo haute qualité">
        Choisissez parmi des résolutions comme 720p ou 1080p, selon ce que la vidéo Facebook propose. Que ce soit un stream en direct ou un court clip, vous pouvez choisir la meilleure qualité sans gérer des paramètres complexes.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de téléchargement rapides">
        Nos serveurs récupèrent les vidéos Facebook rapidement. La plupart des téléchargements se terminent en moins d'une minute, en fonction de votre vitesse internet et de la longueur de la vidéo, donc vous n'attendez pas.
      </FeatureCard>
      <FeatureCard icon={Music} title="Option d'extraction audio">
        Besoin juste du son ? Convertissez des vidéos Facebook en fichiers MP3 en un clic. Parfait pour sauvegarder de la musique, des discours ou des clips de style podcast pour une utilisation hors ligne.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Aucun logiciel requis">
        Téléchargez des vidéos directement depuis notre site web en utilisant n'importe quel navigateur sur votre téléphone, tablette ou ordinateur. Pas d'applications ou de programmes supplémentaires requis, gardant les choses propres et faciles.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Support pour les vidéos en direct et de groupes">
        Sauvegardez des vidéos de publications Facebook, streams en direct ou contenu de groupes privés (si vous avez accès). Collez simplement le lien, et nous gérerons le reste, même pour les types de contenu uniques.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interface sécurisée et sans publicités">
        Notre site n'a pas de publicités pop-up, faux boutons ou redirections risquées. Vous obtenez une expérience propre et sécurisée à chaque fois, donc vous pouvez télécharger sans vous soucier des virus.
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
      <StepCard step={1} title="Copiez l'URL de la vidéo Facebook">
        <a href="http://www.facebook.com">Ouvrez Facebook</a> sur votre application ou navigateur, trouvez la vidéo, le stream en direct ou la publication de groupe que vous voulez, et copiez son URL. Cliquez sur les trois points sur la publication et sélectionnez "Copier le lien" ou récupérez l'URL dans la barre d'adresse du navigateur.
      </StepCard>
      <StepCard step={2} title="Collez l'URL sur notre site">
        Rendez-vous sur videodownload.io dans n'importe quel navigateur. Sur notre page d'accueil, trouvez la barre de téléchargement et collez le lien Facebook copié. Vérifiez que l'URL est correcte.
      </StepCard>
      <StepCard step={3} title="Nous traitons la vidéo">
        Cliquez sur le bouton "Télécharger". Notre système va récupérer la vidéo et la préparer pour vous en quelques secondes. Choisissez votre format, comme MP4 pour la vidéo ou MP3 pour l'audio, et la qualité si demandé.
      </StepCard>
      <StepCard step={4} title="Sauvegardez votre vidéo Facebook">
        Lorsque le lien de téléchargement apparaît, cliquez dessus pour sauvegarder la vidéo sur votre appareil. Renommez le fichier si vous voulez garder vos téléchargements organisés pour un accès facile plus tard.
      </StepCard>
    </div>
  );
}
