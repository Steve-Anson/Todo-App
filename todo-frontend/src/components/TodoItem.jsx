const TodoItem = ({ todo }) => {
  return (
    <div className="flex border-4 border-b-gray-900 mb-2 rounded-md font-semibold text-md">
      <h2 className="border-r-2 p-4 w-1/4 bg-white">{todo.title}</h2>
      <p className="border-r-2 p-4  w-1/2 bg-white">{todo.description}</p>
      <p className="border-r-2 py-4 px-4 w-1/6 bg-white">{todo.dueDate}</p>
      <p
        className={`text-center p-4 w-1/10 ${
          todo.completed ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TodoItem;
