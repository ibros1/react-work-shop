import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/${data}`);
  };
  return (
    <div className="w-full md:w-[80%] lg:w-2xl px-2 mx-auto space-y-3 py-6 text-center">
      <h2 className="font-bold text-4xl">Welcome to Recipe Book</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="bg-rose-600 rounded-md py-4 px-2 text-white cursor-pointer"
          onClick={() => handleNavigate("recipes")}
        >
          <h3 className="font-bold text-xl">Browse Recipes</h3>
          <p>Explore our collection of delicious recipes</p>
        </div>
        <div
          className="bg-rose-600 rounded-md py-4 px-2 text-white cursor-pointer"
          onClick={() => handleNavigate("categories")}
        >
          <h3 className="font-bold text-xl">Browse Categories</h3>
          <p>Explore our collection of delicious recipes</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
