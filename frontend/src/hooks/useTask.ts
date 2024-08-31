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
    try {
      const data = await tasksService.getTasks(token);
      if (data) {
        setLoading(false);
        setTasks(data);
        return data;
      }
    } catch (error) {
      setLoading(false);
      setError("Fetching tasks failed");
    } finally {
      setLoading(false);
    }
  };
  return { tasks, setTasks, fetchTasks, error, loading };
};
