import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTask";
import { dateUtils } from "../../../utils/dateUtils";
import { useFilters } from "../../../hooks/useFilters";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "../../../hooks/useAccount";

function TaskList() {
  const { tasks, setTasks, fetchTasks, incompleteTasks } = useTasks();
  const { account, token } = useAccount();
  const { filters } = useFilters();

  const { data } = useQuery({
    queryKey: ["tasks", account.username],
    queryFn: async () => {
      return await fetchTasks(token);
    },
  });
  const [tasksSee, setTasksSee] = useState(tasks);

  useEffect(() => {
    if (data && filters.completed) {
      setTasks(data);
      setTasksSee(data);
    } else {
      setTasksSee(incompleteTasks);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setTasks, filters.completed]);

  return (
    <div>
      {tasksSee.map((task) => (
        <div
          key={task.id}
          className="flex flex-row items-center justify-between p-3 rounded-lg hover:bg-accent/10"
        >
          <div
            className={`${task.completed ? " line-through " : "no-underline"}`}
          >
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

export default TaskList;
