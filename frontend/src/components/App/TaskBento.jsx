import { useEffect, useState } from "react";
import { useTasks } from "../../hooks/useTask";
import { useFilters } from "../../hooks/useFilters";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "../../hooks/useAccount";
import TaskList from "./UI/TaskList";

function TaskBento() {
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
      <TaskList tasksList={tasksSee} />
    </div>
  );
}

export default TaskBento;
