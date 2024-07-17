import { Outlet } from "react-router-dom";
import { NameProvider } from "./context/NameContext";

import "./App.css";

function App() {
  return (
    <NameProvider>
      <Outlet />
    </NameProvider>
  );
}
export default App;
