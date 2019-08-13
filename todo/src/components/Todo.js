import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("Todo-state", state.todoItems);

  return (
    <>
      <h1>TODO LIST</h1>
      {state.todoItems.map(item => (
        <div key={item.id}>{item.item}</div>
      ))}
    </>
  );
};

export default Todo;
