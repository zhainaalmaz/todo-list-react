import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Card from './components/Card/Card';

function App() {
  const [todos, setTodos] = useState([]);
  const localStorage_key = 'todos';

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(localStorage_key)); //useEffect server menen ishtegende koldonobuz,kak useState polnostyu ne obnovlyaet component, tolko to mesto gde on budet rabotat
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorage_key, JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Card>
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </Card>
    </div>
  );
}

export default App;
