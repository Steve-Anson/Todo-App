import { useState, useEffect } from "react";
import { getAllTodos } from "../services/TodoService";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetAllTodos();
  }, []);

  function fetAllTodos() {
    getAllTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="font-mono">
      <h1 className="text-center text-5xl bg-blue-950 text-white py-6 mb-4">
        Todo List
      </h1>
      <div className="px-6">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
