import { atom } from "jotai";
import { Subtask } from "../utils/types/todoify";

const subTasks: Subtask[] = [];
const subTask: Subtask = {
  id: 1,
  title: "Subtask 1",
  description: "Description 1",
  task_id: 1,
};
export const subTaskAtom = atom<Subtask>(subTask);

export const subTasksAtom = atom<Subtask[]>(subTasks);
