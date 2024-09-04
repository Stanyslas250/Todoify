import { LuFilter, LuHelpCircle } from "react-icons/lu";
import { useFilters } from "../../../hooks/useFilters";
import PropTypes from "prop-types";
import Filter from "../filterUI/Filter";

FilterSetting.propTypes = {
  otherFilters: PropTypes.bool,
};

export default function FilterSetting(props) {
  const { filters, setFilters } = useFilters();

  const handleCompletedTask = () => {
    setFilters((prev) => ({ ...prev, completed: !prev.completed }));
  };

  const handleDateFilter = (filter) => {
    setFilters((prev) => ({ ...prev, dateFilter: filter }));
  };

  const handlePriorityFilter = (filter) => {
    setFilters((prev) => ({ ...prev, priority: filter }));
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
        <li>
          <Filter
            filterType={"completed"}
            filterFunction={handleCompletedTask}
            filter={filters}
          />
        </li>
        {props.otherFilters && (
          <div className="flex flex-col">
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-between pb-2">
              <h5 className="text-sm font-semibold">Filter by</h5>
              <LuHelpCircle size={16} />
            </div>
            <div>
              <li>
                <a
                  onClick={() => handleDateFilter("thisMonth")}
                  className={
                    filters.dateFilter === "thisMonth" ? "text-primary" : ""
                  }
                >
                  This Month
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDateFilter("thisWeek")}
                  className={
                    filters.dateFilter === "thisWeek" ? "text-primary" : ""
                  }
                >
                  This Week
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDateFilter("today")}
                  className={
                    filters.dateFilter === "today" ? "text-primary" : ""
                  }
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDateFilter("next7Days")}
                  className={
                    filters.dateFilter === "next7Days" ? "text-primary" : ""
                  }
                >
                  Next 7 Days
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDateFilter("next30Days")}
                  className={
                    filters.dateFilter === "next30Days" ? "text-primary" : ""
                  }
                >
                  Next 30 Days
                </a>
              </li>
              <div className="divider"></div>
              <li>
                <a
                  onClick={() => handlePriorityFilter("high")}
                  className={
                    filters.priorityFilter === "high" ? "text-primary" : ""
                  }
                >
                  High Priority
                </a>
              </li>
              <li>
                <a
                  onClick={() => handlePriorityFilter("medium")}
                  className={
                    filters.priorityFilter === "medium" ? "text-primary" : ""
                  }
                >
                  Medium Priority
                </a>
              </li>
              <li>
                <a
                  onClick={() => handlePriorityFilter("low")}
                  className={
                    filters.priorityFilter === "low" ? "text-primary" : ""
                  }
                >
                  Low Priority
                </a>
              </li>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
