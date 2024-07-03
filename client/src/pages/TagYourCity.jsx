import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CitySearchBar from "../components/CitySearchBar";
import NameInput from "./NameInput";

function TagYourCity() {
  const { name, setName } = useOutletContext(); // Utilisation de useOutletContext pour accéder à name et setName

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  return (
    <main>
      <p className="questionTitleName">
        <p>What's your name?</p>
      </p>
      <p className="personalize">Let's personalize your experience.</p>
      {name ? (
        <>
          <div>
            <p>Thank you {name},</p>
            <p>Where do you live?</p>
          </div>
          <CitySearchBar />
        </>
      ) : (
        <NameInput />
      )}
    </main>
  );
}

export default TagYourCity;
