import React from 'react';
import Todo from './Todo';
const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
