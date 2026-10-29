# Task App (React Forms and Routing)

A React app with a task list, a task detail page and a task form with validation. It uses React Router and mock data (no backend needed).

## Features
- Task list page (`/`)
- Task detail page with direct links (`/tasks/1`)
- New task form with validation (`/tasks/new`)
- "Task not found" message for invalid ids
- Mock fetch with a simulated delay

## Tech Stack
- React 19 (Vite)
- React Router DOM

## Prerequisites
Check that Node.js and npm are installed:

```bash
node -v    # should be v18 or higher
npm -v
```

If not installed, download Node.js (LTS) from https://nodejs.org.

## Execution Process

**Step 1: Clone the repository**
```bash
git clone https://github.com/Suman748/task-app.git
```

**Step 2: Go into the project folder**
```bash
cd task-app
```

**Step 3: Install dependencies**
```bash
npm install
```

**Step 4: Start the development server**
```bash
npm run dev
```

**Step 5: Open the app**
Go to http://localhost:5173 in your browser.

To stop the server, press `Ctrl + C` in the terminal.

## Production Build (optional)
```bash
npm run build      # creates the dist/ folder
npm run preview    # serves the build locally
```

## Routes

| Path | Page |
|---|---|
| `/` | Task list |
| `/tasks/new` | New task form |
| `/tasks/:id` | Task detail (for example `/tasks/1`) |

## Project Structure

```
task-app/
  index.html
  package.json
  src/
    main.jsx              router setup
    data/tasks.js         mock data and fetch function
    pages/TaskList.jsx    list screen
    pages/TaskDetail.jsx  detail screen
    pages/TaskForm.jsx    form with validation
```

## How to Test
1. Open `/tasks/new`, submit an empty or short title (less than 3 characters), and the validation error shows.
2. Enter a valid title, submit, and you are taken back to the list.
3. Open `/tasks/1` directly in the browser and the detail page loads.
4. Open `/tasks/999` and the "Task not found" message shows.

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page | Press F12 and check the Console for errors. Make sure all files in `src/pages` and `src/data` are not empty. |
| `Failed to resolve import "react-router-dom"` | Run `npm install react-router-dom` |
| `npm: command not found` | Install Node.js and reopen the terminal |
| Port 5173 already in use | Stop the other server, or run `npm run dev -- --port 3000` |
| `Cannot find module` | Delete `node_modules` and run `npm install` again |

## Author
Suman748
