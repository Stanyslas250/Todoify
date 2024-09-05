import PropTypes from "prop-types";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

function ViewsChoose(props) {
  return (
    <div className="flex flex-row items-center gap-2 p-1 text-2xl rounded-md bg-primary">
      <div
        className={`p-1 rounded-sm ${
          props.isSwitch ? "" : "bg-secondary"
        } cursor-pointer`}
        onClick={props.onClick}
      >
        <LuLayoutGrid />
      </div>
      <div
        className={`p-1 rounded-sm ${
          props.isSwitch ? "bg-secondary" : ""
        } cursor-pointer`}
        onClick={props.onClick}
      >
        <LuLayoutList />
      </div>
    </div>
  );
}

ViewsChoose.propTypes = {
  isSwitch: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default ViewsChoose;
