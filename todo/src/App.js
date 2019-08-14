import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function addItem(todo) {
    dispatch({ type: "ADD_TASK", payload: todo });
  }

  function toggleItem(todo) {
    dispatch({ type: "TOGGLE", payload: todo });
  }

  function clearItem() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  console.log("App-state", state);

  return (
    <div className="App">
      <h1>Todo List: </h1>
      <TodoForm addItem={addItem} />
      <TodoList todos={state} toggle={toggleItem} clearItem={clearItem} />
    </div>
  );
}

export default App;
