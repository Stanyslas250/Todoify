import PropTypes from "prop-types";

function MenuItems(props) {
  return (
    <div className="flex flex-row justify-between" onClick={props.onClick}>
      <div className="flex flex-row items-center gap-2">
        {props.icon}
        <h6>{props.label}</h6>
      </div>

      {props.children}
    </div>
  );
}

MenuItems.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuItems;
