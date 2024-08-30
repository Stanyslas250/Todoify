import PropTypes from "prop-types";
import useDrawer from "../../hooks/useDrawer";
import { LuLogOut, LuPanelRight, LuPlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import extractPathSegments from "../../utils/extractPathSegments";
import { menuItems } from "../../utils/menuItems";
import UserProfiles from "./UserProfiles";
import ThemSwapper from "./UI/ThemSwapper";
import { useAuth } from "../../hooks/useAuth";
function Drawer(props) {
  const { isOpen, toggleDrawer, changeSection } = useDrawer();
  const { logout } = useAuth();

  const path = extractPathSegments(props.pageName);
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate("/");
  };
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
        {/* TopNav */}
        <div className="flex items-center h-12 gap-4">
          <LuPanelRight
            onClick={toggleDrawer}
            className={`${isOpen ? "hidden" : "block"}`}
          />
          <div className="flex flex-row justify-between w-full pr-5 text-sm breadcrumbs">
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
            <div>
              <ThemSwapper />
            </div>
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
          <div className="w-full">
            <UserProfiles />
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
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center h-full gap-5 py-8 prose border-2 border-dashed cursor-pointer hover:bg-secondary/10 border-primary card">
                <LuPlus size={24} />
                <h6 className="font-semibold"> Add New Project </h6>
              </div>
              <li>
                <button
                  className="rounded-sm btn btn-neutral btn-outline text-accent"
                  onClick={handleLogout}
                >
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
