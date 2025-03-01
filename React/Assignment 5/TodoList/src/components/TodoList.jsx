import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <AddTodo onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={toggleComplete}
              onEditTodo={editTodo}
              onDeleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;