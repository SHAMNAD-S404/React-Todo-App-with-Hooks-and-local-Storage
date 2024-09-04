import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, updateTodo, deleteTodo }) {

  return (

    <ul className="todo-list">

      {todos.map((todo) => (

        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}

        />
        
      ))}
      
    </ul>

  );
}

export default TodoList;
