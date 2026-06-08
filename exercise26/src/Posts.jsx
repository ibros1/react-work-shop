import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts } = useContext(PostContext);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const filtredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(String(search).toLowerCase()),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-4 w-[40%] ">
      <div className="shadow-lg border border-gray-200 py-4 px-3">
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <label>Search Posts</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search...."
                className="border border-gray-300 py-2 px-2 rounded-lg flex-1"
                value={search} // Added controlled component pattern
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button
                type="submit"
                disabled={!search.trim()}
                className="bg-blue-600 disabled:bg-gray-300 px-2 py-2 text-white rounded-lg"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* list */}
        {filtredPosts.length > 0 ? (
          filtredPosts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className="block my-2">
              <h2 className="font-semibold text-xl">{post.title}</h2>
              <p className="text-sm">{post.content}</p>
            </Link>
          ))
        ) : (
          <p className="text-red-600 mt-4"> no post found </p>
        )}
      </div>
    </div>
  );
};

export default Posts;
