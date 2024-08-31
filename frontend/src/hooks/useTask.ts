import { useAtom } from "jotai";
import { tasksAtom } from "../store/taskAtoms";
import { tasksService } from "../services/taskServices";
import { useState } from "react";
export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async (token: string) => {
    setLoading(true);
    await tasksService
      .getTasks(token)
      .then((data) => {
        setLoading(false);
        setTasks(data);
      })
      .catch(() => {
        setLoading(false);
        setError("Fetching tasks failed");
      });
  };

  return { tasks, setTasks, fetchTasks, error, loading };
};
