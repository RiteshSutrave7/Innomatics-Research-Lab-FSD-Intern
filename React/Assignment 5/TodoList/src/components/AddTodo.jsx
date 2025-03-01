import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add task"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default AddTodo;