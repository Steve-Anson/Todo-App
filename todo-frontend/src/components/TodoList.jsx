import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "Learn Java",
      description: "Learn Java from scratch",
      completed: false,
      dueDate: "2025-03-25",
    },
    {
      id: 2,
      title: "Learn React",
      description: "Learn React from scratch",
      completed: true,
      dueDate: "2025-03-25",
    },
    {
      id: 3,
      title: "Learn Python",
      description: "Learn Python from scratch",
      completed: false,
      dueDate: "2025-03-25",
    },
    {
      id: 4,
      title: "Learn JavaScript",
      description: "Learn JavaScript from scratch",
      completed: true,
      dueDate: "2025-03-25",
    },
    {
      id: 5,
      title: "Learn C++",
      description: "Learn C++ from scratch",
      completed: false,
      dueDate: "2025-03-25",
    },
  ];

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
