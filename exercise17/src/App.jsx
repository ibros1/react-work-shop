import UseForm from "./UseForm";

const App = () => {
  const { data, handleChange } = UseForm({
    fullname: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">full name</label>
        <input type="text" name="fullname" onChange={handleChange} id="" />
        <br />
        <label htmlFor="">age</label>
        <input type="number" name="age" onChange={handleChange} id="" /> <br />
        <label htmlFor="">email</label>
        <input type="email" name="email" onChange={handleChange} id="" />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
