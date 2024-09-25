import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTask";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { LuPlus, LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import FilterSetting from "../UI/FilterSetting";
import { useFilters } from "../../../hooks/useFilters";
import { applyFilters } from "../../../utils/tasksFilters";
import CreateNewTaskModal from "../modal/CreateNewTaskModal";
import Task from "./Task";

export const TaskGridView = () => {
  const { filters } = useFilters();

  const { fetchTasks } = useTasks();
  const [tasks, setTasks] = useState([]);
  const { token } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(token),
  });

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
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
