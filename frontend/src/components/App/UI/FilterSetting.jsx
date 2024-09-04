import { LuFilter, LuHelpCircle } from "react-icons/lu";
import { useFilters } from "../../../hooks/useFilters";
import PropTypes from "prop-types";
import Filter from "../filterUI/Filter";

FilterSetting.propTypes = {
  otherFilters: PropTypes.bool,
};

export default function FilterSetting(props) {
  const { filters, setFilters } = useFilters();
  const dateFilterOptions = {
    all: "all",
    thisMonth: "This Month",
    nextWeek: "Next Week",
    nextMonth: "Next Month",
    // Add more date options as needed
  };

  const handleCompletedTask = () => {
    setFilters((prev) => ({ ...prev, completed: !prev.completed }));
  };

  const handleDateFilter = (filterValue) => {
    const value = filterValue.target.value;
    setFilters((prev) => ({ ...prev, dateFilter: dateFilterOptions[value] }));
    console.log(dateFilterOptions[value]);
  };

  const handlePriorityFilter = (filterValue) => {
    const value = filterValue.target.value;
    setFilters((prev) => ({ ...prev, priority: value }));
    console.log(value);
  };

  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="m-1 btn">
        <LuFilter />
      </div>
      <ul
        tabIndex={0}
        className="w-64 p-2 shadow dropdown-content menu rounded-box bg-base-300"
      >
        <Filter
          filterType={"completed"}
          filterFunction={handleCompletedTask}
          filter={filters}
        />
        {props.otherFilters && (
          <div className="flex flex-col">
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h5 className="text-sm font-semibold">Filter by</h5>
              <LuHelpCircle size={16} />
            </div>
            <div>
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
