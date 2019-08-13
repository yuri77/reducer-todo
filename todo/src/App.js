import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function addItem(task) {
    dispatch({ type: "ADD_TASK", payload: task });
  }

  console.log("App-state", state);
  return (
    <TodoContext.Provider value={state.todoItems}>
      <div className="App">
        <h1>Todo List: </h1>
        <TodoForm addItem={addItem} />
        {state.todoItems.map(item => (
          <TodoList key={item.id} item={item} />
        ))}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
