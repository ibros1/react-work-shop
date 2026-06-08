import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Login from "./Login";
import ProtectedRoutes from "./protected/ProtectedRoutes";
import AuthProtected from "./protected/AuthProtected";
import PostDetail from "./postDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "/create-post",
        element: <ProtectedRoutes element={<CreatePost />} />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/login",
        element: <AuthProtected element={<Login />} />,
      },
    ],
  },
]);

export default router;
