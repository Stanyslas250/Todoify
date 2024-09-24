import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [filters, setFilters] = useState({
    status: "all",
    priority: "All",
    completed: true,
    dateFilter: "All", // Add new filter for date
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};
FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
