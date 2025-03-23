import deleteicon from "../icons/deleteicon.png";
import editicon from "../icons/editicon.png";
import { useNavigate } from "react-router-dom";
import UpdateTodoForm from "./UpdateTodoForm";
import { useState } from "react";
import { getTodo } from "../services/TodoService";

const TodoItem = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(todo);

  function updateTodo(id) {
    setOpen(true);
    // getTodo(id)
    //   .then((response) => {
    //     console.log(response.data);
    //     setTodos(response.data);
    //   })
    //   .catch((error) => console.error(error));
  }

  return (
    <>
      <UpdateTodoForm
        setTodos={setTodos}
        todos={todos}
        open={open}
        onClose={() => setOpen(false)}
      />

      <div className="flex border-4 border-b-gray-900 mb-2 rounded-md font-semibold text-md">
        <h2 className="border-r-2 p-4 w-1/4 bg-white">{todos.title}</h2>
        <p className="border-r-2 p-4  w-1/2 bg-white">{todos.description}</p>
        <p className="border-r-2 py-4 px-4 w-1/11 bg-white">{todos.dueDate}</p>
        <p
          className={`border-r-2 text-center flex items-center justify-center p-4 w-1/10 ${
            todos.completed ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {todos.completed ? "Completed" : "Pending"}
        </p>
        <div className="flex w-1/12 space-x-4 py-2 px-4 bg-white">
          <button onClick={() => updateTodo(todos.id)}>
            <img className="cursor-pointer" src={editicon}></img>
          </button>
          <button>
            <img className="cursor-pointer" src={deleteicon}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
