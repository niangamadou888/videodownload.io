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

export default function TikTokPageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Video TikTok | Gratis & HD",
    description: "Descarga videos de TikTok sin marca de agua en calidad HD. Descargador TikTok online gratuito: rápido, seguro y sin watermark."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="TikTok" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caja de descarga mínima (sin otras secciones de la portada) */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download TikTok Video
          </h1>
          <div id="tiktok-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video de TikTok"
            />
          </div>
          {/* Funciones */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Descarga videos de TikTok fácilmente
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            La guía esencial para guardar clips sin conexión
          </h2>
          <p className="text-muted-foreground mb-6">
            Descarga videos de TikTok en calidad HD sin marca de agua. Nuestra herramienta es rápida, segura y totalmente gratuita para guardar tus clips favoritos y verlos offline.
          </p>

          <EnhancedFeatures />

          {/* Cómo descargar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de TikTok
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Guía rápida para guardar videos en segundos
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io es muy sencillo llevar los videos de TikTok a tu dispositivo. Sigue cuatro pasos fáciles y tendrás cualquier clip descargado en minutos, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#tiktok-downloader">
              <Button variant="download" className="px-6">
                Download TikTok Video
              </Button>
            </a>
          </div>

          {/* Por qué descargar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores usos del contenido offline
            </h2>
            <p className="section-muted mb-4">
              TikTok cambia a toda velocidad: las tendencias desaparecen y los creadores reinventan sus cuentas. Al descargar conservas lo que realmente te interesa y conviertes un scroll fugaz en una biblioteca personal, lista para uso profesional, ocio o aprendizaje sin depender de la conexión.
          </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Ver offline en viajes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    En el avión, metro o zonas con Wi-Fi inestable, un video que se queda cargando desespera. Guarda antes el truco de viaje o el sketch favorito y disfrútalo sin cortes. Las familias pueden tener canciones o cuentos listos para el coche.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Remix y creación de contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los creadores descargan clips para integrarlos en nuevos montajes sin partir de cero. Un perfil de fitness guarda ejemplos de técnica para mejorar sus tutoriales, y los aficionados al DIY conservan pasos clave para reproducirlos con calma en casa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Copia de seguridad personal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si publicas a menudo, un bloqueo o un error puede borrar tus videos. Guárdalos en tu disco o nube favorita. Estudiantes y docentes también guardan fragmentos de clases o consejos de estudio para revisarlos sin entrar a la app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilización en otras plataformas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exporta el contenido a Instagram Reels o YouTube Shorts adaptándolo al formato. Un negocio puede guardar testimonios de clientes para mostrarlos en su web o en la tienda y ganar confianza.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivo personal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Momentos familiares - como la receta de la abuela bailando - merecen más que quedarse en la app. Descárgalos para proyectarlos en reuniones o guardarlos para futuras generaciones.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de TikTok te da flexibilidad y comodidad: disfrutas del contenido a tu ritmo, ya sea por ocio, trabajo o aprendizaje.
            </p>
          </div>

          {/* Quién debería descargar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más aprovechan el modo offline
            </h2>
            <p className="section-muted mb-4">
              Todos disfrutamos de un buen clip, pero el download es ideal para quienes usan TikTok como herramienta creativa, educativa o de negocio. Si el contenido forma parte de tu día a día, guardar archivos es la mejor opción.
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
                    Publican a diario y se inspiran en tendencias virales. Descargar sus propios videos o piezas de referencia les permite editarlos en profundidad, integrar tendencias sin marcas de agua y responder a su comunidad con contenidos pulidos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Docentes y estudiantes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El profesorado guarda clips demostrativos para mostrarlos en clase sin depender de la red. El alumnado descarga trucos de matemáticas o mini lecciones de idiomas para repasar a su ritmo. Es aprendizaje práctico sacado directamente de la app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familias y cuidadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cumpleaños, manualidades o momentos familiares especiales: guárdalos con buena calidad, imprime fotogramas o compártelos con los abuelos sin depender de la nube.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pequeñas empresas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Un negocio puede descargar testimonios o vídeos de clientes para mostrarlos en la web o en campañas, reforzando la confianza. El equipo de marketing experimenta rápido con nuevas ideas basadas en las tendencias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados y entusiastas
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jardineros guardan guías de plantación para seguir la temporada, cocineros almacenan recetas para versionarlas y quienes entrenan descargan rutinas para llevarlas al gimnasio.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sea cual sea tu perfil, descargar videos te ahorra tiempo, datos y esfuerzo, manteniendo tus contenidos favoritos siempre disponibles.
            </p>
          </div>

          {/* Aspectos legales */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de TikTok?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que debes saber sobre la normativa
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de TikTok es una zona gris; todo depende del uso. <a href="https://support.tiktok.com/en/using-tiktok/exploring-videos/video-downloads">Las normas de TikTok permiten guardar clips públicos</a> para verlos offline si el creador no lo ha bloqueado. Es válido para uso personal, pero sus términos prohíben las herramientas de terceros: en teoría podrían detectar un patrón y avisar, aunque en la práctica la plataforma se centra en los reuploads masivos.
            </p>
            <p className="section-muted mb-4">
              En materia de copyright la protección es más estricta. Los videos pertenecen a sus autores y están amparados por leyes como el DMCA. Guardarlos para uso personal suele considerarse fair use mientras no se modifiquen ni se redistribuyan. Repostear sin crédito o sin cambios sí es una infracción y puede provocar retiradas o denuncias. La música añade otra capa: las discográficas poseen los derechos, aunque los clips personales cortos rara vez generan avisos.
            </p>
            <p className="section-muted mb-2">
              Existen casos en los que el download es legal:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Permiso del creador
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si el autor autoriza expresamente la descarga, puedes hacerlo sin problemas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Contenido de dominio público
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El material que ya no está protegido por derechos de autor puede descargarse libremente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Uso justo educativo
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Centros educativos pueden usar fragmentos con fines formativos bajo el fair use. Revisa siempre la descripción del video para ver las licencias disponibles.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              En resumen, mantén el uso privado y respetuoso y estarás dentro de lo permitido. Si vas a compartir, pide permiso o acredita claramente a la persona creadora.
            </p>
          </div>

          {/* Riesgos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos al descargar videos de TikTok
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              Los descargadores de terceros prometen rapidez, pero algunos esconden trampas. No todos los sitios son fiables y pegar un enlace sin verificar puede comprometer tu dispositivo. Conoce los riesgos antes de actuar.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware de sitios dudosos">
                Algunos portales insertan virus o ransomware en los MP4. Basta un clic para infectar el equipo o bloquear la pantalla hasta pagar un rescate.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing y robos de datos">
                Botones falsos simulan la página de inicio de sesión de TikTok para capturar tus credenciales, o instalan spyware mediante supuestas actualizaciones.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Filtraciones de privacidad">
                Algunas herramientas registran lo que descargas y venden esa información a terceros, exponiéndote a spam o estafas dirigidas.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Pérdida de calidad">
                Los servicios de baja calidad comprimen demasiado el archivo, generando glitches, audio desincronizado o colores desteñidos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Suspensión de cuenta">
                TikTok puede detectar descargas masivas desde herramientas externas y suspender tu perfil, en especial si eres creador.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Dispositivo saturado">
                Guardar muchos videos ocupa memoria y ralentiza el móvil; un archivo corrupto incluso puede hacer fallar el reproductor.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa servicios fiables, analiza los archivos descargados y, si puedes, apóyate en un VPN para sumar seguridad.
            </p>
          </div>

          {/* Por qué usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu aliado de confianza para descargar de TikTok
            </h2>
            <p className="section-muted mb-4">
              Lanzamos videodownload.io en 2022 porque nos cansamos de apps lentas, llenas de publicidad y fallos. Somos usuarios de TikTok y queríamos un método sencillo para guardar clips. No hay una gran empresa detrás, solo un equipo pequeño que resuelve problemas reales. Millones de descargas después, seguimos sin filtraciones de datos y mejoramos cada día con las sugerencias de la comunidad.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Velocidad instantánea">
                Los videos se preparan en segundos gracias a servidores optimizados, incluso en horas punta.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sin anuncios molestos">
                Interfaz limpia, sin ventanas emergentes ni banners invasivos.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sin marcas de agua">
                Obtenemos el archivo original para que puedas usarlo sin logos ni superposiciones.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Descargas ilimitadas">
                No imponemos límites diarios: descarga tantos videos como necesites.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
                Solo necesitas un navegador en tu móvil, tablet o computador. Nada que instalar.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Privacidad asegurada">
                No guardamos enlaces ni archivos y limpiamos cualquier rastro tras el proceso.
              </FeatureCard>
            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Resuelve tus dudas sobre videodownload.io y TikTok
            </h2>
            <p className="section-muted mb-4">
              Aquí tienes respuestas a las preguntas más habituales para utilizar la herramienta con tranquilidad.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de TikTok?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo funciona con videos públicos. Los privados requieren permiso del creador. Si el video es tuyo, utiliza la opción de descarga oficial como respaldo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar ralentiza mi teléfono?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Los archivos son ligeros y no instalamos nada. Solo vigila el espacio disponible si guardas muchos videos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi descarga no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok añade la marca para rastrear las comparticiones, pero nosotros usamos el flujo original y la eliminamos para que el video quede limpio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar solo el audio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, después de pegar el enlace elige la opción MP3 para quedarte con la pista sonora.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué ocurre si el download falla?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica que el enlace esté completo y sea público. Prueba con otro navegador o limpia la caché. Si persiste el problema, contáctanos: respondemos rápido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay límite de tamaño o duración?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Aceptamos videos de hasta 60 minutos. Los más largos tardan un poco más en procesarse, pero se descargan completos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Guardáis los videos que descargo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Procesamos el archivo al vuelo y no almacenamos enlaces ni copias. El video solo queda en tu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿El creador sabe si descargué su video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  TikTok no envía notificaciones. El proceso es anónimo, así que no habrá avisos ni situaciones incómodas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Empieza ahora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Listo para guardar tus favoritos?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lleva tus videos offline hoy mismo
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia el enlace
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pega aquí
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pulsa Descargar
              </div>
            </div>
            <div className="mt-2">
              <a href="#tiktok-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download TikTok Video
                </Button>
              </a>
            </div>
          </div>

          {/* Descubre otros descargadores */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Descubre más herramientas
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
      <FeatureCard icon={VideoIcon} title="Descargas en HD">
        Obtén videos en alta definición de hasta 1080p, con colores vivos y detalles nítidos gracias a la fuente original.
      </FeatureCard>
      <FeatureCard icon={FileX} title="Sin marcas de agua">
        El descargador oficial añade un logo. Nosotros lo eliminamos para que el video quede limpio y listo para editar o compartir.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Compatible con cualquier dispositivo">
        Funciona en Android, iOS, Windows y macOS solo con el navegador. No hay apps extra ni configuraciones complicadas.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Procesamiento rápido">
        No pierdas tiempo: en cuestión de segundos tendrás la receta viral o la rutina fitness en tu dispositivo, gracias a servidores rápidos y estables.
      </FeatureCard>
      <FeatureCard icon={Download} title="Totalmente gratis">
        Sin registros ni costes ocultos. Puedes descargar cuantos videos quieras cada día sin pagar nada.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Seguro y privado">
        No almacenamos enlaces ni archivos y no usamos anuncios emergentes. Tras la descarga no queda rastro: tus datos permanecen contigo.
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
      <StepCard step={1} title="Copia el enlace del video">
        <a href="https://www.tiktok.com/">Abre TikTok</a> en la app o en el navegador, busca el clip que te interesa y toca Compartir. Elige «Copiar enlace» para obtener la URL completa.
      </StepCard>
      <StepCard step={2} title="Pega el enlace en videodownload.io">
        Entra en videodownload.io, ubica el campo superior e introduce el enlace. Asegúrate de que comience con tiktok.com y que el video sea público.
      </StepCard>
      <StepCard step={3} title="Deja que preparemos el archivo">
        Pulsa el botón «Descargar». Recuperamos el video desde los servidores de TikTok, eliminamos la marca de agua y revisamos la calidad en segundos.
      </StepCard>
      <StepCard step={4} title="Elige formato y guarda">
        Selecciona MP4 para video + audio o MP3 si solo quieres el sonido. El archivo se descargará en tu carpeta habitual y podrás reproducirlo offline cuando quieras.
      </StepCard>
    </div>
  );
}
