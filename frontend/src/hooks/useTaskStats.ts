// src/hooks/useTaskStats.ts

import { useQuery } from "@tanstack/react-query";
import { taskService } from "../services/api";
import { Task } from "../utils/types/todoify";

interface TaskStats {
  completedTasks: number;
  incompleteTasks: number;
}

export const useTaskStats = (): TaskStats => {
  const { data: tasks } = useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: taskService.getTasks,
  });

  if (!tasks) {
    return { completedTasks: 0, incompleteTasks: 0 };
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  return { completedTasks, incompleteTasks };
};
