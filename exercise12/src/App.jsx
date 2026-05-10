import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Counter
      <h3>Count: {count}</h3>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrement
      </button>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default App;
