import { Link } from "react-router-dom";
import { recipes } from "./data";

const Recipes = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <span className="inline-block bg-rose-100 text-rose-800 text-sm px-2 py-1 rounded">
                {recipe.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
