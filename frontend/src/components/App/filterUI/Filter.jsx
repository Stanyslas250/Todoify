import PropTypes from "prop-types";
import { LuCheckCircle } from "react-icons/lu";
import MenuItems from "../UI/MenuItems";

function Filter(props) {
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
        <label>Priority:</label>
        <select value={props.filter.priority} onChange={props.filterFunction}>
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    );
  } else if (props.filterType === "date") {
    return (
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={props.filter.due_date}
          onChange={props.filterFunction}
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
