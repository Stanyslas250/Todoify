import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { subtaskService } from "../services/subTaskServices";
import { Subtask } from "../utils/types/todoify";
import toast from "react-hot-toast";

export function useSubtaskMutation(taskId: number, subtask: Subtask) {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await subtaskService.createSubtask(taskId, subtask, token);
    },
    onError: (error) => {
      toast.error(`Error adding subtask:${error.message}`);
    },
    onSuccess: () => {
      toast.success("Subtask added successfully");
    },
  });
}
