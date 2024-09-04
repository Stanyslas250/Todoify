import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTask";
import { dateUtils } from "../../../utils/dateUtils";
import PropTypes from "prop-types";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

function TaskList({ tasksList }) {
  const [tasksSee, setTasksSee] = useState([]);
  const { updateTask } = useTasks();
  const { token } = useAuth();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["tasks"],
    mutationFn: async (task) => {
      // Update task to the server
      const response = await updateTask(task.id, task, token);
      queryClient.invalidateQueries();
      return response;
    },
    onSuccess: () => {
      toast.success("Task Completed");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleCompleted = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const updatedTasksSee = tasksSee.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    setTasksSee(updatedTasksSee);
    await mutation.mutateAsync(updatedTask, token);
  };

  useEffect(() => {
    setTasksSee(tasksList);
  }, [tasksList]);

  if (!tasksList.length) return <p>No tasks found.</p>;

  return (
    <div>
      {tasksSee.map((task) => (
        <div
          key={task.id}
          className="flex flex-row items-center justify-between p-3 rounded-lg hover:bg-accent/10"
        >
          <div
            className={`${task.completed ? " line-through " : "no-underline"}`}
          >
            <h2 className="text-lg font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <div
              className={`badge ${
                task.completed
                  ? "badge-success"
                  : dateUtils.getDaysDifference(task.due_date) < 1
                  ? "badge-error"
                  : dateUtils.getDaysDifference(task.due_date) > 3
                  ? "badge-info"
                  : "badge-warning"
              }
              `}
            >
              {task.due_date
                ? dateUtils.format(task.due_date, "EEEE d MMMM yyyy")
                : "No due date"}
            </div>
          </div>
          <input
            type="checkbox"
            checked={task.completed ? true : false}
            className="checkbox"
            onChange={() => {
              handleCompleted(task);
            }}
          />
        </div>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      due_date: PropTypes.string.isRequired,
      priority: PropTypes.oneOf(["Low", "Medium", "Hight"]),
    })
  ).isRequired,
};

export default TaskList;
