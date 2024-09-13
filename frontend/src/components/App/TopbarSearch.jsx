import { LuPlus, LuSearch } from "react-icons/lu";
import CreateModal from "./modal/CreateModal";
import AddCard from "../AddCard";
import CreateNewTaskModal from "./modal/CreateNewTaskModal";
import CreateNewProjectModal from "./modal/CreateNewProjectModal";

function TopbarSearch() {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div className=" grow">
        <label className="flex items-center gap-2 md:h-full input input-bordered">
          <input type="text" className="grow" placeholder="Search" />
          <LuSearch size={16} />
        </label>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("create_modal").showModal()}
      >
        Create <LuPlus size={16} />
      </button>
      <CreateModal idModal="create_modal">
        <AddCard
          message="Add New Project"
          onClick={() =>
            document.getElementById("create-new-project-modal").showModal()
          }
        />
        <CreateNewTaskModal />
        <CreateNewProjectModal />
        <AddCard
          message="Add New Tasks"
          onClick={() => document.getElementById("create_task").showModal()}
        />
      </CreateModal>
    </div>
  );
}

export default TopbarSearch;
