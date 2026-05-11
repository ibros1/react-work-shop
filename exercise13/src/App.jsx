import { useReducer } from "react";

const App = () => {
  const initialState = {
    countA: 0,
    countB: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_A":
        return {
          countA: state.countA + 1,
          countB: state.countB,
        };
      case "DECREMENT_A":
        return { countA: state.countA - 1, countB: state.countB };

      case "INCREMENT_B":
        return {
          countB: state.countB + 1,
          countA: state.countA,
        };
      case "DECREMENT_B":
        return {
          countB: state.countB - 1,
          countA: state.countA,
        };
      case "reset":
        return {
          countA: 0,
          countB: 0,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      Counter
      <h3>CountA: {state.countA}</h3>
      <button onClick={() => dispatch({ type: "DECREMENT_A" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
        Increment
      </button>
      <h3>CountB: {state.countB}</h3>
      <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
        Increment
      </button>
      <h3>Reset Both</h3>
      <button onClick={handleReset}>Reset both!</button>
    </div>
  );
};

export default App;
