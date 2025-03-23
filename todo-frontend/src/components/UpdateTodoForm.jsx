import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateTodo } from "../services/TodoService";

const UpdateTodoForm = ({ setTodos, todos, open, onClose }) => {
  const [title, setTitle] = useState(todos.title);
  const [description, setDescription] = useState(todos.description);
  const [completed, setIsCompleted] = useState(todos.completed);
  const [dueDate, setDueDate] = useState(todos.dueDate);

  //   useEffect(() => {
  //     setTitle(todos.title);
  //     setDescription(todos.description);
  //     setIsCompleted(todos.completed);
  //     setDueDate(todos.dueDate);
  //     console.log("inside");
  //   }, []);

  function UpdateTodo(e) {
    e.preventDefault();
    const todo = {
      title,
      description,
      completed,
      dueDate,
    };
    console.log(todo);

    updateTodo(todos.id, todo)
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => console.error(error));
    closeForm();
  }

  function closeForm() {
    onClose();
  }

  return (
    // backdrop
    <div
      onClick={closeForm}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors ${
          open ? "visible bg-black/20" : "invisible"
        }`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col space-y-2 w-[500px] bg-white rounded-xl shadow p-10 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="">
          <label className="block text-sm font-bold">Todo Name:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Todo Name"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="">
          <label className="block text-sm font-bold">Todo Description:</label>
          <textarea
            type="text"
            name="description"
            placeholder="Enter Todo Description"
            className="w-full p-2 border rounded resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="">
          <label className="block text-sm font-bold">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            placeholder="Enter Due Date"
            className="w-full p-2 border rounded"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </div>

        {/* <div className="flex flex-col">
          <label className="block text-sm font-bold">Due Date:</label>
          <DatePicker
            placeholderText="Enter Due Date"
            selected={dueDate}
            className="w-full p-2 border rounded"
            onChange={(e) => setDueDate(e)}
            dateFormat="yyyy-MM-dd"
          />
        </div> */}

        <div className="">
          <label className="block text-sm font-bold">Todo Status:</label>
          <select
            className="w-full border rounded py-2"
            value={completed}
            onChange={(e) => setIsCompleted(e.target.value === "true")}
          >
            <option className="text-center" value={false}>
              Pending
            </option>
            <option className="text-center" value={true}>
              Completed
            </option>
          </select>
        </div>
        <button
          onClick={(e) => UpdateTodo(e)}
          className="bg-blue-400 py-2 px-4 mt-2 rounded font-bold"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default UpdateTodoForm;
