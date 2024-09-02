import { LuPlus, LuSearch } from "react-icons/lu";
import CreateModal from "./modal/CreateModal";
import AddCard from "../AddCard";

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
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Create <LuPlus size={16} />
      </button>
      <CreateModal idModal="my_modal_3">
        <AddCard message="Add New Project" />
        <AddCard message="Add New Tasks" />
      </CreateModal>
    </div>
  );
}

export default TopbarSearch;
