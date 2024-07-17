import { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import translationsEN from '../translations/en.json';
import translationsFR from '../translations/fr.json';
import translationsES from '../translations/es.json';
import translationsDE from '../translations/de.json';
import translationsZH from '../translations/zh.json';
import translationsMEOW from '../translations/meow.json';
import translationsLA from '../translations/la.json';
import translationsKLI from '../translations/kli.json';
import translationsSIN from '../translations/sin.json';

const LanguageContext = createContext();

const translations = {
  en: translationsEN,
  fr: translationsFR,
  es: translationsES,
  de: translationsDE,
  zh: translationsZH,
  meow: translationsMEOW,
  la: translationsLA,
  kli: translationsKLI,
  sin: translationsSIN,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];
    keys.forEach(k => {
      translation = translation[k] || key;
    });
    return translation;
  };

  const value = useMemo(() => ({ language, changeLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => useContext(LanguageContext);
