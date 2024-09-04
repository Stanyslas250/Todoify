import PropTypes from "prop-types";
import { LuCheckCircle } from "react-icons/lu";
import MenuItems from "../UI/MenuItems";

function Filter(props) {
  const dueDate = {
    all: "All",
    thisMonth: "This Month",
    nextWeek: "Next Week",
    nextMonth: "Next Month",
    // Add more date options as needed
  };

  if (props.filterType === "status") {
    return (
      <div>
        <label>Status:</label>
        <select value={props.filter.status} onChange={props.filterFunction}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    );
  } else if (props.filterType === "priority") {
    return (
      <div>
        <select
          className="w-full select select-ghost focus:outline-none"
          defaultValue={props.filter.priority}
          onChange={props.filterFunction}
        >
          <option value="all">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Hight">Hight</option>
        </select>
      </div>
    );
  } else if (props.filterType === "date") {
    return (
      <div>
        <select
          className="w-full select select-ghost focus:outline-none"
          defaultValue={props.filter.dateFilter}
          onChange={props.filterFunction}
        >
          {Object.keys(dueDate).map((date) => (
            <option key={date} value={date}>
              {dueDate[date]}
            </option>
          ))}
        </select>
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
