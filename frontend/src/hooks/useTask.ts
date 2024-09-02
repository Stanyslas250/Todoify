import { useAtom } from "jotai";
import {
  tasksAtom,
  completedTasksAtom,
  incompleteTasksAtom,
} from "../store/taskAtoms";
import { tasksService } from "../services/taskServices";
import { useState } from "react";
import { Task } from "../utils/types/todoify";
export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [completedTasks] = useAtom(completedTasksAtom);
  const [incompleteTasks] = useAtom(incompleteTasksAtom);
  const [error, setError] = useState("");

  const fetchTasks = async (token: string) => {
    try {
      const data = await tasksService.getTasks(token);
      if (data) {
        setTasks(data);
        return data;
      }
    } catch (error) {
      setError("Fetching tasks failed");
    }
  };

  const addTask = async (task: Task, token: string) => {
    try {
      const data = await tasksService.createTask(task, token);
      if (data) {
        setTasks([...tasks, data]);
        return data;
      }
    } catch (error) {
      setError("Adding task failed");
    }
  };

  const updateTask = async (
    taskId: number,
    updatedTask: Task,
    token: string
  ) => {
    try {
      const data = await tasksService.updateTask(taskId, updatedTask, token);
      if (data) {
        const updatedTasks = [...tasks];
        updatedTasks.forEach((task, index) => {
          if (task.id === taskId) {
            updatedTasks[index] = data;
          }
        });
        setTasks(updatedTasks);
        return data;
      }
    } catch (error) {
      setError("Updating task failed");
    }
  };

  return {
    tasks,
    setTasks,
    fetchTasks,
    error,
    completedTasks,
    incompleteTasks,
    addTask,
    updateTask,
  };
};
