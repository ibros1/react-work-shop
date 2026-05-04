import { useState } from "react";

const App = () => {
  const [isTurnOn, setIsTurnOn] = useState(false);
  const toggleBtn = () => {
    setIsTurnOn(!isTurnOn);
  };
  return (
    <div>
      <h3>Button is {isTurnOn ? "ON" : "OFF"}</h3>
      <button onClick={toggleBtn}>Turn {isTurnOn ? "OFF" : "ON"}</button>
    </div>
  );
};

export default App;
