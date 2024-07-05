import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CitySearchBar from "../components/CitySearchBar";
import NameInput from "./NameInput";
import "../style/styletagyourcity.css";
import "../style/stylenametagcommon.css";

function TagYourCity() {
  const { name, setName } = useOutletContext(); // Utilisation de useOutletContext pour accéder à name et setName

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  return (
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
  );
}

export default TagYourCity;
