import { tasksService } from "../../../../services/taskServices";

export async function taskLoader({ params }) {
  const { id } = params;
  const token = localStorage.getItem("token");
  const task = await tasksService.getTaskById(id, token);
  return { task };
}
