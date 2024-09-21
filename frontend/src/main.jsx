import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import WelcomeHome from "./views/WelcomeHome.jsx";
import Home from "./views/Home.jsx";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./views/ErrorPage.jsx";
import Dashboard from "./views/App/Dashboard.jsx";
import Task from "./views/App/Task.jsx";
import Schedule from "./views/App/Schedule.jsx";
import Project from "./views/App/Project.jsx";
import TaskDetail from "./views/App/tasks/[id]/index.jsx";
import { taskLoader } from "./views/App/tasks/[id]/taskLoader.js";

const router = createBrowserRouter([
  { path: "/", element: <WelcomeHome /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/app",
    element: <Home />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "tasks",
        element: <Task />,
        children: [
          { path: ":id", element: <TaskDetail />, loader: taskLoader },
        ],
      },
      { path: "schedule", element: <Schedule /> },
      { path: "projects", element: <Project /> },
    ],
  },
  { path: "/app/*", element: <ErrorPage /> },
  { path: "*", element: <Navigate to={"/app"} replace /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
