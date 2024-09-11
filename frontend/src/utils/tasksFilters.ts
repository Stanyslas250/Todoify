import { dateUtils } from "./dateUtils";
import { Task, Filter, DueDate } from "./types/todoify";

const FilterList = {
  all: "all",
  completed: "completed",
  priority: {
    highPriority: "Hight",
    lowPriority: "Low",
    mediumPriority: "Medium",
  },
  // Add more filter options as needed
};

const dueDate = DueDate;
export const applyFilters = (tasks: Task[], filters: Filter) => {
  let filteredTasks = tasks;

  if (filters.completed !== undefined && !filters.completed) {
    filteredTasks = filteredTasks.filter(
      (task) => task.completed === filters.completed
    );
  }

  if (filters.priority !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === filters.priority
    );
  }

  if (filters.dateFilter !== dueDate.All) {
    const currentDate = new Date();

    switch (filters.dateFilter) {
      case dueDate.thisMonth:
        filteredTasks = filteredTasks.filter((task) =>
          dateUtils.isInCurrentMonth(task.due_date)
        );

        break;

      case dueDate.nextWeek:
        filteredTasks = filteredTasks.filter((task) =>
          dateUtils.isInNextWeek(task.due_date)
        );

        break;

      case dueDate.nextMonth:
        filteredTasks = filteredTasks.filter(
          (task) =>
            dateUtils.getDaysDifference(task.due_date) >= 30 &&
            dateUtils.getDaysDifference(task.due_date) >= 0
        );
        break;

      case dueDate.thisWeek:
        filteredTasks = filteredTasks.filter((task) =>
          dateUtils.isInCurrentWeek(task.due_date)
        );

      // Add more cases for other date filters as needed

      default:
        break;
    }
  }

  return filteredTasks;
};
