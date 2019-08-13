import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoForm />
    </div>
  );
}

export default App;
