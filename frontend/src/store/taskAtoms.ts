import { atom } from "jotai";

import { Task } from "../utils/types/todoify";

export const task: Task = {
  id: 1,
  title: "Task 1",
  description: "Description 1",
  due_date: new Date(),
  completed: false,
  priority: "Hight",
};

export const tasksAtom = atom<Task[]>([]);
export const selectedTaskAtom = atom(task);

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

export const completedTasksAtom = atom((get) =>
  get(tasksAtom).filter((task) => task.completed)
);

export const incompleteTasksAtom = atom((get) =>
  get(tasksAtom).filter((task) => !task.completed)
);