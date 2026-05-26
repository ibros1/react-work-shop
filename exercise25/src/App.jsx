import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
