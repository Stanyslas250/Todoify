import PropTypes from "prop-types";
import FilterSetting from "./FilterSetting";
import { FilterProvider } from "../../../context/FilterContext";

function BentoElement(props) {
  return (
    <FilterProvider>
      <div
        className={`${props.className} p-4 bg-base-200 h-96 md:h-svh flex flex-col gap-4 rounded-xl`}
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="sticky text-xl font-semibold">{props.title}</h2>
          {props.filterComplettion && (
            <FilterSetting otherFilters={props.otherFilters} sortOptions />
          )}
        </div>
        <div className="overflow-y-auto ">{props.children}</div>
      </div>
    </FilterProvider>
  );
}

BentoElement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  filterComplettion: PropTypes.bool,
  otherFilters: PropTypes.bool,
  children: PropTypes.node,
};

export default BentoElement;
