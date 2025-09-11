import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, translations } from '@/translations';
import { getLanguageFromPath, buildLanguageUrl } from '@/utils/languageRouting';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get initial language from URL path with error handling
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      return getLanguageFromPath(location.pathname).language;
    } catch {
      return 'en';
    }
  });

  // Set language and navigate to new URL
  const setLanguage = useCallback((newLanguage: Language) => {
    try {
      const { path } = getLanguageFromPath(location.pathname);
      const newUrl = buildLanguageUrl(newLanguage, path);
      
      setLanguageState(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
      
      navigate(newUrl, { replace: true });
    } catch (error) {
      console.error('Error setting language:', error);
      // Fallback: just set the language state without navigation
      setLanguageState(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    }
  }, [navigate, location.pathname]);

  // Update language when URL changes
  useEffect(() => {
    try {
      const { language: urlLanguage } = getLanguageFromPath(location.pathname);
      if (urlLanguage !== language) {
        setLanguageState(urlLanguage);
        if (typeof window !== 'undefined') {
          localStorage.setItem('language', urlLanguage);
        }
      }
    } catch (error) {
      console.error('Error updating language from URL:', error);
    }
  }, [location.pathname, language]);

  // Translation function
  const t = useCallback((key: string) => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to English if the key doesn't exist in current language
      return translations['en'][key] || key;
    }
    return translations[language][key];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
