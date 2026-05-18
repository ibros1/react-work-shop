import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import styles from "./Style.module.css";
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
      <h1 className="myTodosH1">My Todos</h1>
      <div className={styles.TodoForm}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />

        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default TodoForm;
