// src/hooks/useTasks.ts

import { useQuery } from "@tanstack/react-query";
import { taskService } from "../services/api";
import { Task } from "../utils/types/todoify";

export const useTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: taskService.getTasks,
  });
};
