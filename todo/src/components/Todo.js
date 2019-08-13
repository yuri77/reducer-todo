import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("Todo-state", state);

  return <div>{state.item}</div>;
};

export default Todo;
