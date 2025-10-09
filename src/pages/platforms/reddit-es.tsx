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

export default function RedditPage() {
  const { buildUrl } = useLanguageNavigation();

  usePageMeta({
    title: "Descargar Vídeos de Reddit | Gratis & HD",
    description: "Descarga vídeos y publicaciones de Reddit en mp4, calidad 1080p. Descargador y convertidor de vídeos en línea gratuito."
  });

  return (
    <div className="min-h-screen relative">
      <PlatformSubheader platform="Reddit" />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-xl border border-primary/10 bg-card/40 p-6 md:p-8 shadow-lg backdrop-blur text-foreground">
          {/* Minimal Download Box */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Descargar video de Reddit
          </h1>
          <div id="reddit-downloader" className="mb-10">
            <VideoDownloader
              boxOnly
              inputPlaceholder="Pega una URL de vídeo o publicación de Reddit"
            />
          </div>
          {/* Features */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Características
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Descarga Vídeos de Reddit Sin Esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu Guía Directa para Guardar Clips Sin Conexión
          </p>

          <EnhancedFeatures />

          {/* How to Download */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Cómo Descargar Vídeos de Reddit
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Una Guía Clara, Paso a Paso para Guardar Vídeos Sin Esfuerzo
          </h2>
          <p className="text-muted-foreground mb-6">
            Obtener vídeos de Reddit en tu dispositivo es simple con
            videodownload.io. Sigue estos cuatro pasos sencillos para
            descargar cualquier vídeo en minutos. Cada paso está diseñado para ser
            intuitivo, incluso si no eres experto en tecnología.
          </p>
          <EnhancedSteps />
          <div className="text-center mt-6 mb-10">
            <a href="#reddit-downloader">
              <Button variant="download" className="px-6">
                Descargar Vídeo de Reddit
              </Button>
            </a>
          </div>

          {/* Why Download */}
          <div className="section-block section-why mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Qué Descargar Vídeos de Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Mejores Casos de Uso
            </h2>
            <p className="section-muted mb-4">
              El feed de Reddit es una mezcla salvaje de ideas, pero los buenos vídeos se entierran rápido. Descargar te permite conservar los clips que te impactan, convirtiendo scrolls rápidos en una colección personal. Se trata de guardar lo que inspira, enseña o te hace reír, no solo coleccionar publicaciones aleatorias. Tú controlas tu colección, a salvo de hilos eliminados o cambios en la app.
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
                    Guarda tutoriales o clips de noticias para vuelos, viajes o lugares con mal Wi-Fi. Los padres descargan animaciones aptas para niños para viajes en coche, manteniendo a los niños felices sin buffering.
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
                    Los bloggers toman clips virales para remezclarlos en su contenido, añadiendo comentarios o ediciones. Los streamers guardan momentos de juego para analizar o compartir en otras plataformas, evitando marcas de agua para un uso limpio.
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
                    Si compartes vídeos en Reddit, pueden desaparecer por bans de subreddit o fallos de plataforma. Descárgalos a un disco para proteger tu trabajo, como una demo de proyecto o vlog personal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aprendizaje y Pasatiempos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los estudiantes guardan demos científicas o consejos de programación para estudiar sin conexión. Los aficionados descargan guías DIY o tutoriales de arte para practicar a su ritmo, sin necesidad de buscar en subreddits otra vez.
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
                    Guarda el clip gracioso de un amigo o un destacado de la comunidad para enviar en chats o guardar para más tarde. Es una forma de conservar recuerdos sin depender de la app.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Descargar vídeos de Reddit ofrece flexibilidad y comodidad,
              facilitando disfrutar el contenido en tus términos, ya sea por diversión,
              trabajo o aprendizaje.
            </p>
          </div>

          {/* Who Should Download */}
          <div className="section-block section-who mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Quién Debería Descargar Vídeos de Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Personas que Más Se Benefician de Descargar
            </h2>
            <p className="section-muted mb-4">
              Reddit es un centro para comunidades nicho, pero descargar vídeos se ajusta a personas que lo usan para aprender, crear o conectar. Es para aquellos que ven las publicaciones como más que entretenimiento, convirtiendo clips en herramientas o recuerdos. Si eres activo en subreddits y quieres conservar lo que importa, descargar es tu movimiento.
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
                    Los streamers y vloggers guardan clips de juegos o vídeos de reacción para remezclar para su audiencia. También descargan sus propias publicaciones, manteniendo copias limpias sin logos para ediciones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Aficionados y Bricoladores
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los artesanos guardan tutoriales de carpintería o costura para seguir en casa. Los gamers descargan clips de estrategia para estudiar movimientos. Es inspiración práctica, lista sin conexión.
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
                    Los profesores guardan vídeos de demostración para clase, como experimentos de física. Los estudiantes toman consejos de estudio o lecciones de idiomas para revisar sin volver a iniciar sesión.
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
                    Los padres guardan clips graciosos de niños o vídeos de mascotas para compartir en reuniones. Los amigos descargan destacados de subreddit para reír más tarde.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 section-muted">
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Pequeñas Empresas y Marketers
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Las tiendas guardan reseñas de usuarios o demos de productos para presentar en sitios web. Los profesionales de redes sociales toman clips de tendencia para analizar o reutilizar, manteniendo su contenido fresco.
                  </p>
                </div>
              </div>
            </div>
            <p className="section-muted">
              Sin importar tu rol o estilo de vida, descargar vídeos de Reddit puede
              ahorrar tiempo, datos y esfuerzo mientras mantiene tu contenido favorito
              accesible.
            </p>
          </div>

          {/* Legal */}
          <div className="section-block section-legal mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              ¿Es Legal Descargar Vídeos de Reddit?
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Lo Que Necesitas Saber Sobre la Ley
            </h2>
            <p className="section-muted mb-4">
              Los vídeos están protegidos por derechos de autor por sus creadores bajo leyes como la <a href="https://es.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">DMCA</a> en EE.UU. Guardar para visualización privada, como ver un tutorial sin conexión, a menudo cuenta como uso justo. Pero compartir sin permiso o usar con fines lucrativos puede llevar a problemas legales. La música o voces en off en vídeos pueden tener capas adicionales de derechos de autor, aunque las guardadas personales cortas rara vez enfrentan problemas.
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
                    Si el creador permite descargas o el contenido es de dominio público, estás bien. El uso educativo, como mostrar un clip en clase, a menudo califica como uso justo. Revisa los comentarios de las publicaciones para permisos. Mantén las descargas privadas y acredita a los creadores si compartes para estar seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="section-block section-risks mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Los Riesgos Asociados con Descargar Vídeos de Reddit
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Peligros Potenciales y Cómo Evitarlos
            </h2>
            <p className="section-muted mb-4">
              Los descargadores de terceros parecen fáciles, pero los dudosos traen problemas reales. No todos los sitios son confiables, y hacer clic descuidadamente puede dañar tu dispositivo o datos. Conoce los riesgos antes de empezar para evitar problemas más adelante.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
              <FeatureCard
                tone="red"
                icon={AlertTriangle}
                title="Malware"
              >
                Los sitios poco confiables ocultan virus en archivos de vídeo, introduciendo spyware o ransomware. Una mala descarga puede bloquear tus archivos o robar contraseñas. Algunas herramientas han sido atrapadas con keyloggers, convirtiendo un guardado de meme en una violación de datos.
              </FeatureCard>
              <FeatureCard tone="red" icon={Shield} title="Estafas de Phishing">
                Las páginas falsas de descarga imitan el inicio de sesión de Reddit, tomando tus credenciales si las ingresas. O los anuncios empujan "actualizaciones" que instalan rastreadores, vigilando tu actividad más allá de la plataforma.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={FileX}
                title="Problemas de Calidad"
              >
                Los sitios malos comprimen vídeos, causando reproducción entrecortada o pérdida de audio. Querías un tutorial claro, pero obtienes un archivo con errores en su lugar.
              </FeatureCard>
              <FeatureCard tone="red" icon={EyeOff} title="Fugas de Privacidad">
                Algunos sitios registran tus descargas, vendiendo tu IP o elecciones de vídeo a anunciantes. Los hackers podrían obtener esos datos, llevando a spam o estafas dirigidas.
              </FeatureCard>
              <FeatureCard tone="red" icon={Ban} title="Bans de Reddit">
                El uso intensivo de herramientas de terceros puede marcar tu cuenta, especialmente para publicadores activos. Podrías perder tu perfil o karma de la noche a la mañana.
              </FeatureCard>
              <FeatureCard
                tone="red"
                icon={AlertCircle}
                title="Sobrecarga de Almacenamiento"
              >
                Guardar muchos vídeos consume espacio, ralentizando teléfonos o discos. Los archivos corruptos pueden hacer que los reproductores se bloqueen, perdiendo tiempo para arreglar.
              </FeatureCard>
            </div>
            <p className="section-muted">
              Usa sitios confiables, escanea descargas y considera VPNs para estar seguro.
            </p>
          </div>

          {/* Why Use videodownload.io */}
          <div className="section-block section-whyuse mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">
              Por Qué Usar videodownload.io
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Tu Socio de Confianza para Descargas de Reddit
            </h2>
            <p className="section-muted mb-4">
              Iniciamos videodownload.io en 2022 porque estábamos cansados de herramientas dudosas y apps lentas. Como usuarios de Reddit, queríamos una forma rápida y limpia de guardar vídeos sin riesgos. Somos un equipo pequeño, no una gran empresa, enfocados en hacer las descargas fáciles y seguras. Millones de usuarios confían en nosotros sin fugas de datos, y seguimos mejorando según sus comentarios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-2">
              <FeatureCard icon={Zap} title="Menos de Cinco Segundos">
                Las descargas se completan incluso en horas pico.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Sin Anuncios ni Ventanas Emergentes">
                Solo un sitio limpio.
              </FeatureCard>
              <FeatureCard icon={VideoIcon} title="Marcas de Agua Eliminadas">
                Clips puros y utilizables.
              </FeatureCard>
              <FeatureCard icon={ListChecks} title="Guardadas Ilimitadas">
                Sin límites diarios.
              </FeatureCard>
              <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
                Desde teléfonos viejos hasta portátiles nuevos.
              </FeatureCard>
              <FeatureCard icon={Shield} title="Sistema Seguro">
                No se almacenan datos después de terminar.
              </FeatureCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="section-block section-faqs mb-8 md:mb-10">
            <h1 className="section-title text-3xl md:text-4xl">Preguntas Frecuentes</h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Preguntas Comunes Sobre Descargas de Reddit
            </h2>
            <p className="section-muted mb-4">
              Hemos compilado respuestas a las preguntas más frecuentes sobre el uso de
              videodownload.io y la descarga de vídeos de Reddit para ayudarte a
              comenzar con confianza.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo descargar vídeos de subreddits privados de Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  No, solo manejamos publicaciones públicas. Los vídeos de subreddits privados o restringidos necesitan permiso del creador o moderador, y respetamos esos límites para mantenernos legítimos.
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
                  Nuestros archivos son limpios y ligeros, así que sin lag. Pero guardar muchos vídeos puede llenar el almacenamiento, así que vigila tu espacio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Por qué mi vídeo no tiene marca de agua?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit añade logos para rastrear compartidos, pero extraemos el archivo sin procesar y los eliminamos para un guardado limpio que puedes usar libremente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Puedo guardar solo el audio de un vídeo de Reddit?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Sí, elige MP3 después de pegar el enlace. Genial para tomar clips de podcast o música de vídeos sin los visuales.
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
                  Verifica que el enlace sea público y comience con reddit.com. Prueba otro navegador o limpia el caché. Nuestro chat de soporte soluciona problemas rápido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Hay un límite en la duración del vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Manejamos vídeos de hasta 60 minutos, aunque la mayoría de los clips de Reddit son cortos. Los más largos toman un poco pero se descargan completamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border-b border-primary/10"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  ¿Almacenan mis vídeos descargados?
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
                  ¿Pueden los publicadores ver si descargué su vídeo?
                </AccordionTrigger>
                <AccordionContent className="section-muted">
                  Reddit no los notifica. Tu descarga permanece privada, sin alertas para el creador.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Start Downloading Now */}
          <div className="section-block section-cta mb-2 text-center">
            <h1 className="section-title text-3xl md:text-4xl">
              Comienza a Guardar Vídeos de Reddit Hoy
            </h1>
            <h2 className="section-subtitle text-xl md:text-2xl">
              Obtén Tus Clips Favoritos en Segundos
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Copia el Enlace de la Publicación de Reddit
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Pega en Nuestro Sitio
              </div>
              <div className="flex items-center justify-center gap-2 section-muted">
                <CheckCircle className="w-5 h-5 text-accent" />
                Descarga Vídeo Limpio
              </div>
            </div>
            <div className="mt-2">
              <a href="#reddit-downloader">
                <Button variant="download" size="lg" className="px-8">
                  <Download className="w-5 h-5" />
                  Descargar Vídeo de Reddit
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
                        Descargar Vídeo de {p.name}
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
      <FeatureCard icon={VideoIcon} title="Calidad de Vídeo Nítida">
        Guarda vídeos de Reddit en su resolución completa, hasta 1080p si la publicación original lo soporta. Sin visuales borrosos o colores deslavados cuando veas más tarde. Tomamos el archivo directamente de los servidores de Reddit, manteniendo cada cuadro nítido para ese clip de juego o tutorial.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Sin Marcas de Agua ni Logos">
        Reddit pone su marca en los vídeos guardados a través de su app, desordenando la pantalla. Eliminamos todo eso, dándote un clip limpio listo para compartir o editar. Mira ese vídeo gracioso de mascota o demo técnica sin superposiciones de texto en el camino.
      </FeatureCard>
      <FeatureCard icon={Monitor} title="Funciona en Cualquier Dispositivo">
        Usa tu teléfono, tableta, PC o portátil, y funciona sin problemas. No se necesitan apps ni software adicional. Solo abre nuestro sitio en tu navegador, pega el enlace y descarga. Probado en todo, desde Androids viejos hasta Macs nuevos, siempre es confiable.
      </FeatureCard>
      <FeatureCard icon={Zap} title="Descargas Rápidas">
        Esperar es un fastidio. Nuestra herramienta extrae vídeos de Reddit en segundos, generalmente menos de 10 para la mayoría de los clips. Usamos servidores cerca de los de Reddit para extracciones rápidas, así que puedes guardar un meme o clip de noticias durante un descanso rápido.
      </FeatureCard>
      <FeatureCard icon={ListChecks} title="Gratis Sin Límites">
        Sin tarifas, sin registros, sin costos ocultos. Descarga tantos vídeos como quieras, cada día, sin restricciones. Lo mantenemos gratuito para que puedas guardar ese momento viral o consejo DIY sin topar con un muro de pago.
      </FeatureCard>
      <FeatureCard icon={Shield} title="Proceso Seguro y Privado">
        Tus datos permanecen seguros. No almacenamos tus enlaces o vídeos después de descargar. Sin rastreo, sin registros, y sin anuncios spam. El proceso es limpio, manteniendo tu dispositivo libre de basura o riesgos.
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
      <StepCard step={1} title="Copia el Enlace del Vídeo desde Reddit">
        <a href="http://www.reddit.com">Abre Reddit</a> en tu teléfono o navegador. Encuentra el vídeo que te gusta, tal vez un truco de cocina o un momento destacado de juego. Haz clic en el ícono de compartir debajo de la publicación, una pequeña flecha apuntando hacia arriba. Del menú, elige "Copiar enlace." Esto toma la URL completa, como reddit.com/r/subreddit/comments/abc123. Verifica que esté correcta.
      </StepCard>
      <StepCard step={2} title="Pega el Enlace en Nuestra Herramienta">
        Ve a videodownload.io en tu navegador. Verás una caja etiquetada "Pega el enlace de Reddit aquí." Haz clic dentro y pega el enlace copiado. Asegúrate de que comience con reddit.com para evitar errores. Solo funcionan publicaciones públicas; los vídeos de subreddits privados o restringidos no se descargarán.
      </StepCard>
      <StepCard step={3} title="Recuperamos y Preparamos el Vídeo">
        Haz clic en el botón azul "Descargar" junto a la caja. Nuestro sistema extrae el vídeo de los servidores de Reddit en segundos. Quitamos las marcas de agua y verificamos la calidad, así obtienes un clip suave. El audio permanece claro, sin errores ni sonido faltante.
      </StepCard>
      <StepCard step={4} title="Guarda el Clip en Tu Dispositivo">
        Verás opciones: MP4 para el vídeo completo con sonido o MP3 para solo el audio. Elige MP4 para la mayoría de los clips. Toca para descargar, y llega a tu carpeta de Descargas o galería del teléfono. Nómbralo algo simple, como "meme_clip.mp4," antes de guardar. Reprodúcelo para confirmar que está bien.
      </StepCard>
    </div>
  );
}
