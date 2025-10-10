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

export default function FacebookPageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video de Facebook | Gratis & HD",
    description: "Descarga videos de Facebook, Reels y Lives en mp4, 1080p, HD. Convertidor y descargador de videos en línea gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Facebook" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box (no other homepage sections) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Facebook Video
          </h1>
          <div id="facebook-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega una URL de video, Reel o Watch de Facebook"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Herramientas que facilitan la descarga de videos de Facebook
          </h2>
          <p className="text-muted-foreground mb-6">
            Estas son seis características que convierten a videodownload.io en la mejor opción para descargar videos de Facebook. Cada una está diseñada para ahorrar tiempo, garantizar calidad y mantener tu experiencia segura y sencilla.
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de Facebook
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Guía paso a paso para guardar videos rápidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Descargar videos de Facebook con videodownload.io es simple y rápido, incluso si no eres una persona experta en tecnología. Sigue estos cuatro pasos para guardar tu video en tu dispositivo en pocos minutos.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#facebook-downloader">
              <Button variant="download" className="px-6">
                Download Facebook Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores casos de uso para ver y usar sin conexión
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Facebook te permite ver o reutilizar contenido sin necesidad de una conexión a internet. Es ideal para ahorrar datos, archivar recuerdos o crear nuevo contenido. Aquí tienes algunas de las principales razones para descargar videos de Facebook para uso personal o profesional.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualización sin conexión en movimiento
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda videos para verlos durante viajes, vuelos o en áreas sin Wi-Fi o datos, como zonas rurales o viajes internacionales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creación de contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga clips para reacciones, ediciones o montajes para tus propias redes sociales, siempre que sigas las reglas de derechos de autor o tengas permiso del creador.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje y formación
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda tutoriales, webinars o videos instructivos para estudiar sin conexión, como demostraciones de cocina, rutinas de ejercicio o consejos de negocios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Preservar recuerdos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva videos familiares, momentos destacados de eventos o publicaciones de grupo que podrían desaparecer si se eliminan cuentas o cambian las configuraciones de privacidad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Marketing y negocios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Las empresas pueden descargar sus propios videos de marca o transmisiones en vivo para uso sin conexión en presentaciones, anuncios o reuniones con clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ahorro de datos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga mediante Wi-Fi para evitar usar datos móviles, especialmente para videos largos o de alta calidad en planes limitados.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entretenimiento sin conexión
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Crea una colección de clips divertidos, videoclips musicales o transmisiones en vivo para disfrutar sin conexión durante el tiempo libre o viajes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Compartir en comunidad
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda videos de grupos o páginas de Facebook para compartirlos sin conexión en talleres, clases o eventos comunitarios sin internet.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Facebook te da flexibilidad para disfrutar o usar contenido cuando y donde lo necesites, sin depender de una conexión.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que se benefician del acceso sin conexión
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Facebook es útil para cualquiera que quiera ver o usar contenido sin conexión. No es solo para usuarios ocasionales: grupos específicos pueden ahorrar tiempo y esfuerzo al descargar. Aquí está quién debería considerarlo y por qué.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creadores de contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Influencers, YouTubers o TikTokers pueden descargar videos para reacciones, colaboraciones o ediciones, siempre que respeten los derechos de autor o tengan permiso.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudiantes y educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda contenido educativo, como conferencias, tutoriales o webinars, para estudiar sin conexión o usar en clase, especialmente en áreas con poca conectividad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Viajeros
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga entretenimiento, como clips virales o transmisiones en vivo, para verlos sin conexión durante viajes sin acceso a internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Dueños de negocios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda tus propios videos de marca, transmisiones en vivo o anuncios para uso sin conexión en marketing, presentaciones o reuniones con clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Guardadores de recuerdos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conserva videos personales, momentos familiares o publicaciones de grupo que podrían desaparecer debido a cambios de cuenta o configuraciones de privacidad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Entusiastas del fitness
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga videos de ejercicios, sesiones de yoga o consejos de salud para seguirlos sin conexión en casa o en el gimnasio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Líderes comunitarios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda videos de grupos o contenido de páginas para compartir sin conexión en reuniones, eventos o talleres sin necesidad de Wi-Fi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga videos de inspiración, como proyectos de bricolaje o tutoriales de manualidades, para consultarlos sin conexión mientras trabajas en tus hobbies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de Facebook?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Entendiendo las reglas legales
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Facebook es un tema complejo. Los Términos de Servicio de Facebook no permiten descargar contenido sin permiso del creador o la plataforma. Según la ley de derechos de autor de EE. UU., guardar videos con derechos de autor sin aprobación es ilegal y podría llevar a demandas, aunque esto es raro para uso personal. Las excepciones incluyen:
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
                    Videos de dominio público que no están protegidos por derechos de autor.
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
                    Videos bajo licencias Creative Commons, que pueden permitir descargas para usos específicos, como compartir o remezclar, si sigues los términos.
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
                    Videos donde el creador permite explícitamente las descargas.
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
                    Casos de uso legítimo, como descargar para educación, comentarios o investigación, aunque esto depende de cómo uses el video.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Siempre verifica la licencia del video en su descripción o pide permiso al creador. La función de guardar de Facebook te permite marcar publicaciones para visualización personal, que es una alternativa legal. Para estar seguro, respeta las reglas de derechos de autor y considera pedir permiso a los creadores antes de descargar.
            </p>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos de descargar videos de Facebook
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros que debes evitar al descargar
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Facebook puede ser muy conveniente, pero conlleva riesgos si usas herramientas poco fiables o ignoras los límites legales. Conocer estos riesgos te ayuda a proteger tu dispositivo y mantenerte seguro. Estos son los principales que debes tener en cuenta.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware de sitios sospechosos"
              >
                Muchos sitios de descarga tienen botones falsos, anuncios emergentes o scripts ocultos <a href="https://www.itpro.com/security/malware/358165/malware-found-on-browser-extensions" className="text-primary hover:text-primary-glow underline transition-colors">que instalan virus o malware</a>. Estos pueden dañar tu dispositivo o robar datos. Usa plataformas confiables como videodownload.io para evitar esto.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Problemas legales">
                Descargar sin permiso viola las reglas de Facebook y podría llevar a prohibiciones de cuenta o, en casos raros, acciones legales de los titulares de derechos de autor. Verifica primero la licencia del video.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Archivos de mala calidad"
              >
                Los sitios poco fiables a menudo entregan videos borrosos o rotos que no se reproducen correctamente, desperdiciando tu tiempo y espacio de almacenamiento.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Riesgos de privacidad">
              Los sitios sospechosos pueden rastrear tu actividad, recopilar información personal o vender tus datos a terceros. Elige una herramienta que no solicite permisos innecesarios.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Descargas corruptas">
              Los sitios mal diseñados pueden darte archivos incompletos que no se abren, dejándote frustrado.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Preocupaciones éticas"
              >
                Descargar omite vistas o anuncios, lo que puede perjudicar a los creadores que dependen del engagement para obtener ingresos. Apoya a los creadores viendo en línea cuando sea posible.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de almacenamiento"
              >
                Descargar muchos videos, especialmente en alta calidad, puede llenar rápidamente el almacenamiento de tu dispositivo. Administra tus descargas para evitar esto.
              </FeatureCard>
            </div>
            <p className="section-muted">
            Usar una herramienta segura y confiable como videodownload.io y respetar las reglas de derechos de autor puede ayudarte a evitar estos riesgos y descargar de forma segura.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu opción confiable para descargas de Facebook
            </h2>
            <p className="section-muted mb-4">
            Lanzamos videodownload.io para proporcionar una forma limpia, rápida y segura de descargar videos de Facebook sin los riesgos de sitios sospechosos. Nuestro objetivo era hacer que la descarga fuera simple y segura para todos. Aquí hay seis razones para elegirnos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Shield} title="Sin malware y seguro">
              Nuestro sitio no tiene anuncios emergentes, enlaces falsos ni scripts dañinos, manteniendo tu dispositivo a salvo de virus o spyware.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Fácil de usar">
              Pega el enlace, haz clic en descargar y listo. No hay pasos complicados ni habilidades técnicas necesarias.
              </FeatureCard>
              <FeatureCard icon={Zap} title="Procesamiento rápido">
                Nuestros servidores procesan videos rápidamente, entregando tus descargas en segundos, incluso para transmisiones en vivo o contenido de grupos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Formatos flexibles">
                Elige MP4 para videos o MP3 para audio, con opciones de calidad como 720p o 1080p según tus necesidades.
              </FeatureCard>
              <FeatureCard icon={Download} title="Completamente gratis">
                Descarga videos ilimitados sin pagar nada. Sin suscripciones ni tarifas ocultas, nunca.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Protección de privacidad">
                No rastreamos tus descargas, no almacenamos tus datos ni compartimos tu información, por lo que tu actividad permanece privada.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Preguntas comunes sobre videodownload.io y descargas de Facebook
            </h2>
            <p className="section-muted mb-4">
              Aquí están las respuestas a preguntas comunes sobre el uso de videodownload.io para descargar videos de Facebook, para que puedas comenzar a descargar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  1. ¿Es gratis usar videodownload.io?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, nuestra plataforma es 100 % gratuita. Descarga tantos videos como quieras sin tarifas ni límites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  2. ¿Necesito instalar software para descargar?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, todo funciona a través de tu navegador. No se requieren apps, extensiones ni descargas, manteniéndolo simple.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  3. ¿Puedo descargar transmisiones en vivo o videos de grupos de Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, admitimos la descarga de transmisiones en vivo y videos de grupos, siempre que tengas acceso al contenido. Solo pega el enlace.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  4. ¿Es seguro videodownload.io?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Absolutamente. Nuestro sitio es seguro, sin anuncios emergentes ni enlaces riesgosos. Priorizamos tu seguridad y probamos nuestra plataforma regularmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  5. ¿Puedo descargar videos de alta calidad?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, puedes descargar en la máxima calidad disponible, como 720p o 1080p, según el video original de Facebook.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  6. ¿Qué pasa si un video no se descarga?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica la URL y tu conexión a internet. Si aún falla, contacta a nuestro equipo de soporte y lo solucionaremos rápidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  7. ¿Puedo guardar solo el audio de un video de Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, nuestra función MP3 te permite extraer audio de cualquier video, perfecto para música, discursos o clips.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  8. ¿Es legal descargar videos de Facebook?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Depende. Las reglas de Facebook prohíben descargar sin permiso. Los videos de dominio público, bajo Creative Commons o con aprobación del creador generalmente están bien. El uso legítimo puede aplicarse para educación o comentarios, pero siempre verifica la licencia para estar seguro.
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
              Obtén tus videos de Facebook en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Proceso rápido y simple
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descargas seguras, sin malware
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Video y audio de alta calidad
              </div>
            </div>
            <div className="mt-2">
              <a href="#facebook-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Facebook Video
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
      <FeatureCard icon={VideoIcon} title="Descargas de video de alta calidad">
        Elige entre resoluciones como 720p o 1080p, dependiendo de lo que ofrezca el video de Facebook. Ya sea una transmisión en vivo o un clip corto, puedes elegir la mejor calidad sin lidiar con configuraciones complejas.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de descarga rápidas">
        Nuestros servidores obtienen videos de Facebook rápidamente. La mayoría de las descargas terminan en menos de un minuto, según tu velocidad de internet y la duración del video, así que no te quedas esperando.
      </FeatureCard>
      <FeatureCard icon={Music} title="Opción de extracción de audio">
        ¿Solo necesitas el sonido? Convierte videos de Facebook a archivos MP3 con un clic. Perfecto para guardar música, discursos o clips estilo podcast para uso sin conexión.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="No se necesita software">
        Descarga videos directamente desde nuestro sitio web usando cualquier navegador en tu teléfono, tablet o computadora. No se requieren apps ni programas adicionales, manteniendo todo limpio y fácil.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Soporte para videos en vivo y de grupos">
        Guarda videos de publicaciones de Facebook, transmisiones en vivo o contenido de grupos privados (si tienes acceso). Solo pega el enlace y nosotros nos encargamos del resto, incluso para tipos de contenido únicos.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Interfaz segura y sin anuncios">
        Nuestro sitio no tiene anuncios emergentes, botones falsos ni redireccionamientos riesgosos. Obtienes una experiencia limpia y segura cada vez, para que puedas descargar sin preocuparte por virus.
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
      <StepCard step={1} title="Copia la URL del video de Facebook">
        <a href="http://www.facebook.com">Abre Facebook</a> en tu app o navegador, encuentra el video, transmisión en vivo o publicación de grupo que deseas, y copia su URL. Haz clic en los tres puntos en la publicación y selecciona "Copiar enlace" o toma la URL de la barra de direcciones del navegador.
      </StepCard>
      <StepCard step={2} title="Pega la URL en nuestro sitio">
        Ve a videodownload.io en cualquier navegador. En nuestra página de inicio, encuentra la barra de descarga y pega el enlace de Facebook copiado. Verifica que la URL sea correcta.
      </StepCard>
      <StepCard step={3} title="Procesamos el video">
        Haz clic en el botón "Descargar". Nuestro sistema obtendrá el video y lo preparará para ti en segundos. Elige tu formato, como MP4 para video o MP3 para audio, y la calidad si se solicita.
      </StepCard>
      <StepCard step={4} title="Guarda tu video de Facebook">
        Cuando aparezca el enlace de descarga, haz clic en él para guardar el video en tu dispositivo. Renombra el archivo si deseas mantener tus descargas organizadas para un fácil acceso posterior.
      </StepCard>
    </div>
  );
}
