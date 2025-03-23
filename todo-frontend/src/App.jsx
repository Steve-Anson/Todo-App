import "./App.css";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http;//localhost:5173 */}
          <Route path="/" element={<TodoList />}></Route>

          {/* http://localhost:5173/todos */}
          <Route path="/todos" element={<TodoList />}></Route>

          {/* http://localhost:5173/todos/1 */}
          <Route path="/todos/:id" element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
