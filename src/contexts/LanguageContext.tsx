import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Language, translations } from '@/translations';

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
  // Try to get the language from localStorage, default to 'en'
  const savedLanguage = typeof window !== 'undefined' 
    ? localStorage.getItem('language') as Language || 'en'
    : 'en';
  
  const [language, setLanguageState] = useState<Language>(savedLanguage);

  // Set language and save to localStorage
  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  }, []);

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
