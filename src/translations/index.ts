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
    indonesian: 'Indonesian'
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
    indonesian: 'Indonésien'
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
