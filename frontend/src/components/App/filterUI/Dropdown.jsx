import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import UseOutsideClick from "../../../hooks/UseOutsideClick";

function Dropdown(props) {
  const [check, setCheck] = useState(false);
  const dropdownRef = useRef(null);

  UseOutsideClick(dropdownRef, () => {
    setCheck(false);
  });

  return (
    <div ref={dropdownRef} className="w-full dropdown dropdown-left">
      <div
        className={`cursor-pointer flex flex-row items-center justify-between gap-4 p-4 rounded-md  hover:bg-base-100 ${
          check ? "bg-base-100" : "bg-base-300"
        }`}
        onClick={() => setCheck(!check)}
      >
        <div className="flex flex-row items-center gap-4">
          {props.icon}
          {props.placeholder && (
            <div className="text-base font-bold">{props.placeholder}</div>
          )}
        </div>

        <div className="flex flex-row items-center gap-2">
          {props.value}
          {check ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />}
        </div>
      </div>

      <ul
        className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${
          check ? "" : "hidden"
        }`}
      >
        {Object.keys(props.options).map((option, index) => (
          <li
            key={index}
            onClick={() => {
              setCheck(false);
              props.onClick(option);
            }}
          >
            <a>{props.options[option]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

export default Dropdown;
