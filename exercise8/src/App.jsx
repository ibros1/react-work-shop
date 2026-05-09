import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStoped, setIsStoped] = useState(false);
  console.log(isRunning);
  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [isRunning, timeLeft]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Counterdown Timer</h2>

      <div className="">
        <h3>Set Time (seconds)</h3>
        <input onChange={handleChange} value={time} type="number" />
      </div>
      <h3>Time Left: {timeLeft} seconds</h3>
      <button
        disabled={isRunning || timeLeft == 0}
        onClick={() => {
          (setIsRunning(true), setIsStoped(false));
        }}
      >
        {isStoped ? "Resume" : "Start"}
      </button>
      <button
        disabled={!isRunning || timeLeft == 0}
        onClick={() => {
          (setIsRunning(false), setIsStoped(true));
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
          setTimeLeft(0);
        }}
        disabled={timeLeft === 0}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
