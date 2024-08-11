import React from "react";
import { LuActivitySquare, LuPlus } from "react-icons/lu";

const CategoryItems = ({ name, onAddCategoryClick }) => {
  return (
    <div onClick={name ? null : onAddCategoryClick}>
      {name ? (
        <div className="card bg-base-300 w-56 shadow-xl m-2 h-56">
          <div className="card-body place-content-center items-center text-center">
            <div className="card-title flex flex-col font-bold text-xl">
              <div className="text-2xl rounded-full bg-white p-3">
                <LuActivitySquare />
              </div>
              <h2>{name}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-neutral-content m-2 w-56 shadow-xl h-56 cursor-pointer border-dashed border-2 border-primary">
          <div className="card-body place-content-center items-center text-center">
            <div className="card-title flex flex-col text-primary">
              <LuPlus className="text-4xl" />
              <p className="text-xs italic">Add a new Category</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryItems;
