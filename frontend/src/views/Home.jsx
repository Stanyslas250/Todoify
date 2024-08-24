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
