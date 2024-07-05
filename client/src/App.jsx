import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <main>
      <Outlet context={{ name, setName }} />
    </main>
  );
}
export default App;
