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

export default function YouTubePageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Video YouTube | Gratis & HD",
    description: "Descarga videos de YouTube, Shorts y Lives en mp4, 1080p, 4k. Conversor y descargador de videos gratis en línea."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="YouTube" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <div id="youtube-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video, Short o playlist de YouTube"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Características que hacen que descargar videos de YouTube sea simple y fiable
          </h2>
          <p className="text-muted-foreground mb-6">
            Estas seis potentes características convierten a videodownload.io en la opción ideal
            para descargar videos de YouTube de forma rápida, segura y eficiente. Cada función está
            pensada para mejorar tu experiencia y darte flexibilidad para cualquier necesidad de descarga.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de YouTube
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guía clara paso a paso para guardar videos sin esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Llevar videos de YouTube a tu dispositivo es muy sencillo con videodownload.io. Sigue estos cuatro
            pasos directos para descargar cualquier video en cuestión de minutos. Cada paso es intuitivo, incluso
            si no eres una persona experta en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#youtube-downloader">
              <Button variant="download" className="px-6">
                Descargar video de YouTube
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Principales usos para acceder a videos sin conexión
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de YouTube te da la libertad de ver contenido en cualquier momento y lugar, sin depender
              de una conexión a internet. Ya sea para ahorrar datos, preparar un viaje o archivar contenido, los videos
              sin conexión resultan increíblemente útiles. A continuación, algunas de las mejores razones para descargar
              videos de YouTube para uso personal.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajes sin acceso a internet
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda películas, vlogs o videoclips para verlos en vuelos largos, trayectos en tren o zonas remotas
                    donde no hay Wi‑Fi ni datos móviles. Así garantizas entretenimiento ininterrumpido mientras te desplazas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educación y estudio
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga tutoriales, clases o guías prácticas para aprender sin conexión. Por ejemplo, guarda
                    walkthroughs de programación, lecciones de idiomas o videos de bricolaje para repasarlos a tu ritmo sin hacer streaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creación y edición de contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Obtén clips para tus propios videos, como reacciones, montajes o comentarios, siempre que respetes los
                    derechos de autor o cuentes con permiso del creador. Es ideal para YouTubers o creadores de TikTok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivar videos favoritos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Algunos videos se eliminan de YouTube por cambios en el canal o problemas de derechos de autor. Al descargarlos
                    puedes conservar tus favoritos o contenidos raros para acceder a ellos a largo plazo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ahorrar datos móviles
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reproducir videos consume muchos datos, especialmente con planes limitados. Descarga usando Wi‑Fi y mira sin preocuparte
                    por los límites de datos o facturas elevadas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Biblioteca de entretenimiento offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Construye una colección de videoclips musicales, tráilers o vlogs para disfrutar sin conexión. Perfecto para acampadas,
                    sesiones en el gimnasio o para relajarte en casa sin esperas por el búfer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Talleres y presentaciones
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Profesionales pueden descargar videos de su industria, como charlas magistrales o sesiones de formación, para compartirlas en
                    talleres o reuniones sin conexión y asegurar una reproducción fluida sin depender de internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de YouTube te ofrece flexibilidad y comodidad, facilitando disfrutar del contenido a tu manera, ya sea por ocio,
              trabajo o aprendizaje.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más se benefician del acceso offline
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de YouTube no es solo para espectadores ocasionales; es un cambio de juego para grupos que necesitan acceso sin conexión
              para trabajar, crear o simplificar su día a día. Aquí verás quién puede aprovechar al máximo las descargas y por qué vale la pena hacerlo.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creadores de contenido e influencers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    YouTubers, tiktokers o streamers pueden descargar clips para videos de reacción, montajes o análisis, siempre respetando los
                    derechos de autor, las leyes de uso legítimo o contando con la autorización del creador original.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudiantes y docentes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda contenido educativo como tutoriales de matemáticas, explicaciones científicas o documentales de historia para estudiar sin conexión
                    o usar en clase. Ideal en zonas con mala conectividad o para aprender sin distracciones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajeros frecuentes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ya sea en avión, tren o en un lugar remoto, los videos descargados garantizan entretenimiento sin depender de un Wi‑Fi inestable o planes de datos costosos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Amantes de la música
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Convierte videoclips o actuaciones en vivo a MP3 para escucharlos sin conexión. Es perfecto para crear playlists de entrenamiento o escuchar entrevistas sin streaming, siempre que la fuente sea legal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivistas de video
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Coleccionistas o fans de contenido de nicho pueden guardar videos raros, subidas antiguas o favoritos personales que podrían desaparecer de YouTube por cierres de cuentas o purgas de contenido.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados al fitness y al bienestar
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga sesiones de yoga, rutinas de entrenamiento o guías de meditación para seguirlas sin conexión, ya sea en casa, en el parque o en el gimnasio sin necesitar conexión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Investigadores y profesionales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Académicos o especialistas pueden guardar charlas, webinars o videos formativos para consultarlos sin conexión durante trabajo de campo, presentaciones o sesiones de estudio.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sin importar tu rol o estilo de vida, descargar videos de YouTube te ayuda a ahorrar tiempo, datos y esfuerzo mientras mantiene tu contenido favorito siempre accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de YouTube?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que necesitas saber sobre la ley
            </h2>
            <p className="section-muted mb-4">
              La legalidad de descargar videos de YouTube depende de varios factores, y es importante entender las reglas para evitar problemas. Los
              Términos de Servicio de YouTube prohíben expresamente descargar videos a menos que la plataforma ofrezca una opción oficial, como la{" "}
              <a
                href="https://support.google.com/youtube/answer/11977233?hl=es&co=GENIE.Platform%3DAndroid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                función sin conexión de YouTube Premium
              </a>{" "}
              para suscriptores. Según la legislación de derechos de autor de Estados Unidos, descargar{" "}
              <a
                href="https://tubepilot.ai/tools/copyright-music-checker/"
                className="text-primary hover:text-primary-glow underline transition-colors"
              >
                contenido protegido
              </a>{" "}
              sin permiso del creador o del titular es ilegal y podría derivar en demandas civiles, aunque las acciones contra usuarios individuales por uso personal son poco comunes.
            </p>
            <p className="section-muted mb-2">
              Sin embargo, existen excepciones en las que descargar puede ser legal:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Videos de dominio público
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El contenido que ya no está protegido por derechos de autor se puede descargar libremente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Licencias Creative Commons
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Algunos videos de YouTube tienen licencias que permiten descargas para ciertos usos, como remezclar o compartir, siempre que respetes sus términos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permiso del creador
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si el creador del video autoriza explícitamente la descarga, puedes hacerlo sin problemas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Casos de uso legítimo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descargas limitadas para educación, comentarios, críticas o investigación pueden considerarse{" "}
                    <a
                      href="https://support.google.com/youtube/answer/9783148?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow underline transition-colors"
                    >
                      uso legítimo
                    </a>
                    , aunque depende del contexto y de cómo utilices el video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Para mantenerte seguro, revisa la licencia del video en la descripción o contacta con el creador para pedir permiso. YouTube Premium ofrece una
              forma legal de guardar videos sin conexión para uso personal. Si tienes dudas, actúa con cautela para respetar a los creadores y evitar infringir las leyes de derechos de autor.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos de descargar videos de YouTube
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              Aunque descargar videos de YouTube es práctico, existen riesgos si usas las herramientas equivocadas o ignoras los límites legales. Ser
              consciente de estos peligros te ayuda a tomar decisiones inteligentes y proteger tu dispositivo y tus datos. Estos son los principales riesgos a tener en cuenta.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware en sitios no confiables"
              >
                Muchos sitios de descarga están llenos de botones falsos de “download”, ventanas emergentes o scripts ocultos que instalan{" "}
                <a href="https://cyberpress.org/youtube-downloader-malware/"
                className="text-primary hover:text-primary-glow underline transition-colors">
                  virus o malware en tu dispositivo
                </a>
                . Pueden robar tus datos o dañar tu sistema. Quédate con plataformas confiables como videodownload.io para mantenerte a salvo.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Consecuencias legales">
                Descargar videos con derechos de autor sin permiso infringe los Términos de Servicio de YouTube y podría provocar suspensiones de cuenta o, en casos raros, acciones legales de los titulares de derechos. Revisa siempre la licencia del video o usa alternativas legales como YouTube Premium.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Archivos de mala calidad o dañados"
              >
                Los sitios sospechosos suelen entregar videos en baja resolución o archivos que no se reproducen bien, lo que desperdicia tu tiempo y almacenamiento. Las herramientas fiables garantizan la calidad que esperas.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Brechas de privacidad">
                Los sitios poco fiables pueden rastrear tus hábitos de navegación, recopilar información personal o vender tus datos a terceros. Elige un servicio que priorice la privacidad y no pida permisos innecesarios.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Descargas incompletas">
                Algunas herramientas no procesan los videos correctamente y terminan dejándote archivos parciales o corruptos que no se abren. Es común en sitios desactualizados o mal diseñados.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Impacto ético para los creadores"
              >
                Descargar videos puede saltarse los anuncios, lo que perjudica a los creadores que dependen de los ingresos por publicidad o views. Considera apoyarles viendo su contenido en línea cuando sea posible o pidiendo permiso para descargar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Si utilizas una herramienta segura y confiable como videodownload.io y respetas las normas de derechos de autor, podrás minimizar estos riesgos y disfrutar de descargas seguras y fiables.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu aliado de confianza para descargas de YouTube
            </h2>
            <p className="section-muted mb-4">
              Creamos videodownload.io para ofrecer una forma segura, simple y rápida de descargar videos de YouTube sin las molestias de sitios dudosos. Nuestra misión fue construir una plataforma limpia que elimine el ruido de los descargadores llenos de anuncios y riesgos. Estas son seis razones por las que videodownload.io destaca como la mejor opción para tus descargas.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sin malware y segura">
                Nuestro sitio está libre de ventanas emergentes, botones falsos o scripts maliciosos, lo que mantiene tu dispositivo protegido contra virus y spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Diseño fácil de usar">
                Con una interfaz limpia y un proceso sencillo, cualquiera puede descargar videos en segundos, sin necesidad de conocimientos técnicos.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Descargas a gran velocidad">
                Nuestros servidores optimizados procesan los videos rápidamente para que obtengas tus archivos sin largas esperas, incluso en alta calidad o videos extensos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Opciones de formato flexibles">
                Elige MP4 para video o MP3 para audio, con múltiples resoluciones que se adaptan a lo que necesitas, desde 720p hasta 4K.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completamente gratis">
                Descarga videos ilimitados sin pagar nada. Sin suscripciones ni cargos ocultos: todas las funciones están disponibles sin coste.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Enfoque en la privacidad">
                No rastreamos tus descargas ni almacenamos tus datos personales, ni compartimos tu información con terceros. Tu actividad permanece privada.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dudas comunes sobre videodownload.io y las descargas de YouTube
            </h2>
            <p className="section-muted mb-4">
              Reunimos las respuestas a las preguntas más habituales sobre el uso de videodownload.io y la descarga de videos de YouTube para que puedas comenzar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. ¿videodownload.io es realmente gratis?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, nuestra plataforma es 100 % gratuita. Puedes descargar tantos videos como quieras sin cargos ni límites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. ¿Necesito instalar software para descargar videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, videodownload.io funciona completamente desde tu navegador. No necesitas apps, extensiones ni descargas adicionales, así que todo se mantiene sencillo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. ¿Puedo descargar listas de reproducción completas de YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Por supuesto. Solo pega la URL de la playlist y nuestro sistema procesará todos los videos para que los descargues de una sola vez.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. ¿Es seguro usar videodownload.io?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, nuestro sitio es seguro, sin ventanas emergentes ni enlaces maliciosos. Priorizamos la seguridad del usuario y probamos la plataforma para mantenerla limpia y fiable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. ¿Puedo descargar videos en alta calidad, como 4K?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Si el video de YouTube está disponible en 4K, podrás descargarlo en esa resolución. Admitimos varias calidades, desde 360p hasta 4K, según la fuente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. ¿Qué hago si un video no se descarga correctamente?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica la URL y tu conexión a internet. Si el problema continúa, contacta con nuestro equipo de soporte y te ayudaremos a resolverlo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. ¿Puedo extraer solo el audio de los videos de YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, nuestra función de conversión a MP3 te permite descargar únicamente el audio de cualquier video de YouTube, ideal para música o fragmentos de pódcast.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. ¿Es legal descargar videos de YouTube?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Depende del video. Los Términos de Servicio de YouTube prohíben descargar salvo que esté permitido, pero los videos de dominio público, con licencias Creative Commons o con aprobación del creador suelen ser válidos. El uso legítimo puede aplicar para educación o comentarios, pero siempre verifica la licencia del video para evitar problemas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comienza a descargar ahora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtén tus videos de YouTube en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Proceso rápido y sencillo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descargas seguras y sin malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video y audio de alta calidad
              </div>
            </div>
            <div className="mt-2">
              <a href="#youtube-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Descargar video de YouTube
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Descubre más descargadores
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Descarga desde tus plataformas favoritas
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
                        Descargar video de {p.name}
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
      <FeatureCard icon={VideoIcon} title="Descargas de video en alta calidad">
        Elige entre varias resoluciones, incluidas 720p, 1080p e incluso 4K cuando el video lo permita. Ya sea que guardes un tutorial o un videoclip,
        puedes escoger la calidad que mejor se adapte a tu dispositivo o preferencias sin tener que lidiar con ajustes complejos.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de descarga ultrarrápidas">
        Nuestros servidores optimizados hacen que los videos se descarguen en segundos, no en minutos. Según tu conexión y la duración del video, la mayoría de los archivos están listos en menos de un minuto, ahorrándote tiempo y frustraciones.
      </FeatureCard>
      <FeatureCard icon={Music} title="Extracción de audio a archivos MP3">
        ¿Solo necesitas el audio? Convierte cualquier video de YouTube en un archivo MP3 con un solo clic. Es ideal para guardar canciones, episodios de pódcast o audio de clases para escucharlos sin conexión, lo que lo vuelve muy versátil.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Sin instalar software">
        Descarga videos directamente desde el navegador en cualquier dispositivo: computadora, tablet o teléfono. No hay que instalar apps, plugins ni programas extra, lo que mantiene tu dispositivo limpio y el proceso muy sencillo.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Soporte para listas de reproducción completas">
        Guarda listas de reproducción de YouTube de una sola vez. En lugar de descargar video por video, pega el enlace de la playlist y nuestro sistema procesará todos los videos juntos, organizándolos para que los tengas a mano. Es un gran ahorro de tiempo para descargas masivas.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interfaz segura y sin anuncios">
        A diferencia de muchos otros sitios, videodownload.io está libre de anuncios molestos, redireccionamientos o enlaces sospechosos. Nuestro diseño limpio y fácil de usar garantiza una experiencia segura para que te concentres en descargar sin preocuparte por riesgos.
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
      <StepCard step={1} title="Copia la URL del video de YouTube">
        <a href="http://www.youtube.com">Abre YouTube</a> en tu navegador o app, busca el video que quieres descargar y copia su URL. Puedes obtenerla desde la barra de direcciones del navegador
        o tocando el botón "Compartir" debajo del video y eligiendo "Copiar enlace".
      </StepCard>
      <StepCard step={2} title="Pega la URL en nuestro sitio">
        Visita videodownload.io desde cualquier navegador. En la página principal verás una barra donde puedes pegar la URL copiada. Haz clic derecho o mantén pulsado para pegar el enlace en el campo correspondiente y asegúrate de que sea correcto.
      </StepCard>
      <StepCard step={3} title="Deja que procesemos el video">
        Pulsa el botón “Descargar” junto a la barra de URL. Nuestro sistema recuperará el video y lo preparará para descargar. Si se te solicita, elige el formato (como MP4 o MP3) y la calidad (como 1080p o 4K). Este paso suele tardar solo unos segundos.
      </StepCard>
      <StepCard step={4} title="Guarda y organiza tu video">
        Una vez procesado, aparecerá un enlace de descarga. Haz clic para guardar el video en el almacenamiento de tu dispositivo. Puedes renombrar el archivo durante la descarga para mantener tu biblioteca organizada y encontrarlo fácilmente después.
      </StepCard>
    </div>
  );
}
