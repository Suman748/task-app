import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Todo");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }
    // push into mock data here, then go back
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Task</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Todo</option><option>In Progress</option><option>Done</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}