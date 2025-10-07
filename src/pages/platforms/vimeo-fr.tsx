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

export default function VimeoPageFR() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Téléchargement de Vidéos Vimeo | Gratuit & HD",
    description: "Téléchargez des vidéos Vimeo en MP4, qualité 1080p. Téléchargeur et convertisseur de vidéos en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Boîte de téléchargement minimaliste */}
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez l'URL d'une vidéo Vimeo"
            />
          </div>
          {/* Fonctionnalités */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez des vidéos Vimeo en toute simplicité
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre guide facile pour sauvegarder des clips créatifs hors ligne
          </p>

          <EnhancedFeatures />

          {/* Comment télécharger */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Un guide clair, étape par étape, pour enregistrer des vidéos sans effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Avec videodownload.io, récupérer des vidéos Vimeo sur votre appareil est un jeu d'enfant.
            Suivez ces quatre étapes simples pour télécharger n'importe quelle vidéo en quelques minutes.
            Chaque étape est intuitive, même si vous n'êtes pas expert en technologie.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo Vimeo
              </Button>
            </a>
          </div>

          {/* Pourquoi télécharger */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Meilleurs cas d'usage
            </h2>
            <p className="section-muted mb-4">
              Vimeo est une plateforme prisée pour le contenu créatif et professionnel, mais les vidéos peuvent disparaître ou être supprimées. Les télécharger vous permet de conserver celles qui vous inspirent ou vous forment, transformant des découvertes éphémères en collection personnelle. Il s'agit de sauvegarder ce qui nourrit vos projets ou votre passion, pas d'accumuler des vidéos au hasard. Vous gardez la main sur vos fichiers, à l'abri des suppressions ou changements de la plateforme.
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
                    Sauvegardez des tutoriels de réalisation ou des interviews d'artistes pour les trajets sans Wi-Fi, comme les vols ou les tournages en extérieur. Les étudiants téléchargent des vidéos pédagogiques pour réviser sans connexion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutilisation pour les créateurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les réalisateurs sauvegardent des courts métrages pour étudier les techniques ou les réinterpréter dans leurs projets. Les marketeurs récupèrent des contenus de marque à adapter sur d'autres plateformes, sans filigrane pour des montages propres.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiver vos propres mises en ligne
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous publiez des vidéos sur Vimeo, elles peuvent disparaître à cause d'un problème de compte ou d'une mise à jour. Téléchargez-les sur un disque pour protéger votre travail, qu'il s'agisse d'une pièce de portfolio ou d'un projet client.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et inspiration
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les designers sauvegardent des tutoriels de motion design pour s'exercer hors ligne. Les enseignants téléchargent des leçons créatives pour la classe, sans dépendre d'une connexion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Projets personnels
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conservez des clips musicaux ou des performances artistiques pour vous motiver. Transformez une trouvaille Vimeo en ressource pour votre prochaine idée créative ou présentation professionnelle.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Vimeo offre flexibilité et confort,
              pour profiter du contenu à votre rythme, que ce soit pour le plaisir,
              le travail ou l'apprentissage.
            </p>
          </div>

          {/* Qui devrait télécharger */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les personnes qui en tirent le plus de bénéfices
            </h2>
            <p className="section-muted mb-4">
              Vimeo est un refuge pour les artistes et les pros, mais télécharger des vidéos convient à ceux qui utilisent la plateforme pour créer, apprendre ou progresser. C'est pour celles et ceux qui voient les clips comme des outils, des inspirations ou des souvenirs, pas simplement comme des vidéos à regarder. Si vous êtes actif sur Vimeo et que vous voulez conserver l'essentiel, le téléchargement est votre allié.
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
                    Réalisateurs et animateurs sauvegardent tutoriels ou showreels pour les étudier ou les retravailler. Ils téléchargent aussi leurs propres vidéos pour garder des versions propres sans logos, prêtes pour le portfolio ou le montage.
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
                    Les profs d'art enregistrent des démos d'animation pour leurs cours. Les étudiants récupèrent des conseils de réalisation ou des leçons de design pour réviser hors ligne et progresser à leur rythme.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Professionnels et entreprises
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les marketeurs téléchargent des vidéos de marque à réutiliser dans des publicités ou sur des sites web. Les freelances conservent des propositions clients pour les archiver ou les partager, sans filigrane gênant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Passionnés et créatifs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les photographes sauvegardent des tutoriels d'éclairage à tester chez eux. Les musiciens téléchargent des performances live pour étudier les configurations scéniques, prêts pour une répétition hors ligne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Utilisateurs occasionnels
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez le court métrage d'un ami ou une vidéo motivante pour la revoir plus tard. Même les fans gardent des vitrines artistiques pour leurs projets personnels ou moodboards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre profil, télécharger des vidéos Vimeo vous fait gagner du temps, des données et de l'énergie tout en gardant vos contenus favoris accessibles.
            </p>
          </div>

          {/* Légal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos Vimeo ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce qu'il faut savoir sur la loi
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos Vimeo reste une zone grise. Les règles de Vimeo <a href="https://help.vimeo.com/hc/fr/articles/12426502581265-Comment-puis-je-t%C3%A9l%C3%A9charger-une-vid%C3%A9o-sur-vimeo-com">autorisent le téléchargement de vidéos publiques via leur site</a> pour un usage personnel, si le créateur n'a pas désactivé cette option. Utiliser des outils tiers comme le nôtre enfreint leurs conditions et peut signaler votre compte, même si les bannissements sont rares tant que vous ne téléchargez pas massivement ou ne republiez pas sans autorisation.
            </p>
            <p className="section-muted mb-4">
              Les vidéos sont protégées par le droit d'auteur, selon des lois comme le DMCA aux États-Unis. Les sauvegarder pour un visionnage privé, par exemple pour étudier un tutoriel hors ligne, est souvent considéré comme fair use. Mais les partager sans crédit ou les exploiter commercialement peut entraîner des problèmes juridiques. La musique ou les voix off peuvent ajouter des couches de droits, même si les sauvegardes personnelles et courtes posent rarement souci.
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
                    Si le créateur autorise le téléchargement ou que le contenu est dans le domaine public, vous êtes tranquille. Les usages éducatifs, comme montrer un clip en cours, relèvent souvent du fair use. Vérifiez les descriptions pour connaître les permissions. Gardez vos téléchargements privés et créditez les créateurs si vous partagez, pour rester dans les clous.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risques */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les risques liés au téléchargement de vidéos Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dangers potentiels et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Les téléchargeurs tiers semblent pratiques, mais certaines plateformes douteuses cachent de vrais dangers. Toutes ne sont pas fiables et un clic hasardeux peut nuire à votre appareil ou à vos données. Connaître les risques vous aide à éviter les mauvaises surprises.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Des sites peu sûrs glissent des virus dans les fichiers vidéo et installent spyware ou ransomware. Un seul mauvais téléchargement peut bloquer vos fichiers ou voler vos mots de passe. Certains outils ont été pris avec des keyloggers, transformant un simple clip en fuite de données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Arnaques de phishing">
                De faux formulaires imitent la connexion Vimeo et récupèrent vos identifiants si vous les saisissez. D'autres publicités poussent des "mises à jour" qui installent des traceurs et suivent votre activité au-delà de la plateforme.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problèmes de qualité"
              >
                Des sites médiocres compressent les vidéos, ce qui crée des saccades ou coupe le son. Vous vouliez un tutoriel clair, vous obtenez un fichier inutilisable.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de données">
                Certains sites enregistrent vos téléchargements et vendent votre IP ou vos préférences vidéo à des annonceurs. Des hackers pourraient voler ces informations, entraînant spam ou tentatives d'arnaque ciblée.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bannissements Vimeo">
                Utiliser massivement des outils tiers peut signaler votre compte, surtout si vous êtes créateur. Vous risquez de perdre profil ou vidéos du jour au lendemain.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Surcharge de stockage"
              >
                Accumuler beaucoup de vidéos consomme de l'espace et ralentit téléphones ou disques. Des fichiers corrompus peuvent faire planter vos lecteurs et vous faire perdre du temps.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilisez des sites de confiance, analysez vos téléchargements et pensez à un VPN pour rester protégé.
            </p>
          </div>

          {/* Pourquoi utiliser videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre partenaire de confiance pour les téléchargements Vimeo
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 parce que nous en avions assez des applications bancales et des sites risqués. En tant qu'utilisateurs de Vimeo, nous voulions un moyen rapide et propre de sauvegarder les vidéos sans prise de tête. Nous sommes une petite équipe, pas une grosse entreprise, et nous mettons l'accent sur des téléchargements simples et sûrs. Des millions d'utilisateurs nous font confiance sans fuite de données, et nous améliorons sans cesse l'outil grâce à leurs retours.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de cinq secondes">
                Les téléchargements aboutissent vite, même aux heures de pointe.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sans pubs ni pop-ups">
                Juste une interface claire.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sans filigranes">
                Des clips propres et prêts à l'emploi.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Sauvegardes illimitées">
                Aucun quota quotidien.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fonctionne sur tout appareil">
                Des vieilles tablettes aux nouveaux ordinateurs portables.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Configuration sécurisée">
                Aucune donnée conservée après coup.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQs</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions fréquentes sur les téléchargements Vimeo
            </h2>
            <p className="section-muted mb-4">
              Nous avons regroupé les réponses aux questions les plus courantes sur l'utilisation de
              videodownload.io et le téléchargement de vidéos Vimeo pour vous aider à démarrer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos Vimeo privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous prenons uniquement en charge les vidéos publiques. Les vidéos privées ou protégées par mot de passe nécessitent l'autorisation du créateur, et nous respectons ces limites pour rester légitimes.
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
                  Nos fichiers sont légers et propres, donc pas de ralentissement. Mais accumuler beaucoup de vidéos peut saturer le stockage; surveillez simplement l'espace libre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi ma vidéo téléchargée n'a-t-elle pas de filigrane ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo ajoute son logo pour tracer les partages, mais nous récupérons le fichier brut et le nettoyons pour vous offrir une vidéo claire à usage personnel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je enregistrer uniquement l'audio d'une vidéo Vimeo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, sélectionnez MP3 après avoir collé le lien. Idéal pour récupérer musique ou voix off d'un tutoriel sans l'image.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si le téléchargement ne démarre pas ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez que le lien est public et commence par vimeo.com. Essayez un autre navigateur ou videz le cache. Notre chat d'assistance règle les soucis rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite de durée ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous gérons les vidéos jusqu'à 60 minutes, même si la plupart des clips Vimeo varient. Les plus longs prennent un peu plus de temps mais se téléchargent intégralement.
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
                  Absolument pas. Nous traitons tout instantanément puis supprimons les données. Vos fichiers restent sur votre appareil, jamais sur nos serveurs.
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
                  Vimeo ne les avertit pas. Votre téléchargement reste privé, sans notification envoyée au créateur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Commencez maintenant */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à sauvegarder des vidéos Vimeo dès maintenant
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Récupérez vos clips créatifs en quelques secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copier le lien Vimeo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Coller sur notre site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Télécharger une vidéo propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo Vimeo
                </Button>
              </a>
            </div>
          </div>

          {/* Explorez plus de téléchargeurs */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Découvrez d'autres téléchargeurs
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
      <FeatureCard icon={VideoIcon} title="Téléchargements haute définition">
        Sauvegardez les vidéos Vimeo dans leur résolution maximale, jusqu'en 1080p ou plus si la mise en ligne originale le permet. Aucun grain ni couleurs ternes lorsque vous les regardez plus tard. Nous récupérons le fichier directement depuis les serveurs de Vimeo, en conservant chaque image nette pour ce court métrage ou ce tutoriel artistique.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sans filigranes ni branding">
        Vimeo ajoute son logo aux vidéos enregistrées via l'application, ce qui encombre la vue. Nous supprimons tout pour vous livrer un clip propre, prêt à monter ou à utiliser. Visionnez ce documentaire ou cette animation sans texte qui cache les détails.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Compatible avec tous les appareils">
        Téléphone, tablette, ordinateur portable ou de bureau : tout fonctionne sans accroc. Pas besoin d'application ni de logiciel supplémentaire. Ouvrez simplement notre site dans votre navigateur, collez le lien et téléchargez. Testé de vieux iPhone aux PC récents, toujours sans prise de tête.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de téléchargement rapides">
        Personne n'aime attendre. Notre outil récupère les vidéos Vimeo en quelques secondes, souvent moins de dix pour la plupart des clips. Nous utilisons des serveurs proches de ceux de Vimeo pour des téléchargements rapides, afin que vous puissiez enregistrer un tutoriel ou une bobine pendant une pause.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalement gratuit">
        Pas de frais, pas d'inscription, pas de coûts cachés. Téléchargez autant de vidéos que vous le souhaitez, chaque jour, sans limite. Nous le gardons gratuit pour que vous sauvegardiez ce film inspirant ou ce clip musical sans rencontrer de paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus sûr et privé">
        Vos données restent protégées. Nous ne stockons ni liens ni vidéos après téléchargement. Aucun suivi, aucun journal, aucune pub intrusive. Le processus est propre et garde votre appareil à l'abri des risques.
      </FeatureCard>
    </div>
  );
}

// --- Étapes détaillées ---
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
      <StepCard step={1} title="Copiez le lien vidéo depuis Vimeo">
        <a href="http://www.vimeo.com">Ouvrez Vimeo</a> sur votre téléphone ou dans votre navigateur. Trouvez la vidéo qui vous plaît, comme un conseil de réalisation ou une animation créative. Cliquez sur l'icône de partage, souvent un avion en papier, en bas ou sur le côté. Dans le menu, choisissez "Copier le lien". Vous récupérez ainsi l'URL complète, par exemple vimeo.com/123456789. Vérifiez qu'elle est correcte.
      </StepCard>
      <StepCard step={2} title="Collez le lien dans notre outil">
        Rendez-vous sur videodownload.io dans votre navigateur. Vous verrez une zone intitulée "Collez le lien Vimeo ici". Cliquez dedans et collez le lien copié. Assurez-vous qu'il commence par vimeo.com pour éviter les erreurs. Seules les vidéos publiques fonctionnent; les contenus privés ou protégés ne seront pas téléchargés.
      </StepCard>
      <StepCard step={3} title="Nous récupérons et nettoyons la vidéo">
        Cliquez sur le bouton vert "Télécharger" à côté du champ. Notre système extrait la vidéo des serveurs de Vimeo en quelques secondes. Nous retirons les filigranes et vérifions la qualité pour vous livrer un clip fluide. L'audio reste clair, pour ne rien manquer d'un tutoriel ou d'une interview.
      </StepCard>
      <StepCard step={4} title="Enregistrez le clip sur votre appareil">
        Plusieurs options apparaissent : MP4 pour la vidéo complète avec son, ou MP3 pour l'audio seul. Choisissez MP4 pour la plupart des clips. Lancez le téléchargement et le fichier arrive dans votre dossier Téléchargements ou la galerie du téléphone. Renommez-le clairement, par exemple "film_tutorial.mp4", avant de le sauvegarder. Lisez-le pour confirmer que tout est parfait.
      </StepCard>
    </div>
  );
}
