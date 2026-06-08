import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Introduction to React", content: "Content of post 1" },
    {
      id: 2,
      title: "Understanding React Router",
      content: "Content of post 2",
    },
    { id: 3, title: "React Hooks in Depth", content: "Content of post 3" },
  ]);
  console.log(posts);
  const addPost = (post) =>
    setPosts((prev) => [...prev, { ...post, id: Date.now() }]);

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
