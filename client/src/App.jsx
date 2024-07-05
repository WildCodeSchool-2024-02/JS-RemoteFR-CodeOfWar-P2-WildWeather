import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  return <Outlet context={{ name, setName }} />;
}
export default App;
