import { useReducer } from "react";

import { initialState, reducer } from "./reducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./Style.module.css";
import { TodoContext } from "./TodoContext";
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div className={styles.todoApp}>
        <TodoContext.Provider value={{ state, dispatch }}>
          <TodoForm />
          <TodoList />
        </TodoContext.Provider>
      </div>
    </div>
  );
};

export default TodoApp;
