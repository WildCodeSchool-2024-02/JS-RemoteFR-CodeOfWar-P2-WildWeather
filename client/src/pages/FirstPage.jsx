import { useNavigate } from "react-router-dom";
import "../style/firstpage.css";

function FirstPage() {
  const navigate = useNavigate();
  const goToNameInput = () => {
    navigate("/NameInput");
  };
  return (
    <div className="first-page">
      <img
        src="src\assets\images\Group_57.png"
        alt="logo princiapl"
        className="logoprincipal"
      />
      <p className="headline">Your weather,</p>
      <p className="subheadline">always at hand!</p>
      <p className="textfirstpage1">Don't let the weather</p>
      <p className="textfirstpage2">surprise you.</p>
      <button type="button" className="lets-go-btn" onClick={goToNameInput}>
        Let's go!
      </button>
    </div>
  );
}

export default FirstPage;
