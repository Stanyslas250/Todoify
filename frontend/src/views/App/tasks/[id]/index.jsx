import { useLoaderData } from "react-router-dom";
import { priorityBadge } from "../../../../utils/priorityColors";
import { dateUtils } from "../../../../utils/dateUtils";
import ActionBtn from "../../../../components/App/UI/ActionBtn";

export default function TaskDetail() {
  const { task } = useLoaderData();

  return (
    <div className="flex flex-col mt-4 prose-h2:m-0">
      <div className="flex flex-row justify-between w-full ">
        <div className="flex flex-row items-center gap-2 prose">
          <h2>{task.title}</h2>
          <span
            className={`badge ${
              task.completed ? "badge-success" : "badge-error"
            }`}
          >
            {task.completed ? "Completed" : "Not Completed"}
          </span>
          <span className={`badge ${priorityBadge(task)}`}>
            {task.priority}
          </span>
        </div>
        <ActionBtn btnSize={16} task={task} taskId={task.id} />
      </div>

      <span className="text-sm text-gray-500">
        {dateUtils.formatWithTime(task.due_date, "EEEE d MMMM yyyy - HH:mm")}
      </span>
      <p className="mt-4 prose">{task.description}</p>
      <div className="divider"></div>
    </div>
  );
}
