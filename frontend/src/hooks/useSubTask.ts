import { subTaskAtom, subTasksAtom } from "../store/subTaskAtom";
import { subtaskService } from "../services/subTaskServices";
import { useAtom } from "jotai";
import { useState } from "react";

type Params = {
  taskId: number;
  token: string;
};

export const useSubTask = () => {
  const [subTasks, setSubTasks] = useAtom(subTasksAtom);
  const [subTask, setSubTask] = useAtom(subTaskAtom);
  const [error, setError] = useState<string>("");

  const fetchSubtasks = (param: Params) => {
    const { taskId, token } = param;
    subtaskService
      .getSubtasks(taskId, token)
      .then((data) => setSubTasks(data))
      .catch((error) => setError(error.message));
  };

  return { subTasks, subTask, fetchSubtasks };
};
