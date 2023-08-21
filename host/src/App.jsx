import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";
import { TodoApp } from "todo/todo";
import { TodoListApp } from "todolist/todolist";

const App = () => {
  const [selectedMicrofrontend, setSelectedMicrofrontend] = useState("TodoApp");

  const handleSelectTodoApp = () => {
    setSelectedMicrofrontend("TodoApp");
  };

  const handleSelectTodoListApp = () => {
    setSelectedMicrofrontend("TodoListApp");
  };

  return (
    <div className="app-container">
     <nav className="navbar">
  <ul>
    <li onClick={handleSelectTodoApp} className={selectedMicrofrontend === "TodoApp" ? "selected" : ""}>Todo</li>
    <li onClick={handleSelectTodoListApp} className={selectedMicrofrontend === "TodoListApp" ? "selected" : ""}>TodoList</li>
  </ul>
</nav>

{/* Render the selected microfrontend */}
<div className="microfrontend-container">
  {selectedMicrofrontend === "TodoApp" ? <TodoApp /> : <TodoListApp />}
</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
