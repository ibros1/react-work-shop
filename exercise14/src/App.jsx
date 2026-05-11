import { useReducer } from "react";

const App = () => {
  const initialState = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FEILD":
        return {
          ...state,
          [action.field]: action.value,
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
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
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

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FEILD",
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = () => {
    alert("Form submitted successfully!");
    dispatch({
      type: "reset",
    });
  };
  return (
    <div>
      <h1>Multi setp registration</h1>
      {state.step === 1 && (
        <div className="">
          <label htmlFor="">First Name:</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            value={state.firstname}
            id=""
          />
          <br />
          <label htmlFor="">Last Name:</label>
          <br />
          <input
            value={state.lastname}
            onChange={handleChange}
            type="text"
            name="lastname"
            id=""
          />
          <br />
          <button onClick={nextStep}>Next Step</button>
        </div>
      )}
      {state.step === 2 && (
        <div className="">
          <label htmlFor="">Email:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.email}
            type="text"
            name="email"
            id=""
          />
          <br />
          <label htmlFor="">phone:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.phone}
            type="text"
            name="phone"
            id=""
          />
          <br />
          <button onClick={prevStep}>Prev Step</button>
          <button onClick={nextStep}>Next Step</button>
        </div>
      )}
      {state.step === 3 && (
        <div className="">
          <h2>Preview form</h2>
          <h3>Firstname : {state.firstname}</h3>
          <h3>Lastname : {state.lastname}</h3>
          <h3>Email : {state.email}</h3>
          <h3>Phone : {state.phone}</h3>
          <button onClick={prevStep}>Prev Step</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default App;
