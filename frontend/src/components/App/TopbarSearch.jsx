import { LuPlus, LuSearch } from "react-icons/lu";

function TopbarSearch() {
  return (
    <div className="flex flex-row justify-between gap-5 py-5">
      <div className=" grow">
        <label className="flex items-center h-full gap-2 input input-bordered">
          <input type="text" className="grow" placeholder="Search" />
          <LuSearch size={16} />
        </label>
      </div>

      <button className="btn btn-primary">
        Create <LuPlus size={16} />
      </button>
    </div>
  );
}

export default TopbarSearch;
