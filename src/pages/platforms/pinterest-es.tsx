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

export default function PinterestPageEs() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Video Pinterest | Gratis & HD",
    description:
      "Descarga videos y pines de Pinterest en mp4 y calidad 1080p. Downloader y conversor de video online gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Pinterest" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Caja de descarga minimalista */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Descargar video de Pinterest
          </h1>
          <div id="pinterest-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega la URL de un video o pin de Pinterest"
            />
          </div>
          {/* Características */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga videos de Pinterest sin complicaciones
          </h2>
          <p className="text-muted-foreground mb-6">
            Guía rápida para guardar clips creativos y verlos sin conexión
          </p>

          <EnhancedFeatures />

          {/* Cómo descargar */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo descargar videos de Pinterest
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Pasos claros y sencillos para guardar contenido
          </h2>
          <p className="text-muted-foreground mb-6">
            Con videodownload.io llevar un video de Pinterest a tu dispositivo toma solo unos minutos. Sigue estos cuatro
            pasos intuitivos —incluso si no eres experto en tecnología— y descarga cualquier clip al instante.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#pinterest-downloader">
              <Button variant="download" className="px-6">
                Descargar video de Pinterest
              </Button>
            </a>
          </div>

          {/* Por qué descargar */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué descargar videos de Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores casos de uso
            </h2>
            <p className="section-muted mb-4">
              Pinterest es una fuente inagotable de inspiración, pero el feed cambia rápido y los pines se pierden. Descargar te
              permite conservar los videos que despiertan ideas, convirtiendo hallazgos fugaces en una colección personal. Se
              trata de guardar lo que impulsa tu creatividad o proyectos, no de acumular por acumular. Mantén el control incluso
              si los pines se eliminan o la app falla.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Visionado offline
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guarda tutoriales DIY o guías de viaje para vuelos, escapadas o lugares sin Wi-Fi. Familias descargan ideas
                    creativas para entretener a los niños sin conexión.
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
                    Bloggers guardan clips de decoración para adaptarlos con sus propios consejos. Pequeños negocios descargan
                    demostraciones de productos para mostrarlas en otros canales sin marcas de agua.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Respaldar tus propios pines
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Si publicas videos, un cambio de tablero o un error puede ocultarlos. Descárgalos en un disco para proteger
                    recetas, tutoriales o piezas de portafolio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje y planificación
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estudiantes guardan tutoriales artísticos o tips de estudio para practicar offline. Organizadores de eventos
                    descargan ideas de decoración para enseñarlas a clientes sin tener que buscarlas de nuevo.
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
                    Conserva tips de jardinería o rutinas de ejercicio para consultarlos a diario. Un pin guardado a tiempo puede
                    convertirse en tu próximo gran proyecto.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar videos de Pinterest te ofrece flexibilidad y comodidad para disfrutar el contenido a tu manera, ya sea
              por trabajo, estudio o diversión.
            </p>
          </div>

          {/* Para quién */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién debería descargar videos de Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que más se benefician
            </h2>
            <p className="section-muted mb-4">
              Pinterest va de ideas, pero descargar videos es ideal para quienes las convierten en acción. Si usas la plataforma
              para crear, planificar o aprender —más que para scrollear— el descargador se vuelve esencial.
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
                    Guardan clips DIY o de moda para adaptarlos con su sello personal y mantener copias limpias de sus propios
                    videos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados y amantes del DIY
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Artesanos, pintores y jardineros siguen tutoriales paso a paso sin depender de conexión. Los proyectos se
                    vuelven más fáciles al tener las instrucciones a mano.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Organizadores y pequeños negocios
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Planner de bodas y eventos descargan ideas para mostrarlas sin depender del buscador. Emprendedores usan
                    testimonios o demos para generar confianza.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Padres y educadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Profesores guardan actividades para el aula. Madres, padres y cuidadores descargan juegos sensoriales listos
                    para un día sin pantallas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Propietarios y renovadores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Guardan ideas de reformas, hacks de muebles o proyectos de decoración para planificar mejoras. Incluso
                    usuarios casuales descargan videos motivacionales para mantener sus metas a la vista.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sea cual sea tu perfil, descargar videos de Pinterest ahorra tiempo, datos y esfuerzo, manteniendo el contenido
              clave siempre accesible.
            </p>
          </div>

          {/* Aspectos legales */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es legal descargar videos de Pinterest?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo que debes saber sobre derechos de autor
            </h2>
            <p className="section-muted mb-4">
              Los videos pertenecen a sus creadores y están protegidos por leyes como la DMCA. Guardar para uso personal —por
              ejemplo, practicar un tutorial offline— suele encajar como fair use. Compartir sin crédito o monetizar el contenido
              puede provocar problemas legales. El audio también puede tener derechos adicionales.
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
                    Si el creador indica que puedes descargar o el contenido es de dominio público, adelante. El uso educativo
                    —como mostrar un tutorial en clase— suele considerarse legítimo. Mantén los archivos para uso privado y da
                    crédito cuando compartas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Riesgos */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Riesgos al descargar videos de Pinterest
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros potenciales y cómo evitarlos
            </h2>
            <p className="section-muted mb-4">
              No todos los sitios para descargar son seguros. Algunos comprometen tus dispositivos o datos. Antes de descargar,
              asegúrate de confiar en la fuente.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard tone="red" icon={AlertTriangle} title="Malware y virus">
                Páginas dudosas esconden spyware o ransomware en los archivos. Un solo download malicioso puede bloquear tus
                documentos o robar contraseñas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de phishing">
                Formularios falsos imitan el acceso de Pinterest y capturan tus credenciales. Pop-ups con supuestas actualizaciones
                instalan rastreadores.
              </FeatureCard>
              <FeatureCard tone="red" icon={FileX} title="Baja calidad">
                Herramientas deficientes comprimen demasiado los videos, dejando cortes y audio desfasado.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de privacidad">
                Algunos servicios registran qué descargas y venden tu IP o intereses a terceros. Los atacantes podrían usar esa
                información para spam o fraudes.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Posibles bloqueos">
                Un uso excesivo de herramientas externas puede marcar tu cuenta Pinterest, en especial si publicas contenido con
                frecuencia.
              </FeatureCard>
              <FeatureCard tone="red" icon={AlertCircle} title="Almacenamiento lleno">
                Descargar muchos videos consume rápido el espacio y ralentiza dispositivos. Archivos dañados pueden bloquear el
                reproductor.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, analiza los archivos descargados y considera una VPN para añadir una capa extra de seguridad.
            </p>
          </div>

          {/* Por qué videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por qué usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu aliado seguro para Pinterest
            </h2>
            <p className="section-muted mb-4">
              Creamos videodownload.io en 2022 cansados de apps lentas y sitios inseguros. Como usuarios de Pinterest, queríamos
              una forma limpia y rápida de guardar ideas sin riesgos. Nuestro equipo pequeño se centra en entregar descargas
              fiables y sin filtraciones, respaldado por millones de usuarios satisfechos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de cinco segundos">
                Descargas listas incluso en horas punta.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin anuncios">
                Interfaz limpia y enfocada.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Sin marcas de agua">
                Clips listos para usar en presentaciones y proyectos.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Descargas ilimitadas">
                Sin límites diarios ni cargos ocultos.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
                Desde tablets antiguas hasta portátiles nuevos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Proceso seguro">
                No guardamos ningún dato tras la descarga.
              </FeatureCard>
            </div>
          </div>

          {/* FAQ */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Todo sobre las descargas de Pinterest
            </h2>
            <p className="section-muted mb-4">
              Reunimos las dudas más comunes sobre videodownload.io y cómo descargar videos de Pinterest para que empieces con
              total confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar videos de tableros secretos?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Solo soportamos pines públicos. Los contenidos privados necesitan permiso del creador y respetamos esa regla.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Descargar ralentiza mi dispositivo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Nuestros archivos son ligeros y limpios. Solo cuida tu almacenamiento si guardas muchos videos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi archivo no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Obtenemos la versión original del video y eliminamos superposiciones para que lo uses sin logotipos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar solo el audio?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí. Elige MP3 después de pegar el enlace para conservar únicamente el sonido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Qué hago si la descarga falla?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Verifica que el pin sea público y que la URL comience con pinterest.com. Prueba otro navegador o limpia la caché.
                  Nuestro chat de soporte puede ayudarte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay límite de duración?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Procesamos videos de hasta 60 minutos. Los más largos toman un poco más, pero se descargan completos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Guardan los videos que descargo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Gestionamos la petición al instante y eliminamos todo. Los archivos solo quedan en tu dispositivo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border-b border-primary/10">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿El creador recibe alguna notificación?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No. Pinterest no avisa. Tus descargas se mantienen privadas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Empieza a guardar videos de Pinterest hoy mismo
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Descarga clips inspiradores en segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia el enlace de Pinterest
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pégalo en nuestro sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descarga el video limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#pinterest-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Descargar video de Pinterest
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
      <FeatureCard icon={VideoIcon} title="Calidad de video premium">
        Guarda videos de Pinterest en su mejor resolución, hasta 1080p si el pin original lo soporta. Sin imágenes borrosas ni colores desteñidos al reproducir. Extraemos el archivo directamente desde los servidores de Pinterest, conservando cada detalle nítido para ese tutorial DIY o receta.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin marcas de agua ni superposiciones">
        <a href="https://help.pinterest.com/es/article/download-an-image">Pinterest muestra el nombre de usuario del creador en los videos descargados a través de su app</a>, saturando la vista. Eliminamos todo eso, entregándote un clip limpio listo para tus proyectos o uso personal. Mira esa idea de decoración sin texto bloqueando los detalles.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en cualquier dispositivo">
        Usa tu teléfono, tablet, laptop o computadora de escritorio, y funciona perfectamente. Sin apps ni software adicional necesario. Simplemente abre nuestro sitio en tu navegador, pega el enlace y descarga. Probado en todo, desde viejos iPhone hasta PCs nuevos, siempre es fácil.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Velocidades de descarga rápidas">
        Esperar es molesto. Nuestra herramienta obtiene videos de Pinterest en segundos, generalmente menos de 10 para la mayoría de clips. Usamos servidores cercanos a Pinterest para extracciones rápidas, permitiéndote guardar un video de manualidades o ejercicio durante un descanso.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Completamente gratis">
        Sin costos, sin registros, sin cargos ocultos. Descarga todos los videos que quieras, cada día, sin límites. Lo mantenemos gratuito para que puedas guardar esa inspiración de bodas o ese proyecto artístico sin encontrar un muro de pago.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso seguro y privado">
        Tu información permanece segura. No almacenamos tus enlaces o videos después de la descarga. Sin rastreo, sin registros y sin anuncios invasivos. El proceso es limpio, manteniendo tu dispositivo libre de basura o riesgos.
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
      <StepCard step={1} title="Copia el enlace del video desde Pinterest">
        <a href="http://www.pinterest.com">Abre Pinterest</a> en tu teléfono o navegador. Encuentra el video que te gusta, como un tutorial de tejido o un cambio de imagen del hogar. Haz clic en los tres puntos en la parte superior derecha del pin. Del menú, selecciona "Copiar enlace". Esto captura la URL completa, algo como pinterest.com/pin/123456789. Asegúrate de que sea exacta.
      </StepCard>
      <StepCard step={2} title="Pega el enlace en nuestro sitio">
        Ve a videodownload.io en tu navegador. Verás un cuadro que dice "Pega aquí el enlace de Pinterest". Haz clic dentro y pega el enlace copiado. Verifica que comience con pinterest.com para evitar errores. Solo funcionan pines públicos; los videos de tableros privados o secretos no se descargarán.
      </StepCard>
      <StepCard step={3} title="Obtenemos y limpiamos el video">
        Haz clic en el botón verde "Download" junto al cuadro. Nuestro sistema extrae el video de los servidores de Pinterest en segundos. Eliminamos cualquier marca de agua y aseguramos una calidad sólida. El audio permanece claro, así no te pierdes pasos en esa receta o guía de manualidades.
      </StepCard>
      <StepCard step={4} title="Guarda el clip en tu dispositivo">
        Obtendrás opciones: MP4 para el video completo con sonido o MP3 solo para el audio. Elige MP4 para la mayoría de clips. Toca para descargar y se guarda en tu carpeta de Descargas o galería del teléfono. Nómbralo claramente, como "diy_pintura.mp4", antes de guardar. Reprodúcelo para confirmar que es perfecto.
      </StepCard>
    </div>
  );
}
