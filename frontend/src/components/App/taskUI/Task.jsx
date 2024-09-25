import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { priorityBadge } from "../../../utils/priorityColors";
import { dateUtils } from "../../../utils/dateUtils";
import SubTaskCounter from "../subtasksUI/SubTaskCounter";

function Task(props) {
  const task = props.task;
  const [isCompleted] = useState(task.completed);

  const navigate = useNavigate();

  const handleTaskClick = (id) => {
    navigate(`/app/tasks/${id}`);
  };

  return (
    <div
      onClick={() => {
        handleTaskClick(task.id);
      }}
      key={task.id}
      className="cursor-pointer card bg-secondary"
    >
      <div className="card-body">
        <div className={`${isCompleted ? "line-through" : ""}`}>
          <div className="flex flex-row items-center gap-2">
            <h2 className="card-title">{task.title}</h2>
            <span
              className={`badge ${
                task.completed ? "badge-success" : "badge-error"
              }`}
            >
              {task.completed ? "Completed" : "Not Completed"}
            </span>
            <span className={priorityBadge(task)}>{task.priority}</span>
          </div>
          <p className="text-sm">{task.description}</p>
        </div>

        <span className="text-sm font-semibold badge badge-outline">
          {dateUtils.format(task.due_date, "EEEE d MMMM yyyy")}
        </span>
        <SubTaskCounter idTask={task.id} />
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    due_date: PropTypes.instanceOf(Date).isRequired,
    priority: PropTypes.oneOf(["Low", "Medium", "High"]).isRequired,
  }),
};

export default Task;
