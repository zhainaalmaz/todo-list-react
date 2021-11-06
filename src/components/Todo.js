import React from 'react';
import Button from './Button/button';
const Todo = ({ todo, toggleComplete, removeTodo }) => {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <Button onClick={handleRemoveClick}>Delete</Button>
    </div>
  );
};

export default Todo;
