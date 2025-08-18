export type Language = 'en' | 'fr' | 'it';

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
    italian: 'Italian'
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
    italian: 'Italien'
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
    italian: 'Italiano'
  }
};
