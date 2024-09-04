import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    
    addTodo(newTodo);
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
