import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function addItem(task) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  function toggleItem(item) {
    dispatch({ type: "TOGGLE", payload: item });
  }

  console.log("App-state", state);

  return (
    <div className="App">
      <h1>Todo List: </h1>
      <TodoForm addItem={addItem} />
      <TodoList todos={state} toggle={toggleItem} />
    </div>
  );
}

export default App;
