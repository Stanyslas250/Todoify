import { LuFilter, LuHelpCircle } from "react-icons/lu";
import { useFilters } from "../../../hooks/useFilters";
import PropTypes from "prop-types";
import Filter from "../filterUI/Filter";
import SortComponent from "../sortUI/SortComponent";

FilterSetting.propTypes = {
  otherFilters: PropTypes.bool,
  sortOptions: PropTypes.bool,
};

export default function FilterSetting(props) {
  const { filters, setFilters } = useFilters();
  const dateFilterOptions = {
    All: "All",
    thisMonth: "This Month",
    nextWeek: "Next Week",
    nextMonth: "Next Month",
    // Add more date options as needed
  };

  const handleCompletedTask = () => {
    setFilters((prev) => ({ ...prev, completed: !prev.completed }));
  };

  const handleDateFilter = (filterValue) => {
    setFilters((prev) => ({
      ...prev,
      dateFilter: dateFilterOptions[filterValue],
    }));
  };

  const handlePriorityFilter = (filterValue) => {
    setFilters((prev) => ({ ...prev, priority: filterValue }));
  };

  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="m-1 btn">
        <LuFilter />
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow w-72 dropdown-content menu rounded-box bg-base-300"
      >
        <Filter
          filterType={"completed"}
          filterFunction={handleCompletedTask}
          filter={filters}
        />
        {props.sortOptions && (
          <div className="flex flex-col">
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h5 className="text-sm font-semibold">Sort by</h5>
              <LuHelpCircle size={16} />
            </div>
            <div className="w-full">
              <SortComponent />
            </div>
          </div>
        )}
        {props.otherFilters && (
          <div className="flex flex-col">
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h5 className="text-sm font-semibold">Filter by</h5>
              <LuHelpCircle size={16} />
            </div>
            <div className="w-full">
              <Filter
                filterType={"priority"}
                filterFunction={handlePriorityFilter}
                filter={filters}
              />

              <Filter
                filterType={"date"}
                filterFunction={handleDateFilter}
                filter={filters}
              />
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
