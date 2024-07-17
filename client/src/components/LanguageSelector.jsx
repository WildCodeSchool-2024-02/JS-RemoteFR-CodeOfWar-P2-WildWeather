import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', name: 'Anglais', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Espagnol', flag: '🇪🇸' },
  { code: 'de', name: 'Allemand', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinois', flag: '🇨🇳' },
  { code: 'meow', name: 'Meow', flag: '😸' },
  { code: 'la', name: 'Latin', flag: '📜' },
  { code: 'kli', name: 'Klingon', flag: '⚔️' },
  { code: 'sin', name: 'Sindarin', flag: '🧝🏼' },
];

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <h1>Language</h1>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code}>
            <label>
              <input
                type="radio"
                name="language"
                value={lang.code}
                checked={language === lang.code}
                onChange={() => changeLanguage(lang.code)}
              />
              <span role="img" aria-label={lang.name}>{lang.flag}</span> {lang.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
