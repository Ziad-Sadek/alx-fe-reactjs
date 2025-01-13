import React, { useState } from "react";


const AddTodoForm = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};


const TodoItem = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <li
      key={todo.id}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => handleToggleTodo(todo.id)}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          handleDeleteTodo(todo.id);
        }}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Finish project", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo("");
      document.querySelector("input").focus();
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <AddTodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
