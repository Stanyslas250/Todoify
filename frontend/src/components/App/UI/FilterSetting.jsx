import { LuCheckCircle, LuFilter, LuHelpCircle } from "react-icons/lu";
import MenuItems from "./MenuItems";
import { useChecked } from "../../../hooks/useChecked";

export default function FilterSetting() {
  const { check, handleToggle } = useChecked(false);
  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="m-1 btn">
        <LuFilter />
      </div>
      <ul
        tabIndex={0}
        className="w-64 p-2 shadow dropdown-content menu rounded-box bg-base-300"
      >
        <li>
          <MenuItems
            icon={<LuCheckCircle />}
            label={"Completed Task"}
            onClick={handleToggle}
          >
            <input
              type="checkbox"
              className="toggle toggle-accent toggle-xs"
              checked={check}
              onClick={handleToggle}
            />
          </MenuItems>
        </li>
        <div className=" divider"></div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center justify-between">
            <h5 className="text-sm font-semibold">Filter by</h5>
            <LuHelpCircle size={16} />
          </div>
          <div>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}
