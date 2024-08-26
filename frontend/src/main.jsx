import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  { path: "/", element: <WelcomeHome /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/app",
    element: <Home />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "tasks", element: <Task /> },
      { path: "schedule", element: <Schedule /> },
      { path: "projects", element: <Project /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
