import { useLoaderData } from "react-router-dom";
import { dateUtils } from "../../../../utils/dateUtils";
import { priorityBadge } from "../../../../utils/priorityColors";
import ActionBtn from "../../../../components/App/UI/ActionBtn";
import { useTaskMutation } from "../../../../hooks/useTaskCompleted";
import { useState } from "react";
import SubTaskTable from "../../../../components/App/subtasksUI/SubTaskTable";
import { LuPlus } from "react-icons/lu";
import Modal from "../../../../components/App/modal/UI/Modal";
import { subtaskService } from "../../../../services/subTaskServices";
import { useAccount } from "../../../../hooks/useAccount";
import toast from "react-hot-toast";

export default function TaskDetail() {
  const { task } = useLoaderData();
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [subTaskCom, setSubTaskCom] = useState(false);
  const [isInvalide, setIsInvalide] = useState(false);

  const [tasksSee, setTasksSee] = useState([]);
  const mutation = useTaskMutation();

  const handleCompleted = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const updatedTasksSee = tasksSee.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    setTasksSee(updatedTasksSee);
    await mutation.mutateAsync(updatedTask);
    setIsCompleted(!task.completed);
  };

  const handleAddSubtask = () => {
    // Open modal to add subtask
    document.getElementById("addSubtask").showModal();
  };
  const { token } = useAccount();
  const handleSubmit = async () => {
    const title = document.getElementById("title").value;
    const subtask = { title: title, completed: subTaskCom };
    console.log(subtask);
    await subtaskService
      .createSubtask(task.id, subtask, token)
      .then(() => {
        toast.success("Subtask created successfully");
        setIsInvalide(!isInvalide);
        setTimeout(() => setIsInvalide(false), 5);
        document.getElementById("addSubtask").close();
      })
      .catch((error) => toast.error(error.message));
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
          <h2 className={`${isCompleted ? "line-through" : ""}`}>
            {task.title}
          </h2>
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
      <div className="flex flex-col gap-4">
        <div className="self-end">
          <button className="btn btn-accent" onClick={handleAddSubtask}>
            <LuPlus size={16} /> <span>Add a new subtask</span>
          </button>
          <Modal idModal="addSubtask">
            <label className="flex items-center gap-4 my-4 cursor-pointer w-fit">
              <span>Completed</span>
              <input
                id="completed"
                type="checkbox"
                className="checkbox checkbox-primary"
                defaultChecked={subTaskCom}
                onChange={() => {
                  setSubTaskCom(!subTaskCom);
                }}
              />
            </label>
            <input
              type="text"
              placeholder="Title"
              className="w-full input input-primary"
              id="title"
            />
            <div className="flex flex-row gap-2 m-4">
              <button className="btn-primary btn" onClick={handleSubmit}>
                Add
              </button>
              <button
                className="btn btn-error"
                onClick={() => {
                  document.getElementById("addSubtask").close();
                }}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
        <SubTaskTable task={task} invalide={isInvalide} />
      </div>
    </div>
  );
}
