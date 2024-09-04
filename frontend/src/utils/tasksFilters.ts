import { dateUtils } from "./dateUtils";
import { Task, Filter } from "./types/todoify";

export const FilterList = {
  all: "all",
  completed: "completed",
  priority: {
    highPriority: "High",
    lowPriority: "Low",
    mediumPriority: "Medium",
  },
  dueDate: {
    all: "all",
    thisMonth: "This Month",
    nextWeek: "Next Week",
    nextMonth: "Next Month",
    // Add more date options as needed
  },
  // Add more filter options as needed
};

export const applyFilters = (tasks: Task[], filters: Filter) => {
  let filteredTasks = tasks;

  if (filters.completed !== undefined) {
    filteredTasks = filteredTasks.filter(
      (task) => task.completed === filters.completed
    );
  }

  if (filters.dateFilter !== FilterList.dueDate.all) {
    const currentDate = new Date();

    switch (filters.dateFilter) {
      case FilterList.dueDate.thisMonth:
        filteredTasks = filteredTasks.filter(
          (task) =>
            dateUtils.getDaysDifference(task.due_date.toISOString()) <= 30 &&
            dateUtils.getDaysDifference(task.due_date.toISOString()) >= 0
        );
        break;

      case FilterList.dueDate.nextWeek:
        filteredTasks = filteredTasks.filter(
          (task) =>
            dateUtils.getDaysDifference(task.due_date.toISOString()) <= 7 &&
            dateUtils.getDaysDifference(task.due_date.toISOString()) >= 0
        );
        break;

      case FilterList.dueDate.nextMonth:
        filteredTasks = filteredTasks.filter(
          (task) =>
            dateUtils.getDaysDifference(task.due_date.toISOString()) <= 30 &&
            dateUtils.getDaysDifference(task.due_date.toISOString()) >= 30
        );
        break;

      // Add more cases for other date filters as needed

      default:
        break;
    }
  }

  if (filters.priority !== "all") {
    // Implement priority filter logic here
    // For example, if the priority filter is "high", you can use the following logic:
    // filteredTasks = filteredTasks.filter((task) => task.priority === "high");
  }

  return filteredTasks;
};
