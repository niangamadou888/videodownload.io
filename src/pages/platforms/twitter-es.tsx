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

export default function TwitterPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Video Twitter X | Gratis & HD",
    description: "Descarga videos y publicaciones de Twitter X en mp4, calidad 1080p. Descargador y convertidor de videos en línea gratis."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Twitter" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Twitter Video
          </h1>
          <div id="twitter-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega una URL de video o publicación de Twitter X"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga Videos de Twitter X Rápidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu Guía Rápida para Guardar Clips Sin Conexión
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo Descargar Videos de Twitter X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guía Clara, Paso a Paso para Guardar Videos sin Esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtener videos de Twitter X en tu dispositivo es simple con
            videodownload.io. Sigue estos cuatro pasos sencillos para
            descargar cualquier video en minutos. Cada paso está diseñado para ser
            intuitivo, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#twitter-downloader">
              <Button variant="download" className="px-6">
                Download Twitter Video
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Qué Descargar Videos de Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores Casos de Uso
            </h2>
            <p className="section-muted mb-4">
              Twitter X se mueve a velocidad vertiginosa, con videos que se pierden en el flujo de publicaciones. Descargar te permite conservar los clips que se destacan, convirtiendo desplazamientos rápidos en una colección personal. No se trata de guardar todo, sino de mantener lo que genera alegría, informa o inspira. Controlas tu colección, a salvo de publicaciones eliminadas o cambios en la aplicación.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visualización Sin Conexión
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda clips de noticias o tutoriales para vuelos, trenes o áreas con Wi-Fi deficiente. Los padres descargan animaciones divertidas para que los niños vean en viajes largos en coche, sin estrés de buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilización de Contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los creadores toman clips virales para remezclarlos en sus propias publicaciones, agregando comentarios o ediciones. Un periodista guarda un video de noticias de última hora para analizarlo en un artículo, eliminando marcas de agua para un uso limpio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Respaldo de Tus Propias Publicaciones
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si compartes videos en Twitter X, pueden desaparecer debido a problemas de cuenta o actualizaciones de la plataforma. Descárgalos en un disco para mantener tu trabajo seguro.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje e Investigación
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los estudiantes guardan charlas de expertos o análisis de datos para sus notas de estudio. Los profesionales toman actualizaciones de la industria para compartir en reuniones, sin necesidad de buscar en el feed nuevamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Compartir Momentos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga el clip de un hito importante de un amigo o una reacción divertida para enviar en chats grupales o guardar para después. Es una forma de mantener momentos personales destacados sin depender de la aplicación.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Twitter X ofrece flexibilidad y comodidad,
              facilitando disfrutar del contenido en tus propios términos, ya sea por diversión,
              trabajo o aprendizaje.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién Debería Descargar Videos de Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que Más Benefician de la Descarga
            </h2>
            <p className="section-muted mb-4">
              Twitter X es un centro para opiniones rápidas y grandes momentos, pero descargar videos se adapta a personas que usan la plataforma con intención. Es para aquellos que ven los clips como herramientas, recuerdos o inspiración, no solo contenido pasajero. Si eres activo en la aplicación y quieres mantener lo que importa, descargar es para ti.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Creadores de Contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Publican a diario, sacando ideas de videos en tendencia. Descargar les permite guardar sus propios clips o estudiar los de otros, como un comediante que toma un video de reacción para improvisar sin logos molestos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Periodistas e Investigadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guardan clips de noticias o entrevistas para artículos o verificación de hechos. Los estudiantes descargan hilos de expertos con videos para proyectos escolares, estudiando sin conexión a su propio ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Familias y Usuarios Ocasionales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda el video de anuncio de un hermano o hermana o un clip viral de mascota para compartir en reuniones. Es más confiable que esperar que Twitter X lo mantenga activo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Mercadólogos y Dueños de Negocios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Una startup guarda testimonios de clientes para presentar en sitios web. Los administradores de redes sociales toman clips de competidores para analizar tendencias o reutilizar para otras plataformas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados y Estudiantes
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los fanáticos de la tecnología guardan demos de programación para practicar después. Los adictos a las noticias descargan historias de última hora para volver a verlas. Incluso los scrollers ocasionales guardan clips motivacionales para días difíciles.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sin importar tu rol o estilo de vida, descargar videos de Twitter X puede
              ahorrar tiempo, datos y esfuerzo mientras mantienes tu contenido favorito
              accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es Legal Descargar Videos de Twitter X?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que Necesitas Saber Sobre la Ley
            </h2>
            <p className="section-muted mb-4">
              Los videos están protegidos por derechos de autor de sus creadores según leyes como la DMCA en los EE. UU. Guardar para visualización privada, como ver un clip de noticias sin conexión, a menudo cuenta como uso justo. Pero compartir sin permiso o usar con fines de lucro puede llevar a problemas legales. La música o las voces en off en los videos pueden tener capas adicionales de derechos de autor, aunque los guardados personales cortos rara vez enfrentan problemas.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-green-400">
                    Cuándo Está Permitido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si el creador permite descargas o el contenido es de dominio público, estás bien. El uso educativo, como mostrar un clip en clase, a menudo califica como uso justo. Verifica las leyendas de las publicaciones para permisos. Mantenlo privado y acredita a los creadores si compartes para estar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Los Riesgos Asociados con Descargar Videos de Twitter X
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros Potenciales y Cómo Evitarlos
            </h2>
            <p className="section-muted mb-4">
              Los descargadores de terceros parecen fáciles, pero los poco confiables pueden causar grandes problemas. No todos los sitios son confiables, y hacer clic descuidadamente puede dañar tu dispositivo o datos. Conoce los riesgos antes de comenzar a descargar para evitar problemas más adelante.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Los sitios poco confiables ocultan virus en archivos de video, introduciendo spyware o ransomware. Una descarga incorrecta puede bloquear tus archivos o robar contraseñas. Algunas herramientas han sido atrapadas con keyloggers, convirtiendo un guardado rápido en una violación de datos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de Phishing">
                Las páginas de descarga falsas imitan el inicio de sesión de Twitter X, capturando tus credenciales si las ingresas. O los anuncios promueven "actualizaciones" que instalan rastreadores, vigilando tu actividad más allá de la plataforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de Calidad"
              >
                Los sitios deficientes comprimen videos, causando reproducción entrecortada o pérdida de audio. Querías un clip de noticias claro, pero obtienes un archivo con fallas en su lugar.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de Privacidad">
                Algunos sitios registran tus descargas, vendiendo tu IP o elecciones de video a anunciantes. Los hackers podrían obtener esos datos, llevando a spam o estafas dirigidas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Prohibiciones de Twitter X">
                El uso intensivo de herramientas de terceros puede marcar tu cuenta, especialmente para creadores. Podrías perder tu perfil o seguidores de la noche a la mañana.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de Almacenamiento"
              >
                Guardar muchos videos consume espacio, ralentizando teléfonos o discos. Los archivos corruptos podrían bloquear reproductores, perdiendo tiempo en reparar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, escanea descargas y considera VPNs para mantenerte seguro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Qué Usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu Socio Confiable para Descargas de Twitter X
            </h2>
            <p className="section-muted mb-4">
              Iniciamos videodownload.io en 2022 porque estábamos hartos de herramientas dudosas y aplicaciones con errores. Como usuarios de Twitter X, queríamos una forma rápida y limpia de guardar videos sin riesgos. Somos un equipo pequeño, no una gran empresa, enfocado en hacer las descargas simples y seguras. Millones de usuarios confían en nosotros sin violaciones de datos, y seguimos mejorando según sus comentarios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de Cinco Segundos">
                Las descargas se completan incluso en días ocupados.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin Anuncios ni Pop-ups">
                Solo un sitio limpio.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Marcas de Agua Eliminadas">
                Clips puros y utilizables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Guardados Ilimitados">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
                Desde teléfonos hasta laptops.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Seguro">
                No se guardan datos después de tu salida.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas Frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Preguntas Comunes Sobre Descargas de Twitter X
            </h2>
            <p className="section-muted mb-4">
              Hemos compilado respuestas a las preguntas más frecuentes sobre el uso de
              videodownload.io y la descarga de videos de Twitter X para ayudarte a
              comenzar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo manejamos publicaciones públicas. Los videos protegidos o privados necesitan permiso del creador, y respetamos eso para mantener las cosas legítimas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿La descarga ralentizará mi dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son limpios y ligeros, así que no hay ralentización. Pero guardar muchos videos puede llenar el almacenamiento, así que vigila tu espacio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi video está sin marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X agrega logos para rastrear compartidos, pero extraemos el archivo original y los eliminamos para un guardado limpio que puedes usar libremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un video de Twitter X?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Perfecto para capturar clips de podcast o sonidos en tendencia sin el video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué pasa si mi descarga falla?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica que el enlace sea público y comience con x.com. Prueba otro navegador o borra la caché. Nuestro chat de soporte soluciona problemas rápidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay límites en el tamaño del video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Manejamos videos de hasta 60 minutos, aunque la mayoría de los clips de Twitter X son cortos. Los más largos toman un poco pero se descargan completamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Almacenan mis videos descargados?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  De ninguna manera. Procesamos instantáneamente y eliminamos todo después. Tus archivos se quedan en tu dispositivo, no en nuestros servidores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Los creadores pueden ver que descargué su video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Twitter X no los notifica. Tu descarga permanece privada, sin alertas para quien publicó.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comienza a Guardar Videos de Twitter X Ahora
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtén Tus Clips Sin Conexión en Segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar Enlace de Publicación Twitter X
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pegar en Nuestro Sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descargar Video Limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#twitter-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Twitter Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explore More Downloaders */}
          <div className="section-block section-downloaders mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Explora Más Descargadores
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
                  to={`/es/${p.name.toLowerCase().replace(/\s+/g, "")}`}
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
      <FeatureCard icon={VideoIcon} title="Calidad de Video Nítida">
        Guarda videos de Twitter X en su mejor resolución, hasta 1080p si la publicación original lo ofrece. Sin fotogramas borrosos o colores apagados cuando los veas después. Extraemos el archivo sin procesar directamente de los servidores de Twitter X, manteniendo cada detalle nítido para ese clip viral o actualización de noticias.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin Marcas de Agua ni Branding">
        Twitter X agrega su logo o nombre de usuario a los videos guardados a través de su aplicación, saturando la vista. Eliminamos todo eso, dándote un clip limpio listo para compartir o editar. Mira ese momento divertido o discurso principal sin texto bloqueando la pantalla.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
        Usa tu teléfono, tableta, laptop o escritorio, y funciona sin problemas. No necesitas instalar aplicaciones o lidiar con software adicional. Abre nuestro sitio en tu navegador, pega el enlace y descarga. Probado en todo, desde Androids económicos hasta PCs de alta gama, siempre es confiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de Descarga Rápidas">
        Nadie quiere esperar. Nuestra herramienta captura videos de Twitter X en segundos, a menudo menos de 10 para la mayoría de los clips. Usamos servidores cercanos a los de Twitter X para extracciones rápidas, para que puedas guardar un video de reacción u opinión caliente durante un descanso de desplazamiento rápido.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Totalmente Gratis de Usar">
        Sin tarifas, sin registros, sin cargos sorpresa. Descarga todos los videos que quieras, todos los días, sin límites. Lo mantenemos gratis para que puedas guardar ese meme o clip de noticias sin encontrar un muro de pago.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Descargas Seguras y Privadas">
        Tu información permanece segura. No guardamos tus enlaces o videos después de la descarga. Sin seguimiento, sin registros y sin anuncios molestos. El proceso es limpio, manteniendo tu dispositivo libre de desorden o riesgos.
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
      <StepCard step={1} title="Toma el Enlace del Video de Twitter X">
        <a href="http://www.x.com">Abre Twitter X</a> en tu teléfono o navegador. Encuentra el video que te gusta, tal vez un meme rápido o un momento destacado de conferencia. Haz clic en el ícono de compartir debajo de la publicación, una pequeña flecha apuntando hacia arriba. Del menú, elige "Copiar enlace a la Publicación". Esto copia la URL completa, como x.com/username/status/123456. Verifica que sea correcto.
      </StepCard>
      <StepCard step={2} title="Pega el Enlace en Nuestra Herramienta">
        Ve a videodownload.io en tu navegador. Verás una casilla etiquetada "Pega enlace de Twitter X aquí". Haz clic dentro y pega el enlace que copiaste. Asegúrate de que comience con x.com para evitar problemas. Solo funcionan las publicaciones públicas; los videos privados o protegidos no se descargarán.
      </StepCard>
      <StepCard step={3} title="Recuperamos y Preparamos el Video">
        Haz clic en el botón azul "Descargar" junto a la casilla. Nuestro sistema extrae el video de los servidores de Twitter X en segundos. Eliminamos todas las marcas de agua y verificamos la calidad, para que obtengas un clip fluido. El audio permanece claro, sin problemas o sonido faltante.
      </StepCard>
      <StepCard step={4} title="Guarda el Archivo en Tu Dispositivo">
        Verás opciones: MP4 para el video completo con audio o MP3 para solo el sonido. Elige MP4 para la mayoría de los clips. Toca para descargar, y llega a tu carpeta de Descargas o galería del teléfono. Nómbralo algo simple, como "meme_clip.mp4", antes de guardar. Reprodúcelo para asegurarte de que sea perfecto.
      </StepCard>
    </div>
  );
}
