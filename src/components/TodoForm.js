import React, { useState } from 'react';
import classes from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  function taskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.random().toString() });
      setTodo({ ...todo, task: '', key: Date.now() });
    }
  }

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit} action="">
        <input
          className={classes.input}
          onChange={taskInputChange}
          label="Task"
          type="text"
          name="task"
          value={todo.task}
        />
        <button className={classes.btn}>Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
