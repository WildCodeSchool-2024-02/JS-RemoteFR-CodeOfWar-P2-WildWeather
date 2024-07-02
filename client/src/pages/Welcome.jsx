import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const goToNameInput = () => {
    navigate("/NameInput");
  };

  return (
    <div>
      <h1>Welcome in WildWeather</h1>
      <button type="button" onClick={goToNameInput}>
        Go to Name Input
      </button>
    </div>
  );
}

export default Welcome;
