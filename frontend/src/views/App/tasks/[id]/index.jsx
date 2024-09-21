import { useLoaderData } from "react-router-dom";
export default function TaskDetail() {
  const { task } = useLoaderData();
  console.log(task);
  return <div>{task.title}</div>;
}
