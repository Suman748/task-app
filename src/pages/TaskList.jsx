import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTasks } from "../data/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => { fetchTasks().then(setTasks); }, []);
  return (
    <div>
      <h1>Tasks</h1>
      <Link to="/tasks/new">+ New Task</Link>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}><Link to={`/tasks/${t.id}`}>{t.title}</Link> – {t.status}</li>
        ))}
      </ul>
    </div>
  );
}