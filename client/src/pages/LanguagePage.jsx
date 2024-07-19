import { useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import "../style/languagepage.css";
import arrowLeft from "../assets/images/arrow.png";

export default function LanguagePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="pageLanguages">
      <header>
        <div className="languageHeader">
          <button
            type="button"
            className="btnBackLanguages"
            onClick={() => navigate("/Home/Settings")}
          >
            <img src={arrowLeft} alt="arrow left" width={20} />
          </button>
          <h1 className="languageTitle">{t("Setting.Languages")}</h1>
        </div>
      </header>
      <section>
        <LanguageSelector />
      </section>
    </div>
  );
}
