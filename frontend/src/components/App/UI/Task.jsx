import { useTasks } from "../../../hooks/useTask";
import { dateUtils } from "../../../utils/dateUtils";

function Task() {
  const { data: tasks } = useTasks();
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-row items-center justify-between p-3 rounded-lg hover:bg-accent/10"
        >
          <div>
            <h2 className="text-lg font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <div
              className={`badge ${
                task.completed
                  ? "badge-success"
                  : dateUtils.getDaysDifference(task.due_date) < 1
                  ? "badge-error"
                  : dateUtils.getDaysDifference(task.due_date) > 3
                  ? "badge-info"
                  : "badge-warning"
              }
              `}
            >
              {task.due_date
                ? dateUtils.format(task.due_date, "EEEE d MMMM yyyy")
                : "No due date"}
            </div>
          </div>
          <input
            type="checkbox"
            checked={task.completed}
            className="checkbox"
          />
        </div>
      ))}
    </div>
  );
}

export default Task;
