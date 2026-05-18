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
          <li key={todo.id}>
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
            <button onClick={() => handleRemove(todo.id)}>remove</button>
          </li>
        ))
      ) : (
        <p>no items found yet!</p>
      )}
    </div>
  );
};

export default TodoList;
