import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { json } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import App from "./App";
import { getUserName } from "./api/auth";
import { SubCategory } from "./pages/Sub-Category";
import { loadCategoryById } from "./api/categorie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    loader: async () => {
      const username = await getUserName().then((r) => r);
      return defer({ username });
    },
  },
  {
    path: "home/subcategory/:id",
    element: <SubCategory />,
    loader: async ({ params }) => {
      const subcategory = await loadCategoryById(params.id);
      console.log(subcategory.name);
      return subcategory.name;
    },
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
