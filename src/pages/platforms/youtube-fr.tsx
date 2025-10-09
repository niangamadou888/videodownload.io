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
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function YouTubePageFr() {
  const { buildUrl } = useLanguageNavigation();
  const { t } = useLanguage();

  usePageMeta({
    title: "Télécharger Vidéo YouTube | Gratuit & HD",
    description: "Téléchargez des vidéos YouTube, Shorts et Live en mp4, 1080p, 4k. Convertisseur et téléchargeur de vidéos gratuit en ligne."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Télécharger une vidéo YouTube
          </h1>
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez une URL de vidéo, Shorts ou playlist YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Les fonctionnalités qui rendent le téléchargement de vidéos YouTube simple et fiable
          </h2>
          <p className="text-muted-foreground mb-6">
            Voici six fonctionnalités puissantes qui font de videodownload.io le
            choix de référence pour télécharger des vidéos YouTube rapidement, en toute
            sécurité et efficacement. Chaque fonctionnalité est conçue pour améliorer
            votre expérience et offrir de la flexibilité pour tous vos besoins de téléchargement.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un guide clair, étape par étape pour sauvegarder des vidéos sans effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtenir des vidéos YouTube sur votre appareil est simple avec
            videodownload.io. Suivez ces quatre étapes simples pour
            télécharger n'importe quelle vidéo en quelques minutes. Chaque étape est conçue pour être
            intuitive, même si vous n'êtes pas très à l'aise avec la technologie.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo YouTube
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Principaux cas d'usage pour l'accès vidéo hors ligne
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos YouTube vous donne la liberté de regarder du contenu
              à tout moment, n'importe où, sans dépendre d'une connexion internet.
              Que vous économisiez des données, prépariez un voyage ou archiviez
              du contenu, les vidéos hors ligne sont incroyablement utiles. Voici quelques-unes
              des meilleures raisons de télécharger des vidéos YouTube pour un usage personnel.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Voyager sans accès Internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des films, vlogs ou clips musicaux pour les regarder lors de longs
                    vols, trajets en train ou dans des zones reculées où le Wi‑Fi ou
                    les données mobiles ne sont pas disponibles. Cela garantit un
                    divertissement ininterrompu en déplacement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Éducation et études
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des tutoriels, conférences ou guides pratiques pour
                    l'apprentissage hors ligne. Par exemple, sauvegardez des tutoriels de programmation,
                    des leçons de langue ou des vidéos de réparation DIY pour les réviser à votre
                    rythme sans streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Création de contenu et montage
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Capturez des clips pour vos propres vidéos, comme des vidéos de réaction,
                    des montages ou des commentaires, tant que vous respectez les règles
                    de droits d'auteur ou obtenez la permission du créateur. C'est idéal pour les YouTubeurs
                    ou créateurs TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiver les vidéos favorites
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Certaines vidéos sont supprimées ou retirées de YouTube en raison de
                    changements de chaîne ou de problèmes de droits d'auteur. Le téléchargement vous permet de
                    préserver vos favoris personnels ou du contenu rare pour un accès
                    à long terme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Économiser l'utilisation de données mobiles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Le streaming de vidéos consomme des données, surtout sur les forfaits limités.
                    Télécharger via Wi‑Fi vous permet de regarder sans vous soucier des
                    plafonds de données ou des factures coûteuses.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Bibliothèque de divertissement hors ligne
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Créez une collection de clips musicaux, bandes-annonces de films ou vlogs
                    à apprécier hors ligne. Parfait pour les voyages de camping, séances de sport
                    ou se détendre à la maison sans délais de mise en mémoire tampon.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ateliers et présentations
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les professionnels peuvent télécharger des vidéos liées à leur secteur, comme
                    des discours d'ouverture ou des sessions de formation, pour les partager lors
                    d'ateliers ou réunions hors ligne, garantissant une lecture fluide
                    sans dépendance internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos YouTube offre flexibilité et commodité,
              rendant plus facile de profiter du contenu selon vos termes, que ce soit pour le plaisir,
              le travail ou l'apprentissage.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les personnes qui bénéficient le plus des vidéos hors ligne
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos YouTube n'est pas seulement pour les spectateurs occasionnels - c'est un
              changement de donne pour des groupes spécifiques qui ont besoin d'un accès hors ligne pour le travail,
              la créativité ou la commodité. Voici un aperçu de qui peut tirer le meilleur
              parti du téléchargement de vidéos YouTube et pourquoi cela vaut la peine.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Créateurs de contenu et influenceurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les YouTubeurs, TikTokeurs ou streamers peuvent télécharger des clips pour
                    des vidéos de réaction, mashups ou analyses, à condition qu'ils respectent
                    les droits d'auteur et les lois sur l'usage équitable ou obtiennent la permission du
                    créateur original.
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
                    Sauvegardez du contenu éducatif comme des tutoriels de mathématiques, des explications scientifiques
                    ou des documentaires historiques pour l'étude hors ligne ou
                    l'usage en classe. C'est idéal pour les zones avec un mauvais internet ou
                    pour un apprentissage concentré sans distractions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Voyageurs fréquents
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Que vous soyez en avion, train ou dans un endroit reculé,
                    les vidéos téléchargées garantissent le divertissement sans dépendre du
                    Wi‑Fi capricieux ou des forfaits de données coûteux.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Passionnés de musique
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Convertissez des clips musicaux ou performances live en MP3 pour
                    des playlists hors ligne. C'est excellent pour créer des mix d'entraînement
                    ou écouter des interviews sans streaming, tant que la
                    source est légale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivistes vidéo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les collectionneurs ou fans de contenu de niche peuvent sauvegarder des vidéos rares,
                    d'anciennes uploads ou des favoris personnels qui pourraient disparaître de
                    YouTube en raison de fermetures de comptes ou de purges de contenu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Fans de fitness et bien-être
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des sessions de yoga, routines d'entraînement ou
                    guides de méditation pour les suivre hors ligne, que ce soit à la maison, dans un parc
                    ou à la salle de sport sans avoir besoin de connexion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Chercheurs et professionnels
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les universitaires ou experts industriels peuvent sauvegarder des conférences,
                    webinaires ou vidéos de formation pour référence hors ligne pendant
                    le travail de terrain, présentations ou sessions d'étude.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Peu importe votre rôle ou mode de vie, télécharger des vidéos YouTube peut
              économiser du temps, des données et des efforts tout en gardant votre contenu favori
              accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos YouTube ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce que vous devez savoir sur la loi
            </h2>
            <p className="section-muted mb-4">
              La légalité du téléchargement de vidéos YouTube dépend de plusieurs
              facteurs, et il est important de comprendre les règles pour éviter
              les problèmes. Les Conditions d'utilisation de YouTube interdisent explicitement
              le téléchargement de vidéos sauf si la plateforme fournit une option
              officielle, comme{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=fr&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                la fonction hors ligne de YouTube Premium
              </a>{" "}
              pour les abonnés. Sous la loi américaine sur les droits d'auteur, télécharger du{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                contenu protégé par des droits d'auteur
              </a>{" "}
              sans permission du créateur ou détenteur des droits est illégal
              et pourrait mener à des poursuites civiles, bien que l'application contre
              les utilisateurs individuels pour usage personnel soit rare.
            </p>
            <p className="section-muted mb-2">
              Cependant, il y a des exceptions où le téléchargement peut être légal :
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
                    Le contenu n'étant plus sous protection de droits d'auteur peut être
                    téléchargé librement.
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
                    Certaines vidéos YouTube ont des licences permettant les téléchargements pour
                    certains usages, comme le remixage ou le partage, tant que vous
                    suivez les termes.
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
                    Si le créateur de la vidéo autorise explicitement les téléchargements, vous êtes
                    dans votre droit.
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
                    Le téléchargement limité pour l'éducation, commentaire, critique ou
                    recherche pourrait qualifier comme{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      usage équitable
                    </a>
                    , mais cela dépend du contexte et comment vous utilisez la vidéo.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Pour rester en sécurité, vérifiez la licence de la vidéo dans sa description ou
              contactez le créateur pour permission. YouTube Premium offre un moyen légal
              de sauvegarder des vidéos hors ligne pour usage personnel. Si vous n'êtes pas sûr, péchez
              par excès de prudence pour respecter les créateurs et éviter de violer
              les lois sur les droits d'auteur.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Risques du téléchargement de vidéos YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers potentiels et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Bien que télécharger des vidéos YouTube soit pratique, cela comporte
              des risques si vous utilisez les mauvais outils ou ignorez les limites légales. Être
              conscient de ces dangers vous aide à faire des choix intelligents et protéger
              votre appareil et vos données. Voici les principaux risques à surveiller.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Logiciels malveillants de sites non fiables"
              >
                Beaucoup de sites de téléchargement sont criblés de faux boutons "télécharger",
                de publicités pop-up ou de scripts cachés qui installent{" "}
                <a href="https://cyberpress.org/youtube-downloader-malware/"
                className="text-primary hover:text-primary-glow underline transition-colors">
                  des virus ou logiciels malveillants sur votre appareil
                </a>
                . Ceux-ci peuvent voler vos données ou endommager votre système. Restez avec
                des plateformes réputées comme videodownload.io pour rester en sécurité.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Conséquences légales">
                Télécharger des vidéos protégées par des droits d'auteur sans permission viole
                les Conditions d'utilisation de YouTube, ce qui pourrait mener à des suspensions de compte
                ou, dans de rares cas, des actions légales de détenteurs de droits.
                Vérifiez toujours la licence de la vidéo ou utilisez des alternatives légales comme
                YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Fichiers de mauvaise qualité ou corrompus"
              >
                Les sites douteux livrent souvent des vidéos basse résolution ou des fichiers qui ne se lisent pas correctement, gaspillant votre temps et stockage. Les outils fiables garantissent que vous obtenez la qualité attendue.

              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Violations de la vie privée">
              Les sites de téléchargement non fiables peuvent traquer vos habitudes de navigation, collecter des informations personnelles ou vendre vos données à des tiers. Choisissez un service qui priorise la confidentialité des utilisateurs et ne nécessite pas d'autorisations inutiles.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Téléchargements incomplets">
              Certains outils échouent à traiter les vidéos correctement, vous laissant avec des fichiers partiels ou cassés qui ne s'ouvriront pas. C'est courant avec des sites obsolètes ou mal conçus.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Problèmes éthiques pour les créateurs"
              >
                Télécharger des vidéos peut contourner les publicités, ce qui nuit aux créateurs qui dépendent des revenus publicitaires ou des vues pour leur revenu. Considérez soutenir les créateurs en regardant leur contenu en ligne quand possible ou en obtenant leur permission pour les téléchargements.
              </FeatureCard>
            </div>
            <p className="section-muted">
            En utilisant un outil fiable et sécurisé comme videodownload.io et en respectant les règles de droits d'auteur, vous pouvez minimiser ces risques et profiter de téléchargements sûrs et fiables.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre partenaire de confiance pour les téléchargements YouTube
            </h2>
            <p className="section-muted mb-4">
            Nous avons lancé videodownload.io pour fournir un moyen sûr, simple et rapide de télécharger des vidéos YouTube sans les maux de tête des sites web douteux. Notre mission était de créer une plateforme propre qui coupe à travers le bruit des téléchargeurs lourds en publicités et risqués. Voici six raisons pour lesquelles videodownload.io se distingue comme le meilleur choix pour vos téléchargements de vidéos YouTube.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sans logiciels malveillants et sécurisé">
              Notre site est exempt de publicités pop-up, faux boutons ou scripts malveillants, garantissant que votre appareil reste protégé des virus et logiciels espions.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Design convivial">
              Avec une interface claire et un processus simple, n'importe qui peut télécharger des vidéos en quelques secondes, aucune compétence technique requise.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Téléchargements haute vitesse">
                Nos serveurs optimisés traitent les vidéos rapidement, donc vous obtenez vos
                fichiers sans longues attentes, même pour des vidéos haute qualité ou longues.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Options de format flexibles">
                Choisissez entre MP4 pour les vidéos ou MP3 pour l'audio, avec plusieurs
                options de résolution pour correspondre à vos besoins, de 720p à 4K.
              </FeatureCard>
              <FeatureCard icon={Download} title="Complètement gratuit">
                Téléchargez des vidéos illimitées sans payer un centime. Pas
                d'abonnements, pas de frais cachés - toutes les fonctionnalités sans coût.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Approche axée sur la confidentialité">
                Nous ne traquons pas vos téléchargements, ne stockons pas vos données personnelles ou
                ne partageons vos informations avec qui que ce soit, gardant votre activité
                privée.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions courantes sur videodownload.io et les téléchargements YouTube
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé les réponses aux questions les plus fréquentes sur l'utilisation
              de videodownload.io et le téléchargement de vidéos YouTube pour vous aider à commencer
              en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. Est-ce que videodownload.io est vraiment gratuit ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, notre plateforme est 100% gratuite. Vous pouvez télécharger autant de
                  vidéos que vous voulez sans frais ni limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. Dois-je installer un logiciel pour télécharger des vidéos ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, videodownload.io fonctionne entièrement via votre navigateur web.
                  Pas d'applications, d'extensions ou de téléchargements nécessaires, gardant les choses
                  simples.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. Puis-je télécharger des playlists YouTube entières ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolument. Collez simplement l'URL de la playlist, et notre système va
                  traiter toutes les vidéos de la playlist pour que vous les téléchargiez d'un
                  coup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. Est-ce sûr d'utiliser videodownload.io ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, notre site est sécurisé, sans publicités pop-up ou liens
                  malveillants. Nous priorisons la sécurité des utilisateurs et testons notre plateforme pour la garder
                  propre et fiable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. Puis-je télécharger des vidéos en haute qualité, comme la 4K ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Si la vidéo YouTube est disponible en 4K, vous pouvez la télécharger
                  dans cette résolution. Nous supportons une gamme de qualités, de 360p
                  à 4K, selon la source.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. Que faire si une vidéo ne se télécharge pas correctement ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez doublement l'URL et votre connexion internet. Si le
                  problème persiste, contactez notre équipe de support, et nous
                  résoudrons le problème pour vous.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. Puis-je extraire l'audio des vidéos YouTube ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, notre fonction de conversion MP3 vous permet de télécharger juste
                  l'audio de n'importe quelle vidéo YouTube, parfait pour la musique ou les clips
                  de podcast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. Est-ce légal de télécharger des vidéos YouTube ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Cela dépend de la vidéo. Les Conditions d'utilisation de YouTube interdisent
                  le téléchargement sauf si autorisé, mais les vidéos du domaine public,
                  sous Creative Commons ou avec approbation du créateur sont souvent
                  acceptables. L'usage équitable peut s'appliquer pour des choses comme l'éducation ou
                  commentaire, mais vérifiez toujours la licence de la vidéo pour éviter
                  les problèmes.
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
              Obtenez vos vidéos YouTube en quelques secondes
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
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo YouTube
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
        Sélectionnez parmi une gamme de résolutions, incluant 720p, 1080p et même 4K
        quand la vidéo le supporte. Que vous sauvegardez un tutoriel ou un clip
        musical, vous pouvez choisir la qualité qui correspond le mieux à votre appareil ou
        préférences sans naviguer dans des paramètres complexes ou menus techniques.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de téléchargement ultra-rapides">
        Nos serveurs optimisés garantissent que les vidéos se téléchargent en quelques secondes, pas en minutes.
        Selon votre connexion internet et la longueur de la vidéo, la plupart des fichiers
        sont prêts en moins d'une minute, vous économisant temps et frustration. Plus d'attente
        pour un traitement lent.
      </FeatureCard>
      <FeatureCard icon={Music} title="Extraction audio pour fichiers MP3">
        Besoin juste de l'audio ? Convertissez n'importe quelle vidéo YouTube en fichier MP3 d'un
        seul clic. Cette fonctionnalité est parfaite pour sauvegarder des pistes musicales, épisodes
        de podcast ou audio de conférences pour écoute hors ligne, la rendant
        polyvalente pour divers cas d'usage.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Aucune installation de logiciel requise">
        Téléchargez des vidéos directement via votre navigateur sur n'importe quel appareil - bureau,
        tablette ou téléphone. Il n'y a pas besoin d'installer des applications, plugins ou
        programmes supplémentaires, ce qui garde votre appareil propre et votre processus de téléchargement
        simple et sans tracas.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Support complet de téléchargement de playlist">
        Sauvegardez des playlists YouTube entières d'un coup. Au lieu de télécharger chaque
        vidéo individuellement, collez le lien de la playlist, et notre système va traiter
        toutes les vidéos en une fois, les organisant pour un accès facile. C'est un énorme
        gain de temps pour les téléchargements en masse.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interface sécurisée et sans publicités">
        Contrairement à beaucoup d'autres sites de téléchargement, videodownload.io est exempt de
        publicités pop-up agaçantes, redirections ou liens suspects. Notre design propre et convivial
        garantit une expérience sûre et fluide, donc vous pouvez vous concentrer sur
        le téléchargement sans vous soucier des risques de sécurité.
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
      <StepCard step={1} title="Copiez l'URL de la vidéo YouTube">
        Ouvrez YouTube dans votre navigateur ou application, trouvez la vidéo que vous voulez
        télécharger, et copiez son URL. Vous pouvez récupérer le lien depuis la barre d'adresse
        du navigateur ou en cliquant le bouton "Partager" sous la vidéo et
        sélectionnant "Copier le lien".
      </StepCard>
      <StepCard step={2} title="Collez l'URL sur notre site web">
        Visitez videodownload.io sur n'importe quel navigateur. Sur notre page d'accueil, vous verrez une
        barre de téléchargement où vous pouvez coller l'URL YouTube copiée. Juste
        clic droit ou appui long pour coller le lien dans le champ fourni,
        en vous assurant qu'il est précis.
      </StepCard>
      <StepCard step={3} title="Laissez-nous traiter le fichier vidéo">
        Cliquez le bouton "Télécharger" à côté de la barre URL. Notre système va
        instantanément récupérer la vidéo et la préparer pour téléchargement. Si demandé,
        choisissez votre format désiré (comme MP4 ou MP3) et qualité (comme 1080p ou
        4K). Cette étape prend généralement juste quelques secondes.
      </StepCard>
      <StepCard step={4} title="Sauvegardez et organisez votre vidéo">
        Une fois traité, un lien de téléchargement apparaîtra. Cliquez dessus pour sauvegarder la vidéo
        dans le stockage de votre appareil. Vous pouvez renommer le fichier pendant le téléchargement pour
        garder votre collection de vidéos organisée, facilitant la recherche plus tard pour
        visionnage hors ligne ou usage.
      </StepCard>
    </div>
  );
}