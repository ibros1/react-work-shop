import { useReducer } from "react";

const App = () => {
  const intialState = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "NEXT_STEP":
        return {
          ...state,
          step: state.step + 1,
        };
      case "PREV_STEP":
        return {
          ...state,
          step: state.step - 1,
        };

      case "reset":
        return intialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state);
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const nextStep = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };
  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  const handleSubmit = () => {
    alert("Successfully submited!");
    dispatch({
      type: "reset",
    });
  };
  return (
    <div>
      <h1>Form submission steps</h1>

      {state.step === 1 && (
        <div className="">
          <label htmlFor="">firstname</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            value={state.firstname}
            id=""
          />
          <br />
          <label htmlFor="">lastname</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            value={state.lastname}
            id=""
          />
          <br />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div className="">
          <label htmlFor="">email</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={state.email}
            id=""
          />
          <br />
          <label htmlFor="">phone</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            value={state.phone}
            id=""
          />
          <br />
          <button onClick={prevStep}>prev</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div className="">
          <h2>Preview form</h2>
          <h3>firstname : {state.firstname} </h3>
          <h3>lastname : {state.lastname} </h3>
          <h3>email : {state.email}</h3>
          <h3>phone : {state.phone} </h3>
          <button onClick={prevStep}>prev</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default App;
