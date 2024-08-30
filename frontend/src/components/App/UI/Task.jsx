import { dateUtils } from "../../../utils/dateUtils";

function Task() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      completed: false,
      due_date: "2022-01-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      completed: true,
      due_date: "2023-01-01",
    },
  ];
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
            readOnly
          />
        </div>
      ))}
    </div>
  );
}

export default Task;
