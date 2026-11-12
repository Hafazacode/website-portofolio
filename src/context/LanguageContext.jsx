import React, { createContext, useContext, useState, useEffect } from 'react';
import { getPortfolioData, uiTranslations } from '../data/portfolioData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('pref_lang') || 'id';
  });

  const setLang = (nextLang) => {
    setLangState(nextLang);
    try {
      localStorage.setItem('pref_lang', nextLang);
      document.documentElement.lang = nextLang;
    } catch {
      // ignore storage error
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  const localizedData = getPortfolioData(lang);
  const t = uiTranslations[lang] || uiTranslations.id;

  const value = {
    lang,
    setLang,
    toggleLanguage,
    t,
    ...localizedData,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
