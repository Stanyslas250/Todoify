import { LuPencil, LuTrash } from "react-icons/lu";
import PropTypes from "prop-types";
import TaskEditModal from "../modal/TaskEditModal";
import { tasksService } from "../../../services/taskServices";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AlertModal from "@/components/ui/alertModal";

function ActionBtn(props) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const handleEdit = () => {
    document.getElementById("TaskEditModal").showModal();
  };
  const handleDelete = async () => {
    await tasksService
      .deleteTask(props.taskId, token)
      .then(toast.success("Task deleted"))
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        navigate("/app/tasks");
      });
  };
  return (
    <div className="flex flex-row gap-2">
      <button className="btn btn-outline btn-primary" onClick={handleEdit}>
        <LuPencil size={props.btnSize} />
      </button>
      <button
        className="btn btn-error"
        onClick={() => {
          document.getElementById("deletedConfirmation").showModal();
        }}
      >
        <LuTrash size={props.btnSize} />
      </button>
      <TaskEditModal task={props.task} taskId={props.taskId} />
      <AlertModal
        onClickAction={handleDelete}
        title="Task delected"
        description="Are you sure you want to delete this task?"
        Action1={"Yes"}
        Action2={"No"}
      />
    </div>
  );
}

ActionBtn.propTypes = {
  btnSize: PropTypes.number,
  task: PropTypes.object,
  taskId: PropTypes.number,
};

export default ActionBtn;
