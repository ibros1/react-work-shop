import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const handleClick = () => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    dispatch({
      type: "save",
      payload: newTodo,
    });
  };
  return (
    <div className="">
      <h1 className="myTodosH1 text-2xl font-semibold py-2">My Todos</h1>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
          className="border border-gray-400 px-2 rounded-md"
        />

        <button
          className="bg-slate-800 text-white rounded-md px-2 cursor-pointer"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
