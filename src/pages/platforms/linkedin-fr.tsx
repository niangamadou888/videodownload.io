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

export default function LinkedInPageFr() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Télécharger Vidéo LinkedIn | Gratuit & HD",
    description:
      "Téléchargez des vidéos et publications LinkedIn en mp4, 1080p. Téléchargeur et convertisseur vidéo en ligne gratuit."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Boîte de téléchargement minimale */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Collez l'URL d'une vidéo ou publication LinkedIn"
            />
          </div>
          {/* Fonctionnalités */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Fonctionnalités
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Téléchargez vos vidéos LinkedIn facilement
          </h2>
          <p className="text-muted-foreground mb-6">
            Le guide simple pour sauvegarder vos clips et contenus pros hors ligne
          </p>

          <EnhancedFeatures />

          {/* Comment télécharger */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Comment télécharger des vidéos LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Une méthode claire, étape par étape, pour sauvegarder sans effort
          </h2>
          <p className="text-muted-foreground mb-6">
            Avec videodownload.io, récupérer une vidéo LinkedIn sur votre appareil
            se fait en quelques minutes. Suivez ces quatre étapes intuitives –
            même sans connaissances techniques – et conservez n'importe quel clip.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Télécharger une vidéo LinkedIn
              </Button>
            </a>
          </div>

          {/* Pourquoi télécharger */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi télécharger des vidéos LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les meilleurs cas d'usage
            </h2>
            <p className="section-muted mb-4">
              Le fil LinkedIn défile vite et les vidéos de qualité disparaissent sous
              les nouveaux posts. Télécharger vous permet de garder les contenus
              importants et de transformer quelques minutes de scroll en véritables
              ressources. Ce n'est pas accumuler tout et n'importe quoi, mais bien
              conserver ce qui sert votre carrière ou votre entreprise, à l'abri des
              bugs ou suppressions.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Accès hors ligne pour les pros
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sauvegardez une conférence leadership ou une stratégie marketing
                    pour l'écouter en avion ou dans le train sans Wi-Fi. Les
                    formateurs enregistrent des extraits d'ateliers à diffuser en
                    réunion, sans dépendre d'une connexion instable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Réutiliser vos contenus
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les marketeurs conservent des études de cas pour les intégrer à
                    leurs supports commerciaux ou à d'autres réseaux. Les candidats
                    téléchargent des conseils CV pour les analyser image par image et
                    affiner leur pitch. Découpez les moments clés pour vos
                    présentations sans devoir tout recréer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archiver vos propres publications
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si vous partagez des prises de parole ou des mises à jour, les
                    vidéos peuvent disparaître après une évolution de la plateforme.
                    Téléchargez-les sur un disque sécurisé pour protéger votre
                    travail des suspensions ou des bugs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Formation et pédagogie
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les équipes RH sauvegardent des vidéos d'intégration pour les
                    nouveaux arrivants. Les étudiants récupèrent des tables rondes
                    sectorielles pour alimenter leurs notes et réviser hors ligne.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Développement personnel
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gardez des talks inspirants ou des conseils networking à revoir
                    quand vous avez besoin d'un boost. Transformez un message de
                    mentor en rappel quotidien sans farfouiller dans l'application.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Télécharger des vidéos LinkedIn offre flexibilité et confort : vous
              consommez les contenus utiles à votre rythme, pour le travail, la
              formation ou l'inspiration.
            </p>
          </div>

          {/* Pour qui */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Qui devrait télécharger des vidéos LinkedIn ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Les profils qui en tirent le plus de bénéfices
            </h2>
            <p className="section-muted mb-4">
              LinkedIn est la plateforme des pros, et télécharger ses vidéos convient
              à ceux qui l'utilisent pour progresser, apprendre ou développer leur
              activité. Si vous voyez les posts comme des outils plutôt que de
              simples actualités, chaque clip peut devenir une ressource. Tous les
              utilisateurs n'en ont pas besoin, mais pour les plus actifs et
              stratégiques, c'est un vrai levier.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Cadres et managers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les managers conservent des talks leadership à partager en équipe.
                    Les marketeurs téléchargent des publicités concurrentes pour
                    analyser les tendances et réutilisent des clips propres dans leurs
                    slides sans logos gênants.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Candidats et coachs carrière
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez des astuces d'entretien ou des décryptages de CV pour
                    vous entraîner hors ligne. Les coachs gardent des témoignages
                    clients pour alimenter leurs séances, sans watermark.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Dirigeants et entrepreneurs
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les startups sauvegardent des pitchs ou insights sectoriels pour
                    suivre la concurrence. Les PME téléchargent des témoignages clients
                    afin de les intégrer à leurs sites ou leurs propositions
                    commerciales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Formateurs et enseignants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Les responsables RH stockent des vidéos de conformité pour les
                    formations internes. Les professeurs téléchargent des panels
                    d'experts pour alimenter leurs cours avec des cas concrets, sans
                    dépendre d'une connexion fragile.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Étudiants et apprenants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Récupérez des conseils de carrière ou des tutoriels techniques et
                    révisez à votre rythme. Même les utilisateurs occasionnels
                    conservent des vidéos motivantes pour les revoir pendant une
                    recherche d'emploi ou un projet difficile.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Quel que soit votre rôle, télécharger des vidéos LinkedIn vous fait
              gagner du temps, économise vos données et garde vos contenus clés à
              portée de main.
            </p>
          </div>

          {/* Légalité */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Est-il légal de télécharger des vidéos LinkedIn ?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Ce qu'il faut savoir sur la loi
            </h2>
            <p className="section-muted mb-4">
              Télécharger des vidéos LinkedIn reste une zone grise. Les contenus sont
              protégés par leurs auteurs via des lois comme la <a href="https://fr.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> aux
              États-Unis. Conserver une vidéo pour un visionnage privé – par exemple
              étudier un webinar hors ligne – relève souvent du fair use. En revanche,
              partager sans autorisation ou utiliser à des fins commerciales peut
              entraîner des risques juridiques. Les bandes-son ou voix off peuvent
              aussi être protégées, même si les sauvegardes personnelles et brèves
              posent rarement problème.
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
                    Si le créateur autorise la diffusion ou si la vidéo est dans le
                    domaine public, vous êtes couvert. L'usage pédagogique –
                    enseignants diffusant un extrait en classe – est souvent toléré.
                    Vérifiez la légende du post pour chercher une permission explicite.
                    Gardez vos téléchargements pour un usage privé et créditez les
                    auteurs lorsque vous partagez : vous resterez généralement du bon
                    côté.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risques */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Les risques liés au téléchargement de vidéos LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Menaces potentielles et comment les éviter
            </h2>
            <p className="section-muted mb-4">
              Télécharger via des sites douteux semble pratique, mais ces plateformes
              cachent souvent de vraies menaces. Tous les outils ne sont pas fiables,
              et quelques clics hâtifs peuvent compromettre votre appareil ou vos
              données. Identifiez les dangers avant de cliquer sur « Télécharger ».
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malwares en embuscade">
                Des sites suspects glissent des virus dans les fichiers vidéo,
                installant spyware ou ransomware. Un mauvais téléchargement peut
                bloquer vos documents ou voler vos mots de passe. Certains outils
                cachent des keyloggers qui transforment un simple reel en fuite de
                données.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Arnaques de phishing">
                Des pages factices imitent le login LinkedIn et volent vos identifiants.
                D'autres affichent des pop-ups qui poussent de fausses « mises à jour »
                installant des traqueurs sur chaque clic.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Qualité dégradée">
                Les mauvais sites compressent trop les vidéos, provoquant saccades ou
                coupures audio. Vous pensiez récupérer un webinar clair, vous obtenez
                un enregistrement brouillé.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fuites de données">
                Certains services enregistrent vos téléchargements, revendent votre IP
                ou vos préférences à des annonceurs. Des pirates peuvent exploiter ces
                données pour envoyer du spam ou lancer des escroqueries.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Sanctions LinkedIn">
                Un usage intensif d'outils tiers peut signaler votre compte, surtout
                si vous publiez souvent. Vous risquez de perdre l'accès à votre réseau
                ou à vos posts.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Surcharge de stockage">
                Empiler les vidéos occupe vite l'espace, ralentit téléphones ou
                disques. Les fichiers corrompus peuvent faire planter les lecteurs et
                vous faire perdre du temps.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Utilisez des sites de confiance, analysez vos fichiers et envisagez un
              VPN pour limiter les risques.
            </p>
          </div>

          {/* Pourquoi videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Pourquoi choisir videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Votre partenaire fiable pour les téléchargements LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Nous avons lancé videodownload.io en 2022, lassés des outils douteux et
              des apps lentes. En tant qu'utilisateurs LinkedIn, nous voulions une
              solution rapide et propre pour enregistrer des vidéos sans risque. Nous
              sommes une petite équipe dédiée à rendre le download simple et sûr.
              Après des millions d'utilisateurs satisfaits et zéro fuite, nous
              continuons d'améliorer le service selon leurs retours.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Moins de cinq secondes">
                Des téléchargements rapides, même aux heures de pointe.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sans pub ni pop-up">
                Une interface claire, rien de plus.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sans watermark">
                Des clips propres et exploitables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Téléchargements illimités">
                Aucune restriction quotidienne.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Compatible partout">
                Fonctionne sur anciens PC comme sur smartphones récents.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sécurité garantie">
                Aucun stockage de données après le download.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">FAQ</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Questions fréquentes sur le téléchargement LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Nous avons compilé les réponses aux questions les plus courantes sur
              l'utilisation de videodownload.io et le téléchargement de vidéos
              LinkedIn afin de vous lancer en toute confiance.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je télécharger des vidéos LinkedIn privées ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Non, nous ne gérons que les publications publiques. Les vidéos
                  privées ou de groupes nécessitent l'autorisation du créateur, que nous
                  respectons pour rester conformes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le téléchargement ralentit-il mon appareil ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nos fichiers sont légers et optimisés, donc pas de ralentissement.
                  Pensez toutefois à surveiller votre stockage si vous sauvegardez
                  beaucoup de vidéos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Pourquoi ma vidéo téléchargée n'a-t-elle plus de watermark ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn ajoute son logo pour suivre les partages, mais nous
                  récupérons le fichier brut et le nettoyons pour un rendu clair à
                  usage personnel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Puis-je sauvegarder uniquement l'audio d'une vidéo LinkedIn ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Oui, sélectionnez MP3 après avoir collé le lien. Idéal pour
                  enregistrer un extrait de podcast ou un discours sans les images.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Que faire si le téléchargement échoue ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Assurez-vous que le lien est public et commence par linkedin.com.
                  Essayez un autre navigateur ou videz le cache. Notre support en chat
                  peut aussi aider rapidement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Y a-t-il une limite de durée ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nous traitons les vidéos jusqu'à 60 minutes. Les clips plus longs
                  demandent un peu plus de temps mais sont téléchargés en entier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Stockez-vous mes vidéos ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Pas du tout. Nous traitons immédiatement, puis supprimons tout.
                  Les fichiers restent uniquement sur votre appareil.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  Le créateur sait-il que j'ai téléchargé sa vidéo ?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn n'envoie aucune notification. Vos téléchargements restent
                  privés et invisibles pour l'auteur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Commencez à sauvegarder vos vidéos LinkedIn aujourd'hui
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Récupérez vos contenus pros en quelques secondes
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copier le lien LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Coller sur notre site
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Télécharger la vidéo propre
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Télécharger une vidéo LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Autres plateformes */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explorez d'autres téléchargeurs
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Enregistrez des vidéos depuis vos plateformes favorites
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
      <FeatureCard icon={VideoIcon} title="Qualité vidéo optimale">
        Obtenez des vidéos LinkedIn en haute définition, jusqu'en 1080p lorsque la
        publication originale le permet. Pas de frames floues ni de couleurs ternes
        au visionnage. Nous récupérons le fichier directement depuis LinkedIn pour
        conserver chaque détail, parfait pour vos conférences ou démonstrations.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sans logos ni filigranes">
        LinkedIn ajoute ses marques sur les sauvegardes locales. Nous les supprimons
        totalement pour vous livrer un clip prêt à être utilisé dans vos
        présentations ou pour un visionnage personnel.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Compatible tous appareils">
        Ordinateur, iPhone, Android ou tablette : ça fonctionne partout, sans
        installation supplémentaire. Ouvrez notre site, collez le lien et
        téléchargez. Nous l'avons testé sur d'anciens PC et des smartphones récents :
        c'est fluide à chaque fois.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Téléchargements express">
        Ne perdez pas votre élan : notre outil récupère les vidéos en quelques
        secondes, souvent moins de dix pour la majorité des clips. Nous utilisons
        des serveurs proches de LinkedIn pour garantir la vitesse.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="100 % gratuit, sans limites">
        Aucun coût caché, aucun compte à créer. Téléchargez autant de vidéos que
        nécessaire chaque jour. Sauvegardez vos conseils carrière sans vous soucier
        d'un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Processus sécurisé">
        Votre vie privée est respectée : aucun lien ni vidéo n'est stocké après le
        téléchargement. Pas de tracking ni d'annonces intrusives – juste un flux
        propre qui garde votre appareil sain.
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
      <StepCard step={1} title="Copiez le lien depuis LinkedIn">
        <a href="http://www.linkedin.com">Ouvrez LinkedIn</a> sur votre mobile ou
        votre navigateur. Trouvez la vidéo à sauvegarder, comme un conseil
        d'entretien ou une annonce d'entreprise. Cliquez sur les trois points en
        haut à droite du post, puis sur « Copier le lien vers la publication » pour
        récupérer l'URL complète (ex : linkedin.com/posts/nom_123456). Vérifiez qu'elle
        est correcte.
      </StepCard>
      <StepCard step={2} title="Collez le lien dans notre outil">
        Rendez-vous sur videodownload.io. Vous verrez un champ « Collez votre lien
        LinkedIn ici ». Cliquez et collez l'URL. Assurez-vous qu'elle commence par
        linkedin.com pour éviter les erreurs. Seules les publications publiques
        fonctionnent ; les contenus privés ou de groupe sont exclus.
      </StepCard>
      <StepCard step={3} title="Nous récupérons la vidéo pour vous">
        Cliquez sur le bouton bleu « Télécharger » à côté du champ. Notre système
        interroge les serveurs LinkedIn en quelques secondes, supprime les marques et
        vérifie la qualité. L'audio reste clair, idéal pour un panel à réécouter.
      </StepCard>
      <StepCard step={4} title="Enregistrez le clip sur votre appareil">
        Choisissez le format proposé : MP4 pour la vidéo avec le son ou MP3 pour
        l'audio uniquement. Dans la plupart des cas, sélectionnez MP4. Le fichier se
        télécharge dans votre dossier de téléchargements ou votre galerie. Renommez-le
        (ex : « talk_leadership.mp4 ») et lancez-le pour vérifier.
      </StepCard>
    </div>
  );
}
