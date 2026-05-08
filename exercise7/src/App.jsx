import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const calc = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", calc);
    return () => {
      window.removeEventListener("mousemove", calc);
    };
  }, [coords]);

  return (
    <div>
      <h2>X : {coords.x} </h2>
      <h2>Y : {coords.y} </h2>
    </div>
  );
};

export default App;
