import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    gender: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData, isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-2">
      <form
        action=""
        className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto flex flex-col   border border-gray-300 rounded-md py-6 px-4 space-y-2 justify-center"
      >
        <label htmlFor="">Email</label>

        <input
          type="email"
          name="email"
          id=""
          className="border py-2 px-4 border-gray-300 rounded-md"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="">username</label>

        <input
          type="text"
          name="username"
          id=""
          className="border py-2 px-4 border-gray-300 rounded-md"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          id=""
          className="border py-2 px-4 border-gray-300 rounded-md"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <select
          name="gender"
          id=""
          className="border border-gray-300 py-2 rounded-md px-2"
          value={formData.gender}
          onChange={handleChange}
        >
          <option>Choose Gender</option>
          <option>male</option>
          <option>Female</option>
        </select>
        <div className="flex items-center gap-2">
          <label htmlFor="">Agree</label>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>

        <button
          className="bg-green-400 hover:bg-green-300 rounded-md my-4 py-2 text-white font-bold"
          type="submit"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
