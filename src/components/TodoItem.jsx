import React from "react";

const TodoItem = ({ todo, handleRemoveTodo, handleEditTodo, id }) => {
  return (
    <div className="todo-item">
      <div className="todo-text">{todo}</div>
      <div className="todo-btn-container">
        <button
          className="btn-edit"
          onClick={() => {
            handleEditTodo(id);
          }}
        >
          Edit
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            handleRemoveTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
