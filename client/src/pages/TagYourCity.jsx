import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CitySearchBar from "../components/CitySearchBar";
import NameInput from "./NameInput";
import { BackgroundProvider } from "../context/BackgroundContext";
import "../style/backgroundcloud.css";
import "../style/tagyourcity.css";
import "../style/nametagcommon.css";

function TagYourCity() {
  const { name, setName } = useOutletContext(); // Utilisation de useOutletContext pour accéder à name et setName

  useEffect(() => {
    const storedName = localStorage.getItem("nameStorage");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  return (
    <BackgroundProvider>
      <section className="TagYourCity">
        <main className="maintagyourcity">
          {name ? (
            <>
              <div className="inputnameandtag">
                <p>Thank you {name},</p>
                <p>Where do you live?</p>
              </div>
              <CitySearchBar />
            </>
          ) : (
            <NameInput />
          )}
        </main>
      </section>
    </BackgroundProvider>
  );
}

export default TagYourCity;
