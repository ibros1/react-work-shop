import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="space-x-4  px-6 py-4">
      <div className="flex items-center space-x-4">
        <Link to={"/"}>Home</Link>
        {isAuthenticated && (
          <Link
            to={"/create-post"}
            className="bg-blue-500 py-2 px-2 rounded-lg text-white"
          >
            Create Post
          </Link>
        )}
        {!isAuthenticated && (
          <Link
            to={"/login"}
            className="bg-blue-600 py-2 px-2 rounded-lg text-white"
          >
            Login
          </Link>
        )}
        {isAuthenticated && (
          <button
            onClick={() => logout()}
            className="bg-red-600 px-2 py-2 text-white rounded-lg"
          >
            Logout
          </button>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default App;
