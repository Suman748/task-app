# Task App (React Forms and Routing)

A small React app with a task list, a task detail page and a task form with validation. It uses React Router and mock data.

## Features
- Task list page (`/`)
- Task detail page with direct links (`/tasks/1`)
- New task form with validation (`/tasks/new`)
- "Task not found" message for invalid ids
- Mock fetch with simulated delay

## Tech Stack
- React (Vite)
- React Router DOM

## Requirements
- Node.js 18 or higher
- npm

## How to Run

```bash
# 1. Clone the repository
git clone https://github.com/Suman748/task-app.git

# 2. Go into the project folder
cd task-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

## Routes

| Path | Page |
|---|---|
| `/` | Task list |
| `/tasks/new` | New task form |
| `/tasks/:id` | Task detail |

## Project Structure

```
src/
  data/tasks.js        mock data and fetch function
  pages/TaskList.jsx   list screen
  pages/TaskDetail.jsx detail screen
  pages/TaskForm.jsx   form with validation
  main.jsx             router setup
```

## How to Test
1. Open `/tasks/new`, submit an empty or short title, and the validation error shows.
2. Open `/tasks/1` directly in the browser and the detail page loads.
3. Open `/tasks/999` and the "Task not found" message shows.

## Author
Suman748
