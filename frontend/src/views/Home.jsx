/**
 * Renders the Home component.
 * Retrieves the current location using useLocation hook.
 * Renders a Drawer component with the current page name as a prop and an Outlet component inside.
 * @returns JSX element representing the Home component.
 */

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Drawer from "../components/App/Drawer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

const queryClient = new QueryClient();

function Home() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token ? navigate("/app/dashboard") : navigate("/login", { replace: true });
    console.log("Home useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <QueryClientProvider client={queryClient}>
      <Drawer pageName={location.pathname}>
        <Outlet />
      </Drawer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Home;
