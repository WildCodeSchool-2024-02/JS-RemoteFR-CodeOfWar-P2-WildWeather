import { Outlet } from "react-router-dom";
import { BackgroundProvider } from "../context/BackgroundContext";
import Cloud from "../components/Cloud";
import "../style/backgroundcloud.css";

function EntryPages() {
  return (
    <BackgroundProvider>
      <Cloud />
      <Cloud style={{ top: "50px", animationDuration: "120s" }} />
      <Cloud style={{ top: "50px", animationDuration: "60s" }} />
      <Cloud style={{ top: "75px", animationDuration: "45s" }} />
      <Cloud style={{ top: "100px", animationDuration: "60s" }} />
      <Cloud style={{ top: "100px", animationDuration: "30s" }} />
      <Cloud style={{ top: "125px", animationDuration: "25s" }} />
      <Cloud style={{ top: "150px", animationDuration: "25s" }} />
      <Cloud style={{ top: "150px", animationDuration: "15s" }} />
      <Outlet />
    </BackgroundProvider>
  );
}
export default EntryPages;
