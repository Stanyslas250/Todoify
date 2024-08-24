/**
 * Renders the Home component.
 * Retrieves the current location using useLocation hook.
 * Renders a Drawer component with the current page name as a prop and an Outlet component inside.
 * @returns JSX element representing the Home component.
 */

import { Outlet, useLocation } from "react-router-dom";
import Drawer from "../components/App/Drawer";

function Home() {
  const location = useLocation();
  return (
    <Drawer pageName={location.pathname}>
      <Outlet />
    </Drawer>
  );
}

export default Home;
