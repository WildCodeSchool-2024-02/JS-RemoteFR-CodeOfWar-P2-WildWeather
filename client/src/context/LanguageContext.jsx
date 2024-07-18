import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

import translationsEN from "../translations/en.json";
import translationsFR from "../translations/fr.json";
import translationsES from "../translations/es.json";
import translationsDE from "../translations/de.json";
import translationsZH from "../translations/zh.json";
import translationsMEOW from "../translations/meow.json";
import translationsLA from "../translations/la.json";
import translationsKLI from "../translations/kli.json";
import translationsSIN from "../translations/sin.json";

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
function getTranslation(key, language) {
  const keys = key.split(".");
  return keys.reduce(
    (translation, k) => (translation && translation[k] ? translation[k] : key),
    translations[language]
  );
}
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en"
  );

  function changeLanguage(lng) {
    localStorage.setItem("language", lng);
    setLanguage(lng);
  }

  function translate(key) {
    return getTranslation(key, language);
  }

  const value = useMemo(
    () => ({ language, changeLanguage, t: translate }),
    [language, translate]
  );

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
