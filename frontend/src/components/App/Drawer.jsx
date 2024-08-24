import PropTypes from "prop-types";
import useDrawer from "../../hooks/useDrawer";
import { LuPanelRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import extractPathSegments from "../../utils/extractPathSegments";
function Drawer(props) {
  const { isOpen, toggleDrawer } = useDrawer();
  const path = extractPathSegments(props.pageName);
  return (
    <div className={`drawer ${isOpen ? "lg:drawer-open" : ""}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="flex flex-col gap-2 p-4 drawer-content">
        {/* Page content here */}
        <div className="flex items-center h-12 gap-4">
          <LuPanelRight
            onClick={toggleDrawer}
            className={`${isOpen ? "hidden" : "block"}`}
          />
          <div className="text-sm breadcrumbs">
            <ul>
              {path.map((segment, index) => (
                <li key={index}>
                  {index === path.length - 1 ? (
                    `${segment === "App" ? "Home" : segment}`
                  ) : segment === "App" ? (
                    <Link to={"../app"}>Home</Link>
                  ) : (
                    <Link to={`../${segment.toLowerCase()}`}>{segment}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>{props.children}</div>
      </div>

      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={toggleDrawer}
        ></label>
        <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
          <div className="flex flex-row items-center justify-around">
            <a className="text-xl btn btn-ghost no-animation hover:bg-inherit">
              <img src="../../public/Todoify.svg" className="h-1/2 " />
              Todoify
            </a>
            <LuPanelRight
              onClick={toggleDrawer}
              className={`size-4 ${isOpen ? "block" : "hidden"}`}
            />
          </div>

          {/* Sidebar content here */}
          <li>
            <Link to={"dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"tasks"}>My Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pageName: PropTypes.string.isRequired,
};

export default Drawer;
