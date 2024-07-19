import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../style/languagepage.css";

import cn from "../assets/images/flags/cn.svg";
import de from "../assets/images/flags/de.svg";
import es from "../assets/images/flags/es.svg";
import fr from "../assets/images/flags/fr.svg";
import gb from "../assets/images/flags/gb.svg";

const languages = [
  { code: "en", name: "English", flag: gb },
  { code: "fr", name: "Français", flag: fr },
  { code: "es", name: "Español", flag: es },
  { code: "de", name: "Deutsch", flag: de },
  { code: "zh", name: "中文（普通话)", flag: cn },
  { code: "meow", name: "Meow", flag: "😸" },
  { code: "la", name: "Latin", flag: "📜" },
  { code: "kli", name: "Klingon", flag: "⚔️" },
  { code: "sin", name: "Sindarin", flag: "🧝🏼" },
];

function LanguageSelector() {
  const { t } = useLanguage();

  const { language, changeLanguage } = useLanguage();
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    if (showPopover) {
      const timer = setTimeout(() => setShowPopover(false), 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showPopover]);

  const handleChangeLanguage = (code) => {
    changeLanguage(code);
    setShowPopover(true);
  };

  return (
    <div className="pageLanguages">
      <ul className="languageSection">
        {languages.map((lang) => (
          <li key={lang.code}>
            <label className="languages">
              <input
                className="inputlanguages"
                type="radio"
                name="language"
                value={lang.code}
                checked={language === lang.code}
                onChange={() => handleChangeLanguage(lang.code)}
              />
              {typeof lang.flag === "string" && lang.flag.endsWith(".svg") ? (
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="flagImage"
                />
              ) : (
                <div role="img" aria-label={lang.name}>
                  {lang.flag}
                </div>
              )}
              {lang.name}
            </label>
          </li>
        ))}
      </ul>
      {showPopover && (
        <div className="popoverLanguage">
          {t("Setting.LanguageChangedTo")}{" "}
          {languages.find((lang) => lang.code === language).name} !
          {/* <button
            type="button"
            className="closePopoverLanguage"
            onClick={() => setShowPopover(false)}
          >
            ✖
          </button> */}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
