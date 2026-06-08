import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PostContext } from "./PostContext";

const PostDetail = () => {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(id);
  const post = posts.find((p) => p.id === currentId);
  console.log(posts);
  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className="border border-gray-300 px-2 py-4 my-3 w-[40%]">
      <h2 className="font-semibold text-xl">{post.title}</h2>
      <p>{post.content}</p>
      <button
        className="bg-blue-600 text-white rounded-md px-2 py-1"
        onClick={() => handleNavigation("prev")}
      >
        Previous
      </button>
      {posts[posts.length - 1] && (
        <button
          className="bg-gray-300 text-black rounded-md px-2 py-1"
          onClick={() => handleNavigation("next")}
        >
          Next
        </button>
      )}
      {location.state && (
        <p>You navigated here from post ID: {location.state.fromPostId}</p>
      )}
    </div>
  );
};

export default PostDetail;
