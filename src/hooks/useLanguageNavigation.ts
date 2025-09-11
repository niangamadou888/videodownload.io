import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildLanguageUrl } from '@/utils/languageRouting';

export const useLanguageNavigation = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Build a URL with the current language prefix
  const buildUrl = useCallback((path: string) => {
    return buildLanguageUrl(language, path);
  }, [language]);

  // Navigate to a path with the current language prefix
  const navigateTo = useCallback((path: string) => {
    const url = buildLanguageUrl(language, path);
    navigate(url);
  }, [language, navigate]);

  // Get the current path without language prefix
  const getCurrentPath = useCallback(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // If first segment is a language code, remove it
    const languageCodes = ['fr', 'it', 'pt', 'es', 'nl', 'de', 'vi', 'id'];
    if (pathSegments.length > 0 && languageCodes.includes(pathSegments[0])) {
      return '/' + pathSegments.slice(1).join('/');
    }
    
    return location.pathname;
  }, [location.pathname]);

  return {
    buildUrl,
    navigateTo,
    getCurrentPath,
    currentLanguage: language
  };
};