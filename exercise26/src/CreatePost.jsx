import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const { addPost } = useContext(PostContext);
  const handleAdd = (e) => {
    e.preventDefault();
    addPost(formData);
    navigate("/");
  };

  const handleForm = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="py-6 w-[40%]">
      <form action="" className="border border-gray-300 rounded-md px-4 py-6">
        <h2 className="font-bold text-2xl">Create Post</h2>
        <div className="grid py-2">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter title"
            className="border py-2 px-2 border-gray-300 rounded-md"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="grid py-2">
          <label htmlFor="">Content</label>
          <textarea
            type="text"
            name="content"
            id=""
            placeholder="Enter content"
            className="border py-2 px-2 border-gray-300 rounded-md"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-600 px-2 py-2 text-white rounded-lg"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
