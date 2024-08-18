import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import WelcomeHome from "./views/WelcomeHome.jsx";
import Home from "./views/Home.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <WelcomeHome /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/app", element: <Home /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
