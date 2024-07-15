import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import "../style/backgroundcloud.css";

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
  const [mode] = useState("jour");

  return (
    <BackgroundContext.Provider value={mode}>
      <div className={`sky ${mode}`}>{children}</div>
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
