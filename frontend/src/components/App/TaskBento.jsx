import { useEffect, useState } from "react";
import { useTasks } from "../../hooks/useTask";
import { useFilters } from "../../hooks/useFilters";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "../../hooks/useAccount";
import TaskList from "./UI/TaskList";
import { applyFilters } from "../../utils/tasksFilters";

function TaskBento() {
  const { tasks, setTasks, fetchTasks } = useTasks();
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
    if (data) {
      if (data) {
        const filteredTasks = applyFilters(data, filters); // Use the applyFilters function
        setTasksSee(filteredTasks);
      }
    }
  }, [data, setTasks, filters]);

  return (
    <div>
      <TaskList tasksList={tasksSee} />
    </div>
  );
}

export default TaskBento;
