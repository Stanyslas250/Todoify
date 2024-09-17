import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTasks } from "./useTask";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";

export function useTaskMutation() {
  const { updateTask } = useTasks();
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["tasks"],
    mutationFn: async (task) => {
      const response = await updateTask(task.id, task, token);
      queryClient.invalidateQueries();
      return response;
    },
    onSuccess: (task) => {
      if (task.completed) {
        toast.success("Task Completed");
      } else {
        toast.success("Task Uncompleted");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
