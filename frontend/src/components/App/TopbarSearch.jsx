import { LuPlus, LuSearch } from "react-icons/lu";

function TopbarSearch() {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div className=" grow">
        <label className="flex items-center gap-2 md:h-full input input-bordered">
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
