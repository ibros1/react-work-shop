import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <div className="border border-gray-300 py-4 px-6 w-[40%] rounded-lg my-6 mx-4 ">
        <h2 className="font-semibold text-2xl py-4">Please Login First</h2>
        <button
          onClick={() => login()}
          className="bg-slate-700 hover:bg-slate-800 transition-bg duration-300 rounded-md text-white py-2 px-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
