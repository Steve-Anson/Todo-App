import { useState, useEffect } from "react";
import { getAllTodos } from "../services/TodoService";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetAllTodos();
  }, []);

  function fetAllTodos() {
    getAllTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="font-mono bg-blue-950 h-dvh">
      <h1 className="text-center text-5xl bg-blue-900 text-white py-6 mb-4">
        Todo List
      </h1>
      <TodoForm
        open={open}
        fetchTodos={() => fetAllTodos()}
        onClose={() => setOpen(false)}
      ></TodoForm>

      <div className="px-6 flex flex-col">
        <button
          className="bg-amber-400 py-2 px-4 border-4 mb-2 self-end"
          onClick={() => setOpen(true)}
        >
          Add Todo
        </button>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
