import PropTypes from "prop-types";
import FilterSetting from "./FilterSetting";

function BentoElement(props) {
  return (
    <div
      className={`${props.className} p-4 bg-base-200 h-96 md:h-svh flex flex-col gap-4 rounded-xl`}
    >
      <div className="flex flex-row items-center justify-between">
        <h2 className="sticky text-xl font-semibold">{props.title}</h2>
        {props.filter && <FilterSetting />}
      </div>
      <div className="overflow-y-auto ">{props.children}</div>
    </div>
  );
}

BentoElement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
};

export default BentoElement;
