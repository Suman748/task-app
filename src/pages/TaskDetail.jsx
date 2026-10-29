import { useParams, Link } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskDetail() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return <p>Task not found. <Link to="/">Back</Link></p>;
  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.status}</p>
      <Link to="/">Back</Link>
    </div>
  );
}