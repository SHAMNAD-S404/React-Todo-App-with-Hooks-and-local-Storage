import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, updateTodo, deleteTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText]   = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, { ...todo, text: editText });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  return (

    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
        className="todo-checkbox"
      />
      {isEditing ? (
        <div className="todo-edit-container">

          < input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-edit-input"

          />
          <button onClick={handleSave} className="todo-save-button">Save</button>
          <button onClick={handleCancel} className="todo-cancel-button">Cancel</button>
        </div>

      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      <div className="todo-actions">
        <button onClick={handleEdit} className="todo-edit-button">Edit</button>
        <button onClick={() => deleteTodo(todo.id)} className="todo-delete-button">Delete</button>
      </div>
      
    </li>
  );
}

export default TodoItem;
