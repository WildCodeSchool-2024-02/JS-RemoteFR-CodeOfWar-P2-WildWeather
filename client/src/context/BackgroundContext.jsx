import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Cloud from "../components/Cloud"; // Assurez-vous que le chemin est correct
import "../style/backgroundcloud.css";

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
  const contextValue = useMemo(() => ({}), []);

  const [mode] = useState("jour");

  return (
    <BackgroundContext.Provider value={contextValue}>
      <div className={`sky ${mode}`}>
        <Cloud />
        <Cloud style={{ top: "50px", animationDuration: "120s" }} />
        <Cloud style={{ top: "50px", animationDuration: "60s" }} />
        <Cloud style={{ top: "75px", animationDuration: "45s" }} />
        <Cloud style={{ top: "100px", animationDuration: "60s" }} />
        <Cloud style={{ top: "100px", animationDuration: "30s" }} />
        <Cloud style={{ top: "125px", animationDuration: "25s" }} />
        <Cloud style={{ top: "150px", animationDuration: "25s" }} />
        <Cloud style={{ top: "150px", animationDuration: "15s" }} />
        {children}
      </div>
    </BackgroundContext.Provider>
  );
}

BackgroundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useBackground() {
  return useContext(BackgroundContext);
}

export { BackgroundProvider, useBackground };
