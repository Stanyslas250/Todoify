import { atom } from "jotai";

import { Task } from "../utils/types/todoify";

const tasks: Array<Task> = [];

export const tasksAtom = atom(tasks);
export const selectedTaskAtom = atom(null);

export const addTaskAtom = atom((state: Array<Task>, task: Task) => [
  ...state,
  task,
]);

export const updateTaskAtom = atom((state: Array<Task>, updatedTask: Task) => {
  return state.map((task) => (task.id === updatedTask.id ? updatedTask : task));
});

export const deleteTaskAtom = atom((state: Array<Task>, taskId: number) =>
  state.filter((task) => task.id !== taskId)
);

export const toggleTaskCompletionAtom = atom(
  (state: Array<Task>, taskId: number) =>
    state.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
);

export const completedTasksAtom = atom((state: Array<Task>) =>
  state.filter((task) => task.completed)
);

export const incompleteTasksAtom = atom((state: Array<Task>) =>
  state.filter((task) => !task.completed)
);
