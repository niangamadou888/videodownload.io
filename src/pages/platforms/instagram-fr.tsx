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

export default function InstagramPageFr() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Télécharger Vidéo Instagram | Gratuit & HD",
    description: "Téléchargez des vidéos Instagram, Reels, Stories et IGTV en mp4, 1080p, 4k. Convertisseur et téléchargeur de vidéos gratuit en ligne."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez une URL de vidéo, Reel ou Story Instagram"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez des vidéos Instagram en toute simplicité
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre guide simple pour sauvegarder des Reels et clips hors ligne
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Guide étape par étape pour sauvegarder des vidéos facilement
          </h2>
          <p className="text-muted-foreground mb-6">
            Télécharger des vidéos Instagram sur votre appareil est simple avec
            videodownload.io. Suivez ces quatre étapes pour télécharger
            n'importe quelle vidéo en quelques minutes. Chaque étape est conçue
            pour être intuitive, même si vous n'êtes pas à l'aise avec la
            technologie.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo Instagram
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs cas d'usage
            </h2>
            <p className="section-muted mb-4">
              Le fil rapide d'Instagram enterre rapidement les pépites. Le téléchargement vous permet de conserver les clips qui comptent, transformant le défilement en collection personnelle. Il ne s'agit pas de sauvegarder chaque publication, mais de garder les vidéos qui inspirent ou ont du sens. Vous contrôlez ce qui reste, peu importe si les comptes deviennent privés ou si les publications disparaissent.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visionnage hors ligne
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des conseils de voyage ou des routines d'entraînement pour les vols ou le camping sans signal. Les parents téléchargent des chansons pour enfants ou des clips d'histoires pour les trajets en voiture, gardant les enfants heureux sans Wi-Fi.
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
                    Les créateurs utilisent les téléchargements pour remixer. Une blogueuse mode sauvegarde des reels de tenues pour les intégrer dans son contenu, ajoutant des voix off ou de nouveaux angles. Les musiciens récupèrent des sons tendance pour les superposer dans leurs morceaux, évitant les filigranes pour des montages propres.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sauvegarder vos publications
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram peut supprimer ou dysfonctionner, donc les créateurs sauvegardent leurs reels sur des disques durs. Les étudiants récupèrent des astuces d'étude ou des clips de cours pour leurs notes, les regardant sans connexion à l'application.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutiliser pour d'autres plateformes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Transformez un reel en YouTube Short ou clip TikTok avec des ajustements. Les entreprises sauvegardent les témoignages clients pour les intégrer sur leurs sites web, renforçant la confiance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Souvenirs personnels
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des moments familiaux, comme la danse de mariage d'un cousin ou la mise à jour d'un bébé d'un ami, pour partager lors de réunions ou conserver pendant des années. C'est un moyen de garder les souvenirs précieux.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Instagram offre flexibilité et commodité,
              facilitant la découverte du contenu à vos conditions, que ce soit
              pour le plaisir, le travail ou l'apprentissage.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les personnes qui en bénéficient le plus
            </h2>
            <p className="section-muted mb-4">
              Le défilement sans fin d'Instagram accroche des millions, mais télécharger des vidéos convient aux personnes qui utilisent la plateforme avec intention. C'est pour ceux qui voient les reels comme des outils, de l'inspiration ou des souvenirs, pas seulement du divertissement rapide. Si vous construisez, apprenez ou sauvegardez des moments, c'est pour vous.
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
                    Ils publient quotidiennement, tirant des idées des reels tendance. Le téléchargement leur permet de sauvegarder leur travail ou d'étudier d'autres, comme un vlogueur culinaire récupérant des astuces de présentation pour remixer dans son style sans logos gênants.
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
                    Les professeurs sauvegardent des reels de démonstration pour les cours, comme des expériences scientifiques, à montrer sans problèmes internet. Les étudiants téléchargent des guides d'étude ou des exercices de langue, révisant hors ligne à leur propre rythme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les parents sauvegardent les premiers pas d'un enfant ou une saynète de vacances pour partager avec des proches ou archiver plus tard. C'est plus fiable que d'espérer qu'Instagram le garde éternellement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entrepreneurs et marketeurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Une boutique sauvegarde les publications de tenues de clients pour des publicités ou des preuves sociales. Les marketeurs testent des tendances de reels pour des campagnes, les adaptant sur toutes les plateformes.
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
                    Les fans de fitness sauvegardent des flows de yoga pour pratiquer à la salle. Les bricoleurs téléchargent des tutoriels d'artisanat pour suivre étape par étape. Même les utilisateurs occasionnels récupèrent des clips motivants pour les regarder pendant les jours difficiles.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre rôle ou style de vie, télécharger des vidéos
              Instagram peut économiser du temps, des données et des efforts tout
              en gardant votre contenu préféré accessible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos Instagram ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce que vous devez savoir sur la loi
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Instagram n'est pas noir ou blanc. Les règles d'Instagram permettent de sauvegarder des publications publiques via leur application pour un usage personnel, tant que le créateur ne l'a pas désactivé. Utiliser des outils tiers comme le nôtre enfreint techniquement leurs conditions, ce qui pourrait signaler votre compte, bien que les bannissements soient rares sauf si vous téléchargez en masse ou republiez.
            </p>
            <p className="section-muted mb-2">
              Légalement, les vidéos appartiennent à leurs créateurs selon les lois sur les droits d'auteur, comme le DMCA américain. Sauvegarder pour un visionnage personnel relève souvent de l'usage équitable, comme regarder un reel hors ligne. Mais partager sans permission ou éditer à but lucratif peut déclencher des réclamations pour violation. La musique dans les reels ajoute de la complexité, car les labels possèdent les morceaux, mais les sauvegardes personnelles courtes font rarement face à des problèmes.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Quand c'est autorisé
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si le créateur autorise les téléchargements ou si la vidéo est du domaine public, vous êtes tranquille. L'usage éducatif, comme les enseignants montrant des clips en classe, relève souvent de l'usage équitable. Vérifiez les légendes des publications pour la permission. Gardez-le privé et créditez les créateurs si vous partagez, et vous êtes généralement en sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les risques associés au téléchargement de vidéos Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers potentiels et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Télécharger depuis des sites tiers semble facile, mais les sites douteux apportent de vrais problèmes. Tous les outils ne sont pas propres, et cliquer aveuglément peut gâcher votre appareil ou vos données. Connaissez les risques pour rester en sécurité avant d'appuyer sur ce bouton de téléchargement.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Les logiciels malveillants sont la plus grande menace"
              >
                Les sites douteux cachent des virus dans les fichiers vidéo, introduisant des logiciels espions ou rançongiciels. Un mauvais téléchargement peut verrouiller vos fichiers ou voler des mots de passe. Les rapports montrent que certains outils cachent des enregistreurs de frappe, transformant une sauvegarde de reel en violation de données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Arnaques par hameçonnage">
                Les fausses pages de téléchargement imitent la connexion Instagram, récupérant vos identifiants si vous les saisissez. Ou les publicités pop-up poussent des "mises à jour" qui installent des traceurs, surveillant chacun de vos clics.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problèmes de qualité"
              >
                Les mauvais sites compressent les vidéos, laissant des images saccadées ou du son muet. Vous vouliez un reel net, mais obtenez un désordre flou à la place.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de confidentialité">
                Certains sites enregistrent vos téléchargements, vendant votre IP ou préférences vidéo aux annonceurs. Les pirates pourraient obtenir ces données, vous envoyant du spam ou pire.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bannissements Instagram">
                Le téléchargement intensif via des outils tiers peut signaler votre compte, surtout pour les créateurs. Vous pourriez perdre votre profil ou vos abonnés du jour au lendemain.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Problèmes de stockage"
              >
                Les reels s'accumulent, ralentissant les téléphones ou remplissant les disques. Les fichiers corrompus peuvent faire planter votre lecteur, perdant du temps à réparer.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilisez des sites de confiance, scannez les téléchargements et
              envisagez des VPN pour rester en sécurité.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre partenaire de confiance pour les téléchargements Instagram
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 parce que nous en avions assez des applications boguées et des <a href="https://blog.avast.com/malicious-browser-extensions-avast">téléchargeurs avec des logiciels malveillants</a>. En tant qu'utilisateurs d'Instagram, nous voulions un moyen propre de sauvegarder des reels sans tracas ni risques. Nous sommes une petite équipe, pas une grande entreprise, axée sur rendre les téléchargements simples et sûrs. Des millions de téléchargements plus tard, nous n'avons pas eu de violations et les utilisateurs reviennent pour notre fiabilité.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Téléchargements rapides">
                Moins de cinq secondes même les jours chargés.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Pas de pubs, pas de pop-ups">
                Juste un site propre.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Filigranes supprimés">
                Chaque vidéo pure.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Sauvegardes illimitées">
                Pas de limites quotidiennes.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fonctionne sur tous les appareils">
                Des téléphones aux PC.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Système sécurisé">
                Aucune donnée conservée après votre utilisation.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions courantes sur les téléchargements Instagram
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé les réponses aux questions les plus fréquentes
              sur l'utilisation de videodownload.io et le téléchargement de
              vidéos Instagram pour vous aider à démarrer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos Instagram privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous ne traitons que les reels et publications publics. Les privés nécessitent la permission du créateur, et nous respectons cela pour rester légitimes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement nuira-t-il aux performances de mon téléphone ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nos fichiers sont propres et légers, donc pas de ralentissement. Mais surveillez votre stockage ; sauvegarder beaucoup de reels peut le remplir rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi n'y a-t-il pas de filigrane sur ma vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram ajoute des logos pour le suivi, mais nous récupérons le fichier original et les supprimons pour une sauvegarde propre que vous pouvez utiliser librement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je sauvegarder uniquement l'audio d'un reel ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez MP3 après avoir collé le lien. Parfait pour récupérer des sons tendance ou des voix off sans la vidéo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si mon téléchargement ne démarre pas ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez que le lien est public et commence par instagram.com. Essayez un autre navigateur ou videz le cache. Notre chat de support résout les problèmes rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il des limites de taille pour les vidéos ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous traitons les reels jusqu'à 60 minutes, bien que la plupart soient courts. Les plus longs prennent un peu de temps, mais nous ne coupons pas les coins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Gardez-vous mes vidéos téléchargées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolument pas. Nous traitons instantanément et supprimons tout après. Vos fichiers restent sur votre appareil, nulle part ailleurs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le créateur peut-il voir que j'ai téléchargé son reel ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram ne les en informe pas. Votre téléchargement reste privé, pas d'alertes pour l'auteur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à sauvegarder des vidéos Instagram maintenant
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtenez vos Reels hors ligne en quelques secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiez le lien Instagram
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Collez sur notre site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Téléchargez la vidéo propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo Instagram
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
      <FeatureCard icon={VideoIcon} title="Qualité vidéo cristalline">
        Obtenez des vidéos Instagram dans toute leur splendeur, jusqu'à 1080p si la publication originale le permet. Pas de lecture granuleuse ou de couleurs délavées quand vous regardez plus tard. Nous récupérons le fichier brut des serveurs Instagram, gardant chaque image nette pour ce clip de voyage parfait ou cette démo culinaire.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Téléchargements sans filigrane">
        Instagram appose son logo et son nom d'utilisateur sur les vidéos sauvegardées, encombrant la vue. Nous les supprimons complètement, vous laissant avec un clip propre prêt pour l'édition ou le partage. Regardez ce reel de danse ou ce moment d'animal sans texte bloquant l'action.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Fonctionne sur tous les appareils">
        Utilisez votre iPhone, Android, PC ou tablette, et ça marche tout simplement. Pas d'applications à installer ou de logiciels à configurer. Ouvrez notre site dans n'importe quel navigateur, collez le lien et récupérez votre vidéo. Testé sur tout, des vieux ordinateurs portables aux nouveaux téléphones, c'est fluide à chaque fois.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Téléchargements ultra-rapides">
        Personne n'aime attendre. Notre outil récupère les vidéos Instagram en quelques secondes, souvent moins de 10 pour la plupart des clips. Nous exploitons des serveurs proches de ceux d'Instagram pour la vitesse, donc vous pouvez sauvegarder un reel pendant une pause rapide sans mise en mémoire tampon ni erreurs.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Accès complètement gratuit">
        Pas de frais, pas d'inscriptions, pas de frais surprise. Téléchargez autant de vidéos que vous voulez quotidiennement, sans limites. Nous le gardons gratuit pour que vous puissiez sauvegarder cette routine d'entraînement ou ce sketch drôle sans vous soucier d'un mur payant.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus sûr et sécurisé">
        Votre vie privée reste verrouillée. Nous ne gardons pas vos liens ou vidéos après votre téléchargement. Pas de suivi, pas de données stockées et pas de publicités douteuses. Le processus est propre et votre appareil reste à l'abri des indésirables.
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
      <StepCard step={1} title="Copiez le lien vidéo depuis Instagram">
        <a href="http://www.instagram.com">Ouvrez Instagram</a> sur votre téléphone ou navigateur. Trouvez le reel ou la vidéo que vous voulez, comme une recette rapide ou un vlog de voyage. Appuyez sur les trois points en haut à droite de la publication. Dans le menu, sélectionnez "Copier le lien". Cela récupère l'URL complète, quelque chose comme instagram.com/reel/ABC123. Assurez-vous qu'elle est exacte.
      </StepCard>
      <StepCard step={2} title="Collez le lien sur notre site">
        Allez sur videodownload.io dans votre navigateur. Vous verrez une boîte claire intitulée "Collez le lien Instagram ici". Cliquez à l'intérieur et collez le lien copié. Vérifiez qu'il commence par instagram.com pour éviter les erreurs. Les publications privées ne fonctionneront pas, mais les reels et vidéos publics sont bons.
      </StepCard>
      <StepCard step={3} title="Nous récupérons et nettoyons la vidéo">
        Cliquez sur le bouton vert "Télécharger" à côté de la boîte. Notre système récupère la vidéo des serveurs Instagram en quelques secondes. Nous supprimons le filigrane et vérifions la qualité, donc vous n'êtes pas bloqué avec des problèmes. L'audio reste synchronisé, prêt pour la lecture.
      </StepCard>
      <StepCard step={4} title="Sauvegardez le fichier sur votre appareil">
        Vous verrez des options : MP4 pour la vidéo complète avec le son ou MP3 pour juste l'audio. Choisissez MP4 pour la plupart des clips. Appuyez pour télécharger, et il arrive dans votre dossier Téléchargements ou la galerie de votre téléphone. Nommez-le quelque chose de simple, comme "reel_workout.mp4", avant de sauvegarder. Lisez-le pour confirmer qu'il est parfait.
      </StepCard>
    </div>
  );
}
