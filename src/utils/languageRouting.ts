import { Language } from '@/translations';

// Language code mappings
export const LANGUAGE_CODES: Record<Language, string> = {
  en: '',      // Default language, no prefix
  fr: 'fr',
  it: 'it',
  pt: 'pt',
  es: 'es',
  nl: 'nl',
  de: 'de',
  vi: 'vi',
  id: 'id'
};

// Reverse mapping for URL path to language
export const PATH_TO_LANGUAGE: Record<string, Language> = {
  '': 'en',
  'fr': 'fr',
  'it': 'it',
  'pt': 'pt',
  'es': 'es',
  'nl': 'nl',
  'de': 'de',
  'vi': 'vi',
  'id': 'id'
};

// Get language from URL pathname
export const getLanguageFromPath = (pathname: string): { language: Language; path: string } => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  
  if (PATH_TO_LANGUAGE[firstSegment]) {
    return {
      language: PATH_TO_LANGUAGE[firstSegment],
      path: '/' + segments.slice(1).join('/')
    };
  }
  
  return {
    language: 'en',
    path: pathname
  };
};

// Build URL with language prefix
export const buildLanguageUrl = (language: Language, path: string): string => {
  const langCode = LANGUAGE_CODES[language];
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (langCode === '') {
    // English (default) - no prefix
    return cleanPath;
  }
  
  return `/${langCode}${cleanPath}`;
};

// Get current language from URL
export const getCurrentLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const { language } = getLanguageFromPath(window.location.pathname);
  return language;
};