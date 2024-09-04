import React, { useState, useEffect } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  // Initialize `todos` with data from `localStorage` or an empty array
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // Update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
