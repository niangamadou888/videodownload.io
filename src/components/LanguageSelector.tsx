import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLanguage: string) => {
    const currentPath = location.pathname;
    const segments = currentPath.split('/').filter(Boolean);

    // Get the current page path without language prefix
    let pagePath = '';
    if (segments.length > 1) {
      // We're on a subpage like /fr/youtube
      pagePath = '/' + segments.slice(1).join('/');
    }

    // Build the new URL directly
    const newUrl = `/${newLanguage}${pagePath}`;
    navigate(newUrl, { replace: true });

    // Update language in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 bg-primary/40 hover:bg-primary/60 text-white border-2 border-white/30 shadow-lg"
          aria-label={t('languageSelector')}
        >
          <Globe className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/80 backdrop-blur-md border-primary/20">
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={`${language === 'en' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇺🇸 {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('fr')}
          className={`${language === 'fr' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇫🇷 {t('french')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('it')}
          className={`${language === 'it' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇮🇹 {t('italian')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('pt')}
          className={`${language === 'pt' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇵🇹 {t('portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('es')}
          className={`${language === 'es' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇪🇸 {t('spanish')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('nl')}
          className={`${language === 'nl' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇳🇱 {t('dutch')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('de')}
          className={`${language === 'de' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇩🇪 {t('german')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('vi')}
          className={`${language === 'vi' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇻🇳 {t('vietnamese')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('id')}
          className={`${language === 'id' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇮🇩 {t('indonesian')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
