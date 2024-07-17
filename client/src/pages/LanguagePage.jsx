import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
// import "../style/language.css";

export default function LanguagePage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="languageHeader">
        <div>
          <button
            type="button"
            className="btnNav"
            onClick={() => navigate(-1)}
          >
            <img src="../assets/images/arrow.png" alt="arrow" />
          </button>
          <h2>Select Language</h2>
        </div>
      </header>
      <section className="languageSection">
        <LanguageSelector />
      </section>
    </>
  );
}
