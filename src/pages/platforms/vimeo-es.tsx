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

export default function VimeoPageES() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Download Video de Vimeo | Gratis y en HD",
    description: "Descarga videos de Vimeo en MP4 y calidad 1080p. Descargador y conversor de videos en línea gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Vimeo" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caja de descarga minimalista */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Download Vimeo Video
          </h1>
          <div id="vimeo-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video de Vimeo"
            />
          </div>
          {/* Características */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga videos de Vimeo sin complicaciones
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu guía sencilla para guardar clips creativos sin conexión
          </p>

          <EnhancedFeatures />

          {/* Cómo descargar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de Vimeo
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una guía clara, paso a paso, para guardar videos sin esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io llevar videos de Vimeo a tu dispositivo es muy fácil.
            Sigue estos cuatro pasos sencillos para descargar cualquier video en minutos.
            Cada paso está pensado para ser intuitivo, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#vimeo-downloader">
              <Button variant="download" className="px-6">
                Download Vimeo Video
              </Button>
            </a>
          </div>

          {/* Por qué descargar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores casos de uso
            </h2>
            <p className="section-muted mb-4">
              Vimeo es un centro de contenido creativo y profesional, pero los videos pueden perderse o eliminarse. Descargar te permite conservar los clips que inspiran o enseñan, convirtiendo hallazgos fugaces en una colección personal. Se trata de guardar lo que impulsa tus proyectos o tu pasión, no de acumular contenido al azar. Mantienes el control de tu biblioteca, a salvo de eliminaciones o cambios en la plataforma.
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
                    Guarda tutoriales de cine o entrevistas a artistas para viajes sin Wi-Fi, como vuelos o rodajes remotos. Los estudiantes descargan clips educativos para estudiar sin internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilización para creadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cineastas guardan cortos para estudiar técnicas o integrarlos en sus proyectos. Los marketers descargan piezas de marca para adaptarlas a otras plataformas, sin marcas de agua para ediciones limpias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Archivar tus propios uploads
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si subes videos a Vimeo, pueden desaparecer por problemas de cuenta o actualizaciones. Descárgalos a un disco para proteger tu trabajo, ya sea una pieza de portafolio o un proyecto para un cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje e inspiración
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Diseñadores guardan tutoriales de motion graphics para practicar sin conexión. Docentes descargan lecciones creativas para el aula sin depender de una conexión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Proyectos personales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda videoclips o muestras de arte para revisarlas cuando necesites motivación. Convierte un hallazgo rápido en Vimeo en una referencia para tu próxima idea creativa o propuesta profesional.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Vimeo ofrece flexibilidad y comodidad,
              facilitando disfrutar el contenido a tu manera, ya sea por ocio,
              trabajo o aprendizaje.
            </p>
          </div>

          {/* Quién debería descargar */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más se benefician
            </h2>
            <p className="section-muted mb-4">
              Vimeo es un refugio para artistas y profesionales, pero descargar videos es ideal para quienes usan la plataforma para crear, aprender o crecer. Es para quienes ven los clips como herramientas, inspiración o recuerdos, no solo como entretenimiento casual. Si eres activo en Vimeo y quieres conservar lo que importa, descargar es tu mejor opción.
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
                    Cineastas y animadores descargan tutoriales o reels para estudiarlos o remezclarlos. También guardan sus propios uploads para tener copias limpias sin logos en portafolios o ediciones.
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
                    Docentes de arte guardan demostraciones de animación para clase. Estudiantes descargan consejos de cine o lecciones de diseño para repasarlos sin conexión y a su ritmo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profesionales y negocios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marketers descargan videos de marca para reutilizarlos en anuncios o sitios web. Freelancers guardan propuestas de clientes para archivarlas o compartirlas sin distracciones de marcas de agua.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados y creativos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fotógrafos guardan tutoriales de iluminación para probarlos en casa. Músicos descargan actuaciones en vivo para estudiar el montaje del escenario y ensayar sin internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Usuarios ocasionales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda el cortometraje de un amigo o un clip motivacional para verlo más tarde. Incluso los fans descargan muestras artísticas para proyectos personales o moodboards.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sea cual sea tu rol o estilo de vida, descargar videos de Vimeo te ahorra tiempo, datos y esfuerzo mientras mantiene tu contenido favorito accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de Vimeo?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que debes saber sobre la ley
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de Vimeo es un área gris. Las reglas de Vimeo <a href="https://help.vimeo.com/hc/es/articles/12426502581265--C%C3%B3mo-puedo-descargar-un-v%C3%ADdeo-en-vimeo-com">permiten bajar videos públicos desde su web</a> para uso personal, si el creador no desactivó la opción. Usar herramientas de terceros como la nuestra viola sus términos y podría marcar tu cuenta, aunque los bloqueos son raros salvo que descargues en exceso o republicas sin permiso.
            </p>
            <p className="section-muted mb-4">
              Los videos están protegidos por derechos de autor según leyes como el DMCA en EE. UU. Guardarlos para uso privado, por ejemplo estudiar un tutorial sin conexión, suele considerarse fair use. Pero compartir sin crédito o utilizar con fines comerciales puede traer problemas legales. La música o locuciones pueden tener capas extra de copyright, aunque las descargas personales y cortas rara vez causan conflictos.
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
                    Si el creador permite descargas o el contenido es de dominio público, estás cubierto. El uso educativo, como mostrar un clip en clase, suele entrar en fair use. Revisa las descripciones para ver permisos. Mantén tus descargas privadas y acredita al creador si compartes para mantenerte seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riesgos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos de descargar videos de Vimeo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              Los descargadores de terceros parecen fáciles, pero sitios dudosos pueden causar problemas reales. No todos son confiables y un clic apresurado puede comprometer tu dispositivo o tus datos. Conoce los riesgos de antemano para evitar sobresaltos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Sitios inseguros esconden virus en los archivos de video, colando spyware o ransomware. Un solo download fallido puede bloquear tus archivos o robar contraseñas. Algunos programas han sido descubiertos con keyloggers, convirtiendo un meme en una filtración de datos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Phishing">
                Páginas falsas imitan el login de Vimeo y capturan tus credenciales si las ingresas. O los anuncios impulsan "actualizaciones" que instalan rastreadores y vigilan tu actividad.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de calidad"
              >
                Sitios de baja calidad comprimen los videos, provocando saltos o pérdida de audio. Querías un tutorial nítido y terminas con un archivo defectuoso.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Pérdida de privacidad">
                Algunos sitios registran tus descargas y venden tu IP o preferencias de video a anunciantes. Los hackers podrían robar esos datos y generar spam o estafas dirigidas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bloqueos en Vimeo">
                El uso intensivo de herramientas externas puede marcar tu cuenta, especialmente si eres creador. Podrías perder perfil o subidas de un día para otro.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Almacenamiento saturado"
              >
                Guardar muchos videos consume espacio y ralentiza móviles o discos. Los archivos corruptos pueden cerrar reproductores y hacerte perder tiempo solucionándolo.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, analiza los archivos y considera una VPN para mantenerte protegido.
            </p>
          </div>

          {/* Por qué usar videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu aliado de confianza para descargas de Vimeo
            </h2>
            <p className="section-muted mb-4">
              Lanzamos videodownload.io en 2022 porque estábamos cansados de apps torpes y sitios riesgosos. Como usuarios de Vimeo, queríamos una forma rápida y limpia de guardar videos sin líos. Somos un equipo pequeño, no una gran corporación, y nos enfocamos en descargas fáciles y seguras. Millones de usuarios confían en nosotros sin filtraciones y seguimos mejorando gracias a sus comentarios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de cinco segundos">
                Las descargas terminan incluso en días con mucho tráfico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin anuncios ni pop-ups">
                Solo una interfaz simple.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sin marcas de agua">
                Clips limpios y usables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Descargas ilimitadas">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
                Desde tabletas antiguas hasta portátiles nuevos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                No almacenamos datos después de terminar.
              </FeatureCard>
            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Dudas comunes sobre descargas de Vimeo
            </h2>
            <p className="section-muted mb-4">
              Reunimos respuestas a las preguntas más comunes sobre cómo usar
              videodownload.io y descargar videos de Vimeo para que empieces con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de Vimeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo admitimos videos públicos. Los videos privados o protegidos por contraseña necesitan permiso del creador y respetamos esos límites para mantenernos legítimos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar lentificará mi dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son ligeros y limpios, así que no generan lag. Pero guardar muchos videos puede llenar el almacenamiento; controla tu espacio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi video descargado no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo añade logos para rastrear compartidos, pero obtenemos el archivo original y lo limpiamos para darte un video claro de uso personal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un video de Vimeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Ideal para obtener música o voz en off sin el video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué hago si la descarga no inicia?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Revisa que el enlace sea público y comience con vimeo.com. Prueba otro navegador o borra la caché. Nuestro chat de soporte resuelve problemas rápido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay límite de duración?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Procesamos videos de hasta 60 minutos, aunque la mayoría de los clips en Vimeo varían. Los más largos tardan un poco más pero se descargan completos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Guardan los videos que descargo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Para nada. Procesamos al instante y eliminamos todo después. Tus archivos se quedan en tu dispositivo, no en nuestros servidores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿El creador sabe que descargué su video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Vimeo no les avisa. Tu descarga permanece privada, sin alertas para el creador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Empieza ahora */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Empieza a guardar videos de Vimeo hoy
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Consigue tus clips creativos en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copiar enlace del video de Vimeo
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pegar en nuestro sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descargar video limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#vimeo-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Download Vimeo Video
                </Button>
              </a>
            </div>
          </div>

          {/* Explora más descargadores */}
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
      <FeatureCard icon={VideoIcon} title="Descargas en alta definición">
        Guarda videos de Vimeo en su resolución completa, hasta 1080p o más si la subida original lo permite. Sin reproducción granulada ni colores apagados al verlos después. Obtenemos el archivo directamente de los servidores de Vimeo, manteniendo cada cuadro nítido para ese corto o tutorial artístico.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin marcas de agua ni logos">
        Vimeo añade su logo a los videos guardados desde la app y puede estorbar. Nosotros lo eliminamos y te entregamos un clip limpio, listo para editar o usar. Mira ese documental o animación sin textos que tapen detalles.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en todos los dispositivos">
        Usa tu teléfono, tablet, laptop o escritorio y todo corre fluido. No necesitas apps ni software extra. Abre nuestro sitio en el navegador, pega el enlace y descarga. Probado desde iPhones antiguos hasta PCs nuevos, siempre sin problemas.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Descargas rápidas">
        A nadie le gusta esperar. Nuestra herramienta obtiene videos de Vimeo en segundos, normalmente menos de diez para la mayoría. Usamos servidores cercanos a los de Vimeo para descargas veloces, así puedes guardar un tutorial o reel durante una pausa.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente gratis">
        Sin tarifas, registros ni costos ocultos. Descarga todos los videos que quieras, cada día, sin límites. Lo mantenemos gratis para que guardes esa película inspiradora o video musical sin tropezar con un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso seguro y privado">
        Tus datos permanecen seguros. No almacenamos enlaces ni videos tras la descarga. Sin rastreo, sin registros y sin anuncios molestos. El proceso es limpio y mantiene tu dispositivo libre de riesgos.
      </FeatureCard>
    </div>
  );
}

// --- Pasos detallados ---
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
      <StepCard step={1} title="Copia el enlace del video desde Vimeo">
        <a href="http://www.vimeo.com">Abre Vimeo</a> en tu teléfono o navegador. Encuentra el video que te guste, como un tip de cine o una animación creativa. Haz clic en el icono de compartir, normalmente un avión de papel, en la parte inferior o lateral. En el menú, elige "Copiar enlace". Así obtienes la URL completa, por ejemplo vimeo.com/123456789. Asegúrate de que sea correcta.
      </StepCard>
      <StepCard step={2} title="Pega el enlace en nuestra herramienta">
        Ve a videodownload.io en tu navegador. Verás una caja que dice "Pega aquí el enlace de Vimeo". Haz clic y pega el enlace copiado. Comprueba que empiece con vimeo.com para evitar errores. Solo funcionan los videos públicos; los privados o protegidos no se pueden descargar.
      </StepCard>
      <StepCard step={3} title="Nosotros obtenemos y limpiamos el video">
        Presiona el botón verde "Descargar" junto a la caja. Nuestro sistema recupera el video de los servidores de Vimeo en segundos. Quitamos cualquier marca de agua y comprobamos la calidad para entregarte un clip fluido. El audio se mantiene claro, sin fallos.
      </StepCard>
      <StepCard step={4} title="Guarda el clip en tu dispositivo">
        Verás opciones: MP4 para el video completo con sonido o MP3 solo con audio. Para la mayoría elige MP4. Toca para descargar y el archivo quedará en tu carpeta de Descargas o galería. Ponle un nombre sencillo, como "film_tutorial.mp4", antes de guardarlo. Reprodúcelo para confirmar que esté perfecto.
      </StepCard>
    </div>
  );
}
