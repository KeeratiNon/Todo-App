import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [update, setUpdate] = useState({ status: false, todoIndex: -1 });

  const clearInput = () => {
    setInputTodo("");
    if (update.status) {
      setUpdate({ status: false, todoIndex: -1 });
    }
  };
  const handleAddTodo = () => {
    if (inputTodo !== "") {
      setUpdate({ status: false, todoIndex: -1 });
      setTodos([...todos, inputTodo]);
      clearInput();
    }
  };
  const handleRemoveTodo = (id) => {
    const newArr = todos.filter((_, index) => index + 1 !== id);
    setTodos(newArr);
  };
  const handleEditTodo = (id) => {
    setUpdate({ status: true, todoIndex: id - 1 });
    setInputTodo(todos[id - 1]);
  };
  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[update.todoIndex] = inputTodo;
    setTodos(newTodos);
    clearInput();
  };
  return (
    <div className="todo-container">
      <header className="todo-container-header">
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Enter your task ..."
            className="todo-add-input"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
          />
          {update.status ? (
            <button className="btn-add" onClick={handleUpdateTodo}>
              <p>Update</p>
            </button>
          ) : (
            <button className="btn-add" onClick={handleAddTodo}>
              <p>Add</p>
            </button>
          )}
        </div>
      </header>
      <main className="todo-container-main">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              id={index + 1}
              todo={todo}
              handleRemoveTodo={handleRemoveTodo}
              handleEditTodo={handleEditTodo}
            />
          );
        })}
      </main>
    </div>
  );
};

export default TodoList;
