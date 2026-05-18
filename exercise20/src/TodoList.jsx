import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const handleChange = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
  return (
    <div>
      {state.length > 0 ? (
        state.map((todo) => (
          <li key={todo.id} className="list-none flex justify-between pt-4 ">
            <div className="">
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                name=""
                id=""
                onChange={() => handleChange(todo.id)}
              />
              <strong
                style={{
                  textDecoration: `${todo.completed ? "line-through" : "none"}`,
                }}
              >
                {" "}
                {todo.title}{" "}
              </strong>
            </div>
            <button
              className="bg-red-600 text-white px-2 rounded-md text-sm cursor-pointer"
              onClick={() => handleRemove(todo.id)}
            >
              remove
            </button>
          </li>
        ))
      ) : (
        <p>no items found yet!</p>
      )}
    </div>
  );
};

export default TodoList;
