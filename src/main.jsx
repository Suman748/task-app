import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
import TaskForm from "./pages/TaskForm";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<TaskList />} />
    <Route path="/tasks/new" element={<TaskForm />} />
    <Route path="/tasks/:id" element={<TaskDetail />} />
  </Routes>
</BrowserRouter>