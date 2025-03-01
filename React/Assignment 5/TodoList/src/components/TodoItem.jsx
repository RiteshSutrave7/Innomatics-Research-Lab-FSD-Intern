import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditInputChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      onEditTodo(todo.id, editInput);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditInput(todo.text); // Revert input to original text
  };


  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="view" onDoubleClick={handleDoubleClick}>
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        {!isEditing ? (
          <label className="todo-label">{todo.text}</label>
        ) : (
          <form onSubmit={handleEditSubmit}>
            <input
              className="edit-input"
              value={editInput}
              onChange={handleEditInputChange}
              onBlur={handleEditSubmit} // Submit on blur
              autoFocus
            />
          </form>
        )}
        <button className="destroy" onClick={() => onDeleteTodo(todo.id)}></button>
      </div>
      {isEditing && (
        <div className="editing-buttons">
          <button className="save-button" onClick={handleEditSubmit}>Save</button>
          <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;