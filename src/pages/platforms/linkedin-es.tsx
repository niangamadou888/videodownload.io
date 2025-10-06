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

export default function LinkedInPageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Video LinkedIn | Gratis & HD",
    description:
      "Descarga videos y publicaciones de LinkedIn en mp4 y calidad 1080p. Downloader y conversor de video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="LinkedIn" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caja de descarga mínima */}
          <div id="linkedin-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video o publicación de LinkedIn"
            />
          </div>
          {/* Características */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga videos de LinkedIn sin complicaciones
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu guía sencilla para guardar clips profesionales y verlos offline
          </p>

          <EnhancedFeatures />

          {/* Cómo descargar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de LinkedIn
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Pasos claros y rápidos para guardar contenido sin esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io llevar un video de LinkedIn a tu dispositivo es
            cuestión de minutos. Sigue estos cuatro pasos intuitivos —incluso si no
            eres experto en tecnología— y descarga cualquier clip en poco tiempo.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#linkedin-downloader">
              <Button variant="download" className="px-6">
                Descargar video de LinkedIn
              </Button>
            </a>
          </div>

          {/* Por qué descargar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores casos de uso
            </h2>
            <p className="section-muted mb-4">
              El feed de LinkedIn se mueve rápido y los videos valiosos quedan sepultados
              bajo nuevas publicaciones. Descargar te permite conservar lo que importa,
              convirtiendo el scroll casual en recursos duraderos. No se trata de guardar
              todo, sino aquello que impulsa tu carrera o negocio, protegido de fallos o
              posts eliminados.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Acceso offline para profesionales
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda una charla de liderazgo o una estrategia de marketing para
                    vuelos o trayectos sin Wi-Fi. Los formadores descargan clips de
                    talleres para mostrarlos a los equipos sin depender de la conexión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Reutilizar contenido
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los marketers guardan casos de éxito para compartir en presentaciones
                    o en otras redes. Las personas en búsqueda laboral descargan tips de CV
                    para analizarlos y mejorar su discurso. Recorta los momentos clave y
                    úsalos en tus presentaciones sin empezar de cero.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Respaldar tus propias publicaciones
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si compartes actualizaciones o ideas, los cambios en la plataforma
                    pueden ocultarlas. Descárgalas en un disco seguro para proteger tu
                    trabajo de bloqueos o fallos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Capacitación y educación
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los equipos de RR. HH. guardan videos de onboarding para nuevas
                    contrataciones. Estudiantes descargan paneles y webinars para tomar
                    notas y repasar sin conexión.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Crecimiento personal
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda charlas motivacionales o consejos de networking para verlos
                    cuando necesites un impulso. Convierte un tip de un mentor en un
                    recordatorio diario sin buscarlo de nuevo en la app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de LinkedIn te da flexibilidad y comodidad para
              disfrutar el contenido a tu ritmo, ya sea para trabajo, aprendizaje o
              inspiración.
            </p>
          </div>

          {/* Para quién */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más se benefician
            </h2>
            <p className="section-muted mb-4">
              LinkedIn es un hub profesional, y descargar videos es ideal para quienes
              lo usan para crecer, aprender o construir relaciones. Es para quienes ven
              los posts como herramientas y no solo como noticias rápidas. Si eres
              activo y estratégico, marcará la diferencia.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Profesionales y managers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los gerentes guardan charlas de liderazgo para compartir con sus
                    equipos. Los marketers descargan anuncios y casos de competidores para
                    estudiar tendencias y reusar clips limpios en sus presentaciones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Buscadores de empleo y coaches de carrera
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga consejos de entrevistas o revisiones de CV para practicar
                    sin conexión. Los coaches reúnen historias de éxito de clientes para
                    mostrarlas en sesiones, sin marcas de agua.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Dueños de negocios y emprendedores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Las startups guardan pitches o análisis de industria para estudiar a
                    la competencia. Las pymes descargan testimonios de clientes para
                    integrarlos en sus webs o propuestas comerciales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Educadores y formadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los equipos de RR. HH. almacenan videos de cumplimiento para sesiones
                    internas. Docentes descargan paneles y charlas de expertos para
                    analizarlos en clase sin problemas de internet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Estudiantes y aprendices continuos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Descarga consejos de carrera o tutoriales técnicos y reviélos a tu
                    ritmo. Incluso usuarios casuales guardan clips motivacionales para
                    verlos durante la búsqueda de empleo o proyectos exigentes.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sea cual sea tu rol, descargar videos de LinkedIn ahorra tiempo, datos y
              esfuerzo, manteniendo tus contenidos favoritos al alcance.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de LinkedIn?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que necesitas saber sobre la ley
            </h2>
            <p className="section-muted mb-4">
              Descargar videos de LinkedIn es un área gris. Los creadores conservan los
              derechos de autor según leyes como la <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a>. Guardar
              para uso personal —por ejemplo revisar un webinar offline— suele
              considerarse uso legítimo. Pero compartir sin permiso o usarlo con fines
              comerciales puede acarrear problemas legales. El audio —música o voces—
              también puede tener derechos adicionales, aunque los guardados personales
              y cortos rara vez enfrentan conflictos.
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
                    Si el creador autoriza el uso o el video es de dominio público, no
                    hay problema. El uso educativo —como docentes mostrando clips en
                    clase— suele entrar en el uso justo. Revisa la descripción para ver si
                    hay permisos. Mantén los videos para uso privado y acredita al autor
                    cuando compartas para mantenerte seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riesgos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos de descargar videos de LinkedIn
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              Descargar desde sitios poco fiables parece sencillo, pero puede traer
              problemas reales. No todas las herramientas son seguras y un clic
              descuidado puede comprometer tu dispositivo o datos. Conoce los riesgos
              antes de pulsar «Descargar».
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware y virus">
                Sitios dudosos esconden virus en los archivos de video e instalan
                spyware o ransomware. Un mal download puede bloquear tus archivos o robar
                contraseñas. Algunos ocultan keyloggers, convirtiendo un simple clip en
                una filtración.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de phishing">
                Páginas falsas imitan el login de LinkedIn para robar credenciales.
                Pop-ups insistentes empujan "actualizaciones" que instalan rastreadores y
                siguen cada clic.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Pérdida de calidad">
                Herramientas de baja calidad comprimen en exceso, dejando el video con
                saltos o sin audio. Esperabas un webinar nítido y obtienes una versión
                borrosa.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de privacidad">
                Algunos servicios registran tus descargas y venden tu IP o preferencias a
                anunciantes. Los atacantes pueden usar esos datos para spam o fraudes.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bloqueos en LinkedIn">
                El uso intensivo de herramientas externas puede marcar tu cuenta,
                especialmente si publicas seguido. Podrías perder acceso a tu red o a tus
                contenidos.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Problemas de almacenamiento">
                Guardar muchos videos ocupa espacio y ralentiza móviles o discos. Archivos
                dañados pueden hacer fallar los reproductores y hacerte perder tiempo.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, analiza los archivos descargados y considera una VPN
              para reducir riesgos.
            </p>
          </div>

          {/* Por qué videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu aliado confiable para descargas de LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Lanzamos videodownload.io en 2022 porque estábamos hartos de herramientas
              sospechosas y apps lentas. Como usuarios de LinkedIn necesitábamos una
              forma rápida y limpia de guardar videos sin riesgos. Somos un equipo
              pequeño enfocado en hacer las descargas simples y seguras. Tras millones de
              usuarios y sin filtraciones de datos, seguimos mejorando según su feedback.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de cinco segundos">
                Los downloads se completan incluso en horas pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin anuncios ni pop-ups">
                Una interfaz limpia, nada más.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sin marcas de agua">
                Clips listos para usar.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Descargas ilimitadas">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
                Desde tablets antiguas hasta laptops nuevas.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema seguro">
                No guardamos datos tras la descarga.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Respuestas comunes sobre descargas de LinkedIn
            </h2>
            <p className="section-muted mb-4">
              Reunimos las preguntas más habituales sobre videodownload.io y cómo
              descargar videos de LinkedIn para que empieces con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos privados de LinkedIn?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo trabajamos con publicaciones públicas. Los videos privados o
                  de grupos requieren permiso del creador y respetamos ese límite.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar afecta el rendimiento de mi dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son ligeros y optimizados, así que no causan lag.
                  Aun así, controla tu almacenamiento si guardas muchos videos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué el video descargado no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn añade logotipos para rastrear compartidos, pero extraemos el
                  archivo original y lo limpiamos para que lo uses sin texto encima.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Ideal para extraer un
                  podcast o discurso sin las imágenes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué hago si la descarga falla?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica que el enlace sea público y empiece con linkedin.com. Prueba
                  otro navegador o limpia el caché. Nuestro chat de soporte puede ayudarte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay un límite de duración?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Gestionamos videos de hasta 60 minutos. Los más largos tardan un poco
                  más, pero se descargan completos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Guardan los videos que descargo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Para nada. Procesamos al instante y borramos todo. Los archivos solo
                  quedan en tu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿El creador sabe que descargué su video?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  LinkedIn no envía notificaciones. Tus descargas permanecen privadas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Empieza a guardar videos de LinkedIn hoy
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Consigue clips profesionales en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia el enlace de LinkedIn
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pégalo en nuestro sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descarga un video limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#linkedin-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Descargar video de LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Otros descargadores */}
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
      <FeatureCard icon={VideoIcon} title="Descargas en alta calidad">
        Consigue videos de LinkedIn en alta resolución, hasta 1080p cuando la
        publicación original lo soporta. Sin cuadros borrosos ni colores apagados al
        reproducirlos. Obtenemos el archivo directamente de los servidores de LinkedIn
        para conservar cada detalle.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin logos ni marcas">
        LinkedIn añade branding al guardar desde su app. Nosotros lo eliminamos para
        entregarte un clip limpio listo para tus presentaciones o uso personal.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en todos los dispositivos">
        Usa laptop, iPhone, Android o tablet: siempre funciona sin instalar nada.
        Solo abre nuestro sitio, pega el enlace y descarga. Probado en equipos viejos y
        nuevos.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Descargas rápidas y fiables">
        No pierdas el ritmo: nuestra herramienta obtiene los videos en segundos,
        normalmente menos de diez para la mayoría. Servidores cercanos a LinkedIn
        aseguran velocidad y estabilidad.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis y sin límites">
        Sin costos, sin registro, sin cargos ocultos. Descarga los videos que necesites
        cada día. Guarda tips profesionales sin preocuparte por un paywall.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso seguro y privado">
        Tus datos permanecen protegidos. No almacenamos enlaces ni videos después del
        proceso. Nada de rastreos ni anuncios molestos.
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
      <StepCard step={1} title="Copia el enlace del post en LinkedIn">
        <a href="http://www.linkedin.com">Abre LinkedIn</a> en tu móvil o navegador.
        Busca el video que quieres guardar, como un tip de entrevista o un anuncio de
        empresa. Toca los tres puntos en la esquina superior derecha y elige
        "Copiar enlace de la publicación" para obtener la URL completa (ej. linkedin.com/posts/usuario_123456).
        Verifica que sea correcta.
      </StepCard>
      <StepCard step={2} title="Pega el enlace en nuestra web">
        Ve a videodownload.io. Verás un campo "Pega aquí tu enlace de LinkedIn".
        Haz clic y pega la URL copiada. Asegúrate de que empiece por linkedin.com para
        evitar errores. Solo funcionan publicaciones públicas; los contenidos privados o
        de grupos no se procesan.
      </StepCard>
      <StepCard step={3} title="Procesamos el video por ti">
        Presiona el botón azul "Download" junto al campo. Nuestro sistema obtiene el
        video desde los servidores de LinkedIn en segundos, elimina marcas de agua y
        revisa la calidad. El audio se mantiene claro, ideal para paneles o charlas.
      </StepCard>
      <StepCard step={4} title="Guarda el clip en tu dispositivo">
        Elige entre MP4 (video con sonido) o MP3 (solo audio). Para la mayoría de casos,
        selecciona MP4. El archivo se descargará en tu carpeta de descargas o galería.
        Renómbralo, por ejemplo "charla_carrera.mp4", y reprodúcelo para confirmar que
        todo está perfecto.
      </StepCard>
    </div>
  );
}
