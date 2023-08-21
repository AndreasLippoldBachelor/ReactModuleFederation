import React from 'react';
import './todolist.css';

const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
];

const TodoListApp = () => {
  return (
    <div className="app-container">
      <h1>Todos</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export {TodoListApp};//das war ein pronlem bei einer normalen anwendunf mit angular war das default auch bei todo so wird das ersz exportiert