import { useLoaderData } from "react-router-dom";
import { priorityBadge } from "../../../../utils/priorityColors";
import { dateUtils } from "../../../../utils/dateUtils";
import ActionBtn from "../../../../components/App/UI/ActionBtn";
import { useTaskMutation } from "../../../../hooks/useTaskCompleted";
import { useState } from "react";

export default function TaskDetail() {
  const { task } = useLoaderData();

  const [tasksSee, setTasksSee] = useState([]);
  const mutation = useTaskMutation();

  const handleCompleted = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const updatedTasksSee = tasksSee.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    setTasksSee(updatedTasksSee);
    await mutation.mutateAsync(updatedTask);
    window.location.reload();
  };

  return (
    <div className="flex flex-col mt-4 prose-h2:m-0">
      <div className="flex flex-row justify-between w-full ">
        <div className="flex flex-row items-center gap-2 prose">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            defaultChecked={task.completed}
            onClick={() => handleCompleted(task)}
          />
          <h2 className={isCompleted(task.completed)}>{task.title}</h2>
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

function isCompleted(completed) {
  return completed ? "line-through" : "";
}
