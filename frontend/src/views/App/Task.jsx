import { Outlet, useLocation } from "react-router-dom";
import CreateNewProjectModal from "../../components/App/modal/CreateNewProjectModal";
import { TaskGridView } from "../../components/App/taskUI/TaskGridView";
import { FilterProvider } from "../../context/FilterContext";

function Task() {
  const location = useLocation();
  const isTaskDetail = location.pathname.includes("/tasks/");

  if (isTaskDetail) return <Outlet />;

  return (
    <div>
      <FilterProvider>
        <TaskGridView />
      </FilterProvider>
      <CreateNewProjectModal />
    </div>
  );
}

export default Task;
