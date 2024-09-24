/**
 * Renders the Home component.
 * Retrieves the current location using useLocation hook.
 * Renders a Drawer component with the current page name as a prop and an Outlet component inside.
 * @returns JSX element representing the Home component.
 */

import { Outlet, useLocation, Navigate } from "react-router-dom";
import Drawer from "../components/App/Drawer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useAuth } from "../hooks/useAuth";

const queryClient = new QueryClient();

function Home() {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) return <Navigate to={"/login"} replace />;
  if (location.pathname === "/app")
    return <Navigate to={`${location.pathname}/dashboard`} replace />;

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
