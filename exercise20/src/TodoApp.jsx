import { useReducer } from "react";

import { initialState, reducer } from "./reducer";
import { TodoContext } from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div className="bg-white px-2 py-4 rounded-md">
        <TodoContext.Provider value={{ state, dispatch }}>
          <TodoForm />
          <TodoList />
        </TodoContext.Provider>
      </div>
    </div>
  );
};

export default TodoApp;
