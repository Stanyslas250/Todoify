import PropTypes from "prop-types";
import { LuCalendarSearch, LuCheckCircle, LuFlag } from "react-icons/lu";
import MenuItems from "../UI/MenuItems";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

function Filter(props) {
  const dueDate = {
    All: "All",
    thisMonth: "This Month",
    nextWeek: "Next Week",
    nextMonth: "Next Month",
    // Add more date options as needed
  };

  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(colorPriorities(props.filter.priority));
  }, [props.filter.priority]);

  const colorPriorities = (priority) => {
    switch (priority) {
      case "Low":
        return "#00a96e";

      case "Medium":
        return "#ffbe00";

      case "Hight":
        return "#ff5861";

      default:
        return "#00b5ff";
    }
  };
  const priorityOptions = {
    All: "All",
    Low: "Low",
    Medium: "Medium",
    Hight: "Hight",
    // Add more priority options as needed
  };

  if (props.filterType === "status") {
    return (
      <div>
        <label>Status:</label>
        <select onChange={props.filterFunction}>
          <option value="All">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    );
  } else if (props.filterType === "priority") {
    return (
      <Dropdown
        onClick={props.filterFunction}
        options={priorityOptions}
        value={props.filter.priority}
        icon={<LuFlag size={16} strokeWidth={2.75} color={color} />}
        placeholder={"Priority"}
      />
    );
  } else if (props.filterType === "date") {
    return (
      <div>
        <Dropdown
          onClick={props.filterFunction}
          options={dueDate}
          value={props.filter.dateFilter}
          icon={<LuCalendarSearch size={16} strokeWidth={2.75} />}
          placeholder={"Due Date"}
        />
      </div>
    );
  } else if (props.filterType === "completed") {
    return (
      <li>
        <MenuItems
          icon={<LuCheckCircle />}
          label={"Completed Task"}
          onClick={props.filterFunction}
        >
          <input
            type="checkbox"
            className="toggle toggle-accent toggle-xs"
            checked={props.filter.completed}
            readOnly
          />
        </MenuItems>
      </li>
    );
  } else {
    return null;
  }
}

Filter.propTypes = {
  filterType: PropTypes.string.isRequired,
  filterFunction: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
};

export default Filter;
