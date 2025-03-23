import { useState } from "react";
import { saveTodo } from "../services/TodoService";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ open, fetchTodos, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setIsCompleted] = useState(false);
  //   const [dueDate, setDueDate] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const navigate = useNavigate();

  function saveOrUpdateTodo(e) {
    e.preventDefault();
    const todo = {
      title,
      description,
      completed,
      dueDate,
    };
    closeForm();

    saveTodo(todo)
      .then((response) => {
        fetchTodos();
        navigate("/todos");
      })
      .catch((error) => console.error(error));
  }

  function closeForm() {
    onClose();
    setTitle("");
    setDescription("");
    setIsCompleted(false);
    setDueDate("");
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
        {/* <div className="">
          <label className="block text-sm font-bold">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            placeholder="Enter Due Date"
            className="w-full p-2 border rounded"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </div> */}
        <DatePicker
          placeholderText="Enter Due Date"
          selected={dueDate}
          className="w-full p-2 border rounded"
          onChange={(e) => setDueDate(e)}
          dateFormat="yyyy-MM-dd"
        />
        {/* <div className="">
          <label className="block text-sm font-bold">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            placeholder="Enter Due Date"
            className="w-full p-2 border rounded"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </div> */}
        <div className="">
          <label className="block text-sm font-bold">Todo Status:</label>
          <select
            className="w-full border rounded py-2"
            value={completed}
            onChange={(e) => setIsCompleted(e.target.value)}
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
          onClick={(e) => saveOrUpdateTodo(e)}
          className="bg-blue-400 py-2 px-4 mt-2 rounded font-bold"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
