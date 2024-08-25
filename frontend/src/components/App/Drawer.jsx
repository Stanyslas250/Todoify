import PropTypes from "prop-types";
import useDrawer from "../../hooks/useDrawer";
import { LuLogOut, LuPanelRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import extractPathSegments from "../../utils/extractPathSegments";
import { menuItems } from "../../utils/menuItems";
function Drawer(props) {
  const { isOpen, toggleDrawer, changeSection } = useDrawer();
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
        <ul className="min-h-full p-4 bg-base-200 menu text-base-content w-80">
          <div className="flex flex-row items-center justify-around mb-4 ">
            <a className="text-xl btn btn-ghost no-animation hover:bg-inherit">
              <img src="../../public/Todoify.svg" className="h-1/2 " />
              Todoify
            </a>
            <LuPanelRight
              onClick={toggleDrawer}
              className={`size-4 ${isOpen ? "block" : "hidden"}`}
            />
          </div>
          <div className="flex flex-col justify-between grow">
            <div>
              {/* Sidebar content here */}
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    onClick={() => changeSection(item.id)}
                    className={`rounded-sm ${
                      path[path.length - 1].toLowerCase() === item.id
                        ? "active border-r-2 border-primary"
                        : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
            <div className="self-center">
              <li>
                <button className="rounded-sm btn btn-neutral btn-outline text-accent">
                  <LuLogOut className="size-4" />
                  Logout
                </button>
              </li>
            </div>
          </div>
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
