import { Outlet } from "react-router-dom";

import { NameProvider } from "./context/NameContext";
import { LanguageProvider } from './context/LanguageContext';

import "./App.css";

function App() {
  return (
    <LanguageProvider>
    <NameProvider>
      <Outlet />
    </NameProvider>
    </LanguageProvider>
  );
}
export default App;
