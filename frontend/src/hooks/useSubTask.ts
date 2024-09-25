import { subTaskAtom, subTasksAtom } from "../store/subTaskAtom";
import { subtaskService } from "../services/subTaskServices";
import { useAtom } from "jotai";
import { useState } from "react";

export const useSubTask = () => {
  const [subTasks, setSubTasks] = useAtom(subTasksAtom);
  const [subTask, setSubTask] = useAtom(subTaskAtom);
  const [error, setError] = useState<string>("");

  const fetchSubtasks = (taskId: number, token: string) => {
    subtaskService
      .getSubtasks(taskId, token)
      .then((data) => setSubTasks(data))
      .catch((error) => setError(error.message));
  };

  return { subTasks, subTask, fetchSubtasks };
};
