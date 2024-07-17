import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import "../style/settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const userName = localStorage.getItem("nameStorage");
  const [toggleActive, setToggleActive] = useState(false);
  const HandleClickNavigate = (navigTo) => {
    navigate(`/${navigTo}`);
  };
  const HandleClickToggle = () => {
    setToggleActive(!toggleActive);
    const toggle = document.querySelector(".toggleSwitch");
    if (toggleActive) {
      toggle.style.transform = "translateX(0)";
    } else {
      toggle.style.transform = "translateX(100%)";
    }
  };
  const HandleKeyDownToggle = (e) => {
    if (e.key === "n") {
      HandleClickToggle();
    }
  };
  const HandleClickContact = () => {
    const contactPop = document.querySelector(".settingsMails");
    contactPop.style.display = "flex";
  };
  const HandleClickContactClose = () => {
    const contactPop = document.querySelector(".settingsMails");
    contactPop.style.display = "none";
  };

  return (
    <>
      <header className="settingsHeader">
        <div>
          <button
            type="button"
            className="btnNav"
            onClick={() => HandleClickNavigate("Home")}
          >
            <img src="../src/assets/images/arrow.png" alt="arrow" />
          </button>
          <h2>{t("Settings")}</h2>
        </div>
      </header>
      <section className="settingsSection">
        <div className="settingsName">
          <p>{userName ? `${userName}` : t("Setting.YourNameHere")}</p>
          <button
            className="chevron"
            type="button"
            onClick={() => HandleClickNavigate("Home/Settings/ChangeName")}
          >
            &#x3009;
          </button>
        </div>
        <ul className="settingsTools">
          <li className="settingsLi">
            <img
              className="imgLoc"
              src="../src/assets/icons-pages/logoLocalisation.png"
              alt="position"
            />
            <p>{t("Setting.Localisation")}</p>
            <button
              className="chevron"
              type="button"
              onClick={() => HandleClickNavigate("MapPage")}
            >
              &#x3009;
            </button>
          </li>
          <li className="settingsLi">
            <img
              className="imgLang"
              src="../src/assets/icons-pages/logoLanguage.png"
              alt="livre"
            />
            <p>{t("Setting.Languages")}</p>
            <button
              className="chevron"
              type="button"
              onClick={() => HandleClickNavigate("Home/Settings/LanguagePage")}
            >
              &#x3009;
            </button>
          </li>
          <li className="settingsLi">
            <img
              className="imgNotif"
              src="../src/assets/icons-pages/logoNotif.png"
              alt="notifications"
            />
            <p>{t("Setting.Notifications")}</p>
            <div
              className={
                toggleActive ? "toggleContainer active" : "toggleContainer"
              }
              onClick={HandleClickToggle}
              onKeyDown={HandleKeyDownToggle}
              role="button"
              tabIndex="0"
              aria-label="toggle"
            >
              <div className="toggleSwitch" />
            </div>
          </li>
        </ul>

        <button type="button" className="contact" onClick={HandleClickContact}>
          <img
            src="../src/assets/icons-pages/logoContact.png"
            alt="contact icon headphone"
          />
          <p> {t("Setting.NeedHelpContactUs.ContactUs")} </p>
        </button>
        <div className="settingsMails">
          <button
            type="button"
            className="closeMail"
            onClick={HandleClickContactClose}
          >
            ✖
          </button>
          <form className="formContact">
            <input
              type="email"
              className="email"
              name="email"
              placeholder={t("Setting.NeedHelpContactUs.YourMail")}
            />
            <input
              type="text"
              className="email"
              id="object"
              name="object"
              placeholder={t("Setting.NeedHelpContactUs.YourObject")}
            />
            <textarea
              name="descriptionMail"
              id="textEmail"
              placeholder={t("Setting.NeedHelpContactUs.YourMessage")}
            />
            <button type="button" onClick={HandleClickContactClose}>
              {t("Setting.NeedHelpContactUs.Submit")}
            </button>
          </form>
          <p>
            {t("Setting.NeedHelpContactUs.CallUs")}:{" "}
            <a href="tel:+33524845733">0524845733</a>📱
          </p>
        </div>
      </section>
    </>
  );
}
