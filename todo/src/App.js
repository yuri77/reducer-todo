import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo List: </h1>
    </div>
  );
}

export default App;
