import CreateNewProjectModal from "../../components/App/modal/CreateNewProjectModal";
import { TaskGridView } from "../../components/App/taskUI/TaskGridView";
import { FilterProvider } from "../../context/FilterContext";

function Task() {
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
