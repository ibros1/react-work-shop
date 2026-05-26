import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-4 shadow-sm w-full">
      <div className="flex justify-around items-center">
        <h2 className="text-rose-600 text-3xl font-bold">Recipe Book</h2>

        <nav className="flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "font-bold text-rose-600" : null
            }
          >
            Home{" "}
          </NavLink>
          <NavLink
            to={"/recipes"}
            className={({ isActive }) =>
              isActive ? "font-bold text-rose-600" : null
            }
          >
            Recipes{" "}
          </NavLink>
          <NavLink
            to={"/categories"}
            className={({ isActive }) =>
              isActive ? "font-bold text-rose-600" : null
            }
          >
            {" "}
            Categories
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
