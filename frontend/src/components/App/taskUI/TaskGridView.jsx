import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTask";
import { dateUtils } from "../../../utils/dateUtils";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { LuPlus, LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import { useTaskMutation } from "../../../hooks/useTaskCompleted";
import FilterSetting from "../UI/FilterSetting";
import { useFilters } from "../../../hooks/useFilters";
import { applyFilters } from "../../../utils/tasksFilters";
import CreateNewTaskModal from "../modal/CreateNewTaskModal";
import { useNavigate } from "react-router-dom";

export const TaskGridView = () => {
  const { filters } = useFilters();
  const navigate = useNavigate();

  const { fetchTasks } = useTasks();
  const [tasks, setTasks] = useState([]);
  const { token } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(token),
  });

  const [tasksSee, setTasksSee] = useState([]);
  const mutation = useTaskMutation();

  const handleCompleted = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const updatedTasksSee = tasksSee.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    setTasksSee(updatedTasksSee);
    await mutation.mutateAsync(updatedTask);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredTasks = data.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks(filteredTasks);
  };

  const handleCreateTask = () => {
    document.getElementById("create_task").showModal();
  };

  const handleTaskClick = (id) => {
    navigate(`/app/tasks/${id}`);
  };

  useEffect(() => {
    if (data) {
      const filteredTasks = applyFilters(data, filters);
      setTasks(filteredTasks);
    }
  }, [data, filters]);

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div className="flex flex-col h-screen gap-4">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <label className="flex items-center w-full gap-2 input input-bordered input-primary">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={handleSearch}
          />
          <LuSearch size={20} />
        </label>
      </div>
      <div className="pt-4">
        <div className="flex flex-row items-center justify-end w-full gap-2">
          <button className="btn btn-primary" onClick={handleCreateTask}>
            <LuPlus size={20} /> Create New Task
          </button>
          <FilterSetting
            icon={<LuSlidersHorizontal size={16} />}
            otherFilters={true}
            sortOptions={false}
            className="btn-outline btn-accent"
          />
        </div>
        <CreateNewTaskModal />
        <div className="mt-0 divider"></div>
      </div>
      <div className="flex flex-col gap-4 overflow-y-scroll md:grid md:grid-cols-2">
        {tasks.map((task) => (
          <div
            onClick={() => {
              handleTaskClick(task.id);
            }}
            key={task.id}
            className="cursor-pointer card bg-secondary"
          >
            <div className="card-body">
              <div className={isCompleted(task)}>
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    defaultChecked={task.completed}
                    onClick={() => handleCompleted(task)}
                  />
                  <h2 className="card-title">{task.title}</h2>
                  <span className={priorityBadge(task)}>{task.priority}</span>
                </div>
                <p className="text-sm">{task.description}</p>
              </div>

              <span className="text-sm font-semibold badge badge-outline">
                {dateUtils.format(task.due_date, "EEEE d MMMM yyyy")}
              </span>
              <span className="text-sm">10 subtasks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
function priorityBadge(task) {
  return `badge ${
    task.priority === "Low"
      ? "badge-info"
      : task.priority === "Medium"
      ? "badge-warning"
      : "badge-error"
  }`;
}

function isCompleted(task) {
  return task.completed ? "line-through" : "";
}
