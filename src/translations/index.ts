export type Language = 'en' | 'fr' | 'it' | 'pt' | 'es' | 'nl' | 'de' | 'vi' | 'id';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Download videos, audio, and images from 40+ social media platforms. Fast, free, and without watermarks.',
    inputPlaceholder: 'Paste video URL here (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Download',
    processing: 'Processing...',
    supportText: 'Supports 40+ platforms • No registration required • Fast & secure',
    
    // Results section
    downloadOptions: 'Download Options',
    creator: 'Creator:',
    startingDownload: 'Starting Download...',
    directDownloadInitiated: 'Direct download initiated',
    downloadFailed: 'Download Failed',
    unableToDownload: 'Unable to download the file. Please try again.',
    invalidUrl: 'Invalid URL',
    enterValidUrl: 'Please enter a valid video URL',
    downloadReady: 'Download Ready!',
    processedSuccessfully: 'Your video has been processed successfully',
    
    // No results
    noDownloadOptions: 'No download options available',
    tryDifferentUrl: 'Please try a different URL or check that the content is publicly accessible',
    responseStatus: 'Response status:',
    
    // Platforms and features
    supportedPlatforms: 'Supported Platforms',
    keyFeatures: 'Key Features',
    highQuality: 'High Quality',
    highQualityDesc: 'Download videos in the highest available quality, up to 4K resolution for maximum clarity.',
    noWatermarks: 'No Watermarks',
    noWatermarksDesc: 'Get clean downloads without watermarks from supported platforms for professional use.',
    manyPlatforms: '40+ Platforms',
    manyPlatformsDesc: 'Support for all major social media and video platforms with regularly updated compatibility.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Fast & Free Video Downloader',
    
    // Language selector
    languageSelector: 'Language',
    english: 'English',
    french: 'French',
    italian: 'Italian',
    portuguese: 'Portuguese',
    spanish: 'Spanish',
    dutch: 'Dutch',
    german: 'German',
    vietnamese: 'Vietnamese',
    indonesian: 'Indonesian',

    // YouTube page specific content
    youtube: {
      inputPlaceholder: 'Paste a YouTube video, Shorts, or playlist URL',
      features: 'Features',
      featuresSubtitle: 'Features That Make Downloading YouTube Videos Simple and Reliable',
      featuresDescription: 'Here are six powerful features that make videodownload.io the go-to choice for downloading YouTube videos quickly, safely, and efficiently. Each feature is designed to enhance your experience and provide flexibility for all your downloading needs.',
      howToDownload: 'How to Download YouTube Videos',
      howToDownloadSubtitle: 'A Clear, Step-by-Step Guide to Save Videos Effortlessly',
      howToDownloadDescription: 'Getting YouTube videos onto your device is simple with videodownload.io. Follow these four straightforward steps to download any video in minutes. Each step is designed to be intuitive, even if you\'re not tech-savvy.',
      downloadYouTubeVideo: 'Download YouTube Video',
      whyDownload: 'Why Download YouTube Videos',
      whyDownloadSubtitle: 'Top Use Cases for Offline Video Access',
      whyDownloadDescription: 'Downloading YouTube videos gives you the freedom to watch content anytime, anywhere, without relying on an internet connection. Whether you\'re saving data, preparing for a trip, or archiving content, offline videos are incredibly useful. Below are some of the best reasons to download YouTube videos for personal use.',
      whoShouldDownload: 'Who Should Download YouTube Videos',
      whoShouldDownloadSubtitle: 'People Who Benefit Most from Offline Videos',
      whoShouldDownloadDescription: 'Downloading YouTube videos isn\'t just for casual viewers it\'s a game‑changer for specific groups who need offline access for work, creativity, or convenience. Here\'s a look at who can get the most out of downloading YouTube videos and why it\'s worth doing.',
      isItLegal: 'Is It Legal to Download YouTube Videos?',
      isItLegalSubtitle: 'What You Need to Know About the Law',
      risks: 'Risks of Downloading YouTube Videos',
      risksSubtitle: 'Potential Dangers and How to Avoid Them',
      risksDescription: 'While downloading YouTube videos is convenient, it comes with risks if you use the wrong tools or ignore legal boundaries. Being aware of these dangers helps you make smart choices and protect your device and data. Here are the main risks to watch out for.',
      whyUse: 'Why Use videodownload.io',
      whyUseSubtitle: 'Your Trusted Partner for YouTube Downloads',
      whyUseDescription: 'We launched videodownload.io to provide a safe, simple, and fast way to download YouTube videos without the headaches of sketchy websites. Our mission was to create a clean platform that cuts through the noise of ad-heavy, risky downloaders. Here are six reasons why videodownload.io stands out as the best choice for your YouTube video downloads.',
      faqs: 'FAQs',
      faqsSubtitle: 'Common Questions About videodownload.io and YouTube Downloads',
      faqsDescription: 'We\'ve compiled answers to the most frequent questions about using videodownload.io and downloading YouTube videos to help you get started with confidence.',
      startDownloading: 'Start Downloading Now',
      startDownloadingSubtitle: 'Get Your YouTube Videos in Seconds',
      exploreMore: 'Explore More Downloaders',
      exploreMoreSubtitle: 'Download from your favorite platforms'
    }
  },
  
  fr: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Téléchargez des vidéos, de l\'audio et des images à partir de plus de 40 plateformes de médias sociaux. Rapide, gratuit et sans filigranes.',
    inputPlaceholder: 'Collez l\'URL de la vidéo ici (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Télécharger',
    processing: 'En cours...',
    supportText: 'Compatible avec plus de 40 plateformes • Pas d\'inscription requise • Rapide et sécurisé',
    
    // Results section
    downloadOptions: 'Options de téléchargement',
    creator: 'Créateur:',
    startingDownload: 'Début du téléchargement...',
    directDownloadInitiated: 'Téléchargement direct lancé',
    downloadFailed: 'Échec du téléchargement',
    unableToDownload: 'Impossible de télécharger le fichier. Veuillez réessayer.',
    invalidUrl: 'URL invalide',
    enterValidUrl: 'Veuillez entrer une URL vidéo valide',
    downloadReady: 'Téléchargement prêt !',
    processedSuccessfully: 'Votre vidéo a été traitée avec succès',
    
    // No results
    noDownloadOptions: 'Aucune option de téléchargement disponible',
    tryDifferentUrl: 'Veuillez essayer une autre URL ou vérifier que le contenu est accessible publiquement',
    responseStatus: 'Statut de la réponse:',
    
    // Platforms and features
    supportedPlatforms: 'Plateformes prises en charge',
    keyFeatures: 'Fonctionnalités clés',
    highQuality: 'Haute qualité',
    highQualityDesc: 'Téléchargez des vidéos dans la plus haute qualité disponible, jusqu\'à la résolution 4K pour une clarté maximale.',
    noWatermarks: 'Sans filigranes',
    noWatermarksDesc: 'Obtenez des téléchargements propres sans filigranes à partir des plateformes prises en charge pour un usage professionnel.',
    manyPlatforms: '+ de 40 plateformes',
    manyPlatformsDesc: 'Prise en charge de toutes les principales plateformes de médias sociaux et de vidéos, avec une compatibilité régulièrement mise à jour.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Téléchargement de vidéos rapide et gratuit',
    
    // Language selector
    languageSelector: 'Langue',
    english: 'Anglais',
    french: 'Français',
    italian: 'Italien',
    portuguese: 'Portugais',
    spanish: 'Espagnol',
    dutch: 'Néerlandais',
    german: 'Allemand',
    vietnamese: 'Vietnamien',
    indonesian: 'Indonésien',

    // YouTube page specific content
    youtube: {
      inputPlaceholder: 'Collez une URL de vidéo, Shorts ou playlist YouTube',
      features: 'Fonctionnalités',
      featuresSubtitle: 'Les fonctionnalités qui rendent le téléchargement de vidéos YouTube simple et fiable',
      featuresDescription: 'Voici six fonctionnalités puissantes qui font de videodownload.io le choix de référence pour télécharger des vidéos YouTube rapidement, en toute sécurité et efficacement. Chaque fonctionnalité est conçue pour améliorer votre expérience et offrir de la flexibilité pour tous vos besoins de téléchargement.',
      howToDownload: 'Comment télécharger des vidéos YouTube',
      howToDownloadSubtitle: 'Un guide clair, étape par étape pour sauvegarder des vidéos sans effort',
      howToDownloadDescription: 'Obtenir des vidéos YouTube sur votre appareil est simple avec videodownload.io. Suivez ces quatre étapes simples pour télécharger n\'importe quelle vidéo en quelques minutes. Chaque étape est conçue pour être intuitive, même si vous n\'êtes pas très à l\'aise avec la technologie.',
      downloadYouTubeVideo: 'Télécharger une vidéo YouTube',
      whyDownload: 'Pourquoi télécharger des vidéos YouTube',
      whyDownloadSubtitle: 'Principaux cas d\'usage pour l\'accès vidéo hors ligne',
      whyDownloadDescription: 'Télécharger des vidéos YouTube vous donne la liberté de regarder du contenu à tout moment, n\'importe où, sans dépendre d\'une connexion internet. Que vous économisiez des données, prépariez un voyage ou archiviez du contenu, les vidéos hors ligne sont incroyablement utiles. Voici quelques-unes des meilleures raisons de télécharger des vidéos YouTube pour un usage personnel.',
      whoShouldDownload: 'Qui devrait télécharger des vidéos YouTube',
      whoShouldDownloadSubtitle: 'Les personnes qui bénéficient le plus des vidéos hors ligne',
      whoShouldDownloadDescription: 'Télécharger des vidéos YouTube n\'est pas seulement pour les spectateurs occasionnels - c\'est un changement de donne pour des groupes spécifiques qui ont besoin d\'un accès hors ligne pour le travail, la créativité ou la commodité. Voici un aperçu de qui peut tirer le meilleur parti du téléchargement de vidéos YouTube et pourquoi cela vaut la peine.',
      isItLegal: 'Est-il légal de télécharger des vidéos YouTube ?',
      isItLegalSubtitle: 'Ce que vous devez savoir sur la loi',
      risks: 'Risques du téléchargement de vidéos YouTube',
      risksSubtitle: 'Dangers potentiels et comment les éviter',
      risksDescription: 'Bien que télécharger des vidéos YouTube soit pratique, cela comporte des risques si vous utilisez les mauvais outils ou ignorez les limites légales. Être conscient de ces dangers vous aide à faire des choix intelligents et à protéger votre appareil et vos données. Voici les principaux risques à surveiller.',
      whyUse: 'Pourquoi utiliser videodownload.io',
      whyUseSubtitle: 'Votre partenaire de confiance pour les téléchargements YouTube',
      whyUseDescription: 'Nous avons lancé videodownload.io pour fournir un moyen sûr, simple et rapide de télécharger des vidéos YouTube sans les maux de tête des sites web douteux. Notre mission était de créer une plateforme propre qui coupe à travers le bruit des téléchargeurs lourds en publicités et risqués. Voici six raisons pour lesquelles videodownload.io se distingue comme le meilleur choix pour vos téléchargements de vidéos YouTube.',
      faqs: 'FAQ',
      faqsSubtitle: 'Questions courantes sur videodownload.io et les téléchargements YouTube',
      faqsDescription: 'Nous avons compilé les réponses aux questions les plus fréquentes sur l\'utilisation de videodownload.io et le téléchargement de vidéos YouTube pour vous aider à commencer en toute confiance.',
      startDownloading: 'Commencer à télécharger maintenant',
      startDownloadingSubtitle: 'Obtenez vos vidéos YouTube en quelques secondes',
      exploreMore: 'Explorer plus de téléchargeurs',
      exploreMoreSubtitle: 'Téléchargez depuis vos plateformes préférées'
    }
  },
  
  it: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Scarica video, audio e immagini da più di 40 piattaforme di social media. Veloce, gratuito e senza filigrane.',
    inputPlaceholder: 'Incolla qui l\'URL del video (TikTok, Instagram, YouTube, ecc.)',
    downloadButton: 'Scarica',
    processing: 'In elaborazione...',
    supportText: 'Supporta più di 40 piattaforme • Nessuna registrazione richiesta • Veloce e sicuro',
    
    // Results section
    downloadOptions: 'Opzioni di download',
    creator: 'Creatore:',
    startingDownload: 'Avvio download...',
    directDownloadInitiated: 'Download diretto avviato',
    downloadFailed: 'Download fallito',
    unableToDownload: 'Impossibile scaricare il file. Riprova.',
    invalidUrl: 'URL non valido',
    enterValidUrl: 'Inserisci un URL video valido',
    downloadReady: 'Download pronto!',
    processedSuccessfully: 'Il tuo video è stato elaborato con successo',
    
    // No results
    noDownloadOptions: 'Nessuna opzione di download disponibile',
    tryDifferentUrl: 'Prova un URL diverso o verifica che il contenuto sia accessibile pubblicamente',
    responseStatus: 'Stato della risposta:',
    
    // Platforms and features
    supportedPlatforms: 'Piattaforme supportate',
    keyFeatures: 'Caratteristiche principali',
    highQuality: 'Alta qualità',
    highQualityDesc: 'Scarica video nella massima qualità disponibile, fino a risoluzione 4K per la massima chiarezza.',
    noWatermarks: 'Senza filigrane',
    noWatermarksDesc: 'Ottieni download puliti senza filigrane dalle piattaforme supportate per uso professionale.',
    manyPlatforms: 'Oltre 40 piattaforme',
    manyPlatformsDesc: 'Supporto per tutte le principali piattaforme social e video con compatibilità regolarmente aggiornata.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Download video veloce e gratuito',
    
    // Language selector
    languageSelector: 'Lingua',
    english: 'Inglese',
    french: 'Francese',
    italian: 'Italiano',
    portuguese: 'Portoghese',
    spanish: 'Spagnolo',
    dutch: 'Olandese',
    german: 'Tedesco',
    vietnamese: 'Vietnamita',
    indonesian: 'Indonesiano'
  },
  
  pt: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Baixe vídeos, áudio e imagens de mais de 40 plataformas de redes sociais. Rápido, gratuito e sem marcas d\'água.',
    inputPlaceholder: 'Cole o URL do vídeo aqui (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Baixar',
    processing: 'Processando...',
    supportText: 'Suporte para mais de 40 plataformas • Sem registro necessário • Rápido e seguro',
    
    // Results section
    downloadOptions: 'Opções de download',
    creator: 'Criador:',
    startingDownload: 'Iniciando download...',
    directDownloadInitiated: 'Download direto iniciado',
    downloadFailed: 'Falha no download',
    unableToDownload: 'Não foi possível baixar o arquivo. Tente novamente.',
    invalidUrl: 'URL inválida',
    enterValidUrl: 'Digite uma URL de vídeo válida',
    downloadReady: 'Download pronto!',
    processedSuccessfully: 'Seu vídeo foi processado com sucesso',
    
    // No results
    noDownloadOptions: 'Nenhuma opção de download disponível',
    tryDifferentUrl: 'Tente uma URL diferente ou verifique se o conteúdo está acessível publicamente',
    responseStatus: 'Status da resposta:',
    
    // Platforms and features
    supportedPlatforms: 'Plataformas suportadas',
    keyFeatures: 'Recursos principais',
    highQuality: 'Alta qualidade',
    highQualityDesc: 'Baixe vídeos na mais alta qualidade disponível, até resolução 4K para máxima clareza.',
    noWatermarks: 'Sem marcas d\'água',
    noWatermarksDesc: 'Obtenha downloads limpos sem marcas d\'água de plataformas suportadas para uso profissional.',
    manyPlatforms: 'Mais de 40 plataformas',
    manyPlatformsDesc: 'Suporte para todas as principais plataformas de mídia social e vídeo com compatibilidade atualizada regularmente.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Download de vídeos rápido e gratuito',
    
    // Language selector
    languageSelector: 'Idioma',
    english: 'Inglês',
    french: 'Francês',
    italian: 'Italiano',
    portuguese: 'Português',
    spanish: 'Espanhol',
    dutch: 'Holandês',
    german: 'Alemão',
    vietnamese: 'Vietnamita',
    indonesian: 'Indonésio'
  },
  
  es: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Descarga videos, audio e imágenes de más de 40 plataformas de redes sociales. Rápido, gratuito y sin marcas de agua.',
    inputPlaceholder: 'Pega la URL del video aquí (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Descargar',
    processing: 'Procesando...',
    supportText: 'Compatible con más de 40 plataformas • No requiere registro • Rápido y seguro',
    
    // Results section
    downloadOptions: 'Opciones de descarga',
    creator: 'Creador:',
    startingDownload: 'Iniciando descarga...',
    directDownloadInitiated: 'Descarga directa iniciada',
    downloadFailed: 'Descarga fallida',
    unableToDownload: 'No se pudo descargar el archivo. Inténtalo de nuevo.',
    invalidUrl: 'URL inválida',
    enterValidUrl: 'Ingresa una URL de video válida',
    downloadReady: '¡Descarga lista!',
    processedSuccessfully: 'Tu video ha sido procesado exitosamente',
    
    // No results
    noDownloadOptions: 'No hay opciones de descarga disponibles',
    tryDifferentUrl: 'Prueba con una URL diferente o verifica que el contenido sea accesible públicamente',
    responseStatus: 'Estado de la respuesta:',
    
    // Platforms and features
    supportedPlatforms: 'Plataformas compatibles',
    keyFeatures: 'Características clave',
    highQuality: 'Alta calidad',
    highQualityDesc: 'Descarga videos en la más alta calidad disponible, hasta resolución 4K para máxima claridad.',
    noWatermarks: 'Sin marcas de agua',
    noWatermarksDesc: 'Obtén descargas limpias sin marcas de agua de plataformas compatibles para uso profesional.',
    manyPlatforms: 'Más de 40 plataformas',
    manyPlatformsDesc: 'Soporte para todas las principales plataformas de redes sociales y video con compatibilidad actualizada regularmente.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Descarga de videos rápida y gratuita',
    
    // Language selector
    languageSelector: 'Idioma',
    english: 'Inglés',
    french: 'Francés',
    italian: 'Italiano',
    portuguese: 'Portugués',
    spanish: 'Español',
    dutch: 'Holandés',
    german: 'Alemán',
    vietnamese: 'Vietnamita',
    indonesian: 'Indonesio'
  },
  
  nl: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Download video\'s, audio en afbeeldingen van meer dan 40 sociale media platforms. Snel, gratis en zonder watermerken.',
    inputPlaceholder: 'Plak video URL hier (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Downloaden',
    processing: 'Verwerken...',
    supportText: 'Ondersteunt meer dan 40 platforms • Geen registratie vereist • Snel en veilig',
    
    // Results section
    downloadOptions: 'Download opties',
    creator: 'Maker:',
    startingDownload: 'Download starten...',
    directDownloadInitiated: 'Directe download gestart',
    downloadFailed: 'Download mislukt',
    unableToDownload: 'Kan het bestand niet downloaden. Probeer opnieuw.',
    invalidUrl: 'Ongeldige URL',
    enterValidUrl: 'Voer een geldige video URL in',
    downloadReady: 'Download klaar!',
    processedSuccessfully: 'Je video is succesvol verwerkt',
    
    // No results
    noDownloadOptions: 'Geen download opties beschikbaar',
    tryDifferentUrl: 'Probeer een andere URL of controleer of de inhoud openbaar toegankelijk is',
    responseStatus: 'Response status:',
    
    // Platforms and features
    supportedPlatforms: 'Ondersteunde platforms',
    keyFeatures: 'Belangrijkste functies',
    highQuality: 'Hoge kwaliteit',
    highQualityDesc: 'Download video\'s in de hoogst beschikbare kwaliteit, tot 4K resolutie voor maximale helderheid.',
    noWatermarks: 'Geen watermerken',
    noWatermarksDesc: 'Krijg schone downloads zonder watermerken van ondersteunde platforms voor professioneel gebruik.',
    manyPlatforms: 'Meer dan 40 platforms',
    manyPlatformsDesc: 'Ondersteuning voor alle grote sociale media en video platforms met regelmatig bijgewerkte compatibiliteit.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Snelle en gratis video downloader',
    
    // Language selector
    languageSelector: 'Taal',
    english: 'Engels',
    french: 'Frans',
    italian: 'Italiaans',
    portuguese: 'Portugees',
    spanish: 'Spaans',
    dutch: 'Nederlands',
    german: 'Duits',
    vietnamese: 'Vietnamees',
    indonesian: 'Indonesisch'
  },
  
  de: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Laden Sie Videos, Audio und Bilder von über 40 Social-Media-Plattformen herunter. Schnell, kostenlos und ohne Wasserzeichen.',
    inputPlaceholder: 'Video-URL hier einfügen (TikTok, Instagram, YouTube, etc.)',
    downloadButton: 'Herunterladen',
    processing: 'Verarbeitung...',
    supportText: 'Unterstützt über 40 Plattformen • Keine Registrierung erforderlich • Schnell und sicher',
    
    // Results section
    downloadOptions: 'Download-Optionen',
    creator: 'Ersteller:',
    startingDownload: 'Download wird gestartet...',
    directDownloadInitiated: 'Direkter Download gestartet',
    downloadFailed: 'Download fehlgeschlagen',
    unableToDownload: 'Datei konnte nicht heruntergeladen werden. Bitte versuchen Sie es erneut.',
    invalidUrl: 'Ungültige URL',
    enterValidUrl: 'Bitte geben Sie eine gültige Video-URL ein',
    downloadReady: 'Download bereit!',
    processedSuccessfully: 'Ihr Video wurde erfolgreich verarbeitet',
    
    // No results
    noDownloadOptions: 'Keine Download-Optionen verfügbar',
    tryDifferentUrl: 'Versuchen Sie eine andere URL oder prüfen Sie, ob der Inhalt öffentlich zugänglich ist',
    responseStatus: 'Antwort-Status:',
    
    // Platforms and features
    supportedPlatforms: 'Unterstützte Plattformen',
    keyFeatures: 'Hauptmerkmale',
    highQuality: 'Hohe Qualität',
    highQualityDesc: 'Laden Sie Videos in der höchsten verfügbaren Qualität herunter, bis zu 4K-Auflösung für maximale Klarheit.',
    noWatermarks: 'Keine Wasserzeichen',
    noWatermarksDesc: 'Erhalten Sie saubere Downloads ohne Wasserzeichen von unterstützten Plattformen für professionelle Nutzung.',
    manyPlatforms: 'Über 40 Plattformen',
    manyPlatformsDesc: 'Unterstützung für alle großen Social-Media- und Video-Plattformen mit regelmäßig aktualisierter Kompatibilität.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Schneller und kostenloser Video-Downloader',
    
    // Language selector
    languageSelector: 'Sprache',
    english: 'Englisch',
    french: 'Französisch',
    italian: 'Italienisch',
    portuguese: 'Portugiesisch',
    spanish: 'Spanisch',
    dutch: 'Niederländisch',
    german: 'Deutsch',
    vietnamese: 'Vietnamesisch',
    indonesian: 'Indonesisch'
  },
  
  vi: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Tải xuống video, âm thanh và hình ảnh từ hơn 40 nền tảng mạng xã hội. Nhanh, miễn phí và không có watermark.',
    inputPlaceholder: 'Dán URL video tại đây (TikTok, Instagram, YouTube, v.v.)',
    downloadButton: 'Tải xuống',
    processing: 'Đang xử lý...',
    supportText: 'Hỗ trợ hơn 40 nền tảng • Không cần đăng ký • Nhanh và an toàn',
    
    // Results section
    downloadOptions: 'Tùy chọn tải xuống',
    creator: 'Người tạo:',
    startingDownload: 'Bắt đầu tải xuống...',
    directDownloadInitiated: 'Tải xuống trực tiếp đã được khởi động',
    downloadFailed: 'Tải xuống thất bại',
    unableToDownload: 'Không thể tải xuống tệp. Vui lòng thử lại.',
    invalidUrl: 'URL không hợp lệ',
    enterValidUrl: 'Vui lòng nhập URL video hợp lệ',
    downloadReady: 'Sẵn sàng tải xuống!',
    processedSuccessfully: 'Video của bạn đã được xử lý thành công',
    
    // No results
    noDownloadOptions: 'Không có tùy chọn tải xuống nào',
    tryDifferentUrl: 'Vui lòng thử URL khác hoặc kiểm tra xem nội dung có thể truy cập công khai không',
    responseStatus: 'Trạng thái phản hồi:',
    
    // Platforms and features
    supportedPlatforms: 'Nền tảng được hỗ trợ',
    keyFeatures: 'Tính năng chính',
    highQuality: 'Chất lượng cao',
    highQualityDesc: 'Tải xuống video với chất lượng cao nhất có sẵn, lên đến độ phân giải 4K để có độ rõ nét tối đa.',
    noWatermarks: 'Không có watermark',
    noWatermarksDesc: 'Nhận các bản tải xuống sạch không có watermark từ các nền tảng được hỗ trợ cho mục đích sử dụng chuyên nghiệp.',
    manyPlatforms: 'Hơn 40 nền tảng',
    manyPlatformsDesc: 'Hỗ trợ tất cả các nền tảng mạng xã hội và video chính với khả năng tương thích được cập nhật thường xuyên.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Trình tải video nhanh và miễn phí',
    
    // Language selector
    languageSelector: 'Ngôn ngữ',
    english: 'Tiếng Anh',
    french: 'Tiếng Pháp',
    italian: 'Tiếng Ý',
    portuguese: 'Tiếng Bồ Đào Nha',
    spanish: 'Tiếng Tây Ban Nha',
    dutch: 'Tiếng Hà Lan',
    german: 'Tiếng Đức',
    vietnamese: 'Tiếng Việt',
    indonesian: 'Tiếng Indonesia'
  },
  
  id: {
    // Hero section
    appTitle: 'VideoDownload.io',
    appDescription: 'Unduh video, audio, dan gambar dari 40+ platform media sosial. Cepat, gratis, dan tanpa watermark.',
    inputPlaceholder: 'Tempel URL video di sini (TikTok, Instagram, YouTube, dll.)',
    downloadButton: 'Unduh',
    processing: 'Memproses...',
    supportText: 'Mendukung 40+ platform • Tidak perlu registrasi • Cepat & aman',
    
    // Results section
    downloadOptions: 'Opsi unduhan',
    creator: 'Pembuat:',
    startingDownload: 'Memulai unduhan...',
    directDownloadInitiated: 'Unduhan langsung dimulai',
    downloadFailed: 'Unduhan gagal',
    unableToDownload: 'Tidak dapat mengunduh file. Silakan coba lagi.',
    invalidUrl: 'URL tidak valid',
    enterValidUrl: 'Silakan masukkan URL video yang valid',
    downloadReady: 'Unduhan siap!',
    processedSuccessfully: 'Video Anda telah diproses dengan sukses',
    
    // No results
    noDownloadOptions: 'Tidak ada opsi unduhan tersedia',
    tryDifferentUrl: 'Silakan coba URL yang berbeda atau periksa apakah konten dapat diakses secara publik',
    responseStatus: 'Status respons:',
    
    // Platforms and features
    supportedPlatforms: 'Platform yang didukung',
    keyFeatures: 'Fitur utama',
    highQuality: 'Kualitas tinggi',
    highQualityDesc: 'Unduh video dalam kualitas tertinggi yang tersedia, hingga resolusi 4K untuk kejernihan maksimal.',
    noWatermarks: 'Tanpa watermark',
    noWatermarksDesc: 'Dapatkan unduhan bersih tanpa watermark dari platform yang didukung untuk penggunaan profesional.',
    manyPlatforms: '40+ platform',
    manyPlatformsDesc: 'Dukungan untuk semua platform media sosial dan video utama dengan kompatibilitas yang diperbarui secara teratur.',
    
    // Footer
    copyright: '© {year} VideoDownload.io - Pengunduh video cepat & gratis',
    
    // Language selector
    languageSelector: 'Bahasa',
    english: 'Bahasa Inggris',
    french: 'Bahasa Prancis',
    italian: 'Bahasa Italia',
    portuguese: 'Bahasa Portugis',
    spanish: 'Bahasa Spanyol',
    dutch: 'Bahasa Belanda',
    german: 'Bahasa Jerman',
    vietnamese: 'Bahasa Vietnam',
    indonesian: 'Bahasa Indonesia'
  }
};
