import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import NotFoundPage from "./pages/NotFoundPage";
import ReciepesDetail from "./pages/ReciepesDetail";
import CategoryRecipes from "./pages/CategoryRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/:recipeId",
        element: <ReciepesDetail />,
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            path: ":categoryId",
            element: <CategoryRecipes />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
