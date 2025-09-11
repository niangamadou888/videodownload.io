import React from 'react';
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
  const { language, setLanguage, t } = useLanguage();

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
          onClick={() => setLanguage('en')}
          className={`${language === 'en' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇺🇸 {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('fr')}
          className={`${language === 'fr' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇫🇷 {t('french')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('it')}
          className={`${language === 'it' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇮🇹 {t('italian')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('pt')}
          className={`${language === 'pt' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇵🇹 {t('portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('es')}
          className={`${language === 'es' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇪🇸 {t('spanish')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('nl')}
          className={`${language === 'nl' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇳🇱 {t('dutch')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('de')}
          className={`${language === 'de' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇩🇪 {t('german')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('vi')}
          className={`${language === 'vi' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇻🇳 {t('vietnamese')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('id')}
          className={`${language === 'id' ? 'bg-primary/20' : ''} cursor-pointer`}
        >
          🇮🇩 {t('indonesian')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
