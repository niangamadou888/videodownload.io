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

export default function PinterestPageFr() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Vidéo Pinterest | Gratuit & HD",
    description:
      "Téléchargez des vidéos et épingles Pinterest en mp4, 1080p. Convertisseur et téléchargeur vidéo en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Boîte de téléchargement minimale */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Pinterest Video
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez l'URL d'une vidéo ou d'une épingle Pinterest"
            />
          </div>
          {/* Fonctionnalités */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez vos vidéos Pinterest en toute simplicité
          </h2>
          <p className="text-muted-foreground mb-6">
            Votre guide rapide pour enregistrer des vidéos inspirantes et les consulter hors ligne
          </p>

          <EnhancedFeatures />

          {/* Comment télécharger */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Une méthode claire, pas à pas, pour sauvegarder sans effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Avec videodownload.io, récupérer une vidéo Pinterest sur votre appareil prend quelques
            minutes. Suivez ces quatre étapes intuitives – même sans compétences techniques – pour
            télécharger n'importe quel contenu en un rien de temps.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Download Pinterest Video
              </Button>
            </a>
          </div>

          {/* Pourquoi télécharger */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les usages les plus pertinents
            </h2>
            <p className="section-muted mb-4">
              Pinterest regorge d'idées, mais les épingles disparaissent vite dans le flux. En téléchargeant les
              vidéos qui vous inspirent, vous transformez ces trouvailles éphémères en une collection personnelle.
              L'objectif n'est pas d'accumuler au hasard, mais de conserver ce qui nourrit votre créativité ou vos
              projets. Vous gardez le contrôle, à l'abri des suppressions ou bugs de l'application.
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
                    Sauvegardez des tutoriels DIY ou des guides de voyage pour les consulter en avion, en camping ou dans
                    toute zone sans Wi-Fi. Les parents stockent des idées d'activités pour occuper les enfants lors des
                    journées pluvieuses, sans connexion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutilisation créative
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les blogueurs enregistrent des clips déco pour les retravailler avec leurs astuces. Les petites
                    entreprises récupèrent des démonstrations produits pour alimenter leurs réseaux, sans watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Sauvegarder vos propres épingles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous publiez des vidéos, elles peuvent disparaître suite à des modifications de tableau ou à un
                    souci technique. Téléchargez vos contenus – recette, pas-à-pas, portfolio – pour les conserver en toute
                    sécurité.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Apprentissage et organisation
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Étudiants et passionnés gardent des tutoriels artistiques ou des fiches révision pour travailler hors
                    ligne. Les organisateurs d'événements téléchargent des idées déco pour les montrer aux clients sans
                    devoir chercher à nouveau.
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
                    Conservez des astuces jardinage pour la saison prochaine ou des routines sportives à suivre chaque jour.
                    Une simple épingle devient une ressource clé pour concrétiser vos idées.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos Pinterest offre flexibilité et confort : vous profitez du contenu selon vos besoins,
              pour le loisir, le travail ou l'apprentissage.
            </p>
          </div>

          {/* Pour qui */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos Pinterest ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Profils qui en tirent le plus de bénéfices
            </h2>
            <p className="section-muted mb-4">
              Pinterest regorge d'idées, mais le téléchargement parle surtout à celles et ceux qui passent à l'action.
              Créateurs, planificateurs, apprenants : si vous transformez les épingles en projets concrets, le téléchargement
              devient indispensable.
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
                    Blogueurs et influenceurs enregistrent des tutoriels déco ou DIY pour les réutiliser avec leur touche
                    personnelle. Ils gardent aussi leurs propres vidéos en haute qualité, sans logo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Bricoleurs et passionnés DIY
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les fans de loisirs créatifs sauvegardent des tutos couture ou peinture pour suivre chaque étape. Les
                    jardiniers téléchargent des guides de plantation à consulter directement dehors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Organisateurs et petites entreprises
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Wedding planners conservent des idées déco à proposer aux couples. Boutiques et artisans utilisent des
                    démonstrations produits dans leurs vitrines digitales, sans watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Parents et enseignants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professeurs stockent des activités manuelles pour la classe. Parents et nounous téléchargent des idées
                    sensorielles pour occuper les enfants sans écran.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Propriétaires et rénovateurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez des tutos rénovation ou astuces ameublement pour planifier vos travaux. Même les utilisateurs
                    occasionnels conservent des vidéos motivation pour inspirer leur moodboard.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre profil, télécharger des vidéos Pinterest vous fait gagner du temps et garde vos idées à
              portée de main.
            </p>
          </div>

          {/* Aspects légaux */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos Pinterest ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce qu'il faut savoir sur le droit d'auteur
            </h2>
            <p className="section-muted mb-4">
              Les vidéos restent la propriété de leurs créateurs et sont protégées par des lois comme la DMCA. Conserver un
              tutoriel pour un usage privé – par exemple s'entraîner hors ligne – relève souvent du fair use. En revanche,
              partager sans citer ou monétiser peut entraîner des litiges. Les pistes audio ajoutent parfois une couche de
              droits supplémentaires, même si les usages personnels courts posent rarement problème.
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
                    Si le créateur précise que le téléchargement est permis ou si le contenu est dans le domaine public,
                    vous êtes tranquille. L'usage éducatif – un professeur projetant un tutoriel – est souvent toléré. Gardez
                    vos vidéos pour un usage personnel et créditez les auteurs lorsque vous partagez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risques */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les risques liés au téléchargement de vidéos Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menaces potentielles et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Tous les téléchargeurs ne se valent pas. Certains sites douteux peuvent compromettre vos appareils ou vos
              données. Avant de cliquer sur « Télécharger », assurez-vous de connaître les risques.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malwares">
                Des plateformes suspectes glissent des virus dans les fichiers vidéo, installant spyware ou ransomware. Un
                seul mauvais téléchargement peut verrouiller vos documents ou voler vos mots de passe.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Des fausses pages imitent la connexion Pinterest pour capturer vos identifiants. D'autres pop-ups vendent de
                soi-disant mises à jour qui installent des traceurs.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualité dégradée">
                Les mauvais outils compressent trop les vidéos, créant décalages et pertes audio. Vous vous retrouvez avec un
                fichier inutilisable.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de données">
                Certains services enregistrent vos téléchargements et revendent IP ou centres d'intérêt aux annonceurs. Des
                fraudeurs peuvent en profiter.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Blocages Pinterest">
                Un recours intensif à des outils tiers peut signaler votre compte, surtout si vous publiez. Vous risquez de
                perdre vos tableaux.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Saturation du stockage">
                Les vidéos s'accumulent vite et saturent vos appareils. Des fichiers corrompus peuvent faire planter votre
                lecteur.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Préférez des sites fiables, scannez vos téléchargements et sécurisez-vous avec un VPN si nécessaire.
            </p>
          </div>

          {/* Pourquoi utiliser videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi utiliser videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre allié de confiance pour Pinterest
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022 après trop d'applications bancales et de sites risqués. Pinterest fait
              partie de nos routines, et nous voulions une solution rapide et sûre pour sauvegarder nos inspirations. Petite
              équipe, grosse priorité : des téléchargements simples, sûrs et sans fuite de données – confirmés par des
              millions d'utilisateurs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de cinq secondes">
                Les téléchargements se terminent même aux heures de pointe.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Aucun pop-up, aucune pub">
                Une interface claire et rien d'autre.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sans watermark">
                Des clips prêts à être utilisés.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Téléchargements illimités">
                Aucun quota quotidien.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Compatible partout">
                Fonctionne du vieux PC au smartphone dernier cri.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sécurité assurée">
                Aucune donnée conservée après le download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Toutes vos questions sur le téléchargement Pinterest
            </h2>
            <p className="section-muted mb-4">
              Voici les réponses aux questions les plus fréquentes sur l'utilisation de videodownload.io et le téléchargement
              des vidéos Pinterest. De quoi démarrer en confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos depuis des tableaux secrets ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, seuls les contenus publics sont pris en charge. Les pins privés exigent la permission du créateur et
                  nous respectons cette règle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement ralentit-il mon téléphone ou mon PC ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nos fichiers sont légers et sûrs : aucun ralentissement. Veillez simplement à surveiller votre stockage si
                  vous gardez beaucoup de vidéos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi mon fichier téléchargé n'a-t-il pas de watermark ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous récupérons le fichier original et supprimons les marques visuelles pour un usage personnel propre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je enregistrer uniquement l'audio ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, choisissez le format MP3 après avoir collé le lien pour obtenir uniquement le son.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si le téléchargement échoue ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vérifiez que le lien est public et complet. Essayez un autre navigateur ou videz le cache. Notre support
                  est disponible si besoin.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite de durée ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous traitons des vidéos jusqu'à 60 minutes. Au-delà, le téléchargement peut prendre un peu plus de temps
                  mais reste complet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Conservez-vous les vidéos téléchargées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolument pas. Nous traitons la requête en direct puis supprimons tout. Les fichiers restent uniquement
                  sur votre appareil.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Les créateurs voient-ils que j'ai téléchargé leur vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, Pinterest n'envoie aucune notification. Vos téléchargements restent privés.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à sauvegarder vos vidéos Pinterest dès maintenant
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Téléchargez des clips inspirants en quelques secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiez le lien Pinterest
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Collez-le sur notre site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Téléchargez la vidéo propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Pinterest Video
                </Button>
              </a>
            </div>
          </div>

          {/* Autres downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Découvrez nos autres downloaders
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
      <FeatureCard icon={VideoIcon} title="Qualité vidéo premium">
        Sauvegardez des vidéos Pinterest dans leur meilleure résolution, jusqu'à 1080p si l'épingle d'origine le supporte. Pas d'images floues ou de couleurs délavées lors de la lecture. Nous récupérons le fichier directement depuis les serveurs Pinterest, préservant chaque détail pour ce tutoriel DIY ou cette recette.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Aucun watermark ni superposition">
        <a href="https://help.pinterest.com/fr/article/download-an-image">Pinterest affiche le nom d'utilisateur du créateur sur les vidéos téléchargées via leur application</a>, encombrant la vue. Nous retirons tout cela, vous offrant un clip propre prêt pour vos projets ou usage personnel. Regardez cette idée déco sans texte masquant les détails.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Fonctionne sur tous les appareils">
        Utilisez votre téléphone, tablette, ordinateur portable ou de bureau, tout fonctionne parfaitement. Pas d'application ni de logiciel supplémentaire nécessaire. Ouvrez simplement notre site dans votre navigateur, collez le lien et téléchargez. Testé sur tout, des vieux iPhone aux PC récents, c'est toujours simple.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Vitesses de téléchargement rapides">
        Attendre, c'est pénible. Notre outil récupère les vidéos Pinterest en quelques secondes, généralement moins de 10 pour la plupart des clips. Nous utilisons des serveurs proches de Pinterest pour des récupérations rapides, vous permettant de sauvegarder une vidéo bricolage ou d'entraînement pendant une pause café.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalement gratuit">
        Aucun coût, aucune inscription, aucun frais caché. Téléchargez autant de vidéos que vous voulez, chaque jour, sans limites. Nous gardons tout gratuit pour que vous puissiez sauvegarder cette inspiration mariage ou ce projet artistique sans rencontrer de mur payant.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus sûr et privé">
        Vos informations restent sécurisées. Nous ne stockons pas vos liens ou vidéos après téléchargement. Aucun suivi, aucun journal, et aucune publicité envahissante. Le processus est propre, gardant votre appareil exempt de déchets ou de risques.
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
      <StepCard step={1} title="Copiez le lien vidéo depuis Pinterest">
        <a href="http://www.pinterest.com">Ouvrez Pinterest</a> sur votre téléphone ou navigateur. Trouvez la vidéo que vous aimez, comme un tutoriel tricot ou un relooking maison. Cliquez sur les trois points en haut à droite de l'épingle. Dans le menu, sélectionnez « Copier le lien ». Cela récupère l'URL complète, quelque chose comme pinterest.com/pin/123456789. Assurez-vous qu'elle soit exacte.
      </StepCard>
      <StepCard step={2} title="Collez le lien sur notre site">
        Allez sur videodownload.io dans votre navigateur. Vous verrez une boîte intitulée « Collez le lien Pinterest ici ». Cliquez à l'intérieur et collez le lien copié. Vérifiez qu'il commence par pinterest.com pour éviter les erreurs. Seules les épingles publiques fonctionnent ; les vidéos de tableaux privés ou secrets ne se téléchargeront pas.
      </StepCard>
      <StepCard step={3} title="Nous récupérons et nettoyons la vidéo">
        Cliquez sur le bouton vert « Télécharger » à côté de la boîte. Notre système récupère la vidéo depuis les serveurs Pinterest en quelques secondes. Nous retirons tous les watermarks et assurons une qualité solide. L'audio reste clair, vous ne manquez aucune étape de cette recette ou ce guide bricolage.
      </StepCard>
      <StepCard step={4} title="Sauvegardez le clip sur votre appareil">
        Vous obtenez des options : MP4 pour la vidéo complète avec son ou MP3 pour l'audio seul. Choisissez MP4 pour la plupart des clips. Appuyez pour télécharger, et il s'enregistre dans votre dossier Téléchargements ou la galerie de votre téléphone. Nommez-le clairement, comme « diy_peinture.mp4 », avant de sauvegarder. Lisez-le pour confirmer qu'il est parfait.
      </StepCard>
    </div>
  );
}
