const TodoItem = ({ todo }) => {
  return (
    <div className="flex border-4 mb-2 rounded-md font-semibold">
      <h2 className="border-2 py-4 px-4 w-1/4 bg-amber-200 text-lg">
        {todo.title}
      </h2>
      <p className="border-2 py-4 px-4  w-1/2 bg-amber-200 text-lg">
        {todo.description}
      </p>
      <p className="border-2 py-4 px-4 w-1/6 bg-amber-200 text-lg">
        {todo.dueDate}
      </p>
      <p
        className={`border-2 text-center py-4 px-4 w-1/10 text-lg ${
          todo.completed ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TodoItem;
