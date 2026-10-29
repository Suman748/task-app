export const tasks = [
  { id: 1, title: "Learn React Router", status: "In Progress" },
  { id: 2, title: "Build task form", status: "Todo" },
];

// fetch basics: simulates an API call
export const fetchTasks = () =>
  new Promise((resolve) => setTimeout(() => resolve(tasks), 300));