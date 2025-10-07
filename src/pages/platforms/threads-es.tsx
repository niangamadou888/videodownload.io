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

export default function ThreadsPageES() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Videos de Threads | Gratis & HD",
    description: "Descarga videos y publicaciones de Threads en mp4, calidad 1080p. Descargador y convertidor de videos en línea gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Threads" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <div id="threads-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video o publicación de Threads"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga Videos de Threads Rápidamente
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu Guía Simple para Guardar Clips Sin Conexión
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo Descargar Videos de Threads
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guía Clara, Paso a Paso, para Guardar Videos sin Esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtener videos de Threads en tu dispositivo es simple con
            videodownload.io. Sigue estos cuatro pasos sencillos para
            descargar cualquier video en minutos. Cada paso está diseñado para ser
            intuitivo, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#threads-downloader">
              <Button variant="download" className="px-6">
                Descargar Video de Threads
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Qué Descargar Videos de Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores Casos de Uso
            </h2>
            <p className="section-muted mb-4">
              Threads se mueve rápido, con publicaciones que quedan enterradas bajo nuevas conversaciones. Descargar te permite conservar los videos que capturan tu atención, convirtiendo desplazamientos rápidos en una colección personal. Se trata de guardar lo que genera alegría, informa o inspira, no solo recopilar clips aleatorios. Controlas tu colección, a salvo de publicaciones eliminadas o cambios en la aplicación.
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
                    Guarda consejos de viaje o clips de ejercicios para vuelos, trayectos o lugares con Wi-Fi deficiente. Los padres descargan sketches o canciones aptas para niños para viajes en auto, manteniendo a los niños felices sin buffering.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilización para Creadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los influencers obtienen clips virales para remezclar en su contenido, añadiendo su propio toque. Los blogueros guardan videos de moda o comida para compartir en otras plataformas, saltándose las marcas de agua para ediciones limpias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivar Tus Propias Publicaciones
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si compartes videos en Threads, pueden desaparecer por problemas de cuenta o actualizaciones de la plataforma. Descárgalos en una unidad para proteger tu trabajo, como un vlog personal o una promoción de marca.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje e Inspiración
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los estudiantes guardan trucos de estudio o charlas motivacionales para revisión sin conexión. Los aficionados descargan consejos de bricolaje o demostraciones de arte para practicar a su ritmo, sin necesidad de buscar nuevamente.
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
                    Guarda una actualización de la vida de un amigo o un clip divertido para enviar en chats grupales o conservar para más tarde. Es una forma de conservar recuerdos sin depender de la aplicación.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Threads ofrece flexibilidad y conveniencia,
              facilitando disfrutar del contenido en tus términos, ya sea por diversión,
              trabajo o aprendizaje.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién Debería Descargar Videos de Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas Que Más Se Benefician de Descargar
            </h2>
            <p className="section-muted mb-4">
              Threads es un centro de contenido rápido y personal, pero descargar videos se adapta a las personas que lo usan para crear, aprender o conectarse. Es para aquellos que ven las publicaciones como algo más que diversión fugaz, convirtiendo clips en herramientas o recuerdos. Si eres activo en Threads y quieres conservar lo que importa, descargar es tu movimiento.
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
                    Los influencers y vloggers guardan clips de tendencia para remezclar para su audiencia, como un gurú de belleza perfeccionando un tutorial de maquillaje. También descargan sus propias publicaciones, manteniendo copias limpias sin logos para ediciones.
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
                    Los fans del fitness guardan clips de entrenamiento para seguir en el gimnasio. Los artesanos descargan demostraciones de bricolaje para probar en casa. Es inspiración práctica, lista sin conexión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudiantes y Educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los maestros guardan charlas motivacionales para discusiones en clase. Los estudiantes obtienen trucos de estudio o lecciones de idiomas para revisar sin tener que volver a conectarse.
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
                    Los padres guardan clips divertidos de niños o actualizaciones familiares para compartir en reuniones. Los amigos descargan memes virales para reír después.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pequeñas Empresas y Marketeros
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Las tiendas guardan elogios de clientes para presentar en sitios web. Los profesionales de redes sociales obtienen clips de tendencia para analizar o reutilizar, manteniendo su contenido fresco.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sin importar tu rol o estilo de vida, descargar videos de Threads puede
              ahorrar tiempo, datos y esfuerzo mientras mantienes tu contenido favorito
              accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es Legal Descargar Videos de Threads?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo Que Necesitas Saber Sobre la Ley
            </h2>
            <p className="section-muted mb-4">
              Los videos están protegidos por derechos de autor de sus creadores según leyes como la DMCA en EE.UU. Guardar para visualización privada, como ver un clip sin conexión, a menudo cuenta como uso justo. Pero compartir sin permiso o usar con fines de lucro puede llevar a problemas legales. La música o voces en off en los videos pueden tener capas adicionales de derechos de autor, aunque los guardados personales cortos rara vez enfrentan problemas.
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
                    Si el creador permite descargas o el contenido es de dominio público, estás bien. El uso educativo, como mostrar un clip en clase, a menudo califica como uso justo. Revisa los subtítulos de las publicaciones para permisos. Mantén las descargas privadas y acredita a los creadores si compartes para estar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Los Riesgos Asociados con Descargar Videos de Threads
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros Potenciales y Cómo Evitarlos
            </h2>
            <p className="section-muted mb-4">
              Los descargadores de terceros parecen fáciles, pero los turbios traen problemas reales. No todos los sitios son confiables, y hacer clic sin cuidado puede dañar tu dispositivo o datos. Conoce los riesgos antes de comenzar para evitar problemas más adelante.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Los sitios poco fiables ocultan virus en archivos de video, infiltrando spyware o ransomware. Una mala descarga puede bloquear tus archivos o robar contraseñas. Algunas herramientas han sido atrapadas con keyloggers, convirtiendo un guardado de meme en una violación de datos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de Phishing">
                Las páginas de descarga falsas imitan el inicio de sesión de Threads, obteniendo tus credenciales si las ingresas. O los anuncios impulsan "actualizaciones" que instalan rastreadores, vigilando tu actividad más allá de la plataforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de Calidad"
              >
                Los sitios malos comprimen videos, causando reproducción entrecortada o pérdida de audio. Querías un tutorial claro, pero obtienes un archivo defectuoso en su lugar.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de Privacidad">
                Algunos sitios registran tus descargas, vendiendo tu IP o elecciones de video a anunciantes. Los hackers podrían obtener esos datos, llevando a spam o estafas dirigidas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Prohibiciones de Threads">
                El uso intensivo de herramientas de terceros puede marcar tu cuenta, especialmente para creadores. Podrías perder tu perfil o seguidores de la noche a la mañana.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de Almacenamiento"
              >
                Guardar muchos videos consume espacio, ralentizando teléfonos o unidades. Los archivos corruptos podrían bloquear reproductores, perdiendo tiempo para reparar.
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
              Tu Socio de Confianza para Descargas de Threads
            </h2>
            <p className="section-muted mb-4">
              Iniciamos videodownload.io en 2022 porque estábamos cansados de herramientas turbias y aplicaciones lentas. Como usuarios de Threads, queríamos una forma rápida y limpia de guardar videos sin riesgos. Somos un equipo pequeño, no una gran empresa, enfocados en hacer las descargas fáciles y seguras. Millones de usuarios confían en nosotros sin fugas de datos, y seguimos mejorando basándonos en sus comentarios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de Cinco Segundos">
                Las descargas se completan incluso durante las horas pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin Anuncios ni Ventanas Emergentes">
                Solo un sitio limpio.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Marcas de Agua Eliminadas">
                Clips puros y utilizables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Guardados Ilimitados">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
                Desde teléfonos viejos hasta laptops nuevas.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Seguro">
                Sin datos almacenados después de que termines.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas Frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Preguntas Comunes Sobre Descargas de Threads
            </h2>
            <p className="section-muted mb-4">
              Hemos compilado respuestas a las preguntas más frecuentes sobre el uso de
              videodownload.io y la descarga de videos de Threads para ayudarte a
              comenzar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo manejamos publicaciones públicas. Los videos privados o restringidos necesitan el permiso del creador, y respetamos esos límites para mantenernos legítimos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar ralentizará mi dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son limpios y ligeros, así que no hay retraso. Pero guardar muchos videos puede llenar el almacenamiento, así que vigila tu espacio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi video no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads agrega logos para rastrear compartidos, pero extraemos el archivo sin procesar y los eliminamos para un guardado limpio que puedes usar libremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un video de Threads?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Genial para obtener música o voces en off de clips sin los visuales.
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
                  Verifica que el enlace sea público y comience con threads.net. Prueba otro navegador o borra la caché. Nuestro chat de soporte resuelve problemas rápidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay un límite en la duración del video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Manejamos videos de hasta 60 minutos, aunque la mayoría de los clips de Threads son cortos. Los más largos tardan un poco pero se descargan completamente.
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
                  De ninguna manera. Procesamos instantáneamente y eliminamos todo después. Tus archivos permanecen en tu dispositivo, no en nuestros servidores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Los creadores pueden ver si descargué su video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Threads no les notifica. Tu descarga permanece privada, sin alertas para el creador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comienza a Guardar Videos de Threads Hoy
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtén Tus Clips Favoritos en Segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar Enlace de Publicación de Threads
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
              <a href="#threads-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Descargar Video de Threads
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
                        Descargar Video de {p.name}
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
      <FeatureCard icon={VideoIcon} title="Descargas Claras y Nítidas">
        Guarda videos de Threads en su mejor calidad, hasta 1080p si la publicación original lo permite. Sin cuadros borrosos o colores apagados durante la reproducción. Obtenemos el archivo directamente de los servidores de Threads, manteniendo cada detalle nítido para ese sketch rápido o ese consejo de estilo.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin Marcas de Agua ni Logos">
        Threads agrega su marca a los videos guardados a través de su aplicación, abarrotando la vista. Eliminamos todo eso, dándote un clip limpio listo para compartir o editar. Mira ese momento divertido o tutorial sin superposiciones de texto bloqueando la acción.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
        Usa tu teléfono, tableta, laptop o escritorio, y funciona sin problemas. No se necesitan aplicaciones ni software adicional. Simplemente abre nuestro sitio en tu navegador, pega el enlace y descarga. Probado en todo, desde Android viejos hasta Macs nuevos, siempre es confiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de Descarga Rápidas">
        Esperar mata la vibra. Nuestra herramienta obtiene videos de Threads en segundos, generalmente menos de 10 para la mayoría de los clips. Usamos servidores cerca de los de Threads para obtenciones rápidas, para que puedas guardar un clip de baile u opinión durante un breve descanso.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente Gratis de Usar">
        Sin tarifas, sin registros, sin costos ocultos. Descarga tantos videos como quieras, cada día, sin límites. Lo mantenemos gratis para que puedas guardar ese meme viral o truco de vida sin topar con un muro de pago.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso Seguro y Privado">
        Tu información permanece segura. No almacenamos tus enlaces o videos después de descargar. Sin seguimiento, sin registros y sin anuncios de spam. El proceso es limpio, manteniendo tu dispositivo libre de basura o riesgos.
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
      <StepCard step={1} title="Copia el Enlace del Video desde Threads">
        <a href="http://www.threads.net">Abre Threads</a> en tu teléfono o navegador. Encuentra el video que te gusta, tal vez una receta rápida o un reel de moda. Toca el ícono de compartir, un avión de papel, en la parte inferior derecha de la publicación. Del menú, selecciona "Copiar enlace". Esto obtiene la URL completa, como threads.net/@username/post/abc123. Verifica que sea correcta.
      </StepCard>
      <StepCard step={2} title="Pega el Enlace en Nuestra Herramienta">
        Ve a videodownload.io en tu navegador. Verás una caja etiquetada "Pega el enlace de Threads aquí". Haz clic dentro y pega el enlace copiado. Asegúrate de que comience con threads.net para evitar errores. Solo funcionan las publicaciones públicas; los videos privados o restringidos no se descargarán.
      </StepCard>
      <StepCard step={3} title="Obtenemos y Preparamos el Video">
        Haz clic en el botón azul "Descargar" junto a la caja. Nuestro sistema obtiene el video de los servidores de Threads en segundos. Eliminamos cualquier marca de agua y verificamos la calidad, para que obtengas un clip fluido. El audio permanece claro, sin problemas ni sonido faltante.
      </StepCard>
      <StepCard step={4} title="Guarda el Clip en Tu Dispositivo">
        Verás opciones: MP4 para el video completo con sonido o MP3 para solo el audio. Elige MP4 para la mayoría de los clips. Toca para descargar, y aterriza en tu carpeta de Descargas o galería del teléfono. Nómbralo algo simple, como "consejo_estilo.mp4", antes de guardar. Reprodúcelo para confirmar que está bien.
      </StepCard>
    </div>
  );
}
