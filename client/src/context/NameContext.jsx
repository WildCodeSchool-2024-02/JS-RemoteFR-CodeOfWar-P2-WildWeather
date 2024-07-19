import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const NameContext = createContext();

function NameProvider({ children }) {
  const [name, setName] = useState("");
  const nameValue = useMemo(() => ({ name, setName }), [name]);
  return (
    <NameContext.Provider value={nameValue}>{children}</NameContext.Provider>
  );
}

NameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useName() {
  return useContext(NameContext);
}

export { NameProvider, useName };
