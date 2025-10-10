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

export default function InstagramPageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video Instagram | Gratis & HD",
    description: "Descarga videos de Instagram, Reels, Stories e IGTV en mp4, 1080p, 4k. Convertidor y descargador de videos online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Instagram" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Instagram Video
          </h1>
          <div id="instagram-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega una URL de video, Reel o Story de Instagram"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga videos de Instagram con facilidad
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu guía simple para guardar Reels y clips sin conexión
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de Instagram
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guía clara paso a paso para guardar videos sin esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtener videos de Instagram en tu dispositivo es simple con
            videodownload.io. Sigue estos cuatro pasos directos para descargar
            cualquier video en minutos. Cada paso está diseñado para ser
            intuitivo, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#instagram-downloader">
              <Button variant="download" className="px-6">
                Download Instagram Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores casos de uso
            </h2>
            <p className="section-muted mb-4">
              El feed rápido de Instagram entierra gemas rápidamente. Descargar te permite conservar los clips que importan, convirtiendo los desplazamientos en una colección personal. No se trata de guardar cada publicación, sino de conservar videos que inspiran o significan algo. Controlas lo que permanece, sin importar si las cuentas se vuelven privadas o las publicaciones desaparecen.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualización sin conexión
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda consejos de viaje o reels de ejercicios para vuelos o acampadas sin señal. Los padres descargan canciones infantiles o clips de historias para viajes por carretera, manteniendo a los niños felices sin Wi-Fi.
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
                    Los creadores usan las descargas para remezclar. Una bloguera de moda guarda reels de outfits para mezclarlos en su contenido, agregando voces en off o nuevos ángulos. Los músicos toman sonidos de tendencia para superponerlos en sus pistas, saltando marcas de agua para ediciones limpias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Respaldar tus publicaciones
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instagram puede eliminar o tener fallos, así que los creadores guardan sus reels en discos duros. Los estudiantes toman trucos de estudio o clips de conferencias para sus notas, viendo sin inicios de sesión en la app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilizar para otras plataformas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Convierte un reel en un YouTube Short o clip de TikTok con ajustes. Las empresas guardan testimonios de clientes para incrustar en sitios web, aumentando la confianza.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Recuerdos personales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga momentos familiares, como el baile de boda de un primo o la actualización del bebé de un amigo, para compartir en reuniones o conservar por años. Es una forma de mantener los recuerdos cerca.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Instagram ofrece flexibilidad y comodidad,
              facilitando disfrutar del contenido en tus términos, ya sea por
              diversión, trabajo o aprendizaje.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más se benefician
            </h2>
            <p className="section-muted mb-4">
              El desplazamiento sin fin de Instagram engancha a millones, pero descargar videos se adapta a personas que usan la plataforma con propósito. Es para aquellos que ven los reels como herramientas, inspiración o recuerdos, no solo entretenimiento rápido. Si estás construyendo, aprendiendo o guardando momentos, esto es para ti.
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
                    Publican diariamente, sacando ideas de reels de tendencia. Descargar les permite guardar su trabajo o estudiar a otros, como un vlogger de comida tomando tips de emplatado para remezclar en su estilo sin logos en el medio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudiantes y profesores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los profesores guardan reels de demostración para clases, como experimentos científicos, para mostrar sin problemas de internet. Los estudiantes descargan guías de estudio o ejercicios de idiomas, revisando sin conexión a su propio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familias
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los padres guardan los primeros pasos de un niño o un sketch de vacaciones para compartir con familiares o archivar para después. Es más confiable que esperar que Instagram lo guarde para siempre.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Dueños de negocios y marketers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Una boutique guarda publicaciones de outfits de clientes para anuncios o prueba social. Los marketers prueban tendencias de reels para campañas, adaptándolas en todas las plataformas.
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
                    Los fanáticos del fitness guardan flujos de yoga para practicar en el gimnasio. Los aficionados al bricolaje descargan tutoriales de manualidades para seguir paso a paso. Incluso usuarios casuales toman clips motivacionales para ver de nuevo en días difíciles.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              No importa tu rol o estilo de vida, descargar videos de Instagram
              puede ahorrar tiempo, datos y esfuerzo mientras mantienes tu
              contenido favorito accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de Instagram?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que necesitas saber sobre la ley
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Instagram no es blanco o negro. Las reglas de Instagram permiten guardar publicaciones públicas a través de su app para uso personal, siempre que el creador no lo haya deshabilitado. Usar herramientas de terceros como la nuestra técnicamente viola sus términos, lo que podría señalar tu cuenta, aunque los baneos son raros a menos que estés descargando en masa o republicando.
            </p>
            <p className="section-muted mb-2">
              Legalmente, los videos son propiedad de sus creadores bajo las leyes de derechos de autor, como la DMCA de EE.UU. Guardar para visualización personal a menudo cae bajo uso justo, como ver un reel sin conexión. Pero compartir sin permiso o editar con fines de lucro puede desencadenar reclamos de infracción. La música en los reels agrega complejidad, ya que las discográficas poseen las pistas, pero los guardados personales cortos rara vez enfrentan problemas.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Cuándo está permitido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si el creador permite las descargas o el video es de dominio público, estás bien. El uso educativo, como profesores mostrando clips en clase, a menudo califica como uso justo. Verifica los subtítulos de las publicaciones para permiso. Mantenlo privado y acredita a los creadores si compartes, y generalmente estarás seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Los riesgos asociados con descargar videos de Instagram
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              Descargar desde sitios de terceros suena fácil, pero los sitios sospechosos traen problemas reales. No todas las herramientas son limpias, y hacer clic a ciegas puede estropear tu dispositivo o datos. Conoce los riesgos para mantenerte seguro antes de presionar ese botón de descarga.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="El malware es la mayor amenaza"
              >
                Los sitios sospechosos ocultan virus en archivos de video, introduciendo spyware o ransomware. Una mala descarga puede bloquear tus archivos o robar contraseñas. Los informes muestran que algunas herramientas ocultan keyloggers, convirtiendo un guardado de reel en una violación de datos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de phishing">
                Las páginas de descarga falsas imitan el inicio de sesión de Instagram, tomando tus credenciales si las escribes. O los anuncios emergentes impulsan "actualizaciones" que instalan rastreadores, viendo cada uno de tus clics.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de calidad"
              >
                Los sitios malos comprimen videos, dejando fotogramas entrecortados o audio silenciado. Querías un reel nítido, pero obtienes un desastre borroso en su lugar.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de privacidad">
                Algunos sitios registran tus descargas, vendiendo tu IP o preferencias de video a anunciantes. Los hackers podrían obtener esos datos, enviándote spam o peor.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Baneos de Instagram">
                La descarga intensiva a través de herramientas de terceros puede señalar tu cuenta, especialmente para creadores. Podrías perder tu perfil o seguidores de la noche a la mañana.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Problemas de almacenamiento"
              >
                Los reels se acumulan, ralentizando teléfonos o llenando discos. Los archivos corruptos pueden hacer que tu reproductor se bloquee, perdiendo tiempo en reparar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, escanea las descargas y considera VPN para
              mantenerte seguro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu socio de confianza para descargas de Instagram
            </h2>
            <p className="section-muted mb-4">
              Comenzamos videodownload.io en 2022 porque estábamos hartos de apps con errores y <a href="https://blog.avast.com/malicious-browser-extensions-avast">descargadores con malware</a>. Como usuarios de Instagram, queríamos una forma limpia de guardar reels sin complicaciones ni riesgos. Somos un equipo pequeño, no una gran empresa, enfocado en hacer las descargas simples y seguras. Millones de descargas después, no hemos tenido violaciones y los usuarios siguen volviendo por nuestra confiabilidad.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Descargas rápidas">
                Menos de cinco segundos incluso en días ocupados.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin anuncios, sin pop-ups">
                Solo un sitio limpio.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Marcas de agua eliminadas">
                Cada video puro.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Guardados ilimitados">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
                Desde teléfonos hasta PC.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                Sin datos guardados después de usar.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Preguntas comunes sobre descargas de Instagram
            </h2>
            <p className="section-muted mb-4">
              Hemos compilado respuestas a las preguntas más frecuentes sobre el
              uso de videodownload.io y la descarga de videos de Instagram para
              ayudarte a comenzar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de Instagram?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo manejamos reels y publicaciones públicas. Los privados necesitan permiso del creador, y respetamos eso para mantenernos legítimos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar dañará el rendimiento de mi teléfono?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son limpios y ligeros, así que no hay ralentización. Pero vigila tu almacenamiento; guardar muchos reels puede llenarlo rápidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué no hay marca de agua en mi video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram agrega logos para rastreo, pero nosotros tomamos el archivo original y los eliminamos para un guardado limpio que puedes usar libremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Perfecto para tomar sonidos de tendencia o voces en off sin el video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué pasa si mi descarga no comienza?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica que el enlace sea público y comience con instagram.com. Prueba otro navegador o borra el caché. Nuestro chat de soporte soluciona problemas rápidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay límites de tamaño para los videos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Manejamos reels de hasta 60 minutos, aunque la mayoría son cortos. Los más largos toman un poco, pero no recortamos esquinas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Guardan mis videos descargados?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  De ninguna manera. Procesamos instantáneamente y eliminamos todo después. Tus archivos permanecen en tu dispositivo, en ningún otro lugar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puede el creador ver que descargué su reel?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Instagram no les notifica. Tu descarga permanece privada, sin alertas para el autor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comienza a guardar videos de Instagram ahora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtén tus Reels sin conexión en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia enlace de Instagram
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pega en nuestro sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descarga video limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#instagram-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Instagram Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explora más descargadores
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
      <FeatureCard icon={VideoIcon} title="Calidad de video cristalina">
        Obtén videos de Instagram en toda su gloria, hasta 1080p si la publicación original lo ofrece. Sin reproducción granulada o colores deslavados cuando veas después. Tomamos el archivo crudo de los servidores de Instagram, manteniendo cada fotograma nítido para ese clip de viaje perfecto o demo de cocina.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Descargas sin marca de agua">
        Instagram estampa su logo y nombre de usuario en los videos guardados, desordenando la vista. Lo eliminamos completamente, dejándote con un clip limpio listo para editar o compartir. Mira ese reel de baile o momento de mascota sin texto bloqueando la acción.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en todos los dispositivos">
        Usa tu iPhone, Android, PC o tablet, y simplemente funciona. Sin apps que instalar o software con el que lidiar. Abre nuestro sitio en cualquier navegador, pega el enlace y toma tu video. Probado en todo, desde laptops viejas hasta teléfonos nuevos, es fluido cada vez.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Descargas ultrarrápidas">
        A nadie le gusta esperar. Nuestra herramienta obtiene videos de Instagram en segundos, a menudo menos de 10 para la mayoría de los clips. Aprovechamos servidores cercanos a los de Instagram para velocidad, así que puedes guardar un reel durante un descanso rápido sin buffering o errores.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Acceso completamente gratuito">
        Sin tarifas, sin registros, sin cargos sorpresa. Descarga tantos videos como quieras diariamente, sin límites. Lo mantenemos gratis para que puedas guardar esa rutina de ejercicios o sketch divertido sin preocuparte por un muro de pago.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso seguro y protegido">
        Tu privacidad permanece bloqueada. No guardamos tus enlaces o videos después de descargar. Sin rastreo, sin datos almacenados y sin anuncios sospechosos. El proceso es limpio y tu dispositivo se mantiene seguro de cosas no deseadas.
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
      <StepCard step={1} title="Copia el enlace del video desde Instagram">
        <a href="http://www.instagram.com">Abre Instagram</a> en tu teléfono o navegador. Encuentra el reel o video que quieres, como una receta rápida o un vlog de viaje. Toca los tres puntos en la parte superior derecha de la publicación. Del menú, selecciona "Copiar enlace". Esto toma la URL completa, algo como instagram.com/reel/ABC123. Asegúrate de que sea exacta.
      </StepCard>
      <StepCard step={2} title="Pega el enlace en nuestro sitio">
        Ve a videodownload.io en tu navegador. Verás una caja clara etiquetada "Pega el enlace de Instagram aquí". Haz clic dentro y pega el enlace copiado. Verifica que comience con instagram.com para evitar errores. Las publicaciones privadas no funcionarán, pero los reels y videos públicos están bien.
      </StepCard>
      <StepCard step={3} title="Obtenemos y limpiamos el video">
        Haz clic en el botón verde "Descargar" junto a la caja. Nuestro sistema toma el video de los servidores de Instagram en segundos. Eliminamos la marca de agua y verificamos la calidad, así que no te quedas atascado con problemas. El audio permanece sincronizado, listo para reproducir.
      </StepCard>
      <StepCard step={4} title="Guarda el archivo en tu dispositivo">
        Verás opciones: MP4 para el video completo con sonido o MP3 para solo el audio. Elige MP4 para la mayoría de los clips. Toca para descargar, y llega a tu carpeta de Descargas o galería del teléfono. Nómbralo algo simple, como "reel_workout.mp4", antes de guardar. Reprodúcelo para confirmar que es perfecto.
      </StepCard>
    </div>
  );
}
