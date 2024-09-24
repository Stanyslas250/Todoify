import { LuSearch } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
function SearchInput({ placeholder = "Search" }) {
  return (
    <div className="grow">
      <label className="flex items-center gap-2 md:h-full input input-bordered">
        <input type="text" className="grow" placeholder={placeholder} />
        <LuSearch size={16} />
      </label>
    </div>
  );
}

export default SearchInput;
